import koa from 'koa';
import swagger2Koa from 'swagger2-koa';
import * as swagger from 'swagger2';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
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
const router = Router({prefix: '/v2'});

for (const route of [registerRoute, loginRoute, createPostRoute, postsRoute]) {
  route(router);
}

app.use(bodyParser());
app.use(ui(spec, '/v2'));
app.use(validate(spec));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, console.log(`Server on ${port}`));

// get swagger file working
