let btn=document.querySelector("#btn")
let current="light";
function fun(){
    if(current==="light"){
        document.body.style.backgroundColor="white";
        current="dark";
    }
    else{
        document.body.style.backgroundColor="black";
        current="light";
    }
}
btn.addEventListener("click",fun);