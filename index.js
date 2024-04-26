http = require('http');
fs = require('fs');

server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}\n`

    fs.appendFile('log.txt', log, () => {
        switch (req.url) {
            case '/':
                res.end("Server Root(/). Try-\n1.Root(/),\n2.About(/about)\n3.Author(/author)4.RandomNumber(/random-number)")
                break
            case '/about':
                res.end("A Node Server")
                break
            case '/author':
                res.end("kaljitism")
                break
            case '/random-number':
                res.end(Math.random().toString())
                break
            default:
                res.end("No such endpoint")
                break
        }
    })
})

server.listen(600, () => console.log('Server Started'))
