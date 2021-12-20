
//L’utente indica un livello di difficoltà (3 pulsanti) 
//in base al quale viene generata una griglia di gioco quadrata, 
//in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurra

//----------------------------

/*
Il computer deve generare 16 numeri casuali 
nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: 
se il numero è presente nella lista dei numeri generati 
- abbiamo calpestato una bomba 
- la cella si colora di rosso e la partita termina, 
altrimenti la cella cliccata si colora di azzurro 
e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba 
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

function generaBombe(minNumero, maxNumero) {
    const bombe = [];

    while(bombe.length < 16) {
        const randomNum = Math.round(Math.random() * (maxNumero - minNumero)) + minNumero;;
        if (!bombe.includes(randomNum)) {
            bombe.push(randomNum)
        }
    }

    return bombe;
}


function createNewBox(container, i, bombe) {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.innerText = i;
    
    if (bombe.includes(i)) {
        newBox.addEventListener('click', function() {
            this.classList.toggle('red');
            //boxingHtml.innerHTML = 'hai perso';
        })
    }else {
        newBox.addEventListener('click', function() {
            this.classList.toggle('blu');
        })
    }

    container.append(newBox);
}

const boxingHtml = document.querySelector('.boxing');

const buttonOne = document.querySelector('.button.box1');

buttonOne.addEventListener('click', function() {
    boxingHtml.classList.add('facile');
    boxingHtml.innerHTML = '';
    let bombe = generaBombe(1, 100)
    for (let i = 1; i <= 100; i++) {
        createNewBox(boxingHtml, i, bombe);
    }

})

const buttonTwo = document.querySelector('.button.box2');

buttonTwo.addEventListener('click', function() {
    boxingHtml.classList.add('medio');
    boxingHtml.innerHTML = '';
    let bombe = generaBombe(1, 81)
    for (let i = 1; i <= 81; i++) {
        createNewBox(boxingHtml, i, bombe);
    }
})

const buttonThree = document.querySelector('.button.box3');

buttonThree.addEventListener('click', function() {
    boxingHtml.classList.add('difficile');
    boxingHtml.innerHTML = '';
    let bombe = generaBombe(1, 49)
    for (let i = 1; i <= 49; i++) {
        createNewBox(boxingHtml, i, bombe);
    }
})


/*function getRandom (min, max) {
    return Math.round(Math.random() * (max - min) + min;
}

const numbers = [];

while(numbers.length < 16) {
    const randomNum = getRandom(1, 100);
    if (!numbers.includes(randomNum)) {
        numbers.push(randomNum)
    }
}

console.log(numbers)*/
