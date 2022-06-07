export const routes = (router) => {
  router.get('/posts', async (ctx) => {
    ctx.type = 'application/json';
    ctx.body = { author: 'jhon', title: 'the post1', body: 'this is a body' };
    ctx.status = 200;
  });
};
