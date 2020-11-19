"use strict";

class Thermostat{
  constructor(){
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
    this.powerSavingMode = true;
  }

  currentTemperature(){

    return this.temperature;
  }
  increase(){
   return  this.temperature += 1
  }
  decrease(){
    if(this.isMinimum()){
   return;
  }
   this.temperature -= 1
  }
  isMinimum(){
   return this.temperature === this.MINIMUM_TEMP;
  }
  isPowerSavingModeOn(){
    return this.powerSavingMode == true;
  }
  switchOffPowerSavingMode(){
    return this.powerSavingMode = false;
  };
};
