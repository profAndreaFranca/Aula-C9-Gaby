//variáveis
var box;

//funçao setup faz a configuração
function setup() {
  //cria a tela
  createCanvas(500, 500);

  //criando sprite caixa
  box = createSprite(250,250,40,40);
  box.shapeColor = "red";
}


function draw() {
  //plano de fundo
  background("#1fcc92");

  //condição para mover a caixa
  if (keyDown("up")) {
    box.y = box.y -3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.y = box.y +3;
  }

  //condição para mudar a cor do fundo
  if (keyDown("space")) {
    background("yellow");
  }



  //desenhar sprites na tela
  drawSprites();
}

