<h1>Programación en ambiente web. Trabajo Práctico N°3 </h1>
<h2>Teoría</h2>
<h3></h3>
<h3></h3>
<h3></h3>

<h3>1) ¿Qué significa que los estilos se apliquen en cascada? ¿cómo aplica la herencia de estilos?</h3>
<p>La herencia y la cascada son dos conceptos básicos en CSS. Por un lado, el concepto de cascada es una característica de CSS utilizada para determinar, en un esquema de prioridad, qué reglas de estilo se aplican si más de una regla coincide para un elemento en particular. Para saber que regla de estilos tiene prioridad, CSS analiza (por orden) tres conceptos clave del código CSS: su importancia, la especificidad y su orden. Por otro lado, la herencia es una característica clave a tener en cuenta en CSS, la misma establece que cuando se establece el valor de una propiedad CSS en un elemento, sus elementos descendientes (los elementos que contiene) heredan de forma automática el valor de esa propiedad, estableciendo una relacion padre-hijo.</p>

<h3>2) ¿Por qué es necesario utilizar un CSS de Reset?</h3>
<p>Para eliminar cualquier estilo que un browser X tenga predeterminado y empezar el diseño desde cero, compatible con todos los browsers</p>

<h3>3) ¿Qué es el CSS box model?</h3>
<p>El modelo de cajas o "box model" es seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que condiciona el diseño de todas las páginas web. El modelo de cajas es lo que hace que todos los elementos de las páginas se representen mediante cajas rectangulares. Las cajas de una página se crean automáticamente. Cada vez que se inserta un elemento HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.</p>
<p>Las cajas en CSS se descomponen en capas, y estas son:</p>
<ul>
	<li>Contenido (content): se trata del contenido HTML del elemento. Las propiedades width y height establecen el ancho y alto de la caja de contenido.</li>
	<li>Relleno (padding): espacio libre opcional existente entre el contenido y el borde.</li>
	<li>Borde (border): línea que encierra completamente el contenido y su relleno</li>
	<li>Margen (margin): separación opcional existente entre la caja y el resto de cajas adyacentes.</li>
</ul>

<h3>4) ¿Cuál es el código que hay que insertar en una hoja de estilo para poder usar WebFonts?</h3>
<p>Primero se agrega en el css la anotación @font-face y dentro de ella se especifica el nombre de la fuente, las urls necesarias, weight y style de la fuente. Luego en el tag que queramos que tenga la fuente deseada se le agrega el atributo "font-family" donde se le especifica el nombre de la fuente y también es bueno especificar otras fuentes en caso de que el navegador no soporte la que el diseñador desee.</p>

<h3>5) ¿Qué son y para qué sirven los pseudoElementos?</h3>
<p>Los pseudo-elementos son herramientas especiales de CSS que se definen para poder aplicar estilos en algunos elementos, o partes de un elemento, en casos especiales que no quedan cubiertos con los selectores habituales. Nos permiten seleccionar, por ejemplo, la primera letra de una línea, la primera línea de un párrafo, etc. Los pseudo-elementos se añaden a los selectores con doble dos puntos (::), estos permiten añadir estilos a una parte concreta del documento. Por ejemplo, el pseudo-elemento ::first-line selecciona solo la primera línea del elemento especificado por el selector.</p>

<h3>6) ¿Cómo se calcula la prioridad de una regla CSS? Expresarlo como una fórmula matemática.</h3>
<p>La prioridad se calcula mediante un numero de 3 cifras ABC en donde cada una de las letras se calculan contando de la siguiente manera:
    A= numero de selectores de ID (ej: #navbar)
    B= numero de selectores de clase (selectores que acceden al atributo class del elemento mediante un ".")
    C= numero de selectores que acceden al tag html
</p>

<h3>7) ¿Qué es el view port? ¿Cómo se configura? ¿qué problema soluciona?</h3>
<p>El viewport del navegador es el área de la ventana en donde el contenido web está visible. Generalmente no es del mismo tamaño que la página renderizada, en donde se brindan barras de desplazamiento para que el usuario pueda acceder a todo el contenido.</p>
<p>Cuando  el navegador renderiza un documento web, hace un escalado de los contenidos para que las páginas que están diseñadas para escritorio se vean de forma aceptable en un dispositivo móvil, llevando (en la mayoria de los casos) a tener que hacer zoom para poder leerlos. Sin embargo, se puede configurar el viewport para indicar como se debe presentar el contenido.</p>
<p>Para ello, se dispone de los siguientes parámetros en la etiqueta META:</p>
<ul>
	<li>Width: anchura virtual de la pantalla o anchura del viewport.</li>
	<li>Height: altura virtual de la pantalla o anchura del viewport.</li>
	<li>Initial-scale: la escala inicial del documento.</li>
	<li>Minimum-scale: la escala mínima que se puede poner en el documento.</li>
	<li>Maximum-scale: la escala máxima configurable en el documento.</li>
	<li>User-scalable: si se permite o no al usuario hacer zoom.</li>
</ul>

<p>Un sitio típico optimizado para dispositivos moviles se define un elemento META el cual contiene algo así:</p>
<p> meta name="viewport" content="width=device-width, user-scalable=no <p>
<p>La propiedad width controla el tamaño del viewport. Puede definirse con un número en pixeles como  width=600 o con un valor especial device-width que es el equivalente al ancho de la pantalla en píxeles CSS en una escala de 100%. (Existen valores correspondientes de height y device-height, los cuales pueden ser útiles para páginas con elementos que cambian tamaño o posición basadas en la altura del viewport (height). La propiedad initial-scale controla el nivel de zoom cuando la página se carga por primera vez. Las propiedades maximum-scale, minimum-scale, y user-scalable controlan la forma en cómo se permite a los usuarios aumentar o disminiuir el zoom en la página.</p>

<h3>8) ¿Qué son las media querys? Enumere los distintos tipos de medios y las principales características de cada uno de ellos.</h3>
<p>Una media querie sirve para saber en que sistema se esta viendo la pagina web en ese instante y de acuerdo a ello se aplican unas reglas de estilo u otras.
    <li>Se pueden usar para un menu, donde en una pantalla wide se puede ver un menu a lo ancho con los items mientras que si se accede por un teléfono móvil se visualiza mediante un menu hamburguesa</li>
    <li>Para la cantidad de columnas según el ancho de la pantalla</li> 
    <li>Para mostrar o esconder elementos</li> 
</p>

<h3>9) ¿En qué circunstancias se pueden utilizar las variables css? ¿Qué problemas pueden traer aparejadas? ¿Cuándo consideras que sería bueno utilizarlas?</h3>
<p>Las variables CSS son entidades creadas en las hojas de estilos (definidas por el desarrollador de estilos) que contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas (por ejemplo, --main-color: black;) y se accede mediante la función var() (por ejemplo, color: var (--main-color);).</p> 
<p>Cuando se tiene que definir determinadas propiedades (por ejemplo un color) en distintas partes de un sitio web, estas variables ayudan a que solo se tenga que asignar dicha propiedad en un solo lugar, en una variable, y sea esta la que se utilice permitiendo de esta forma reducir la posibilidad de error (asegurando que todos tengas el mismo color) y facilitar el mantenimiento (cuando se quiera cambiar el color) ya que solo se debera cambiar la propiedad asignada a dicha variable para que todo lo que lo utilice cambie.</p>
<p>Uno de los mayores problemas del uso de variables CSS es que no todos los navegadores lo soportan.</p>

<h3>10) CSS Grid Layout ¿Qué es? Explicar las reglas que intervienen en el armado de una grilla. ¿Qué ventajas y desventajas tiene frente a otros Layouts?</h3>

<h3>11) ¿Qué puntos en común y en que se diferencian las Material Design Guidelines de Google y las Human Interface Guidelines de Apple?</h3>
<p>Tanto Google como Apple han desarrollado sus propios conjuntos de reglas, que indican cómo deberían ser sus aplicaciones en sus respectivos dispositivos. Los dispositivos de Google se basan principalmente en Material Design, mientras que Apple se adhiere a las pautas de Human Interface. Si bien ambos buscan mejorar la experiencia de los usuarios (haciendo interfaces de uso más intuitivas, aprendibles y constantes), definiendo una apariencia común para sus aplicaciones, existen ciertas diferencias entre estos.</p>
<p>En cuanto a la profuncidad de los elementos. Google se ha inspirado en el diseño de movimientos planos, haciendo creer a las personas que interactuan con sus componentes como si fueran hojas de papel apiladas una encima de la otra. Mientras busca una profundidad en sus aplicaciones, utilizando componentes como sus botones y mensajes de texto con fondo borroso para crear la sensación de que los elementos están flotando y existen en su propio espacio.</p>
<p>En cuanto a la animación de sus componentes. Google ve la animación como una forma de mejorar la experiencia del usuario y dar vida a sus componentes, utiliza una animación única para expresar el tipo de "material" con el que estás interactuando. Mientras que Apple tiene un enfoque sin sentido para la animación. Creen que la animación solo debería llevarte de A a B sin distraer al usuario del contenido real.</p>
<p>En cuanto a la navegación. Google define una barra de navegación universal en la parte inferior. Este es un conjunto de tres botones (físicos o digitales, según el dispositivo) que funcionan como rutas de regreso, de inicio y de vista general. Mientras que Apple se adhiere a un enfoque un poco diferente. Ni sus dispositivos ni su interfaz tienen un botón de retroceso universal. Esto significa que los diseñadores deben garantizar una navegación decente dentro de la aplicación y agregar un indicador de retroceso en la esquina superior izquierda de cada página de la aplicación. La navegación en ambas plataformas también puede diferir en términos de uso y ubicación de las pestañas. Google a menudo utiliza un menú de hamburgesa para su navegación principal. Sin embargo, Apple no tiene la misma postura, ya que considera que los elementos de navegación principales deben estar presentes en una barra de pestañas en primer plano y que la hamburguesa se debe usar solo como un lugar para almacenar funciones que no son tareas diarias realizadas por el usuario.</p>
<p>En cuanto a la tipografia. Cada sistema tiene sus propias fuentes predeterminadas que se recomiendan para los diseñadores. La cual ayudan a crear una sensación de coherencia y apariencia nativa en toda la plataforma. Google sugiere Roboto como su fuente de sistema por defecto. Mientras que Apple prefiere la fuente San Francisco.</p>