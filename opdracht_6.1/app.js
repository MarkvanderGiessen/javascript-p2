//wanneer je scherm/browser is geladen, wordt je canvas getoond.  
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("load", function () {
    //geef canvas de hoogte en breedte van je browser 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);

let painting = false;

function startPosition(e) {
    painting = true;
    console.log("im painting")
    draw(e);
};

function finishedPosition() {
    painting = false;
    console.log("im done painting")
};
function draw(e) {
    if (!painting) return;
    console.log(e);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY)
};

function finishedPosition() { 
    painting = false; 
    ctx.beginPath() 
  };
canvas.addEventListener("mousemove", draw);
 