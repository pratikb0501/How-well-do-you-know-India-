const readlineSync = require ("readline-sync");
const chalk = require ('chalk');
let score = 0;
let userName = readlineSync.question(chalk.blue("What is your good name?"));
console.log(`Hello ${userName}`);

const array = [
  {
    question : "\n Which city is said to be the finacial capital of India ? \n a. Chennai \n b. Mumbai \n c. Surat \n d. Kolkata \n",
    answer : "b"
  },
    {
    question : "\n Which city is said to be the silicon valley of India ? \n a. Noida \n b. Pune \n c. Bengaluru \n d. Kolkata \n",
    answer : "c"
  },
    {
    question : "\n Who is the first female finance minister of India? \n a. Anandiben Joshi \n b. Nirmala Sitharaman \n c. Supriya Sule \n d. Indira Gandhi \n",
    answer : "d"
  },
    {
    question : "\n Another Name for India according to Article One of Indian constitution is ? \n a. Hindustan \n b. Bharat \n c. Indian Mainland \n d. Hindi-stan \n",
    answer : "b"
  },
    {
    question : "\n Under whose guidance did the Green Revolution was began in India by Dr. M.S. Swaminathan ? \n a. Dr.Norman Borlaug \n b. Dr.Varghese Kurien \n c. Dr.Ricard Williams \n d. Dr.Antonio Holder \n",
    answer : "a"
  }
]

if(readlineSync.keyInYN(chalk.red("Shall we begin the game ? y/n"))){
  console.log(chalk.green("lets begin the game of how well do you know India"));
  for (let i=0;i<array.length;i++){
    let currentQuestion = array[i].question;
    let currentAnswer = array[i].answer;
    console.log(chalk.yellow(`\n Question ${i+1} of ${array.length}`))
  play(currentQuestion,currentAnswer);
  }
  console.log(chalk.cyan(`Your current score is ${score}/50`));
} else {
  console.log(chalk.red("cancelled"));
  console.log(chalk.blue("Run again to start"));
}

function displayAnswerMessage(isRight){
  if(isRight){
    console.log(chalk.green("Yaay,Correct Answer!!"));
  } else {
     console.log(chalk.red("Opps,Incorrect Answer!!"));
  }
}

function play(que,ans){
  let answerArray = ["a","b","c","d"]
  let userAnswer = readlineSync.question(que);
  if(!answerArray.includes(userAnswer)){
    console.log(chalk.red("Please enter correct option"));
    userAnswer = readlineSync.question(que);
  }
  if(userAnswer === ans){
    displayAnswerMessage(true)
    score += 10 ;
  }else{
    displayAnswerMessage(false)
  }
}