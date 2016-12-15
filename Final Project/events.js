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
        if(events){
        if(social < 5){
          randomA = random(1);
          if(randomA * social < 2){
            lonely = true;
            events = false;
          }
        }
          if(events){
            if(stress < 5){
              randomA = random(1);
              if(randomA * stress < 2){
                overrelaxed = true;
                events = false;
              }
            }
            if(events){
              if(social > 75){
                randomA =random(1);
                if(social / randomA >　120){
                  overpopular = true;
                  events = false;
                }
              }
            }//end of events 6
          }//end of events 5
        }//end of events 4
      } //end of events 3
    } //end of events 2
  } //end of events 1


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
  else if(lonely){
    if(eventshappen){
      getlonely();
      eventshappen = false;
    }
  }
  else if(overrelaxed){
    if(eventshappen){
      getoverrelaxed();
      eventshappen = false;
    }
  }
  else if(overpopular){
    if(eventshappen){
      getoverpopular();
      eventshappen = false;
    }
  }
  else{
    noevents = true;
  }
}// end of checkevents

function getsick(){
  health += (100 - health)/4;
  mood -= 2;
  stress += 3;
  computerscience.condition -= 2;
  physics.condition -= 2;
  math.condition -= 2;
  english.condition -= 2;
  dialogue();
  text("Due to the ", 550, 200);
  text("lack of sleep", 550, 250);
  text("you get sick and ", 550, 300);
  text("have to rest for", 550, 350);
  text("the whole day", 550, 400);
 

}

function getoverwhelmed(){
  health += 4;
  mood += 4;
  computerscience.condition -= 2;
  physics.condition -= 2;
  math.condition -= 2;
  english.condition -= 2;
  stress -= (stress - 30)/4;
  dialogue();
  text("Due to too much stress", 550, 200);
  text("you are overwhelmed,", 550, 250);
  text("you need one day", 550, 300);
  text("to relax yourself", 550, 350);
  text("and get rid of the stress", 550, 400);
  
}

function getdepressed(){
  mood += 8;
  health -= 3;
  stress += 2;
  dialogue();
  text("Due to your bad mood", 550, 200);
  text("you decide to do nothing", 550, 250);
  text("but eat.", 550, 300);
  text("You feel better", 550, 350);
  text("but not healthier", 550, 400);
  
}

function getlonely(){
  mood += 3;
  stress += 5;
  social += 10;
  dialogue();
  text("You feel that ", 550, 200);
  text("you have no friends", 550, 250);
  text("all you need now", 550, 300);
  text("is to talk", 550, 350);
  text("and to listen", 550, 400);
}

function getoverrelaxed(){
  mood -= 5;
  stress += 15;
  dialogue();
  text("Your parents find that", 550, 200);
  text("you are so relaxed", 550, 250);
  text("when they call you", 550, 300);
  text("to check your condition", 550, 350);
  text("and then blame you", 550, 400);
}

function getoverpopular(){
  mood -= 4;
  social -= 15;
  dialogue();
  text("You spend too much", 550, 200);
  text("on other people.", 550, 250);
  text("You realize that", 550, 300);
  text("you need more time", 550, 350);
  text("of yourself", 550, 400);
}

function checkexam(){
  if(((datemonth === computerscience.exammonth) && (dateday === computerscience.examday)) || ((datemonth === physics.exammonth) && (dateday === physics.examday)) || ((datemonth === math.exammonth) && (dateday === math.examday)) || ((datemonth === english.exammonth) && (dateday === english.examday))){
    examday = true;
  }
  else{
    examday = false;
  }
}

function doexam(){
    //check the date to see what exam it is
        if((datemonth === computerscience.exammonth) && (dateday === computerscience.examday)){ 
        computerscience.exam();
        textAlign(CENTER);
        textFont(autumn, 100);
        noStroke();
        fill(0);
        text("CS:  MIDTERM", 580, 300);
        }
        
        if((datemonth === physics.exammonth) && (dateday === physics.examday)){
        physics.exam();
        textAlign(CENTER);
        textFont(autumn, 100);
        noStroke();
        fill(0);
        text("PH:  MIDTERM", 580, 300);
        }
        
        if((datemonth === math.exammonth) && (dateday === math.examday)){
        math.exam();
        textAlign(CENTER);
        textFont(autumn, 100);
        noStroke();
        fill(0);
        text("MA:  MIDTERM", 580, 300);
        }
        
        if((datemonth === english.exammonth) && (dateday === english.examday)){
        english.exam();
        textAlign(CENTER);
        textFont(autumn, 100);
        noStroke();
        fill(0);
        text("EN:  MIDTERM", 580, 300);
        }
        
        
}
