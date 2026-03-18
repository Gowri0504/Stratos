import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const plannerRouter = createTRPCRouter({
  getSubjects: protectedProcedure.query(({ ctx }) => {
    return ctx.db.subject.findMany({
      where: { userId: ctx.session.user.id },
      include: { topics: true },
    });
  }),
});
