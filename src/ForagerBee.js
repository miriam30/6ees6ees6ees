class ForagerBee extends Bee {
  constructor(age, job, color, food, canFly, treasureChest){
    super(color, food)
    this.age = 10;
    this.job = "find pollen"
    this.canFly = true;
    this.treasureChest = [];
  };
  forage(treasure){
    this.treasure = treasure;
    this.treasureChest.push(this.treasure);

  };

};
