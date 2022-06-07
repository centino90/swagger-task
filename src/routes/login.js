export const routes = (router) => {
  router.post('/login', async (ctx) => {
    ctx.type = 'application/json';
    ctx.body = ctx.request.body
    ctx.status = 200;
  });
};
