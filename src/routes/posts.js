import fs from 'fs';

export const routes = (router) => {
  router.get('/posts', async (ctx) => {
    const posts = JSON.parse(fs.readFileSync('./src/files/posts.json').toString());

    ctx.body = posts;
  });
};
