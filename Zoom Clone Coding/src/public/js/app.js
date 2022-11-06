const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

function enterRoom(){
    welcome.hidden = true;
    room.hidden = false;
}

function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, enterRoom);
    input.vaㅗlue = "";
}

form.addEventListener("submit", handleRoomSubmit);