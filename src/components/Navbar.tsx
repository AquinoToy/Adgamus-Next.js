"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import logo from "@/assets/images/logo.svg";
{
  /*Icons imports*/
}
import { IoIosArrowDown } from "react-icons/io";
import { GiCow } from "react-icons/gi";
import { GiPlantSeed } from "react-icons/gi";
import { BsLightningChargeFill } from "react-icons/bs";

type NavItem = {
  label?: string;
  link?: string;
  children?: NavItem[];
  iconImage?: JSX.Element;
};

const navItems: NavItem[] = [
  {
    label: "Herramientas",
    link: "#",
    children: [
      {
        label: "Selección de ganado",
        link: "#",
        iconImage: <GiCow size={28} color="red" />,
      },
      {
        label: "Cuidado de Cultivos",
        link: "#",
        iconImage: <GiPlantSeed size={28} color="green" />,
      },
      {
        label: "Gestión de recursos",
        link: "#",
        iconImage: <BsLightningChargeFill size={28} color="yellow" />,
      },
    ],
  },
  {
    label: "Acerca de",
    link: "#",
    children: [
      {
        label: "¿Qué es Adgamus?",
        link: "#",
      },
      {
        label: "Sobre nosotros",
        link: "#",
      },
      {
        label: "Novedades",
        link: "#",
      },
    ],
  },
];

function Navbar() {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  return (
    <nav>
      <div className="flex justify-between container mx-auto w-full max-w-7x1 px-4 py-5 text-sm">
        {/*Sección izquierda*/}
        <section className="flex items-center gap-10">
          {/*Logo*/}

          <Image src={logo} alt="logo" />
          <div className="flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <Link
                key={i}
                href={d.link ?? "#"}
                className="relative group px-2 py-2 transition all"
              >
                <p className="flex cursor-pointer items-center gap-2 text-elementos group-hover:text-resaltar">
                  <span>{d.label}</span>
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                </p>

                {/*dropdown*/}
                {d.children && (
                  <div
                    className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white 
              py-3 shadow-md transition-all group-hover:flex"
                  >
                    {d.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-resaltar"
                      >
                        {/*image <Image src={} alt="itwm-icon" /> */}
                        {ch.iconImage}
                        {/*item*/}
                        <span className="whitespace-nowrap pl-3">
                          {ch.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
          {/*Nav items*/}
        </section>
        {/*seccion derecha*/}

        <section className="flex items-center gap-8">
          <Link
            className="h-fit text-elementos transition-all hover:text-resaltar"
            href="/login"
          >
            Iniciar Sesión
          </Link>
          <Link
            className="h-fit rounded-xl border-2 border-elementos px-4 py-2 text-elementos transition-all hover:border-resaltar hover:text-resaltar"
            href="/register"
          >
            Registrar
          </Link>
        </section>

        {/*
        <Link href="/">
          <h1 className="font-bold text-xl cursor-pointer">Adgamus</h1>
        </Link>
        <ul className="flex gap-x-2">
          {isLoggedIn ? (
            <li className="px-3 py-1">
              <Link href="/dashboard/profile">Perfil</Link>
            </li>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/about">Acerca de</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/login">Iniciar Sesion</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/register">Registrar</Link>
              </li>
            </>
          )}
        </ul>
*/}
      </div>
    </nav>
  );
}

export default Navbar;
