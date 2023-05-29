import { router } from "../trpc";
import { exampleRouter } from "./exampleRouter";
import { helloRouter } from "./helloRouter";

export const appRouter = router({
    hello: helloRouter,
    example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
