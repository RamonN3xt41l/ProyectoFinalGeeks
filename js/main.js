class ChannelMessages {
    constructor(channelOwner,authorname, messagetime, messagecontent) {
        this.channelOwner = '';
        this.AuthorName = 'UserRandom';
        this.MessageTime = '2022-11-01 11:00';
        this.MessageContent = '';
    }

    // aqui iran los metodos si los hubiere
}
var channels= new Map(); 
//var eachChannel = new Array();
let text1 = document.getElementById("newchanneltextbox");
let button1 = document.getElementById("savebutton");
let myError1 = document.getElementById("error1");
let messageText = document.getElementById("NewMessageBox");
let MessageButton = document.getElementById("SaveMessage");


function CreateChannel() 
{
    myError1.innerHTML = '';
    if (text1.style.visibility === "hidden" && button1.style.visibility === "hidden") {
        text1.style.visibility = "visible"
        button1.style.visibility = "visible"
    } else {
        text1.style.visibility = "hidden"
        button1.style.visibility = "hidden"
    }

    /*
    if(text1.hidden == true && button1.hidden == true) 
    {
        text1.hidden = false;
        button1.hidden = false
    } else 
    {
        text1.hidden = true;
        button1.hidden = true;
    }
    */
}

function SaveChannel() 
{
    let objetoH = document.getElementById("mychannels");
    let p =document.createElement("p");
    var channelName = document.getElementById("newchanneltextbox").value;
    if(channelName != '')
    {
        myError1.innerHTML = '';
        channels.set(channelName, new Array());
        for (let key of channels.keys()) {
            p.innerHTML= '<div class="mimenu" onclick="ShowChannelMessages(\''+key+'\')">'+key+'</div>';
            objetoH.appendChild(p);
        }
        document.getElementById("newchanneltextbox").value = "";
        text1.style.visibility = "hidden"
        button1.style.visibility = "hidden"
    } else 
    {
        myError1.innerHTML = 'Please enter the channel name'

    }
}

function ShowChannelMessages(channelKey) {
    if(messageText.hidden == true && MessageButton.hidden == true) 
    {
        messageText.hidden = false;
        MessageButton.hidden = false
    }
    let MainContainer = document.getElementById("contenedorprinc");
    let PageHeader = document.getElementById("MainHeader")
    MainContainer.innerHTML = "";
    PageHeader.innerHTML="";
    PageHeader.innerHTML = `<div><div id="SearchingContainer">${channelKey}</div><input id="SearchMessageBox" type="text" name="Search_message_box" placeholder="Search within this channel"><button id="Searcher" onclick="SearchInChannel()">Search</button></div>`;
    Messages = channels.get(channelKey); 
    for (let i = 0; i< Messages.length; i++){
        let MyDiv =document.createElement("div");
        MyDiv.innerHTML = '<div class="ActualAuthorTime">'+Messages[i].AuthorName+'   '+Messages[i].MessageTime+'</div><div class="ActualMessages">'+Messages[i].MessageContent+'</div>';
        //MyDiv.innerHTML = '<div class="MyMessages">'+Messages[i].MessageContent+'</div>';
        MainContainer.appendChild(MyDiv);
    }
} 



function SaveMessage() {
    let MyDiv =document.createElement("div");
    var ChanelForTheMessage = document.getElementById("SearchingContainer").innerHTML;
    var NewMessage = new ChannelMessages();
    var MessageWritten = document.getElementById("NewMessageBox").value;
    NewMessage.MessageContent = MessageWritten;
    NewMessage.channelOwner= ChanelForTheMessage;
    NewMessage.AuthorName= 'RamonCampos';

    // probablemente esto hay q refactorizarlo
    var moment = new Date();
    hour = moment.getHours();
    minute = moment.getMinutes();
    second = moment.getSeconds();
    day = moment.toLocaleDateString();
    str_second = new String (second)
    if (str_second.length == 1)
       second = "0" + second
    str_minute = new String (minute)
    if (str_minute.length == 1)
       minute = "0" + minute
    str_hour = new String (hour)
    if (str_hour.length == 1)
       hora = "0" + hora
    PrintableTime = "--> " + hour + ":" + minute + ":" + second + "  (" + day + ")";
    // hasta aqui

    NewMessage.MessageTime= PrintableTime;
    Messages = channels.get(ChanelForTheMessage);
    Messages.push(NewMessage);
    document.getElementById("NewMessageBox").value = "";
    MyDiv.innerHTML = "";
    let MainContainer = document.getElementById("contenedorprinc");
    for (let i = 0; i< Messages.length; i++){
        MyDiv.innerHTML = '<div class="ActualAuthorTime">'+Messages[i].AuthorName+'   '+Messages[i].MessageTime+'</div><div class="ActualMessages">'+Messages[i].MessageContent+'</div>';
        MainContainer.appendChild(MyDiv);
    }

   // me queda el buscador, ser capaz de hacer el scroll


}


function SearchInChannel(){

    var MessageSearched = document.getElementById("SearchMessageBox").value; // paso 1
    var ChanelForTheMessage = document.getElementById("SearchingContainer").innerHTML; //recogiendo nombre del canal



    /*hay q realizar una busqueda del mensaje escrito en caja dentro de mi array del canal

    Paso 1: recoger el texto guardao

    Paso 2: metodo de arrays xa hacer una busqueda, el array que es lo tengo por el nombre del canal, 

    */
}