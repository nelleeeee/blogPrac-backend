export default {
  Query: {
    allPost: async (_, __, { prisma }) => await prisma.post.findMany(),
  },
  Post: {
    categories: async (parent, __, { prisma }) => {
      return await prisma.category.findMany({ where: { postId: parent.id } });
    },
    comments: async (parent, __, { prisma }) => {
      return await prisma.comment.findMany({ where: { postId: parent.id } });
    },
    files: async (parent, __, { prisma }) => {
      return await prisma.file.findMany({ where: { postId: parent.id } });
    },
    // user: async (parent, __, { prisma }) => {
    //   return await prisma.user.findMany({ where: { authorId: parent.id } });
    // },
  },
};

// 중괄호랑 리턴이랑 무슨관계?
