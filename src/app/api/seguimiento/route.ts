import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Cow from "@/models/cow";
import SpeciesCare from "@/models/speciesCare";

export async function GET() {
  try {
    await connectDB();
    const cows = await Cow.find();
    const speciesCares = await SpeciesCare.find();

    return NextResponse.json(
      {
        cows,
        speciesCares,
      },
      {
        status: 200,
      }
    );
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
    return NextResponse.json(
      {
        message: "Unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Aquí deberías agregar la lógica para guardar los datos en la base de datos
    // Ejemplo: const newCow = new Cow(data); await newCow.save();
    const newCow = new Cow(data);
    const savedCow = await newCow.save();

    return NextResponse.json(
      {
        message: savedCow,
      },
      {
        status: 201,
      }
    );
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
    return NextResponse.json(
      {
        message: "Unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}
