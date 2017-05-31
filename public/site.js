
var ctx = document.getElementById("myChart").getContext('2d');

data = {}
options = {}

var myLineChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: Array.apply(null, Array(100)).map(function (_, i) {return i;}),
        datasets: [{
            label: "Math.E",
            borderColor: 'rgb(255, 99, 132)',
            data: getEData(),
        }]
    },

    options: {}
});

function getEData(){
  var data = [];

  for(var i = 0; i < 99; i++){
    data.push(Math.E);
  }

  return data
}
