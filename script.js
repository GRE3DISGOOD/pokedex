const createNewPkmnCard = (title, imageUrl, text) => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')

  const cardTitle = document.createElement('h3')
  cardTitle.classList.add('card__title')
  cardTitle.innerText = title
  newCard.appendChild(cardTitle)

  const cardImg = document.createElement('img')
  cardImg.classList.add('card__img')
  cardImg.src = imageUrl
  cardImg.alt = ''
  newCard.appendChild(cardImg)

  const cardText = document.createElement('p')
  cardText.classList.add('card__text')
  cardText.innerText = text
  newCard.appendChild(cardText)

  return newCard
}

const resetForm = () => {
  document.querySelector('#pokemon-name').value = ''
  document.querySelector('#pokemon-img-link').value = ''
  document.querySelector('#pokemon-text').value = ''
}

const handleSubmit = (event) => {
  event.preventDefault()
  const pkmnName = document.querySelector('#pokemon-name').value
  const pkmnImg = document.querySelector('#pokemon-img-link').value
  const pkmnText = document.querySelector('#pokemon-text').value
  const newPkmnCard = createNewPkmnCard(pkmnName, pkmnImg, pkmnText)
  console.log('hello')
  document.querySelector('#cards').appendChild(newPkmnCard)
  resetForm()
}