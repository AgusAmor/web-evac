# Web-EVAC

Aplicación web desarrollada con React, Vite y Tailwind CSS para ofrecer servicios de tomografía computarizada veterinaria de alta precisión.

## Características principales

- **Frontend moderno:** React + Vite para desarrollo rápido y eficiente.
- **Estilos personalizados:** Tailwind CSS extendido con colores y estilos propios.
- **Diseño responsivo:** Adaptado para dispositivos móviles y escritorio.
- **Páginas principales:**
  - Inicio
  - Servicios
  - Solicitar turno
  - Sobre nosotros
  - Contacto

# web-evac

Proyecto web para solicitar turnos de tomografía computarizada veterinaria. Utiliza [Vite](https://vitejs.dev/), [React](https://react.dev/) y [Tailwind CSS](https://tailwindcss.com/).

## Características principales

- **Formulario funcional y accesible**: Solicita turnos con validación, campos obligatorios y advertencias importantes. Incluye carga de archivos (orden médica, estudios previos) y consentimiento de privacidad.
- **Modal informativo**: Al ingresar a la página de solicitud de turno, se muestra automáticamente un modal con el proceso y notas importantes para el tutor.
- **Navegación responsive y moderna**: Barra de navegación adaptativa, con menú móvil y enlaces a todas las secciones principales.
- **Diseño con Tailwind CSS**: Interfaz moderna, adaptable y fácil de personalizar.
- **Routing con React Router**: Navegación entre páginas como Inicio, Servicios, Nosotros, Contacto y Solicitar Turno.

## Instalación y ejecución

```bash
pnpm install
pnpm run dev
```

## Estructura del proyecto

```
src/
   App.jsx
   main.jsx
   index.css
   components/
      Header.jsx      # Barra de navegación responsive
      Modal.jsx       # Modal informativo del proceso de solicitud
   pages/
      HomePage.jsx    # Página principal
      AskTurn.jsx     # Formulario de solicitud de turno + modal
      AboutUs.jsx     # Información sobre el equipo
      Contact.jsx     # Formulario de contacto
      Services.jsx    # Servicios ofrecidos
public/
index.html
```

## Personalización

- **Modal informativo**: Edita `src/components/Modal.jsx` para cambiar el contenido, estilo o comportamiento del modal que aparece al solicitar turno.
- **Formulario de solicitud**: Modifica `src/pages/AskTurn.jsx` para agregar, quitar o validar campos según tus necesidades.
- **Navegación**: Personaliza los enlaces y estilos en `src/components/Header.jsx`.
