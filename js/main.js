var canales = [];


function CreaCanal() {

    let text1 = document.getElementById("cajatextonuevocanal");
    let boton1 = document.getElementById("botonguardar");


    if(text1.hidden == true && boton1.hidden == true) {
        text1.hidden = false;
        boton1.hidden = false
    } else {
        text1.hidden = true;
        boton1.hidden = true;
    }
}

function GuardaCanal() 
{
    let text1 = document.getElementById("cajatextonuevocanal");
    let boton1 = document.getElementById("botonguardar");
    let objetoh = document.getElementById("mychannels");
    let p =document.createElement("p");
    var NombreCanal = document.getElementById("cajatextonuevocanal").value;
    if(NombreCanal != '')
    {
    //console.log(NombreCanal);
    canales.push(NombreCanal);
    
    for (let i = 0; i<canales.length; i++) 
    {
        p.innerHTML= canales[i];
        objetoh.appendChild(p);
    }
    document.getElementById("cajatextonuevocanal").value = "";
    text1.hidden = true;
    boton1.hidden = true;
    } else {
        alert('has dejado el campo en blanco')

    }
}

