import { isAuthenticated } from "../../../middlewares";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const EDIT = "EDIT";

export default {
  Mutation: {
    editPost: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { id, text, title, published, action } = args;
      if (action === EDIT) {
        return await prisma.post.update({
          where: { id },
          data: { text, title, published },
        });
      }
    },
  },
};
// 캐스케이드 딜리트는 아직 없음, 코멘트 등 연결된거 먼저 지우고 삭제 가능
