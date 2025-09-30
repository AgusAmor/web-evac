import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eff3] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d171b]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
        <h1 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em]">
          EVAC
        </h1>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <li className="list-none">
            <Link
              className="text-[#0d171b] text-sm font-medium leading-normal"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="text-[#0d171b] text-sm font-medium leading-normal"
              to="/servicios"
            >
              Servicios
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="text-[#0d171b] text-sm font-medium leading-normal"
              to="/nosotros"
            >
              Nosotros
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="text-[#0d171b] text-sm font-medium leading-normal"
              to="/contacto"
            >
              Contacto
            </Link>
          </li>
          <li className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#1193d4] text-slate-50 text-sm font-bold leading-normal">
            <Link to="/solicitar-turno">Solicitar Turno</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}
