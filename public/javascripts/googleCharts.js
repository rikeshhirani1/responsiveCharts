google.charts.load('current', {packages: ['corechart', 'bar', 'line']});
google.charts.setOnLoadCallback(drawBar);
google.charts.setOnLoadCallback(drawTrendlines);
google.charts.setOnLoadCallback(drawScatterChart);
google.charts.setOnLoadCallback(drawDonut);
google.charts.setOnLoadCallback(drawMultSeries);
google.charts.setOnLoadCallback(drawIntervalChart);

$(window).on("resize", function (event) {
    drawBar();
    drawTrendlines();
    drawScatterChart();
    drawDonut();
    drawMultSeries();
    drawIntervalChart();
});

function drawBar() {
    var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population',],
        ['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],
        ['Philadelphia, PA', 1526000]
    ]);

    var options = {
        animation: {startup: 'true', duration: 1000, easing: 'out'},
        title: 'Population of Largest U.S. Cities',
        titleTextStyle: {color: 'white'},
        chartArea: {width: '78%', left: 50},
        hAxis: {
              title: 'Total Population',
              minValue: 0,
              textStyle: {color: 'white'},
              titleTextStyle: {color: 'white'},
              baselineColor: {color: 'white'},
              gridlines: {color: 'white'}
        },
        vAxis: {
              title: 'City',
              textStyle: {color: 'white'},
              titleTextStyle: {color: 'white'},
              baselineColor: {color: 'white'},
              gridlines: {color: 'white'}
        },
        legend: {position: 'bottom', textStyle: {color: 'white'}},
        backgroundColor	: '#333333',
        colors: ['#9fff80']       
      };

    var chart = new google.visualization.BarChart(document.getElementById('chartContainer1'));
    chart.draw(data, options);
}


function drawTrendlines() {
    var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Dogs');
        data.addColumn('number', 'Cats');

    data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
    ]);

    var options = {
        animation: {startup: 'true', duration: 1000, easing: 'out'},
        title: 'Popularity of Pets',
        titleTextStyle: {color: 'white'},
        chartArea: {width: '78%', left: 50},
        hAxis: {
            title: 'Time',
            textStyle: {color: 'white'},
            titleTextStyle: {color: 'white'},
            baselineColor: {color: 'white'},
            gridlines: {color: 'white'}
        },
        vAxis: {
            title: 'Popularity',
            textStyle: {color: 'white'},
            titleTextStyle: {color: 'white'},
            baselineColor: {color: 'white'},
            gridlines: {color: 'white'}
        },
        colors: ['#66ccff', '#ff0066'],
        legend: {position: 'bottom', textStyle: {color: 'white'}},
        backgroundColor	: '#333333',
        trendlines: {
            0: {type: 'exponential', color: '#e6e6e6', opacity: 1},
            1: {type: 'linear', color: '#ffff00', opacity: .6}
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chartContainer2'));
    chart.draw(data, options);
}


function drawScatterChart() {
    var data = google.visualization.arrayToDataTable([
        ['Age', 'Weight'],
        [ 8,      12],
        [ 9,      10],
        [ 1.5,      2],
        [ 4,      5.5],
        [ 11,     14],
        [ 4,      5],
        [ 3,      3.5],
        [ 6.5,    7],
        [ 13,    14.5],
        [15, 15]
    ]);

    var options = {
        animation: {startup: 'true', duration: 1000, easing: 'out'},
        title: 'Age vs. Weight comparison',
        titleTextStyle: {color: 'white'},
        chartArea: {width: '78%', left: 50},
        hAxis: {
          title: 'Age',
          textStyle: {color: 'white'},
          titleTextStyle: {color: 'white'},
          baselineColor: {color: 'white'},
          gridlines: {color: 'white'},
          minValue: 0, maxValue: 15
        },
        vAxis: {
          title: 'Weight',
          textStyle: {color: 'white'},
          titleTextStyle: {color: 'white'},
          baselineColor: {color: 'white'},
          gridlines: {color: 'white'},
          minValue: 0, maxValue: 15
        },
        legend: 'none',
        backgroundColor	: '#333333',
        colors: ['#ff00ff']
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chartContainer3'));
    chart.draw(data, options);
}

function drawDonut() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Watch TV', 2],         
        ['Commute',  2],
        ['Eat',      2],
        ['Sleep',    7]
    ]);

    var options = {
        animation: {startup: 'true', duration: 1000, easing: 'out'},
        title: 'My Daily Activities',
        titleTextStyle: {color: 'white'},
        chartArea: {width: '78%', left: 50},  
        pieHole: 0.5,
        pieSliceText: 'none',
        slices: [{color: '#33adff'}, {color: '#ff4da6'}, {color: '#ffff80'}, {color: '#a6ff4d'}, {color: '#ff8533'}],
        legend: {position: 'bottom', textStyle: {color: 'white'}},
        backgroundColor	: '#333333'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chartContainer4'));
    chart.draw(data, options);
}

function drawMultSeries() {
    var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Time of Day');
        data.addColumn('number', 'Motivation Level');
        data.addColumn('number', 'Energy Level');

    data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1, .25],
        [{v: [9, 0, 0], f: '9 am'}, 2, .5],
        [{v: [10, 0, 0], f:'10 am'}, 3, 1],
        [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
        [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
        [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
        [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
        [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
        [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
        [{v: [17, 0, 0], f: '5 pm'}, 10, 10]
    ]);

    var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        titleTextStyle: {color: 'white'},
        chartArea: {width: '78%', left: 50},  
        hAxis: {
            title: 'Time of Day',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            },
            textStyle: {color: 'white'},
            titleTextStyle: {color: 'white'},
            baselineColor: {color: 'white'},
            gridlines: {color: 'white'}
        },
        vAxis: {
            title: 'Rating (scale of 1-10)',
            textStyle: {color: 'white'},
            titleTextStyle: {color: 'white'},
            baselineColor: {color: 'white'},
            gridlines: {color: 'white'}
        },
        colors: ['#ffa64d', '#00b3b3'],
        legend: {position: 'bottom', textStyle: {color: 'white'}},
        backgroundColor	: '#333333'
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chartContainer5'));
    chart.draw(data, options);
}

function drawIntervalChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'x');
    data.addColumn('number', 'values');
    data.addColumn({id:'i0', type:'number', role:'interval'});
    data.addColumn({id:'i1', type:'number', role:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});
  
    data.addRows([
        [1, 100, 90, 110, 85, 96, 104, 120],
        [2, 120, 95, 130, 90, 113, 124, 140],
        [3, 130, 105, 140, 100, 117, 133, 139],
        [4, 90, 85, 95, 85, 88, 92, 95],
        [5, 70, 74, 63, 67, 69, 70, 72],
        [6, 30, 39, 22, 21, 28, 34, 40],
        [7, 80, 77, 83, 70, 77, 85, 90],
        [8, 100, 90, 110, 85, 95, 102, 110]]);
  
    // The intervals data as narrow lines (useful for showing raw source data)
    var options_lines = {
        title: 'Line Intervals',
        titleTextStyle: {color: 'white'},
        chartArea: {width: '78%', left: 50},  
        hAxis: {
            textStyle: {color: 'white'},
            titleTextStyle: {color: 'white'},
            baselineColor: {color: 'white'},
            gridlines: {color: 'white'}
        },
        vAxis: {
            textStyle: {color: 'white'},
            titleTextStyle: {color: 'white'},
            baselineColor: {color: 'white'},
            gridlines: {color: 'white'}
        },
        curveType: 'function',
        lineWidth: 4,
        intervals: { 'style':'line' },
        colors: ['#00b359'],
        legend: 'none',
        backgroundColor	: '#333333'
    };
  
    var chart_lines = new google.visualization.LineChart(document.getElementById('chartContainer6'));
    chart_lines.draw(data, options_lines);
}