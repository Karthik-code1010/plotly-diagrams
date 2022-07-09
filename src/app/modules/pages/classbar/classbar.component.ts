import { Component, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');
@Component({
  selector: 'app-classbar',
  templateUrl: './classbar.component.html',
  styleUrls: ['./classbar.component.scss']
})
export class ClassbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // this.classbardiagram();

    this.demoDropDown();
  }
  // classbardiagram(){
  //   var data1 = [{
  //     type: 'bar',
  //     x: [60, 35,],
  //     y: ['class 0', 'class 1',],
  //     orientation: 'h',
  //     marker:{
  //       color: ['rgb(0, 0, 102)', 'rgb(0, 0, 255)',]
  //     },
  //   }];
  //   var data2 = [{
  //     type: 'bar',
  //     x: [60, 35,],
  //     y: ['class 0', 'class 1',],
  //     orientation: 'h',
  //     marker:{
  //       color: ['rgb(102, 255, 102)', 'rgb(255, 0, 0)',]
  //     },
  //   }];

  //   var frames = [{
  //     name: 'trace 1',
  //     data: [data1]
  //   },
  //   {
  //     name: 'trace 2',
  //     data: [data2]
  //   }
  // ]
  //   var layout = {
  //     title:"Class Distribution of Validation data",
     
  //     yaxis:{
      
  //      title:"Class",
    
  //     },
  //     xaxis:{
  //       range: [0,60],
  //       title:"Percentage of Class Distribution",
  //       //tickformat:".0%",
  //       ticksuffix:"%",
  //      },
  //      updatemenus: [{
  //       yanchor: 'top',
  //       buttons: [{
  //           method: 'update',
  //           args: [
  //             ['trace 1']
  //           ],
  //           label: 'Validation Data',
         
  //         },
  //         {
  //           method: 'update',
  //           args: [
  //             ['trace 2']
  //           ],
  //           label: 'Data set 2',
           
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
    
  //  // Plotly.newPlot('classbar', data1,layout);
  //   Plotly.newPlot("classbar", data1, layout).then(function() {
  //     Plotly.addFrames('classbar', frames);
  //   });
  // }
  demoDropDown(){
    var trace1 = {
      x: [60, 35],
      y: ['class 0', 'class 1'],
      type: 'bar',
      orientation: 'h',
      marker:{
        color: ['rgb(0, 0, 102)', 'rgb(0, 0, 255)',]
      },
   
      name: 'Trace 1',
    }
    
    var trace2 = {
      x: [10, 25],
      y: ['class 0', 'class 1'],
      type: 'bar',
      orientation: 'h',
      marker:{
        color: ['rgb(102, 255, 102)', 'rgb(255, 0, 0)',]
      },
     
      name: 'Trace 2',
    }
    
    var frames = [{
        name: 'trace 1',
        data: [{
          x: trace1.x,
          y: trace1.y,
          orientation:trace1.orientation,
          marker:{
            color:trace1.marker.color,
          }

        }]
      },
      {
        name: 'trace 2',
        data: [{
          x: trace2.x,
          y: trace2.y,
          orientation:trace2.orientation,
          marker:{
            color:trace2.marker.color,
          }
        }]
      }
    ]
    //console.log(frames)
    var layout = {
      title:"Class Distribution of Validation data",
      yaxis: {
        title:"Class",
      },
      xaxis: {
        range: [0,60],
        title:"Percentage of Class Distribution",
        //tickformat:".0%",
        ticksuffix:"%",
      },
   
      updatemenus: [{
        buttons: [{
            method: 'animate',
            args: [
              ['trace 1']
            ],
            label: 'Validation Data'
          },
          {
            method: 'animate',
            args: [
              ['trace 2']
            ],
            label: 'Two'
          }
        ],
        //yanchor : 'top',
        x :0.0,
      
        y :1.15,
        xanchor : 'left',
        direction:"right",
        pad:{
          l: 0,
          r: 0,
          b: 200,
          t: 0,
        },
      }]
    }
    
    Plotly.newPlot("chart", [trace1], layout).then(function() {
      Plotly.addFrames('chart', frames);
    });
  }

}
