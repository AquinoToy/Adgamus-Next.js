import { Schema, model, models } from "mongoose";

const CowSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
    trim: true,
  },
  species: {
    type: String,
    required: [true, "La especie es requerida"],
    trim: true,
  },
  sex: { type: String, required: [true, "El sexo es requerido"], trim: true },
  birth_date: {
    type: Date,
    required: [true, "La fecha de nacimiento es requerida"],
  },
  identification_number: {
    type: String,
    required: [true, "El número de identificación es requerido"],
    unique: true,
    trim: true,
  },
  weight_at_birth: {
    type: Number,
    required: [true, "El peso al nacer es requerido"],
  },
  color: {
    type: String,
    required: [true, "El color es requerido"],
    trim: true,
  },
  health_data: {
    last_vet_visit: { type: Date },
    vaccines_received: { type: [String] },
    medical_history: { type: [String] },
    current_health_conditions: { type: [String] },
  },
  care: {
    feeding: {
      type_of_food: { type: String, trim: true },
      daily_amount: { type: Number },
      feeding_frequency: { type: String, trim: true },
    },
    management: {
      pasture_type: { type: String, trim: true },
      required_space: { type: String, trim: true },
      stable_conditions: { type: String, trim: true },
    },
  },
  reproduction: {
    reproductive_status: { type: String, trim: true },
    last_insemination_date: { type: Date },
    number_of_births: { type: Number },
  },
  production: {
    daily_milk_production: { type: Number },
    meat_production: { type: Number },
    milk_meat_quality: { type: String, trim: true },
  },
});

const Cow = models.cow || model("cow", CowSchema);
export default Cow;
