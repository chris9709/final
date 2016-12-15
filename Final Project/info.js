function findMonth(){
  if(datemonth === 9){
    monthname = "Sep";
    if(dateday === 31){
      dateday = 1;
      datemonth += 1;
    }
  }
  if(datemonth === 10){
    monthname = "Oct";
    if(dateday === 32){
      dateday = 1;
      datemonth += 1;
    }
  }
  if(datemonth === 11){
    monthname = "Nov";
    if(dateday === 31){
      dateday = 1;
      datemonth += 1;
    }
  }
  if(datemonth === 12){
    monthname = "Dec";
    if(dateday > 22){
      dateday = 22;
    }
    if(dateday === 22){
    gamestop = true;
    }
  }
}

function findWeek(){
  if(dateweek === 1){
    weekname = "Monday";
  }
  else if(dateweek === 2){
    weekname = "Tuesday";
  }
  else if(dateweek === 3){
    weekname = "Wednesday";
  }
  else if(dateweek === 4){
    weekname = "Thursday";
  }
  else if(dateweek === 5){
    weekname = "Friday";
  }
  else if(dateweek === 6){
    weekname = "Saturday";
  }
  else if(dateweek === 7){
    weekname = "Sunday";
  }
}

function calendar(){
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(0, 0, 190, 160);
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 45);
  text(monthname, 50, 120);
  textSize(90);
  text(dateday, 135, 140);
  textSize(40);
  text(weekname, 95, 50);
}

function classes(){
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(0, 160, 190, 160);
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 35);
  text("Classes", 95, 190);
  computerscience.checkclass();
  physics.checkclass();
  math.checkclass();
  english.checkclass();
  
  if(computerscience.upcoming){
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 35);
  text("CS", 25, 220);
  }
   if(physics.upcoming){
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 35);
  text("PH", 70, 220);
  }
   if(math.upcoming){
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 35);
  text("MA", 115, 220);
  }
   if(english.upcoming){
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 35);
  text("EN", 160, 220);
  }
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 35);
  text("Upcomings", 95, 270);
  fill(255, 0, 0);
  
  if((datemonth === 9) && (dateday > 26) && (dateday < 30)){
    text("CS:MIDTERM", 95, 300);
  }
  if((datemonth === 10) && (dateday > 13) && (dateday < 17)){
    text("CS:MIDTERM", 95, 300);
  }
  if((datemonth === 10) && (dateday > 1) && (dateday < 5)){
    text("CS:MIDTERM", 95, 300);
  }
  if((datemonth === 11) && (dateday < 4)){
    text("CS:MIDTERM", 95, 300);
  }
  }
  
function status(){
  
  if(mood > 100){
    mood = 100;
  }
  if(health > 100){
    health = 100;
  }
  if(stress < 0){
    stress = 0;
  }
  if(social < 0){
    social = 0;
  }
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(0, 320, 190, 160);
  textAlign(LEFT);
  textFont(autumn, 35);
  
  if(mood < 55){
  fill(255,0,0);
  }
  
  else{
    fill(0);
  }
  noStroke();
  text("MOOD: " + round(mood), 20, 370);
  
  if(health < 65){
  fill(255,0,0);}
  
  else{
    fill(0);
  }
  noStroke();
  text("HEALTH: " + round(health), 20, 400);

  if((stress > 45) || (stress < 10)){
  fill(255,0,0);
  }
  
  else{
    fill(0);
  }
  noStroke();
  text("STRESS: " + round(stress), 20, 430);

  if((social < 10) || (social > 70)){
  fill(255, 0, 0);
  }
  
  else{
    fill(0);
  }
  noStroke();
  text("SOCIAL: " + round(social), 20, 460);
  }

function grade(){
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(0, 480, 190, 160);
  textAlign(LEFT);
  textFont(autumn, 35);
  fill(0);
  noStroke();
  text("CS: " + round(computerscience.condition), 20, 525);
  text("PH: " + round(physics.condition), 20, 560);
  text("MA: " + round(math.condition), 20, 595);
  text("EN: " + round(english.condition), 20, 630);
}

function musicbutton(){
  stroke(0);
  strokeWeight(3);
  noFill();
  rect(1080, 0, 60, 60);
  rect(1140, 0, 60, 60);
  fill(0);
  noStroke();
  
  if(musicplaying){
  image(musicB, 1085, 5);
  rect(1092, 10, 15, 40);
  rect(1113, 10, 15, 40);
  }
  
  else if(!musicplaying){
  image(musicB, 1085, 5);
  triangle(1090, 10, 1090, 50, 1130, 30);
  }
  
  triangle(1150, 10, 1190, 10, 1170, 50);
  textAlign(CENTER);
  textFont(autumn, 35);
  fill(0);
  noStroke();
  text('music', 1030, 40);
}