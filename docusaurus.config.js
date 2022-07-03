// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const baseUrl = process.env.BASE_URL || "/";

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/iamrahultanwar/me/tree/master',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learning is the key',
  tagline: 'The best way to grow is learning',
  url: 'https://rahultanwar.me',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  organizationName: 'iamrahultanwar',
  projectName: 'me',
  deploymentBranch: "deploy",
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: `${baseUrl}manifest.json`,
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#4433ff',
          },
        ],
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebar/autogen.js'),

          editUrl:
            'https://github.com/iamrahultanwar/me/tree/master',
        },
        blog: {
          showReadingTime: true,

          editUrl:
            'https://github.com/iamrahultanwar/me',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🙂  I love to write and document my learning and prepare notes for future. <b>This site is hosted on github pages, if any issue faced raise an issue here <a href="https://github.com/iamrahultanwar/me/issues">Github Issues</a></b>',
        backgroundColor: '#fafbfc',
        textColor: '#4433ff',
        isCloseable: false,
      },
      navbar: {
        title: 'Lets Learn',
        logo: {
          alt: 'name logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Notes',
            position: 'left',
            items: [
              { to: '/docs/dsa/', label: 'Data Structure' },
              { to: '/docs/algorithm/', label: 'Algorithm' },
              { to: '/docs/questions/', label: 'Questions' },
              { to: '/docs/languages/', label: 'Languages' },
            ]
          },

          {
            type: 'dropdown',
            label: 'Free Books',
            position: 'left',
            items: [
              { to: '/books/algorithms', label: 'Algorithms' },
            ]
          },
          {
            type: 'dropdown',
            label: 'My Projects',
            position: 'left',
            items: [
              { to: '/docs/projects/hydyco/intro', label: 'Hydyco' }
            ]
          },



          {
            href: 'https://github.com/iamrahultanwar',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: baseUrl + '/file/rahul-tanwar-resume.pdf',
            label: 'My Resume',
            position: 'right',
            className: 'css-button-sharp--sky',
          },

        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
