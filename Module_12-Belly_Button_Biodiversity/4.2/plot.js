console.log(cityGrowths); 

var sortedCities = cityGrowths.sort((a,b) => b.Increase_from_2016 - a.Increase_from_2016); 

var topFiveCities = sortedCities.slice(0,5);


var topFiveCityNames = topFiveCities.map(city => city.City);

var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));


var trace = {
    x: topFiveCityNames,
    Y: topFiveCityGrowths,
    type: "bar", 
    orientation: 'v'
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  console.log(sortedCities);
  console.log(topFiveCities);
  console.log(topFiveCityNames);
  console.log(topFiveCityGrowths);