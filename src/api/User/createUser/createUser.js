export default {
  Mutation: {
    createUser: async (_, args, { prisma }) => {
      const { name, email } = args;
      const exist = await prisma.user.findMany({
        where: { OR: [{ name }, { email }] },
      });
      if (exist && exist.length > 0) {
        if (exist.filter((user) => user.email == email).length > 0) {
          throw Error("This email already taken");
        } else if (exist.filter((user) => user.name == name).length > 0) {
          throw Error("This name already taken");
        }
      }
      return await prisma.user.create({
        data: { name, email },
      });
    },
  },
};
