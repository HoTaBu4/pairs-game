const main = document.querySelectorAll('.box__card')
main.forEach(card => card.addEventListener('click',flipCard))
let hasflippedCard = false;
let lock = false;
let first,second
console.log(main);

function flipCard(){
    if(lock) return
    this.classList.add('flip')
    
    if (!hasflippedCard) {
        hasflippedCard = true;
        first = this;
        return
    } else {
        hasflippedCard = false;
        second = this ;
        checkMatch();
        lock = true
    }
    return null
    
}
function checkMatch(){
    let isMatch = first.dataset.color === second.dataset.color

    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    first.removeEventLister('click',flipCard);
    second.removeEventLister('click',flipCard);
    lock = false
}

function unflipCards(){
    // lock = true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        lock = false;
    }, 1500);
    
}

function resetBoard(){
    [hasflippedCard,lock] = [false,false];
    [first,second] = [null,null]
}

