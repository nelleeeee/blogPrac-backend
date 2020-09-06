export default {
  Query: {
    detailPost: async (_, args, { prisma }) => {
      const { id } = args;
      return await prisma.post.findOne({ where: { id } });
    },
  },
  Post: {
    categories: async (parent, __, { prisma }) => {
      return await prisma.category.findMany({ where: { postId: parent.id } });
    },
    comments: async (parent, __, { prisma }) => {
      return await prisma.comment.findMany({ where: { postId: parent.id } });
    },
  },
};
