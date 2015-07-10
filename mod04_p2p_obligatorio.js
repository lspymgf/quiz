//curso2 desarrollo de servicios en la nube con HTML5 javascript y node.js
//modulo04 - Ejercicio P2P Obligatorio - Explicación de la tarea:
// Construir una aplicaciónn de servidor con express que tenga 2 páginas diferentes, enlazadas entre sí con el siguiente comportamiento:
//    Página 1: Será la página de entrada de la aplicación y tendrá un título y 2 preguntas:
//       ¿Quién descubrió América? y ¿Capital de Portugal?. Cada pregunta tendrá un formulario asociado, con un cajetín de entrada y un botón de envío, que permitirá enviar la respuesta a esa pregunta en particular (es decir habrá 2 formularios en la página). Cada formulario tendrá además un parámetro oculto que envíe un valor diferente que indique al servidor a que pregunta está contestando el cliente;
//    La página 1 estará asociada a la transacción HTTP: GET /preguntas
//    Página 2: Será la página que muestre la respuesta a la que está contestando el cliente , e indicará si ha contestado correctamente o no con una frase correctamente construida. En caso de contestar incorrectamente, le indicará además cual es la respuesta correcta. La página incluirá además un enlace asociado al texto Volver a la página inicial
//    La página 2 estará asociada a la transacción HTTP: GET /respuesta
//    La aplicación debe utilizar solo el paquete express (no utilizar express-generator).&nbsp;Entregar en un fichero adjunto en la entrega el programa con el código del programa solicitado.
//El evaluador debe descargarlo, en un direcorion con express instalado y comprobar con un navegador que funciona correctamente.

var express = require('express');
var app = express();

// Pàgina 1: los formularios
//    -> GET /preguntas ...

app.get('/preguntas', function(req, res){
   res.send('<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>'
            +  '<form method="get" action="/respuestas">'
            +     '¿Quién descubrió América?<br>'
            +     '<input type="hidden" name="pregunta" value="p1" /><br>'
            +     '<input type="text" name="respuesta"/><br>'
            +     '<input type="submit" value="Enviar" /><br>'
            +  '</form>'
            +  '<br>'
            +  '<form method="get" action="/respuestas">'
            +     '¿Capital de Portugal?<br>'
            +     '<input type="hidden"  name="pregunta" value="p2" /><br>'
            +     '<input type="text" name="respuesta"/><br>'
            +     '<input type="submit" value="Enviar" /><br>'
            +  '</form>'
            +'</body></html>');
});

// Página 2: los resultados
//    -> GET /respuestas ...
app.get('/respuestas', function(req, res, netx){
   if (req.query.pregunta === "p1") {
   var correcta1 = 'Cristóbal Colón';
   var correcta2 = 'Cristobal Colon';
      if (req.query.respuesta === correcta1 || req.query.respuesta === correcta2) {
         res.send('<html><body>'
                  +  'Respuesta a la pregunta 1: Correcta<br>'
                  +  '<br>'
                  +  '<form method="get" action="/preguntas">'
                  +     '<input type="submit" value="Volver a las preguntas" /><br>'
                  +  '</form>'
                  +'</body></html>');
      }
      else {
         res.send('<html><body>'
                  +  'Respuesta Incorrecta.<br>'
                  +  ' La respuesta era: ' + correcta1 + ' o ' + correcta2 + ' en vez de ' + req.query.respuesta + ' <br>'
                  +  '<br>'
                  +  '<form method="get" action="/preguntas">'
                  +     '<input type="submit" value="Volver a las preguntas" /><br>'
                  +  '</form>'
                  +'</body></html>');
      }
   }
   else {
      netx();
   }
});

app.get('/respuestas', function(req, res, netx){
   if (req.query.pregunta === "p2") {
   var correcta1 = 'Lisboa';
      if (req.query.respuesta === correcta1) {
         res.send('<html><body>'
                  +  'Respuesta a la pregunta 2: Correcta<br>'
                  +  '<br>'
                  +  '<form method="get" action="/preguntas">'
                  +     '<input type="submit" value="Volver a las preguntas" /><br>'
                  +  '</form>'
                  +'</body></html>');
      }
      else {
         res.send('<html><body>'
                  +  'Respuesta Incorrecta.<br>'
                  +  ' La respuesta era: ' + correcta1 + ' en vez de ' + req.query.respuesta + ' <br>'
                  +  '<br>'
                  +  '<form method="get" action="/preguntas">'
                  +     '<input type="submit" value="Volver a las preguntas" /><br>'
                  +  '</form>'
                  +'</body></html>');
      }
   }
   else {
      netx();
   }
});
app.listen(8000);
console.log('Listening on port 8000');

//Gracias a los compañeros del foro por sus aclaraciones y explicaciones.

