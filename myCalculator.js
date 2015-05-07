#!/usr/bin/env node

var commander = require('commander');

commander
  .version('0.0.1')
  .option('-d, --degrees', 'Report value in Degrees')
  .option('-r, --radians', 'Report value in Radians')
  
  .parse(process.argv); // look at arguments and set values that are correct
console.log(commander.args)

  var currentAngle = commander.args;
  if (commander.radians){
  	currentAngle = currentAngle * Math.PI / 180;
  }

  console.log('your angle is ' + currentAngle + '.')