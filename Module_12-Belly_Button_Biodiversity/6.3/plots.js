function init() {
    var selector = d3.select("#selDataset");
   
    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", data);
      });
  })}

function optionChanged(newSample) {
    buildMetadata(newSample);
    // buildCharts(newSample);

};

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        console.log(metadata);
        var resultArray = []
        metadata.forEach((sampleObj) => {
            if sampleObj.id == sample:
                resultArray.push(sampleObj)
        });
        // var resultArray = metadata.forEach((sampleObj) => {
        //     sampleObj.filter(Obj => Obj.id == sample);
        // })
        console.log(resultArray);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
    
        PANEL.html("");
        PANEL.append("h6").text(result.location);
    });
};
  
   
  init();
  