class ChannelMessages {
    constructor(authorname, messagetime, messagecontent) {
        this.AuthorName = 'UserRandom';
        this.MessageTime = '2022-11-01 11:00';
        this.MessageContent = 'contenidomensaje';
    }

    // aqui iran los metodos si los hubiere
}
let channels= new Map(); 
var eachChannel = []; 
let text1 = document.getElementById("newchanneltextbox");
let button1 = document.getElementById("botonguardar");
let myError1 = document.getElementById("error1");
let messageText = document.getElementById("NewMessageBox");
let MessageButton = document.getElementById("SaveMessage");


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
    var channelName = document.getElementById("newchanneltextbox").value;
    if(channelName != '')
    {
        myError1.innerHTML = ''
        eachChannel.push(channelName);
        for (let i = 0; i<eachChannel.length; i++) 
            {
            channels.set(i,channelName)
            p.innerHTML= '<div class="mimenu" onclick="muestraMensajes('+i+')">'+eachChannel[i]+'</div>';
            objetoH.appendChild(p);
            }
        document.getElementById("newchanneltextbox").value = "";
        text1.hidden = true;
        button1.hidden = true;
    } else 
    {
        myError1.innerHTML = 'Por favor introduce un valor'

    }
}

function muestraMensajes(channelKey) {
    if(messageText.hidden == true && MessageButton.hidden == true) 
    {
        messageText.hidden = false;
        MessageButton.hidden = false
    }
    let MainContainer = document.getElementById("contenedorprinc");
    MainContainer.innerHTML = "";
    let MyDiv =document.createElement("div");
    var RamonMensaje = new ChannelMessages();
    MyDiv.innerHTML = '<div class="MyMessages">'+RamonMensaje.MessageContent+'</div>';
    MainContainer.appendChild(MyDiv);
} 