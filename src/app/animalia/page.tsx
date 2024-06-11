"use client";

import Link from "next/link";
import Image from "next/image";

import Vaca from "@/assets/images/VacaInicio.jpeg";

function AnimaliaPage() {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mx-auto p-10 md:p-6 lg:p-8">
        <Link
          href="#"
          className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <Image
            src={Vaca}
            alt="Imagen"
            width={600}
            height={400}
            className="object-cover w-full h-64 lg:h-[calc(100vh-15rem)]"
          />
          <div className="absolute inset-0 bg-black/50 items-center justify-center flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-semibold">Saber más</span>
          </div>
        </Link>
        <div className="grid gap-4 flex-grow">
          <Link
            href="/contactos"
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6"
          >
            <SearchIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <span className="ml-2 font-medium">Buscar apoyo</span>
          </Link>
          <Link
            href="#"
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6"
          >
            <ClipboardIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <span className="ml-2 font-medium">Seguimientos</span>
          </Link>
        </div>
        <div className="grid gap-4 flex-grow">
          <Link
            href="/map"
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6"
          >
            <BriefcaseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <span className="ml-2 font-medium">Veterinarias</span>
          </Link>
          <Link
            href="/cruzas"
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6"
          >
            <DnaIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <span className="ml-2 font-medium">Cruzas</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function DnaIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m17 6-2.5-2.5" />
      <path d="m14 8-1-1" />
      <path d="m7 18 2.5 2.5" />
      <path d="m3.5 14.5.5.5" />
      <path d="m20 9 .5.5" />
      <path d="m6.5 12.5 1 1" />
      <path d="m16.5 10.5 1 1" />
      <path d="m10 16 1.5 1.5" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default AnimaliaPage;
