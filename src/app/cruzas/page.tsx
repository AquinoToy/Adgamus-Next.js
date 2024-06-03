"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

import Genetica from "@/assets/images/FondoGenetica.jpeg";

const MySwal = withReactContent(Swal);

function GeneticPage() {
  const [error, setError] = useState();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const parentGenotype = formData.get("parent-genotype");
    const motherGenotype = formData.get("mother-genotype");

    console.log("Parent Genotype:", parentGenotype);
    console.log("Mother Genotype:", motherGenotype);

    try {
      const geneticResponse = await axios.post("api/genetics", {
        parentGenotype,
        motherGenotype,
      });

      console.log("Response from API:", geneticResponse);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
        console.log("Error from API:", error);

        MySwal.fire({
          title: "Ups, ¡ha ocurrido un error!",
          icon: "error",
          text: error.response?.data.message || "Hubo algún error. D:",
          confirmButtonColor: "#50a71e",
        });
      }
    }
  };

  return (
    <div
      className="relative flex justify-center items-center gap-4 w-full h-[calc(100vh-5rem)] p-10 md:p-6 lg:p-8"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Genetica.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
          zIndex: -1,
          opacity: 0.7,
        }}
      />
      <div className="relative z-10 grid gap-4 max-w-fit overflow-hidden rounded-2xl border bg-white shadow-xl p-8">
        <div className="flex flex-col space-y-3 border-b border-gray-200 px-4 py-6 pt-8 sm:px-16">
          <h3 className="text-3xl font-bold text-titulos">
            Calculadora de genotipos
          </h3>
          <p className="tx-sm text-gray-500 dark:text-gray-400">
            Ingresa los genotipos de los padres para calcular los posibles
            genotipos de la descendencia.
          </p>
        </div>
        <form className="space-y-4 p-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-xs text-gray-600 uppercase"
              htmlFor="parent-genotype"
            >
              Genotipo del padre
            </label>
            <input
              type="text"
              id="parent-genotype"
              name="parent-genotype"
              placeholder="e.g. AaBbCcDdEeFfGg"
              className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm hover:border-elementos"
            />
          </div>
          <div>
            <label
              className="block text-xs text-gray-600 uppercase"
              htmlFor="mother-genotype"
            >
              Genotipo de la madre
            </label>
            <input
              type="text"
              id="mother-genotype"
              name="mother-genotype"
              placeholder="e.g. AaBbCcDdEeFfGg"
              className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm hover:border-elementos"
            />
          </div>
          {error && (
            <div className="w-full text-red-500 text-sm items-center p-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="flex h-10 w-full items-center justify-center rounded-xl border text-sm transition-all focus:outline-none bg-elementos text-white hover:bg-resaltar"
          >
            Calculate
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 p-4 underline">
          {"Aprende sobre el "}
          <Link
            href="#"
            className="font-semibold text-gray-800 dark:text-gray-200"
          >
            Cuadro de Punnet
          </Link>
        </p>
      </div>
    </div>
  );
}

export default GeneticPage;
