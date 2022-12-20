import { Component, OnInit } from '@angular/core';
import cm_data from '../../../service/heatmap.json';
@Component({
  selector: 'app-basic-heatmap-data',
  templateUrl: './basic-heatmap-data.component.html',
  styleUrls: ['./basic-heatmap-data.component.scss']
})
export class BasicHeatmapDataComponent implements OnInit {


 
 
  data: any = {};
  confussionMatrix:any = [];
 
   row1:any;
   row2:any;
  
  constructor() { 
    console.log('cm_data',cm_data)
    this.confussionMatrix = cm_data;
this.row1 = this.confussionMatrix[0] 
this.row2 = this.confussionMatrix[1] 
console.log('this.row1',this.row1)
console.log('this.row2',this.row2);
var heatmap:any = {
  "zvalues1":{
    "val1":this.row2.column1,
    "val2":this.row2.column2,
  },
  "zvalues2":{
    "val1":this.row1.column1,
    "val2":this.row1.column2,
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
    if(this.confussionMatrix.length > 0){
      this.data = heatmap
    }
    
  }

  ngOnInit(): void {
  }

}
