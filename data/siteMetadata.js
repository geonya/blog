const siteMetadata = {
	title: "Geony's Blog",
	author: "Geony",
	headerTitle: "Geony's Blog",
	description: "Learning & Building",
	language: "en-us",
	theme: "system", // system, dark or light
	siteUrl: "https://blog-geonya.vercel.app/",
	siteRepo: "https://github.com/geonya/blog",
	siteLogo: "/static/images/logo.png",
	image: "/static/images/avatar.png",
	socialBanner: "/static/images/time-machine.jpg",
	email: "geony8410@gmail.com",
	github: "https://github.com/geonya",
	twitter: "https://twitter.com/Twitter",
	facebook: "https://facebook.com",
	youtube: "https://youtube.com/geony8410",
	linkedin: "https://www.linkedin.com/geony8410",
	locale: "en-US",
	analytics: {
		// If you want to use an analytics provider you have to add it to the
		// content security policy in the `next.config.js` file.
		// supports plausible, simpleAnalytics, umami or googleAnalytics
		plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
		simpleAnalytics: false, // true or false
		umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
		googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
	},
	newsletter: {
		// supports mailchimp, buttondown, convertkit, klaviyo, revue
		// Please add your .env file and modify it according to your selection
		provider: "buttondown",
	},
	comment: {
		provider: "giscus",
	},
};

module.exports = siteMetadata;
