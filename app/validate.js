document.body.addEventListener("click", (e) => {
  if (e.target.id == "play-again") {
    window.location.reload()
  }
})

function isValid(number) {
  const numberInt = +number
  if (Number.isNaN(numberInt)) {
    elementAttempt.innerHTML += `<div>O número inválido</div>`
    return
  }

  if (isInsideInterval(numberInt)) {
    elementAttempt.innerHTML += `<div>Número inválido! fale um número entre ${bigNumber} e ${smallNumber}</div>`
    return
  }

  if (numberInt === secretNumber) {
    document.body.innerHTML = `<h2 class='title'>Você acertou!</h2><h3 class='sub-title'>O número secreto era ${secretNumber}</h3><button id='play-again' class='btn'>Jogar novamente</button>`
    return
  }

  if (number < secretNumber) {
    elementAttempt.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrows-up-to-line"></i></div>`
    return
  }

  if (number > secretNumber) {
    elementAttempt.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrows-down-to-line"></i></div>`
    return
  }
}

function isNaN(number) {
  return Number.isNaN(number)
}

function isInsideInterval(number) {
  return number > bigNumber || number < smallNumber
}
