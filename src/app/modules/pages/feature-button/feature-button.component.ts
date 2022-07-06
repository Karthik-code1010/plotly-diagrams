import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feature-button',
  templateUrl: './feature-button.component.html',
  styleUrls: ['./feature-button.component.scss']
})
export class FeatureButtonComponent implements OnInit {
  featureArray:any = 
  {
  "title":"Feature selection using Logistic Regression",
  "style":{
    "fontfamily":"Raleway, sans-serif",
    "showlegend":false,
    "tickangle": -45,
    "zeroline":false,
    "gridwidth":2,
    "bargap":0.05,
    "markerColor":"rgb(15, 1, 253)"
  },
  "features":["compet_occupancy","loyalty_pct","location_type",],
  "importance":[1.0000,0.2124,0.1465],
  // "values" : [
  //   {
  //     "Features": "compet_occupancy",
  //     "Importance": 1.0000
  // },
  // {
  //     "Features": "loyalty_pct",
  //     "Importance": 0.2124
  // },
  // {
  //   "Features": "location_type",
  //   "Importance": 0.1465
  // },
  // ]
}
featureArray2:any = 
{
"title":"Feature selection using PLS",
"style":{
  "fontfamily":"Raleway, sans-serif",
  "showlegend":false,
  "tickangle": -45,
  "zeroline":false,
  "gridwidth":2,
  "bargap":0.05,
  "markerColor":"rgb(128, 190, 223)"
},
"features":["compet_occupancy","location_type","avgdailyrate",],
"importance":[1.0000,0.1537,0.1361],
// "values" :[
//   {
//       "Features": "compet_occupancy",
//       "Importance": 1.0000
//   },
//   {
//       "Features": "location_type",
//       "Importance": 0.1537
//   },
//   {
//     "Features": "avgdailyrate",
//     "Importance": 0.1361
// },
// ]
}

featureArray3:any = 
{
"title":"Feature selection using Random Forest",
"style":{
  "fontfamily":"Raleway, sans-serif",
  "showlegend":false,
  "tickangle": -45,
  "zeroline":false,
  "gridwidth":2,
  "bargap":0.05,
  "markerColor":"rgb(10, 13, 223)"
},
"features":["compet_occupancy","loyalty_pct","avgdailyrate",],
"importance":[1.0000,0.2380,0.1852],
// "values" :[
//   {
//       "Features": "compet_occupancy",
//       "Importance": 1.0000
//   },
//   {
//       "Features": "loyalty_pct",
//       "Importance": 0.2380
//   },
//   {
//     "Features": "avgdailyrate",
//     "Importance": 0.1852
// },
// ]
}
featureArray4:any = 
{
"title":"Feature selection using XGBoost",
"style":{
  "fontfamily":"Raleway, sans-serif",
  "showlegend":false,
  "tickangle": 0,
  "zeroline":false,
  "gridwidth":2,
  "bargap":0.05,
  "markerColor":"rgb(143, 138, 223)"
},
"features":["compet_occupancy","loyalty_pct","max_rooms_capacity",],
"importance":[1.0000,0.0128,0.0062],

// "values" :[
//   {
//       "Features": "compet_occupancy",
//       "Importance": 1.0000
//   },
//   {
//       "Features": "loyalty_pct",
//       "Importance": 0.0128
//   },
//   {
//     "Features": "max_rooms_capacity",
//     "Importance": 0.0062
// },
// ]
}
 
 
 
 
  data: any[] = [];
  constructor() { 
     this.data = this.featureArray2
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
