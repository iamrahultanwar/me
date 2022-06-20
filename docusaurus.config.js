// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const baseUrl = process.env.BASE_URL || "/";

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
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],

  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl:
            'https://github.com/iamrahultanwar/me',
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
      navbar: {
        title: 'Rahul Tanwar',
        logo: {
          alt: 'name logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/docs/dsa/', label: 'DSA', position: 'right' },
          { to: 'docs/algorithm/', label: 'Algorithm', position: 'right' },
          {
            href: 'https://github.com/iamrahultanwar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'light',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
