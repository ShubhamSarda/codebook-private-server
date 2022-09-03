const express = require('express');
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = express();
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

const router = jsonServer.router('./data/db.json');
server.use('/', router);
server.db = router.db

const middlewares = jsonServer.defaults()
const rules = auth.rewriter({
    products: 444,
    featured_products: 444,
    orders: 660,
    users: 600
  })

server.use(rules)
server.use(auth)
server.use(middlewares)
server.use(router)

server.listen(8000);
