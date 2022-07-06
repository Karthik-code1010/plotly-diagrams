import { Component, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');

@Component({
  selector: 'app-basic-heatmap',
  templateUrl: './basic-heatmap.component.html',
  styleUrls: ['./basic-heatmap.component.scss']
})
export class BasicHeatmapComponent implements OnInit {

  heatmap:any = {
    "zvalues1":{
      "val1":1,
      "val2":20
    },
    "zvalues2":{
      "val1":20,
      "val2":1
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.basicHeatMap();
  }
  basicHeatMap(){
    var data = [
      {
        z: [[this.heatmap.zvalues1.val1, this.heatmap.zvalues1.val2], [this.heatmap.zvalues2.val1, this.heatmap.zvalues2.val2]],
        type: 'heatmap'
      }
    ];
    
    Plotly.newPlot('myDiv2', data);

  }

}
