import { Component, Input, OnInit } from '@angular/core';
import { max, min } from 'rxjs';
var Plotly:any = require('plotly.js-dist');
@Component({
  selector: 'app-scatter-threshold',
  templateUrl: './scatter-threshold.component.html',
  styleUrls: ['./scatter-threshold.component.scss']
})
export class ScatterThresholdComponent implements OnInit {
 
  @Input() data!: any;
  constructor() { }

  ngOnInit(): void {
    this.scatterThreshold();

    this.scatterThreshold2();

    this.scatterthres3();
    this.scatterThreshold4();

    this.sctterThreshLine();
    this.scatterThresFill();
  }
  scatterThreshold(){
    var trace1 = {
      x: this.data.trace1.x,
      y:  this.data.trace1.y,
      type: 'scatter',
      mode: 'lines',
      line: {
        color:this.data.trace1.line.color,
      },
      name:this.data.trace1.name,
     
  };
  var trace2 = {
    x: this.data.trace2.x,
    y: this.data.trace2.y,
    type: 'scatter' ,
    line: {
      color:this.data.trace2.line.color,
    },
    name:this.data.trace2.name,
};
  
  var layout = {
      shapes: [
        {
          type: this.data.layout.shapes.type,
          x0: this.data.layout.shapes.x0,
          y0: this.data.layout.shapes.y0,
          x1: this.data.layout.shapes.x1,
          y1:this.data.layout.shapes.y1,
          line: {
            color: this.data.layout.shapes.line.color,
            width: this.data.layout.shapes.line.width,
            dash:this.data.layout.shapes.line.dash,
          }
        },
      ],
      xaxis: {
        range:this.data.layout.xaxis.range, 
        title: this.data.layout.xaxis.title, 
      },
      yaxis: {
        range: this.data.layout.yaxis.range, 
        title: this.data.layout.yaxis.title, 
      },
      title: this.data.layout.title
  }
  Plotly.newPlot('scatterThresh',[trace1,trace2],layout);
  }


  
  scatterThreshold2(){
    var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [{
  x: xArray,
  y: yArray,
  mode: "lines",
  type: "scatter"
}];

// Define Layout
var layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},
  title: "House Prices vs Size"
};

// Display using Plotly
Plotly.newPlot("scatterThresh2", data, layout);
  }
  scatterthres3(){
  // mousewheel or two-finger scroll zooms the plot

var trace1 = {
  x:['2020-10-04', '2021-11-04', '2023-12-04'],
  y: [90, 40, 60],
  type: 'scatter'
};

var data = [trace1];

var layout = {
  title: 'Scroll and Zoom',
  showlegend: false
};

Plotly.newPlot('scatterThresh3', data, layout, {scrollZoom: true});

  }



  scatterThreshold4(){
    var trace1 = {
      x: [0, 1, 2, 3, 4],
      y: [1, 5, 3, 7, 5],
      mode: 'lines+markers',
      type: 'scatter'
    };
    
    var trace2 = {
      x: [1, 2, 3, 4, 5],
      y: [4, 0, 4, 6, 8],
      mode: 'lines+markers',
      type: 'scatter'
    };
    
    var data = [trace1, trace2];
    var layout = {title: 'Click Here<br>to Edit Chart Title'};
    
    Plotly.newPlot('scatterThresh45', data, layout, {editable: true});
  
  }

  sctterThreshLine(){
    var icon1 = {
      'width': 500,
      'height': 600,
      'path': 'M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
    }
    
    var colors = ['green', 'red', 'blue']
    var data = [{
      mode: 'lines',
      y: [2, 1, 2],
      line: {color: colors[0], width: 3, shape: 'spline'}
    }]
    
    var layout = {
      title: 'add mode bar button with custom icon',
      modebardisplay: false}
    
    var config = {
      modeBarButtonsToAdd: [
        {
          name: 'color toggler',
          icon: icon1,
          click: function(gd:any) {
            var newColor = colors[Math.floor(3 * Math.random())]
            Plotly.restyle(gd, 'line.color', newColor)
          }},
        {
          name: 'button1',
          icon: Plotly.Icons.pencil,
          direction: 'up',
          click: function(gd:any) {alert('button1')
        }}],
      modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']}
    
    Plotly.newPlot('scatterThresh56', data, layout, config)
  }

  scatterThresFill(){
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [0, 2, 3, 5],
      fill: 'tozeroy',
      type: 'scatter'
    };
    
    var trace2 = {
      x: [1, 2, 3, 4],
      y: [3, 5, 1, 7],
      fill: 'tonexty',
      type: 'scatter'
    };
    
    var data = [trace1, trace2];
    
    Plotly.newPlot('scatterThresh77', data);
  }
}
