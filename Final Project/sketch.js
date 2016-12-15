function preload(){
  autumn = loadFont('data/Autumn__.ttf');
  bg = loadImage('data/background2.jpg');
  menubg = loadImage('data/background3.png');
  welcome = loadImage('data/welcome.png');
  musicB = loadImage('data/button.png');
  
  for(var i = 0; i < 10; i ++){
  music[i] = loadSound('data/01('+i+ '.mp3');
  }
    
}//end of preload

function setup() {
  createCanvas(1200, 640);
  computerscience = new Subject(2, "morning", 4, "evening", 20, 9, 30); // input subjects
  physics = new Subject(3, "evening", 5, "evening", 45, 10, 17);
  math = new Subject(1, "afternoon", 4, "afternoon", 65, 10, 5);
  english = new Subject(5, "morning", 1, "morning", 9, 11, 4);



  //music[0].loop();
  
}//end of setup

function draw() {

  if(!gamebegin){
 beginning();
  }
  //console.log(mouseX);
  //console.log(mouseY);
  if(gamebegin){
    if(playmusic){
      music[musicnumber].loop();
      musicplaying = true;
      playmusic = false;
    }
    
  if(runonce){
 
  if(!gamestop){
  console.log(dateday);
  background(bg);
  
  findMonth(); //to see if time to move to next month 
  findWeek();  //to find what day it is
  calendar();  //draw the calendar
  checkexam(); //to see if it is an exam day
  classes();   //check today's classes
  
  if(!examday){
    checkevents(); 
    
  if(noevents){
  mainoption(); //if no exams / events, it's a normal day
  }
  }
  
  if(examday){
     doexam();
  }
  status();   //show the status
  grade();    //check your grade
  
  
  if(weekname === "Sunday"){ //grades auto drop every Sunday
    gradedrop = true;
    
  
  if(gradedrop){
  computerscience.drop();
  physics.drop();
  math.drop();
  english.drop();
  gradedrop = false;
  }//end of gradedrop
  

  }//end of check drop
  
  if(gamestop){
    gameend();
  }
 }
  }
 runonce = false;
  musicbutton();
  }
}//end of draw

function mouseClicked(){ // main options & sub options & events to move on
if(gamebegin){
  if(!gamestop){
    
    //control music
    if((1080 < mouseX) && (1140 > mouseX) && (0 < mouseY) && (60 > mouseY)){
      if(musicplaying){
      music[musicnumber].pause();
      musicplaying = false;
      }
      else if(!musicplaying){
        music[musicnumber].loop();
        musicplaying = true;
      }
    }
    
    if((1140 < mouseX) && (1200 > mouseX) && (0 < mouseY) && (60 > mouseY)){
      music[musicnumber].stop();
      musicnumber += 1;
      if(musicnumber === 10){
        musicnumber = 1;
      }
      playmusic = true;
    }
    
    
  if( (!examday) && (!sick) && (!overwhelmed) &&(!depressed) && (!lonely) && (!overrelaxed)  && (!overpopular) && (!Revents)){
  if(((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 120) < 100))||//main options
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
  if((sick) || (overwhelmed) || (depressed) || (lonely) || (overrelaxed) || (overpopular) || (examday) || (Revents)){
   if((mouseX > 450) && (mouseX < 650) && (mouseY > 420) && (mouseY < 470)){
   nextday();
  }
}
  }
}
if(!gamebegin){
  if((mouseX > 410) && ( mouseX < 610) && (mouseY > 520) && (mouseY < 570)){
    gamebegin = true;
  }
}
}
   