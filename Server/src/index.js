const express = require('express');
const server = express();
const PORT = 3001;
const router = require("../routes/index")

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json())

server.use("/rickandmorty", router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});











//* Web Server
// const http = require("http");
// const PORT = 3001
// const getCharById = require("../controllers/getCharById")

// http.createServer((req, res) => {
    
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const { url } = req;
//     console.log(`Recibi una request de ${url}`)

//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop())
//         getCharById(res, id)
//     } else {
//         res.writeHead(404, {"Content-type": "application/json"})
//             return res.end(JSON.stringify({error: "Route not found"}))
//     }

// }).listen(PORT, "localhost", () => {
//     console.log(`Servidor corriendo en puerto: ${PORT}`)
// })
















//* HW WEB SERVER
/*
if(url === "/") {
        res.writeHead(200, {"content-type": "text/plain"})
        return res.end("Esta funcionando ok")
    }

    if(url.includes("/rickandmorty/character")) {
        const id = Number(url.split("/").pop())
        const character = data.find(char => char.id === id)

        if(character){
            res.writeHead(200, {"Content-type": "application/json"})
            return res.end(JSON.stringify(character))
        }
        else {
            res.writeHead(404, {"Content-type": "application/json"})
            return res.end(JSON.stringify({error: "Character not found"}))
        }
    }

    res.writeHead(404, {"content-type": "text/plain"})
        return res.end(`La direccion ${url} no existe`)
*/