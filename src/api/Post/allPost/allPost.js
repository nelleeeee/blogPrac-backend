export default {
  Query: {
    allPost: (_, __, { prisma }) => prisma.post.findMany(),
  },
  Post: {
    categories: (_, __, { prisma }) => prisma.category.findMany(),
  },
};
