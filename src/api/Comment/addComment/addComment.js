import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    addcomment: async (_, args, { request, prisma }) => {
      const { text, postId } = args;
      if (request.user !== undefined) {
        isAuthenticated(request);
        return await prisma.comment.create({
          data: {
            user: { connect: { id: request.user.id } },
            text,
            post: { connect: { id: postId } },
          },
        });
      } else {
        return await prisma.comment.create({
          data: {
            user: { connect: { id: 2 } },
            text,
            post: { connect: { id: postId } },
          },
        });
      }

      //   const { name, text, postId } = args;
      //   const { user } = request;
      //   const exist = await prisma.user.findMany({ where: { name } });
      //   console.log(args, user);

      //   return await prisma.comment.create({
      //     data: {
      //       user: name,
      //       text,
      //       post: { id: postId },
      //     },
      //   });
    },
  },
};
