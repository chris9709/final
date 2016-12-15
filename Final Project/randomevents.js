//randomevents
//events happening during action
//regardless of all the states

function dialogue(){
   strokeWeight(5);
     stroke(0);
     fill(255);
     rect(250, 150, 650, 350);
     strokeWeight(3);
     stroke(0);
     noFill();
     rect(450, 420, 200, 50);
     fill(0);
     noStroke();
     text("OK", 550, 460);
     textAlign(CENTER);
     textFont(autumn, 50);
     fill(0);
     noStroke();
  
}

//books 1/9 happen

//event1 1/18
function bookeventsA(){
  dialogue();
  mood += 3;
  health += 2;
  stress += 5;
  text("You read a book about dreams", 570, 200);
  text("and feel quite encouraged", 570, 250);
  text("MOOD UP", 570, 300);
  text("HEALTH UP", 570, 350);
  text("STRESS UP", 570, 400);
  Revents = true;
}

//event2 1/18
function bookeventsB(){
  dialogue();
  mood += 6;
  stress -= 5;
  health -= 3;
   text("You find an interesting comic", 570, 200);
  text("and stay up reading", 570, 250);
  text("MOOD UP", 570, 300);
  text("HEALTH DOWN", 570, 350);
  text("STRESS DOWN", 570, 400);
  Revents = true;
}

//sports 1/6 happen

//event1 1/12
function sportseventsA(){
  dialogue();
  mood -= 2;
  stress -= 2;
  health -= 4;
   text("You decide to have jogging", 570, 200);
  text("then get wet in the rain", 570, 250);
  text("MOOD DOWN", 570, 300);
  text("HEALTH DOWN", 570, 350);
  text("STRESS DOWN", 570, 400);
  Revents = true;
}

function sportseventsB(){
  dialogue();
  mood -= 4;
  stress -= 2;
  health -= 2;
   text("You carelessly hurt yourself", 570, 200);
  text("during dumbbell exercise", 570, 250);
  text("MOOD DOWN", 570, 300);
  text("HEALTH DOWN", 570, 350);
  text("STRESS DOWN", 570, 400);
}

//games 1/3 happen

//event1 1/6
function gameeventsA(){
  dialogue();
  mood -= 3;
  social -= 2;
  stress += 2;
  text("Because your fault,", 570, 200);
  text("your team lose the game", 570, 250);
  text("MOOD DOWN", 570, 300);
  text("SOCIAL DOWN", 570, 350);
  text("STRESS UP", 570, 400);
  Revents = true;
}

//event2 1/6
function gameeventsB(){
   dialogue();
  mood += 6;
  social += 3;
  stress -= 2;
  text("You lead your team", 570, 200);
  text("to win a strong opponent", 570, 250);
  text("MOOD UP", 570, 300);
  text("SOCIAL UP", 570, 350);
  text("STRESS DOWN", 570, 400);
  Revents = true;
}

//snacks 1/10
function snacksevent(){
    dialogue();
  mood -= 5;
  health -= 5;
  stress -= 3;
  text("Always be careful about ", 570, 200);
  text("food poisoning", 570, 250);
  text("MOOD DOWN", 570, 300);
  text("HEALTH DOWN", 570, 350);
  text("STRESS DOWN", 570, 400);
  Revents = true;
}
