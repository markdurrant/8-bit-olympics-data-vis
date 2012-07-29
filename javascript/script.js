var event = events[0], years = [], list = [];

for(var i in event.data) {
  years.push(i);
}

years.sort();

for(var i=0; i<years.length; i++) {
  var year = years[i];
  var mens = event.data[year];

  list.push("<li data-type=\"mens\" data-year=\""+year+"\">"+year+"<span class=\"country-code\">("+where[year]+")</span>"+events[0].event+"</li>");
  if(events[1].data.hasOwnProperty(year)) {
    var womens = events[1].data[year];
    list.push("<li data-type=\"womens\" data-year=\""+year+"\">"+year+"<span class=\"country-code\">("+where[year]+")</span>"+events[1].event+"</li>");
  }
}

$(".race-list").each(function(j, e) {
  var el = $(e).html(list.join(''));
});

$(".race-list li").bind("click", function(e) {
  window.location = "/race.html?"+$(this).data("year")+"-"+$(this).data("type");
})
