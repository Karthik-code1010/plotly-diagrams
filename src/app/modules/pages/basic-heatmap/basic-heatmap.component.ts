import { Component, Input, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');

@Component({
  selector: 'app-basic-heatmap',
  templateUrl: './basic-heatmap.component.html',
  styleUrls: ['./basic-heatmap.component.scss']
})
export class BasicHeatmapComponent implements OnInit {

  @Input() data!: any;
  constructor() { }

  ngOnInit(): void {
    console.log('heatmap data===>',this.data)
    this.basicHeatMap();
  }
  basicHeatMap(){
    var data = [
      {
        z: [[this.data.zvalues1.val1, this.data.zvalues1.val2], [this.data.zvalues2.val1, this.data.zvalues2.val2]],
        text: [[this.data.zvalues1.val1, this.data.zvalues1.val2], [this.data.zvalues2.val1, this.data.zvalues2.val2]],
        texttemplate:"%{text}",
        // font: {
        //   family: 'Arial',
        //   size: 12,
        //   color: 'white'
        // },
        font: {
          color: "white"
        },
        showarrow: false,
        type: 'heatmap',
        //colorscale: [[53,157, 'rgb(172,218,204)'], [157,90, 'rgb(17,61,111)'],]
       colorscale: 'YlGnBu',
      
        
      }
    ];
    var layout = {
      title:this.data.layout.title,
     
      xaxis: {
         
        title:this.data.layout.xaxis.title,
        autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
      },
      yaxis: {
        
       title:this.data.layout.yaxis.title,
        autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
      }
      
    
    };
    
    
    Plotly.newPlot('myDiv2', data,layout,{showSendToCloud: true});

  }

}
