"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface MotherGenotype {
  mother_genotype: string;
}
interface ParentGenotype {
  parent_genotype: string;
}
interface GeneticResponse {
  total_combinations: number;
  most_common: [string, number, number][];
  least_common: [string, number, number] | null;
}

function ResultsPage() {
  const router = useRouter();
  const [geneticResponse, setGeneticResponse] =
    useState<GeneticResponse | null>(null);
  const [motherGenotype, setMotherGenotype] = useState<MotherGenotype | null>(
    null
  );
  const [parentGenotype, setParentGenotype] = useState<ParentGenotype | null>(
    null
  );

  useEffect(() => {
    const storedResponse = localStorage.getItem("geneticResponse");
    console.log("Stored Response:", storedResponse);

    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      setGeneticResponse(parsedResponse.message.results);
      setMotherGenotype({
        mother_genotype: parsedResponse.message.mother_genotype,
      });
      setParentGenotype({
        parent_genotype: parsedResponse.message.parent_genotype,
      });
    } else {
      router.push("/");
    }
  }, []);
  // Evitar renderizaciones adicionales si geneticResponse no ha cambiado
  if (!geneticResponse || !motherGenotype || !parentGenotype) {
    return;
    <p>"Cargando..."</p>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-100 py-6 md:py-8 lg:py-10 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-2xl font-bold text-titulos tracking-tight sm:text-4xl md:text-5xl ">
              Resultados de los progenitores {motherGenotype.mother_genotype} y{" "}
              {parentGenotype.parent_genotype}
            </h1>
            <p className="text-gray-500 text-lg md:text-xl dark:text-gray-400 ">
              A continuación se presenta información detallada sobre los
              resultados más comunes, menos comunes y el total de combinaciones.
            </p>
          </div>
        </div>
      </section>
      <section className="py-6 mb-5 md:py-8 lg:py-10">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4 mt-3">
                Resultados más comunes
              </h2>
              <div className="overflow-x-auto rounded-2xl shadow-2xl">
                <table className="w-full text-left ">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 font-medium ">Resultado</th>
                      <th className="px-4 py-3 font-medium">Repetición</th>
                      <th className="px-4 py-3 font-medium">Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {geneticResponse.most_common.map((combination, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 dark:border-gray-700 ${
                          index % 2 === 0 ? "bg-green-200" : "bg-green-50"
                        }`}
                      >
                        <td className="px-4 py-3">{combination[0]}</td>
                        <td className="px-4 py-3">{combination[1]}</td>
                        <td className="px-4 py-3">{combination[2]}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4 mt-5">
                Resultados menos comunes
              </h2>
              {geneticResponse.least_common ? (
                <div className="overflow-x-auto rounded-2xl shadow-2xl">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 font-medium">Resultado</th>
                        <th className="px-4 py-3 font-medium">Repetición</th>
                        <th className="px-4 py-3 font-medium">Porcentaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-red-200 border-gray-200 dark:border-gray-700 ">
                        <td className="px-4 py-3">
                          {geneticResponse.least_common[0]}
                        </td>
                        <td className="px-4 py-3">
                          {geneticResponse.least_common[1]}
                        </td>
                        <td className="px-4 py-3">
                          {geneticResponse.least_common[2]}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 text-lg md:text-xl dark:text-gray-400 bg-red-200">
                  No hay combinaciones menos comunes
                </p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-5">
              Total de combinaciones
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">
                {geneticResponse.total_combinations}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Esto representa todas las posibles combinaciones de los alelos{" "}
                {motherGenotype.mother_genotype} y{" "}
                {parentGenotype.parent_genotype}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResultsPage;
