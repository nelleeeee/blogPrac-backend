import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args, { prisma }) => {
      console.log(args);
      const { email, secret } = args;
      const user = await prisma.user.findOne({ where: { email } });
      console.log(user);
      if (user.loginSecret === secret) {
        return generateToken(user.id);
      } else {
        throw Error("wrong email");
      }
    },
  },
};
