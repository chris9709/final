function preload(){
  autumn = loadFont('data/Autumn__.ttf');
  bg = loadImage('data/background2.jpg');
  menubg = loadImage('data/background3.png');

  //for(i=0; i++; i<26){
    //music[i] = loadSound("'data/01(' + i + 'mp3'");
  //}

    
}//end of preload

function setup() {
  
  createCanvas(1200, 640);
  computerscience = new Subject(2, "morning", 4, "evening", 20);
  physics = new Subject(3, "evening", 5, "evening", 45);
  math = new Subject(1, "afternoon", 4, "afternoon", 65);
  english = new Subject(5, "morning", 1, "morning", 9);
  //music[0].loop();
  
}//end of setup

function draw() {
  console.log(mouseX);
  console.log(mouseY);
 if(runonce){
   background(bg);
  findMonth(); //to see if time to move to next month 
  findWeek();  //to find what day it is
  calendar();  //draw the calendar
  classes();   //check today's classes
  checkevents();
  if((!sick) && (!overwhelmed) && (!depressed)){
  mainoption();
  }
  status();   //show the status
  grade();    //check your grade
 
  
  if(gradedrop){
  computerscience.drop();
  physics.drop();
  math.drop();
  english.drop();
  gradedrop = false;
  }//end of gradedrop
  
  if(weekname != "Sunday"){
    gradedrop = true;
    
  }//end of check drop
  
  if(ending){
    gameend();
  }
 }
 runonce = false;
}//end of draw

function mouseClicked(){
  if((!sick) && (!overwhelmed) &&(!depressed)){
  if(((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 120) < 100))||
  ((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 380) < 100)) || 
  ((270 < mouseX) && (mouseX < 470) && (abs(mouseX - 370)+ abs(mouseY - 250) < 100)) || 
  ((530 < mouseX) && (mouseX < 730) && (abs(mouseX - 630)+ abs(mouseY - 250) < 100))){
    
   if((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 120) < 100)){
     studymenu();
     suboption = true;
   }
  
   if((270 < mouseX) && (mouseX < 470) && (abs(mouseX - 370)+ abs(mouseY - 250) < 100)){
     relaxmenu();
     suboption = true;
   }
   
   if((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 380) < 100)){
     rest();
   }
   
    if((530 < mouseX) && (mouseX < 730) && (abs(mouseX - 630)+ abs(mouseY - 250) < 100)){
     socialmenu();
     suboption = true;
    }
  }
  
  if(suboption){
    if(study){
   if((mouseX > 800) && (mouseX < 940) && (mouseY > 100) && (mouseY < 240)){
    computerscience.study();
    nextday();
  }
   if((mouseX > 960) && (mouseX < 1100) && (mouseY > 100) && (mouseY < 240)){
    physics.study();
    nextday();
  }
   if((mouseX > 800) && (mouseX < 940) && (mouseY > 260) && (mouseY < 400)){
    math.study();
    nextday();
  }
   if((mouseX > 960) && (mouseX < 1100) && (mouseY > 260) && (mouseY < 400)){
    english.study();
    nextday();
   
   }
  }
  if(relax){
   if((mouseX > 800) && (mouseX < 940) && (mouseY > 100) && (mouseY < 240)){
    books();
   }
   if((mouseX > 800) && (mouseX < 940) && (mouseY > 260) && (mouseY < 400)){
     sports();
   }
   if((mouseX > 960) && (mouseX < 1100) && (mouseY > 100) && (mouseY < 240)){
     games();
   }
   if((mouseX > 960) && (mouseX < 1100) && (mouseY > 260) && (mouseY < 400)){
     snacks();
   }
  }
  if(socialA){
    if((mouseX > 800) && (mouseX < 940) && (mouseY > 100) && (mouseY < 240)){
     chat();
   }
   if((mouseX > 800) && (mouseX < 940) && (mouseY > 260) && (mouseY < 400)){
     date();
   }
   if((mouseX > 960) && (mouseX < 1100) && (mouseY > 100) && (mouseY < 240)){
     party();
   }
   if((mouseX > 960) && (mouseX < 1100) && (mouseY > 260) && (mouseY < 400)){
     teamstudy();
   }
  }
  }
  }
  if(sick){
    if((mouseX > 450) && (mouseX < 650) && (mouseY > 420) && (mouseY < 470)){
      nextday();
  }
}
  if(overwhelmed){
    if((mouseX > 450) && (mouseX < 650) && (mouseY > 420) && (mouseY < 470)){
      nextday();
  }
}
  if(depressed){
     if((mouseX > 450) && (mouseX < 650) && (mouseY > 420) && (mouseY < 470)){
      nextday();
  }
  }
}
   
function nextday(){
  background(bg);
  dateday += 1;
  dateweek += 1;
  if(dateweek === 8){
    dateweek = 1;
  }
    reset();
    runonce = true;
}

