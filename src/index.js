import koa from 'koa';
import swagger2Koa from 'swagger2-koa';
import * as swagger from 'swagger2';
import Router from '@koa/router';
import { routes as registerRoute } from './routes/register.js';
import { routes as loginRoute } from './routes/login.js';
import { routes as createPostRoute } from './routes/createPost.js';
import { routes as postsRoute } from './routes/posts.js';

const { ui, validate } = swagger2Koa;

const spec = swagger.loadDocumentSync('./src/swagger.yaml');

if (!swagger.validateDocument(spec)) {
  throw Error('Invalid Swagger File');
}

const port = process.env.PORT || 3000;

const app = new koa();
const router = Router();

for (const route of [registerRoute, loginRoute, createPostRoute, postsRoute]) {
  route(router);
}

app.use(router.routes());
app.use(router.allowedMethods());

app.use(ui(spec, '/docs'));
app.use(validate(spec));

app.listen(port, console.log(`Server on ${port}`));

// get swagger file working
