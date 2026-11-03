// ============================================================
// VOID · script.js
// Funciones:
//   1. Validación de los formularios (newsletter y login).
//   2. Control de los Offcanvas y de la cabecera al hacer scroll.
// ============================================================

// ------------------------------------------------------------
// FUNCIÓN 1 · Validación de formularios
// Busca todos los formularios con la clase .form-validable,
// evita el envío real y comprueba los campos con checkValidity().
// ------------------------------------------------------------
function configurarValidacion() {
  var formularios = document.querySelectorAll(".form-validable");

  formularios.forEach(function (formulario) {
    formulario.addEventListener("submit", function (evento) {
      // Evita que la página se recargue al enviar el formulario.
      evento.preventDefault();

      var mensaje = formulario.querySelector(".mensaje-validacion");
      var textoOk = formulario.dataset.mensajeOk || "Formulario enviado correctamente.";

      // Si algún campo no es válido, mostramos los avisos de Bootstrap.
      if (formulario.checkValidity() === false) {
        formulario.classList.add("was-validated");

        mensaje.textContent = "Revisa los campos marcados antes de continuar.";
        mensaje.classList.remove("d-none", "alert-success", "alert-danger");
        mensaje.classList.add("alert-danger");
        return;
      }

      // Si todo es correcto, quitamos los avisos y mostramos el mensaje de éxito.
      formulario.classList.remove("was-validated");
      formulario.reset();

      mensaje.textContent = textoOk;
      mensaje.classList.remove("d-none", "alert-success", "alert-danger");
      mensaje.classList.add("alert-success");
    });
  });
}

// ------------------------------------------------------------
// FUNCIÓN 2 · Offcanvas y cabecera dinámica
// El botón de la barra abre la cesta con data-bs-toggle.
// Desde JavaScript cerramos la cesta con "Seguir comprando",
// cerramos el menú al elegir categoría y cambiamos el color
// de la cabecera al hacer scroll.
// ------------------------------------------------------------
function configurarOffcanvas() {
  var panelCarrito = document.getElementById("cartOffcanvas");
  var panelMenu = document.getElementById("menuOffcanvas");
  var botonCerrarCarrito = document.getElementById("cerrarCarrito");

  if (panelCarrito && botonCerrarCarrito) {
    botonCerrarCarrito.addEventListener("click", function () {
      bootstrap.Offcanvas.getOrCreateInstance(panelCarrito).hide();
    });
  }

  // Al elegir una categoría en el menú móvil, cerramos el panel
  // y hacemos scroll hasta la sección elegida.
  if (panelMenu) {
    panelMenu.querySelectorAll("a[href^='#']").forEach(function (enlace) {
      enlace.addEventListener("click", function (evento) {
        evento.preventDefault();

        var destino = document.querySelector(enlace.getAttribute("href"));
        bootstrap.Offcanvas.getOrCreateInstance(panelMenu).hide();

        // Esperamos a que Bootstrap cierre el panel y libere el scroll.
        if (destino) {
          setTimeout(function () {
            destino.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 350);
        }
      });
    });
  }

  // Cabecera dinámica: transparente sobre el hero y blanca al hacer scroll.
  var cabecera = document.querySelector("header.fixed-top");

  if (cabecera) {
    // Si la página se recarga con scroll, aplicamos el estado correcto.
    if (window.scrollY > 50) {
      cabecera.classList.add("header-scrolled");
    }

    window.addEventListener("scroll", function () {
      cabecera.classList.toggle("header-scrolled", window.scrollY > 50);
    });
  }
}

// Ejecutamos las dos funciones cuando el HTML ya está cargado
// (los scripts se encuentran al final del <body>).
configurarValidacion();
configurarOffcanvas();
