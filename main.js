const namePlayer = document.getElementById('name__player')
const addPlayerBtn = document.getElementById('add__player')

const addPlayer = (e) => {
  e.preventDefault()

  if (namePlayer.value.length > 2) {
    const playerContainer = document.getElementById('player__container')
    const playerElement = document.createElement('div')
    playerElement.classList.add('player')
    playerElement.innerHTML = `
    <fieldset>
      <legend>${namePlayer.value}</legend>
      <h3 class="money_qty">0</h3>
      <input class="input_qty" type="number" placeholder="money" autocomplete="off" />
      <button class="increment">+</button>
      <button class="decrement">-</button>
    </fieldset>
  `

    playerContainer.appendChild(playerElement)

    namePlayer.value = ''

    const incrementBtn = playerElement.querySelector('.increment')
    const decrementBtn = playerElement.querySelector('.decrement')
    const money_qty = playerElement.querySelector('.money_qty')
    const input_qty = playerElement.querySelector('.input_qty')

    const incrementMoney = (e) => {
      e.preventDefault()

      let currentPlayerMoney = +money_qty.textContent
      currentPlayerMoney += +input_qty.value

      return (money_qty.textContent = currentPlayerMoney)
    }

    const decrementMoney = (e) => {
      e.preventDefault()

      let currentPlayerMoney = +money_qty.textContent
      currentPlayerMoney -= +input_qty.value

      return (money_qty.textContent = currentPlayerMoney)
    }

    incrementBtn.addEventListener('click', incrementMoney)
    decrementBtn.addEventListener('click', decrementMoney)
  } else {
    console.log('Error')
  }
}

addPlayerBtn.addEventListener('click', addPlayer)
