import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modeling-data',
  templateUrl: './modeling-data.component.html',
  styleUrls: ['./modeling-data.component.scss']
})
export class ModelingDataComponent implements OnInit {

  histoData:any = {
    "start":1,
    "end":500,
    "addValue1":1,
    "addValue2":1.1,
    "trace1":{
      "opacity":0.5,
      "markerColor":"rgb(88, 94, 223)",
      "name":"positive class"
    },
    "trace2":{
      "opacity":0.6,
      "markerColor":"rgb(17, 48, 93)",
      "name":"nagative class"
    },
    "layout":{
      "barmode":"overlay",
      "title":"Density Plot of Predicted Probabilities",
   
      "yaxis":{
     
       "title":"Density"
      },
      "xaxis":{
        
        "title":"Prediction Probability"
       }
    }

  }
 
  data: any = {};
  constructor() { 
     this.data = this.histoData
  }


  ngOnInit(): void {
  }

}
