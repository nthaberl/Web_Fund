var countOne = 0;
var likes = document.querySelector("#numberLikes");

function addLikes(){
    countOne +=1;
    likes.innerText = (countOne + " Like(s)");
    console.log(countOne);
}
