"use strict";

describe('Thermostat', function(){

  var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat();
    });
  it('must starts at 20 degrees', function(){
      expect(thermostat.currentTemperature()).toEqual(20);
  });
  it('increses in temperture with up function', function(){
    thermostat.increase();
    expect(thermostat.currentTemperature()).toEqual(21);
  });
  it('descreases in temperture with up function', function(){
    thermostat.decrease();
    expect(thermostat.currentTemperature()).toEqual(19);
  });
});
