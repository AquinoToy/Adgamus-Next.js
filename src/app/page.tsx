import Balancer from "react-wrap-balancer";
import Image from "next/image";

import GUIMO from "@/assets/images/GUIMOFachoso.svg";
import ByGUIMO from "@/assets/images/By GUIMO.svg";
import homeCow from "@/assets/images/homeCow.png";

function HomePage() {
  const bannerImages = [GUIMO, ByGUIMO];
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-neutral-900">
      {/*hero*/}
      <section
        className="mx-auto flex max-w-6xl flex-col-reverse gap-2
      px-4 pb-12 transition-all md:flex-row md:gap-4 "
      >
        {/*left div*/}
        <div
          className="flex flex-col items-center gap-6 pt-8 text-center
        md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left"
        >
          <h1 className="text-4xl font-semibold md:text-6xl text-titulos">
            <Balancer>Ompitimiza tu campo</Balancer>
          </h1>
          <p className="text-neutral-400 md:max-w-[400px]">
            <Balancer>
              ¡Mejora tus cosechas y tu ganado! Únete ahora para descubrir
              herramientas especializadas en gestión de cultivos, cuidado animal
              y uso eficiente de recursos naturales. ¡Suscríbete ya y maximiza
              tu producción! 🌾🐄
            </Balancer>
          </p>
          <button
            className="border-elementos hove:bg-white w-fit rounded-xl
          border-2 bg-elementos px-4 py-2 text-white transition-all
          hover:border-resaltar hover:bg-resaltar hover:bg-transparent
          hover:text-black/90"
          >
            Saber más
          </button>
          <div className="flex gap-2 md:gap-6">
            {bannerImages.map((img, i) => (
              <Image
                className="h-5 w-auto logo"
                key={i}
                src={img}
                alt="cliente-image"
              />
            ))}
          </div>
        </div>
        {/*right div*/}
        <section className="md:w-1/2">
          <div className="flex items-center justify-center h-full">
            <Image
              className="hidden h-auto max-w-[400px] md:block"
              src={homeCow}
              alt="Cow-image"
              priority={true}
            ></Image>
          </div>

          <Image
            className=" h-auto w-full md:hidden"
            src={homeCow}
            alt="Cow-image"
          ></Image>
        </section>
      </section>
    </div>
  );
}

export default HomePage;
