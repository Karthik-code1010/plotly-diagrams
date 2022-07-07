import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatter-plot-data',
  templateUrl: './scatter-plot-data.component.html',
  styleUrls: ['./scatter-plot-data.component.scss']
})
export class ScatterPlotDataComponent implements OnInit {
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
  data: any = {};
  constructor() { 
     this.data = this.scatterArray
  }

  ngOnInit(): void {
  }

}
