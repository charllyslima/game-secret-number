const smallNumber = 1
const bigNumber = 1000

const generateNumberRandom = () => {
  return parseInt(Math.random() * bigNumber + 1)
}

const number = generateNumberRandom()

const elementSmallerNumber = document.querySelector("#smaller-number")
elementSmallerNumber.innerHTML = smallNumber
const elementHigherNumber = document.querySelector("#higher-number")
elementHigherNumber.innerHTML = bigNumber
