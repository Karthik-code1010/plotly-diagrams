import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feature-button',
  templateUrl: './feature-button.component.html',
  styleUrls: ['./feature-button.component.scss']
})
export class FeatureButtonComponent implements OnInit {
  featureArray:any = 
  {
 
  "layout":{
    "title":"Feature selection using Logistic Regression",
    "fontfamily":"Raleway, sans-serif",
    "showlegend":false,
    "bargap":0.05,
    "width":1000,
    "height":500,
    "margin": {
      "l": 200,
      "r": 50,
      "b": 100,
      "t": 100,
      "pad": 4
    },
    "xaxis": {
        
      "title": 'Importance',
      "tickangle":0,
      "tickmode": 'array',
      "automargin": true,
      "titlefont": { "size":20 },
  
  },
  "yaxis": {
    "title": 'Features',
    
    "zeroline":false,
    "gridwidth":2,
  
    //ticks: 'inside',
      "tickangle":0,
      "tickmode": "array",
      "automargin": true,
      "titlefont": { "size":20 },
  },
  },
  "style":{
    "orientation" :"h",
    "markerColor":"rgb(111, 147, 200)"
  },
  "features":["location_type","loyalty_pct","compet_occupancy"],
  "importance":[0.1465,0.2124,1.0000,],
 
}
featureArray2:any = 
{

  "layout":{
    "title":"Feature selection using PLS",
    "fontfamily":"Raleway, sans-serif",
    "showlegend":false,
    "bargap":0.05,
    "width":1000,
    "height":500,
    "margin": {
      "l": 200,
      "r": 50,
      "b": 100,
      "t": 100,
      "pad": 4
    },
    "xaxis": {
        
      "title": 'Importance',
      "tickangle":0,
      "tickmode": 'array',
      "automargin": true,
      "titlefont": { "size":20 },
  
  },
  "yaxis": {
    "title": 'Features',
    
    "zeroline":false,
    "gridwidth":2,
  
    //ticks: 'inside',
      "tickangle":0,
      "tickmode": "array",
      "automargin": true,
      "titlefont": { "size":20 },
  },
  },
  "style":{
    "orientation" :"h",
    "markerColor":"rgb(111, 147, 200)"
  },
"features":["avgdailyrate","location_type","compet_occupancy"],
"importance":[0.1361,0.1537,1.0000,],

}

featureArray3:any = 
{

  "layout":{
    "title":"Feature selection using Random Forest",
    "fontfamily":"Raleway, sans-serif",
    "showlegend":false,
    "bargap":0.05,
    "width":1000,
    "height":500,
    "margin": {
      "l": 200,
      "r": 50,
      "b": 100,
      "t": 100,
      "pad": 4
    },
    "xaxis": {
        
      "title": 'Importance',
      "tickangle":0,
      "tickmode": 'array',
      "automargin": true,
      "titlefont": { "size":20 },
  
  },
  "yaxis": {
    "title": 'Features',
    
    "zeroline":false,
    "gridwidth":2,
  
    //ticks: 'inside',
      "tickangle":0,
      "tickmode": "array",
      "automargin": true,
      "titlefont": { "size":20 },
  },
  },
  "style":{
    "orientation" :"h",
    "markerColor":"rgb(111, 147, 200)"
  },
"features":["avgdailyrate","loyalty_pct","compet_occupancy",],
"importance":[0.1852,0.2380,1.0000],

}
featureArray4:any = 
{

  "layout":{
    "title":"Feature selection using XGBoost",
    "fontfamily":"Raleway, sans-serif",
    "showlegend":false,
    "bargap":0.05,
    "width":1000,
    "height":500,
    "margin": {
      "l": 200,
      "r": 50,
      "b": 100,
      "t": 100,
      "pad": 4
    },
    "xaxis": {
        
      "title": 'Importance',
      "tickangle":0,
      "tickmode": 'array',
      "automargin": true,
      "titlefont": { "size":20 },
  
  },
  "yaxis": {
    "title": 'Features',
    
    "zeroline":false,
    "gridwidth":2,
  
    //ticks: 'inside',
      "tickangle":0,
      "tickmode": "array",
      "automargin": true,
      "titlefont": { "size":20 },
  },
  },
  "style":{
    "orientation" :"h",
    "markerColor":"rgb(111, 147, 200)"
  },
"features":["max_rooms_capacity","loyalty_pct","compet_occupancy",],
"importance":[0.0062,0.0128,1.0000,],


}
 
 
 
 
  data: any[] = [];
  constructor() { 
     this.data = this.featureArray3
  }

  ngOnInit(): void {
  }
  logisticRegression(val:any){
    if(val == 'logistic'){
      this.data = this.featureArray
      console.log(this.data);

    }
    if(val == 'pls'){
      this.data = this.featureArray2
      console.log(this.data);

    }
   
    if(val == 'random'){
      this.data = this.featureArray3
      console.log(this.data);

    }
   
    if(val == 'xgboot'){
      this.data = this.featureArray4
      console.log(this.data);

    }
   
   

  }

}
