class ChannelMessages {
    constructor(channelOwner,authorname, messagetime, messagecontent) {
        this.channelOwner = '';
        this.AuthorName = 'UserRandom';
        this.MessageTime = '2022-11-01 11:00';
        this.MessageContent = '';
    }
}
var channels= new Map(); 
let text1 = document.getElementById("newchanneltextbox");
let button1 = document.getElementById("SaveButton");
let myError1 = document.getElementById("error1");
let ChannelForm = document.getElementById("ChannelForm")
let messageText = document.getElementById("NewMessageBox");
let MessageButton = document.getElementById("SaveMessage");
let MessageContainer = document.getElementById("MainFooter")


function CreateChannel() 
{
    myError1.innerHTML = '';
    if (window.getComputedStyle(ChannelForm).visibility === "hidden") {
        show(ChannelForm);
    } else {
        hide(ChannelForm);
    }
}

function SaveChannel() 
{
    let objetoH = document.getElementById("mychannels");
    let p =document.createElement("p");
    let channelName = document.getElementById("newchanneltextbox").value;
    if(channelName != ''){
        myError1.innerHTML = '';
        channels.set(channelName, new Array());
        for (let key of channels.keys()) {
            p.innerHTML= '<div class="mimenu" onclick="ShowChannelMessages(\''+key+'\')">'+key+'</div>';
            objetoH.appendChild(p);
        }
        document.getElementById("newchanneltextbox").value = "";
        hide(ChannelForm);
    } else 
    {
        myError1.innerHTML = 'Please enter the channel name'

    }
}

function ShowChannelMessages(channelKey) {
    if(window.getComputedStyle(MessageContainer).visibility === "hidden") {
        show(MessageContainer);
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
        MainContainer.appendChild(MyDiv);
    }
} 



function SaveMessage() {
    let MyDiv =document.createElement("div");
    let ChanelForTheMessage = document.getElementById("SearchingContainer").innerHTML;
    let NewMessage = new ChannelMessages();
    let MessageWritten = document.getElementById("NewMessageBox").value;
    let MainContainer = document.getElementById("contenedorprinc");
    NewMessage.MessageContent = MessageWritten;
    NewMessage.channelOwner= ChanelForTheMessage;
    NewMessage.AuthorName= 'RamonCampos';
    NewMessage.MessageTime = new Date().toLocaleString();
    Messages = channels.get(ChanelForTheMessage);
    Messages.push(NewMessage);
    document.getElementById("NewMessageBox").value = "";
    MyDiv.innerHTML = "";
    for (let i = 0; i< Messages.length; i++){
        MyDiv.innerHTML = '<div class="ActualAuthorTime">'+Messages[i].AuthorName+' --> --> '+Messages[i].MessageTime+'</div><div class="ActualMessages">'+Messages[i].MessageContent+'</div>';
        MainContainer.appendChild(MyDiv);
    }

   // me queda el buscador


}

function hide(ElementHtml){
    ElementHtml.style.visibility = "hidden";
    
}

function show(ElementHtml){
    ElementHtml.style.visibility = "visible";
}
/*
function GetCUrrentDateTime(){
    let moment = new Date();
    let hour = moment.getHours();
    let minute = moment.getMinutes();
    let second = moment.getSeconds();
    let day = moment.toLocaleDateString();
    let day2 = moment.toLocaleString();
    let str_second = new String (second);
    let str_minute = new String (minute);
    let str_hour = new String (hour);
    
    // puedo refactorizar esto?
    if (str_second.length == 1)
       second = "0" + second;
    if (str_minute.length == 1)
       minute = "0" + minute;
    if (str_hour.length == 1)
       hora = "0" + hora;
   

    PrintableTime = "--> " + hour + ":" + minute + ":" + second + "  (" + day + ")";
    return PrintableTime;
}*/

function AddAZeroToTheStringIfNeeded(StringAttached){
    if (new String (StringAttached).length == 1)
    StringAttached = "0" + StringAttached;
    else StringAttached
}


function SearchInChannel(){

    var MessageSearched = document.getElementById("SearchMessageBox").value; // paso 1
    var ChanelForTheMessage = document.getElementById("SearchingContainer").innerHTML; //recogiendo nombre del canal



    /*hay q realizar una busqueda del mensaje escrito en caja dentro de mi array del canal

    Paso 1: recoger el texto guardao

    Paso 2: metodo de arrays xa hacer una busqueda, el array que es lo tengo por el nombre del canal, 

    */
}