import { Component, Input, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {
 
  @Input() data!: any;
  constructor() { }

  ngOnInit(): void {

    this.scatterPlot();
  }

  scatterPlot(){
    var trace1 = {
      x: this.data.trace1.xvalue,
      y: this.data.trace1.yvalue,
      mode: 'lines',
      type: 'scatter',
      showlegend: this.data.trace1.showlegend,
    };
    
    var trace2 = {
      x: this.data.trace2.xvalue,
      y: this.data.trace2.yvalue,
      mode: 'lines',
      type: 'scatter',
      name: this.data.trace2.name,
      line: {
        dash:this.data.trace2.line.dash,
        color:this.data.trace2.line.color,
      }
    };
    
    var trace3 = {
      x: this.data.trace3.xvalue,
      y: this.data.trace3.yvalue,
      mode: 'lines+markers',
      type: 'scatter',
      fill:this.data.trace3.fill,
      line_color:this.data.trace3.line_color,
      name: this.data.trace3.name,
    };
    
    var data = [trace1,trace2,trace3 ];
      
    var layout = {
      title: "ROC",
    
      yaxis:{
     
       title:"Sensitivity",
      },
      xaxis:{
       // tickangle:  ,
        title:"1-Specificity",
        
       },
 
    };
    
    Plotly.newPlot('scatter', data,layout);
  }

}
