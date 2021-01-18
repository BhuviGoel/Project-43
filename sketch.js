
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90);
  
 var hr =  hour();
 var mn= minute();
 var sc= second();

strokeWeight(8);
 stroke(244, 4, 0);
 noFill();
 var scangle = map(sc,0,60,0,360);
 arc(0,0,300,300,0,scangle);

 stroke(15, 245, 4);
 var mnangle = map(mn,0,60,0,360);
 arc(0,0,280,280,0,mnangle);

 stroke(13, 0, 227);
 var hrangle = map(hr%12,0,12,0,360);
 arc(0,0,260,260,0,hrangle);

 push();
 rotate(acangle);
 stroke(244, 4, 0);
 line(0,0,100,0);
 pop();

 push();
 rotate(mnangle);
 stroke(15, 245, 4);
 line(0,0,75,0);
 pop();

 push();
 rotate(hrangle);
 stroke(13, 0, 227);
 line(0,0,50,0);
 pop();

 drawSprites();
}