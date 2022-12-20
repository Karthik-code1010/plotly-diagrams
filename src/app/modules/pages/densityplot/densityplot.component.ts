import { Component, Input, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');
//import densityData from '../../../service/densityPlot.json'
@Component({
  selector: 'app-densityplot',
  templateUrl: './densityplot.component.html',
  styleUrls: ['./densityplot.component.scss']
})
export class DensityplotComponent implements OnInit {
  @Input() dataHisto!: any;
  constructor() { }
  densityVal:any = [];
  ngOnInit(): void {
   // this.densityPlot();
 
   //this.densityVal = densityData['data'];
 
   //this.converXvalues(this.densityVal);
  // this.updatedropdown();
   this.dynamicTitleChange();
   
  }

//   densityPlot(){
//     var x = [0.5,10,1.5,20,2.5,30,3.5,40,4.5,5,50,5.5,60,6.5,7,7.5];
//     // var y = [0.025,0.2,0.015]
//   // for (var i = 0; i < 500; i ++) {
// 	// x[i] = Math.random();
//   //  }
//    console.log('density plot==>',x)

//   var trace = {
//     x: x,
//    // y: y,
//     type: 'histogram',
//     marker: {
//       color: 'rgb(102, 153, 153)',
//    },
//   };
//   var data = [trace];
//   var layout = {
//     title:"Density Plot for: hotalcount5smile",
   
//     yaxis:{
//       range: [0,0.025],
//      title:"KDE",
  
//     },
//     xaxis:{
//      range: [0,250],
//       title:"",
    
//      }
// ,
//      updatemenus: [{
//       yanchor: 'top',
//       buttons: [{
//           method: 'update',
//           args: ['visible', [true, false, false, false]],
//           label: 'hotalcount5smile',
       
//         },
//         {
//           method: 'update',
//           args: ['visible', [false, true, false, false]],
//           label: 'Two',
         
//         }
//       ],
//       direction:"down",
//       pad:{
//         l: 0,
//         r: 40,
//         b: 0,
//         t: 0,
//       },
//     }]
//   };
//   Plotly.newPlot('dencity', data,layout);
//   }
// hotalid:any = [];
// max_rooms_capacity:any = [];
// building_type: any = [];
// location_type: any = [];
// AvgDailyRate:any = [];
// Compet_Occupancy:any = [];
// Compet_AvgDailyRate: any = [];
// PercentGovtNights:any = [];
// PercentGroupNights:any = [];
// PercentTransientNights:any = [];
// PercentBusiness: any = [];
// PercentLeisure: any = [];
// hotelcount1mile: any = [];
// hotelcount5mile: any = [];
// rooms1mile:any = [];
// rooms5mile: any = [];
// loyalty_pct: any = [];
// call_center_booking_pct: any = [];
// travel_agency_booking_pct: any = [];
// third_party_web_bookings_pct:any = [];
// hotel_to_hotel_bookings_pct: any = [];
// direct_call_booking_pct:any = [];
// direct_web_booking_pct: any = [];
// Class: any = [];

// fullarray:any = []
// converXvalues(densityArray:any){
//   console.log('inside function',densityArray);
//   densityArray.forEach((element,i) => {
//     //console.log(element)
//     this.hotalid.push(element.hotel_id);
//     this.max_rooms_capacity.push(element.max_rooms_capacity)
//     this.building_type.push(element.building_type)
//     this.location_type.push(element.location_type)
//     this.AvgDailyRate.push(element.AvgDailyRate)
//     this.Compet_Occupancy.push(element.Compet_Occupancy)
//     this.Compet_AvgDailyRate.push(element.Compet_AvgDailyRate)
//     this.PercentGovtNights.push(element.PercentGovtNights)
//     this.PercentTransientNights.push(element.PercentTransientNights)
//     this.PercentBusiness.push(element.PercentBusiness)
//     this.PercentLeisure.push(element.PercentLeisure)
//     this.hotelcount1mile.push(element.hotelcount1mile)
//     this.rooms1mile.push(element.rooms1mile)
//     this.rooms5mile.push(element.rooms5mile)
//     this.loyalty_pct.push(element.loyalty_pct)
//     this.call_center_booking_pct.push(element.call_center_booking_pct)
//     this.travel_agency_booking_pct.push(element.travel_agency_booking_pct)
//     this.third_party_web_bookings_pct.push(element.third_party_web_bookings_pct)
//     this.hotel_to_hotel_bookings_pct.push(element.hotel_to_hotel_bookings_pct)
//     this.direct_call_booking_pct.push(element.direct_call_booking_pct)
//     this.direct_web_booking_pct.push(element.direct_web_booking_pct)
//     this.Class.push(element.Class)

//   });
//   console.log('this.hotalid',this.hotalid);
//   console.log('this.max_rooms_capacity',this.max_rooms_capacity);
//   console.log('this.building_type',this.building_type);
//   console.log('this.location_type',this.location_type);
//   console.log('this.AvgDailyRate',this.AvgDailyRate);
//   console.log('this.Compet_Occupancy',this.Compet_Occupancy);
//   console.log('this.Compet_AvgDailyRate',this.Compet_AvgDailyRate);
//   console.log('this.PercentGovtNights',this.PercentGovtNights);
//   console.log('this.PercentTransientNights',this.PercentTransientNights);
//   console.log('this.PercentBusiness',this.PercentBusiness);
//   console.log('this.PercentLeisure',this.PercentLeisure);
//   console.log('this.hotelcount1mile',this.hotelcount1mile);
//   console.log('this.rooms1mile',this.rooms1mile);
//   console.log('this.rooms5mile',this.rooms5mile);
//   console.log('this.loyalty_pct',this.loyalty_pct);
//   console.log('this.call_center_booking_pct',this.call_center_booking_pct);
//   console.log('this.travel_agency_booking_pct',this.travel_agency_booking_pct);
//   console.log('this.third_party_web_bookings_pct',this.third_party_web_bookings_pct);
//   console.log('this.hotel_to_hotel_bookings_pct',this.hotel_to_hotel_bookings_pct);
//   console.log('this.direct_call_booking_pct',this.direct_call_booking_pct);
//   console.log('this.direct_web_booking_pct',this.direct_web_booking_pct);
//   console.log('this.Class',this.Class);
//   if(this.Class.length > 0){
   
   
//     // this.densityPlotDropDown();
//     this.updatedropdown();

//   }
 
// }

  // densityPlotDropDown(){
  //   var trace1 = {
  //     x: this.hotalid,
   
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //    },
  //     name: 'Trace 1',
  //   }
    
  //   var trace2 = {
  //     x: this.max_rooms_capacity,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 2',
  //   }
  //   var trace3 = {
  //     x: this.building_type,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 3',
  //   }
  //   var trace4 = {
  //     x: this.location_type,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 4',
  //   }
  //   var trace5 = {
  //     x: this.AvgDailyRate,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 5',
  //   }
  //   var trace6 = {
  //     x: this.Compet_Occupancy,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 6',
  //   }
  //   var trace7 = {
  //     x: this.Compet_AvgDailyRate,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 7',
  //   }
  //   var trace8 = {
  //     x: this.PercentGovtNights,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 8',
  //   }
  //   var trace9 = {
  //     x: this.PercentTransientNights,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 9',
  //   }
  //   var trace10 = {
  //     x: this.PercentBusiness,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 10',
  //   }
  //   var trace11 = {
  //     x: this.PercentLeisure,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 11',
  //   }
  //   var trace12 = {
  //     x: this.hotelcount1mile,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 12',
  //   }
  //   var trace13 = {
  //     x: this.rooms1mile,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 13',
  //   }
  //   var trace14 = {
  //     x: this.rooms5mile,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 14',
  //   }
  //   var trace15 = {
  //     x: this.loyalty_pct,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 15',
  //   }
  //   var trace16 = {
  //     x: this.call_center_booking_pct,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 16',
  //   }
  //   var trace17 = {
  //     x: this.travel_agency_booking_pct,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 17',
  //   }
  //   var trace18 = {
  //     x: this.third_party_web_bookings_pct,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 18',
  //   }
  //   var trace19 = {
  //     x: this.hotel_to_hotel_bookings_pct,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 19',
  //   }
  //   var trace20 = {
  //     x: this.direct_call_booking_pct,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 20',
  //   }
  //   var trace21 = {
  //     x: this.direct_web_booking_pct,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 21',
  //   }
  //   var trace22 = {
  //     x: this.Class,
    
  //     type: 'histogram',
  //     marker: {
  //       color: 'rgb(102, 153, 153)',
  //      },
  //     name: 'Trace 22',
  //   }
    
  //   var frames = [{
  //       name: 'trace 1',
  //       data: [{
  //         x: trace1.x,
  //         marker: {
  //           color: trace1.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 2',
  //       data: [{
  //         x: trace2.x,
  //         marker: {
  //           color: trace2.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 3',
  //       data: [{
  //         x: trace3.x,
  //         marker: {
  //           color: trace3.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 4',
  //       data: [{
  //         x: trace4.x,
  //         marker: {
  //           color: trace4.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 5',
  //       data: [{
  //         x: trace5.x,
  //         marker: {
  //           color: trace5.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 6',
  //       data: [{
  //         x: trace6.x,
  //         marker: {
  //           color: trace6.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 7',
  //       data: [{
  //         x: trace7.x,
  //         marker: {
  //           color: trace7.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 8',
  //       data: [{
  //         x: trace8.x,
  //         marker: {
  //           color: trace8.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 9',
  //       data: [{
  //         x: trace9.x,
  //         marker: {
  //           color: trace9.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 10',
  //       data: [{
  //         x: trace10.x,
  //         marker: {
  //           color: trace10.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 11',
  //       data: [{
  //         x: trace11.x,
  //         marker: {
  //           color: trace11.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 12',
  //       data: [{
  //         x: trace12.x,
  //         marker: {
  //           color: trace12.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 13',
  //       data: [{
  //         x: trace13.x,
  //         marker: {
  //           color: trace13.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 14',
  //       data: [{
  //         x: trace14.x,
  //         marker: {
  //           color: trace14.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 15',
  //       data: [{
  //         x: trace15.x,
  //         marker: {
  //           color: trace15.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 16',
  //       data: [{
  //         x: trace16.x,
  //         marker: {
  //           color: trace16.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 17',
  //       data: [{
  //         x: trace17.x,
  //         marker: {
  //           color: trace17.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 18',
  //       data: [{
  //         x: trace18.x,
  //         marker: {
  //           color: trace18.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 19',
  //       data: [{
  //         x: trace19.x,
  //         marker: {
  //           color: trace19.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 20',
  //       data: [{
  //         x: trace20.x,
  //         marker: {
  //           color: trace20.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 21',
  //       data: [{
  //         x: trace21.x,
  //         marker: {
  //           color: trace21.marker.color,
  //          },
  //       }]
  //     },
  //     {
  //       name: 'trace 22',
  //       data: [{
  //         x: trace22.x,
  //         marker: {
  //           color: trace22.marker.color,
  //          },
  //       }]
  //     },
  //   ]
  //   //console.log(frames)
  //   var layout = {
  //     title:"Density Plot for: hotalcount5smile",
  //     yaxis: {
  //      // range: [0.001,0.007],
  //       title:"KDE",
  //     },
  //     xaxis: {
  //      // range: [0,600],
  //       title:"",
  //     },
  //     updatemenus: [{
  //       buttons: [
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 1']
  //           ],
  //           label: 'hotalid'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 2',{
  //               'yaxis.range':  [10,100]
  //               }]
  //           ],
  //           label: 'max_rooms_capacity'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 3']
  //           ],
  //           label: 'building_type'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 4']
  //           ],
  //           label: 'location_type'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 5']
  //           ],
  //           label: 'AvgDailyRate'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 6']
  //           ],
  //           label: 'Compet_Occupancy'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 7']
  //           ],
  //           label: 'Compet_AvgDailyRate'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 8']
  //           ],
  //           label: 'PercentGovtNights'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 9']
  //           ],
  //           label: 'PercentTransientNights'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 10']
  //           ],
  //           label: 'PercentBusiness'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 11']
  //           ],
  //           label: 'PercentLeisure'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 12']
  //           ],
  //           label: 'hotelcount1mile'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 13']
  //           ],
  //           label: 'rooms1mile'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 14']
  //           ],
  //           label: 'rooms5mile'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 15']
  //           ],
  //           label: 'loyalty_pct'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 16']
  //           ],
  //           label: 'call_center_booking_pct'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 17']
  //           ],
  //           label: 'travel_agency_booking_pct'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 18']
  //           ],
  //           label: 'third_party_web_bookings_pct'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 19']
  //           ],
  //           label: 'hotel_to_hotel_bookings_pct'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 20']
  //           ],
  //           label: 'direct_call_booking_pct'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 21']
  //           ],
  //           label: 'direct_web_booking_pct'
  //         },
  //         {
  //           method: 'animate',
  //           args: [
  //             ['trace 22']
  //           ],
  //           label: 'Class'
  //         },
  //       ],
  //       x :0.0,
      
  //       y :1.15,
  //       xanchor : 'left',
  //       direction:"right",
  //       pad:{
  //         l: 0,
  //         r: 0,
  //         b: 0,
  //         t: 0,
  //       },
  //     }]
  //   }
  //   console.log('frames',frames);
    
  //   Plotly.newPlot("dencityplot", [trace1], layout,).then(function() {
  //     Plotly.addFrames('dencityplot', frames, 0);
  //   });
  // }

//   updatedropdown(){

//     // var obj1 = {
//     //   count:0,
//     //   data:this.hotalid
//     // }
//     // this.fullarray.push(obj1);
//     // var obj2 = {
//     //   count:1,
//     //   data:this.max_rooms_capacity
//     // }
//     // this.fullarray.push(obj2);
//     // var obj3 = {
//     //   count:2,
//     //   data:this.building_type
//     // }
//     //  this.fullarray.push(obj3);
//     // var obj4 = {
//     //   count:3,
//     //   data:this.location_type
//     // }
//     //  this.fullarray.push(obj4);

//     //  var obj5 = {
//     //   count:4,
//     //   data:this.AvgDailyRate
//     //  }
//     //  this.fullarray.push(obj5);
//     //  var obj6 = {
//     //   count:5,
//     //   data:this.Compet_Occupancy
//     //  }
//     //  this.fullarray.push(obj6);
//     //  var obj7 = {
//     //   count:6,
//     //   data:this.Compet_AvgDailyRate
//     //  }
//     //  this.fullarray.push(obj7);

//     //  var obj8 = {
//     //   count:7,
//     //   data:this.PercentGovtNights
//     //  }
//     //  this.fullarray.push(obj8);
//     //  var obj9 = {
//     //   count:8,
//     //   data:this.PercentTransientNights
//     //  }
//     //  this.fullarray.push(obj9);
//     //  var obj10 = {
//     //   count:9,
//     //   data:this.PercentBusiness
//     //  }
//     //  this.fullarray.push(obj10);
//     //  var obj11 = {
//     //   count:10,
//     //   data:this.PercentLeisure
//     //  }

//     //  this.fullarray.push(obj11);

//     //  var obj12 = {
//     //   count:11,
//     //   data:this.hotelcount1mile
//     //  }
//     //  this.fullarray.push(obj12);
//     //  var obj13 = {
//     //   count:12,
//     //   data:this.rooms1mile
//     //  }
//     //  this.fullarray.push(obj13);
//     //  var obj14 = {
//     //   count:13,
//     //   data:this.rooms5mile
//     //  }
//     //  this.fullarray.push(obj14);
//     //  var obj15 = {
//     //   count:14,
//     //   data:this.loyalty_pct
//     //  }
//     //  this.fullarray.push(obj15);
//     //  var obj16 = {
//     //   count:15,
//     //   data:this.call_center_booking_pct
//     //  }
//     //  this.fullarray.push(obj16);
//     //  var obj17 = {
//     //   count:16,
//     //   data:this.travel_agency_booking_pct
//     //  }
//     //  this.fullarray.push(obj17);

//     //  var obj18 = {
//     //   count:17,
//     //   data:this.third_party_web_bookings_pct
//     //  }
//     //  this.fullarray.push(obj18);
//     //  var obj19 = {
//     //   count:18,
//     //   data:this.hotel_to_hotel_bookings_pct
//     //  }
//     //  this.fullarray.push(obj19);
//     //  var obj20 = {
//     //   count:19,
//     //   data:this.direct_call_booking_pct
//     //  }
//     //  this.fullarray.push(obj20);
//     //  var obj21 = {
//     //   count:20,
//     //   data:this.direct_web_booking_pct
//     //  }

//     //  this.fullarray.push(obj21);
//     //  var obj22 = {
//     //   count:21,
//     //   data:this.Class
//     //  }
//     //  this.fullarray.push(obj22);

  
//     var layout =  {
//       title:this.dataHisto.layout.title,
//       yaxis: {
//        // range: [0.001,0.007],
//         title:this.dataHisto.layout.yaxis.title,
//       },
//       xaxis: {
//        // range: [0,600],
//         title:this.dataHisto.layout.xaxis.title,
//       },
//       updatemenus: [ {
        
//           yanchor: 'top',
//           buttons: [{
//               method: 'restyle',
//               args: [{'visible': [true, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,], 'title': 'Title 1'}],
//               label: 'Hotal ID'
//           }, {
//               method: 'restyle',
//               args: [{'visible': [false, true, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 'title': 'Title 2'},],
//               label: 'max_rooms_capacity'
//           }, {
//               method: 'restyle',
//               args: ['visible', [false, false, true, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]],
//               label: 'AvgDailyRate'
//           }, {
//               method: 'restyle',
//               args: ['visible', [false, false, false, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]],
//               label: 'Compet_Occupancy'
//           },
//           {
//             method: 'restyle',
//             args: ['visible', [false, false, false, false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]],
//             label: 'Compet_AvgDailyRate'
//          },
//          {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]],
//           label: 'PercentGovtNights'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]],
//           label: 'PercentGroupNights'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false]],
//           label: 'PercentTransientNights'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false]],
//           label: 'PercentBusiness'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false]],
//           label: 'PercentLeisure'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false]],
//           label: 'hotelcount1mile'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false]],
//           label: 'hotelcount5mile'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false]],
//           label: 'rooms1mile'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false]],
//           label: 'rooms5mile'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false]],
//           label: 'loyalty_pct'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false]],
//           label: 'call_center_booking_pct'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false]],
//           label: 'travel_agency_booking_pct'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false]],
//           label: 'third_party_web_bookings_pct'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false]],
//           label: 'hotel_to_hotel_bookings_pct'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false]],
//           label: 'direct_call_booking_pct'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false]],
//           label: 'direct_web_booking_pct'
//         },
//         {
//           method: 'restyle',
//           args: ['visible', [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true]],
//           label: 'Class'
//         },
        
//         ],
//         x :0.0,
          
//         y :1.15,
//         xanchor : 'left',
//         direction:"right",
//         pad:{
//           l: 0,
//           r: 0,
//           b: 0,
//           t: 0,
//         },
//       }],
//     }
//     var histoarray = this.dataHisto.dataval;

// Plotly.newPlot('dropupdategraph',  histoarray.map(this.makeTrace),layout

// );

//   }
//    makeTrace(i:any) {
//     console.log('i------------------>',i)
   
//       return {
//         x:i.data,
     
//         type: 'histogram',
//         marker: {
//           color: 'rgb(102, 153, 153)',
//        },
       
//           visible: i.count === 0,
//           name: 'Hotal ID' + i,
  
//       };
   
// }

dynamicTitleChange(){
  console.log('dataHisto====>',this.dataHisto.dataval);
  var trace1 = {
    x: this.dataHisto.dataval[0].data,
    type: 'histogram',
   
    histnorm:'probability density',
    marker: {
      color: 'rgb(102, 153, 153)',
   },
    name: 'data 1',
    visible: true
}

var trace2 = {
    x:this.dataHisto.dataval[1].data,
     
    type: 'histogram',
    histnorm:'probability density',
    marker: {
      color: 'rgb(102, 153, 153)',
   },
    name: 'data 2',
    visible: false
}
var trace3 = {
  x:this.dataHisto.dataval[2].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 3',
  visible: false
}
var trace4 = {
  x:this.dataHisto.dataval[3].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 4',
  visible: false
}
var trace5 = {
  x:this.dataHisto.dataval[4].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 5',
  visible: false
}
var trace6 = {
  x:this.dataHisto.dataval[5].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 6',
  visible: false
}
var trace7 = {
  x:this.dataHisto.dataval[6].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 7',
  visible: false
}
var trace8 = {
  x:this.dataHisto.dataval[7].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 8',
  visible: false
}
var trace9 = {
  x:this.dataHisto.dataval[8].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 9',
  visible: false
}
var trace10 = {
  x:this.dataHisto.dataval[9].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 10',
  visible: false
}
var trace11 = {
  x:this.dataHisto.dataval[10].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 11',
  visible: false
}
var trace12 = {
  x:this.dataHisto.dataval[11].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 12',
  visible: false
}
var trace13 = {
  x:this.dataHisto.dataval[12].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 13',
  visible: false
}
var trace14 = {
  x:this.dataHisto.dataval[13].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 14',
  visible: false
}
var trace15 = {
  x:this.dataHisto.dataval[14].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 15',
  visible: false
}
var trace16 = {
  x:this.dataHisto.dataval[15].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 16',
  visible: false
}
var trace17 = {
  x:this.dataHisto.dataval[16].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 17',
  visible: false
}
var trace18 = {
  x:this.dataHisto.dataval[17].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 18',
  visible: false
}
var trace19 = {
  x:this.dataHisto.dataval[18].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 19',
  visible: false
}
var trace20 = {
  x:this.dataHisto.dataval[19].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 20',
  visible: false
}
var trace21 = {
  x:this.dataHisto.dataval[20].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 21',
  visible: false
}
var trace22 = {
  x:this.dataHisto.dataval[21].data,
   
  type: 'histogram',
  histnorm:'probability density',
  marker: {
    color: 'rgb(102, 153, 153)',
 },
  name: 'data 22',
  visible: false
}



var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21, trace22];

var layout = {
    title: {
        'text': 'Hotal ID'
    },
  
    yaxis: {
      // range:[0.0002,0.0012],
       title:this.dataHisto.layout.yaxis.title,
     },
     xaxis: {
      // range: [0,600],
       title:this.dataHisto.layout.xaxis.title,
     },
    updatemenus: [{
      x :0.0,
          
      y :1.15,
      xanchor : 'left',
      direction:"right",
      pad:{
        l: 0,
        r: 0,
        b: 0,
        t: 0,
      },
       
        yanchor: 'top',
        type: 'dropdown',
        buttons: [
        {
          method: 'update',
          args: [{'visible': [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Hotal ID'}],  //,'yaxis.range':[0.0002,0.0012]
          label: 'hotal_id'
         }, 
         {
          method: 'update',
          args: [{'visible': [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Max rooms capacity'}], //,'yaxis.range':[0.001,0.008]
          label: 'max_rooms_capacity'
         },
         {
          method: 'update',
          args: [{'visible': [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Avg Daily Rate'}],
          label: 'AvgDailyRate'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Compet Occupancy'}],
          label: 'Compet_Occupancy'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Compet Avg Daily Rate'}],
          label: 'Compet_AvgDailyRate'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Percent Govt Nights'}],
          label: 'PercentGovtNights'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Percent Group Nights'}],
          label: 'PercentGroupNights'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Percent Transient Nights'}],
          label: 'PercentTransientNights'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Percent Business'}],
          label: 'PercentBusiness'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Percent Leisure'}],
          label: 'PercentLeisure'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Hotel count1 mile'}],
          label: 'hotelcount1mile'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Hotel count5 mile'}],
          label: 'hotelcount5mile'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false,]}, {'title.text': 'Rooms1 mile'}],
          label: 'rooms1mile'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false,]}, {'title.text': 'Rooms5 mile'}],
          label: 'rooms5mile'
         }, 
          {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false,]}, {'title.text': 'Loyalty pct'}],
          label: 'loyalty_pct'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false,]}, {'title.text': 'Call center booking pct'}],
          label: 'call_center_booking_pct'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false,]}, {'title.text': 'Travel agency booking pct'}],
          label: 'travel_agency_booking_pct'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false,]}, {'title.text': 'Third party web bookings pct'}],
          label: 'third_party_web_bookings_pct'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false,]}, {'title.text': 'Hotel to hotel bookings pct'}],
          label: 'hotel_to_hotel_bookings_pct'
         },  
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false,]}, {'title.text': 'Direct call booking pct'}],
          label: 'direct_call_booking_pct'
         },
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false,]}, {'title.text': 'Direct web booking pct'}],
          label: 'direct_web_booking_pct'
         },
         {
          method: 'update',
          args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true,]}, {'title.text': 'Class'}],
          label: 'Class'
         },
    ]
    }],
};


Plotly.newPlot('titlechnage', data, layout);
}



}
