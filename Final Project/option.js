function mainoption(){
  noFill();
  stroke(0);
  quad(500, 20, 400, 120, 500, 220, 600, 120);
  quad(500, 280, 400, 380, 500, 480, 600, 380);
  quad(370, 150, 270, 250, 370, 350, 470, 250);
  quad(630, 150, 530, 250, 630, 350, 730, 250);
  textFont(autumn, 50);
  textAlign(CENTER);
  fill(0);
  noStroke();
  text("STUDY", 500, 140);
  text("REST", 500, 400);
  text("RELAX", 370, 270);
  text("SOCIAL", 630, 270);
}
