const shared = {
	title: "政剣マニフェスティアオンリーイベント2018 公式サイト",
	description: "政剣マニフェスティアオンリーイベント2018の公式サイトです",
	image: "ogp_icon.jpg",
	favicon: "favicon.ico",
	origin: (process.env.NODE_ENV === "develop") ? `http://localhost${(process.env.PORT ? `:${process.env.PORT}` : "3000")}/` : "https://festia.moe/",
};

module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: "",
		titleTemplate(subTitle) {
			// vue-metaはクソ
			const title = "政剣マニフェスティアオンリーイベント2018 公式サイト";
			return (subTitle) ? `${title} - ${subTitle}` : title;
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "google", content: "notranslate" },
			{ property: "og:type", content: "website" },
			{ property: "og:locale", content: "ja_JP" },
			{ property: "og:title", content: shared.title },
			{ property: "og:site_name", content: shared.title },
			{ property: "og:url", content: shared.origin },
			{ property: "og:description", content: shared.description },
			{ property: "og:image", content: `${shared.origin}${shared.image}` },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:title", content: shared.title },
			{ name: "twitter:image", content: `${shared.origin}${shared.image}` },
			{ name: "twitter:description", content: shared.description },
			{ hid: "description", name: "description", content: shared.description },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: `${shared.origin}${shared.favicon}` },
			{ rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css" },
		],
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: "#3B8070" },
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend(config, ctx) {
			if(ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/,
				});
			}
		},
	},
};
