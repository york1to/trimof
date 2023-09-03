// noinspection JSUnusedGlobalSymbols

import DefaultTheme from "vitepress/theme";
import "./style/theme.css";
import "./style/font.css";
import "./style/vars.css";
import "./style/global.css";

console.log("Code licensed under MIT, Text Content under CC BY-SA 4.0");

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  }
};
