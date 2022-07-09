import { Component, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');
@Component({
  selector: 'app-densityplot',
  templateUrl: './densityplot.component.html',
  styleUrls: ['./densityplot.component.scss']
})
export class DensityplotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // this.densityPlot();

    this.densityPlotDropDown();
  }
//   densityPlot(){
//     var x = [0.5,10,1.5,20,2.5,30,3.5,40,4.5,5,50,5.5,60,6.5,7,7.5];
//     // var y = [0.025,0.2,0.015]
//   // for (var i = 0; i < 500; i ++) {
// 	// x[i] = Math.random();
//   //  }
//    console.log('density plot==>',x)

//   var trace = {
//     x: x,
//    // y: y,
//     type: 'histogram',
//     marker: {
//       color: 'rgb(102, 153, 153)',
//    },
//   };
//   var data = [trace];
//   var layout = {
//     title:"Density Plot for: hotalcount5smile",
   
//     yaxis:{
//       range: [0,0.025],
//      title:"KDE",
  
//     },
//     xaxis:{
//      range: [0,250],
//       title:"",
    
//      }
// ,
//      updatemenus: [{
//       yanchor: 'top',
//       buttons: [{
//           method: 'update',
//           args: ['visible', [true, false, false, false]],
//           label: 'hotalcount5smile',
       
//         },
//         {
//           method: 'update',
//           args: ['visible', [false, true, false, false]],
//           label: 'Two',
         
//         }
//       ],
//       direction:"down",
//       pad:{
//         l: 0,
//         r: 40,
//         b: 0,
//         t: 0,
//       },
//     }]
//   };
//   Plotly.newPlot('dencity', data,layout);
//   }
  densityPlotDropDown(){
    var trace1 = {
      x: [0.5,10,1.5,20,2.5,30,3.5,40,4.5,5,50,5.5,60,6.5,7,7.5],
   
      type: 'histogram',
      marker: {
        color: 'rgb(102, 153, 153)',
     },
      name: 'Trace 1',
    }
    
    var trace2 = {
      x: [10,20,30,50,70],
    
      type: 'histogram',
      marker: {
        color: 'rgb(255, 0, 0)',
       },
      name: 'Trace 2',
    }
    
    var frames = [{
        name: 'trace 1',
        data: [{
          x: trace1.x,
          marker: {
            color: trace1.marker.color,
           },
        }]
      },
      {
        name: 'trace 2',
        data: [{
          x: trace2.x,
          marker: {
            color: trace2.marker.color,
           },
        }]
      }
    ]
    //console.log(frames)
    var layout = {
      title:"Density Plot for: hotalcount5smile",
      yaxis: {
        range: [0,0.025],
        title:"KDE",
      },
      xaxis: {
        range: [0,250],
        title:"",
      },
      updatemenus: [{
        buttons: [{
            method: 'animate',
            args: [
              ['trace 1']
            ],
            label: 'One'
          },
          {
            method: 'animate',
            args: [
              ['trace 2']
            ],
            label: 'Two'
          }
        ],
        x :0.0,
      
        y :1.15,
        xanchor : 'left',
        direction:"right",
        pad:{
          l: 0,
          r: 0,
          b: 0,
          t: 0,
        },
      }]
    }
    
    Plotly.newPlot("dencityplot", [trace1], layout).then(function() {
      Plotly.addFrames('dencityplot', frames);
    });
  }


}
