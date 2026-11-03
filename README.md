# VOID · Práctica de maquetación

E-commerce de moda de lujo minimalista realizado con **HTML5, Sass y Bootstrap 5.3**.
El proyecto es mobile-first y usa la rejilla de 12 columnas, componentes nativos de
Bootstrap y un Offcanvas para el carrito.

## Estructura

```
void/
├── index.html              → Home: navbar, hero, newsletter y footer
├── login.html              → Acceso de usuario
├── css/
│   └── custom.css          → CSS compilado desde Sass (ya incluido)
├── scss/
│   ├── _variables.scss     → Colores, fuentes y bordes del UI Kit
│   ├── _botones.scss       → Retoques planos de botones y marca
│   ├── custom.scss         → Archivo principal que se compila
│   └── bootstrap/          → Fuente SCSS local de Bootstrap 5.3.8
├── js/
│   ├── bootstrap.bundle.min.js
│   └── script.js           → Validación + control de Offcanvas
├── img/                    → Imágenes locales
└── .vscode/settings.json   → Configuración de Live Sass Compiler
```

## Cómo ver la práctica

1. Abre la carpeta `void` en Visual Studio Code.
2. Abre `index.html` con **Live Server** (recomendado) o directamente en el navegador.
3. Prueba:
   - El botón de la cesta de la barra superior.
   - El menú hamburguesa en una ventana estrecha.
   - El formulario de newsletter sin rellenar y con un correo válido.
   - `login.html` con el botón "Entrar" y los campos vacíos o completos.

## Cómo compilar el Sass

El proyecto ya incluye `css/custom.css` compilado, pero si cambias los estilos:

1. Instala la extensión **Live Sass Compiler** (Glenn Marks).
2. Abre `scss/custom.scss`.
3. Pulsa **Watch Sass** en la barra inferior de VS Code.
4. El CSS se generará automáticamente en `css/custom.css`.

La configuración de `.vscode/settings.json` ya indica la ruta de salida y evita
compilar los archivos parciales de Bootstrap.

Alternativa por terminal:

```bash
npx sass scss/custom.scss css/custom.css --no-source-map
```

`scss/bootstrap/` contiene la fuente SCSS oficial de Bootstrap 5.3.8 para que
`@import "bootstrap/bootstrap";` funcione sin depender de `node_modules`.

## Imágenes

Las imágenes están en `img/`. Para usar las fotos definitivas del Figma,
sustituye estos archivos manteniendo el mismo nombre:

- `img/cat-mujer.jpg` → hero de mujer.
- `img/cat-hombre.jpg` → hero de hombre.
- `img/bolso.jpg` → producto 1 de la cesta.
- `img/camopants.jpg` → producto 2 de la cesta.

## Guion breve para defender la práctica (5 minutos)

### 1. Presentación (30 s)

"VOID es un e-commerce de moda de lujo minimalista. He maquetado la home y el
login con Bootstrap 5.3, Sass modular y JavaScript básico, siguiendo un enfoque
mobile-first y el UI Kit de Figma."

### 2. Rejilla y mobile-first (1 min)

- Todo parte de `container-fluid`, `row` y columnas de Bootstrap.
- El hero usa `col-12` en móvil y `col-md-6` en escritorio.
- La columna de hombre se oculta con `d-none d-md-block`.
- `g-0` elimina los márgenes entre columnas y `vh-100` hace el hero de pantalla completa.

### 3. Hero y navbar (1 min)

- La navbar es `position-fixed`, empieza transparente sobre el hero y pasa a blanco al hacer scroll.
- El cambio de fondo y color de letras se hace añadiendo la clase `header-scrolled` desde `script.js`.
- El logotipo está centrado con `position-absolute`, `start-50` y `translate-middle-x`.
- Los botones "Mujer" y "Hombre" se colocan con utilidades de posición y `object-fit-cover`
  mantiene la proporción de las fotos.

### 4. Carrito Offcanvas (1 min)

- El botón de la cesta usa `data-bs-toggle="offcanvas"` y `data-bs-target="#cartOffcanvas"`.
- El panel `offcanvas offcanvas-end` contiene dos productos, el total y el botón de compra.
- Desde `script.js` abro la cesta del menú móvil con `bootstrap.Offcanvas.show()`,
  la cierro con `hide()` y cierro el menú al elegir una categoría.

### 5. Sass modular (1 min)

- `_variables.scss` sobrescribe solo los colores, fuentes y bordes del UI Kit.
- `custom.scss` importa primero las variables, después Bootstrap local y al final `_botones.scss` y `_header.scss`.
- `_botones.scss` convierte los botones en piezas planas: sin radio, mayúsculas y hover invertido.
- `_header.scss` define los dos estados de la cabecera: transparente arriba y blanca al hacer scroll.
- Live Sass Compiler genera `css/custom.css`.

### 6. JavaScript y validación (1 min)

- Solo hay dos funciones.
- `configurarValidacion()` escucha el `submit`, usa `preventDefault()` y `checkValidity()`.
- Si hay errores añade `was-validated`; si todo está bien muestra una alerta de éxito.
- `configurarOffcanvas()` controla los paneles laterales con la API nativa de Bootstrap.
- Esa misma función escucha el `scroll` y añade o quita `header-scrolled` en la cabecera.

### 7. Cierre (30 s)

"He mantenido el código sencillo: componentes nativos, utilidades de Bootstrap y
poco CSS propio. Así la práctica es fácil de mantener y de explicar."

## Posibles preguntas del profesor

**¿Por qué usas `col-md-6` y no `col-6`?**
Porque el diseño es mobile-first: en móvil la columna ocupa las 12 columnas y el
reparto al 50% solo aparece a partir del breakpoint `md`.

**¿Por qué `g-0`?**
Para quitar la separación (gutter) entre las dos columnas del hero y que las
imágenes queden pegadas.

**¿Qué hace `object-fit: cover`?**
Recorta la imagen para llenar su contenedor sin deformarla. En Bootstrap 5.3 se
puede usar directamente con la clase `object-fit-cover`.

**¿Por qué `preventDefault()`?**
Porque no hay backend: evitamos que el formulario recargue la página y mostramos
la validación en el propio navegador.

**¿Qué diferencia hay entre el menú y el carrito?**
Los dos son Offcanvas de Bootstrap, pero el menú se abre desde la izquierda y el
carrito desde la derecha. El carrito tiene contenido estático de ejemplo.

**¿Dónde se cambian los colores?**
En `scss/_variables.scss`. Al recompilar, Bootstrap hereda esos valores.
