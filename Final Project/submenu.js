function studymenu(){
  reset();
  study = true;
  textFont(autumn, 50);
  textAlign(CENTER); 
 image(menubg, 763, 95);
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(800, 100, 140, 140);
  rect(960, 100, 140, 140);
  rect(800, 260, 140, 140);
  rect(960, 260, 140, 140);
  fill(0);
  noStroke();
  text("CS", 870, 190);
  text("PH", 1030, 190);
  text("MA", 870, 350);
  text("EN", 1030, 350);

}

function relaxmenu(){
  reset();
  relax = true;
  textFont(autumn, 40);
  textAlign(CENTER);
  noStroke();
  image(menubg, 763, 95);
  stroke(0);
  strokeWeight(3);
  noFill();
  rect(800, 100, 140, 140);
  rect(960, 100, 140, 140);
  rect(800, 260, 140, 140);
  rect(960, 260, 140, 140);
  fill(0);
  noStroke();
  text("Books", 870, 190);
  text("Games", 1030, 190);
  text("Sports", 870, 350);
  text("Snacks", 1030, 350);
  
}

function socialmenu(){
  reset();
  socialA = true;
  textFont(autumn, 40);
  textAlign(CENTER);
  noStroke();
  image(menubg, 763, 95);
  stroke(0);
  strokeWeight(3);
  noFill();
  rect(800, 100, 140, 140);
  rect(960, 100, 140, 140);
  rect(800, 260, 140, 140);
  rect(960, 260, 140, 140);
  fill(0);
  noStroke();
  text("Chat", 870, 190);
  text("Party", 1030, 190);
  text("Date", 870, 350);
  text("Team", 1030, 330);
  text("Study", 1030, 370)
  
}

function reset(){
  study = false;
  relax = false;
  socialA = false;
  suboption = false;
  events = true;
  eventshappen = true;
  sick = false;
  overwhelmed = false;
  depressed = false;
}
