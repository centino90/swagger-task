export const routes = (router) => {
  router.post('/login', async (ctx) => {
    ctx.body = 'User is Logged in';
  });
};
