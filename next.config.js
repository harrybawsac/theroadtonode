// const withNextra = require("nextra")({
// 	theme: "nextra-theme-docs",
// 	themeConfig: "./theme.config.js",
// 	unstable_staticImage: true,
// 	i18n: {
// 		locales: ['en', 'nl'],
// 		defaultLocale: 'en',
// 	},
// });

// module.exports = withNextra();

const withNextra = require("nextra")("nextra-theme-docs", "./theme.config.js");

module.exports = withNextra({
	unstable_staticImage: true,
	i18n: {
		locales: ['en', 'nl'],
		defaultLocale: 'en'
	}
});
