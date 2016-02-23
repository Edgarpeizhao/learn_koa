var config = require('./config/config');
var koa = require('koa')
  , router = require('koa-router')
  , app = koa();

app.use(router(app));

app.use(function *(next){
  //config 注入中间件，方便调用配置信息
  if(!this.config){
    this.config = config;
  }
  yield next;
});

app.get('/config', function *() {
  var config = this.config;
  this.body = config.env;
});

app.listen(3000);