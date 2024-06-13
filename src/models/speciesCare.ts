import { Schema, model, models } from "mongoose";

const speciesCareSchema = new Schema({
  species: {
    type: String,
    required: [true, "La especie es requerida"],
    unique: true,
  },
  feeding: {
    type_of_food: {
      type: String,
      required: [true, "El tipo de alimento es requerido"],
    },
    daily_amount: {
      type: Number,
      required: [true, "La cantidad diaria es requerida"],
    },
    feeding_frequency: {
      type: String,
      required: [true, "La frecuencia de alimentación es requerida"],
    },
  },
  management: {
    pasture_type: {
      type: String,
      required: [true, "El tipo de pastoreo es requerido"],
    },
    required_space: {
      type: String,
      required: [true, "El espacio requerido es necesario"],
    },
    stable_conditions: {
      type: String,
      required: [true, "Las condiciones del establo son necesarias"],
    },
  },
});

const SpeciesCare =
  models.SpeciesCare || model("SpeciesCare", speciesCareSchema);
export default SpeciesCare;
