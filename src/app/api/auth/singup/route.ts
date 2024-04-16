import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { email, password, username } = await request.json();

  if (!password || password.length < 8)
    return NextResponse.json(
      {
        message: "La contraseña debería tener al menos 8 caracteres",
      },
      {
        status: 400,
      }
    );

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: "El correo electronico ya existe",
        },
        {
          status: 400,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return NextResponse.json({
      _id: savedUser._id,
      email: savedUser.email,
      username: savedUser.username,
    });
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
