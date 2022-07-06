import { Component, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {
  scatterArray:any = {
    "trace1":{
      "xvalue": [0.0,0.087,0.22,0.43,0.52,0.62,0.75,0.82,1],
      "yvalue":[0,0.11,0.52,0.70,0.85,0.92,0.98,0.96,1],
      "showlegend":false,
      "name":"",
    },
    "trace2":{
      "xvalue": [0,1],
      "yvalue":[0,1],
      "showlegend":false,
      "name":"Naive Prediction",
      "line": {"dash":"dash","color":"navy"}
    },
    "trace3" : {
      "xvalue": [0.0,0.087,0.22,0.43,0.52,0.62,0.75,0.82,1],
      "yvalue": [0,0.11,0.52,0.70,0.85,0.92,0.98,0.96,1],
   
      "fill":"tonexty",
      "line_color":"seagreen",
      "name": "AUC = %0.2f"
    },
  }

  constructor() { }

  ngOnInit(): void {
    this.scatterPlot();
  }

  scatterPlot(){
    var trace1 = {
      x: this.scatterArray.trace1.xvalue,
      y: this.scatterArray.trace1.yvalue,
      mode: 'lines',
      type: 'scatter',
      showlegend: this.scatterArray.trace1.showlegend,
    };
    
    var trace2 = {
      x: this.scatterArray.trace2.xvalue,
      y: this.scatterArray.trace2.yvalue,
      mode: 'lines',
      type: 'scatter',
      name: this.scatterArray.trace2.name,
      line: {
        dash:this.scatterArray.trace2.line.dash,
        color:this.scatterArray.trace2.line.color,
      }
    };
    
    var trace3 = {
      x: this.scatterArray.trace3.xvalue,
      y: this.scatterArray.trace3.yvalue,
      mode: 'lines+markers',
      type: 'scatter',
      fill:this.scatterArray.trace3.fill,
      line_color:this.scatterArray.trace3.line_color,
      name: this.scatterArray.trace3.name,
    };
    
    var data = [trace1,trace2,trace3 ];
    
    Plotly.newPlot('scatter', data);
  }

}
