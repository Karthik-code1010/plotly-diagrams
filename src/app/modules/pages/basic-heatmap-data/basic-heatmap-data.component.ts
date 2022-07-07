import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-heatmap-data',
  templateUrl: './basic-heatmap-data.component.html',
  styleUrls: ['./basic-heatmap-data.component.scss']
})
export class BasicHeatmapDataComponent implements OnInit {


  heatmap:any = {
    "zvalues1":{
      "val1":53,
      "val2":157
    },
    "zvalues2":{
      "val1":267,
      "val2":90
    },
   "layout" :{
      "title":"Confusion Matrix",
      
      "yaxis":{
     
       "title":"Reference ",
      },
      "xaxis":{
      
        "title":"Predicted",
        //side: "top"
       }
    }
  }
 
  data: any = {};
  constructor() { 
     this.data = this.heatmap
  }

  ngOnInit(): void {
  }

}
