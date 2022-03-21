class mensajesdecanal {
    constructor(nombreautor, horamensaje, contenidomensaje) {
        this.nombreautor = 'UserRandom';
        this.horamensaje = '2022-11-01 11:00';
        this.contenidomensaje = contenidomensaje;
    }

    // aqui iran los metodos si los hubiere
}
var canales = []; // este es mi array de arrays
var cadacanal = []; // este es mi array de cada canal, q tendra objetos de mensajesdecanal dentro
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
let boton1 = document.getElementById("botonguardar");
let myerror1 = document.getElementById("error1");


function CreaCanal() 
{
    myerror1.innerHTML = '';
    if(text1.hidden == true && boton1.hidden == true) 
    {
        text1.hidden = false;
        boton1.hidden = false
    } else 
    {
        text1.hidden = true;
        boton1.hidden = true;
    }
}

function GuardaCanal() 
{
    let objetoh = document.getElementById("mychannels");
    let p =document.createElement("p");
    var NombreCanal = document.getElementById("cajatextonuevocanal").value;
    if(NombreCanal != '')
    {
    //console.log(NombreCanal);
        myerror1.innerHTML = ''
        cadacanal.push(NombreCanal);
        canales.push(cadacanal);
    
        for (let i = 0; i<canales.length; i++) 
            {
            //p.innerHTML= canales[i];
            console.log(canales[i]);
            p.innerHTML= '<div class="mimenu" onclick="muestramensajes()">canales[i]</div>';
            objetoh.appendChild(p);
            }
        document.getElementById("cajatextonuevocanal").value = "";
        text1.hidden = true;
        boton1.hidden = true;
    } else 
    {
        myerror1.innerHTML = 'Por favor introduce un valor'

    }
}

function muestramensajes() {
    let contenedorprincipal = document.getElementById("contenedorprinc");
    let mydiv =document.createElement("div");
    mydiv.innerHTML = '<div class="mismensajes"> patatas sin pablo</div>';
    contenedorprincipal.appendChild(mydiv);
} 
