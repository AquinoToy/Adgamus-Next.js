"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { FaCircleInfo } from "react-icons/fa6";

import Genetica from "@/assets/images/FondoGenetica.jpeg";
import Adn from "@/assets/images/adn.png";
import Vaca from "@/assets/images/vaca.png";
import { NextResponse } from "next/server";

function GeneticPage() {
  const router = useRouter(); // Hook de Next.js para redirección
  const MySwal = withReactContent(Swal);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    // Paso 1
    "<div style='font-size: 14px; justify-content: center; text-align: left;'>" +
      "<strong>Ejemplo. Información sobre Alelos:</strong><br><br>" +
      "<div style='margin-left: 20px;'>" +
      "<strong>Color del Pelaje:</strong><br>" +
      "&#8226; Alelo A: Pelaje negro (dominante)<br>" +
      "&#8226; alelo a: Pelaje blanco (recesivo)<br><br>" +
      "<strong>Longitud de los Cuernos:</strong><br>" +
      "&#8226; Alelo B: Cuernos largos (dominante)<br>" +
      "&#8226; alelo b: Cuernos cortos (recesivo)<br><br>" +
      "<strong>Tamaño del Cuerpo:</strong><br>" +
      "&#8226; Alelo C: Gran tamaño corporal (dominante)<br>" +
      "&#8226; alelo c: Pequeño tamaño corporal (recesivo)<br><br>" +
      "<strong>Producción de Leche:</strong><br>" +
      "&#8226; Alelo D: Alta producción de leche (dominante)<br>" +
      "&#8226; alelo d: Baja producción de leche (recesivo)<br><br>" +
      "<strong>Resistencia a Enfermedades:</strong><br>" +
      "&#8226; Alelo E: Resistencia a enfermedades (dominante)<br>" +
      "&#8226; alelo e: Vulnerabilidad a enfermedades (recesivo)<br><br>" +
      "<strong>Eficiencia Alimenticia:</strong><br>" +
      "&#8226; Alelo F: Alta eficiencia alimenticia (dominante)<br>" +
      "&#8226; alelo f: Baja eficiencia alimenticia (recesivo)<br><br>" +
      "<strong>Adaptación al Clima Frío:</strong><br>" +
      "&#8226; Alelo G: Adaptación al clima frío (dominante)<br>" +
      "&#8226; alelo g: Sensibilidad al clima frío (recesivo)<br><br>" +
      "</div>" +
      "</div>",
    // Paso 2
    "<div style='font-size: 14px; justify-content: center; text-align: left;'>" +
      "<strong>Ejemplo: </strong><br><br>" +
      "<div style='margin-left: 20px;'>" +
      "<strong>Alelos:</strong> AaBbCcDdEeFfGg<br>" +
      "<strong>Características:</strong> Pelaje blanco, cuernos cortos, tamaño corporal pequeño, baja producción de leche, vulnerabilidad a enfermedades, eficiencia alimenticia baja, sensibilidad al clima frío." +
      "</div>" +
      "</div>",
    // Paso 3
    "<div style='font-size: 14px; justify-content: center; text-align: left;'>" +
      "<strong>Vaca 2:</strong><br><br>" +
      "<div style='margin-left: 20px;'>" +
      "<strong>Alelos:</strong> AABbCcDDeeFFgg<br>" +
      "<strong>Características:</strong> Pelaje negro, cuernos largos, tamaño corporal grande, alta producción de leche, resistencia a enfermedades, eficiencia alimenticia alta, adaptación al clima frío." +
      "</div>" +
      "</div>",
    // Paso 4
    "<div style='font-size: 14px; justify-content: center; text-align: left;'>" +
      "<strong>Vaca 3:</strong><br><br>" +
      "<div style='margin-left: 20px;'>" +
      "<strong>Alelos:</strong> AAbbCcDDEEFFgg<br>" +
      "<strong>Características:</strong> Pelaje blanco, cuernos cortos, tamaño corporal grande, alta producción de leche, resistencia a enfermedades, eficiencia alimenticia alta, sensibilidad al clima frío." +
      "</div>" +
      "</div>",
    // Paso 5
    "<div style='font-size: 14px; justify-content: center; text-align: left;'>" +
      "<strong>Vaca 4:</strong><br><br>" +
      "<div style='margin-left: 20px;'>" +
      "<strong>Alelos:</strong> AaBbCcDDEeFfGg<br>" +
      "<strong>Características:</strong> Pelaje negro, cuernos largos, tamaño corporal pequeño, alta producción de leche, resistencia a enfermedades, eficiencia alimenticia baja, adaptación al clima frío." +
      "</div>" +
      "</div>",
    // Paso 6
    "<div style='font-size: 14px; justify-content: center; text-align: left;'>" +
      "<strong>Vaca 5:</strong><br><br>" +
      "<div style='margin-left: 20px;'>" +
      "<strong>Alelos:</strong> AaBbCcDdEeFfGg<br>" +
      "<strong>Características:</strong> Pelaje negro, cuernos cortos, tamaño corporal pequeño, baja producción de leche, vulnerabilidad a enfermedades, eficiencia alimenticia baja, adaptación al clima frío." +
      "</div>" +
      "</div>",
  ];

  const showSweetAlert = (step) => {
    MySwal.fire({
      title: step === 0 ? `Alelos` : `Vaca ${step - 1 + 1}`,
      html: steps[step],
      imageUrl: step === 0 ? Adn.src : Vaca.src,
      imageWidth: 128,
      imageHeight: 128,
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: step < steps.length - 1 ? "Siguiente" : "Terminar",
      cancelButtonText: step > 0 ? "Atrás" : "Cancelar",
      preConfirm: () => {
        if (step < steps.length - 1) {
          setCurrentStep(step + 1);
          showSweetAlert(step + 1);
        }
      },
      confirmButtonColor: "#50a71e",
      cancelButtonColor: "#C70039",
      allowOutsideClick: true,
      allowEscapeKey: true,
    }).then((result) => {
      if (result.dismiss === MySwal.DismissReason.cancel) {
        if (step > 0) {
          setCurrentStep(step - 1);
          showSweetAlert(step - 1);
        } else {
          MySwal.close();
        }
      }
    });
  };
  const handleIconClick = () => {
    setCurrentStep(0);
    showSweetAlert(0);
  };

  // Manejo del formulario
  const [error, setError] = useState();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const parentGenotype = formData.get("parent-genotype");
    const motherGenotype = formData.get("mother-genotype");

    console.log("Parent Genotype:", parentGenotype);
    console.log("Mother Genotype:", motherGenotype);

    try {
      const geneticResponse = await axios.post("/api/genetics", {
        parentGenotype,
        motherGenotype,
      });

      console.log("Response from API:", geneticResponse);

      localStorage.setItem(
        "geneticResponse",
        JSON.stringify(geneticResponse.data)
      );

      return router.push("/results");
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
            Calculadora de Genes
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
            <div className="flex justify-between items-center px-5">
              <input
                type="text"
                id="parent-genotype"
                name="parent-genotype"
                placeholder="e.g. AaBbCcDdEeFfGg"
                className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 
                px-3 py-2 placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none 
                focus:ring-black sm:text-sm hover:border-elementos"
              />
              <FaCircleInfo
                size={28}
                color="green"
                className="cursor-pointer ml-1"
                onClick={handleIconClick}
              />
            </div>
          </div>
          <div>
            <label
              className="block text-xs text-gray-600 uppercase"
              htmlFor="mother-genotype"
            >
              Genotipo de la madre
            </label>
            <div className="flex justify-between items-center px-5">
              <input
                type="text"
                id="mother-genotype"
                name="mother-genotype"
                placeholder="e.g. AaBbCcDdEeFfGg"
                className="mt-1 block w-full appearance-none rounded-full border-2 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-elementos focus:outline-none focus:ring-black sm:text-sm hover:border-elementos"
              />
              <FaCircleInfo
                size={28}
                color="green"
                className="cursor-pointer ml-1"
                onClick={handleIconClick}
              />
            </div>
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
            Calcular
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 p-4 underline">
          {"Aprende sobre el "}
          <Link
            href="https://es.khanacademy.org/science/ap-biology/heredity/mendelian-genetics-ap/a/probabilities-in-genetics"
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
