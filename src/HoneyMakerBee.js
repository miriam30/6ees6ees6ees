class HoneyMakerBee extends Bee {
  constructor(food, color, age, job, honeyPot){
    super(food, color)
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
};

makeHoney(){
  this.honeyPot++;
};
giveHoney(){
  this.honeyPot--;
};
};
