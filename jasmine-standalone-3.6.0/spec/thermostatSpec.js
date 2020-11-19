"use strict";

describe('Thermostat', function(){

  var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat();
    });
  it('must starts at 20 degrees', function(){
      expect(thermostat.currentTemperature()).toEqual(20);
  });
  it('increses in temperture with increase function', function(){
    thermostat.increase();
    expect(thermostat.currentTemperature()).toEqual(21);
  });
  it('descreases in temperture with decrease function', function(){
    thermostat.decrease();
    expect(thermostat.currentTemperature()).toEqual(19);
  });
  it('minimum temperture of 10 degrees', function(){
    for (var i = 0; i < 11; i++){
      thermostat.decrease();
    }
      expect(thermostat.currentTemperature()).toEqual(10);
  });
  it('power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('switches off saving mode', function(){
    expect(thermostat.switchOffPowerSavingMode()).toBe(false);
  })
});
