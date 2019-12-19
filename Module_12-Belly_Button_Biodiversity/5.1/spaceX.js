const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData.map(data => data.location.latitude)));

d3.json(url).then(receivedData => console.log(receivedData.map(data => data.location.longitude)));