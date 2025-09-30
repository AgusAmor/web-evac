import * as React from "react";
import Modal from "../components/Modal";

function AskTurn() {
  const [form, setForm] = React.useState({
    paciente: "",
    especie: "",
    raza: "",
    peso: "",
    edad: "",
    tutor: "",
    telefono: "",
    email: "",
    orden: null,
    estudios: null,
    aclaraciones: "",
    privacidad: false,
  });
  const [showModal, setShowModal] = React.useState(true);

  React.useEffect(() => {
    setShowModal(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm((prevForm) => ({ ...prevForm, [name]: checked }));
    } else if (type === "file") {
      setForm((prevForm) => ({ ...prevForm, [name]: files[0] }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log("Formulario enviado:", form);
    alert("Formulario enviado. Gracias por su solicitud.");
    // Reiniciar el formulario
    setForm({
      paciente: "",
      especie: "",
      raza: "",
      peso: "",
      edad: "",
      tutor: "",
      telefono: "",
      email: "",
      orden: null,
      estudios: null,
      aclaraciones: "",
      privacidad: false,
    });
  };

  return (
    <div className="p-8">
      <Modal open={showModal} onClose={() => setShowModal(false)} />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
          <h1 className="text-[#0d171b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Solicitud de Turno
          </h1>
          <div className="flex max-w-[820px] flex-wrap items-end gap-4 px-4 py-3 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="w-full "
              aria-label="Formulario de solicitud de turno"
            >
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="paciente"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Nombre del Paciente
                  </span>
                  <input
                    id="paciente"
                    name="paciente"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ingrese el nombre del paciente"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.paciente}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="especie"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Especie
                  </span>
                  <select
                    id="especie"
                    name="especie"
                    required
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.especie}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione la especie</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>
                <label htmlFor="raza" className="flex flex-col min-w-40 flex-1">
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Raza
                  </span>
                  <input
                    id="raza"
                    name="raza"
                    type="text"
                    required
                    placeholder="Ingrese la raza"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.raza}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label htmlFor="peso" className="flex flex-col min-w-40 flex-1">
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Peso (kg)
                  </span>
                  <input
                    id="peso"
                    name="peso"
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    placeholder="Ingrese el peso del paciente"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.peso}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="edad" className="flex flex-col min-w-40 flex-1">
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Edad
                  </span>
                  <input
                    id="edad"
                    name="edad"
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    placeholder="Ingrese la edad del paciente"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.edad}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="tutor"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Nombre del Tutor
                  </span>
                  <input
                    id="tutor"
                    name="tutor"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ingrese el nombre del tutor"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.tutor}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="telefono"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Teléfono
                  </span>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Ingrese el teléfono"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.telefono}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="email"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    E-mail
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Ingrese el e-mail"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="orden"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Orden Médica
                  </span>
                  <input
                    id="orden"
                    name="orden"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="estudios"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Estudios Previos
                  </span>
                  <input
                    id="estudios"
                    name="estudios"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="aclaraciones"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <span className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                    Aclaraciones
                  </span>
                  <textarea
                    id="aclaraciones"
                    name="aclaraciones"
                    placeholder="Ingrese aclaraciones adicionales"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] min-h-36 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                    value={form.aclaraciones}
                    onChange={handleChange}
                  ></textarea>
                </label>
              </div>
              <div className="px-4">
                <label
                  htmlFor="privacidad"
                  className="flex gap-x-3 py-3 flex-row items-center"
                >
                  <input
                    id="privacidad"
                    name="privacidad"
                    type="checkbox"
                    className="h-5 w-5 rounded border-[#cfdfe7] border-2 bg-transparent text-[#1193d4] checked:bg-[#1193d4] checked:border-[#1193d4] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cfdfe7] focus:outline-none"
                    checked={form.privacidad}
                    onChange={handleChange}
                    aria-required="true"
                  />
                  <span className="text-[#0d171b] text-base font-normal leading-normal">
                    Consiento el tratamiento de mis datos personales según la
                    política de privacidad
                  </span>
                </label>
              </div>
              <p className="text-[#0d171b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Advertencias: Ayuno de 12 horas previo al estudio. Estudios
                previos obligatorios para la realización del estudio.
              </p>
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-blue-950 text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-800"
                >
                  <span className="truncate">Enviar Solicitud</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AskTurn };
