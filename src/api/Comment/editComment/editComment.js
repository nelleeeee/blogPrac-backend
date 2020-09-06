import { isAuthenticated } from "../../../middlewares";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editComment: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { id, text, action } = args;
      if (action === EDIT) {
        return await prisma.comment.update({
          where: { id },
          data: { text },
        });
      } else if (action === DELETE) {
        return await prisma.comment.delete({
          where: { id },
        });
      }
    },
  },
};
