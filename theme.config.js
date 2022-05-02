export default {
	github: "https://github.com/harrybawsac/theroadtonode",
	docsRepositoryBase: "https://github.com/harrybawsac/theroadtonode/blob/master",
	titleSuffix: " – The Road to Node",
	i18n: [
		{ locale: 'en', text: 'English' },
		{ locale: 'nl', text: 'Dutch' }
	],
	logo: (
		<>
			<span className="mr-2 font-extrabold hidden md:inline">The Road to Node</span>
			<span className="text-gray-600 font-normal hidden md:inline">
				A thorough guide for making your own Bitcoin and Lightning node
			</span>
		</>
	),
	head: (
		<>
			<meta charset="utf-8"></meta>
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="color-scheme" content="dark light" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Language" content="en, nl" />
			<meta name="description" content="A thorough guide for making your own Bitcoin and Lightning node" />
			<meta name="og:description" content="A thorough guide for making your own Bitcoin and Lightning node" />
			<meta name="og:title" content="The Road to Node" />
			<meta name="og:image" content="https://theroadtonode.com/thermal-paste.png" />
			<meta name="og:url" content="https://theroadtonode.com" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:image" content="https://theroadtonode.com/thermal-paste.png" />
			<meta name="twitter:site:domain" content="https://theroadtonode.com" />
			<meta name="twitter:url" content="https://theroadtonode.com" />
			<meta name="apple-mobile-web-app-title" content="The Road to Node" />
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/favicon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
		</>
	),
	search: true,
	prevLinks: true,
	nextLinks: true,
	footer: true,
	footerEditLink: "Edit this page on GitHub",
	footerText: <>{new Date().getFullYear()} © The Road to Node.</>,
	floatTOC: true,
	defaultMenuCollapsed: true
}
