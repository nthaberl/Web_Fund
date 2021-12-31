//hide bottom cookie message
var message = document.querySelector(".message")

function hide() {
    message.remove();
}


// change temps to celsius

var h1 = document.querySelector("#oneHigh")
var l1 = document.querySelector("#oneLow")
var h2 = document.querySelector("#twoHigh")
var l2 = document.querySelector("#twoLow")
var h3 = document.querySelector("#threeHigh")
var l3 = document.querySelector("#threeLow")
var h4 = document.querySelector("#fourHigh")
var l4 = document.querySelector("#fourLow")

function changeTemp (element){
    if(element.value === "celsius"){
    }
    else if(element.value === "fahrenheit"){
        h1.innerText = "75°";
        l1.innerText = "65°";
        h2.innerText = "80°";
        l2.innerText = "66°";
        h3.innerText = "69°";
        l3.innerText = "61°";
        h4.innerText = "78°";
        l4.innerText = "70°";
    }
}