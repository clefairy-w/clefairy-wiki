import {DefaultTheme, defineConfig} from 'vitepress'
import nav from "./config/nav.mjs";
import sidebar from "./config/sidebar.mjs";

// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "爱做梦的皮皮檬  🧙",
  description: "knowledge magician",
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',

    outline: {
      level: 'deep',
      label: '本页目录'
    },

    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clefairy-w/clefairy-wiki' }
    ],

    editLink: {
      pattern: '',
      text: ''
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2018-present 爱做梦的皮皮檬'
    },

    returnToTopLabel: '返回顶部',
  }
})


