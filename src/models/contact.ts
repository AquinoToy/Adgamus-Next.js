import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  NOMBRE: String,
  CLAVE: String,
  AREA: String,
  CORREO: String,
  DELEGACION: String,
  TELEFONO: String,
  "VIGENCIA INICIO": String,
  "VIGENCIA FIN": String,
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
