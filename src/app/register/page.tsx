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
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center bg-gray-50">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Registrarse</h3>
          <p className="text-sm text-gray-500">
            Crea una cuenta con tu correo electrónico y contraseña.{" "}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
        >
          <div>
            <label
              htmlFor="text"
              className="block text-xs text-gray-600 uppercase"
            >
              Nombre de Usuario
            </label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 
              placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm
              hover:border-elementos"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs text-gray-600 uppercase"
            >
              Correo Electronico
            </label>
            <input
              type="email"
              placeholder="Correo Electronico"
              name="email"
              className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 
              placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm
              hover:border-elementos"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xs text-gray-600 uppercase"
            >
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 
              placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm
              hover:border-elementos"
            />
          </div>
          {error && (
            <div className="w-full text-red-500 text-sm items-center p-2  ">
              {error}
            </div>
          )}
          <button
            className="flex h-10 w-full items-center justify-center rounded-xl border text-sm 
            transition-all focus:outline-none bg-elementos text-white hover:bg-resaltar"
          >
            {" "}
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
