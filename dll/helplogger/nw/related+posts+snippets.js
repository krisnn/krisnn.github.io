// empieza definiendo una serie de datos
var reltitulos = new Array();
var relurls = new Array();
var relresumen = new Array();
var relimagen = new Array();
var reltituloscantidad = 0;

// establecemos la cantidad de entradas relacioandas a ser mostradas
var relmaxamostrar = 4;

// establecemos la longitud de los resúmenes
var relmaxlen = 100;

// establecemos la imagen por defecto a utilizar
var relimagenpodefecto = "http://4.bp.blogspot.com/-sCQy7v-L2bo/T3OYPnm7LuI/AAAAAAAABl4/cbteumcrZSU/s1600/noimage.png";

// esta es la función que lee los feeds y guarda esos datos que luego analizaremos y mostraremos
function leerpostetiquetas(json) {
  var entry, postimg, postcontent, cat;
   for (var i = 0; i < json.feed.entry.length; i++) {

      // los datos de cada entrada se guardan en la variable entry
      entry = json.feed.entry[i];

      // como puede ser que no haya tantas entradas como solicitamos, si ya no hay más, terminamos
      if (i==json.feed.entry.length) { break; }

      // el título de la entrada lo leemos leyendo entry.title.$t
      reltitulos[reltituloscantidad] = entry.title.$t; // lo guardamos
      
      // buscamos el contenido de la entrada que puede estar completa o no
      postcontent = "";
      if ("content" in entry) {
        postcontent = entry.content.$t; // el contenido HTML de la entrada con un feed completo
      } else if ("summary" in entry) {
        postcontent = entry.summary.$t; // el contenido HTML de la entrada con feed corto
      }
      // usamos una función para eliminar el código HTML y crear un resumen con una cantidad de caracteres
      relresumen[reltituloscantidad] = eliminattags(postcontent,relmaxlen);

      // buscamos la miniatura de la imagen de la entrada
      if ("media$thumbnail" in entry) {
        postimg = entry.media$thumbnail.url; // si hay una imagen la guardamos
      } else {
        // si no hay una imagen, usaremos una imagen por defecto
        postimg = relimagenpodefecto;
        // podríamos establecer diferentes imágenes por defecto para cada etiqueta
      }
      relimagen[reltituloscantidad] = postimg;

      // buscamos la dirección URL de la entrada ya que hay varias
      // una contiene la URL del blog, otra la de la entrada, otra la de los archivos adjuntos, etc
      for (var k = 0; k < entry.link.length; k++) {
         if (entry.link[k].rel == 'alternate') {
            relurls[reltituloscantidad] = entry.link[k].href; // esta es la url así que la guardamos
            break;
         }
      }

      reltituloscantidad++; // vamos contando cuantas entradas se encontraron
   }
}

// esta es la función que mostrará las entradas relacionadas
function mostrarrelacionados() {
  // la primera parte es similar a la usada hasta ahora y sólo agregamos los nuevos datos, el resumen y la imagen

  // como una entrada puede tener varias etiquetas, eliminamos los duplicados
  var tmp = new Array(0);
  var tmp2 = new Array(0);
  var tmp3 = new Array(0);
  var tmp4 = new Array(0);
  for(var i = 0; i < relurls.length; i++) {
    if(!contains(tmp, relurls[i])) {
      tmp.length += 1; tmp[tmp.length - 1] = relurls[i];
      tmp2.length += 1; tmp2[tmp2.length - 1] = reltitulos[i];
      tmp3.length += 1; tmp3[tmp3.length - 1] = relresumen[i];
      tmp4.length += 1; tmp4[tmp4.length - 1] = relimagen[i];
    }
  }
  reltitulos = tmp2; relurls = tmp; relresumen = tmp3; relimagen = tmp4;

  // los mezclamos para que no se muestre siempre los mismos
  for(var i = 0; i < reltitulos.length; i++){
    var indice = Math.floor((reltitulos.length - 1) * Math.random());
    var tempTitle = reltitulos[i]; var tempUrls = relurls[i];
    var tempResumen = relresumen[i]; var tempImagen = relimagen[i];
    reltitulos[i] = reltitulos[indice]; relurls[i] = relurls[indice];
    relresumen[i] = relresumen[indice]; relimagen[i] = relimagen[indice];
    reltitulos[indice] = tempTitle; relurls[indice] = tempUrls;
    relresumen[indice] = tempResumen; relimagen[indice] = tempImagen;
  }

  // y ahora vamos a mostrarlos
  var cuantosPosts = 0;
  var r = Math.floor((reltitulos.length - 1) * Math.random()); // elegimos un post al azar
  var rini = r; // este es el primer post relacionado a mostrar
  var salida;
  var dirURL = document.URL;

  // hacemos un bucle hasta que encontramos la cantidad definida en relmaxamostrar
  // y vamos armando el código HTML
  while (cuantosPosts < relmaxamostrar) {
    if (relurls[r] != dirURL) {
      // si el post no es el que estamos viendo, lo mostramos
      salida = "<div class='relsposts'>";
      salida += "<a href='" + relurls[r] + "' rel='nofollow'  target='_blank' title='" + reltitulos[r] + "'><img src='" + relimagen[r] + "' /></a>";
      salida += "<h6><a href='" + relurls[r] + "' target='_blank'>" + reltitulos[r] + "</a></h6>";
      salida += "<p>" + relresumen[r] + " ... </p>";
      salida += "</div>";
      document.write(salida);
      // y vamos contando hasta llegar al total
      cuantosPosts++;
      if (cuantosPosts == relmaxamostrar) { break; }
    }
    if (r < reltitulos.length - 1) {
      // habiamos empezado desde cualquier parte de la lista y este es el siguiente post
      r++;
    } else {
      // si es el último, empezamos desde el primero de la lista
      r = 0;
    }
    // si ya dimos toda la vuelta en al lista y no encontramos la cantidad, significa que no hay suficientes entradas y terminamos
    if(r==rini) { break; }
  }
}