// import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Data to enrich your online business
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
    // <main className="px-10 py-5 max-w-[1380px] w-full" role="main">
    //   <section
    //     className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center rounded-lg bg-no-repeat items-start justify-end px-10 pb-10"
    //     style={{
    //       backgroundImage:
    //         'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4rp5NXtubvGB1UdP50oG2x2gdNDxVlSDsS8FbaPVY8d5nFJVW-M6z1-XJ_Di7w6BVKLwR356UH9wi--3toaU00u7D-HDtn7CO10nWDn9cNeluKU0I3BCrCa2G_boxCeBe9BB8hMNeMN6r-0qXM71-pMMZpOsoER4v_uU7Pp53T2bkVjEPYibdTiJhg7rNCnFf7iYuErQHlvwDa4nKlypu-r2B5RPSoQdkb_pWlLdA2Mpl8DM9ifmlgrOIYe26kN6nhKq3QBb-FCm")',
    //     }}
    //     aria-label="Imagen de portada de tomografía computarizada veterinaria"
    //   >
    //     <div className="flex flex-col gap-2 text-left">
    //       <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
    //         Estudios Veterinarios de Alta Complejidad
    //       </h1>
    //       <p className="text-white text-sm font-normal leading-normal">
    //         Ofrecemos servicios de tomografía computarizada (TC) de última
    //         generación para animales, proporcionando imágenes tridimensionales
    //         detalladas que ayudan a los veterinarios a realizar diagnósticos
    //         precisos y planificar tratamientos efectivos.
    //       </p>
    //     </div>
    //     <Link
    //       className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1193d4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
    //       to="/solicitar-turno"
    //       aria-label="Solicitar turno de tomografía computarizada"
    //     >
    //       <span className="truncate">Solicitar Turno</span>
    //     </Link>
    //   </section>
    //   <section className="px-10 py-5 max-w-[1444px]">
    //     <div className="layout-content-container flex flex-col max-w-full flex-1">
    //       <div className="flex flex-wrap justify-between gap-3 p-4">
    //         <h2 className="text-[#0d171b] tracking-light text-[32px] font-bold leading-tight min-w-72">
    //           Tomografía Computarizada Veterinaria
    //         </h2>
    //       </div>
    //       <p className="text-[#0d171b] text-base font-normal leading-normal pb-3 pt-1 px-4">
    //         La tomografía computarizada (TC) es una técnica de imagen avanzada
    //         que utiliza rayos X para crear imágenes detalladas del interior del
    //         cuerpo de su mascota. A diferencia de las radiografías
    //         convencionales, la TC proporciona imágenes tridimensionales que
    //         permiten una visualización más precisa de los órganos y tejidos.
    //       </p>
    //       <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
    //         Planos de Imagen
    //       </h3>
    //       <div className="flex w-full grow bg-slate-50 @container p-4">
    //         <div className="w-full gap-1 overflow-hidden bg-slate-50 @[480px]:gap-2 aspect-[3/2] rounded-lg grid grid-cols-[2fr_1fr_1fr]">
    //           <div
    //             className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
    //             style={{
    //               backgroundImage:
    //                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4yPP1cEiLQ2VC9WJ6_jd8joKP6mzCVkTOsHblve7wg3yeGtP6ZfUjC46E1I37guY3-Fq5gTCL1PAMVIFbs-p1EVbxyjeOxqVLJWs6wi1IQamLzo0w6qTiastRFbZO7Ct7cFa3x_yoiPExELd_8ZkKrpfFad-CLNqq43AIpuN8-5wm2ppI5cF-iOxAfbSflvnk-2aYkTYfwTm0-I-aH0Lf0G6R1rZ0z7esVUhI3porRXVnOSjNlsvEKEZjmEGXDYhAQb2UYJumg0pD")',
    //             }}
    //             aria-label="Plano axial de tomografía computarizada"
    //           ></div>
    //           <div
    //             className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
    //             style={{
    //               backgroundImage:
    //                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN1SX6jKpiDFPwzOtIODrKpQLxF6Fu42aU0wzSQ-OnpKn9klGVuGuZZ_NDf2iWtPxURkS_4Z3pXTHvUbnHA99z1HllWjkl3wmTyBGsNyMje747f-wqPLBBCen8cYfPQQYQssmM2HrOyxhiliPFHu0q7W56D7kXSAqGhGpRx9yopNDP6Ho-0ZV4hUWFhsXUF5xCOj6FWv5oMNsV9iHqlBbL4qwQZkRLtiEjDuFSWOcBox8kdU89qFdk6wbJMnZAu9Wn8FnGhXMmMPCB")',
    //             }}
    //             aria-label="Plano coronal de tomografía computarizada"
    //           ></div>
    //           <div
    //             className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
    //             style={{
    //               backgroundImage:
    //                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYtTtS6El7_nbCq1TARy059qiLHME7M5wY2EXrU6L1EaTnxsD1BiGe1IQyOo9x5Alc1NDQ3zNQm0WrUSTUx_rSW44HhCpiAAPqwJBp4R2HieiG6AtBCCfC9-khSkEtRuYJR9k97jwX_LquYFohWdxhpppWCAotoby7ftqfHK_JKLgEoKKuY4digNgunXzWLpAYgfhqBgDXDldGcgK0XTaG4orIZ5Hu-MrCYGVik0JWu1AddzIodJEvDcEn8JxhsRHZaTTp7sPgaBIV")',
    //             }}
    //             aria-label="Plano sagital de tomografía computarizada"
    //           ></div>
    //         </div>
    //       </div>
    //       <p className="text-[#0d171b] text-base font-normal leading-normal pb-3 pt-1 px-4">
    //         Las imágenes de TC se pueden visualizar en tres planos principales:
    //         axial (transversal), coronal (frontal) y sagital (lateral). Cada
    //         plano ofrece una perspectiva única para evaluar diferentes
    //         estructuras anatómicas.
    //       </p>
    //       <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
    //         Uso de Contraste
    //       </h3>
    //       <p className="text-[#0d171b] text-base font-normal leading-normal pb-3 pt-1 px-4">
    //         En algunos casos, se utiliza un medio de contraste intravenoso para
    //         mejorar la visualización de ciertos tejidos y vasos sanguíneos. El
    //         contraste se administra en diferentes fases: arterial, venosa y
    //         tardía, para capturar imágenes en diferentes momentos de la
    //         circulación del contraste.
    //       </p>
    //     </div>
    //   </section>
    // </main>
  );
}
