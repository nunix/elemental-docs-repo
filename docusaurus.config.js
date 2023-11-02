// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elemental - Immutable Linux for Rancher',
  url: 'https://rancher.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rancher', // Usually your GitHub org/user name.
  projectName: 'elemental-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

    presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          include: ['**/*.md', '**/*.mdx'],
          versions: {
            current: {
              label: 'Next 🚧',
              badge: false,
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-57KS2MW',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'QLF01IU46G',
        apiKey: '6399abce2893cd405e6b53acf2667f51',
        indexName: 'elemental',
        contextualSearch: true,
      },
      navbar: {
        title: 'Elemental',
        logo: {
          alt: 'Elemental - Immutable Linux for Rancher',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/rancher/elemental',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://rancher-users.slack.com/channels/elemental',
            position: 'right',
            className: 'header-slack-link',
            'aria-label': 'Slack Channel',
          },
          {
            type: 'dropdown',
            label: 'More From SUSE',
            position: 'right',
            items: [
              {
                label: 'Rancher',
                to: 'https://www.rancher.com',
                className: 'navbar__icon navbar__rancher',
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                label: 'Epinio',
                to: "http://epinio.io",
                className: 'navbar__icon navbar__epinio',
              },
              {
                label: 'Fleet',
                to: "http://fleet.rancher.io",
                className: 'navbar__icon navbar__fleet',
              },
              {
                label: 'Harvester',
                to: "http://harvesterhci.io",
                className: 'navbar__icon navbar__harvester',
              },
              {
                label: 'Rancher Desktop',
                to: "https://rancherdesktop.io",
                className: 'navbar__icon navbar__rd',
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                label: 'More Projects...',
                to: "https://opensource.suse.com",
                className: 'navbar__icon navbar__suse',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Elemental',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack #elemental',
                href: 'https://rancher-users.slack.com/channels/elemental',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Elemental Toolkit',
                href: 'https://rancher.github.io/elemental-toolkit',
              },
              {
                label: 'Elemental Operator',
                href: 'https://github.com/rancher/elemental-operator',
              },
              {
                label: 'Elemental CLI',
                href: 'https://github.com/rancher/elemental-cli',
              },
              {
                label: 'Rancher System Agent',
                href: 'https://github.com/rancher/system-agent',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['docker'],
      },
    }),
};

module.exports = config;
