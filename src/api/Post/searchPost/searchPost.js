// 검색어가 글쓴이 제목 내용 카테고리에 포함되면 리턴
export default {
  Query: {
    searchpost: async (_, args, { prisma }) =>
      await prisma.post.findMany({
        where: {
          OR: [
            {
              // 일대 다 관계시 쿼리문
              author: {
                email: {
                  contains: args.term,
                },
              },
            },
            {
              // 해당 필드 안에서 쿼리
              title: {
                contains: args.term,
              },
            },
            {
              text: {
                contains: args.term,
              },
            },
            {
              // 다대다 관계에서의 쿼리문
              categories: {
                some: { name: args.term },
              },
            },
          ],
        },
      }),
  },
};
