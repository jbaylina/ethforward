const http = require('http');
const ens = require('./ens');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});


http.createServer(async (req, res) => {
    console.log("url: ", req.url);
    console.log("hosnname: ", req.headers.host);
    const content = await ens.getContent(req.headers.host);
    console.log("content: ", content);
  // This simulates an operation that takes 500ms to execute
    proxy.web(req, res, {
      target: 'http://localhost:9001' + content + req.url
    });
}).listen(80);
