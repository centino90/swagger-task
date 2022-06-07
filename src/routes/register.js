export const routes = (router) => {
  router.post('/register', async (ctx) => {
    ctx.body = {
      message: 'User is Registered'
    };
  });
};