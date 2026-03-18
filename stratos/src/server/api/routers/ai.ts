import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const aiRouter = createTRPCRouter({
  askAssistant: protectedProcedure
    .input(z.object({ question: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // Mock implementation for now
      return { answer: `AI assistant received: ${input.question}` };
    }),
});
