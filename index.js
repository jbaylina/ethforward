const http = require('http');
const ens = require('./ens');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

http.createServer(async (req, res) => {
    const content = await ens.getContent(req.headers.host);
    const url = 'http://localhost:9001' + content;
    console.log(url);
    proxy.web(req, res, {
      target: url
    });
}).listen(80);
