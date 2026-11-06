# VOID · Práctica de maquetación

E-commerce de moda minimalista realizado con **HTML5, Sass y Bootstrap 5.3**.
El proyecto es mobile-first y usa la rejilla de 12 columnas, componentes nativos de
Bootstrap y un Offcanvas para el carrito.

## Estructura

```
void/
├── index.html              → Home: navbar, hero, newsletter y footer
├── login.html              → Acceso de usuario, formulario
├── css/
│   ├── custom.css          → CSS compilado desde Sass
│   ├── bootstrap-icons.min.css → Bootstrap Icons local
│   └── fonts/              → Fuentes de Bootstrap Icons
├── scss/
│   ├── _variables.scss     → Colores, fuentes y bordes del UI Kit
│   ├── _botones.scss       → Retoques planos de botones y marca
│   ├── _header.scss        → Cabecera dinámica 
│   ├── _offcanvas.scss     → Menú lateral de categoría
│   ├── custom.scss         → Archivo principal que se compila
│   └── bootstrap/          → Fuente SCSS local de Bootstrap 5.3.8
├── js/
│   ├── bootstrap.bundle.min.js
│   └── script.js           → Validación de formularios + control de Offcanvas + cabecera dinámica
├── img/                    → Imágenes locales
├── LICENSE-BOOTSTRAP-ICONS.txt → Licencia de Bootstrap Icons
├── .gitignore 
└── .vscode/settings.json   → Configuración de Live Sass Compiler
```

## Capturas de validacion
![Validacion del html](img/readme/image.png)

## Créditos

- Iconos: [Bootstrap Icons](https://icons.getbootstrap.com/) v1.13.2, licencia MIT.
  Consulta `LICENSE-BOOTSTRAP-ICONS.txt` para el texto completo.
