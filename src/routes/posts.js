export const routes = (router) => {
  router.get('/posts', async (ctx) => {
    ctx.body = 'posts are retrieved';
  });
};
