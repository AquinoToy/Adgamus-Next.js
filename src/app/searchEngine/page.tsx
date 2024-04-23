"use client";

import Link from "next/link";
{
  /**/
}

function searchEngine() {
  return (
    <div className=" flex h-[calc(100vh-5rem)] items-center justify-center">
      <form>
        <div className="block w-full rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <div className="border-b-2 border-neutral-100 bg-green-200 px-6 py-3 dark:border-white/10">
            Featured
          </div>
          <div className="border-b-2 border-neutral-100 px-3 pt-3 dark:border-white/10">
            {/* Tabs navigation */}
            <ul
              className="-mb-0.5 flex list-none flex-row flex-wrap border-b-0 ps-0"
              role="tablist"
              data-twe-nav-ref
            >
              <li role="presentation">
                <a
                  href="#!"
                  className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-text-color data-[twe-nav-active]:text-texto dark:text-white/50 dark:hover:bg-[#3c3c3c] dark:data-[twe-nav-active]:text-primary"
                  data-twe-nav-active
                  role="tab"
                  aria-controls="tabs-home"
                  aria-selected="true"
                >
                  Busqueda Simple
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#!"
                  className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-[#3c3c3c] dark:data-[twe-nav-active]:text-primary"
                  role="tab"
                  aria-controls="tabs-profile"
                  aria-selected="false"
                >
                  Busqueda Avanzada
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Comienza ahora mismo{" "}
            </h5>
            <p className="mb-4 text-base">
              Realiza una búsqueda por nombre científico, etc.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-elementos px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-resaltar hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default searchEngine;
