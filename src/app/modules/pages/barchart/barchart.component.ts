import { Component, Input, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {


  constructor() { }
  @Input() data!: any;
  ngOnInit(): void {
    this.barChart();
  }
  barChart(){
    console.log(this.data);
   

    var trace1 = {
      x: this.data.trace1.xvalue,
      y:this.data.trace1.yvalue,
      type: 'bar',
      name: this.data.trace1.name,
      orientation: 'h',
      marker: {
        color: this.data.trace1.color,
        opacity: this.data.trace1.opacity,
      }
    };
    
    var trace2 = {
      x: this.data.trace2.xvalue,
      y:this.data.trace2.yvalue,
      type: 'bar',
      name: this.data.trace2.name,
      orientation: 'h',
      marker: {
        color: this.data.trace2.color,
        opacity: this.data.trace2.opacity
      }
    };
    
    var data = [
      trace1, trace2
    ];
    
    var layout = {
      title: this.data.layout.title,
    
      yaxis:{
     
       title:this.data.layout.yaxis.title,
      },
      xaxis:{
        tickangle: this.data.layout.xaxis.tickangle,
        title:this.data.layout.xaxis.title,
        //side: "top"
       },
      barmode: this.data.barmode,
    };
    
    Plotly.newPlot('myDiv3', data, layout);
    
  }

}
