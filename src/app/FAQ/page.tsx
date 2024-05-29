import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

function FAQ() {
  return (
    <section className="w-full py-0 md:py-12 lg:py-22 bg-gray-50 dark:bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-1">
          <div className="text-center bg-gray-50 border-gray-200 ">
            <h1 className="text-3xl font-semibold py-5 text-titulos tracking-tighter sm:text-4xl md:text-5xl m-5">
              Preguntas Frecuentes
            </h1>
            <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              servicios.
            </p>
          </div>
          <div className="grid gap-6 g-white bg-gray-50 border border-gray-200 shadow-xl rounded-2xl m-5">
            <Collapsible className="mx-5 mt-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium">
                  ¿Cuáles son los beneficios de nuestros servicios?
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-400 dark:text-gray-400">
                  <p className="py-4">
                    Nuestros servicios ofrecen una amplia gama de beneficios,
                    incluyendo:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ahorro de tiempo y esfuerzo</li>
                    <li>Mejora de la eficiencia y productividad</li>
                    <li>Reducción de costos operativos</li>
                    <li>Acceso a expertos y tecnología de vanguardia</li>
                    <li>
                      Escalabilidad y flexibilidad para adaptarse a tus
                      necesidades
                    </li>
                  </ul>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium">
                  ¿Cuáles son los requisitos para contratar nuestros servicios?
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-500 dark:text-gray-400">
                  <p className="py-4">
                    Para contratar nuestros servicios, los requisitos
                    principales son:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tener una cuenta activa con nosotros</li>
                    <li>Aceptar nuestros términos y condiciones de servicio</li>
                    <li>
                      Proporcionar la información y los datos necesarios para la
                      prestación del servicio
                    </li>
                    <li>
                      Realizar el pago correspondiente según el plan
                      seleccionado
                    </li>
                    <li>
                      Estar de acuerdo con nuestras políticas de privacidad y
                      seguridad
                    </li>
                  </ul>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium">
                  ¿Cómo puedo obtener soporte técnico?
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-500 dark:text-gray-400">
                  <p className="py-4">
                    Ofrecemos varios canales de soporte técnico para asistirte:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Correo electrónico: support@example.com</li>
                    <li>Teléfono: +1 (555) 123-4567</li>
                    <li>Chat en vivo: disponible en nuestro sitio web</li>
                    <li>
                      Centro de ayuda: con artículos y guías de solución de
                      problemas
                    </li>
                    <li>
                      Solicitud de servicio: a través de nuestro formulario en
                      línea
                    </li>
                  </ul>
                  <p className="pt-4">
                    Nuestro equipo de soporte está disponible de lunes a
                    viernes, de 9 a.m. a 6 p.m. (hora local).
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium">
                  ¿Cuáles son las formas de pago disponibles?
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-500 dark:text-gray-400">
                  <p className="py-4">
                    Aceptamos las siguientes formas de pago:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Tarjeta de crédito (Visa, Mastercard, American Express)
                    </li>
                    <li>Tarjeta de débito</li>
                    <li>Transferencia bancaria</li>
                    <li>Pago en línea a través de PayPal</li>
                    <li>Facturación recurrente (suscripción)</li>
                  </ul>
                  <p className="pt-4">
                    Puedes seleccionar la opción de pago más conveniente para ti
                    durante el proceso de contratación.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            <Collapsible className="mx-5">
              <div>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-lg font-medium">
                  ¿Cuál es la política de privacidad y seguridad de la
                  información?
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-gray-500 dark:text-gray-400">
                  <p className="py-4">
                    Nos tomamos muy en serio la privacidad y seguridad de la
                    información de nuestros clientes. Algunas de nuestras
                    políticas clave incluyen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encriptación de datos en tránsito y en reposo</li>
                    <li>
                      Cumplimiento de las regulaciones de protección de datos
                    </li>
                    <li>Acceso restringido a la información confidencial</li>
                    <li>Copias de seguridad y recuperación de datos</li>
                    <li>Monitoreo y detección de amenazas de seguridad</li>
                  </ul>
                  <p className="pt-4">
                    Puedes consultar nuestra Política de Privacidad completa en
                    nuestro sitio web para obtener más detalles.
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
