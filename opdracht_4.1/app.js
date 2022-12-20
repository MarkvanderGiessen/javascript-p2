let button = document.getElementById("btn");
let p = document.getElementById("para");
let startTimer;
let endTimer;
function startgame(){
    button.style.display = "none";
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor ="green";
        startTimer = Date.now();
    },Math.floor(Math.random() * 9 + 1) * 1000); 
}

function stopGame(){
    if(document.body.style.backgroundColor == "red") return;
    document.body.style.backgroundColor = "blue";
    endTimer = Date.now();
    let reaction = endTimer - startTimer;
    p.innerText = reaction;
    button.style.display = "block";
    
}

