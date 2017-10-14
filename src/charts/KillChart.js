import React from 'react';
 // eslint-disable-next-line
import {Line, Bar} from 'react-chartjs-2';
var ta = require('time-ago')();


const KillChart = (props) => {
    let temp_data = [];
    let temp_wins = [];
    let temp_dates = [];
    let kills = [];
    let deaths = [];
 // eslint-disable-next-line
    props.data.reverse().map( function(object, i) {
        kills.push(object.kills);
        deaths.push(object.deaths * -1);
        temp_data.push(object.kd_ratio);
        temp_wins.push(object.standing);
        temp_dates.push(ta.ago(object.game_date));
    });

    var pointBackgroundColors = [];
    for (var i = 0; i < temp_wins.length; i++) {
        if (temp_wins[i] === 0) {
            pointBackgroundColors.push("#f5f5f5");
        } else {
            pointBackgroundColors.push("#212121");
        }
    }

    const barData = {
        labels: temp_dates,
        datasets: [
            {
            label: 'Win/Loss',
            type:'line',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: '#eee',
            borderWidth: 1,
            backgroundColor: '#EC932F',
            pointBorderColor: '#212121',
            pointRadius: 3.5,
            pointBackgroundColor: pointBackgroundColors
          },
          {
            label: 'Deaths',
            backgroundColor: '#e74c3c',
            borderColor: '#e74c3c',
            borderWidth: 1,
            hoverBackgroundColor: '#e74c3c',
            hoverBorderColor: '#e74c3c',
            data: deaths
          },
          {
            label: 'Kills',
            backgroundColor: '#2ecc71',
            borderColor: '#2ecc71',
            borderWidth: 1,
            hoverBackgroundColor: '#2ecc71',
            hoverBorderColor: '#2ecc71',
            data: kills
          }
        ]
      };
     // eslint-disable-next-line
    const data = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
                type: 'line',
                fill: false,
                label: 'KD',
                data: temp_data,
                pointBackgroundColor: pointBackgroundColors,
                borderColor: "#A5A5AF",
                pointBorderColor: "white",
                pointRadius: 4,
                borderWidth: 1,
                showLine: true,
                stack: 'Stack 0'
            },
            {
                type: 'line',
                fill: false,
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                backgroundColor: "#EEEEEE",
                label: "",
                borderColor: "black",
                pointRadius: 0,
                borderWidth: 1,
                pointHoverRadius: 0,
                stack: 'Stack 0'
            }
        ]
    };

     // eslint-disable-next-line
    const options = {
        responsive: true,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    // console.log(temp_dates[tooltipItem.index]);
                    console.log(tooltipItem);
                    // return "K/D: " + tooltipItem.yLabel + " (" + $.timeago(temp_dates[tooltipItem.index]) + ")";
                    return "K/D: " + tooltipItem.yLabel + " (1 day ago)";
                }
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'Last 15 Games'
                },
                gridLines: {
                    display: false
                },
                display: false
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {                          
                    max: 10,
                    beginAtZero: false                            
                },
                display: false
            }]
        },
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Recent Games',
            position: 'bottom'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    };

    const barOptions = {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
            position: 'nearest',
            callbacks: {
                // title: function(tooltipItem, chart) {
                //     return tooltipItem.xLabel;
                // },
                label: function(tooltipItem, data) {
                    // console.log(temp_dates[tooltipItem.index]);
                    if (tooltipItem.datasetIndex === 0) {
                        // console.log("wins");
                        var k = kills[tooltipItem.index];
                        var d = deaths[tooltipItem.index];
                        var kd = Math.abs(parseFloat(k / d).toFixed(2));
                        if (temp_wins[tooltipItem.index] === 0) {
                            return "Win (" + kd + " K/D)";                            
                        } else {
                            return "Loss (" + kd + " K/D)";
                        }
                    } else if (tooltipItem.datasetIndex === 1) {
                        // console.log("deaths");
                        return "Deaths: " + Math.abs(tooltipItem.yLabel);
                    } else {
                        // console.log("kills");
                        return "Kills: " + tooltipItem.yLabel;
                    }
                    // console.log(tooltipItem);
                    
                    // return "K/D: " + tooltipItem.yLabel + " (" + $.timeago(temp_dates[tooltipItem.index]) + ")";
                    
                },
                // filter: function (tooltipItem) {
                //     return tooltipItem.datasetIndex === 0;
                // }
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'Last 15 Games'
                },
                stacked: true,
                gridLines: {
                    display: false
                },
                display: false
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                stacked: false,
                ticks: {                          
                    max: 10,
                    beginAtZero: false                            
                },
                display: false
            }]
        },
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Recent Games',
            position: 'bottom'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        plugins: {
            datalabels: {
                color: 'white',
                display: function(context) {
                    return context.dataset.data[context.dataIndex] > 15;
                },
                font: {
                    weight: 'bold'
                },
                formatter: Math.round
            }
        }
    };
     // eslint-disable-next-line
    const plugins = [{
        afterDraw: (chartInstance, easing) => {
            const ctx = chartInstance.chart.ctx;
            ctx.fillText("This text drawn by a plugin", 100, 100);
        }
    }];
        
    
    return (
        // <Line key={props.data.key} data={data} options={options}/>
        <Bar key={props.data.key} data={barData} options={barOptions}/>
    )
}


export default KillChart;