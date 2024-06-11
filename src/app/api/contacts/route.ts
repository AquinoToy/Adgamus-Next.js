import { NextResponse } from "next/server";
import Contact from "@/models/contact";
import { connectDB } from "@/libs/mongodb";

type Query = {
  NOMBRE?: { $regex: string; $options: string };
  CLAVE?: { $regex: string; $options: string };
  AREA?: { $regex: string; $options: string };
  CORREO?: { $regex: string; $options: string };
  DELEGACION?: { $regex: string; $options: string };
  TELEFONO?: { $regex: string; $options: string };
  "VIGENCIA INICIO"?: { $regex: string; $options: string };
  "VIGENCIA FIN"?: { $regex: string; $options: string };
};

export async function POST(request: Request) {
  const {
    NOMBRE,
    CLAVE,
    AREA,
    CORREO,
    DELEGACION,
    TELEFONO,
    "VIGENCIA INICIO": VIGENCIA_INICIO,
    "VIGENCIA FIN": VIGENCIA_FIN,
  } = await request.json();

  try {
    await connectDB();
    const allContacts = await Contact.find({});
    console.log("All contacts:", allContacts);

    const query: Query = {};

    if (NOMBRE) query.NOMBRE = { $regex: NOMBRE, $options: "i" };
    if (CLAVE) query.CLAVE = { $regex: CLAVE, $options: "i" };
    if (AREA) query.AREA = { $regex: AREA, $options: "i" };
    if (CORREO) query.CORREO = { $regex: CORREO, $options: "i" };
    if (DELEGACION) query.DELEGACION = { $regex: DELEGACION, $options: "i" };
    if (TELEFONO) query.TELEFONO = { $regex: TELEFONO, $options: "i" };
    if (VIGENCIA_INICIO)
      query["VIGENCIA INICIO"] = { $regex: VIGENCIA_INICIO, $options: "i" };
    if (VIGENCIA_FIN)
      query["VIGENCIA FIN"] = { $regex: VIGENCIA_FIN, $options: "i" };

    console.log("Query:", query);

    const contacts = await Contact.find(query);
    console.log("Contacts found:", contacts);
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error in API:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }
}
