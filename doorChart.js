var ctx = document.getElementById("myChart").getContext('2d');

var data = {
    datasets: [{
        label: 'Door Open Times 1',
        data: [{
            t: moment().format(),
            y: 0
        }, {
            t: moment().add(20, 'hours').format(),
            y: 0
        }, {
            t: moment().add(33, 'hours').format(),
            y: 4
        }, {
            t: moment().add(48, 'hours').format(),
            y: 8
        }],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)'
        ],
        borderWidth: 1
    }, {
        label: 'Door Open Times 2',
        data: [{
            t: moment().format(),
            y: 1
        }, {
            t: moment().add(20, 'hours').format(),
            y: 1
        }, {
            t: moment().add(33, 'hours').format(),
            y: 5
        }, {
            t: moment().add(48, 'hours').format(),
            y: 9
        }],
        backgroundColor: [
            'rgba(99,255,132,0.2)'
        ],
        borderColor: [
            'rgba(99,255,132,1)'
        ],
        borderWidth: 1
    }]
};

var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear',
                time: {
                    unit: 'hour',
                    displayFormats: {
                        hour: 'hA MMM DD YYYY'
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback: function(value) {
                        if (value >= 0 && value < 4)
                          return 'Closed';
                        else if (value >= 4 && value < 8)
                          return 'Open';
                        else if (value >= 8 && value < 12)
                          return 'Long Open';
                        else
                          return '';
                      }
                }
            }]
        }
    }
});