const descriptionButton = document.getElementById('description-button');
const descriptionModal = document.getElementById('description-modal');
const closeDescriptionButton = document.getElementById('close-description');

descriptionButton.addEventListener('click', () => {
    descriptionModal.style.display = 'block';
    descriptionModal.classList.remove('fade-out');
    descriptionModal.classList.add('fade-in');
});

closeDescriptionButton.addEventListener('click', () => {
    descriptionModal.classList.remove('fade-in');
    descriptionModal.classList.add('fade-out');
    setTimeout(() => {
        descriptionModal.style.display = 'none';
    }, 500);
});

const exitButton = document.getElementById('exit-button');
const confirmationModal = document.getElementById('confirmationModal');
const confirmExitButton = document.getElementById('confirmExit');
const cancelExitButton = document.getElementById('cancelExit');

exitButton.addEventListener('click', () => {
    confirmationModal.style.display = 'block';
    confirmationModal.classList.remove('fade-out');
    confirmationModal.classList.add('fade-in');
});

cancelExitButton.addEventListener('click', () => {
    confirmationModal.classList.remove('fade-in');
    confirmationModal.classList.add('fade-out');
    setTimeout(() => {
        confirmationModal.style.display = 'none';
    }, 500);
});

confirmExitButton.addEventListener('click', () => {
    window.open('', '_self').close();
});

const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    window.location.href = 'game.html';
});