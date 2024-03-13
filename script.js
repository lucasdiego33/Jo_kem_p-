const result = document.querySelector(".result")
const playhumano = document.querySelector("#play-humano")
const playmaquina = document.querySelector("#play-maquina")


let playhumanNumber = 0
let playmaquinaNumber = 0

const play = (humano) => {

  jogadores(humano, maquina())

}

const maquina = () => {
  const valores = ["pedra", "papel", "tesoura"]
  const randonNumber = Math.floor(Math.random() * 3)

  return valores[randonNumber]

}

const jogadores = (play, maquina) => {
  console.log("ser: " + play + " maq: " + maquina)

  if (play === maquina) {
    result.innerHTML = "Deu Empate!"
  } else if ( (play === "papel" && maquina === "pedra") ||
              (play === "pedra" && maquina === "tesoura") ||
              ( play === "tesoura" && maquina === "papel")
     ) {
      playhumanNumber++
      playhumano.innerHTML = playhumanNumber
      result.innerHTML = "Mais uma pra Gente &#128079;"
} else {
  playmaquinaNumber++
  playmaquina.innerHTML =  playmaquinaNumber
  result.innerHTML = "você perdeu para Alexa"
}
}