tela = document.getElementById("tela")
ctx = tela.getContext("2d")

let game = {
  players: {
    "player": {x: 5, y:5}
  },
  pontos: {
    "ponto1": {x: 2,y: 6}
  }
}
//logica movimento
function cima(){
  const player = game.players["player"]
  if(player.y > 0){
    player.y--
    atualizar()
  }
}
function baixo(){
  const player = game.players["player"]
  if(player.y < 9){
    player.y++
    atualizar()
  }
}
function direita(){
 const player = game.players["player"]
  if(player.x < 9){
    player.x++
    atualizar()
  }
}
function esquerda(){
 const player = game.players["player"]
  if(player.x > 0){
    player.x--
    //verificar()
    atualizar()
  }
}
//FIM LOGICA DE MOVIMENTO
//logica game
function desenhar(){
  for(pontoId in game.pontos){
    const ponto = game.pontos[pontoId]
    ctx.fillStyle = "yellow"
    ctx.fillRect(ponto.x, ponto.y, 1, 1)
  }
  for(playerId in game.players){
    const player = game.players[playerId]
    ctx.fillStyle = "#CCC"
    ctx.fillRect(player.x, player.y, 1, 1)
  }
}
atualizar()
function atualizar(){
  limpar()
  desenhar()
}
function limpar(){
  ctx.clearRect(0, 0, 10, 10)
}
/*function verificar(){
  for(playerId in game.players){
    const player = game.players[playerId]
    for(pontoId in game.pontos){
      const ponto = game.pontos[pontoId]
      if(player.x == ponto.x and player.y == ponto.y){
        delete game.ponto[pontoId]
      }
    }
  }
}*/
//FIM LOGICA GAME