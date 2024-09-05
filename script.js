
// Declaracion de variables de audio
var audio_confirm = new Audio("sound/snd_select.mp3");
var audio_select = new Audio("sound/snd_movemenu.mp3");

// Funciones para cambiar el boton de descarga
function onHover() {
    $("#download_button")
        .attr('src',"icon/donwload_selected.png");
        audio_select.play();
  }
  
function offHover() {
    $("#download_button")
        .attr('src', "icon/donwload.png");
  }

  function clickImage() {
    $("#download_button")
        .attr('src', "icon/donwload_selected.png");
        audio_confirm.play();
  }

  // Funcion para mostrar la lista de musica
  function showMusic() {
    var show = document.getElementById("song_folder");
    if (show.style.display == "block") {
        show.style.display = "none";
    }
    else {
        show.style.display = "block";
    }
  }

  // Texto de DY que cambia
  var speach = "";
  // Declaracion de variables para detectar la hora actual
  var hoy = new Date();
  var dia = hoy.getDate();
  var mes = hoy.getMonth()+1;
  var fecha = dia + '-'+ mes;
  var edad = hoy.getFullYear() - 1977;
  var midnight = Math.floor(hoy.getTime() / (1000*60*60*24));

// Frases a mostrar
var speach_array = []; // Declaracion del array
speach_array[0] = "¡D.Y.!<br>Quien no se ha escondido, tiempo a tenido.";
speach_array[1] = "Mi contraseña de Messenger es Broly Superstar. ¡El legendario!";
speach_array[2] = "MA- MA- MASIVO!<br>MA- MA- MASIVO!<br>MA- MA- MASIVO!";
speach_array[3] = "¡¡RUMBA!!<br> ¿Quién dejó la ropa sin planchar?<br>¡Que mañana tengo comunión!";
speach_array[4] = "¡Que levante la mano todo el mundo que se puso desodorante!";
speach_array[5] = "Hoy yo salgo pa' la calle sin rumbo, sin GPS. ¡Me quedé sin batería!";
speach_array[6] = "El patio de mi casa es particular.<br>Llueve y no se moja, como los demás.";
speach_array[7] = "¡Cada segundo, cada minuto que pase sin descargar el juego es tiempo perdido!";
speach_array[8] = "¡Legendaddy! ¡Di di diwá!<br>¿Quién coño es Gabi music?";
speach_array[9] = "¡Llamen al 911!<br>¡La abuela se cayó por las escaleras!";
speach_array[10] = "Aquí D.Y. con el Yankkeconsejo<br>del día: \"Si el mojón no baja,<br>¡tira de la cisterna!\"";
speach_array[11] = "¡Dale, dale don, dale!<br>¡Pa que se muev-! ...<br>Espera, esa letra no es mía.";
speach_array[12] = "¡El Cangri!<br>¡Se me escapó el tranvía!<br>¡Lo que pasó, pasó!";
speach_array[13] = "Yankeeconsejo del día:<br>¡No corras para coger el tranvía! ¡Pasa otro en 3 minutos!";
speach_array[14] = "¡Da-ddy! ¡Yan-keee!<br>¡Hasta luego mi gente, que se me escapa el tranvía!";
speach_array[15] = "Yankeeconsejo del día:<br>Hablen con el hombre que ven en el espejo. ¡Nunca les dará la espalda!";
speach_array[16] = "Tú eres hielo.<br>Y yo soy fuego.<br>¡Se me queman las cachapas!";
speach_array[17] = "¡La temperatura sube!<br>¡Y la ULL no compra ventiladores!";
speach_array[18] = "¡Muerte por amor y rumba!";
speach_array[19] = "El talento de mi barrio.<br>Musicólogo.<br>Musicólogo.";
speach_array[20] = "¡The Big Boss! ¡D.Y.!<br>¿Quién ha dejado la mierda en el baño? ¡Huele que apesta!";
speach_array[21] = "¡Mr. Generaciones!<br>¡Yo me caí y luego me levanté!<br>¡La abuela no!";
speach_array[22] = "¡La cabra! ¡Díselo, ma'!<br>¡Castigado sin Play!";
speach_array[23] = "¡Llamen a Oppenheimer!<br>¡Soltaron una bomba en el baño!";
speach_array[24] = "Yankeeconsejo del día:<br>¡Cada una de arroz, son dos de agua!";
speach_array[25] = "¡Robinson Crusoe y le atropelló<br>un Twingo!<br>¡Ajo y agua!";
speach_array[26] = "quien te va a curar<br>el corazon partio?";
speach_array[27] = "Mi moto no hace brrrr.<br>Mi moto hace...<br>BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR";
//speach_array[] = "";
// ^ esto nada más es pa hacer copy-paste si me hace falta añadir más frases



/////////// TESTEO ////////////
//localStorage.removeItem('last_speech'); // Para limpiar la localStorage
//fecha = "11-9";
///////////////////////////////



// INTENTO DE HACER EL SISTEMA RANDOM DEPENDIENTE DE LA FECHA
function refresh() {
    
    // Restaurar mensaje anterior
    var last_speech = localStorage.getItem('last_speech');
    if (last_speech) {last_speech = JSON.parse(last_speech);}
    // Si no existe mensaje anterior
    if (!last_speech) {
        last_speech = {
            frase: "Daddy Yankee al habla.<br>Bienvenido a la página oficial de Yankeetale. ¡Gózate el juego, rey!",
            fecha_ultima: midnight
        };
        
    } // Si existe mensaje anterior pero es de ayer o es una fecha especial, elegir nueva frase
    else if (fecha == "31-10") { // Si es Halloween
        last_speech = {
            frase: "Feliz Halloween grupo.<br> Soy Daddy Yankee.",
            fecha_ultima: midnight
        };
    }
    else if (fecha == "24-12" || fecha == "25-12") { // Si es Navidad o Nochebuena
        last_speech = {
            frase: "Joel le dice a Victor<br><br> Feliz Navidad.",
            fecha_ultima: midnight
        };
    }
    else if (fecha == "31-12" || fecha == "1-1") { // Si es Nochevieja o Año Nuevo
        last_speech = {
            frase: "Y Victor le dice a Joel<br><br> Feliz Año Nuevo.",
            fecha_ultima: midnight
        };
    }
    else if (fecha == "3-2") { // Si el cumple de Daddy Yankee
        last_speech = {
            frase: "Feliz cumpleaños a mí, Daddy Pantis.<br> ¡El legendario! ¡" + edad + " años!<br> ¡Me duele la cadera!",
            fecha_ultima: midnight
        };
    }
    else if (fecha == "23-5") { // Si es mi cumple
        last_speech = {
            frase: "¡El marico que hizo esto cumple años! ¡Ya te queda menos pa' probar ataúd! ¡Súbele mambo!",
            fecha_ultima: midnight
        };
    }
    else if (fecha == "11-9") { // Si es el 11-S
        last_speech = {
            frase: "¡No puede ser!<br>¡NOOOOOOOOOOOOOOOOOOOOOOOOOOOO!<br>¡Delfín hasta el fin!",
            fecha_ultima: midnight
        };
    }
    else if (last_speech.fecha_ultima < midnight) { // Frases aleatorias
        last_speech = {
            frase: speach_array[Math.floor(Math.random() * speach_array.length)],
            fecha_ultima: midnight
        };
    }
    // Guarda la nueva frase en localStorage
    localStorage.setItem('last_speech', JSON.stringify(last_speech));
    
    // Guarda la frase en la variable "speach" para imprimirla en pantalla
    speach = last_speech.frase;

/// Impresion en consola de los datos (se puede borrar)
    console.log('fecha_ultima: '+last_speech.fecha_ultima);
    console.log('midnight: '+midnight);
    console.log('fecha: '+fecha);
}

refresh();
//speach = speach_array[27];
function speech(){
    document.write(speach);
}
