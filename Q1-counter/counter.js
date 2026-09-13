let counter = 0;

function updatedisplay() {
    document.querySelector('h1').innerHTML = counter;
}

function add() {
    counter++;
    updatedisplay();
}

function subtract() {
    counter--;
    updatedisplay();
}

function reset() {
    counter = 0;
    updatedisplay();
}