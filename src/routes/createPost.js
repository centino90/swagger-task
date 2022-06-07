import fs from 'fs';

export const routes = (router) => {
  router.post('/posts/create', async (ctx) => {
    const filePath = './src/files/posts.json';
    const posts = fs.readFileSync(filePath, 'utf8');
    const postsData = JSON.parse(posts)
    const data = ctx.request.body

    postsData.push(data)

    fs.writeFileSync(filePath, JSON.stringify(postsData));
    ctx.body = {
      message: 'post is created'
    };
  });
};
