var event = events[0], years = [];

for(var i in event.data) {
  years.push(i);
}

var prefixes = ["-webkit-transition:","-moz-transition:","-o-transition:", "-ms-transition:", "transition:"];

function createRunAnimationStyle(runner) {
  var anim = "all "+ runner.time +"s ease-in"
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

$(".lane1").attr("style", createRunAnimationStyle(runnerOne));
$(".lane2").attr("style", createRunAnimationStyle(runnerTwo));
$(".lane3").attr("style", createRunAnimationStyle(runnerThree));

var legs1 = setInterval(function() {
  $(".runner.one").toggleClass("run-2");
}, 200);

var legs2 = setInterval(function() {
  $(".runner.two").toggleClass("run-2");
}, 250);

var legs3 = setInterval(function() {
  $(".runner.three").toggleClass("run-2");
}, 300);


setTimeout(function(){ clearInterval(legs1) }, runnerOne.time*1000);
setTimeout(function(){ clearInterval(legs2) }, runnerTwo.time*1000);
setTimeout(function(){ clearInterval(legs3) }, runnerThree.time*1000);