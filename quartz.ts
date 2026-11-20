import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const SKIP_TAGS = new Set([
  "script",
  "style",
  "svg",
  "math",
  "mjx-container",
  "textarea",
  "noscript",
  "template",
])

const BLOCK_CONTAINERS = new Set([
  "root",
  "ul",
  "ol",
  "dl",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "colgroup",
  "figure",
  "blockquote",
  "div",
])

function splitWhitespaceText(value: string): any[] {
  const nodes: any[] = []
  let buf = ""

  const flush = () => {
    if (buf) {
      nodes.push({ type: "text", value: buf })
      buf = ""
    }
  }

  for (const ch of value) {
    if (ch === " " || ch === "\u00A0") {
      flush()
      nodes.push({
        type: "element",
        tagName: "span",
        properties: { className: ["ws-sp"] },
        children: [{ type: "text", value: ch }],
      })
    } else if (ch === "\t" || ch === "\uE000") {
      flush()
      nodes.push({
        type: "element",
        tagName: "span",
        properties: { className: ["ws-tab"] },
        children: [{ type: "text", value: "\t" }],
      })
    } else {
      buf += ch
    }
  }

  flush()
  return nodes
}

function highlightWhitespaceTree(node: any): void {
  if (!Array.isArray(node.children)) return

  const parentTag = node.type === "root" ? "root" : node.tagName
  const isBlockContainer = BLOCK_CONTAINERS.has(parentTag)
  const nextChildren: any[] = []

  for (const child of node.children) {
    if (child.type === "text" && typeof child.value === "string") {
      const hasWs = /[ \u00A0\t\uE000]/.test(child.value)
      const isFormattingOnly = isBlockContainer && /^[ \t\r\n]+$/.test(child.value)
      if (hasWs && !isFormattingOnly) {
        nextChildren.push(...splitWhitespaceText(child.value))
      } else {
        nextChildren.push(child)
      }
      continue
    }

    if (child.type === "element") {
      const classes = Array.isArray(child.properties?.className) ? child.properties.className : []
      if (
        !SKIP_TAGS.has(child.tagName) &&
        !classes.includes("katex") &&
        !classes.includes("math") &&
        !classes.includes("ws-sp") &&
        !classes.includes("ws-tab")
      ) {
        highlightWhitespaceTree(child)
      }
    }
    nextChildren.push(child)
  }

  node.children = nextChildren
}

function preserveLineWhitespace(line: string): string {
  const listMatch = line.match(/^[ \t]*(?:[-*+]|\d+[.)])\s+/)
  const headingMatch = line.match(/^[ \t]*#{1,6}[ \t]/)
  const quoteMatch = line.match(/^(?:[ \t]*>[ \t]?)+/)
  const isTable = /^[ \t]*\|/.test(line)
  const isHtmlLine = /^[ \t]*</.test(line)

  let prefix = ""
  let rest = line

  if (listMatch) {
    prefix = listMatch[0]
    rest = line.slice(prefix.length)
  } else if (headingMatch) {
    prefix = headingMatch[0]
    rest = line.slice(prefix.length)
  } else if (quoteMatch) {
    prefix = quoteMatch[0]
    rest = line.slice(prefix.length)
  }

  if (!listMatch && !isTable && !isHtmlLine) {
    const leading = rest.match(/^[ \t]+/)
    if (leading) {
      prefix += leading[0].replace(/\t/g, "\uE000").replace(/ /g, "\u00A0")
      rest = rest.slice(leading[0].length)
    }
  }

  let out = ""
  let i = 0
  while (i < rest.length) {
    if (rest[i] === "`" && rest[i - 1] !== "\\") {
      let ticks = 1
      while (rest[i + ticks] === "`") ticks++
      const close = rest.indexOf("`".repeat(ticks), i + ticks)
      if (close !== -1) {
        out += rest.slice(i, close + ticks)
        i = close + ticks
        continue
      }
    }

    if (rest[i] === "$" && rest[i - 1] !== "\\") {
      const close = rest.indexOf("$", i + 1)
      if (close !== -1 && rest[i + 1] !== "$") {
        out += rest.slice(i, close + 1)
        i = close + 1
        continue
      }
    }

	if (rest[i] === "\t") {
      out += "\uE000"
      i++
      continue
    }

    if (rest[i] === " " && rest[i + 1] === " ") {
      let end = i + 2
      while (rest[end] === " ") end++
      // Keep trailing spaces intact for Markdown hard breaks (`  \n`)
      out += end === rest.length ? rest.slice(i) : "\u00A0".repeat(end - i - 1) + " "
      i = end
      continue
    }

    out += rest[i]
    i++
  }

  return prefix + out
}

function preserveWhitespace(src: string): string {
  const lines = src.replace(/\r\n/g, "\n").split("\n")
  let inFrontmatter = false
  let fence: { char: string; len: number } | null = null
  let inMathBlock = false

  return lines
    .map((line, idx) => {
      if (idx === 0 && /^---\s*$/.test(line)) {
        inFrontmatter = true
        return line
      }
      if (inFrontmatter) {
        if (/^(?:---|\.\.\.)\s*$/.test(line)) inFrontmatter = false
        return line
      }

      const fenceMatch = line.match(/^[ \t]{0,3}(`{3,}|~{3,})/)
      if (fenceMatch) {
        const marker = fenceMatch[1]
        if (!fence) {
          fence = { char: marker[0], len: marker.length }
          return line
        }
        if (
          marker[0] === fence.char &&
          marker.length >= fence.len &&
          /^[ \t]*$/.test(line.slice(fenceMatch[0].length))
        ) {
          fence = null
          return line
        }
      }
      if (fence) return line

      if (/^[ \t]*\$\$\s*$/.test(line)) {
        inMathBlock = !inMathBlock
        return line
      }
      if (inMathBlock) return line

      return preserveLineWhitespace(line)
    })
    .join("\n")
}

const config = await loadQuartzConfig()
config.plugins.transformers.push({
  name: "PreserveWhitespace",
  textTransform(_ctx, src) {
    return preserveWhitespace(src)
  },
  htmlPlugins() {
    return [() => (tree: any) => highlightWhitespaceTree(tree)]
  },
})

export default config
export const layout = await loadQuartzLayout()
