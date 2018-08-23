const http = require('http');

http.createServer((req, res) => {


    let objeto = {
        nombre: 'Ricardo Lira',
        numero: 3523364654,
        edad: 34,
        email: 'rosadwe'
    }
    res.write(JSON.stringify(objeto));
    res.end();
})

.listen(8080);
console.log('Escuchando el puerto');