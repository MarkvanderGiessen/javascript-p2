let colors = ["red", "green", "blue"];

function change_color(){
let random_number = Math.floor(Math.random() * 3);
document.body.style.backgroundColor = colors[random_number];
}

setInterval(change_color, 100);