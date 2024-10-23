const dialogueText = document.getElementById('dialogue-text');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const feedback = document.getElementById('feedback');
const feedbackContainer = document.createElement('div');

const questions = [
    {
        question: "Qual é a solução de x² + 1 = 0 no conjunto dos números complexos?",
        options: ["x = 1", "x = i", "x = -i"],
        answer: 1
    },
    {
        question: "Qual é a fórmula do número imaginário 'i' ao quadrado?",
        options: ["i² = 1", "i² = -1", "i² = 0"],
        answer: 1
    },
    {
        question: "Qual o volume de um cubo de aresta 4 cm?",
        options: ["16 cm³", "64 cm³", "32 cm³"],
        answer: 1
    },
    {
        question: "Qual é a soma dos expoentes do polinômio P(x) = x³ - 6x² + 11x - 6?",
        options: ["6", "0", "3"],
        answer: 0
    },
    {
        question: "Um cilindro reto tem altura de 12 cm e raio da base de 5 cm. Qual é o volume desse cilindro?",
        options: ["150πcm3", "300πcm3", "600πcm3"],
        answer: 1
    },
    {
        question: "O que representa a parte imaginária de um número complexo z = a + bi?",
        options: ["a", "b", "i"],
        answer: 1
    },
    {
        question: "Qual é o volume de uma esfera de raio 3 cm? (Use π ≈ 3.14)",
        options: ["113.04 cm³", "36π cm³", "150 cm³"],
        answer: 0
    },
    {
        question: "Quantas faces tem um dodecaedro?",
        options: ["12", "20", "6"],
        answer: 0
    },
    {
        question: "Qual é o determinante da matriz identidade 3x3?",
        options: ["0", "1", "3"],
        answer: 1
    },
    {
        question: "Qual o valor de i^4?",
        options: ["1", "0", "-1"],
        answer: 0
    },
    {
        question: "Qual é a equação do plano que passa pelos pontos A(1,0,0), B(0,1,0) e C(0,0,1)?",
        options: ["x + y + z = 1", "x - y + z = 0", "x + y + z = 0"],
        answer: 0
    },
    {
        question: "Se z = 2 + 3i, qual é o conjugado de z?",
        options: ["2 - 3i", "-2 + 3i", "2 + 3i"],
        answer: 0
    },
    {
        question: "Qual é o grau do polinômio P(x) = x³ - 4x² + 7x - 2?",
        options: ["1", "2", "3"],
        answer: 2
    },
    {
        question: "Qual o volume de um cilindro de raio 2 cm e altura 5 cm?",
        options: ["40π cm³", "20 cm³", "20π cm³"],
        answer: 2
    },
    {
        question: "Qual a solução da equação x² + 4 = 0 no conjunto dos números complexos?",
        options: ["x = 2i", "x = i", "x = -2i"],
        answer: 0
    }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

window.onload = function() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    typeWriter("Responda com calma, boa atividade!", () => {
        setTimeout(() => {
            dialogueText.classList.add('fade-out');
        }, 1000);
        setTimeout(showQuestion, 100);
    });
};

function typeWriter(text, callback) {
    dialogueText.innerHTML = '';
    let index = 0;
    function typing() {
        if (index < text.length) {
            dialogueText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, 50);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

function showQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex]; 
    questionText.innerText = currentQuestion.question;
    option1.innerText = currentQuestion.options[0];
    option2.innerText = currentQuestion.options[1];
    option3.innerText = currentQuestion.options[2];

    questionContainer.classList.remove('hidden');
    option1.classList.remove('hidden');
    option2.classList.remove('hidden');
    option3.classList.remove('hidden');

    option1.onclick = () => checkAnswer(0);
    option2.onclick = () => checkAnswer(1);
    option3.onclick = () => checkAnswer(2);
}

function checkAnswer(selectedOption) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    feedback.classList.remove('hidden');

    if (selectedOption === currentQuestion.answer) {
        feedback.innerText = "Correto!";
        feedback.className = "feedback-box correct";
        score += 20;
    } else {
        feedback.innerText = "Incorreto!";
        feedback.className = "feedback-box incorrect";
    }

    feedback.style.display = 'block';
    
    setTimeout(() => {
        feedback.style.display = 'none';
        feedback.classList.add('hidden');
        currentQuestionIndex++;
        
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            displayFinalScore();
        }
    }, 2000);
}

function displayFinalScore() {
    feedback.innerText = `Fim das perguntas! Sua pontuação final é: ${score} pontos`;
    feedback.className = "feedback-box correct";
    feedback.style.display = 'block';
}

const returnMenuButton = document.querySelector('.return-menu');
returnMenuButton.onclick = function() {
    window.location.href = 'menu.html';
};
