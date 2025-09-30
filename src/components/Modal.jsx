function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-10">
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <p class="text-[#0d171b] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Proceso de Solicitud de Turno
            </p>
          </div>
          <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            <div class="flex flex-col items-center gap-1 pt-3">
              <div
                class="text-[#0d171b]"
                data-icon="Phone"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
              </div>
              <div class="w-[1.5px] bg-[#cfdfe7] h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-[#0d171b] text-base font-medium leading-normal">
                Comunicación Inicial
              </p>
              <p class="text-[#4c809a] text-base font-normal leading-normal">
                El tutor se comunica con nosotros para iniciar el proceso.
              </p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-[#cfdfe7] h-2"></div>
              <div
                class="text-[#0d171b]"
                data-icon="File"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                </svg>
              </div>
              <div class="w-[1.5px] bg-[#cfdfe7] h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-[#0d171b] text-base font-medium leading-normal">
                Orden Médica
              </p>
              <p class="text-[#4c809a] text-base font-normal leading-normal">
                Se solicita la orden médica del veterinario tratante.
              </p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-[#cfdfe7] h-2"></div>
              <div
                class="text-[#0d171b]"
                data-icon="Heartbeat"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,136H32a8,8,0,0,1,0-16H67.72L81.34,99.56a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,118.42l-9.34,14A8,8,0,0,1,72,136ZM178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"></path>
                </svg>
              </div>
              <div class="w-[1.5px] bg-[#cfdfe7] h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-[#0d171b] text-base font-medium leading-normal">
                Estudios Prequirúrgicos
              </p>
              <p class="text-[#4c809a] text-base font-normal leading-normal">
                Confirmación de la realización de estudios prequirúrgicos.
              </p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-[#cfdfe7] h-2"></div>
              <div
                class="text-[#0d171b]"
                data-icon="Syringe"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M237.66,66.34l-48-48a8,8,0,0,0-11.32,11.32L196.69,48,168,76.69,133.66,42.34a8,8,0,0,0-11.32,11.32L128.69,60l-84,84A15.86,15.86,0,0,0,40,155.31v49.38L18.34,226.34a8,8,0,0,0,11.32,11.32L51.31,216h49.38A15.86,15.86,0,0,0,112,211.31l84-84,6.34,6.35a8,8,0,0,0,11.32-11.32L179.31,88,208,59.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM100.69,200H56V155.31l18-18,20.34,20.35a8,8,0,0,0,11.32-11.32L85.31,126,98,113.31l20.34,20.35a8,8,0,0,0,11.32-11.32L109.31,102,140,71.31,184.69,116Z"></path>
                </svg>
              </div>
              <div class="w-[1.5px] bg-[#cfdfe7] h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-[#0d171b] text-base font-medium leading-normal">
                Revisión Anestésica
              </p>
              <p class="text-[#4c809a] text-base font-normal leading-normal">
                Revisión por nuestro anestesista para evaluar el caso.
              </p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-[#cfdfe7] h-2"></div>
              <div
                class="text-[#0d171b]"
                data-icon="Money"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"></path>
                </svg>
              </div>
              <div class="w-[1.5px] bg-[#cfdfe7] h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-[#0d171b] text-base font-medium leading-normal">
                Depósito de Seña
              </p>
              <p class="text-[#4c809a] text-base font-normal leading-normal">
                Depósito de una seña para confirmar el turno.
              </p>
            </div>
            <div class="flex flex-col items-center gap-1 pb-3">
              <div class="w-[1.5px] bg-[#cfdfe7] h-2"></div>
              <div
                class="text-[#0d171b]"
                data-icon="Calendar"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                </svg>
              </div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-[#0d171b] text-base font-medium leading-normal">
                Asignación de Turno
              </p>
              <p class="text-[#4c809a] text-base font-normal leading-normal">
                Asignación del turno definitivo para el procedimiento.
              </p>
            </div>
          </div>
          <h2 class="text-[#0d171b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Notas Importantes
          </h2>
          <p class="text-[#0d171b] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Ayuno: Es crucial que la mascota mantenga un ayuno de 12 horas antes
            del procedimiento para asegurar la calidad de las imágenes y la
            seguridad del paciente durante la anestesia. Seña: El depósito de la
            seña no es reembolsable en caso de cancelación, pero puede ser
            utilizada para reprogramar el turno dentro de un período de 30 días.
          </p>
          <div class="flex px-4 py-3 justify-center">
            <button
              type="button"
              className="inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              onClick={onClose}
            >
              <span class="truncate">Solicitar Turno Ahora</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
