module.exports = {
    title: "Javascript [ITR]",
    tagline: "Javascript tutorial for ITR",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    favicon: "/img/logo.svg",
    organizationName: "ITR", // Usually your GitHub org/user name.
    projectName: "Javascript [ITR]", // Usually your repo name.
    themeConfig: {
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            // darkTheme: require("prism-react-renderer/themes/dracula"),
        },
        navbar: {
            title: "You dont know JS",
            logo: {
                alt: "Javascript [ITR]",
                src: "/img/logo.svg",
            },
            links: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                {
                    href: "https://github.com/VLZH/itr-js-course/",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} https://github/VLZH. Built with Docusaurus🦖.`,
        },
        algolia: {
            apiKey: "09b09ff88c1bdeb54ba45a0f76db60b0",
            indexName: "javascript-courser",
            appId: "LLSC0F76HG", // Optional, if you run the DocSearch crawler on your own
            algoliaOptions: {}, // Optional, if provided by Algolia
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    homePageId: "main",
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/vlzh/itr-js-course/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    themes: ["@docusaurus/theme-live-codeblock"],
    plugins: ["@docusaurus/plugin-ideal-image"],
    stylesheets: [
        "antd/es/timeline/css/index.css"
    ]
};
