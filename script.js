// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

//Funções Callbacks
function toggleScreen(){
    screen1.classList.toggle("hidden");
    screen2.classList.toggle("hidden");
}

function handleTryClick(event){
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen();
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`;
    }

    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick(){
    toggleScreen();
    randomNumber = Math.round(Math.random() * 10);
    xAttempts = 1;
}