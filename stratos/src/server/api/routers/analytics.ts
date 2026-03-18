import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const analyticsRouter = createTRPCRouter({
  getStats: protectedProcedure.query(({ ctx }) => {
    return ctx.db.analytics.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { date: "desc" },
      take: 7,
    });
  }),
});
