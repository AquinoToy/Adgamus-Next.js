import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Cow from "@/models/cow";
import SpeciesCare from "@/models/speciesCare";

export async function GET(request: Request, { params }: { params: any }) {
  try {
    connectDB();
    const cowFound = await Cow.findById(params.id);

    if (!cowFound)
      return NextResponse.json(
        {
          message: "Seguimiento no encontrado",
        },
        { status: 404 }
      );
    return NextResponse.json(cowFound);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
  }
}
