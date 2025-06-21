fetch('./questions.json')
    .then(response => response.json())
    .then(data => {
        const parsedData = data;

        const quizContainer = document.querySelector(".quiz-container");
        const question = document.querySelector(".quiz-container .question");
        const options = document.querySelector(".quiz-container .options");
        const nextBtn = document.querySelector(".quiz-container .next-btn")
        const quizResult = document.querySelector(".quiz-result");

        let questionNumber = 0;

        const createQuestion = () => {
        question.innerHTML = parsedData[questionNumber].question;
          // Populate options too if needed:
          const optionButtons = options.querySelectorAll('.option');
          optionButtons[0].innerText = parsedData[questionNumber].A;
          optionButtons[1].innerText = parsedData[questionNumber].B;
          optionButtons[2].innerText = parsedData[questionNumber].C;
          optionButtons[3].innerText = parsedData[questionNumber].D;
        };

        createQuestion();
    })

    .catch(error => console.error('Error loading JSON:', error));

