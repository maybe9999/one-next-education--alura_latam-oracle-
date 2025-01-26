CSS: Flexbox y layouts responsivos



–1_1:

Flexbox, es útil por su lado responsivo.

–1_2:
Recursos:

Puedes descargar el archivo zip inicial del proyecto, o acceder a los archivos en Github.

También es posible descargar el mismo editor de código utilizado por el instructor haciendo clic en VScode. Asimismo, puedes descargar la extensión de VScode por el instructor haciendo clic en Live Server. Y, si lo deseas, también puedes acceder al diseño del proyecto desarrollado en este curso en Figmav.

Si tienes interés en obtener más información sobre Live Server y descubrir más extensiones de VScode, puedes leer este artículo escrito por la instructora Beatriz Moura.

Al finalizar esta actividad, si tienes alguna duda, no dudes en solicitar ayuda en el foro. Estamos siempre dispuestos a ayudarte en cada paso, incentivando tu crecimiento profesional y el de toda la comunidad de estudiantes de Alura. Y en caso de que no tengas dudas, puedes ayudar a otra persona en el foro.

Recuerda: ¡La comunidad de Alura la construyes tú!

–1_3:
Flex nos ayuda a distribuir y alinear elementos en torno a sus contenedores.

–1_4:
Mas info: Reset CSS que es?

En el proyecto de este curso se utiliza el archivo con el nombre ‘reset.css’. Es común encontrar este mismo archivo en muchos proyectos. Sin embargo, ¿sabes exactamente por qué se creó y cuál es su influencia en el desarrollo de una interfaz?

Cuando abres un mismo archivo HTML en diferentes navegadores, ya sea Chrome, Firefox o Edge, por ejemplo, es posible que este mismo archivo aparezca de formas diferentes. Esto se debe a que cada uno de estos navegadores inserta automáticamente una serie de valores divergentes de padding, margin y diversas estilizaciones de CSS.

Dado que el problema de la falta de compatibilidad entre navegadores es bastante importante para entender cómo organizar elementos en una página, les comparto el artículo Reset CSS: Qué es, ejemplos, cómo crearlo y usarlo, escrito por la instructora Laís Cavalcanti, que explica en detalle cómo el reset.css resuelve el problema.


–1_5:
video
–1_6:
Cuestionario:                          

Indica la alternativa que contiene el código CSS correcto para organizar los elementos de la lista en línea utilizando Flexbox.

<ul>
      <li>Primer item</li>
      <li>Segundo item</li>
      <li>Tercer item</li>
</ul>

ul {
      display: flex;
}

Es necesario aplicar display: flex al contenedor padre de los elementos que deseas alinear con Flexbox.

                  
–1_7:
Video: media queri



–1_8:
Para saber más: descubriendo la magia de las Media Queries
 Siguiente pregunta

Las Media Queries o consultas de medios, son una técnica esencial en el diseño web responsive y adaptable, también conocido como Responsive Web Design.

Son fragmentos de código CSS que permiten adaptar la presentación de una página web según las características del dispositivo en el que se visualiza. Son la clave para crear experiencias de usuario óptimas en una amplia variedad de dispositivos, desde computadoras de escritorio hasta smartphones y tablets.

¿Cómo funcionan?

Estas consultas permiten establecer condiciones que se aplican cuando se cumplen ciertos criterios, como el ancho de la pantalla, la resolución, la orientación del dispositivo, entre otros. A través de Media Queries, podemos modificar estilos, tamaños de fuente, distribución de elementos y demás propiedades CSS para asegurar una presentación adecuada en cada contexto.

Las Media Queries nos ayudan a los desarrolladores a crear sitios web flexibles y adaptables, por eso es muy importante entender y dominar su uso, para garantizar que nuestras creaciones puedan ser visualizadas en la diversidad de dispositivos que existen en el mercado actualmente. Para que continúen profundizando sus conocimientos sobre estas les comparto el link de W3schools sobre Responsive Web Design - Media Queries donde encontrarán más información y ejemplos de uso.

También les comparto un artículo del blog de Alura Latam que fue creado por la instructora Tatiani Meneghini en donde ella explica los puntos de ruptura en el diseño responsivo, estos puntos son las medidas de anchura que utilizamos para el diseño responsivo, con esas medidas aplicamos los estilos CSS con los tamaños concretos definidos por las Media Queries.

¡Buena lectura! :)
–1_9::     

Lo que aprendimos
 Siguiente pregunta

Lo que aprendimos en esta aula:

Comprendimos cómo alinear elementos con Flexbox.
Aprendimos propiedades para organizar grupos de elementos flex en horizontal y vertical.
Entendimos cómo y por qué utilizar el archivo reset.css.
Aplicamos estilos para pantallas móviles y tabletas con @media.
          

–2_2::
video: Footer, flexbox, flex.direction.

–2_3:
Video:  Ajuste de columnas y filas: flex-wrap
flex wrap
flex flow
ctrl + ; para comentarios htm

–2_4:

mas info
Flexbox puede ser utilizado al cambiar el valor del display de un contenedor a flex, o inline-flex. Vamos a descubrir cuáles son sus diferencias y similitudes.

¿Qué tienen en común?

Ambos valores de display permiten alinear elementos con propiedades de Flexbox.

¿En qué no se parecen?

display: flex hace que el contenedor se expanda ocupando todo el ancho del diseño (observa el fondo negro que ocupa todo el ancho disponible), de esta manera, los otros contenedores con el mismo valor de display se colocan uno debajo del otro, en dirección vertical. En cambio, display: inline-flex utiliza las mismas características de visualización que display: inline, mostrando los elementos en línea, en horizontal, sin ocupar todo el ancho del diseño.

Consulta a continuación un ejemplo de código en el editor de código en línea Codepen, simplemente cambiando los displays de sus contenedores para ver en la práctica sus diferencias:


<h2>Diferencia display:flex y display:inline-flex.</h2>

<h3>display: flex</h3>
<p>display flex muestra elementos a nivel de bloque.</p>
<div class="container-flex">
  <div class="flex-child"></div>
</div>

<div class="container-flex">
  <div class="flex-child"></div>
</div>

<div class="container-flex">
  <div class="flex-child"></div>
</div>

<h3>display: inline-flex</h3>
<p>display inline-flex muestra elementos en línea.</p>
<div class="container-inline--flex">
  <div class="flex-child"></div>
</div>

<div class="container-inline--flex">
  <div class="flex-child"></div>
</div>

<div class="container-inline--flex">
  <div class="flex-child"></div>
</div>


.flex-child {
  width: 50px;
  height: 1rem;
  margin: 4px;
  padding: 4px;
  background-color: rgb(125, 207, 93);
}

.container-flex {
  display: flex;
  background: black;
  margin: 1rem 0;
}

.container-inline--flex {
  display: inline-flex;
  background: black;
  margin: 1rem 0;
}

:root {
  background: linear-gradient(180deg, #154580 0%, #041833 100%);
  font-family: "Jura", sans-serif;
  color: white;
  height: 100vh;
  width: 100vw;
  max-width: 90vw;
}

–2_5:
Video: GAP

alineamietno de textos:
white-space:nowrap
–2_6:
cuestionario

Supongamos que en un diseño hay 4 tarjetas sobre eventos culturales y deportivos, quieres aplicar una distancia entre cada una de estas tarjetas, siendo la misma distancia para todas.



Indica la alternativa que contiene el código CSS ideal para aplicar espaciado entre estos elementos utilizando Flexbox:

Código HTML base:

            <ul class="eventos__container">

                <li class="eventos__item  eventos-13">
                    <img src="./assets/img/evento-1.png">
                    <h3>Festival de luces</h3>
                </li>

                <li class="eventos__item  eventos-2">
                    <img src="./assets/img/evento-2.png">
                    <h3>Fiesta latina</h3>
                </li>

                <li class="eventos__item  eventos-3">
                    <img src="./assets/img/evento-3.png">
                    <h3>Festival de cine</h3>
                </li>

                <li class="eventos__item  eventos-4">
                    <img src="./assets/img/evento-4.png" alt="Correra de bicicleta">
                    <h3>Carrera por la salud</h3>
                </li> 

            </ul>

.eventos__container {
    display: flex;
    gap: 2rem;
}

Dado que la propiedad gap es una propiedad para flex-container, debes insertarla en el contenedor padre de los elementos a los que deseas aplicar espaciado. En este caso, es la propiedad ul con la clase eventos__lista, de esta manera se aplica la misma distancia entre los elementos hijos, que son los li.


–2_7:
Nuestro cliente AluraPlay está desarrollando una segunda pantalla para el proyecto, que incluye logotipos de varias tecnologías del área de Front-end y menciona a sus creadores.

El cliente solicitó alinear los elementos horizontalmente, de modo que estén distribuidos aprovechando todo el ancho de su contenedor.

Imagen creada por el equipo de desing:



Puedes practicar el desafío en el codepen a continuación, que es un editor de código en línea. Comienza analizando el código y luego localiza el contenedor padre de estos elementos para poder organizarlos con Flexbox.

<h1 class="titulo">Tecnologias Front-end</h1>
<section class="cuadros__container">
  <div class="cuadros__item">
    <figure>
      <img class="cuadro-imagen" src="https://caelum-online-public.s3.amazonaws.com/2577-flexbox/html.png" alt="Logo HTML">
      <figcaption class="obra-titulo">
        <p class="obra-autor">HTML - Tim Berners-Lee</p>
      </figcaption>
    </figure>
  </div>
  <div class="cuadros__item cuadro-css">
    <figure>
      <img class="cuadro-imagem" src="https://caelum-online-public.s3.amazonaws.com/2577-flexbox/css.png" alt="Logo CSS">
      <figcaption class="obra-titulo">
        <p class="obra-autor">CSS - Håkon Wium Lie</p>
      </figcaption>
    </figure>
  </div>
  <div class="cuadros__item cuadro-angular">
    <figure>
      <img class="cuadro-imagem" src="https://caelum-online-public.s3.amazonaws.com/2577-flexbox/angular.png" alt="Logo Angular">
      <figcaption class="obra-titulo">
        <p class="obra-autor">Angular - Misko Hevery</p>
      </figcaption>
    </figure>
  </div>
  <div class="cuadros__item cuadro-svelte">
    <figure>
      <img class="cuadro-imagem" src="https://caelum-online-public.s3.amazonaws.com/2577-flexbox/svelte.png" alt="Logo Svelte">
      <figcaption class="obra-titulo">
        <p class="obra-autor">Svelte - Rich Harris</p>
      </figcaption>
    </figure>
  </div>
  <div class="cuadros__item quadro-tail">
    <figure>
      <img class="cuadro-imagem" src="https://caelum-online-public.s3.amazonaws.com/2577-flexbox/tailwind.png" alt="Logo Tailwind">
      <figcaption class="obra-titulo">
        <p class="obra-autor">Tailwind - Adam Wathan</p>
      </figcaption>
    </figure>
  </div>
</section>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
​
body {
  font-family: "Jura", sans-serif;
  margin: 0 230px;
  background: linear-gradient(180deg, #154580 0%, #041833 100%);
  color: white;
  height: 100vh;
  width: 100vw;
}
​
.titulo {
  position: absolute;
  top: 30px;
  left: 180px;
  font-size: 34px;
  font-weight: bold;
  text-decoration: underline 3px;
  text-underline-offset: 25px;
}
​
.cuadros__container {
  width: 1650px;
  position: absolute;
  left: 176px;
  top: 150px;
  background: #525c63d8;
  padding: 10px;
  border-radius: 10px;
}
​
.cuadros__item:nth-child(1),
.cuadros__item:nth-child(3) {
  margin-top: 1px;
}
​
.obra-titulo {
  border: 1px dotted white;
  padding: 10px;
  user-select: none;
  text-align: center;
  width: 275px;
}
​


Es posible aplicar espaciado entre elementos con una propiedad de Flexbox llamada gap, pero para agruparlos aprovechando todo el ancho del contenedor en el que están insertados, la mejor opción es la propiedad justify-content, que ya se ha utilizado en clase. Esta opción es más eficiente en este contexto, ya que puede calcular el espacio disponible en un contenedor y distribuirlo equitativamente entre los elementos. Las propiedades flex deben ser insertadas en la clase .quadros__container:

.cuadros__container {
  display: flex;
  justify-content: space-between;
}

–2_8:
repaso

Lo que aprendimos en esta aula:

Aplicamos propiedades flex para:
Cambiar el eje principal de los elementos;
Dividir elementos en filas o columnas;
Aplicar espaciado entre elementos.
Definir las diferencias entre display flex e inline-flex.




https://github.com/alura-es-cursos/aluraplay-projecto-final
