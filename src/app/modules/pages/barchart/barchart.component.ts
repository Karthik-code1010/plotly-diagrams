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
barmapdrop:any = {
 
  "layout" : {
    "title":"",
  
    "yaxis":{
   
     "title":"Model",
    },
    "xaxis":{
      "tickangle": 0,
      "title":"Error matrics",
      //side: "top"
     },
     "barmode": "group",
  
  },
  
  "trace1":{
    "name":"Training",
    "color":"rgb(100, 149, 237)",
    "opacity": 0.7,
    "xvalue":[19,14,22,14,16,19,15,14],
    "yvalue":["LogisticRegression_Baseline","XGBoost_Baseline","DecisionTree_Baseline","RandomForest_Baseline","SVM_Baseline","Ensemble_Stacked","Ensemble_Max_Voting","Ensemble_Wheited_Voting"],


  },
  "trace2":{
    "name":"Validation",
    "color":"rgb(0, 0, 255)",
    "opacity": 0.5,
  
    "xvalue":[20,14,25,16,18,22,19,15],
    "yvalue":["LogisticRegression_Baseline","XGBoost_Baseline","DecisionTree_Baseline","RandomForest_Baseline","SVM_Baseline","Ensemble_Stacked","Ensemble_Max_Voting","Ensemble_Wheited_Voting"],
  
 
   

  }
  

}

  constructor() { }
  @Input() data!: any;
  ngOnInit(): void {
   // this.barChart();

    this.barchartDropDown();

  }
  
  // barChart(){
  //   console.log(this.data);
   

  //   var trace1 = {
  //     x: this.data.trace1.xvalue,
  //     y:this.data.trace1.yvalue,
  //     type: 'bar',
  //     name: this.data.trace1.name,
  //     orientation: 'h',
  //     marker: {
  //       color: this.data.trace1.color,
  //       opacity: this.data.trace1.opacity,
  //     }
  //   };
    
  //   var trace2 = {
  //     x: this.data.trace2.xvalue,
  //     y:this.data.trace2.yvalue,
  //     type: 'bar',
  //     name: this.data.trace2.name,
  //     orientation: 'h',
  //     marker: {
  //       color: this.data.trace2.color,
  //       opacity: this.data.trace2.opacity
  //     }
  //   };
  //   var trace11 = {
  //     x: this.data.trace1.xvalue,
  //     y:this.data.trace1.yvalue,
  //     type: 'bar',
  //     name: this.data.trace1.name,
  //     orientation: 'h',
  //     marker: {
  //       color: 'red',
  //       opacity: this.data.trace1.opacity,
  //     }
  //   };
    
  //   var trace21 = {
  //     x: this.data.trace2.xvalue,
  //     y:this.data.trace2.yvalue,
  //     type: 'bar',
  //     name: this.data.trace2.name,
  //     orientation: 'h',
  //     marker: {
  //       color: 'green',
  //       opacity: this.data.trace2.opacity
  //     }
  //   };
    
  //   var data1 = [
  //    trace1 ,trace2,
  //   ];
  //   var data2 = [
  //     trace11 ,trace21,
  //    ];
    
  //   var layout = {
  //     title: this.data.layout.title,
  //     width:1000,
  //     height: 700,
  //     margin: {
  //       l: 100,
  //       r: 50,
  //       b: 100,
  //       t: 100,
       
  //     },
    
  //     yaxis:{
     
  //      title:this.data.layout.yaxis.title,
  //     },
  //     xaxis:{
  //       tickangle: this.data.layout.xaxis.tickangle,
  //       title:this.data.layout.xaxis.title,
  //       //side: "top"
  //      },
  //     barmode: this.data.barmode,



  //     updatemenus: [{
  //       yanchor: 'top',
  //       buttons: [{
  //           method: 'update',
  //           args: ['visible', [true, false, false, false]],
  //           label: 'Accuracy',
  //           annotations:data1
  //         },
  //         {
  //           method: 'update',
  //           args: ['visible', [false, true, false, false]],
  //           label: 'Two',
  //           annotations:data2
  //         }
  //       ],
  //       direction:"down",
  //       pad:{
  //         l: 0,
  //         r: 180,
  //         b: 0,
  //         t: 0,
  //       },
  //     }]

  //   };
    
  //   Plotly.newPlot('myDiv3', data1, layout);
    
  // }

  barchartDropDown(){
    var trace1 = {

      tag1:{
        x: [19,14,22,14,16,19,15,14],
        y:["LogisticRegression_Baseline","XGBoost_Baseline","DecisionTree_Baseline","RandomForest_Baseline","SVM_Baseline","Ensemble_Stacked","Ensemble_Max_Voting","Ensemble_Wheited_Voting"],
        type: 'bar',
        name: "Training",
        orientation: 'h',
        marker: {
          color: "rgb(100, 149, 237)",
          opacity: 0.7,
        }
      
      },
     
     tag2:{
      x: [20,14,25,16,18,22,19,15],
      y:["LogisticRegression_Baseline","XGBoost_Baseline","DecisionTree_Baseline","RandomForest_Baseline","SVM_Baseline","Ensemble_Stacked","Ensemble_Max_Voting","Ensemble_Wheited_Voting"],
      type: 'bar',
      name: "Validation",
      orientation: 'h',
      marker: {
        color: "rgb(100, 149, 237)",
        opacity: 0.5,
      }

     },
      
    }
    
    var trace2 = {
     
      tag1:{
        x: [19,14,22,14,16,19,15,14],
        y:["LogisticRegression_Baseline","XGBoost_Baseline","DecisionTree_Baseline","RandomForest_Baseline","SVM_Baseline","Ensemble_Stacked","Ensemble_Max_Voting","Ensemble_Wheited_Voting"],
        type: 'bar',
        name: "Training",
        orientation: 'h',
        marker: {
          color: "rgb(255, 0, 0)",
          opacity: 0.7,
        }
    
      },
     
     tag2:{
      x: [20,14,25,16,18,22,19,15],
      y:["LogisticRegression_Baseline","XGBoost_Baseline","DecisionTree_Baseline","RandomForest_Baseline","SVM_Baseline","Ensemble_Stacked","Ensemble_Max_Voting","Ensemble_Wheited_Voting"],
      type: 'bar',
      name: "Validation",
      orientation: 'h',
      marker: {
        color: "rgb(0, 255, 0)",
        opacity: 0.5,
      }

     },
      
    }
    
    var frames = [{
        name: 'trace 1',
        data: [
        {
          x: trace1.tag1.x,
          y:trace1.tag1.y,
          type: trace1.tag1.type,
          name: trace1.tag1.name,
          orientation: trace1.tag1.orientation,
          marker: {
            color: trace1.tag1.marker.color,
            opacity:trace1.tag1.marker.opacity,
          }
      
        },
        {
          x: trace1.tag2.x,
          y:trace1.tag2.y,
          type: trace1.tag2.type,
          name: trace1.tag2.name,
          orientation: trace1.tag2.orientation,
          marker: {
            color: trace1.tag2.marker.color,
            opacity:trace1.tag2.marker.opacity,
          }
      
        },
      ]
      },
      {
        name: 'trace 2',
        data: [ {
          x: trace2.tag1.x,
          y:trace2.tag1.y,
          type: trace2.tag1.type,
          name: trace2.tag1.name,
          orientation: trace2.tag1.orientation,
          marker: {
            color: trace2.tag1.marker.color,
            opacity:trace2.tag1.marker.opacity,
          }
      
        },
        {
          x: trace2.tag2.x,
          y:trace2.tag2.y,
          type: trace2.tag2.type,
          name: trace2.tag2.name,
          orientation: trace2.tag2.orientation,
          marker: {
            color: trace2.tag2.marker.color,
            opacity:trace2.tag2.marker.opacity,
          }
      
        },
      
      ]
      }
    ]
    //console.log(frames)
    var layout = {
      width:1000,
      height: 700,
      margin: {
        l: 300,
        r: 50,
        b: 100,
        t: 100,
       
      },
      yaxis: {
        title:"Model"
      },
      xaxis: {
        title:"Error Metrics"
      },
      updatemenus: [{
        buttons: [{
            method: 'animate',
            args: [
              ['trace 1']
            ],
            label: 'Accuracy'
          },
          {
            method: 'animate',
            args: [
              ['trace 2']
            ],
            label: 'Two'
          }
        ],
        x :0.0,
      
        y :1.15,
        xanchor : 'left',
        direction:"right",
        pad:{
          l: 0,
          r: 0,
          b: 200,
          t: 0,
        },
      }]
    }
    
    Plotly.newPlot("barchartDrop", [trace1.tag1,trace1.tag2], layout).then(function() {
      Plotly.addFrames('barchartDrop', frames);
    });
  }

}
