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
    ],
    require.resolve("@cmfcmf/docusaurus-search-local")
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebar/autogen.js'),
          ...pageOptions
        },
        blog: false,
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
              { to: 'docs/algorithm/', label: 'Algorithm' },
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
