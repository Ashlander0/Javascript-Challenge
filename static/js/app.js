// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select('#ufo-table');

//Append table function
function appendrow(row) {
	console.log(row);
	var trow = table.append('tr');
	trow.append('td');
	Object.entries(row).forEach(function([key, value]) {
		var cell = table.append("td");
		cell.text(value);
	});
};

//Call function for each row
for (row = 0; row < tableData.length; row++) {
	appendrow(tableData[row]);
};

var button = d3.select('#filter-btn');
var field = d3.select('#datetime');
var form = d3.select('form');

//search button function
function search() {
	d3.event.preventDefault();
	var userinput = field.property('value');
	console.log(userinput);
	var filtered = tableData.filter(sighting => sighting.datetime == userinput);
		
	// create rows for filtered data
	table.html('');
	for (row = 0; row < filtered.length; row++) {
		appendrow(filtered[row]);
	};
};

button.on('click', search);
form.on('submit', search);
