class ChannelMessages {
    constructor(authorname, messagetime, messagecontent) {
        this.authorname = 'UserRandom';
        this.messagetime = '2022-11-01 11:00';
        this.messagecontent = 'contenidomensaje';
    }

    // aqui iran los metodos si los hubiere
}
//var channels = []; 
let channels= new Map(); 
var eachChannel = []; // este es mi array de cada canal, q tendra objetos de mensajesdecanal dentro
/* var cadacanal0 = new Array(3) 
cadacanal0[0] = 12 cadacanal0[1] = 10 cadacanal0[2] = 11 

var cadacanal1 = new Array (3) 
cadacanal1[0] = 5 cadacanal1[1] = 0 cadacanal1[2] = 2 

var cadacanal2 = new Array (3) 
cadacanal2[0] = 10 cadacanal2[1] = 8 cadacanal2[2] = 10


var canales = new Array (3) 
canales[0] = cadacanal0 canales[1] = cadacanal1 canales[2] = cadacanal2
*/

let text1 = document.getElementById("cajatextonuevocanal");
let button1 = document.getElementById("botonguardar");
let myError1 = document.getElementById("error1");


function CreaCanal() 
{
    myError1.innerHTML = '';
    if(text1.hidden == true && button1.hidden == true) 
    {
        text1.hidden = false;
        button1.hidden = false
    } else 
    {
        text1.hidden = true;
        button1.hidden = true;
    }
}

function GuardaCanal() 
{
    let objetoH = document.getElementById("mychannels");
    let p =document.createElement("p");
    var channelName = document.getElementById("cajatextonuevocanal").value;
    if(channelName != '')
    {
    //console.log(NombreCanal);
        myError1.innerHTML = ''
        eachChannel.push(channelName);
        // channels.set(eachChannel);
    
        for (let i = 0; i<eachChannel.length; i++) 
            {
            channels.set(i,channelName)
            //p.innerHTML= canales[i];
            //console.log(eachChannel[i]);
            p.innerHTML= '<div class="mimenu" onclick="muestraMensajes('+i+')">'+eachChannel[i]+'</div>';
            objetoH.appendChild(p);
            }
        document.getElementById("cajatextonuevocanal").value = "";
        text1.hidden = true;
        button1.hidden = true;
    } else 
    {
        myError1.innerHTML = 'Por favor introduce un valor'

    }
}

function muestraMensajes(channelKey) {
    let cabeceradepagina = document.getElementById("cabeceradepagina");
    let MainContainer = document.getElementById("contenedorprinc");
    MainContainer.innerHTML = "";
    let MyDiv =document.createElement("div");
    var RamonMensaje = new ChannelMessages();
    MyDiv.innerHTML = '<div class="mismensajes">'+RamonMensaje.messagecontent+'</div>';
    MainContainer.appendChild(MyDiv);
} 


//hacer el primer array con un diccionario