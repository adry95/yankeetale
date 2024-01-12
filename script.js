
// Declaracion de variables de audio
var audio_confirm = new Audio("sound/snd_select.wav");
var audio_select = new Audio("sound/snd_movemenu.wav");
var audio_music = new Audio("sound/mus_menu2.ogg");
audio_music.play();
var audio_music_is_playing = true;
var music_volume = 0.5;

audio_music.volume = music_volume;
audio_music.loop = true;

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
        .attr('src', "icon/donwload.png");
        audio_confirm.play();
  }

  // Funciones para controlar la musica de fondo
  function playMusic() {
    if (audio_music_is_playing) {
        audio_music.volume = 0;
        $("#music_icon")
        .attr('src','icon/audio_mute.png');
        audio_music_is_playing = false;
    } else {
        audio_music.volume = music_volume;
        $("#music_icon")
        .attr('src','icon/audio_play.png');
        audio_music_is_playing = true;
    }
  }
  // Texto de DY que cambia
  var speach = "";
  // Declaracion de variables para detectar la hora actual
  var hoy = new Date();
  var fecha = hoy.getDate()+'-'+(hoy.getMonth()+1);
  var edad = hoy.getFullYear() - 1977;

  // If statement para mostrar el texto de DY
if (fecha == "31-10") { // Si es Hallowenn
    speach = "Feliz Halloween grupo. <br> Soy Daddy Yankee";
} else if (fecha == "25-12" || fecha == "24-12") { // Si es Navidad o Nochebuena
    speach = "Feliz Navidad.<br>Y Feliz Año Nuevo.<br>¿Qué? ¿qué? ¡Toma mango!";
} else if (fecha == "3-2") { // Si es su cumpleaños
    speach = "Feliz cumpleaños a mí, Daddy Pantis. ¡El legendario! ¡" + edad + " años! ¡Me duele la cadera!";
} else { // Elegir aleatoriamente una frase del array para mostrar
    var speach_array = []; // Declaracion de los textos a elegir
    speach_array[0] = "¡DY! Quien no se ha escondido, tiempo a tenido.";
    speach_array[1] = "¿Dónde estarán esas gatas...?";
    speach_array[2] = "MA- MA- MASIVO!<br>MA- MA- MASIVO!<br>MA- MA- MASIVO!";
    speach_array[3] = "¡¡RUMBA!!<br> ¿Quién dejó la ropa sin planchar?";
    speach_array[4] = "¡Que levante la mano todo el mundo que se puso deshodorante!";
    speach_array[5] = "Hoy yo salgo pa' la calle sin rumbo, sin GPS. ¡Me quedé sin batería!";
    speach_array[6] = "El patio de mi casa es particular.<br>Llueve y no se moja, como los demás.";
    speach_array[7] = "¡Cada segundo, cada minuto que pase sin descargar el juego es tiempo perdido!";
    speach_array[8] = "¡Legendaddy! ¡Di di diwá!<br>¿Quién coño es Gabi music?";
    speach_array[9] = "¡Llamen al 911!<br>¡La abuela se cayó por las escaleras!";
    speach_array[10] = "Escribir diálogos es duro, mis reyes. ¡Me duele el culo! ¡30 cm de regla!";
    speach_array[11] = "¡Dale, dale don, dale!<br>¡Pa que se muev-! ...<br>Espera, esa letra no es mía.";
    speach_array[12] = "¡El Cangri!<br>¡Se me escapó el tranvía!<br>¡Lo que pasó, pasó!";
    speach_array[13] = "¡No corras para coger el tranvía! ¡Pasa otro dentro de 3 min!";
    speach_array[14] = "¡Da-ddy! ¡Yan-keee!<br>¡Hasta luego mi gente, se me escapa el tranvía!";
    speach_array[15] = "¡Hablé con el hombre que vi en el espejo! ¡Estoy en el psiquiatra!";
    speach_array[16] = "Recuerda:<br>Tú eres hielo.<br>Y yo soy fuego.";
    speach_array[17] = "¡La temperatura sube!<br>¡Que la ULL compre ventiladores!";
    speach_array[18] = "¡Muerte por love and rumba!";
    speach_array[19] = "El talento de mi barrio.<br>Musicólogo. Musicólogo.<br>Siqui-daddy yankee yo.";
    speach_array[20] = "¡The Big Boss! ¡DY!<br>¿Quién ha dejado la mierda en el baño? ¡Huele que apesta!";
    speach_array[21] = "¡Mr. Generaciones! ¡Yo me caí y luego me levanté! ¡Me duelen las rodillas!";
    speach_array[22] = "¡La cabra! ¡Díselo, ma'!<br>¡Castigado sin Play!";
    speach_array[22] = "¡Llamen a Oppenheimer!<br>¡Soltaron una bomba en el baño!";
    //speach_array[] = "";
    speach = speach_array[Math.floor(Math.random() * speach_array.length)]; // Elegir random un index de array
    //speach = speach_array[speach_array.length-1];
}

  function speech(){
    document.write(speach);
  }

