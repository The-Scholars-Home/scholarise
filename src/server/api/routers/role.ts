
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const roleRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const roles = await ctx.db.role.findMany({
      orderBy: { name: "asc" }
    });
    return roles;
  }),
  
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const role = await ctx.db.role.findUnique({
        where: { id: input.id }
      });
      return role;
    }),
  
  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      description: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const role = await ctx.db.role.create({
        data: input
      });
      return role;
    }),
  
  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().min(1),
      description: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const role = await ctx.db.role.update({
        where: { id },
        data
      });
      return role;
    }),
  
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.role.delete({
        where: { id: input.id }
      });
      return { success: true };
    }),
});
