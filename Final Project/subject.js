function Subject(day1, time1, day2, time2, difficulty, exammonth, examday){
  
  //find the date
  if(day1 === 1){
  this.day1 = "Monday";
  }
  else if(day1 === 2){
  this.day1 = "Tuesday";
  }
  else if(day1 === 3){
  this.day1 = "Wednesday";
  }
  else if(day1 === 4){
  this.day1 = "Thursday";
  }
  else if(day1 === 5){
  this.day1 = "Friday";
  }
  if(day2 === 1){
  this.day2 = "Monday";
  }
  else if(day2 === 2){
  this.day2 = "Tuesday";
  }
  else if(day2 === 3){
  this.day2 = "Wednesday";
  }
  else if(day2 === 4){
  this.day2 = "Thursday";
  }
  else if(day2 === 5){
  this.day2 = "Friday";
  }
  
  
  this.checkclass = function(){ //see if there is class today
    if((this.day1 === weekname) || (this.day2 === weekname)){
      this.upcoming = true;
    }
    else{
      this.upcoming = false;
    }
  }
  
  this.exammonth = exammonth;
  this.examday = examday;
  
  this.difficulty = difficulty;
  this.condition = 90 - 2 * sqrt(this.difficulty); //basically your grade
  
  this.study = function(){
    this.condition = this.condition + 3 * (health / 100) * (mood / 100) + 2;
    mood = mood - random(1) - sqrt(100 - mood)/5 - 2 * ((100 -health) / 100);
    health = health -  map(mood, 0, 100, 0.6, 0.8) * map(this.difficulty, 8, 66, 1.1, 2) * map(sqrt(stress), 0, 10, 0.9, 3) + (100 - health)/ 100; 
    stress = stress + (1 + this.difficulty/100) + abs(this.condition - 75)/100;
  }
  
  this.drop = function(){
    if(weekname === "Sunday"){
      this.condition = this.condition - (sqrt(sqrt(this.difficulty)) + 2)/2;
      social -= social/10;
    }
  }
  
  this.exam = function(){

     randomA = random(-5, 5);
     dialogue();
     if(randomA > 0){
     text("You feel good about the exam", 580, 380);
     this.condition += randomA + sqrt((mood + health - stress - abs(45 - social))/10);
     stress -= randomA + (sqrt(mood + health - stress - abs(45 - social)))/10;
     mood += randomA + (sqrt(mood + health - stress - abs(45 - social)))/10;
     }
     
     if(randomA < 0){
     text("You feel bad about the exam", 580, 380); 
     this.condition -= randomA - sqrt((mood + health - stress - abs(45 - social))/10);
     stress += (sqrt(mood + health - stress - abs(45 - social)))/10;
     mood -= (sqrt(mood + health - stress - abs(45 - social)))/10;
     }
  }
}
