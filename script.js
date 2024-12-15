document.addEventListener("DOMContentLoaded", () => {
    const gradeDropdown = document.getElementById("grade");
    const startQuizBtn = document.getElementById("start-quiz");
    const quizContainer = document.getElementById("quiz-container");
    const quizQuestions = document.getElementById("quiz-questions");
    const submitQuizBtn = document.getElementById("submit-quiz");
    const resultDiv = document.getElementById("result");
    const resultSummary = document.getElementById("result-summary");
    const retryQuizBtn = document.getElementById("retry-quiz");

    const questions = {
        "1": [
            { question: "What is 2 + 3?", answer: 5, explanation: "2 + 3 = 5" },
            { question: "What is 7 - 4?", answer: 3, explanation: "7 - 4 = 3" },
            { question: "What is 5 + 5?", answer: 10, explanation: "5 + 5 = 10" },
            { question: "What is 6 - 1?", answer: 5, explanation: "6 - 1 = 5" },
            { question: "What is 3 + 2?", answer: 5, explanation: "3 + 2 = 5" },
            { question: "What is 8 - 5?", answer: 3, explanation: "8 - 5 = 3" },
            { question: "What is 4 + 6?", answer: 10, explanation: "4 + 6 = 10" },
            { question: "What is 10 - 3?", answer: 7, explanation: "10 - 3 = 7" },
            { question: "What is 5 + 0?", answer: 5, explanation: "5 + 0 = 5" },
            { question: "What is 2 - 1?", answer: 1, explanation: "2 - 1 = 1" },
        ],
        "2": [
            { question: "What is 10 + 5?", answer: 15, explanation: "10 + 5 = 15" },
            { question: "What is 15 - 7?", answer: 8, explanation: "15 - 7 = 8" },
            { question: "What is 6 + 9?", answer: 15, explanation: "6 + 9 = 15" },
            { question: "What is 12 - 3?", answer: 9, explanation: "12 - 3 = 9" },
            { question: "If you have 3 apples and buy 2 more, how many apples do you have?", answer: 5, explanation: "3 + 2 = 5" },
            { question: "What is 4 + 6?", answer: 10, explanation: "4 + 6 = 10" },
            { question: "What is 20 - 10?", answer: 10, explanation: "20 - 10 = 10" },
            { question: "What is 8 + 2?", answer: 10, explanation: "8 + 2 = 10" },
            { question: "What is 3 + 5?", answer: 8, explanation: "3 + 5 = 8" },
            { question: "What is 9 - 3?", answer: 6, explanation: "9 - 3 = 6" },
        ],
        "3": [
            { question: "What is 12 + 7?", answer: 19, explanation: "12 + 7 = 19" },
            { question: "What is 14 - 6?", answer: 8, explanation: "14 - 6 = 8" },
            { question: "What is 5 × 3?", answer: 15, explanation: "5 × 3 = 15" },
            { question: "What is 45 ÷ 9?", answer: 5, explanation: "45 ÷ 9 = 5" },
            { question: "If you have 4 packs of gum with 5 pieces each, how many pieces do you have?", answer: 20, explanation: "4 × 5 = 20" },
            { question: "What is 60 - 20?", answer: 40, explanation: "60 - 20 = 40" },
            { question: "What is 18 + 14?", answer: 32, explanation: "18 + 14 = 32" },
            { question: "What is 36 ÷ 4?", answer: 9, explanation: "36 ÷ 4 = 9" },
            { question: "What is 8 × 7?", answer: 56, explanation: "8 × 7 = 56" },
            { question: "What is 100 - 50?", answer: 50, explanation: "100 - 50 = 50" },
        ],
        "4": [
            { question: "What is 25 + 36?", answer: 61, explanation: "25 + 36 = 61" },
            { question: "What is 48 - 23?", answer: 25, explanation: "48 - 23 = 25" },
            { question: "What is 7 × 8?", answer: 56, explanation: "7 × 8 = 56" },
            { question: "What is 81 ÷ 9?", answer: 9, explanation: "81 ÷ 9 = 9" },
            { question: "If you buy 3 shirts for $15 each, how much do you spend?", answer: 45, explanation: "3 × 15 = 45" },
            { question: "What is 99 + 57?", answer: 156, explanation: "99 + 57 = 156" },
            { question: "What is 36 - 18?", answer: 18, explanation: "36 - 18 = 18" },
            { question: "What is 5 × 12?", answer: 60, explanation: "5 × 12 = 60" },
            { question: "What is 144 ÷ 12?", answer: 12, explanation: "144 ÷ 12 = 12" },
            { question: "What is 72 - 49?", answer: 23, explanation: "72 - 49 = 23" },
        ],
        "5": [
            { question: "What is 55 + 47?", answer: 102, explanation: "55 + 47 = 102" },
            { question: "What is 84 - 29?", answer: 55, explanation: "84 - 29 = 55" },
            { question: "What is 12 × 11?", answer: 132, explanation: "12 × 11 = 132" },
            { question: "What is 100 ÷ 4?", answer: 25, explanation: "100 ÷ 4 = 25" },
            { question: "If you have 5 boxes with 6 toys each, how many toys do you have?", answer: 30, explanation: "5 × 6 = 30" },
            { question: "What is 150 + 75?", answer: 225, explanation: "150 + 75 = 225" },
            { question: "What is 56 - 21?", answer: 35, explanation: "56 - 21 = 35" },
            { question: "What is 8 × 9?", answer: 72, explanation: "8 × 9 = 72" },
            { question: "What is 200 ÷ 10?", answer: 20, explanation: "200 ÷ 10 = 20" },
            { question: "What is 90 - 27?", answer: 63, explanation: "90 - 27 = 63" },
        ],
        "6": [
            { question: "What is 63 + 78?", answer: 141, explanation: "63 + 78 = 141" },
            { question: "What is 150 - 85?", answer: 65, explanation: "150 - 85 = 65" },
            { question: "What is 18 × 9?", answer: 162, explanation: "18 × 9 = 162" },
            { question: "What is 144 ÷ 12?", answer: 12, explanation: "144 ÷ 12 = 12" },
            { question: "If a car travels 60 miles per hour for 2 hours, how far does it travel?", answer: 120, explanation: "60 × 2 = 120" },
            { question: "What is 200 + 125?", answer: 325, explanation: "200 + 125 = 325" },
            { question: "What is 72 - 49?", answer: 23, explanation: "72 - 49 = 23" },
            { question: "What is 5 × 15?", answer: 75, explanation: "5 × 15 = 75" },
            { question: "What is 300 ÷ 15?", answer: 20, explanation: "300 ÷ 15 = 20" },
            { question: "What is 150 - 77?", answer: 73, explanation: "150 - 77 = 73" },
        ]
    };

    startQuizBtn.addEventListener("click", () => {
        const selectedGrade = gradeDropdown.value;
        loadQuiz(selectedGrade);
    });

    function loadQuiz(grade) {
        quizQuestions.innerHTML = ""; // Clear previous questions
        const selectedQuestions = questions[grade];
        
        selectedQuestions.forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <input type="number" id="answer-${index}" placeholder="Your answer">
                <button id="explain-${index}">Explanation</button>
                <p id="explanation-${index}" class="hidden">${q.explanation}</p>
            `;
            quizQuestions.appendChild(questionDiv);

            const explainButton = document.getElementById(`explain-${index}`);
            explainButton.addEventListener("click", () => {
                const explanation = document.getElementById(`explanation-${index}`);
                explanation.classList.toggle("hidden");
            });
        });

        quizContainer.classList.remove("hidden");
        resultDiv.classList.add("hidden");
    }

    submitQuizBtn.addEventListener("click", () => {
        let score = 0;
        const selectedGrade = gradeDropdown.value;
        const selectedQuestions = questions[selectedGrade];

        selectedQuestions.forEach((q, index) => {
            const userAnswer = parseInt(document.getElementById(`answer-${index}`).value);
            if (userAnswer === q.answer) {
                score++;
            }
        });

        const totalQuestions = selectedQuestions.length;
        resultSummary.innerHTML = `You scored ${score} out of ${totalQuestions}.`;
        quizContainer.classList.add("hidden");
        resultDiv.classList.remove("hidden");
    });

    retryQuizBtn.addEventListener("click", () => {
        quizContainer.classList.add("hidden");
        resultDiv.classList.add("hidden");
    });
});