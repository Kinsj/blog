module.exports = {
  title: '老Kin的博客',
  description: 'Just playing around',
  base: '/blog/',
  head: [  // 注入到当前的HTML <head> 中
    ['link', {rel: 'icon', href: '/avatar.png'}], // 自定义icon
  ],
  themeConfig: {
    logo: '/avatar.png',  // 左上角logo
    nav: [ // 导航配置
      {text: '首页', link: '/' },
      {text: '技术文档', link: '/tech/interview'},
    ],
    sidebar: 'auto', // 侧边栏配置
  }
};