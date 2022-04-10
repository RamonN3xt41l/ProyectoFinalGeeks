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

function ShowChannelMessages(channelKey) 
{
    if(window.getComputedStyle(MessageContainer).visibility === "hidden") {
        show(MessageContainer);
    }
    let MainContainer = document.getElementById("contenedorprinc");
    let PageHeader = document.getElementById("MainHeader")
    MainContainer.innerHTML = "";
    PageHeader.innerHTML="";
    PageHeader.innerHTML = `<div><div id="SearchingContainer">${channelKey}</div><input id="SearchMessageBox" type="text" oninput="SearchInChannel()" name="Search_message_box" placeholder="Search within this channel"></div>`;
    Messages = channels.get(channelKey); 
    for (let i = 0; i< Messages.length; i++){
        let MyDiv =document.createElement("div");
        MyDiv.innerHTML = '<div class="ActualAuthorTime">'+Messages[i].AuthorName+'   '+Messages[i].MessageTime+'</div><div class="ActualMessages">'+Messages[i].MessageContent+'</div>';
        MainContainer.appendChild(MyDiv);
    }
} 



function SaveMessage() 
{
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
}

function hide(ElementHtml){
    ElementHtml.style.visibility = "hidden";
    
}

function show(ElementHtml){
    ElementHtml.style.visibility = "visible";
}


function SearchInChannel(){

    let MessageSearched = document.getElementById("SearchMessageBox").value; // paso 1
    let ChanelForTheMessage = document.getElementById("SearchingContainer").innerHTML; //recogiendo nombre del canal
    let MainContainer = document.getElementById("contenedorprinc");
    let ExtraDiv = document.createElement("div");
    ChannelToSearch = channels.get(ChanelForTheMessage);
    MainContainer.innerHTML = "The messages you are looking for are:";
    for (let i = 0; i< ChannelToSearch.length; i++){
        if(ChannelToSearch[i].MessageContent.includes(MessageSearched)){
            let MyDiv = document.createElement("div");
            MyDiv.innerHTML = '<div class="SearchedDiv">'+ChannelToSearch[i].AuthorName+'   '+ChannelToSearch[i].MessageTime+'</div><div class="SearchedMessages">'+ChannelToSearch[i].MessageContent+'</div>';
            MainContainer.appendChild(MyDiv);
        } 
    }
    if (MainContainer.childElementCount<1){
            MainContainer.innerHTML = "There are no messages containing the text you are looking for"
    }
    ExtraDiv.innerHTML = 'In order to return to the channel messages please click here: <button onclick="ReturnToChannel()">Return</button>';
    MainContainer.appendChild(ExtraDiv);
}

function ReturnToChannel() {
    let MainContainer = document.getElementById("contenedorprinc");
    let ChanelForTheMessage = document.getElementById("SearchingContainer").innerHTML;
    MainContainer.innerHTML = "";
    MessagesToShow = channels.get(ChanelForTheMessage);
    for (let i = 0; i< MessagesToShow.length; i++){
        let MyDiv =document.createElement("div");
        MyDiv.innerHTML = '<div class="ActualAuthorTime">'+Messages[i].AuthorName+' --> --> '+Messages[i].MessageTime+'</div><div class="ActualMessages">'+Messages[i].MessageContent+'</div>';
        MainContainer.appendChild(MyDiv);
    }
    document.getElementById("SearchMessageBox").value = "";

}
