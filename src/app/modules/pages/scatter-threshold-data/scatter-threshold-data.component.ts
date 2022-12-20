import { Component, OnInit } from '@angular/core';
import thresholddata from '../../../service/thresholds.json'
import optimal_threshold from '../../../service/optimal_threshold_xgb.json'

@Component({
  selector: 'app-scatter-threshold-data',
  templateUrl: './scatter-threshold-data.component.html',
  styleUrls: ['./scatter-threshold-data.component.scss']
})
export class ScatterThresholdDataComponent implements OnInit {
scatterThres:any = {
        "trace1": {
          "x": [0.001, 0.021, 0.100, 0.200,0.300,0.400,0.500,0.600,1],
          "y": [0.000, 0.001, 0.100, 0.400,0.608,0.808,0.90,0.95,1],
    
          "line": {
            "color":"royalblue"
          },
          "name":"Specificity"
         
      },
      "trace2": {
        "x": [0.000, 0.109, 0.200, 0.300,0.350,0.400,0.450,0.550,0.600,0.700,0.800,0.900,1],
        "y": [1.000, 0.905, 0.970, 0.960,0.920,0.800,0.750,0.600,0.550,0.400,0.250,0.150,0],
        "line": {
          "color":"green"},
        "name":"Sensitivity"
       },
       "layout": {
        "shapes": 
          {
            "type": "line",
            "x0": 0.4,
            "y0": 0,
            "x1": 0.4,
            "y1": 1,
            "line": {
              "color": "rgb(55, 128, 191)",
              "width": 3,
              "dash":"dash"
            }
          },
        
        "xaxis": {
          "range": [0.1, 1],
          "title": "Threshold"},
        "yaxis": {
          "range": [0, 1],
           "title": "Sensitivity Vs Specificity"},
           "title": "House Prices vs Size"
    }
    
    
      }
  data: any = {};
  x1val:any = [];
  y1val:any = [];
  x2val:any = [];
  y2val:any = [];
  optimalVal:any;
  constructor() { 
    console.log('thresholddata',thresholddata);
    console.log('optimal_threshold',optimal_threshold);
    this.optimalVal = optimal_threshold[0]
    console.log(this.optimalVal.values);
   for(var i=0;i<thresholddata.length;i++){
      this.x1val.push(thresholddata[i].thresholdroc_values);
      this.y1val.push(thresholddata[i].tpr_values);
      this.x2val.push(thresholddata[i].thresholdroc_values);
      this.y2val.push(thresholddata[i].fpr2_values);


    }
    if(this.x1val.length > 0 && this.y1val.length > 0){
     var  scatterThresArray:any = {
        "trace1": {
          "x": this.x1val,
          "y": this.y1val,
    
          "line": {
            "color":"royalblue"
          },
          "name":"Specificity"
         
      },
      "trace2": {
        "x":this.x2val,
        "y":this.y2val,
        "line": {
          "color":"green"},
        "name":"Sensitivity"
       },
       "layout": {
        "shapes": 
          {
            "type": "line",
            "x0": this.optimalVal.values,
            "y0": 0,
            "x1": this.optimalVal.values,
            "y1": 1,
            "line": {
              "color": "rgb(55, 128, 191)",
              "width": 3,
              "dash":"dash"
            }
          },
        
        "xaxis": {
          "range": [0.1, 1],
          "title": "Threshold"},
        "yaxis": {
          "range": [0, 1],
           "title": "Sensitivity Vs Specificity"},
           "title": "House Prices vs Size"
    }
    
    
      }
      this.data = scatterThresArray
    }

   
  }

  ngOnInit(): void {
  }

}
