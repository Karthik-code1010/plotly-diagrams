import { Component, Input, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');

@Component({
  selector: 'app-plotlydiagram',
  templateUrl: './plotlydiagram.component.html',
  styleUrls: ['./plotlydiagram.component.scss']
})
export class PlotlydiagramComponent implements OnInit {
 
   
  

@Input() data!: any;
  constructor() { 
 
  }
 
  @Input() currentMsgFromChild1ToChild2!: any [];
  ngOnInit(): void {
    console.log('plotly',this.data)
  this.featureSelection1();
  // this.featureSelection2();
  // this.featureSelection3();
  // this.featureSelection4();
  }
  featureSelection1() {
    var xarr = [];
    var yarr = [];
    // for(var i=0;i<this.data.values.length;i++){
    // xarr.push(this.data.values[i]["Features"]);    
    // yarr.push(this.data.values[i]["Importance"]);   
  
    // }
    // console.log(xarr);
    // console.log(yarr);
    console.log(this.data.features);
    console.log(this.data.importance);
    
    var data = [
      {
        y: this.data.features,
        x: this.data.importance,
       // text: ["4.17 below the mean", "4.17 below the mean", "0.17 below the mean", ],
        marker: {color: this.data.style.markerColor},
        type: "bar",
        orientation :this.data.style.orientation,
      }
    ];
    var layout = {
      title: this.data.layout.title,
      font: {family: this.data.layout.fontfamily},
      showlegend: this.data.layout.showlegend,
      width:this.data.layout.width,
      height: this.data.layout.height,
      margin: {
        l: this.data.layout.margin.l,
        r: this.data.layout.margin.r,
        b: this.data.layout.margin.b,
        t: this.data.layout.margin.t,
        pad: this.data.layout.margin.pad,
      },
     
      xaxis: {
        
        title:  this.data.layout.xaxis.title,
        tickangle:this.data.layout.xaxis.tickangle,
        tickmode: this.data.layout.xaxis.tickmode,
        automargin: this.data.layout.xaxis.automargin,
        titlefont: { size:this.data.layout.xaxis.titlefont.size, },
    
    },
      yaxis: {
        title: this.data.layout.yaxis.title,
        zeroline: this.data.layout.yaxis.zeroline,
        gridwidth: this.data.layout.yaxis.gridwidth,
      
        //ticks: 'inside',
          tickangle:this.data.layout.yaxis.tickangle,
          tickmode:this.data.layout.yaxis.tickmode,
          automargin: this.data.layout.yaxis.automargin,
          titlefont: { size: this.data.layout.yaxis.titlefont.size, },
      },
      bargap: this.data.layout.bargap,
    
  
    };
    
    
    // Display using Plotly
    Plotly.newPlot("myPlot1", data, layout);
  }
  // featureSelection2() {
  //   var xarr = [];
  //   var yarr = [];
  //   for(var i=0;i<this.featureArray2.length;i++){
  //   xarr.push(this.featureArray2[i]["Features"]);    
  //   yarr.push(this.featureArray2[i]["Importance"]);   
  
  //   }
  //   console.log(xarr);
  //   console.log(yarr);
    
  //   var data = [
  //     {
  //       x: xarr,
  //       y: yarr,
  //      // text: ["4.17 below the mean", "4.17 below the mean", "0.17 below the mean", ],
  //       marker: {color: "rgb(15, 174, 253)"},
  //       type: "bar"
  //     }
  //   ];
  //   var layout = {
  //     title: "Feature selection using PLS",
  //     font: {family: "Raleway, sans-serif"},
  //     showlegend: false,
     
  //     xaxis: {tickangle: -45},
  //     yaxis: {
  //       zeroline: false,
  //       gridwidth: 2
  //     },
  //     bargap: 0.05,
  
  //   };
    
    
  //   // Display using Plotly
  //   Plotly.newPlot("myPlot2", data, layout);
  // }
  // featureSelection3() {
  //   var xarr = [];
  //   var yarr = [];
  //   for(var i=0;i<this.featureArray3.length;i++){
  //   xarr.push(this.featureArray3[i]["Features"]);    
  //   yarr.push(this.featureArray3[i]["Importance"]);   
  
  //   }
  //   console.log(xarr);
  //   console.log(yarr);
    
  //   var data = [
  //     {
  //       x: xarr,
  //       y: yarr,
  //      // text: ["4.17 below the mean", "4.17 below the mean", "0.17 below the mean", ],
  //       marker: {color: "rgb(15, 174, 253)"},
  //       type: "bar"
  //     }
  //   ];
  //   var layout = {
  //     title: "Feature selection using Random Forest",
  //     font: {family: "Raleway, sans-serif"},
  //     showlegend: false,
     
  //     xaxis: {tickangle: -45},
  //     yaxis: {
  //       zeroline: false,
  //       gridwidth: 2
  //     },
  //     bargap: 0.05,
  
  //   };
    
    
  //   // Display using Plotly
  //   Plotly.newPlot("myPlot3", data, layout);
  // }
  // featureSelection4() {
  //   var xarr = [];
  //   var yarr = [];
  //   for(var i=0;i<this.featureArray3.length;i++){
  //   xarr.push(this.featureArray3[i]["Features"]);    
  //   yarr.push(this.featureArray3[i]["Importance"]);   
  
  //   }
  //   console.log(xarr);
  //   console.log(yarr);
    
  //   var data = [
  //     {
  //       x: xarr,
  //       y: yarr,
  //      // text: ["4.17 below the mean", "4.17 below the mean", "0.17 below the mean", ],
  //       marker: {color: "rgb(15, 174, 253)"},
  //       type: "bar"
  //     }
  //   ];
  //   var layout = {
  //     title: "Feature selection using XGBoost",
  //     font: {family: "Raleway, sans-serif"},
  //     showlegend: false,
     
  //     xaxis: {tickangle: -45},
  //     yaxis: {
  //       zeroline: false,
  //       gridwidth: 2
  //     },
  //     bargap: 0.05,
  
  //   };
    
    
  //   // Display using Plotly
  //   Plotly.newPlot("myPlot4", data, layout);
  // }
  
  

 
}
