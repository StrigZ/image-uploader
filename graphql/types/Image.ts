import { createNextState } from "@reduxjs/toolkit";
import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { Context } from "../context";

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
    t.nonNull.list.nonNull.field("allImages", {
      type: "Image",
      resolve(_, __, ctx: Context) {
        return ctx.prisma.image.findMany();
      },
    });

    t.nonNull.field("findImageById", {
      type: "Image",
      args: {
        firebaseId: nonNull(stringArg()),
      },
      async resolve(_, args, ctx: Context) {
        return await ctx.prisma.image.findUnique({
          where: {
            firebaseId: args.firebaseId,
          },
        });
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
