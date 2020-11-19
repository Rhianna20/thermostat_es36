"use strict";

class Thermostat{
  constructor(){
    this.temperature = 20;
  }

  currentTemperature(){

    return this.temperature;
  }
  increase(){
    this.temperature += 1
  }
  decrease(){
    this.temperature -= 1
  }
};
