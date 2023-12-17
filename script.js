
// Declaracion de variables de audio
var audio_confirm = new Audio("sound/snd_select.wav");
var audio_select = new Audio("sound/snd_movemenu.wav");
var audio_music = new Audio("sound/donde_estan.ogg");
var audio_music_is_playing = true;
audio_music.play();
audio_music.volume = 0.2;
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
        audio_music.volume = 0.2;
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

  // If statement para mostrar el texto de DY
if (fecha == "31-10") { // Si es Hallowenn
    speach = "Feliz Halloween mi gente. \n Soy Daddy Yankee";
} else if (fecha == "25-12" || fecha == "24-12") { // Si es Navidad o Nochebuena
    speach = "Feliz Navidad. \n Y Feliz Año Nuevo. \n ¿Qué? ¿qué? ¡Toma mango!"
} else { // Elegir aleatoriamente una frase del array para mostrar
    var speach_array = []; // Declaracion de los textos a elegir
    speach_array[0] = "HEY EVERYBODY!\nDaddy Pantis al habla. Quien no se ha escondido, tiempo a tenido.";
    speach_array[1] = "¿Dónde están las gatas que no hablan y tiran pa'lante?";
    speach_array[2] = "MA- MA- MASIVO!\nMA- MA- MASIVO!\nMA- MA- MASIVO!";
    speach = speach_array[Math.floor(Math.random() * speach_array.length)]; // Elegir random un index de array
}
speach = speach.replace('\n' , '<br>'); // Primer reemplazo
speach = speach.replace('\n' , '<br>'); // Segundo reemplazo

  function speech(){
    document.write(speach);
  }


