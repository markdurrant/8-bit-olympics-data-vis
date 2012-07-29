/*
*  Londinium MMXII Hackathon shitty animation script.
*
*  We are basically drunk.
*  We like loop unrolling.
*  We like semicolons;
*  We like separate var statements.
*/


var what = document.location.search.slice(1);

var type = what.match(/womens/) ? 1 : 0;
var year = parseInt(what, 10);

var event = events[type], years = [];

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

$(".hack-medal").bind("click", function() {
  document.location = "/index.html";
});

$(".race-title").text(where[year]+ " "+year+" – "+ event.event);

var runnerOne = event.data[year][0];
var runnerTwo = event.data[year][1];
var runnerThree = event.data[year][2];

var times = [runnerOne.time, runnerTwo.time, runnerThree.time].sort();
var legtimes = [200, 250, 300];
var artificializer = [0, 1, 2];
var winnerClasses = ['gold', 'silver', 'bronze'];

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

setTimeout(function(){ clearInterval(legs1); $(".medal1").addClass(winnerClasses[times.indexOf(runnerOne.time)]) }, runnerOne.animationTime*1000);
setTimeout(function(){ clearInterval(legs2); $(".medal2").addClass(winnerClasses[times.indexOf(runnerTwo.time)]) }, runnerTwo.animationTime*1000);
setTimeout(function(){ clearInterval(legs3); $(".medal3").addClass(winnerClasses[times.indexOf(runnerThree.time)])}, runnerThree.animationTime*1000);

