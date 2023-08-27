import { DefaultTheme } from "vitepress";
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

const sidebarConfig:DefaultTheme.Sidebar = {
  "/notes/": getSidebar({ contentRoot: '/docs/', contentDirs: ['notes'], collapsible: false, collapsed: false }),
  "/blogs/": getSidebar({ contentRoot: '/docs/', contentDirs: ['blogs'], collapsible: false, collapsed: false}),
  "/documents/": getSidebar({ contentRoot: '/docs/', contentDirs: ['documentations'], collapsible: false, collapsed: false}),
  "/projects/": getSidebar({ contentRoot: '/docs/', contentDirs: ['projects'], collapsible: false, collapsed: false }),
}
export default sidebarConfig;