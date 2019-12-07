// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
// var filters = {

let date = d3.select("#datetime").property("value");
let city = d3.select("#city").property("value");
let state = d3.select("#state").property("value");
let country = d3.select("#country").property("value");
let shape = d3.select("#shape").property("value");

// };

// Continue building your code here
function filtering() {

  tbody.html("");

  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");

  let filteredData = tableData;

  if (date) {
    // Apply `filter` to the table data 
    filteredData = filteredData.filter(row => row.datetime === date);
  } else if (city) {
    // Apply `filter` to the table data 
    filteredData = filteredData.filter(row => row.city === city);
  } else if (state) {
    // Apply `filter` to the table data 
    filteredData = filteredData.filter(row => row.state === state);
  } else if (country) {
    // Apply `filter` to the table data 
    filteredData = filteredData.filter(row => row.country === country);
  } else if (shape) {
    // Apply `filter` to the table data 
    filteredData = filteredData.filter(row => row.shape === shape);
  }  

  buildTable(filteredData);

};

d3.selectAll("#filter-btn").on("click", filtering);

// Build the table when the page loads
buildTable(tableData);
