import { Component, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  barmap:any = {
    "title":"2013 Sales Report",
    "xaxis": {
      "tickangle": -45
    },
    "barmode": "group",
    "trace1":{
      "name":"Primary Product",
      "color":"rgb(49,130,189)",
      "opacity": 0.7,
      "xvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
       "yvalue":[20,14,25,16,18,22,19,15,12,16,14,17],
      // "xyValue":[
      //   {
      //     "xvalue":"Jan",
      //     "yvalue":20
      //   },
      //   {
      //     "xvalue":"Feb",
      //     "yvalue":14
      //   },
      //   {
      //     "xvalue":"Mar",
      //     "yvalue":25
      //   },
      //   {
      //     "xvalue":"Apr",
      //     "yvalue":16
      //   },
      //   {
      //     "xvalue":"May",
      //     "yvalue":18
      //   },
      //   {
      //     "xvalue":"Jun",
      //     "yvalue":22
      //   },
      //   {
      //     "xvalue":"Jul",
      //     "yvalue":19
      //   },
      //   {
      //     "xvalue":"Aug",
      //     "yvalue":15
      //   },
      //   {
      //     "xvalue":"Sep",
      //     "yvalue":12
      //   },
      //   {
      //     "xvalue":"Oct",
      //     "yvalue":16
      //   },
      //   {
      //     "xvalue":"Nov",
      //     "yvalue":14
      //   },
      //   {
      //     "xvalue":"Dec",
      //     "yvalue":17
      //   },
      // ]
    

    },
    "trace2":{
      "name":"Secondary Product",
      "color":"rgb(204,204,204)",
      "opacity": 0.5,
      "xvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      "yvalue":[19,14,22,14,16,19,15,14,10,12,12,16],
      // "xyValue":[
      //   {
      //     "xvalue":"Jan",
      //     "yvalue":19
      //   },
      //   {
      //     "xvalue":"Feb",
      //     "yvalue":14
      //   },
      //   {
      //     "xvalue":"Mar",
      //     "yvalue":22
      //   },
      //   {
      //     "xvalue":"Apr",
      //     "yvalue":14
      //   },
      //   {
      //     "xvalue":"May",
      //     "yvalue":16
      //   },
      //   {
      //     "xvalue":"Jun",
      //     "yvalue":19
      //   },
      //   {
      //     "xvalue":"Jul",
      //     "yvalue":15
      //   },
      //   {
      //     "xvalue":"Aug",
      //     "yvalue":14
      //   },
      //   {
      //     "xvalue":"Sep",
      //     "yvalue":10
      //   },
      //   {
      //     "xvalue":"Oct",
      //     "yvalue":12
      //   },
      //   {
      //     "xvalue":"Nov",
      //     "yvalue":12
      //   },
      //   {
      //     "xvalue":"Dec",
      //     "yvalue":16
      //   },
      // ]
     

    }
    

  }

  constructor() { }

  ngOnInit(): void {
    this.barChart();
  }
  barChart(){
    console.log(this.barmap);
    // console.log('xyvalue',this.barmap.trace1.xyValue);
    // var xarr = [];
    // var yarr = [];
    // for(var i=0;i<this.barmap.trace1.xyValue.length;i++){
    // xarr.push(this.barmap.trace1.xyValue[i]["xvalue"]);    
    // yarr.push(this.barmap.trace1.xyValue[i]["yvalue"]);   
  
    // }

    // console.log(xarr);
    // console.log(yarr);
    // var xarr2 = [];
    // var yarr2 = [];
    // for(var i=0;i<this.barmap.trace2.xyValue.length;i++){
    // xarr2.push(this.barmap.trace2.xyValue[i]["xvalue"]);    
    // yarr2.push(this.barmap.trace2.xyValue[i]["yvalue"]);   
  
    // }

    // console.log(xarr2);
    // console.log(yarr2);

    var trace1 = {
      x: this.barmap.trace1.xvalue,
      y:this.barmap.trace1.yvalue,
      type: 'bar',
      name: this.barmap.trace1.name,
      marker: {
        color: this.barmap.trace1.color,
        opacity: this.barmap.trace1.opacity,
      }
    };
    
    var trace2 = {
      x: this.barmap.trace2.xvalue,
      y:this.barmap.trace2.yvalue,
      type: 'bar',
      name: this.barmap.trace2.name,
      marker: {
        color: this.barmap.trace2.color,
        opacity: this.barmap.trace2.opacity
      }
    };
    
    var data = [trace1, trace2];
    
    var layout = {
      title: this.barmap.title,
      xaxis: {
        tickangle:  this.barmap.xaxis.tickangle,
      },
      barmode: this.barmap.barmode,
    };
    
    Plotly.newPlot('myDiv3', data, layout);
    
  }

}
