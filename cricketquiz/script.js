const cricketQuestions = [
  {
    question: "Who holds the record for the highest individual score in Test cricket?",
    answers: [
      { Text: "Sachin Tendulkar", correct: false },
      { Text: "Brian Lara", correct: true },
      { Text: "Ricky Ponting", correct: false },
      { Text: "Virat Kohli", correct: false }
    ]
  },
  {
    question: "Which bowler has taken the most wickets in One Day Internationals (ODIs)?",
    answers: [
      { Text: "Wasim Akram", correct: false },
      { Text: "Shane Warne", correct: false },
      { Text: "Muttiah Muralitharan", correct: true },
      { Text: "Glenn McGrath", correct: false }
    ]
  },
  {
    question: "In T20 Internationals, who has the highest strike rate among batsmen with a minimum of 500 runs?",
    answers: [
      { Text: "Chris Gayle", correct: false },
      { Text: "Virat Kohli", correct: false },
      { Text: "AB de Villiers", correct: false },
      { Text: "Surya Kumar Yadav", correct: true }
    ]
  },
  {
    question: "Who is the highest run scorer in the cwc2023?",
    answers: [
      { Text: "Rohit Sharma", correct: false },
      { Text: "Virat Kohli", correct: true },
      { Text: "KL Rahul", correct: false },
      { Text: "Ajinkya Rahane", correct: false }
    ]
  },
  // {
  // //   question: "Which country has won the most ICC Cricket World Cups?",
  // //   answers: [
  // //     { Text: "Australia", correct: true },
  // //     { Text: "India", correct: false },
  // //     { Text: "West Indies", correct: false },
  // //     { Text: "Pakistan", correct: false }
  // //   ]
  // // },
  // // {
  // //   question: "Who is known as the 'Sultan of Swing' in cricket?",
  // //   answers: [
  // //     { Text: "Wasim Akram", correct: true },
  // //     { Text: "Curtly Ambrose", correct: false },
  // //     { Text: "James Anderson", correct: false },
  // //     { Text: "Glenn McGrath", correct: false }
  // //   ]
  // // },
  // // {
  // //   question: "Which cricketer holds the record for the fastest half century in T20 Internationals?",
  // //   answers: [
  // //     { Text: "Chris Gayle", correct: false },
  // //     { Text: "Brendon McCullum", correct: false },
  // //     { Text: "David Miller", correct: false },
  // //     { Text: "Yuvraj Singh", correct: true }
  // //   ]
  // // },
  // // {
  // //   question: "In Test cricket, who is the leading run-scorer among opening batsmen?",
  // //   answers: [
  // //     { Text: "Alastair Cook", correct: true },
  // //     { Text: "Virender Sehwag", correct: false },
  // //     { Text: "Graeme Smith", correct: false },
  // //     { Text: "Matthew Hayden", correct: false }
  // //   ]
  // // },
  // // {
  // //   question: "Who is the only player to have scored 10,000 runs in both Test and One Day International cricket?",
  // //   answers: [
  // //     { Text: "Ricky Ponting", correct: false },
  // //     { Text: "Sachin Tendulkar", correct: true },
  // //     { Text: "Jacques Kallis", correct: false },
  // //     { Text: "Kumar Sangakkara", correct: false }
  // //   ]
  // // },
  // // {
  // //   question: "Which country hosted the first-ever Cricket World Cup in 1975?",
  // //   answers: [
  // //     { Text: "England", correct: true },
  // //     { Text: "Australia", correct: false },
  // //     { Text: "West Indies", correct: false },
  // //     { Text: "India", correct: false }
  // //   ]
  // // },
  // // {
  // //   question: "What is Virat Kohli's highest individual score in a One Day International (ODI) match?",
  // //   answers: [
  // //     { Text: "183", correct: true },
  // //     { Text: "183", correct: true },
  // //     { Text: "183", correct: true },
  // //     { Text: "183", correct: true }
  // //   ]
  // // }
];
const que = document.querySelector("#question");
const index = document.querySelector("#index");
const next = document.querySelector("#nxt");
const answercontainer = document.querySelector(".answerelement");
const sc = document.querySelector("#sc");
const scorecard=document.querySelector(".score")
const rst=document.querySelector("#rst");
const reset=document.querySelector(".reset");

var abc=null;


let score = 0;
sc.innerHTML=`you score :${score}`;
let a = 0;
let b = 1;
index.innerHTML = b;
que.innerHTML = cricketQuestions[a].question;

function displayOptions() {
  const options = cricketQuestions[a].answers;

  answercontainer.innerHTML = "";

  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    
    const answerButton = document.createElement("button");
    answerButton.classList.add("answer-btn");
    answerButton.textContent = option.Text;

    answerButton.addEventListener("click", () => {
      const allButtons = document.querySelectorAll(".answer-btn");
      allButtons.forEach((btn) => {
        btn.disabled = true;
        btn.style.backgroundColor = ""; 
      });

      
      answerButton.disabled = false;
      answerButton.style.backgroundColor = "black";

      abc = option.correct;
        console.log("a"+a);
        console.log("b"+b);
        answerButton.style.backgroundColor="black"


        abc=option.correct      
    console.log(abc);

        
    });

    answercontainer.appendChild(answerButton);
  }
}
next.addEventListener("click",()=>{
  
  if (abc===null) {
    alert("select an option");
    
    
  }

  else{ if (abc===true) {
    score++;
    sc.innerHTML=`you score :${score}`;
    console.log("score"+score);   
  }

if (a < cricketQuestions.length-1) {
console.log(a);
a++;
b++;
index.innerHTML = b;
que.innerHTML = cricketQuestions[a].question;
displayOptions();
}
else{
alert(`quiz completed 
you scored ${score}`);
a = 0;
b = 1;
score=0;
sc.innerHTML=`your score :${score}`;
index.innerHTML = b;
que.innerHTML = cricketQuestions[a].question;
displayOptions();
scorecard.style.display="block"


}}
  abc=null;
  
}

)

displayOptions();
