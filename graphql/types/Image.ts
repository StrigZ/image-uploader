import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";

export const Image = objectType({
  name: "Image",
  definition(t) {
    t.int("id");
    t.string("firebaseId");
    t.string("downloadUrl");
  },
});

export const ImagesQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("images", {
      type: "Image",
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.image.findMany();
      },
    });
  },
});

export const ImagesMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addImage", {
      type: "Image",
      args: {
        firebaseId: nonNull(stringArg()),
        downloadUrl: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const draft = {
          firebaseId: args.firebaseId,
          downloadUrl: args.downloadUrl,
        };
        return await ctx.prisma.image.create({
          data: draft,
        });
      },
    });
  },
});
