// console.log("page loaded...");

// function logout(button) {
//     console.log("button clicked", button);
//     button.innerText = "Logout";
// }

// function hide() {
//     button.remove();
// }

var jane = document.querySelector(".card-body > h1");

function changeName(){
    jane.innerText = "Jane Don't";
}

// var countOne = 0;
// var likes = document.querySelector("#numberLikes");

// function addLikes(){
//     countOne +=1;
//     likes.innerText = (countOne + " Like(s)");
//     console.log(countOne);
// }

// function logout(button) {
//     console.log("button clicked", button);
//     button.innerText = "Logout";
// }

// function hide(button) {
//     button.remove();
// }

var connectTop = document.querySelector("#connect1");
var connectBot = document.querySelector("#connect2");
var badge1 = document.querySelector(".badge1");
var badge2 = document.querySelector(".badge2");
var countConnect = 500;
var countReq = 2;

function accept(element){
    if(element.id === "accept1"){
        connectTop.remove();
        countReq -= 1; 
        countConnect += 1;
        badge1.innerText = countReq;
        badge2.innerText = countConnect;
    }
    else if(element.id === "deny1"){
        connectTop.remove();
        countReq -= 1; 
        countConnect -= 1;
        badge1.innerText = countReq;
        badge2.innerText = countConnect;
    }
    else if(element.id === "accept2"){
        connectBot.remove();
        countReq -= 1;
        countConnect += 1;
        badge1.innerText = countReq;
        badge2.innerText = countConnect;
    }
    else if(element.id === "deny2"){
        connectBot.remove();
        countReq -= 1;
        countConnect -= 1;
        badge1.innerText = countReq;
        badge2.innerText = countConnect;
    }
}

