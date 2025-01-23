const quizData = [
    {
      question: "How did the reign of Louis XIV influence French cuisine?",
      options: [
        "a) Spread of farm-to-table practices",
        "b) Development of haute cuisine",
        "c) Invention of pizza",
        "d) Introduction of tomatoes to dishes"
      ],
      correct: "b) Development of haute cuisine"
    },
    {
      question: "Which ingredients are key to Italian cuisine?",
      options: [
        "a) Cream, cheese, wine",
        "b) Olive oil, tomatoes, basil",
        "c) Rice, soy, kimchi",
        "d) Mushrooms, butter, thyme"
      ],
      correct: "b) Olive oil, tomatoes, basil"
    },
    {
      question: "What method is most characteristic of South Korean cuisine?",
      options: [
        "a) Fermentation",
        "b) Deep frying",
        "c) Creating layered pastries",
        "d) Cooking over charcoal"
      ],
      correct: "a) Fermentation"
    },
    {
      question: "What role does supra play in Georgian cuisine?",
      options: [
        "a) Serves as a foundation for haute cuisine",
        "b) Reflects family values",
        "c) Symbolizes hospitality and togetherness",
        "d) Is used for serving desserts"
      ],
      correct: "c) Symbolizes hospitality and togetherness"
    },
    {
      question: "What foods are typically prepared in a tone oven in Georgian cuisine?      ",
      options: [
        "a) Garlic, coriander, blue fenugreek",
        "b) Thyme, bay leaf",
        "c) Basil, garlic, parmesan",
        "d) Chili, sesame oil"
      ],
      correct: "a) Garlic, coriander, blue fenugreek"
    },
    {
        question: "Which cuisine is recognized by UNESCO as part of the world’s intangible cultural heritage?",
        options: [
          "a) French",
          "b) Italian",
          "c) South Korean",
          "d) Georgian"
        ],
        correct: "a) French"
      },

      {
        question: "Which cultures influenced Georgian cuisine?",
        options: [
          "a) French and Italian",
          "b) Persian, Ottoman, Russian",
          "c) Chinese and Japanese",
          "d) Greek and Roman"
        ],
        correct: "b) Persian, Ottoman, Russian"
      },
      {
        question: "What is the base for kimchi in South Korean cuisine?",
        options: [
          "a) Rice and soy",
          "b) Cabbage and fermented products",
          "c) Parmesan and tomatoes",
          "d) Walnuts"
        ],
        correct: "b) Cabbage and fermented products"
      },
      {
        question: "Which technique is most characteristic of French cuisine?",
        options: [
          "a) Simplicity and minimalism",
          "b) Complexity and sophistication",
          "c) Baking in clay",
          "d) Grilling"
        ],
        correct: "b) Complexity and sophistication"
      },
      {
        question: "Which herbs and spices are used in Georgian cuisine?",
        options: [
          "a) Garlic, coriander, blue fenugreek",
          "b) Thyme, bay leaf",
          "c) Basil, garlic, parmesan",
          "d) Chili, sesame oil"
        ],
        correct: "a) Garlic, coriander, blue fenugreek"
      }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  const resultsContainer = document.getElementById("results");
  
  // Render quiz questions
  function loadQuiz() {
    // @ts-ignore
    quizContainer.innerHTML = quizData
      .map((q, index) => `
        <div class="question">
          <h3>${index + 1}. ${q.question}</h3>
          <div class="answers">
            ${q.options
              .map(
                (option) => `
                  <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                  </label>`
              )
              .join("")}
          </div>
        </div>
      `)
      .join("");
  }
  
  // Show results in modal
  function showResults() {
    // @ts-ignore
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let score = 0;
  
    quizData.forEach((question, index) => {
      const selectedOption = answerContainers[index].querySelector(
        `input[name="question${index}"]:checked`
      );
      // @ts-ignore
      if (selectedOption && selectedOption.value === question.correct) {
        score++;
      }
    });
  
    // @ts-ignore
    resultsContainer.innerHTML = `<p>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>`;
  
    // Show the result modal
    // @ts-ignore
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
  }
  
  // Initialize quiz
  loadQuiz();
  // @ts-ignore
  submitButton.addEventListener("click", showResults);
  