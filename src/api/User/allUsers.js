export default {
  Query: {
    allUsers: (_, __, { prisma }) => prisma.user.findMany(),
    userById: (_, args, { prisma }) => {
      const { id } = args;
      return prisma.user.findOne({ where: { id } });
    },
  },
};
