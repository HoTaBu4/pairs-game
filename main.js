
const main = document.querySelectorAll('.box__card')
const resetButton = document.getElementById('reset')

main.forEach(card => card.addEventListener('click',flipCard))
let hasflippedCard = false;
let lock = false;
let first,second


function flipCard(){
        if(lock) return
        if(this === first)return
        this.classList.add('flip')
    
    if (!hasflippedCard) {
        first = this 
        hasflippedCard = true;
        return
    }

        hasflippedCard = false;
        second = this
        lock = true

        checkMatch();
    
}
function checkMatch(){
    let isMatch = first.dataset.color === second.dataset.color
   
    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    first.removeEventListener('click',flipCard);
    second.removeEventListener('click',flipCard);
        if (document.getElementsByClassName('flip').length === 12) {
            resetButton.style.display = 'flex'
        }
        
    lock = false
}

function unflipCards(){
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        lock = false;
    }, 1000);
    
}

let random  = (function() { 
    let ranVariable =  () => main.forEach((elem) => {
        elem.style.order = (Math.random() * 12 ).toFixed(0)
    })
    return{
       randomM : ranVariable()
    }
})()

function reset(){
    resetButton.style.display ='none';
    [hasflippedCard,lock] = [false,false];
    [first,second] = [null,null];

    Array.from(main).forEach(elem => elem.classList.remove('flip'))
    
    random.randomM
    
}

