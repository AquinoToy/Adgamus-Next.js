import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { parentGenotype, motherGenotype } = await request.json();

  try {
    if (parentGenotype.length % 2 !== 0 || motherGenotype.length % 2 !== 0)
      return NextResponse.json(
        {
          message: "El número de alelos debe ser par.",
        },
        {
          status: 400,
        }
      );

    if (parentGenotype.length === 0 || motherGenotype.length === 0) {
      return NextResponse.json(
        {
          message: "Ingresa el genotipo del padre y/o el genotipo de la madre",
        },
        {
          status: 400,
        }
      );
    }
    //Longitud mínima
    if (parentGenotype.length < 4 || motherGenotype.length < 4) {
      return NextResponse.json(
        {
          message:
            "Ejemplos de genotipos: AaBb hasta AaBbCcDdEeFfGg (no tienen que ser esos)",
        },
        {
          status: 400,
        }
      );
    }

    if (parentGenotype.length !== motherGenotype.length) {
      return NextResponse.json(
        {
          message:
            "El número de caracteres del genotipo del padre debe ser igual al de la madre",
        },
        {
          status: 400,
        }
      );
    }
    if (parentGenotype.length > 14 || motherGenotype.length > 14) {
      return NextResponse.json(
        {
          message:
            "Lo sentimos, no podemos calcular más allá de 7 características. :( ",
        },
        {
          status: 400,
        }
      );
    }

    console.log("Sending to Flask:", { parentGenotype, motherGenotype });

    const res = await axios.post(
      "http://127.0.0.1:5000/api/genetics",
      {
        parentGenotype,
        motherGenotype,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(res.data, { status: 200 });
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
