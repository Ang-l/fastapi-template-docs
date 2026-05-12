import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "fastapi template docs",
  description: "A fastapi template docs",

  base: '/fastapi-template-docs/', 

  themeConfig: {
    lastUpdated: {
      text: '最后更新于', // 前面的提示文字
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '什么是 fastapi-template?', link: '/fastapi-template-is' },
          { text: '快速开始', link: '/getting-started' },
          { text: '配置', link: '/configuration' },
        ]

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ang-l/fast-template' }
    ],
    outline: [2, 3]
  }
})
