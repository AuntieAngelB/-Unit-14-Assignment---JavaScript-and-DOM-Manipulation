
var sightingReport = data;

//#############populate the entire table snippet###################

//############reference data for the table and table body###################
// Use D3 to select the table
var table = d3.select("table");

var tbody = d3.select("tbody");

// ############Refactor to update each cell's text values 
data.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  });

// Grab reference to the button element
var button = d3.select("#filter-btn");

// Define button click
button.on("click", function() {

  d3.event.preventDefault();
tbody.selectAll('*').remove();
  var inputDate = d3.select("#datetime");
  var inputText = inputDate.property("value")
  var filteredData = sightingReport.filter(x => x.datetime === inputText);

  filteredData.forEach(function(sightingReport) {
    //console.log(sightingReport);
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value)
    })
  })
})

