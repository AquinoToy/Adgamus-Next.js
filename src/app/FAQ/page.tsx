"use client";

import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

function FAQ() {
  return (
    <section className="w-full h-screen py-0 md:py-12 lg:py-22 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid gap-1">
          <div className="text-center bg-gray-50 dark:bg-gray-900  border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-semibold py-5 text-gray-900 dark:text-white tracking-tighter sm:text-4xl md:text-5xl m-5">
              Preguntas Frecuentes
            </h1>
            <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 md:text-xl lg:text-base xl:text-xl">
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              servicios.
            </p>
          </div>
          <div className="grid gap-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl m-5">
            <Collapsible className="mx-5 mt-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-900 dark:text-white">
                  ¿Qué es Adgamus y cuál es su propósito?{" "}
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-600 dark:text-gray-400">
                  <p className="py-4">
                    Adgamus es una plataforma digital integral diseñada para
                    empoderar a agricultores, ganaderos y dueños de mascotas,
                    brindándoles herramientas tecnológicas eficientes y acceso a
                    información valiosa para optimizar sus operaciones.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-900 dark:text-white">
                  ¿Qué tipo de información puedo encontrar en el módulo de
                  Cuidado de Cultivos?
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-600 dark:text-gray-400">
                  <p className="py-4">
                    En el módulo de Cuidado de Cultivos, podrás buscar
                    información detallada sobre diferentes tipos de plantas,
                    como su nombre científico, descripción, hábitat, época de
                    floración, cuidados necesarios y mucho más.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-900 dark:text-white">
                  ¿Cómo puedo localizar profesionales de la salud animal cerca
                  de mí?{" "}
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-600 dark:text-gray-400">
                  <p className="py-4">
                    En el módulo de Cuidado de Ganado, hay una sección que te
                    permite buscar profesionales de la salud animal cercanos,
                    como veterinarios, ingresando tu ubicación actual.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-900 dark:text-white">
                  ¿Cómo puedo reportar un error o enviar una sugerencia al
                  equipo de Adgamus?{" "}
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-600 dark:text-gray-400">
                  <p className="py-4">
                    Si encuentras un error o tienes una sugerencia para mejorar
                    Adgamus, puedes enviar un informe de error o sugerencia a
                    través de la sección de Mensajes.{" "}
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-900 dark:text-white">
                  ¿Cómo puedo obtener ayuda si tengo un problema que no está
                  cubierto en las preguntas frecuentes?
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-600 dark:text-gray-400">
                  <p className="py-4">
                    Si tienes un problema que no está cubierto en las preguntas
                    frecuentes, puedes contactar al equipo de soporte de Adgamus
                    a través del módulo de Perfil, en la sección de Mensajes.
                    Describe tu problema con detalles para que el equipo pueda
                    asistirte de la mejor manera.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default FAQ;
