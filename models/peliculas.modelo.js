const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: String,
    director: String,
    año: Number,
    sinopsis: String,
    genero: String, // Puedes almacenar varios géneros en un array
    calificacion: Number,
    actores: [String], // Puedes almacenar varios actores en un array
    duracion: Number,
  });
  
  const Pelicula = mongoose.model('Pelicula', peliculaSchema);
  
  // Modelo de Usuario
  const usuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    contraseña: String, // Asegúrate de almacenar la contraseña de forma segura (hash y sal)
    peliculasFavoritas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula' }],
  });
  
  const Usuario = mongoose.model('Usuario', usuarioSchema);
  
  // Modelo de Reseña
  const reseñaSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    pelicula: { type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula' },
    calificacion: Number,
    comentario: String,
  });
  
  const Reseña = mongoose.model('Reseña', reseñaSchema);
  
  // Modelo de Comentario
  const comentarioSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    pelicula: { type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula' },
    texto: String,
  });
  
  const Comentario = mongoose.model('Comentario', comentarioSchema);
  
  // Modelo de Género
  const generoSchema = new mongoose.Schema({
    nombre: String,
  });
  
  const Genero = mongoose.model('Genero', generoSchema);
  
  module.exports = {
    Pelicula,
    Usuario,
    Reseña,
    Comentario,
    Genero,
  };