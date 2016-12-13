function checkevents(){
  if(events){
    if(health < 60){
      randomA = random(1);
      if(randomA + mood/100 + health/100 < 1.5){
        sick = true;
        events = false;
      }
    }
    if(events){
      if(stress > 50){
        randomA =random(1);
        if(randomA - stress/100 + mood/100< 0.6){
          overwhelmed = true;
          events = false;
        }
      }
      if(events){
        if(mood < 50){
          randomA = random(1);
          if(randomA + mood/100 <0.8){
            depressed = true;
            events = false;
          }
        }
      }
      
    }
  }
  
  if(sick){
    if(eventshappen){
    getsick();
    eventshappen = false;
    }
  }
  else if(overwhelmed){
    if(eventshappen){
      getoverwhelmed();
      eventshappen = false;
    }
  }
  else if(depressed){
    if(eventshappen){
      getdepressed();
      eventshappen = false;
    }
  }
  else{
    noevents = true;
  }
}

function getsick(){
  health += (100 - health)/4;
  mood -= 2;
  stress += 3;
  computerscience.condition -= 2;
  physics.condition -= 2;
  math.condition -= 2;
  english.condition -= 2;
  strokeWeight(5);
  noFill();
  stroke(0);
  rect(250, 150, 650, 350);
  textAlign(CENTER);
  textFont(autumn, 50);
  fill(0);
  noStroke();
  text("Due to the ", 550, 200);
  text("lack of sleep", 550, 250);
  text("you get sick and ", 550, 300);
  text("have to rest for", 550, 350);
  text("the whole day", 550, 400);
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(450, 420, 200, 50);
  fill(0);
  noStroke();
  text("OK", 550, 460);

}

function getoverwhelmed(){
  health += 4;
  mood += 4;
  computerscience.condition -= 2;
  physics.condition -= 2;
  math.condition -= 2;
  english.condition -= 2;
  stress -= (stress - 30)/4;
  strokeWeight(5);
  noFill();
  stroke(0);
  rect(250, 150, 650, 350);
  textAlign(CENTER);
  textFont(autumn, 50);
  fill(0);
  noStroke();
  text("Due to too much stress", 550, 200);
  text("you are overwhelmed,", 550, 250);
  text("you need one day", 550, 300);
  text("to relax yourself", 550, 350);
  text("and get rid of the stress", 550, 400);
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(450, 420, 200, 50);
  fill(0);
  noStroke();
  text("OK", 550, 460);
}

function getdepressed(){
  mood += 8;
  health -= 3;
  stress += 2;
  strokeWeight(5);
  noFill();
  stroke(0);
  rect(250, 150, 650, 350);
  textAlign(CENTER);
  textFont(autumn, 50);
  fill(0);
  noStroke();
  text("Due to your bad mood", 550, 200);
  text("you decide to do nothing", 550, 250);
  text("but eat.", 550, 300);
  text("You feel better", 550, 350);
  text("but not healthier", 550, 400);
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(450, 420, 200, 50);
  fill(0);
  noStroke();
  text("OK", 550, 460);
}