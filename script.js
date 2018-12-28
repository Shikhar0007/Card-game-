const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard=false;
let firstCard,secondCard;
let lockBoard=false;



function flipCard(){
    if(lockBoard)return;
    if(this==flipCard)return;
this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard=true;
        firstCard=this;
    }else{
        hasFlippedCard=false;
        secondCard=this;
        checkForMatch();
    }
}
    
    function checkForMatch(){
        if (firstCard.dataset.image===secondCard.dataset.image){
            disableCards();
    }else{
        unflipCards();
    }
}


   function disableCards(){
       firstCard.removeEventListener('click',flipCard);
       secondCard.removeEventListener('click',flipCard);
       resetBoard();
   } 


function unflipCards(){
    lockBoard=true;
   setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
       resetBoard();
        },1000);
    lockBoard=false;

}

function resetBoard(){
[hasFlippedCard,lockBoard]=[false,false];
[firstCard,secondCard]=[null,null];    
}

  (function shuffle(){
      cards.forEach(card=>{
      let randomPos=Math.floor(Math.random*12);
      card.style.order=randomPos;
                    });
})();


cards.forEach(card=>card.addEventListener('click',flipCard));