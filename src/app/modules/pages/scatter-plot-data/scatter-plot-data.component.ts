import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import sjson from '../../../service/scatterJson.json'

@Component({
  selector: 'app-scatter-plot-data',
  templateUrl: './scatter-plot-data.component.html',
  styleUrls: ['./scatter-plot-data.component.scss']
})
export class ScatterPlotDataComponent implements OnInit {

  data: any = {};
  xarray:any = [];
  yarray:any = [];
  scatterJsonData:any = [];
  scatterArray:any = {
    "trace1":{
      "xvalue": this.xarray,
      "yvalue":this.yarray,
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
      "xvalue": this.xarray,
      "yvalue":this.yarray,
      "fill":"tonexty",
      "line_color":"seagreen",
      "name": "AUC = %0.2f"
    },
    "layout" :{
      "title": "ROC",
    
      "yaxis":{
     
       "title":"Sensitivity",
      },
      "xaxis":{
       // tickangle:  ,
        "title":"1-Specificity",
        
       },
 
    }
  }
  constructor(private dataservice:DataService) { 
     
console.log('sjson-->',sjson)
  for(var i=0;i<sjson.length;i++){
   this.xarray.push(sjson[i].fpr_values);  
   this.yarray.push(sjson[i].tpr_values);

  }
  if(this.xarray.length > 0 && this.yarray.length > 0){
    this.data = this.scatterArray
  }
  
  }

  ngOnInit(): void {
  }

}
