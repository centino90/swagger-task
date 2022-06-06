export const routes = (router) => {
  router.post('/create-post', async (ctx) => {
    ctx.body = 'A post is created';
  });
};
