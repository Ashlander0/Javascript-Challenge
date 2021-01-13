// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select('#ufo-table');

//Append table row
function appendrow(row) {
	console.log(row);
	var trow = table.append('tr');
	trow.append('td');
	Object.entries(row).forEach(function([key, value]) {
		var cell = table.append("td");
		cell.text(value)
	});
};

for (row = 0; row < tableData.length; row++) {
	appendrow(tableData[row]);
};