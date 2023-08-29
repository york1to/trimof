import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "📖 Notes",
    items: [
      { text: "Index", link: "/notes/" },
      {
        text: "Maths", link: "/notes/maths"
      },
      {
        text: "CS", link: "/notes/CS"
      },
      {
        text: "Control", link: "/notes/control_theory"
      },
      {
        text: "EE", link: "/notes/EE"
      },
      {
        text: "Robotics", link: "/notes/EE"
      }
    ]
  },
  {
    text: "⛩️ Blogs",
    items: [
      { text: "Index", link: "/blogs/" },
      {
        text: "Maths",
        items: [
          { text: "Calculus", link: "/notes/maths/calculus/calculus" },
          { text: "Linear Algebra", link: "/notes/maths/linear_algebra/linear_algebra"}
        ]
      },
      {
        text: "Computer Science",
        items: [
          { text: "C++", link: "/notes/maths/calculus/calculus" },
          { text: "Linux", link: "/notes/maths/linear_algebra/linear_algebra"}
        ]
      }
    ]
  },
  {
    text: "⛵️ Documentations",
    items: [
      { text: "Index", link: "/documentations/" }
    ]
  },
  {
    text: "⚙️ Projects",
    items: [
      { text: "Index", link: "/projects/" },
      {
        text: "Robomaster Navigation in ROS2",
        items: [
          { text: "Calculus", link: "/notes/maths/calculus/calculus" },
          { text: "Linear Algebra", link: "/notes/maths/linear_algebra/linear_algebra"}
        ]
      },
      {
        text: "Matrix Multiplication acceleration",
        items: [
          { text: "C++", link: "/notes/maths/calculus/calculus" },
          { text: "Linux", link: "/notes/maths/linear_algebra/linear_algebra"}
        ]
      }
    ]
  },
  {
    text: "About",
    items: [
      { text: "Index", link: "/about/index.md" }
    ]
  }
];

export default navConfig;