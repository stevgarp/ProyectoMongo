const express = require('express');
const mongoose  = require('mongoose');
const CrudPeliculas =  require('./controllers/peliculas.controller.js');

const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect('mongodb+srv://stevgtpayes:root1234@cluster0.ohcx1sx.mongodb.net/DBMongoProyecto?retryWrites=true&w=majority',)

app.post('/', CrudPeliculas.createPelicula);
app.get('/', CrudPeliculas.getInfoPeliculas);
app.put('/', CrudPeliculas.updatePelicula);
app.delete('/', CrudPeliculas.deletePelicula);

app.listen(port, () => {console.log(`Server running on port ${port}`)});