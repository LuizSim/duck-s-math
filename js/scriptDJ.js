const dialogueText = document.getElementById('dialogue-text');
const nameInput = document.getElementById('name-input');
const dialogueBox = document.getElementById('dialogue-box');

const initialText = "Olá!! me chamo Duck e bem vindo ao Duck's Math, qual o seu nome?";
let index = 0;
let speed = 50;

const dialogues = [
    "Acho ___ um nome muito bonito! Bom, como já deve imaginar, eu sou um pato matemático...",
    "E hoje vou testar seus conhecimentos. Você está preparado?"
];

let currentStep = 0;

function typeWriter(text, callback) {
    index = 0;
    dialogueText.innerHTML = '';
    dialogueBox.style.display = 'block';
    function typing() {
        if (index < text.length) {
            dialogueText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

window.onload = function() {
    typeWriter(initialText, () => {
        nameInput.style.display = 'block';
    });
};

function updateDialogue(text, callback) {
    typeWriter(text, () => {
        const continueMessage = document.createElement('div');
        continueMessage.className = 'continue-message';
        continueMessage.innerText = 'Pressione Enter para continuar...';
        dialogueText.appendChild(continueMessage);
        if (callback) callback(); 
    });
}

nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const name = nameInput.value;
        if (name) {
            nameInput.style.display = 'none';
            updateDialogue(dialogues[0].replace('___', name), () => {
                currentStep = 1;
            });
        }
    }
});

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && currentStep === 1) {
        updateDialogue(dialogues[1], () => {
            currentStep = 2;
        });
    } else if (event.key === 'Enter' && currentStep === 2) {
        window.location.href = 'perguntas.html'; 
    }
});
