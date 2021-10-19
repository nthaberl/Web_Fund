var countTop = 0;
var countMid = 0;
var countBot = 0;
var likesTop = document.querySelector("#likesTop");
var likesMid = document.querySelector("#likesMid");
var likesBottom = document.querySelector("#likesBottom");

function addLikes(element){
    if(element.id === "like-button-top"){
        countTop ++;
        likesTop.innerText = (countTop + " Like(s)");
    }
    else if(element.id === "like-button-middle"){
        countMid ++;
        likesMid.innerText = (countMid + " Like(s)");
    }
    else if(element.id === "like-button-bottom"){
        countBot ++;
        likesBottom.innerText = (countBot + " Likes");
        }
    }
