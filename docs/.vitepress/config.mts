import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: "TRIZ",
  //description: "成立于XXXX年",
  themeConfig: {
    //siteTitle: 'My Custom Title',
    logo: '/triz.png',
    //{light: '/triz_logo.png',
    //dark: '/re_triz_logo.png',
   // alt: 'triz_logo.png'},
    nav: [
      { text: 'Home', link: '/' },
      { text: '招新安排', link: '/new_members/join_us_2024' },
      {
        text: '关于我们',
        items: [
          { text: 'TRIZ介绍', link: '/people/know_more_2024' },
          { text: '团队成果', link: '/people/achievements_2024' },
          { text: '相册记忆', link: '/people/pictures_2024' }
        ]
      },
      // {
      //   text: 'Affair',
      //   items: [
      //     { text: 'Competition', link: '/affair/competition' },
      //     { text: 'Annunciation', link: '/affair/annunciation' }
      //   ]
      // }
    ],
    sidebar: {
      '/new_members/':[{
        text: '招新安排',
        items: [
         {text :'2024',link: '/new_members/join_us_2024'},
         {text :'2023',link: '/new_members/join_us_2023'}
        ]
      }
      ],
      '/people/':[{
        text: '关于我们',
        items: [
          { text: 'TRIZ介绍', link: '/people/know_more_2024' },
          { text: '团队成果', link: '/people/achievements_2024' },
          { text: '相册记忆', link: '/people/pictures_2024' }
        ]
      }
      ],
      // '/affair/':[{
      //   text: 'Affair',
      //   items: [
      //     {text :'Competition',link: '/affair/competition'},
      //     {text :'Annunciation',link: '/affair/annunciation'}
      //   ]
      // }
      // ]
    },
    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
    footer: {
      message: '© 2024 TRIZ',
      copyright: '地址：六号教学楼三楼'
    }
  }
})
