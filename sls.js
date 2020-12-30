const Koa = require('koa');

const createServer = () => {
  const app = new Koa();

  app.use(async ctx => {
    ctx.body = 'Hello World';
  });

  return app
}

if (process.env.SERVERLESS) {
  module.exports = createServer
} else {
  createServer().listen(3000)
}