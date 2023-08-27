const axios = require("axios")
URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const {id} = req.params; // {id : 5} example
    axios(`${URL}/${id}`)
    .then(({data}) =>{
        const { id , name, gender, species, origin, image, status } = data
        const character = { id , name, gender, species, origin, image, status}
        
        return name ? res.json(character): res.status(404).json({message: "Not Found"})
    })
    .catch((error)=>{
        return res.status(500).json({message : error})
    })
};

module.exports = getCharById;






//* GetCharbyId Webserver

// const successHandler = (response, res) => {
//!     console.log(response)
//     const { id , name, gender, species, origin, image, status } = response.data
//     const character = { id , name, gender, species, origin, image, status}
//     res.writeHead(200, {"Content-type": "application/json"})
//     res.end(JSON.stringify(character))
// }
// const errorHandler = (error, res) => {
//     res.writeHead(500, {"content-type": "text/plain"})
//     res.end("Sucedio el siguiente error:" + error.message)
// }

// const getCharById = (res, id) => {

//     axios(`${URL}/${id}`)
//     .then(response => successHandler(response, res), error => errorHandler(error, res))
// }

// module.exports = getCharById;

//NOTAS SOBRE .ENV
/*
1) Instalar npm install dotenv
2) crear un archivo .env y alli poner las variables a guardar
3) require("dotenv").config()
4) const {URL} = process.env - Haces destructuring y igualarlo a process.env
*/