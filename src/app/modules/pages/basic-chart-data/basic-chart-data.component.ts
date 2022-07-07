import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-chart-data',
  templateUrl: './basic-chart-data.component.html',
  styleUrls: ['./basic-chart-data.component.scss']
})
export class BasicChartDataComponent implements OnInit {
  barmap:any = {
 
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
 
  data: any = {};
  constructor() { 
     this.data = this.barmap
  }

  ngOnInit(): void {
  }

}
