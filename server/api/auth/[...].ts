import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
    // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID || "enter-your-client-id-here",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "enter-your-client-secret-here", // TODO: Replace this with an env var like "process.env.GITHUB_CLIENT_SECRET". The secret should never end up in your github repository
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        DiscordProvider.default({
            clientId: process.env.DISCORD_CLIENT_ID || "enter-your-client-id-here",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || "enter-your-client-secret-here",
        }),
    ],
});
