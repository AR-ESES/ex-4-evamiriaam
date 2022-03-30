let espLarg = 10;
let espAltura = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(216,191,216);
  stroke(255);
  strokeWeight(6);
  noFill();

}

function draw() {

  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
      translate(-300, -150);
      scale(0.2);
  //Cabelo
fill(198, 140, 83);
stroke(198, 140, 83);
quad(800,140,770,600,1130,600,1100,140);

//Rosto
fill(252, 238, 169);
stroke(252, 238, 169);
ellipse(950, 200, 255, 300);

//Cabelo2
fill(198, 140, 83);
stroke(198, 140, 83);
arc(950,150,300,300,-PI,0,OPEN);

noStroke();

//Bochecha Esquerda
fill(255,130,171);
circle(860, 260, 40, 40);

//Bochecha Direita
fill(255,130,171);
circle(1040, 260, 40, 40);

//Olho Esquerdo
ellipseMode(RADIUS);
fill(144,115,85);
ellipse(904, 193, 25, 25);
ellipseMode(RADIUS);
fill(255);
ellipse(900, 190, 25, 25);
ellipseMode(CENTER);
fill(78,181,74);
stroke(78,181,74);
ellipse(900, 190, 32, 32);
noStroke();
ellipseMode(CENTER);
fill(110,70,31);
stroke(110,70,31);
ellipse(900, 190, 20, 20);
noStroke();
ellipseMode(CENTER);
fill(255);
stroke(255);
ellipse(888, 185, 8, 8);
noStroke();

//Olho Direito
ellipseMode(RADIUS);
fill(144,115,85);
ellipse(1004, 193, 25, 25);
ellipseMode(RADIUS);
fill(255);
ellipse(1000, 190, 25, 25);
ellipseMode(CENTER);
fill(78,181,74);
ellipse(1000, 190, 32, 32);
noStroke();
ellipseMode(CENTER);
fill(110,70,31);
stroke(110,70,31);
ellipse(1000, 190, 20, 20);
noStroke();
ellipseMode(CENTER);
fill(255);
stroke(255);
ellipse(988, 185, 8, 8);
noStroke();

//Pescoço
fill(252, 238, 169);
stroke(252, 238, 169);
rect(910, 320, 80, 70, 10, 20);

//Braço Esquerdo Vestido
fill(178, 102, 255);
stroke(178, 102, 255);
rect(670, 370, 215, 65, 20, 20);

//Braço Direito
fill(252, 238, 169); 
stroke(252, 238, 169);
rect(1200, 370, 70, 65, 20, 20);

//Braço Direito Vestido
fill(178, 102, 255);
stroke(178, 102, 255);
rect(1000, 370, 215, 65, 20, 0);
noStroke();

//Perna Esquerda
fill(54);
stroke(54);
rect(850, 600, 80, 270, 20, 20);

//Perna Direita
fill(54);
stroke(54);
rect(970, 600, 80, 270, 20, 20);

//Pé Esquerdo
fill(255); 
stroke(255);
rect(839, 820, 100, 55, 20, 20);

//Pé Direito
fill(255); 
stroke(255);
rect(962, 820, 100, 55, 20, 20);

//Corpo
fill(178, 102, 255);
stroke(178, 102, 255);
rect(850, 370, 200, 250, 0, 0);

//Braço Esquerdo
fill(252, 238, 169); 
stroke(252, 238, 169);
rect(670, 250, 65, 190, 20, 20);
noStroke();

//Cinto
fill(118, 87, 56);
stroke(118, 87, 56);
strokeWeight(2);
rect(847, 620, 205, 10, 20, 20);
noStroke();

//Sobrancelhas
noFill();
stroke(198, 140, 83);
bezier(870,170,860,180,890,140,935,170); //Sobrancelha esquerda
bezier(970,170,960,180,990,140,1035,170); //Sobrancelha direita

//Bolinha Cinto
fill(210);
stroke(210);
circle(950, 625, 15);
noStroke();

//Boca
fill(255);
stroke(255,130,171);
strokeWeight(5);
arc(950,270,80,80,0,PI,CHORD);

pop();
   }
  }
}