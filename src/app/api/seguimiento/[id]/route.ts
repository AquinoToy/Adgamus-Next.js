import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Cow from "@/models/cow";
import SpeciesCare from "@/models/speciesCare";

export async function GET(request: Request, { params }: { params: any }) {
  await connectDB();

  // Asegúrate de manejar la búsqueda correctamente
  const cow = await Cow.findOne();

  return NextResponse.json({
    message: `Obteniendo seguimiento ${params}...`,
    cow: cow, // Puedes enviar los datos de la vaca como parte de la respuesta si lo deseas
  });
}
