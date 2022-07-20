// Código do ator
let xAtor = 233;
let yAtor = 366;
let colisao = false;
let pontos = 'Points: ';
let meusPontos = 0;
let vidas = 'Life: ';
let minhasVidas = 3;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 33, 30);
}

function movimentaAtor() {
  // mover ator para cima
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  // mover ator para baixo
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
  // mover ator para a esquerda
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3;
  }
  // mover ator para a direita
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3;
  }
}

function podeSeMover() {
  return yAtor < 366;
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      minhasVidas--;
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos--;
      }
    }
  }
}

function incluiPontosEVidas() {
  fill(color('black'));
  textAlign(CENTER);
  textSize(25);
  text(pontos, width / 7.7, 27);
  text(vidas, width / 1.19, 27);
}

function incluiPontos() {
  fill(color('black'));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 4, 27);
}

function mostrarVidas() {
  fill(color('black'));
  textAlign(CENTER);
  textSize(25);
  text(minhasVidas, width / 1.06, 27);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos++;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
}

function gameOver() {
  if (minhasVidas == 0) {
    noLoop();
    textAlign(CENTER);
    textSize(50);
    text('GAME OVER', width / 2, height / 2);
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}
