# 44.827.097 - Trabajo Practico GolShop - Ramiro Chufeni

## Materia
Aplicaciones Web 1

## Proyecto
GolShop

## Descripción
Ecommerce deportivo desarrollado por etapas.

## Etapa 1
- Estructura HTML del sitio
- Página principal
- Login
- Registro
- Categorías

## Etapa 2
- Estilos con CSS
- Paleta de colores
- Navbar estilizado
- Login y registro estilizados
- Card de producto
- Layout general
- Uso de imágenes y gif
- Identidad visual de la tienda

## Etapa 3
- Incorporación de archivos JavaScript
- Redirección del login hacia la página principal
- Redirección del botón Logout hacia el login
- Estructura de datos con array de objetos para las páginas
- Componente dinámico de navbar
- Componente dinámico de cards de productos
- Estructura de datos para productos
- Manejo de cantidades con botones para sumar y restar productos
- Organización del proyecto en carpetas para mejorar la mantenibilidad

## Etapa 4
- Creación de una estructura JSON para los productos
- Carga de productos mediante `fetch`
- Cards dinámicas según la categoría del producto
- Página principal con varios productos por categoría
- Guardado del usuario logueado en `sessionStorage`
- Guardado de productos agregados al carrito en `localStorage`
- Página de carrito de compras
- Visualización de productos agregados al carrito
- Posibilidad de eliminar productos del carrito
- Cards con título, imagen, descripción, precio, selector de cantidad y botón para añadir al carrito

## Mejora significativa final
Como mejora significativa final se corrigieron las rutas relativas para mejorar la reproducibilidad del proyecto, se agregó un footer general, se corrigió la visualización de imágenes en el carrito, se agregó el botón de finalizar compra y se mejoró la organización general del código.
Estas mejoras aportan a la experiencia de usuario, a la funcionalidad del ecommerce y a la mantenibilidad del proyecto.

## Tecnologías utilizadas

## HTML5
Se utilizó para crear la estructura de las páginas del ecommerce.

## CSS3
Se utilizó para darle estilo visual al sitio, definir la paleta de colores, organizar el layout, diseñar el navbar, las cards, los formularios y el footer.

## JavaScript
Se utilizó para agregar interactividad, manipular el DOM, crear componentes, manejar eventos y desarrollar la lógica del carrito.

## JSON
Se utilizó como fuente de datos para almacenar los productos del ecommerce.

## Fetch API
Se utilizó para obtener los productos desde el archivo JSON y cargarlos dinámicamente en las páginas.

## sessionStorage
Se utilizó para guardar el estado del usuario logueado durante la sesión.

## localStorage
Se utilizó para guardar los productos agregados al carrito de compras.

## GitHub Pages
Se utilizó para publicar el proyecto en una plataforma accesible públicamente.

## Categorías
Fútbol
Básquet
Otros Deportes

## Estructura del proyecto
index.html: página principal.
pages/: páginas internas del ecommerce.
css/: estilos del proyecto.
js/: lógica JavaScript.
js/components/: componentes reutilizables.
js/data/: archivo JSON con productos.
img/: imágenes, logo y recursos visuales.

## Uso del proyecto
Para visualizar correctamente el proyecto de forma local, se recomienda abrirlo con Live Server desde Visual Studio Code, ya que el sitio utiliza módulos de JavaScript y fetch.

## Flujo recomendado:
Abrir pages/login.html.
Completar email y contraseña.
Presionar Ingresar.
Navegar por la tienda.
Agregar productos al carrito.
Revisar la página del carrito.
Finalizar la compra.

## Roadmap
El detalle del desarrollo por etapas se encuentra en el archivo ROADMAP.md.