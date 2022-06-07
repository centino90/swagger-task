export const routes = (router) => {
  router.post('/posts/create', async (ctx) => {
    ctx.type = 'application/json';
    ctx.body = ctx.request.body
    ctx.status = 200;
  });
};
