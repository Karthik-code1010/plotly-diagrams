import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatter-plot-data',
  templateUrl: './scatter-plot-data.component.html',
  styleUrls: ['./scatter-plot-data.component.scss']
})
export class ScatterPlotDataComponent implements OnInit {
  scatterArray:any = {
    "trace1":{
      "xvalue": [0,0.0001,0.0012,0.0015,0.0012,0.058,0.22,0.43,0.52,0.62,0.75,0.82,1],
      "yvalue":[0,0.0011,0.0029,0.0505,0.2089,0.489,0.82,0.990,0.95,0.92,0.99,0.96,1],
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
      "xvalue": [0,0.0001,0.0012,0.0015,0.0012,0.058,0.22,0.43,0.52,0.62,0.75,0.82,1],
      "yvalue":[0,0.0011,0.0029,0.0505,0.2089,0.489,0.82,0.990,0.95,0.92,0.99,0.96,1],
      "fill":"tonexty",
      "line_color":"seagreen",
      "name": "AUC = %0.2f"
    },
  }
  data: any = {};
  constructor() { 
     this.data = this.scatterArray
  }

  ngOnInit(): void {
  }

}
