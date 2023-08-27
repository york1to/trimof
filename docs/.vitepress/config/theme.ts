import type { DefaultTheme } from "vitepress";
import algolia from "./algolia";
import nav from "./nav";
import sidebar from "./sidebar";
import { getSidebar } from 'vitepress-plugin-auto-sidebar'
import { LOGO as logo, REPO } from "./info";

const themeConfig: DefaultTheme.Config = {
  algolia,
  footer: {
    message:
      "Code licensed under MIT, documentation under <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY-SA 4.0</a>."
  },
  logo,
  nav,
  sidebar,
  siteTitle: false,
  socialLinks: [
    { icon: "github", link: REPO }
  ]
};

export default themeConfig;
