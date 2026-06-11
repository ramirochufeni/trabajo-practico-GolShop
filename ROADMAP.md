# Roadmap de Desarrollo - GolShop - Ramiro Chufeni

## Introducción

GolShop es un ecommerce deportivo desarrollado para la materia Aplicaciones Web 1. El proyecto fue realizado por etapas, incorporando progresivamente estructura HTML, estilos CSS, JavaScript, componentes, carga de productos desde JSON, almacenamiento en el navegador y carrito de compras.

El objetivo principal fue construir una tienda online funcional, organizada y mantenible, aplicando los contenidos vistos durante las clases.

## Etapa 1 - Estructura inicial del sitio

En la primera etapa se desarrolló la estructura base del ecommerce utilizando HTML.

Se crearon las siguientes páginas:

* Página principal o home.
* Página de login.
* Página de registro.
* Páginas para cada categoría.
* Navbar inicial.
* Archivo README con los datos del proyecto.

El objetivo de esta etapa fue definir la base de la web y permitir la navegación entre las distintas páginas.

## Etapa 2 - Estilos e identidad visual

En la segunda etapa se incorporó CSS para mejorar la presentación visual del ecommerce.

Se trabajó en:

* Paleta de colores personalizada.
* Navbar estilizado.
* Formularios de login y registro.
* Cards de productos.
* Layout general.
* Imágenes en formato WebP.
* GIF en la página principal.
* Logo e icono propio para la tienda.

La identidad visual se orientó a una tienda deportiva, pero sobre todo más al fútbol, teniendo como icono una pelota de futbol, utilizando colores verdes, blancos y tonos oscuros para transmitir una estética relacionada a las canchas de futbol.

## Etapa 3 - JavaScript, DOM y componentes

En la tercera etapa se incorporó JavaScript para mejorar la funcionalidad y la mantenibilidad del código.

Se desarrollaron:

* Redirección desde el login hacia la página principal.
* Redirección desde logout hacia el login.
* Componente dinámico para el navbar.
* Componente para las cards de productos.
* Manejo de cantidades con botones de sumar y restar.
* Organización del proyecto en carpetas.
* Uso del DOM para generar contenido dinámicamente.

Esta etapa permitió reducir código repetido y trabajar con una estructura más ordenada.

## Etapa 4 - JSON, fetch y carrito de compras

En la cuarta etapa se creó un archivo JSON como fuente de datos para los productos del ecommerce.

Se incorporó:

* Archivo JSON con productos.
* Carga de productos mediante fetch.
* Cards dinámicas según la categoría.
* Home con varios productos por categoría.
* Uso de sessionStorage para guardar el usuario logueado.
* Uso de localStorage para guardar productos en el carrito.
* Página de carrito de compras.
* Visualización de productos agregados al carrito.
* Posibilidad de eliminar productos del carrito.

Esta etapa permitió que la web tenga un comportamiento similar a un ecommerce real.

## Correcciones e iteraciones realizadas

Durante el desarrollo se revisaron observaciones realizadas por el profesor.

Una de las correcciones principales fue el uso de rutas relativas, para garantizar que el proyecto pueda ser clonado y ejecutado correctamente en distintas computadoras.

También se reorganizó el proyecto siguiendo una arquitectura de carpetas más clara:

* `pages/`: páginas internas.
* `css/`: estilos.
* `js/`: lógica JavaScript.
* `js/components/`: componentes reutilizables.
* `js/data/`: datos del proyecto.
* `img/`: recursos visuales.

## Mejora significativa final

Como mejora significativa para la entrega final se incorporaron varias mejoras respecto a las entregas anteriores:

* Corrección de rutas relativas para mejorar la reproducibilidad del proyecto.
* Footer general para las páginas.
* Icono del navbar con acceso directo al home.
* Corrección de imágenes dentro del carrito.
* Botón para finalizar compra.
* Vaciado del carrito al finalizar la compra.
* Mejor organización del código.
* Separación entre estructura, estilos, lógica y datos.

Estas mejoras aportan a la experiencia de usuario, la funcionalidad del ecommerce y la mantenibilidad del código.

## Conclusión

En el desarrollo de GolShop se aplicaron todos los contenidos vistos en las clases de la materia Aplicaciones Web 1. Se comenzó con una estructura HTML simple y se avanzó hasta lograr un ecommerce funcional con estilos, componentes, carga dinámica de productos, almacenamiento en el navegador y carrito de compras.

El resultado final es una tienda deportiva online funcional, organizada y preparada para futuras mejoras.
