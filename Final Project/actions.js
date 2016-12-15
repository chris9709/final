function books(){
 if(mood >= 60){
    mood = mood - random(0.5, 1.2);
     }
     if(mood < 60){
       mood = mood + random(1, 2);
     }
     randomA = round(random(9));
    if((randomA < 9) && (randomA > 0)){
     if(randomA === 1){
       computerscience.condition += 1.5;
     }
     if(randomA === 2){
       physics.condition += 1.5;
     }
     if(randomA === 3){
       math.condition += 1.5;
     }
     if(randomA === 4){
       english.condition += 1.5;
     }
     if(randomA === 5){
       computerscience.condition -= 0.5;     
     }
     if(randomA === 6){
       physics.condition -= 0.5;
     }
     if(randomA === 7){
       math.condition -= 0.5;
     }
     if(randomA === 8){
       english.condition -= 0.5;
     }
     if(randomA < 5){
       stress += 2;
     }
     if(randomA > 5){
       stress -= 2;
     }
    nextday();
     } 
     
  if(randomA === 9){
    bookeventsA();
  }
    
  if(randomA === 0){
    bookeventsB();
  }
  
}

function sports(){
  randomA = round(random(6));
    if(randomA === 6){
      sportseventsA();
    }
    else if(randomA === 0){
      sportseventsB();
    }
    else{
      mood += 2;
      health += 1.8;
      stress -= 1.2;
      nextday();
    }
}

function games(){
  randomA = round(random(3));
  if(randomA === 3){
    gameeventsA();
  }
  else if(randomA === 0){
    gameeventsB();
  }
  else{
    mood += 5;
    health -= 1.5;
    stress -= 1.2;
    nextday();
  }

}

function snacks(){
  randomA = round(random(10));
  if((randomA === 10) && (randomA === 0)){
    snacksevent();
    
  }
  else{
    mood += 1.9;
    health -= 0.9;
    stress -= 1.9;
    
  }

}

function rest(){
  health += 2 - health/80;
  stress -= stress/20;
  nextday();
}

function chat(){
  randomA =round(random(3));
  if(randomA === 3){
    
  }
  else{
  mood += 0.5;
  stress += random(-1, 1);
  social += 1.2;
}
  nextday();
}

function party(){
  randomA = round(random(3));
  if(randomA === 3){
    
  }
  else{
    mood += 5;
    stress -= 5;
    social += 8;
    computerscience.drop();
    physics.drop();
    math.drop();
    english.drop();
  }
  nextday();
}

function date(){
  randomA = round(random(6));
  if(randomA === 6){
    
  }
  else{
    mood += 1;
    stress -= 1;
    social += 0.5;
  }
  nextday();
}

function teamstudy(){
  randomA = round(random(5));
  if(randomA === 1){
    computerscience.condition += 1.5;
   teamstudyeffect();
  }
  else if(randomA === 2){
    physics.condition += 1.5;
   teamstudyeffect();
  }
  else if(randomA === 3){
    math.condition += 1.5;
   teamstudyeffect();
  }
  else if(randomA === 4){
    english.condition += 1.5;
   teamstudyeffect();
}
  else if(randomA === 0){
    english.condition += 1;
    math.condition += 1;
    computerscience.condition += 1;
    physics.condition += 1;
    teamstudyeffect();
  }
  else if(randomA === 5){
    
  }
  nextday();
}

function teamstudyeffect(){
   social += 1;
    mood -= 2 * (100 - social)/100;
    stress += (100 - social)/100;
    health -= random(0.6,1.2);
}
