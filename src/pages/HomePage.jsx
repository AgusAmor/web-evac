import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="bg-gray-100">
      <section className="mx-10 max-w-full pt-25 sm:pt-30 lg:pt-30 pb-20 sm:pb-20 lg:pb-20">
        <div
          className="flex-col gap-6 bg-cover bg-center rounded-lg bg-no-repeat items-start justify-end p-10 pb-20 pt-30 sm:pt-55 lg:pt-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4rp5NXtubvGB1UdP50oG2x2gdNDxVlSDsS8FbaPVY8d5nFJVW-M6z1-XJ_Di7w6BVKLwR356UH9wi--3toaU00u7D-HDtn7CO10nWDn9cNeluKU0I3BCrCa2G_boxCeBe9BB8hMNeMN6r-0qXM71-pMMZpOsoER4v_uU7Pp53T2bkVjEPYibdTiJhg7rNCnFf7iYuErQHlvwDa4nKlypu-r2B5RPSoQdkb_pWlLdA2Mpl8DM9ifmlgrOIYe26kN6nhKq3QBb-FCm")',
          }}
          aria-label="Imagen de portada de tomografía computarizada veterinaria"
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-6xl font-black leading-tight tracking-[-0.033em]">
              Estudios Veterinarios de Alta Complejidad
            </h1>
            <p className="text-white text-lg font-normal leading-normal">
              Ofrecemos servicios de tomografía computarizada (TC) de última
              generación para animales, proporcionando imágenes tridimensionales
              detalladas que ayudan a los veterinarios a realizar diagnósticos
              precisos y planificar tratamientos efectivos.
            </p>
          </div>
          <div className=" flex items-center mt-10 gap-x-6">
            <Link
              to="/contacto"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Contáctanos
            </Link>
            <Link
              to="/solicitar-turno"
              className="text-sm/6 font-semibold text-white"
            >
              Solicitar turno <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-10 py-5 max-w-[1920px]">
        <div className="layout-content-container flex flex-col max-w-full flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h2 className="text-[##200202] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Tomografía Computarizada Veterinaria
            </h2>
          </div>
          <p className="text-[##200202] text-base font-normal leading-normal pb-3 pt-1 px-4">
            La tomografía computarizada (TC) es una técnica de imagen avanzada
            que utiliza rayos X para crear imágenes detalladas del interior del
            cuerpo de su mascota. A diferencia de las radiografías
            convencionales, la TC proporciona imágenes tridimensionales que
            permiten una visualización más precisa de los órganos y tejidos.
          </p>
          <h3 className="text-[##200202] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Planos de Imagen
          </h3>
          <p className="text-[##200202] text-base font-normal leading-normal pb-3 pt-1 px-4 mb-8">
            Las imágenes de TC se pueden visualizar en tres planos principales:
            axial (transversal), coronal (frontal) y sagital (lateral). Cada
            plano ofrece una perspectiva única para evaluar diferentes
            estructuras anatómicas.
          </p>
          <div className="flex w-full grow @container p-2">
            <div className="w-7xl mx-auto gap-1 overflow-hidden aspect-[3/2] rounded-lg grid grid-cols-[2fr_1fr_1fr] ">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4yPP1cEiLQ2VC9WJ6_jd8joKP6mzCVkTOsHblve7wg3yeGtP6ZfUjC46E1I37guY3-Fq5gTCL1PAMVIFbs-p1EVbxyjeOxqVLJWs6wi1IQamLzo0w6qTiastRFbZO7Ct7cFa3x_yoiPExELd_8ZkKrpfFad-CLNqq43AIpuN8-5wm2ppI5cF-iOxAfbSflvnk-2aYkTYfwTm0-I-aH0Lf0G6R1rZ0z7esVUhI3porRXVnOSjNlsvEKEZjmEGXDYhAQb2UYJumg0pD")',
                }}
                aria-label="Plano axial de tomografía computarizada"
              ></div>
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN1SX6jKpiDFPwzOtIODrKpQLxF6Fu42aU0wzSQ-OnpKn9klGVuGuZZ_NDf2iWtPxURkS_4Z3pXTHvUbnHA99z1HllWjkl3wmTyBGsNyMje747f-wqPLBBCen8cYfPQQYQssmM2HrOyxhiliPFHu0q7W56D7kXSAqGhGpRx9yopNDP6Ho-0ZV4hUWFhsXUF5xCOj6FWv5oMNsV9iHqlBbL4qwQZkRLtiEjDuFSWOcBox8kdU89qFdk6wbJMnZAu9Wn8FnGhXMmMPCB")',
                }}
                aria-label="Plano coronal de tomografía computarizada"
              ></div>
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYtTtS6El7_nbCq1TARy059qiLHME7M5wY2EXrU6L1EaTnxsD1BiGe1IQyOo9x5Alc1NDQ3zNQm0WrUSTUx_rSW44HhCpiAAPqwJBp4R2HieiG6AtBCCfC9-khSkEtRuYJR9k97jwX_LquYFohWdxhpppWCAotoby7ftqfHK_JKLgEoKKuY4digNgunXzWLpAYgfhqBgDXDldGcgK0XTaG4orIZ5Hu-MrCYGVik0JWu1AddzIodJEvDcEn8JxhsRHZaTTp7sPgaBIV")',
                }}
                aria-label="Plano sagital de tomografía computarizada"
              ></div>
            </div>
          </div>

          <h3 className="text-[#200202] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Uso de Contraste
          </h3>
          <p className="text-[##200202] text-base font-normal leading-normal pb-3 pt-1 px-4">
            En algunos casos, se utiliza un medio de contraste intravenoso para
            mejorar la visualización de ciertos tejidos y vasos sanguíneos. El
            contraste se administra en diferentes fases: arterial, venosa y
            tardía, para capturar imágenes en diferentes momentos de la
            circulación del contraste.
          </p>
        </div>
      </section>
    </main>
  );
}
