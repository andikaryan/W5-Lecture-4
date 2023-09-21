const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('ini adalah halaman utama');
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('ini adalah halaman about');
    }else if(req.url === '/profile'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('ini adalah halaman profile');
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('not found');
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});