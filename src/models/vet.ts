import { Schema, model, models } from "mongoose";

const VetSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre del lugar es requerido"],
  },
  direccion: {
    type: String,
    required: [true, "La dirección es requerida"],
  },
  coordenadas: {
    type: {
      lat: {
        type: Number,
        required: [true, "La latitud es requerida"],
      },
      lng: {
        type: Number,
        required: [true, "La longitud es requerida"],
      },
    },
    required: [true, "Las coordenadas son requeridas"],
  },
  sitio_web: {
    type: String,
    required: [true, "El sitio web es requerido"],
  },
});

const Veterinaria = models.Veterinaria || model("Veterinaria", VetSchema);
export default Veterinaria;
