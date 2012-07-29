/*
*  Londinium MMXII Hackathon shitty animation script.
*
*  We are basically drunk.
*  We like loop unrolling.
*  We like semicolons;
*  We like separate var statements.
*/

var event = events[1], years = [];

for(var i in event.data) {
  years.push(i);
}

var prefixes = ["-webkit-transition:","-moz-transition:","-o-transition:", "-ms-transition:", "transition:"];

function createRunAnimationStyle(runner, added) {
  runner['animationTime'] = (parseFloat(runner.time) + parseFloat(added));
  var anim = "all "+ runner.animationTime +"s ease-in"
  var out = "left: 90%; ";
  for(var i=0; i < prefixes.length; i++) {
    out += prefixes[i] + " " + anim + "; ";
  }
  return out;
}

var year = years[10];

$(".race-title").text(event.event+" - Olympia "+year);

var runnerOne = event.data[year][0];
var runnerTwo = event.data[year][1];
var runnerThree = event.data[year][2];

var times = [runnerOne.time, runnerTwo.time, runnerThree.time].sort();
var legtimes = [200, 250, 300];
var artificializer = [0, 1, 2];

$(".a1").text(runnerOne.athlete);
$(".a2").text(runnerTwo.athlete);
$(".a3").text(runnerThree.athlete);

$(".lane1").attr("style", createRunAnimationStyle(runnerOne, artificializer[times.indexOf(runnerOne.time)]));
$(".lane2").attr("style", createRunAnimationStyle(runnerTwo, artificializer[times.indexOf(runnerTwo.time)]));
$(".lane3").attr("style", createRunAnimationStyle(runnerThree, artificializer[times.indexOf(runnerThree.time)]));

var legs1 = setInterval(function() {
  $(".runner.r1").toggleClass("run-2");
}, legtimes[times.indexOf(runnerOne.time)]);

var legs2 = setInterval(function() {
  $(".runner.r2").toggleClass("run-2");
}, legtimes[times.indexOf(runnerTwo.time)]);

var legs3 = setInterval(function() {
  $(".runner.r3").toggleClass("run-2");
}, legtimes[times.indexOf(runnerThree.time)]);

setTimeout(function(){ clearInterval(legs1) }, runnerOne.animationTime*1000);
setTimeout(function(){ clearInterval(legs2) }, runnerTwo.animationTime*1000);
setTimeout(function(){ clearInterval(legs3) }, runnerThree.animationTime*1000);
