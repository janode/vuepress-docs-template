module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Read the docs',
      description: 'Go beyond static'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'docs',
            link: '/docs/'
          }
        ],
        sidebar: [
          '/docs/',
          genSidebarConfig('', 'API')
        ]
      }
    }
  }
}

function genSidebarConfig (lang, title) {
  return {
    title: `${title}`, 
    children: [
      `${lang}/docs/api/page-one`,
      `${lang}/docs/api/page-two`,
    ] 
  }
}