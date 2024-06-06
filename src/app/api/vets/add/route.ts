import { NextResponse } from "next/server";
import Veterinaria from "@/models/vet";
import { connectDB } from "@/libs/mongodb";

export async function POST(request: Request) {
  await connectDB();

  const data = await request.json();
  const newVeterinaria = new Veterinaria(data);

  await newVeterinaria.save();

  return NextResponse.json({ message: "Veterinaria agregada exitosamente" });
}
