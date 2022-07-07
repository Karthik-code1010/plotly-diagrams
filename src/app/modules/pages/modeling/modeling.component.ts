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
    var x1 = [];
    var x2 = [];
    for (var i = this.data.start; i < this.data.end; i++)
    {
     var k = Math.random();
      x1.push(Math.random() + this.data.addValue1);
      x2.push(Math.random() + this.data.addValue2);
    }
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
       //range: [0,4]
       title:this.data.layout.yaxis.title,
      },
      xaxis:{
        //range: [0,1]
        title:this.data.layout.xaxis.title,
       }
    };
    Plotly.newPlot('myDiv1', data, layout);
    
  }

}
