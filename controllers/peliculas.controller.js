const { Pelicula, Usuario, Reseña, Comentario, Genero } = require('../models/peliculas.modelo.js'); 

const CrudPeliculas = {
  createPelicula: async (req, res) => {
    try {
      const nuevaPelicula = new Pelicula(req.body);
      console.log(nuevaPelicula);
      await nuevaPelicula.save();
      res.status(201).json({ mensaje: 'Película creada con éxito', pelicula: nuevaPelicula });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Error al crear la película' });
    }
  },
  getInfoPeliculas: async (req, res) => {
    try {
      const peliculas = await Pelicula.find();
      res.json(peliculas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener información de la película' });
    }
  },
  updatePelicula: async (req, res) => {
    try {
      const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!pelicula) {
        return res.status(404).json({ error: 'Película no encontrada' });
      }
      res.json({ mensaje: 'Película actualizada con éxito', pelicula });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la película' });
    }
  },
  deletePelicula: async (req, res) => {
    try {
      const pelicula = await Pelicula.findByIdAndRemove(req.params.id);
      if (!pelicula) {
        return res.status(404).json({ error: 'Película no encontrada' });
      }
      res.json({ mensaje: 'Película eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la película' });
    }
  },
};

module.exports = CrudPeliculas;