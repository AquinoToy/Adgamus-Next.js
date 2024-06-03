"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) return setError(res.error as string);
    if (res?.ok) return router.push("/dashboard/profile");

    console.log(res);
  };

  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl dark:border-neutral-300">
        <div
          className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16
            dark:bg-neutral-950"
        >
          <h3 className="text-xl font-semibold">Iniciar Sesión</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Utiliza tu correo electrónico y contraseña para iniciar sesión.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16 dark:bg-neutral-950"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-xs text-gray-600 uppercase dark:text-gray-400"
            >
              Correo Electronico
            </label>
            <input
              type="email"
              placeholder="Correo Electronico"
              name="email"
              className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 
              placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm
              hover:border-elementos dark:placeholder-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xs text-gray-600 uppercase dark:text-gray-400"
            >
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 
              placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm
              hover:border-elementos dark:placeholder-gray-200"
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
            Iniciar Sesión
          </button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {"¿No tienes una cuenta? "}
            <Link
              href="/register"
              className="font-semibold text-gray-800 dark:text-gray-200"
            >
              Registrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
