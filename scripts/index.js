'use strict'

const targetElement = document.querySelector('.crystall__target')
const sumElement = document.querySelector('.crystall__sum')
const winsElement = document.querySelector('.crystall__wins')
const losesElement = document.querySelector('.crystall__loses')
const choiceButtons = document.querySelectorAll('.crystall__button')

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1

const placeResults = () => {
    let currentSum = 0
    let targetSum = Math.floor(Math.random() * 100) + 1
    let wins = 0
    let loses = 0

    targetElement.innerHTML = `<span class="text-5xl">${currentSum}</span> <br> Target number`
    sumElement.innerHTML = `<span class="text-5xl">${targetSum}</span> <br> Number to match`
    winsElement.innerHTML = `<span class="text-5xl">${wins}</span> <br> Wins`
    losesElement.innerHTML = `<span class="text-5xl">${loses}</span> <br> Loses`

    choiceButtons.forEach(btn => {
        const buttonValue = Math.floor(Math.random() * 10) + 1
        btn.dataset.value = buttonValue.toString()

        btn.addEventListener('click', () => {
            const buttonNumber = Number(btn.dataset.value)
            currentSum += buttonNumber
            targetElement.innerHTML = `<span class="text-5xl">${currentSum}</span> <br> Target number`
            if (currentSum === targetSum) {
                wins++
                winsElement.innerHTML = `<span class="text-5xl">${wins}</span> <br> Wins`
                currentSum = 0
                targetSum = Math.floor(Math.random() * 100) + 1
                sumElement.innerHTML = `<span class="text-5xl">${targetSum}</span> <br> Number to match`
            } else if (currentSum > targetSum) {
                loses++
                losesElement.innerHTML = `<span class="text-5xl">${loses}</span> <br> Loses`
                currentSum = 0
                targetSum = Math.floor(Math.random() * 100) + 1
                sumElement.innerHTML = `<span class="text-5xl">${targetSum}</span> <br> Number to match`
            }
        })
    })
}

placeResults()
