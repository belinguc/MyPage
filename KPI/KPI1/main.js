
Highcharts.chart('container', {

    chart: {
        type: 'line',exporting: {
         enabled: false
}, credits: {
      enabled: false
  },
    },
    title: {
        text: 'Total battery runtime on 1 charge'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
plotBands: [{
    label: {
                    text: 'Voice control release',

                },     
    color: '#91bbff', // Color value
    from: 1, // Start of the plot band
    to: 2 // End of the plot band
  }],
    },
    yAxis: {
        title: {
            text: 'Battery runtime (minutes)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'No voice control activation + movies',
        data: [800, 750, 500, 475, 480, 480]
    }, {
        name: 'No voice control activation + live streaming videos',
        data: [700, 650, 400, 375, 390, 390]
    }, {
        name: 'Voice control activation + movies',
        data: [650, 625, 400, 390, 385, 385]
    }, {
        name: 'Voice control activation + movies',
        data: [750, 700, 500, 475, 485, 485]
    }, {
        name: 'Significant steady usage of Alexa',
        data: [650, 625, 400, 380, 385, 385]
    }]
});