const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function beDone(msg){
    console.log(`This is a msg from the backend: `, msg);
}

function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, beDone);
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);