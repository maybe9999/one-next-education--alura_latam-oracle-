IA generativa en Front-End: trabajando 
con semántica y HTML

-1_1: 
Video presentación:
Barbara
Se centra en generar un buen código a nivel semántico cuando es la hora de programar 

-1_2: 
¡Hola!
¡Es muy bueno recibirte para otro curso!

Espero que sea una experiencia de aprendizaje increíble y que podamos vencer todos los desafíos juntos. En este curso, vamos a revisar y refactorizar código con la ayuda de la IA Generativa.

Para que puedas seguir el contenido sin grandes problemas, se recomienda que ya tengas conocimiento sobre HTML, CSS y Accesibilidad en la web.

Además, es necesario que ya tengas instalado el Visual Studio Code (VSCode) para seguir adecuadamente la evolución del proyecto.

Si necesitas más detalles, puedes consultar el VisualStudio Code: instalación, teclas de acceso directo, plugins e integraciones

Enlace del Proyecto para empezar a poner manos a la obra!

¿Listo para codificar? Ven conmigo.

-1_3:
Video: Empezando el proyecto.

Jornada sitio de agencia de viajes.

Vamos a discutir sobre codigo de calidad, mas haya de si el sitio se ve bonito

-1_4:
Video:

BEM 
Block Element Modificador, es un patron de diseño a la hora de nombrar clases en un árbol jerárquico html.

-Encabezado__container
	-encabezado
		encabezado__logo
			encabezado__logo–ico
		encabezado__navegacion
			encabezado__navegacion–elemento

A nivel codigo debemos asegurarnos de agregar elementos de accesibilidad
-el rel en las imágenes

Un parte importante del desarrollo es hacer un buen codigo, por que no siempre lo vamos a ver nosotros.


--1_5:
Mas info: CSS y el patrón BEM.

¡Hola!

Es posible que te estés preguntando: "¿Por qué estamos hablando de CSS?". Bueno, como sabemos, para construir aplicaciones front-end eficaces, no basta con dominar la lógica y los patrones de diseño, ya que la estilización es una parte crucial de la experiencia del usuario.

Y cuando hablamos de estilización, un patrón que ha ganado bastante tracción y puede ser de gran ayuda en mantenimiento y escalabilidad es BEM. ¿Entonces, vamos a entender este patrón?

¿Qué es BEM?
BEM significa Block, Element, Modifier. Es una metodología que proporciona una convención para nombrar clases en CSS, haciendo que tu código sea más legible y comprensible.

Block: Es una entidad independiente y significativa por sí sola. Ejemplo: header, container, menu.

Element: Partes de un bloque que tienen significado en conjunto con ese bloque. Ejemplo: menu__item, header__logo.

Modifier: Una variación o extensión de un bloque o elemento. Ejemplo: menu--hidden, menu__item--active.

¿Por qué usar BEM?
Legibilidad: Al observar una clase BEM, puedes entender fácilmente la relación entre el CSS y el HTML, qué está sucediendo y dónde.

Independencia: Los bloques son independientes y pueden reutilizarse sin estar vinculados a otros elementos.

Sin cascada: Como BEM evita la especificidad, los estilos no se superponen, evitando efectos secundarios no deseados.

Casos de uso comunes en frontend:
Componentización: Piensa en los componentes como bloques. Cuando creamos componentes en frameworks como React, Vue o Angular, el patrón BEM se puede aplicar fácilmente para mantener la consistencia de estilización.

Mantenimiento y escalabilidad: Supongamos que estás trabajando en un equipo grande, donde múltiples desarrolladores trabajan en la base de código. Con BEM, cada persona puede entender e identificar rápidamente la estructura y relación entre HTML y CSS, sin temor a romper estilos existentes.

<div class="card">
    <img src="..." alt="..." class="card__image">
    <h2 class="card__title">Título</h2>
    <p class="card__description">Descripción aquí.</p>
    <button class="card__button card__button--primary">Haz clic aquí</button>
</div>


Copia el código
Observa cómo, incluso sin ver el CSS, tienes una idea clara de la estructura y las relaciones.
	
Este tema es tan interesante que uno de nuestros colaboradores escribió el artículo Creación de componentes CSS con el estándar BEM y también tenemos un curso Arquitectura CSS: descomplicando los problemas donde la instructora Jeanmarie Quijada aborda el tema.


--1_6:

Video: Luri y la primera refactorización del código

pide ayuda a luri a refactorizar el codigo para influir etiquetas semanticas:

header y nad usando listas desordenadas.


--1_7:
Cuestionario: Semantica HTMl en Accesibilidad.

Los elementos <div> no agregan ninguna semántica al código. La accesibilidad y el SEO se mejoran cuando se usan elementos HTML semánticos.


Utilizaría etiquetas semánticas como <header>, <nav>, <main>, <footer> correctamente para describir significado y contenido, ayudando a lectores de pantalla y mejorando los resultados de SEO.


--1_8:
Cuestionario: Desafío: principios de la semántica HTML - Navegación

La agencia de viajes "Jornada" está reformulando su sitio web para mejorar la experiencia de sus usuarios. El equipo de desarrollo web de Jornada ha estado trabajando arduamente para asegurar que la refactorización del código sea accesible y siga las mejores prácticas de HTML semántico. Sin embargo, se han encontrado con un problema: la navegación principal del sitio web no es clara y no sigue los estándares de semántica HTML y accesibilidad.

Tu desafío será ayudar al equipo a refactorizar su código HTML para hacerlo más accesible y semántico.

Código base HTML:

<a>
  <img class="encabezado__logo--icono" alt="" src="./img/logoproviblanca-1@2x.png" />
</a>
<div class="encabezado__navegacion">
  <a class="encabezado__navegacion--elemento" href="">Blog</a>
  <a class="encabezado__navegacion--elemento" href="">Paquete de viaje</a>
  <a class="encabezado__navegacion--elemento" href="">Contacto</a>
</div>
Copia el código
Espero que eso ayude al equipo de "Jornada" a mejorar la accesibilidad y semántica de su sitio web.

El código debe ser refactorizado para incluir una etiqueta de navegador HTML que represente la navegación principal y una lista no ordenada para los elementos de navegación. Además, la imagen del encabezado debe tener un texto alternativo apropiado para la accesibilidad.

<img class="encabezado__logo--icono" alt="Logo de la Jornada" src="./img/logoproviblanca-1@2x.png" />
</a>
<nav class="encabezado__navegacion" role="navigation" aria-label="Navegación principal">
  <ul class="encabezado__navegacion--lista">
    <li class="encabezado__navegacion--elemento">
      <a href="">Blog</a>
    </li>
    <li class="encabezado__navegacion--elemento">
      <a href="">Paquetes de viaje</a>
    </li>
    <li class="encabezado__navegacion--elemento">
      <a href="">Contacto</a>
    </li>
  </ul>
</nav>
Copia el código
Y el CSS:

.encabezado__navegacion--lista {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.encabezado__navegacion--elemento a {
    /** demás estilos omitidos, solo ajustamos el selector */
}
Copia el código
Otra forma interesante de seg

--1_9:
Repaso:
Lo que aprendimos en esta aula:

Utilizar atributos alt significativos para imágenes, proporcionando una descripción precisa para lectores de pantalla;
Aplicar la etiqueta <nav> para destacar la navegación principal del sitio;
Implementar listas (<ul> y <li>) para representar estructuralmente elementos de navegación, que es estándar para menús;
Aplicar atributos ARIA (role y aria-label) para mejorar la accesibilidad y proporcionar contextos adicionales para lectores de pantalla.


--2_1:
mas info. proyectos e area anterior.

¿Comenzando en esta etapa? Aquí puedes descargar los archivos del proyecto que hemos avanzado hasta el aula anterior.

Descargue los archivos en Github o haga clic aquí para descargarlos directamente.


--2_2:

Video: Refactorizando el banner.


le dice a la ia que refactorize.

cambio div por section en el banner y uso las etiquetas figure y figcaption

--2_3:
header
main
footer.

--2_4:
Cuestionario:

Durante un café con tu colega desarrolladora, comenzaron a discutir sobre la refactorización del código HTML, agregando semántica y buenas prácticas. En la conversación, un tema que llamó la atención fue la forma adecuada de agregar semántica al HTML. Entonces, decidieron evaluar el siguiente código:

<div id="header">...</div>
<div id="main">...</div>
<div id="footer">...</div>
Copia el código
Considerando el contexto de buenas prácticas y semántica HTML, ¿cuál de las siguientes alternativas refactores correctamente este código en términos de semántica y es más fácil de ser interpretada tanto por personas como por mecanismos de búsqueda?


<header>...</header>
<main>...</main>
<footer>...</footer>

--2_5:
Repaso.
Lo que aprendimos en esta aula:

Utilizar etiquetas semánticas, como <header>, <section> y <main>, para estructurar y dar significado al contenido;

Describir las imágenes de manera adecuada, cambiando el atributo alt de la imagen para proporcionar una descripción más detallada ("Imagen de las Maldivas");

Utilizar <figure> y <figcaption> para implementar la combinación de etiquetas <figure> y <figcaption>, asociando una imagen con su respectiva descripción y mejorando la semántica y accesibilidad;

Realizar una estructuración consistente, ya que la conversión de divisiones genéricas (<div>) a elementos semánticos hace que la estructura sea más consistente, facilitando la interpretación por parte de lectores y navegadores.

--3_1:

¿Comenzando en esta etapa? Aquí puedes descargar los archivos del proyecto que hemos avanzado hasta el aula anterior.

Descargue los archivos en Github o haga clic aquí para descargarlos directamente.


--3_2:
Video:Aplicando semántica en las ofertas.
 
--3_3:
Mas info:  ¡la accesibilidad es importante!

Sabe, cuando hablamos de HTML semántico, estamos yendo mucho más allá de simplemente organizar un código. Estamos haciendo que la web sea un espacio más inclusivo, accesible y amigable para todos.

¿Por qué esto es tan importante? Bueno, piensa en las IAs generativas, por ejemplo. Ellas pueden ayudar en esto, ya que, cuando tenemos un código limpio y estructurado semánticamente, estas IAs pueden interpretar mejor el contenido, lo que puede ayudar a hacer que la web sea más inclusiva y accesible para todos.

Si deseas profundizar y obtener una comprensión más amplia sobre semántica y accesibilidad, no hay lugar mejor para comenzar que explorar los recursos ofrecidos por la WAI ARIA. La sigla ARIA (Accessible Rich Internet Applications) representa un enfoque notable para aumentar la accesibilidad del contenido web para personas con discapacidades, mediante la implementación de tecnologías asistivas.

Algunas fuentes y bibliografía que recomiendo:

W3C's WAI-ARIA Overview: Es el punto de partida. Aquí, tendrás una visión general completa y directa de la fuente.

MDN Web Docs on HTML5 Semantics: Mozilla siempre brilla con sus recursos, y esta sección sobre semántica HTML5 no es una excepción. Explicaciones claras, ejemplos y una visión general sólida de lo que es importante.

WebAIM: Un recurso fantástico para accesibilidad en la web. Aquí encontrarás artículos, herramientas y entrenamientos.

"HTML5 - Designing Rich Internet Applications" por Matthew David: Un buen libro que cubre el poder del HTML5, con un enfoque especial en semántica y diseño.

"Inclusive Design Patterns - Coding Accessibility Into Web Design" por Heydon Pickering: Una lectura esencial si quieres entender cómo el diseño inclusivo y la accesibilidad se cruzan.

Recuerden: la web fue hecha para todos. Cuanto más aprendamos y apliquemos estos conceptos, más podremos contribuir a hacer de Internet un lugar mejor y más inclusivo.


--3_4:
Cuestionario: HTML semántico para la accesibilidad

Estás refactorizando una página web para mejorar el acceso y la experiencia de usuarios con discapacidades visuales. La semántica HTML es esencial para satisfacer estas necesidades, ya que las etiquetas correctas proporcionan información sobre la estructura de la página.

Basado en este contexto, evalúa el código abajo y selecciona qué etiqueta sugieres para reemplazar las divs de modo a mejorar la semántica HTML y la accesibilidad en la web?

<header class="header">
    <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>

Esta mejora la semántica HTML, ya que cambia las divs por etiquetas que especifican el papel de estas secciones en la estructura de la página.


--3_6:
Repaso

Lo que aprendimos en esta aula:

Convertir divs genéricas a secciones: Se cambió la etiqueta <div> con la clase "ofertas" a la etiqueta semántica <section>. Este cambio indica claramente que el contenido interno representa una sección cohesiva del contenido, haciendo que el código sea más accesible y semánticamente correcto;

Usar títulos semánticos: El nombre del destino, anteriormente marcado como un elemento <b>, fue convertido a un elemento de título <h2>. Esto no solo proporciona mayor énfasis visual y semántico, sino que también ayuda a las tecnologías de asistencia (como lectores de pantalla) a identificar y navegar el contenido;

Convertir divs a enlaces: La acción "Ver detalles" fue convertida de un <span> a un <a>, convirtiéndola así en un enlace navegable. Este es un cambio crucial en términos de accesibilidad, ya que permite a los usuarios hacer clic en el enlace y potencialmente navegar a una página de detalles;

Refuerzo de la estructura semántica: La estructura semántica fue reforzada al reemplazar divs genéricas por elementos semánticos en varias áreas del código. Por ejemplo, la etiqueta <section> se utilizó para agrupar cada elemento de oferta, indicando que cada elemento representa una sección distinta del contenido.



--4_2:
Video: Conociendo Lighthouse

Al igual que luri hay otras herramientas para codereview.

Esta lightHouse que es util para inspeccionar la pagina,SEO, Rendimiento, Buenas practicas, Perfomance

--4_3:
Video Semántica y sintaxis

Diferencia entre semantica y sintaxis
Semantica: Hace mas facil de leer,hace el codigo mas legible.

Sintaxis:


--4_4:
Mas info: Google Lighthouse

Hola!

¿Listo para llevar el mundo de Lighthouse al siguiente nivel? En nuestra última charla, te presenté esta increíble herramienta, pero ahora quiero mostrarte algunos matices que pueden marcar la diferencia en tu flujo de trabajo.

1. Análisis profundo de accesibilidad:

Lighthouse va más allá de lo básico al evaluar la accesibilidad. Considera los criterios de WCAG, pautas ampliamente reconocidas para la accesibilidad web. Si profundizas en los informes de accesibilidad, notarás recomendaciones específicas relacionadas con prácticas de HTML semántico. Esto te proporciona un mapa sobre cómo garantizar que tu sitio sea inclusivo y esté optimizado.

2. Comprensión de métricas:

¿Has notado que, además de darte una puntuación, Lighthouse detalla cada métrica? Por ejemplo, "First Contentful Paint" y "Time to Interactive". Cada una de estas métricas te ofrece información valiosa sobre cómo funciona tu sitio y cómo el HTML semántico puede tener un impacto positivo en estos tiempos.

3. IAs generativas y semántica:

Quizás te estés preguntando: "¿Qué tienen que ver las IAs generativas con todo esto?" Bueno, al escribir un HTML semántico bien estructurado y optimizarlo según los consejos de Lighthouse, estás ayudando no solo a los humanos, sino también a las IAs a comprender e interpretar tu contenido. Con la creciente integración de IAs en navegadores y herramientas, esta práctica será cada vez más relevante.

Así que te invito a sumergirte aún más en los informes de Lighthouse, experimentar, ajustar tu código y ver los resultados. Y, por supuesto, siempre que tengas alguna duda o curiosidad, estoy aquí para ayudarte. ¡Vamos juntos en este viaje de aprendizaje y mejora constante!


--4_5:
Mas info: PWA - Progressive Web App

Cuando exploramos Lighthouse, mencionamos rápidamente el término PWA - Progressive Web App. ¿Recuerdas que dije que te dejaría una tarea para que profundizaras más en este tema? Ven conmigo que te lo explicaré detalladamente.

Progressive Web App (PWA): ¿Qué es?
En resumen, un PWA es una aplicación web que se comporta de manera muy similar a una aplicación nativa, es decir, aquellas que descargas desde la tienda de aplicaciones de tu celular. ¿Sabes cuando accedes a un sitio web y te ofrece la opción de "añadir a la pantalla de inicio" y, al hacerlo, actúa casi como una aplicación nativa? ¡Eso es un PWA en acción!

Principales conceptos involucrados:

Respuesta rápida: Un PWA necesita ser ágil, incluso con conexiones lentas. Para ello, muchos utilizan "service workers", scripts que el navegador ejecuta en segundo plano, permitiendo, entre otras cosas, la carga sin conexión.

Apariencia de app nativa: Al abrir un PWA, casi olvidas que estás en un navegador. Se ve y se siente como una aplicación nativa, a menudo incluso incluyendo animaciones de transición y gestos.

Actualizado: A través del uso de service workers, un PWA puede mantenerse siempre actualizado. Busca actualizaciones y las aplica automáticamente.

Seguridad: Los PWA utilizan HTTPS, garantizando que la aplicación no sea adulterada durante su transmisión.

Instalable: Como mencioné, puedes añadir un PWA a la pantalla de inicio y acceder a él como si fuera una aplicación nativa, sin necesidad de una tienda de aplicaciones.

Enlazable: A diferencia de las aplicaciones nativas, un PWA es totalmente enlazable, es decir, puedes compartir tu PWA con un simple enlace.

Al analizar tu proyecto con Lighthouse, te dará comentarios sobre cómo está tu implementación de PWA. Si aún no te has aventurado en esta área, es un campo muy interesante para explorar. Además de mejorar la experiencia del usuario, puede brindar ventajas en rendimiento e incluso en SEO.

--4_6:
Challenger:

¡Hola! ¿Recuerdas esa increíble página de inicio que desarrollamos juntos en el curso? Bueno, ¡ahora tengo un desafío aún más emocionante para ti: completar el proyecto!

Echa un vistazo a las otras páginas que están allí en Figma ¿Te imaginas llevarlas a la vida como hicimos con la página de inicio? Y lo mejor es que puedes elegir cómo hacerlo: ya sea utilizando solo el HTML, JS y CSS que ya hemos visto, o incluso con ese genial framework que estás deseando explorar.

--4_7:

Aquí puedes descargar los archivos del proyecto completo.

Descargue los archivos en Github o haga clic aquí para descargarlos directamente.


--4_8:
Repaso

Lo que aprendimos en esta aula:

Utilizar Lighthouse: Es una herramienta de código abierto automatizada que audita páginas web en términos de rendimiento, accesibilidad, prácticas recomendadas, SEO y PWA (aplicaciones web progresivas). Es una herramienta valiosa para los desarrolladores web porque ayuda a identificar problemas que pueden afectar la experiencia del usuario;

Analizar las principales áreas de evaluación de Lighthouse, como:

Rendimiento: Mide el tiempo de carga de la página, la interactividad y la estabilidad visual. Las recomendaciones pueden incluir optimización de imágenes, mejora de la eficiencia de la caché y reducción del impacto de terceros;
Accesibilidad: Evalúa si la página es accesible para todos los usuarios, incluidos aquellos con discapacidades. Las sugerencias pueden incluir mejorar el contraste de colores o agregar descripciones de texto a las imágenes;
Prácticas Recomendadas: Verifica el uso de API y prácticas modernas. Esto puede incluir recomendaciones para usar HTTPS, evitar API obsoletas o asegurarse de que el sitio no utilice bibliotecas de JavaScript con vulnerabilidades conocidas.

