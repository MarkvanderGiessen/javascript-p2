let product1= "bananen";
let product2= "whiskey";
let product3= "chips";
let product4= "bonen";
let product5= "aardappelen";
let paragraaf = document.getElementById("para")
const winkelmand= ["bananen","whiskey","chips","bonen","aardappelen"];
let aantal = winkelmand.length;
paragraaf.innerText = "er zitten" + aantal + "producten in je winkelmand";
// opdracht 2 van 1.1//
paragraaf.innerText = "uw producten zijn:" + winkelmand;
// opdracht 3 van 1.1//
paragraaf.innerText = winkelmand[3] + "is de derde artikel in de lijst";
// opdracht 4 van 1.1//
winkelmand[1] = "bier";
paragraaf.innerText = winkelmand;
// opdracht 5+6 van 1.1//
function product_toevoegen(){
    winkelmand.push("smirnoff");
paragraaf.innerText = winkelmand;
if (winkelmand  <= 1) {"je hebt te weinig producten";
    
} else {
    paragraaf.innerText = winkelmand;
}
}
// opdracht 7//
//if(winkelmand[4] == "drop"){
   // document.write(winkelmand);//
//} else{//
    //document.write("u heeft geen drop");//
// opdracht 8//
//document.write(winkelmand.join(" "));//

//opdracht 9// 
//winkelmand.splice(0, 2)/
//document.write(winkelmand)//

//opdracht 10//
//winkelmand.sort();//
//document.write(winkelmand);//

let output = document.getElementById("para")
console.log(output)
let input = document.getElementById("input")
console.log(input)

const shop = [];
function add_product(){
let product = input.value;
shop.push(product);
output.innerText = shop;
}