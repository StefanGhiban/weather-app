// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@sidebase/nuxt-auth", "@nuxt/devtools", "nuxt-lodash", "@nuxthq/ui"],

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

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                },
            ],
        },
    },
});
