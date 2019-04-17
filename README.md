<h1>Programación en ambiente web. Trabajo Práctico N°3 </h1>
<h2>Teoría</h2>
<h3></h3>
<h3></h3>
<h3></h3>

<h3>1) ¿Qué significa que los estilos se apliquen en cascada? ¿cómo aplica la herencia de estilos?</h3>
<h3>2) ¿Por qué es necesario utilizar un CSS de Reset?</h3>
<p>Para eliminar cualquier estilo que un browser X tenga predeterminado y empezar el diseño desde cero, compatible con todos los browsers</p>
<h3>3) ¿Qué es el CSS box model?</h3>
<h3>4) ¿Cuál es el código que hay que insertar en una hoja de estilo para poder usar WebFonts?</h3>
<p>Primero se agrega en el css la anotación @font-face y dentro de ella se especifica el nombre de la fuente, las urls necesarias, weight y style de la fuente. Luego en el tag que queramos que tenga la fuente deseada se le agrega el atributo "font-family" donde se le especifica el nombre de la fuente y también es bueno especificar otras fuentes en caso de que el navegador no soporte la que el diseñador desee.</p>
<h3>5) ¿Qué son y para qué sirven los pseudoElementos?</h3>
<h3>6) ¿Cómo se calcula la prioridad de una regla CSS? Expresarlo como una fórmula matemática.</h3>
<p>La prioridad se calcula mediante un numero de 3 cifras ABC en donde cada una de las letras se calculan contando de la siguiente manera:
    A= numero de selectores de ID (ej: #navbar)
    B= numero de selectores de clase (selectores que acceden al atributo class del elemento mediante un ".")
    C= numero de selectores que acceden al tag html
</p>
<h3>7) ¿Qué es el view port? ¿Cómo se configura? ¿qué problema soluciona?</h3>
<h3>8) ¿Qué son las media querys? Enumere los distintos tipos de medios y las principales características de cada uno de ellos.</h3>
<p>Una media querie sirve para saber en que sistema se esta viendo la pagina web en ese instante y de acuerdo a ello se aplican unas reglas de estilo u otras.
    <li>Se pueden usar para un menu, donde en una pantalla wide se puede ver un menu a lo ancho con los items mientras que si se accede por un teléfono móvil se visualiza mediante un menu hamburguesa</li>
    <li>Para la cantidad de columnas según el ancho de la pantalla</li> 
    <li>Para mostrar o esconder elementos</li> 
</p>
<h3>9) ¿En qué circunstancias se pueden utilizar las variables css? ¿Qué problemas pueden traer aparejadas? ¿Cuándo consideras que sería bueno utilizarlas?</h3>
<h3>10) CSS Grid Layout ¿Qué es? Explicar las reglas que intervienen en el armado de una grilla. ¿Qué ventajas y desventajas tiene frente a otros Layouts?</h3>
<h3>11) ¿Qué puntos en común y en que se diferencian las Material Design Guidelines de Google y las Human Interface Guidelines de Apple?</h3>