import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4rp5NXtubvGB1UdP50oG2x2gdNDxVlSDsS8FbaPVY8d5nFJVW-M6z1-XJ_Di7w6BVKLwR356UH9wi--3toaU00u7D-HDtn7CO10nWDn9cNeluKU0I3BCrCa2G_boxCeBe9BB8hMNeMN6r-0qXM71-pMMZpOsoER4v_uU7Pp53T2bkVjEPYibdTiJhg7rNCnFf7iYuErQHlvwDa4nKlypu-r2B5RPSoQdkb_pWlLdA2Mpl8DM9ifmlgrOIYe26kN6nhKq3QBb-FCm")',
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Tomografía Computarizada Veterinaria de Alta Precisión
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Ofrecemos servicios de tomografía computarizada (TC) de última
              generación para animales, proporcionando imágenes tridimensionales
              detalladas que ayudan a los veterinarios a realizar diagnósticos
              precisos y planificar tratamientos efectivos.
            </h2>
          </div>
          <Link
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1193d4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            to="/solicitar-turno"
          >
            <span className="truncate">Solicitar Turno</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
