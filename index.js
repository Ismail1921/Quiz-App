const quizCard = document.getElementById("quizCard");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultCard = document.getElementById("resultCard");
const questions = [
 {
  question: "What is the most valuable thing you can never get back?",
  options: ["Money", "Time", "Fame", "Luck"],
  answer: "Time"
 },
 
 {
  question: "Which habit helps you improve every day?",
  options: ["Complaining", "Learning", "Blaming others", "Sleeping all day"],
  answer: "Learning"
 },
 
 {
  question: "What should you do before making a big decision?",
  options: ["Rush", "Think carefully", "Ignore advice", "Flip a coin"],
  answer: "Think carefully"
 },
 
 {
  question: "Which quality makes people trust you?",
  options: ["Honesty", "Pride", "Laziness", "Anger"],
  answer: "Honesty"
 },
 
 {
  question: "Failure is best seen as?",
  options: ["The end", "A lesson", "Bad luck", "Embarrassment"],
  answer: "A lesson"
 },
 
 {
  question: "Which is the best investment?",
  options: ["Expensive clothes", "Yourself", "Luxury cars", "Social media likes"],
  answer: "Yourself"
 },
 
 {
  question: "What is the key to good communication?",
  options: ["Listening", "Interrupting", "Shouting", "Ignoring"],
  answer: "Listening"
 },
 
 {
  question: "Which habit improves your health?",
  options: ["Exercise", "Skipping meals", "Sleeping late every day", "Too much sugar"],
  answer: "Exercise"
 },
 
 {
  question: "What helps build strong friendships?",
  options: ["Respect", "Jealousy", "Competition", "Lies"],
  answer: "Respect"
 },
 
 {
  question: "What should you do after making a mistake?",
  options: ["Hide it", "Learn from it", "Blame someone", "Quit"],
  answer: "Learn from it"
 },
 
 {
  question: "Which emotion should you control?",
  options: ["Anger", "Kindness", "Happiness", "Excitement"],
  answer: "Anger"
 },
 
 {
  question: "What usually leads to success?",
  options: ["Consistency", "Luck only", "Excuses", "Waiting"],
  answer: "Consistency"
 },
 
 {
  question: "What is the best way to gain knowledge?",
  options: ["Reading", "Ignoring books", "Guessing", "Copying others"],
  answer: "Reading"
 },
 
 {
  question: "Which value is important in teamwork?",
  options: ["Cooperation", "Selfishness", "Pride", "Greed"],
  answer: "Cooperation"
 },
 
 {
  question: "What should you do when facing challenges?",
  options: ["Give up", "Stay determined", "Run away", "Complain"],
  answer: "Stay determined"
 },
 
 {
  question: "Which habit wastes the most time?",
  options: ["Procrastination", "Planning", "Learning", "Working"],
  answer: "Procrastination"
 },
 
 {
  question: "What helps people achieve their dreams?",
  options: ["Discipline", "Excuses", "Fear", "Laziness"],
  answer: "Discipline"
 },
 
 {
  question: "Which is more important than talent?",
  options: ["Hard work", "Popularity", "Money", "Luck"],
  answer: "Hard work"
 },
 
 {
  question: "What should you do when someone succeeds?",
  options: ["Celebrate with them", "Be jealous", "Ignore them", "Criticize them"],
  answer: "Celebrate with them"
 },
 
 {
  question: "What is one of the greatest strengths a person can have?",
  options: ["Patience", "Arrogance", "Fear", "Stubbornness"],
  answer: "Patience"
 }
];
let currentQuestion = 0;
let score = 0;
function showQuestion() {
 const current = questions[currentQuestion];
 question.textContent = current.question;
 options.innerHTML = "";
  current.options.forEach(option => { 
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("optionBtn");
      button.addEventListener("click", () => { if (option === current.answer) { score++;
       button.style.backgroundColor = "#47D700";}
      else {
 
 button.style.backgroundColor = "#F78686";}
 const optionButtons = document.querySelectorAll(".optionBtn");

optionButtons.forEach(btn => { if (btn.textContent === current.answer) {
 btn.style.backgroundColor = "#47D700";
}

btn.disabled = true;
 
});
 
});
      options.appendChild(button);
 
});
 
}
showQuestion();
nextBtn.addEventListener("click", () => { currentQuestion++

 if (currentQuestion < questions.length) { showQuestion();
} else { quizCard.style.display = "none";
resultCard.style.display = "block";
resultCard.innerHTML = ` <div id = "scoreCard">
<h2>🎉Congratulations </h2>
<h2>Your Score:</h2>

<p>${score}/${questions.length}</p>
    <button id="tryAgainBtn">Try Again</button></div>
`;

const tryAgainBtn = document.getElementById("tryAgainBtn");

tryAgainBtn.addEventListener("click", () => {
 currentQuestion = 0;
 score = 0;
 resultCard.style.display = "none";
quizCard.style.display = "block";
nextBtn.style.display = "block";
 showQuestion();
});
 
}
 
});