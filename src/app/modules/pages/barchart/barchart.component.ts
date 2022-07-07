import { Component, Input, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  barmap:any = [
    {
 
  "data":[
    {
      "name":"Training",
      "color":"rgb(100, 149, 237)",
      "opacity": 0.7,
      "xvalue":[19,14,22,14,16,19,15,14,10,12,12,16],
      "yvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    
      
    

    },
    {
      "name":"Validation",
      "color":"rgb(0, 0, 255)",
      "opacity": 0.5,
    
      "xvalue":[20,14,25,16,18,22,19,15,12,16,14,17],
      "yvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
   
     

    }
  ],
    
 
    

    },
    {
 
      "data":[
        {
          "name":"Training",
          "color":"red",
          "opacity": 0.7,
          "xvalue":[19,14,22,14,16,19,15,14,10,12,12,16],
          "yvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        
          
        
    
        },
        {
          "name":"Validation",
          "color":"green",
          "opacity": 0.5,
        
          "xvalue":[20,14,25,16,18,22,19,15,12,16,14,17],
          "yvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
       
         
    
        }
      ],
        
     
        
    
        },

]
 

  constructor() { }
  @Input() data!: any;
  ngOnInit(): void {
    this.barChart();
  }
   makeTrace(i:any) {
    return this.barmap[i].data;
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
    var trace11 = {
      x: this.data.trace1.xvalue,
      y:this.data.trace1.yvalue,
      type: 'bar',
      name: this.data.trace1.name,
      orientation: 'h',
      marker: {
        color: 'red',
        opacity: this.data.trace1.opacity,
      }
    };
    
    var trace21 = {
      x: this.data.trace2.xvalue,
      y:this.data.trace2.yvalue,
      type: 'bar',
      name: this.data.trace2.name,
      orientation: 'h',
      marker: {
        color: 'green',
        opacity: this.data.trace2.opacity
      }
    };
    
    var data1 = [
     trace1 ,trace2,
    ];
    var data2 = [
      trace11 ,trace21,
     ];
    
    var layout = {
      title: this.data.layout.title,
      width:1000,
      height: 700,
      margin: {
        l: 100,
        r: 50,
        b: 100,
        t: 100,
       
      },
    
      yaxis:{
     
       title:this.data.layout.yaxis.title,
      },
      xaxis:{
        tickangle: this.data.layout.xaxis.tickangle,
        title:this.data.layout.xaxis.title,
        //side: "top"
       },
      barmode: this.data.barmode,



      updatemenus: [{
        yanchor: 'top',
        buttons: [{
            method: 'update',
            args: [
              [data1]
            ],
            label: 'Accuracy'
          },
          {
            method: 'update',
            args: [
              [data2]
            ],
            label: 'Two'
          }
        ],
        direction:"down",
        pad:{
          l: 0,
          r: 180,
          b: 0,
          t: 0,
        },
      }]

    };
    
    Plotly.newPlot('myDiv3', data1, layout);
    
  }

}
