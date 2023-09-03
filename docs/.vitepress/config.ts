import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'
import markdownItTextualUml from 'markdown-it-textual-uml'
import markdownItKatex from 'markdown-it-katex'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "trimof",
  description: "trimof is yorkito",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        href: "/og.svg",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: "York1to",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Home",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Home of trimof",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:[
      {
        text: "📖 Notes",
        items: [
          {
            text: "Maths", link: "/notes/Maths/An Introduction.md"
          },
          {
            text: "CS", link: "/notes/CS/An Introduction.md"
          },
          {
            text: "Control", link: "/notes/Control/An Introduction.md"
          },
          {
            text: "EE", link: "/notes/EE/An Introduction.md"
          },
          {
            text: "Robotics", link: "/notes/Robotics/An Introduction.md"
          }
        ]
      },
      {
        text: "⛩️ Blogs",
        items: [
          { text: "Animes", link: "/blogs/Animes/An Introduction.md" },
          { text: "Mangas", link: "/blogs/Mangas/An Introduction.md" },
          { text: "Movies", link: "/blogs/Movies/An Introduction.md" },
          { text: "Whatever", link: "/blogs/Whatever/An Introduction.md" }
        ]
      },
      {
        text: "⚙️ Projects",
        items: [
          { text: "Competitions", link: "/projects/Competitions/An Introduction.md" },
          { text: "Course Projects", link: "/projects/Course Projects/An Introduction.md" },
          { text: "Projects", link: "/projects/Projects/An Introduction.md" }
        ]
      },
      {
        text: "About",
        link:"/about/About.md"
      }
    ],

    sidebar: {
      "/notes/": getSidebar({ contentRoot: '/docs/', contentDirs: ['notes'], collapsible: false, collapsed: false }),
      "/blogs/": getSidebar({ contentRoot: '/docs/', contentDirs: ['blogs'], collapsible: false, collapsed: false}),
      "/projects/": getSidebar({ contentRoot: '/docs/', contentDirs: ['projects'], collapsible: false, collapsed: false }),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/york1to/trimof' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20"  viewBox="0 0 512 512" >
        <path fill="currentColor" d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0s16.1 2.868 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0c8.8 0 16.1 2.868 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1zm-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8c6.3-6.5 9.7-14.3 10.1-23.5V173.8zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5c-9.6 0-17.5-3.2-23.6-9.5c-6.1-6.3-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2c6.3-6.3 13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10zm191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.1 6.3-14 9.5-23.6 9.5c-9.6 0-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2c6.3-6.3 14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10z"></path>
      </svg>`,
        },
        link: 'https://space.bilibili.com/12215181',
      }
    ],

    search: {
      provider: 'local'
    },
    
    footer: {
      message:
        "Code licensed under MIT, documentation under <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY-SA 4.0</a>."
    },
  },

  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
      md.use(markdownItTextualUml)
    }
  },

  lastUpdated: true,

})


