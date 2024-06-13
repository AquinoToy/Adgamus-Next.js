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
  }
}
