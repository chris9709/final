function nextday(){ // go to next day
  background(bg);
  dateday += 1;
  dateweek += 1;
  if(dateweek === 8){
    dateweek = 1;
  }
    reset();
  runonce = true;
}

function reset(){
  study = false;
  relax = false;
  socialA = false;
  suboption = false;

  events = true;
  noevents = false;
  eventshappen = true;
  sick = false;
  overwhelmed = false;
  depressed = false;
  lonely = false;
  overrelaxed = false;
  Revents = false;
}

function beginning(){
   background(bg);
   image(welcome,250, 150);
   strokeWeight(3);
     stroke(0);
     noFill();
     rect(410, 520, 200, 50);
     fill(0);
     noStroke();
     text("OK", 510, 565);
     textAlign(CENTER);
     textFont(autumn, 50);
     fill(0);
     noStroke();
}

function gameend(){
  strokeWeight(5);
  stroke(0);
  fill(255);
  rect(200, 150, 600, 350);
  textAlign(CENTER);
  textFont(autumn, 90);
  noStroke();
  fill(0);
  text("Semester Ends!", 500, 230);
  textSize(60);
  finalscore = round(computerscience.condition + physics.condition + math.condition + english.condition + mood * 0.6 + health * 0.7 - stress * 0.8 + social * 0.5 + random(-40, 40));
  text("Your score :  " + finalscore, 500, 300);
  
  if(computerscience.condition + physics.condition + math.condition + english.condition > 350){
    academic = "A";
  }
  else if(computerscience.condition + physics.condition + math.condition + english.condition > 300){
    academic = "B";
  }
  else if(computerscience.condition + physics.condition + math.condition + english.condition > 250){
    academic = "C";
  }
  else{
    academic = "D";
  }
  text("Academic :  " +　academic, 500, 370);
  
  if(mood + health - stress + social/2 > 150){
    personal = "A";
  }
  else if(mood + health - stress + social/2 > 130){
    personal = "B";
  }
  else if(mood + health - stress + social/2 > 100){
    personal = "C";
  }
  else{
    personal = "D";
  }
  text("Personal :  " + personal, 500, 440);
}
