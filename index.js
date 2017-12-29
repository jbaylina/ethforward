const express = require('express')
const ens = require('ens')

const app = express()


app.get('/',  async (req, res) => {
  const content = await ens.content(req.hostname);
  res.send("hostname: " + req.hostname + "  content: " + content);
  const resolver = await ens.getContent(req.hostname);
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
