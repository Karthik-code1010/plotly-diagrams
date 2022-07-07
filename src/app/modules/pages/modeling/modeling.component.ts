import { Component, Input, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');

@Component({
  selector: 'app-modeling',
  templateUrl: './modeling.component.html',
  styleUrls: ['./modeling.component.scss']
})
export class ModelingComponent implements OnInit {

 
  
@Input() data!: any;

  constructor() { }

  ngOnInit(): void {
console.log('component data ==>>>>>>',this.data);
    this.histogram();
  }
  histogram(){
    console.log(this.data)
    var x1 = [0.002789,0.060789,0.00983,0.82341,0.23457,0.9672,0.9563,0.8672,0.75675,0.892,1.2,1.3,1.4,3.1,3.2,3.3,3.4,3.9,4,3.6,3.3,3.1,2.9,2.8,2.5];
    var x2 = [0,0.29,0.03456,0.567,0.5566,0.456,0.678,0.5678,0.678,0.789,0.897,0.5667,0.789,0.678,0.678,0.89,0.898,0.987,0.6785,0.6789,0.9898];
    // for (var i = this.data.start; i < this.data.end; i++)
    // {
    //  var k = Math.random();
    //   x1.push(Math.random() + this.data.addValue1);
    //   x2.push(Math.random() + this.data.addValue2);
    // }
    console.log('x1==>',x1);
    console.log('x2==>',x2);
    var trace1 = {
      x: x1,
      type: "histogram",
      name:this.data.trace1.name,
      opacity: this.data.trace1.opacity,
      marker: {
         color:this.data.trace1.markerColor,
      },
    };
    var trace2 = {
      x: x2,
      type: "histogram",
      name:this.data.trace2.name,
      opacity:  this.data.trace2.opacity,
      marker: {
         color: this.data.trace2.markerColor,
      },
    };
    
    var data = [trace1, trace2];
    var layout = {
      title:this.data.layout.title,
      barmode:this.data.layout.barmode,
      yaxis:{
      // range: [0,4],
       title:this.data.layout.yaxis.title,
      },
      xaxis:{
        range: [0,1],
        title:this.data.layout.xaxis.title,
       }
    };
    Plotly.newPlot('myDiv1', data, layout);
    
  }

}
