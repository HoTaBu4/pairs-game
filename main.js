
const main = document.querySelectorAll('.box__card')

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
   
    lock = false
}

function unflipCards(){
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        lock = false;
    }, 1000);
    
}

(function reset(){
    main.forEach((elem) => {
        elem.style.order = (Math.random() * 12 ).toFixed(0)
    })
    [hasflippedCard,lock] = [false,false];
    [first,second] = [null,null]
})()

