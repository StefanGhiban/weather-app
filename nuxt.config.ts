// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@sidebase/nuxt-auth", "@nuxtjs/tailwindcss", "@nuxt/devtools", "nuxt-lodash"],

    auth: {
        provider: {
            type: "authjs",
        },
    },

    build: {
        transpile: ["trpc-nuxt"],
    },

    typescript: {
        shim: false,
    },

    devtools: {
        enabled: true,
    },
});
