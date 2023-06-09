const filterEL = document.querySelector('input')
const cardsEL = document.querySelectorAll('.cards .card')

filterEL.addEventListener('input', filterCard)

function filterCard() {

  if(filterEL.value != '') {
    for (let card of cardsEL){
      let title = card.querySelector('h2')
      title = title.textContent.toLocaleLowerCase()

      let filterText = filterEL.value.toLocaleLowerCase()
      if(!title.includes(filterText)) {
        card.style.display = "none"
      } else {
        card.style.display = "block"
      }
      
    }
  } else {
    for ( let card of cardsEL) {
      card.style.display = "block"
    }
  }
}