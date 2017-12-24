'use strict'

const http = require('http')
const express = require('express')
const next = require('next')
const chalk = require('chalk')
const config = require('./config')

const app = express()
const server = http.createServer(app)
const nextApp = next(config.next)
const handle = nextApp.getRequestHandler()
const port = process.env.PORT || 3000 

nextApp.prepare().then(() => {
  app.get('/', (req, res) => nextApp.render(req, res, '/'))

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`${chalk.green('[personal-site]')} Server is listening on port ${port}`)
  })
})