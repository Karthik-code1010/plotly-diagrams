import { Component, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');

@Component({
  selector: 'app-modeling',
  templateUrl: './modeling.component.html',
  styleUrls: ['./modeling.component.scss']
})
export class ModelingComponent implements OnInit {

  histoData:any = {
    "start":1,
    "end":500,
    "addValue1":1,
    "addValue2":1.1,
    "trace1":{
      "opacity":0.5,
      "markerColor":"green",
    },
    "trace2":{
      "opacity":0.6,
      "markerColor":"red",
    },
    "layout":{
      "barmode":"overlay"
    }

  }

  constructor() { }

  ngOnInit(): void {

    this.histogram();
  }
  histogram(){
    console.log(this.histoData)
    var x1 = [];
    var x2 = [];
    for (var i = this.histoData.start; i < this.histoData.end; i++)
    {
     var k = Math.random();
      x1.push(Math.random() + this.histoData.addValue1);
      x2.push(Math.random() + this.histoData.addValue2);
    }
    var trace1 = {
      x: x1,
      type: "histogram",
      opacity: this.histoData.trace1.opacity,
      marker: {
         color:this.histoData.trace1.markerColor,
      },
    };
    var trace2 = {
      x: x2,
      type: "histogram",
      opacity:  this.histoData.trace2.opacity,
      marker: {
         color: this.histoData.trace2.markerColor,
      },
    };
    
    var data = [trace1, trace2];
    var layout = {barmode:this.histoData.layout.barmode,};
    Plotly.newPlot('myDiv1', data, layout);
    
  }

}
