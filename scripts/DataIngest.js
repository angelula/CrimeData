var http = require('http');
var fs = require('fs');

var dir = './data';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}
var file = fs.createWriteStream("./data/incidents_part1_part2.geojson");
var request = http.get("http://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+incidents_part1_part2&filename=incidents_part1_part2&format=geojson&skipfields=cartodb_id", function(response) {
  response.pipe(file);
});
