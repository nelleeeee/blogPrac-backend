import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    addCategory: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { name, postId } = args;
      return await prisma.category.create({
        data: {
          name,
          post: { connect: { id: postId } },
        },
      });
    },
  },
};
