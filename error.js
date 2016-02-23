"use strict";
/**
 * @author peizhao
 */


var koa = require('koa');
var onerror = require('koa-onerror');
var app = koa();
onerror(app);

app.use(function *() {
  throw new Error('demo error');
});

app.listen(3000);