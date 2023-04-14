const questionTextElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const scoreEle = document.getElementById("score");

const randomNumber = () => {
  return Math.floor(Math.random() * 11);
};

const generateNumbersAndAnswer = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const answer = num1 * num2;

  return { num1, num2, answer };
};

const maxQuestionCount = 5;
let currentQuestionCount = 1;
let score = 0;
let currentQuestionAnswer;

const loadQuestion = () => {
  const questionData = generateNumbersAndAnswer();

  const { num1, num2, answer } = questionData;

  currentQuestionAnswer = answer;

  const questionText = `What is ${num1} multiply by ${num2}?`;

  questionTextElement.innerText = questionText;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const userAnswer = parseInt(answerInput.value);

  if (userAnswer === currentQuestionAnswer) {
    score++;
  } else {
    score--;
  }

  scoreEle.innerText = score;

  if (maxQuestionCount == currentQuestionCount) {
    alert("Your Score is: " + score);
    currentQuestionCount = 1;
    score = 0;
  }
  currentQuestionCount++;
  answerInput.value = "";

  loadQuestion();
});

window.onload = loadQuestion();
