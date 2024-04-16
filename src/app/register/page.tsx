"use client";

import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const signUpResponse = await axios.post("api/auth/singup", {
        email: formData.get("email"),
        password: formData.get("password"),
        username: formData.get("username"),
      });

      console.log(signUpResponse);

      const res = await signIn("credentials", {
        email: signUpResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/dashboard");

      console.log(res);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center  text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-950 px-8 py-10 w-3/12"
      >
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

        <h1 className="text-4xl font-bold mb-7"> Registrar</h1>

        <input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />

        <input
          type="email"
          placeholder="Correo Electronico"
          name="email"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />
        <button className="bg-indigo-500 px-4 py-2">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
