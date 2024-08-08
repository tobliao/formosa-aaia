const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

startQuiz();

function startQuiz() {
  score = 0;
  questionContainer.style.display = "flex";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  nextButton.classList.remove("hide");
  restartButton.classList.add("hide");
  resultDiv.classList.add("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = "answer" + index;
    radio.name = "answer";
    radio.value = index;

    const label = document.createElement("label");
    label.htmlFor = "answer" + index;
    label.innerText = answer.text;

    inputGroup.appendChild(radio);
    inputGroup.appendChild(label);
    answerButtons.appendChild(inputGroup);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

restartButton.addEventListener("click", startQuiz);

function endQuiz() {
  questionContainer.style.display = "none";
  nextButton.classList.add("hide");
  restartButton.classList.remove("hide");
  resultDiv.classList.remove("hide");
  resultDiv.innerText = `Your fragrance type: ${score} / ${shuffledQuestions.length}`;
}

function submitQuiz() {
    // Collect selected answers
    const answers = [];
    const question1 = document.querySelector('input[name="q1"]:checked');
    const question2 = document.querySelector('input[name="q2"]:checked');
    const question3 = document.querySelector('input[name="q3"]:checked');

    if (question1) answers.push(question1.value);
    if (question2) answers.push(question2.value);
    if (question3) answers.push(question3.value);

    // Determine outcome based on answers
    const result = determineOutcome(answers);

    // Display result
    document.getElementById('result').innerText = `Your results: ${result}`;
}

function determineOutcome(answers) {
    // Example outcome logic
    if (answers[0] === 'Masculine' && answers[1] === 'Sporty' && answers[2] === 'Adventurous') {
        return 'You fit (fragrance type 1)!';
    } else if (answers[0] === 'Feminine' && answers[1] === 'Sporty' && answers[2] === 'Warm') {
        return 'You fit (fragrance type 2)!';
    } else if (answers[0] === 'Feminine' && answers[1] === 'Clean' && answers[2] === 'Adventurous') {
        return 'You fit (fragrance type 3)!'; 
    } else {
        return 'Your preferences are unique!';
    }
}
