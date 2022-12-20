import { Component, OnInit } from '@angular/core';
var Plotly:any = require('plotly.js-dist');
import densityData from '../../../service/densityPlot.json'
@Component({
  selector: 'app-densityplotdata',
  templateUrl: './densityplotdata.component.html',
  styleUrls: ['./densityplotdata.component.scss']
})
export class DensityplotdataComponent implements OnInit {
  dataHisto:any = {}
  constructor() { }
  densityVal:any = [];
  ngOnInit(): void {
    //this.updatedropdown();
    
   this.densityVal = densityData['data'];
 
   this.converXvalues(this.densityVal);

  
  }
//   updatedropdown(){
//     var layout =  {
//       title:"Density Plot for: hotalcount5smile",
//       yaxis: {
//        // range: [0.001,0.007],
//         title:"KDE",
//       },
//       xaxis: {
//        // range: [0,600],
//         title:"",
//       },
//       updatemenus: [ {
        
//           yanchor: 'top',
//           buttons: [{
//               method: 'restyle',
//               args: ['visible', [true, false, false, false,false]],
//               label: 'Data set 0'
//           }, {
//               method: 'restyle',
//               args: ['visible', [false, true, false, false,false]],
//               label: 'Data set 1'
//           }, {
//               method: 'restyle',
//               args: ['visible', [false, false, true, false,false]],
//               label: 'Data set 2'
//           }, {
//               method: 'restyle',
//               args: ['visible', [false, false, false, true,false]],
//               label: 'Data set 3'
//           },{
//             method: 'restyle',
//             args: ['visible', [false, false, false, false,true]],
//             label: 'Data set 4'
//         }
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

// Plotly.newPlot('dropupdategraph', [0, 1, 2, 3,4].map(this.makeTrace),layout

// );

//   }
//    makeTrace(i) {
//     console.log('i------------------>',i)
    
//   if(i==0){
// console.log('if i=----->',i)
// return {
//   x: [
//     337,
//     373,
//     582,
//     473,
//     514,
//     108,
//     106,
//     753,
//     332,
//     222,

//   ],

//   type: 'histogram',
//   marker: {
//     color: 'rgb(102, 153, 153)',
//  },
 
//     visible: i === 0,
//     name: 'Data set ' + i,

// };
//   }
//   if(i==1){
//     console.log('if i=----->',i)
//     return {
//       x: [
//         3,
//         3,
//         5,
//         9,
//         5,
//         1,
//         16,
//         73,
//         32,
//         22,
 
//       ],
   
//       type: 'histogram',
//       marker: {
//         color: 'rgb(102, 153, 153)',
//      },
     
//         visible: i === 0,
//         name: 'Data set ' + i,

//     };
//       }
//   if(i==2){
//     console.log('if i=----->',i)
//     return {
//       x: [
//         3000,
//         300,
//         5000,
//         9000,
//         5000,
//         1000,
//         1600,
//         7300,
//         3200,
//         2200,
 
//       ],
   
//       type: 'histogram',
//       marker: {
//         color: 'rgb(102, 153, 153)',
//      },
     
//         visible: i === 0,
//         name: 'Data set ' + i,

//     };
//     }
//   if(i==3){
//     console.log('if i=----->',i)
//     }
//   if(i==4){
//       console.log('if i=----->',i)
//       }
//       return {
//         x: [
//           337,
//           373,
//           582,
//           473,
//           514,
//           108,
//           106,
//           753,
//           332,
//           222,
   
//         ],
     
//         type: 'histogram',
//         marker: {
//           color: 'rgb(102, 153, 153)',
//        },
       
//           visible: i === 0,
//           name: 'Data set ' + i,
  
//       };
   
// }
hotalid:any = [];
max_rooms_capacity:any = [];
building_type: any = [];
location_type: any = [];
AvgDailyRate:any = [];
Compet_Occupancy:any = [];
Compet_AvgDailyRate: any = [];
PercentGovtNights:any = [];
PercentGroupNights:any = [];
PercentTransientNights:any = [];
PercentBusiness: any = [];
PercentLeisure: any = [];
hotelcount1mile: any = [];
hotelcount5mile: any = [];
rooms1mile:any = [];
rooms5mile: any = [];
loyalty_pct: any = [];
call_center_booking_pct: any = [];
travel_agency_booking_pct: any = [];
third_party_web_bookings_pct:any = [];
hotel_to_hotel_bookings_pct: any = [];
direct_call_booking_pct:any = [];
direct_web_booking_pct: any = [];
Class: any = [];

fullarray:any = []
converXvalues(densityArray:any){
  console.log('inside function',densityArray);
  densityArray.forEach((element,i) => {
    //console.log(element)
    this.hotalid.push(element.hotel_id);
    this.max_rooms_capacity.push(element.max_rooms_capacity)
    this.building_type.push(element.building_type)
    this.location_type.push(element.location_type)
    this.AvgDailyRate.push(element.AvgDailyRate)
    this.Compet_Occupancy.push(element.Compet_Occupancy)
    this.Compet_AvgDailyRate.push(element.Compet_AvgDailyRate)
    this.PercentGovtNights.push(element.PercentGovtNights)

    this.PercentGroupNights.push(element.PercentGroupNights)

    this.PercentTransientNights.push(element.PercentTransientNights)
    this.PercentBusiness.push(element.PercentBusiness)
    this.PercentLeisure.push(element.PercentLeisure)
    this.hotelcount1mile.push(element.hotelcount1mile)
    this.hotelcount5mile.push(element.hotelcount5mile)
    this.rooms1mile.push(element.rooms1mile)
    this.rooms5mile.push(element.rooms5mile)
    this.loyalty_pct.push(element.loyalty_pct)
    this.call_center_booking_pct.push(element.call_center_booking_pct)
    this.travel_agency_booking_pct.push(element.travel_agency_booking_pct)
    this.third_party_web_bookings_pct.push(element.third_party_web_bookings_pct)
    this.hotel_to_hotel_bookings_pct.push(element.hotel_to_hotel_bookings_pct)
    this.direct_call_booking_pct.push(element.direct_call_booking_pct)
    this.direct_web_booking_pct.push(element.direct_web_booking_pct)
    this.Class.push(element.Class)

  });
  console.log('this.hotalid',this.hotalid);
  console.log('this.max_rooms_capacity',this.max_rooms_capacity);
  console.log('this.building_type',this.building_type);
  console.log('this.location_type',this.location_type);
  console.log('this.AvgDailyRate',this.AvgDailyRate);
  console.log('this.Compet_Occupancy',this.Compet_Occupancy);
  console.log('this.Compet_AvgDailyRate',this.Compet_AvgDailyRate);
  console.log('this.PercentGovtNights',this.PercentGovtNights);
  console.log('this.PercentGroupNights',this.PercentGroupNights);
  console.log('this.PercentTransientNights',this.PercentTransientNights);
  console.log('this.PercentBusiness',this.PercentBusiness);
  console.log('this.PercentLeisure',this.PercentLeisure);
  console.log('this.hotelcount1mile',this.hotelcount1mile);
  console.log('this.hotelcount5mile',this.hotelcount5mile);
  console.log('this.rooms1mile',this.rooms1mile);
  console.log('this.rooms5mile',this.rooms5mile);
  console.log('this.loyalty_pct',this.loyalty_pct);
  console.log('this.call_center_booking_pct',this.call_center_booking_pct);
  console.log('this.travel_agency_booking_pct',this.travel_agency_booking_pct);
  console.log('this.third_party_web_bookings_pct',this.third_party_web_bookings_pct);
  console.log('this.hotel_to_hotel_bookings_pct',this.hotel_to_hotel_bookings_pct);
  console.log('this.direct_call_booking_pct',this.direct_call_booking_pct);
  console.log('this.direct_web_booking_pct',this.direct_web_booking_pct);
  console.log('this.Class',this.Class);
  if(this.Class.length > 0){
   
    var obj1 = {
      count:0,
      name:'hotalid',
      data:this.hotalid
    }
    this.fullarray.push(obj1);
    var obj2 = {
      count:1,
      name:'max_rooms_capacity',
      data:this.max_rooms_capacity
    }
    this.fullarray.push(obj2);

    // var obj3 = {
    //   count:2,
    //   data:this.building_type
    // }
    //  this.fullarray.push(obj3);

    // var obj4 = {
    //   count:3,
    //   data:this.location_type
    // }
    //  this.fullarray.push(obj4);

     var obj3 = {
      count:2,
      name:'AvgDailyRate',
      data:this.AvgDailyRate
     }
     this.fullarray.push(obj3);
     var obj4 = {
      count:3,
      name:'Compet_Occupancy',
      data:this.Compet_Occupancy
     }
     this.fullarray.push(obj4);

     var obj5 = {
      count:4,
      name:'Compet_AvgDailyRate',
      data:this.Compet_AvgDailyRate
     }
     this.fullarray.push(obj5);

     var obj6 = {
      count:5,
      name:'PercentGovtNights',
      data:this.PercentGovtNights
     }
     this.fullarray.push(obj6);
     var obj7 = {
      count:6,
      name:'PercentGroupNights',
      data:this.PercentGroupNights
     }
     this.fullarray.push(obj7);
     
     var obj8 = {
      count:7,
      name:'PercentTransientNights',
      data:this.PercentTransientNights
     }
     this.fullarray.push(obj8);

     var obj9 = {
      count:8,
      name:'PercentBusiness',
      data:this.PercentBusiness
     }
     this.fullarray.push(obj9);

     var obj10 = {
      count:9,
      name:'PercentLeisure',
      data:this.PercentLeisure
     }

     this.fullarray.push(obj10);

     var obj11 = {
      count:10,
      name:'hotelcount1mile',
      data:this.hotelcount1mile
     }
     this.fullarray.push(obj11);

     var obj12 = {
      count:11,
      name:'hotelcount5mile',
      data:this.hotelcount5mile
     }
     this.fullarray.push(obj12);
     
     var obj13 = {
      count:12,
      name:'rooms1mile',
      data:this.rooms1mile
     }
     this.fullarray.push(obj13);
     var obj14 = {
      count:13,
      name:'rooms5mile',
      data:this.rooms5mile
     }
     this.fullarray.push(obj14);
     var obj15 = {
      count:14,
      name:'loyalty_pct',
      data:this.loyalty_pct
     }
     this.fullarray.push(obj15);
     var obj16 = {
      count:15,
      name:'call_center_booking_pct',
      data:this.call_center_booking_pct
     }
     this.fullarray.push(obj16);
     var obj17 = {
      count:16,
      name:'travel_agency_booking_pct',
      data:this.travel_agency_booking_pct
     }
     this.fullarray.push(obj17);

     var obj18 = {
      count:17,
      name:'third_party_web_bookings_pct',
      data:this.third_party_web_bookings_pct
     }
     this.fullarray.push(obj18);
     var obj19 = {
      count:18,
      name:'hotel_to_hotel_bookings_pct',
      data:this.hotel_to_hotel_bookings_pct
     }
     this.fullarray.push(obj19);
     var obj20 = {
      count:19,
      name:'direct_call_booking_pct',
      data:this.direct_call_booking_pct
     }
     this.fullarray.push(obj20);
     var obj21 = {
      count:20,
      name:'direct_web_booking_pct',
      data:this.direct_web_booking_pct
     }

     this.fullarray.push(obj21);
     var obj22 = {
      count:21,
      name:'Class',
      data:this.Class
     }
     this.fullarray.push(obj22);
  

  }
  console.log('this.fullarray->',this.fullarray)
  var dataobj = {
    "layout" :  {
    "title":"Hotal ID",
      "yaxis": {
       // range: [0.001,0.007],
        "title":"KDE",
      },
      "xaxis": {
       // range: [0,600],
        "title":"",
      },
      },
    "dataval": this.fullarray,
 
}
console.log('-------------------------------------------------------------------------------------');
console.log(dataobj);
this.dataHisto = dataobj
}



}
