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
    if(dateday === 22){
    ending = true;
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
  if(computerscience.upcoming){
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont(autumn, 35);
  text("CS", 35, 290);
  }
  }

function status(){
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

function gameend(){
  strokeWeight(5);
  stroke(0);
  fill(255);
  rect(200, 150, 600, 350);
  textAlign(CENTER);
  textFont(autumn, 100);
  noStroke();
  fill(0);
  text("Semester Ends!", 500, 400);
}
