import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-chart-data',
  templateUrl: './basic-chart-data.component.html',
  styleUrls: ['./basic-chart-data.component.scss']
})
export class BasicChartDataComponent implements OnInit {
  barmap:any = {
 
    "layout" : {
      "title":"2013 Sales Report",
    
      "yaxis":{
     
       "title":"Reference ",
      },
      "xaxis":{
        "tickangle": 0,
        "title":"Predicted",
        //side: "top"
       },
       "barmode": "group",
    
    },
    
    "trace1":{
      "name":"Primary Product",
      "color":"rgb(49,130,189)",
      "opacity": 0.7,
      "xvalue":[20,14,25,16,18,22,19,15,12,16,14,17],
      "yvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    
      
    

    },
    "trace2":{
      "name":"Secondary Product",
      "color":"rgb(204,204,204)",
      "opacity": 0.5,
      "xvalue":[19,14,22,14,16,19,15,14,10,12,12,16],
      "yvalue":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
   
     

    }
    

  }
 
  data: any = {};
  constructor() { 
     this.data = this.barmap
  }

  ngOnInit(): void {
  }

}
