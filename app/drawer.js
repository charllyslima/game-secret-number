const smallNumber = 1
const bigNumber = 100

const generateNumberRandom = () => {
  return parseInt(Math.random() * bigNumber + 1)
}

const secretNumber = generateNumberRandom()
console.log(secretNumber)

const elementSmallerNumber = document.querySelector("#smaller-number")
elementSmallerNumber.innerHTML = smallNumber
const elementHigherNumber = document.querySelector("#higher-number")
elementHigherNumber.innerHTML = bigNumber
