import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "@/server/api/routers/auth";
import { plannerRouter } from "@/server/api/routers/planner";
import { analyticsRouter } from "@/server/api/routers/analytics";
import { aiRouter } from "@/server/api/routers/ai";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  planner: plannerRouter,
  analytics: analyticsRouter,
  ai: aiRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
