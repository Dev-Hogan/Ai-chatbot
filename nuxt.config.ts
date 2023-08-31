// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/main.css"],
	runtimeConfig: {
		// OPENAI_API_KEY: process.env.OPENAI_API_KEY
		OPENAI_API_KEY: "app-1xiijoJnG2EtFpF57wLIx9J2",
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
