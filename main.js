fetch('./questions.json')
  .then(response => response.json())
  .then(data => {
    const questions = data;

    const questionElement = document.getElementById("question");
    const choiceTexts = document.querySelectorAll(".choice-text");

    function showRandomQuestion() {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const q = questions[randomIndex];

      questionElement.innerText = q.question;
      choiceTexts[0].innerText = q.A;
      choiceTexts[1].innerText = q.B;
      choiceTexts[2].innerText = q.C;
      choiceTexts[3].innerText = q.D;
    }

    showRandomQuestion(); // Call when page loads
  })
  .catch(error => console.error("Error loading questions:", error));
