const fs = require('fs'), path = require('path');

function dirTree(filename) {
    const stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };
    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function (child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        info.type = "file";
    }
    return info;
}




const rootDocs = dirTree('/Users/rt/projects/me/docs')


// {
//     siteDir: '/Users/rt/projects/me',
//     generatedFilesDir: '/Users/rt/projects/me/.docusaurus',
//     siteConfig: {
//       title: 'Learning is the key',
//       tagline: 'The best way to grow is learning',
//       url: 'https://rahultanwar.me',
//       baseUrl: '/',
//       onBrokenLinks: 'warn',
//       onBrokenMarkdownLinks: 'warn',
//       favicon: 'img/favicon.ico',
//       organizationName: 'iamrahultanwar',
//       projectName: 'me',
//       deploymentBranch: 'deploy',
//       plugins: [
//         '/Users/rt/projects/me/node_modules/@cmfcmf/docusaurus-search-local/lib/server/index.js',
//         '/Users/rt/projects/me/plugins/inappeditor/index.js',
//         [Array]
//       ],
//       presets: [ [Array] ],
//       themeConfig: {
//         navbar: [Object],
//         prism: [Object],
//         colorMode: [Object],
//         docs: [Object],
//         metadata: [],
//         tableOfContents: [Object]
//       },
//       baseUrlIssueBanner: true,
//       i18n: { defaultLocale: 'en', locales: [Array], localeConfigs: {} },
//       onDuplicateRoutes: 'warn',
//       staticDirectories: [ 'static' ],
//       customFields: {},
//       themes: [],
//       scripts: [],
//       stylesheets: [],
//       clientModules: [],
//       titleDelimiter: '|',
//       noIndex: false
//     },
//     siteConfigPath: '/Users/rt/projects/me/docusaurus.config.js',
//     outDir: '/Users/rt/projects/me/build',
//     baseUrl: '/',
//     i18n: {
//       defaultLocale: 'en',
//       locales: [ 'en' ],
//       currentLocale: 'en',
//       localeConfigs: { en: [Object] }
//     },
//     codeTranslations: {}
//   }