let rbutton=document.querySelector(".restbtn");

let userwin = true; 
let userscore = 0;
let computerscore = 0;
let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let users=document.querySelector("#user-score");
let computers=document.querySelector("#comp-score");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice); 
    });
});

computerchoicefun = () => {
    let arr = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    return arr[ran];
}

showwinners = (userchoice,computerchoice) => {
    if(userchoice===computerchoice){
        msg.innerText="game draw"
        msg.style.backgroundColor="yellow"
        
    }
  else if (userwin === true) {
        msg.innerText="you win "
        userscore=userscore+1;
        users.innerText=userscore;
        msg.style.backgroundColor="green";
    } else {
        msg.innerText="you lose";
        computerscore=computerscore+1;
        msg.style.backgroundColor="red";
        computers.innerText=computerscore;

    }
}
rbutton.addEventListener("click",()=>{
    userscore=0;
    computerscore=0;
    users.innerText=userscore;
    computers.innerText=computerscore;
    msg.innerText="play your move"
    msg.style.backgroundColor="aqua"
    console.log(userscore,computerscore)
})    


playgame = (userchoice) => {
    const computerchoice = computerchoicefun();

   
    if (userchoice === "rock") {
        userwin = computerchoice === "scissors" ? true : false;
    } else if (userchoice === "paper") {
        userwin = computerchoice === "scissors" ? false : true;
    } else {
        userwin = computerchoice === "rock" ? false : true;
    }
    showwinners(userchoice,computerchoice);
    
};
