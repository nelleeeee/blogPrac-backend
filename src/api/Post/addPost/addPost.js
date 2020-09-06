import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    addPost: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { title, published, categories, text, files } = args;
      const post = await prisma.post.create({
        data: {
          title,
          published,
          text,
          author: { connect: { id: request.user.id } },
        },
      });
      categories.forEach(async (category) => {
        await prisma.category.create({
          data: {
            post: { connect: { id: post.id } },
            name: category,
          },
        });
      });
      files.forEach(async (file) => {
        await prisma.file.create({
          data: {
            post: { connect: { id: post.id } },
            url: file,
          },
        });
      });
      return post;
    },
  },
};
