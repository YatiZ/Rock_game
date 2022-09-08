const cardArray = [
    {
        name: 'fries' ,
        img: '/game2/images/fries.jpeg',
    },
    {
        name: 'cake' ,
        img: '/game2/images/cake.jpeg',
    },
    {
        name: 'sushi' ,
        img: '/game2/images/sushi.jpeg',
    },
    {
        name: 'burger' ,
        img: '/game2/images/burger.jpeg',
    },
    {
        name: 'nutella' ,
        img: '/game2/images/nutella.jpeg',
    },
    {
        name: 'bubble' ,
        img: '/game2/images/bubble.jpeg',
    },
    {
        name: 'fries' ,
        img: '/game2/images/fries.jpeg',
    },
    {
        name: 'cake' ,
        img: '/game2/images/cake.jpeg',
    },
    {
        name: 'sushi' ,
        img: '/game2/images/sushi.jpeg',
    },
    {
        name: 'burger' ,
        img: '/game2/images/burger.jpeg',
    },
    {
        name: 'nutella' ,
        img: '/game2/images/nutella.jpeg',
    },
    {
        name: 'bubble' ,
        img: '/game2/images/bubble.jpeg',
    }

]

cardArray.sort(()=>0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds=[]
const cardsWon =[]

function createBoard (){
    for(let i = 0; i < cardArray.length; i++ ){
       const card= document.createElement('img')
       card.setAttribute('src','/game2/images/logo.jpeg')
       card.setAttribute('data.id',i)
       card.addEventListener('click',flipCard)
       gridDisplay.appendChild(card)
    }
}
createBoard()
function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','/game2/images/logo.jpeg')
        cards[optionTwoId].setAttribute('src','/game2/images/logo.jpeg')
        alert('You have clicked the same image!')
    }
    else if(cardsChosen[0]== cardsChosen[1]){
        alert('You Found a match!')
        cards[optionOneId].setAttribute('src','/game2/images/white.jpeg')
        cards[optionTwoId].setAttribute('src','/game2/images/white.jpeg')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','/game2/images/logo.jpeg')
        cards[optionTwoId].setAttribute('src','/game2/images/logo.jpeg')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations you Found them all! '
    }
}
function flipCard(){
  const cardId = this.getAttribute('data.id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
  }
}