import { defineConfig } from "vitepress";
import themeConfig from "./theme";
import head from "./head";
import { DESCRIPTION as description, TITLE as title } from "./info";
import markdownItKatex from 'markdown-it-katex'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

const links = []
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  description,
  head,
  ignoreDeadLinks: true, // TODO: remove this line when all links are fixed
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  themeConfig,
  title,

  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },

  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://trimof.com/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
});

