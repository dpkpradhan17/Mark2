var readlineSync=require("readline-sync");
console.log("****Welcome to the Vampire Diaries Quiz****")
var userName= readlineSync.question("What is your username? ");
console.log("Namaste! "+userName);
console.log("---Kindly Read the Instructions Before you start---")
console.log("1. There are 3 Levels in this Quiz")
console.log("2. Level 1 consists of 3 Questions. Level 2 Consists of 5 Questions and Level 3 consists of 7 questions")
console.log("3. You have to clear every level to reach the end of the quiz.")
console.log("4. There is no -ve marking. We don't beleive in that")
console.log("---------------------------------------")

var score=0;

function play(question, answer){
  var state= readlineSync.question(question)
  if(state===answer){
    console.log("Right Answer! ")
    score=score+1;
  }
  else{
    console.log("Wrong Answer! ")
  }
  console.log("Your Score till now: "+score);
}
var highScore=[
  {
    user:"dpkpradhan17",
    score:"15"
  },
  {
    user:"elena001",
    score:"13"
  },
  {
    user: "mnsrtd",
    score: "14"
  }
];

var lv1Ques=[
  {
    question: "How many seasons are there in Vampire Diaries? ",
    answer:"8"
  },
  {
    question: "What state is Mystic Falls in? ",
    answer: "virginia"
  },
  {
    question: "Who is Stefan's brother? ",
    answer: "daemon"
  },
];
var lv2Ques=[
  {
    question: "What dead girlfriend does Jeremy keep seeing at school? ",
    answer: "anna"
  },
  {
    question: "Who was the first generation of vampires? ",
    answer: "originals"
  },
  {
    question: "In Season 3, who is Caroline’s date for the formal ball? ",
    answer:"klaus"
  },
  {
    question:"In Season 5, what college does Elena, Bonnie, and Caroline attend? ",
    answer: "whitmore college"
  },
  {
    question:"Who does Valerie have a child with when visiting Mystic Falls? ",
    answer: "stefan"
  }
];
var lv3Ques=[
  {
    question: "Who plays Elena on the show? ",
    answer: "nina dobrev"
  },
  {
    question: "What is the name of Stefan's best friend, who appears in season one and is promptly killed? ",
    answer: "lexi"
  },
  {
    question: "Tyler is a hybrid — a vampire and what? ",
    answer: "werewolf"
  },
  {
    question:"Who is Stefan's evil doppelganger? ",
    answer:"silas"
  },
  {
    question: "Who turns Caroline into a vampire? ",
    answer: "katherine"
  },
  {
    question: "How does Liz Forbes die? ",
    answer:"cancer"
  },
  {
    question: "Who started Elena's doppelganger line? ",
    answer: "amara"
  },
];
for(i=0;i<lv1Ques.length;i++)
  {
    var lvl1=lv1Ques[i];
    play(lvl1.question,lvl1.answer)
  }

if(score<3)
{
  console.log("Sorry! You didn't qualify for Level 2.")
}
else{
  console.log("Hurray! You qualified for level 2.")
  console.log("-------------------------------------------")
  for(i=0;i<lv2Ques.length;i++)
    {
      var lvl2=lv2Ques[i];
      play(lvl2.question, lvl2.answer)
    }
  if(score<8)
  {
    console.log("Sorry you didn't qualify for Level 3. ")
  }
  else{
    console.log("Hurray! You qualified for level 3.")
    console.log("-------------------------------------------")
    for(i=0;i<lv3Ques.length;i++)
      {
        var lvl3=lv3Ques[i];
        play(lvl3.question,lvl3.answer)
      }
    if (score<13)
    {
      console.log("Well-Done! but you didn't know Vampire Diaries very well.")
    }
    else{
      console.log("Congratulations! You know the Vampire Diaries very Well")
    }
  }
}
console.log("********************************************")
console.log("Your Total Score is: "+score);
console.log("********************************************")
for(i=0;i<highScore.length;i++){
  var check=highScore[i];
  if (score<check.score){
    console.log("Nice but You are not among the high scorers. ")
  }
  else{
    console.log("Hurray! You are among the high scorers. ")
  }
  break;
}
