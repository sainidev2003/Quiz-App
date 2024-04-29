const quizData = [
  {
    question: '1. Rainbow consists of how many colors?',
    a: '5 colors',
    b: '6 colors',
    c: '7 colors',
    d: '8 colors',
    correct: 'c',
  },
  {
    question: '2. Which animal is known as the ship of the desert?',
    a: 'Dog',
    b: 'Elephant',
    c: 'Camel',
    d: 'Cow',
    correct: 'c',
  },
  {
    question: '3. How many letters are there in the English alphabet?',
    a: '26',
    b: '25',
    c: '24',
    d: '27',
    correct: 'a',
  },
  {
    question: '4. In which direction does the Sun rise?',
    a: 'North',
    b: 'South',
    c: 'East',
    d: 'West',
    correct: 'c',
  },
  {
    question: '5. Which is the largest ocean on Earth?',
    a: 'Pacific Ocean',
    b: 'Indian Ocean',
    c: 'Atlantic Ocean',
    d: 'Arctic Ocean',
    correct: 'a',
  },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } 
    }
  }
  
  
  submitButton.addEventListener('click', checkAnswer);
  
  
  displayQuestion();