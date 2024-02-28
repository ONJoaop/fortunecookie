 const fortunes = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.", "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.", "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.", "Quem quer colher rosas tem de estar preparado para suportar os espinhos.", "A adversidade é um espelho que reflete o verdadeiro eu.", "A maior de todas as torres começa no solo.", "Aquele que se importa com o sentimento dos outros, não é um tolo.", "Amizade e Amor são coisas que se unem num piscar de olhos.", "Quem olha para fora sonha; quem olha para dentro acorda."
]
const buttonOpenCookie = document.querySelector("#buttonOpenCookie")
const buttonOpenAgain = document.querySelector("#buttonOpenAgain")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let fortune = document.querySelector('.container-fortune > p')
let randomNumber = Math.round(Math.random() *10)

fortune.innerText = (fortunes[randomNumber])
buttonOpenCookie.addEventListener("click", handleToggleScreen)
buttonOpenAgain.addEventListener("click", handleToggleScreen)




function handleToggleScreen(event) {
    randomNumber = Math.round(Math.random() *9)
    handleRandomFortune()
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    handleAppear()
}

function handleAppear() {
    fortune.classList.toggle('appear')
}

function handleRandomFortune() {
    if (screen1.classList.contains('hide')) {
        fortune.innerText = (fortunes[randomNumber])
    };
}