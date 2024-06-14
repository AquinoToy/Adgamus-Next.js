"use client";
import Image from "next/image";
import Logo from "@/assets/images/GUIMOFacha.svg";

import Mision from "@/assets/images/mision.jpeg";
import Vision from "@/assets/images/vision.jpeg";
import Objetivos from "@/assets/images/objetivos.jpeg";

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Sobre GUIMO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Somos una empresa dedicada a la innovación y el desarrollo de
              soluciones tecnológicas.
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Guimo es una empresa líder en el desarrollo de software innovador
              y soluciones tecnológicas de vanguardia. Nos especializamos en
              ofrecer productos digitales, eficientes y personalizados que
              optimizan los procesos de nuestros clientes y mejoran su
              productividad.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={Logo}
              width={150}
              height={150}
              alt="Logo"
              className="aspect-square object-contain"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Misión
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestra misión es transformar la forma en que las empresas
              utilizan la tecnología.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nos esforzamos por ofrecer un servicio excepcional y soluciones
              personalizadas de alta calidad, siempre con un enfoque centrado en
              las necesidades únicas de cada cliente.
            </p>
          </div>
          <Image
            src={Mision}
            width={550}
            height={310}
            alt="Misión"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src={Vision}
            width={550}
            height={310}
            alt="Visión"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Visión
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestra visión es ser líderes en la transformación digital.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nuestra visión es convertirnos en líderes globales en el
              desarrollo de software, reconocidos por nuestro compromiso
              constante con la calidad, la mejora continua y la entrega de
              soluciones excepcionales. Aspiramos a ser referentes en la
              industria del software, brindando productos y servicios de
              vanguardia que marquen la diferencia.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Eslogan
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Innovación conGUIMO
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              En Guimo, nos guiamos por el lema "Software inteligente para
              negocios inteligentes". Creemos firmemente en el poder
              transformador de la tecnología y su capacidad para impulsar el
              crecimiento y el éxito de las empresas.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Objetivos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros objetivos
            </h2>
            <ul className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 space-y-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                Desarrollar soluciones tecnológicas innovadoras que mejoren la
                eficiencia y la productividad de nuestros clientes.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                Expandir nuestra presencia en el mercado y convertirnos en
                líderes en la transformación digital.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                Fomentar una cultura de innovación y colaboración dentro de
                nuestra empresa.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                Contribuir al desarrollo de la comunidad a través de iniciativas
                de responsabilidad social.
              </li>
            </ul>
          </div>
          <Image
            src={Objetivos}
            width={550}
            height={310}
            alt="Objetivos"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
