var stack = [];
var states = {};
var intervalId = 0;

// Download state data
Papa.parse('/viz/state_table.csv', {
  download: true,
  complete: function(results) {

    // Get state name + abreviations for use in stately
    var rawData = results.data;
    rawData.forEach(function(element, index, array) {
      if (index == 0 || element[2] == undefined) {
        return;
      }
      states[element[1]] = {id: element[2].toLowerCase(), shading: 70};
    });

    // Download shooting data
    Papa.parse('/viz/mass_shootings_2015.csv', {
      download: true,
      complete: function(results) {
        var rawData = results.data;
        rawData.forEach(function(element, index, array) {
          if (index == 0) {
            return;
          }
          stack.push({date: element[0], state: element[1], index: states[element[1]]}); //Push each event in reverse order, so we can pop() it later
        });
        intervalId = setInterval(displayData, 100); //Display a row every half second
      }
    });

  }
});

function displayData() {
  if (stack.length == 0) {
    clearInterval(intervalId);
  }
  var row = stack.pop();
  var percent = states[row.state].shading -= 5;
  document.getElementById(row.index.id).style.color = 'hsla(360, 100%, ' + percent + '%, 1)';
  document.getElementById('graph-text').innerText = row.date;
}
