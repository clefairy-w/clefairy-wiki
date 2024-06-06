import {defineConfig} from 'vitepress'
import nav from "./config/nav.mjs";
import sidebar from "./config/sidebar.mjs";

// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "爱做梦的皮皮檬  🧙",
  description: "knowledge magician",
  // lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',

    lastUpdated: {
      text: '最后更新',
    },

    editLink: {
      pattern: '/',
      text:'爱做梦的皮皮檬'
    },

    outline: {
      level: 'deep',
      label: '本页目录'
    },

    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clefairy-w/clefairy-wiki' }
    ],



    footer: {
      copyright: '基于 MIT 许可发布 | Copyright © 2019-present 爱做梦的皮皮檬 🧙 ｜ <a href="https://beian.miit.gov.cn">陕ICP备17020172号-2</a >'
    },

    returnToTopLabel: '返回顶部',
  }
})


