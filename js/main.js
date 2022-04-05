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
let button1 = document.getElementById("botonguardar");
let myError1 = document.getElementById("error1");
let messageText = document.getElementById("NewMessageBox");
let MessageButton = document.getElementById("SaveMessage");


function CreateChannel() 
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
        text1.hidden = true;
        button1.hidden = true;
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
        MyDiv.innerHTML = '<div class="MyMessages">'+Messages[i].MessageContent+'</div>';
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
    Messages = channels.get(ChanelForTheMessage);
    Messages.push(NewMessage);
    console.log(Messages);
    console.log(channels);
    document.getElementById("NewMessageBox").value = "";
    MyDiv.innerHTML = "";
    let MainContainer = document.getElementById("contenedorprinc");
    for (let i = 0; i< Messages.length; i++){
        MyDiv.innerHTML = '<div class="MyMessages">'+Messages[i].MessageContent+'</div>';
        MainContainer.appendChild(MyDiv);
    }

}