import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [
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
    text: "⛵️ Documentations",
    items: [
      { text: "CS", link: "/documentations/CS.md" }
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
];

export default navConfig;