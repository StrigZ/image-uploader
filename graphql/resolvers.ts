export const resolvers = {
  Query: {
    images: async (_parent, _args, ctx) => await ctx.prisma.image.findMany({}),
  },
};
