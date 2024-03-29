import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError, map } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as sha512 from 'js-sha512';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  //========================================== Production =======================================================

  // public NODE_API = "http://13.232.122.39";

//========================================== Production =======================================================
 //========================================== Development =======================================================

 public NODE_API = "http://localhost:8000";
 public NODE_API_SERVICE = "/api/service/";
 public APPLICATION = "IAM";
 public DATEFORMAT = "MM-dd-yyyy HH:mm";
//========================================== Development =======================================================
public MyPage = "";

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/geojson'
    })
  }  

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      // errorMessage = `Error: ${error.error.message}`;
      errorMessage = `Error : Client \nSomething went wrong.`;
    } else {
      // Server-side errors
      // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorMessage = `Error : Server \nSomething went wrong.`;
    }
    //   window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getData(url: string){
    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get(url,{headers}).pipe(retry(2),catchError(this.handleError));
  }
  
  scatterJson:any = [
    {
      "fpr_values": 0,
      "tpr_values": 0
    },
    {
      "fpr_values": 0,
      "tpr_values": 0.015151515151515152
    },
    {
      "fpr_values": 0,
      "tpr_values": 0.45454545454545453
    },
    {
      "fpr_values": 0.004032258064516129,
      "tpr_values": 0.45454545454545453
    },
    {
      "fpr_values": 0.004032258064516129,
      "tpr_values": 0.5606060606060606
    },
    {
      "fpr_values": 0.008064516129032258,
      "tpr_values": 0.5606060606060606
    },
    {
      "fpr_values": 0.008064516129032258,
      "tpr_values": 0.6060606060606061
    },
    {
      "fpr_values": 0.016129032258064516,
      "tpr_values": 0.6060606060606061
    },
    {
      "fpr_values": 0.016129032258064516,
      "tpr_values": 0.6136363636363636
    },
    {
      "fpr_values": 0.020161290322580645,
      "tpr_values": 0.6136363636363636
    },
    {
      "fpr_values": 0.020161290322580645,
      "tpr_values": 0.6666666666666666
    },
    {
      "fpr_values": 0.024193548387096774,
      "tpr_values": 0.6666666666666666
    },
    {
      "fpr_values": 0.024193548387096774,
      "tpr_values": 0.6742424242424242
    },
    {
      "fpr_values": 0.028225806451612902,
      "tpr_values": 0.6742424242424242
    },
    {
      "fpr_values": 0.028225806451612902,
      "tpr_values": 0.696969696969697
    },
    {
      "fpr_values": 0.036290322580645164,
      "tpr_values": 0.696969696969697
    },
    {
      "fpr_values": 0.036290322580645164,
      "tpr_values": 0.7272727272727273
    },
    {
      "fpr_values": 0.04032258064516129,
      "tpr_values": 0.7272727272727273
    },
    {
      "fpr_values": 0.04032258064516129,
      "tpr_values": 0.7651515151515151
    },
    {
      "fpr_values": 0.04435483870967742,
      "tpr_values": 0.7651515151515151
    },
    {
      "fpr_values": 0.04435483870967742,
      "tpr_values": 0.7803030303030303
    },
    {
      "fpr_values": 0.05241935483870968,
      "tpr_values": 0.7803030303030303
    },
    {
      "fpr_values": 0.05241935483870968,
      "tpr_values": 0.8106060606060606
    },
    {
      "fpr_values": 0.06048387096774194,
      "tpr_values": 0.8106060606060606
    },
    {
      "fpr_values": 0.06048387096774194,
      "tpr_values": 0.8181818181818182
    },
    {
      "fpr_values": 0.07258064516129033,
      "tpr_values": 0.8181818181818182
    },
    {
      "fpr_values": 0.07258064516129033,
      "tpr_values": 0.8333333333333334
    },
    {
      "fpr_values": 0.08064516129032258,
      "tpr_values": 0.8333333333333334
    },
    {
      "fpr_values": 0.08064516129032258,
      "tpr_values": 0.8484848484848485
    },
    {
      "fpr_values": 0.08870967741935484,
      "tpr_values": 0.8484848484848485
    },
    {
      "fpr_values": 0.08870967741935484,
      "tpr_values": 0.8560606060606061
    },
    {
      "fpr_values": 0.10080645161290322,
      "tpr_values": 0.8560606060606061
    },
    {
      "fpr_values": 0.10080645161290322,
      "tpr_values": 0.8787878787878788
    },
    {
      "fpr_values": 0.10887096774193548,
      "tpr_values": 0.8787878787878788
    },
    {
      "fpr_values": 0.10887096774193548,
      "tpr_values": 0.8939393939393939
    },
    {
      "fpr_values": 0.12096774193548387,
      "tpr_values": 0.8939393939393939
    },
    {
      "fpr_values": 0.12096774193548387,
      "tpr_values": 0.9015151515151515
    },
    {
      "fpr_values": 0.12903225806451613,
      "tpr_values": 0.9015151515151515
    },
    {
      "fpr_values": 0.12903225806451613,
      "tpr_values": 0.9090909090909091
    },
    {
      "fpr_values": 0.13709677419354838,
      "tpr_values": 0.9090909090909091
    },
    {
      "fpr_values": 0.13709677419354838,
      "tpr_values": 0.9166666666666666
    },
    {
      "fpr_values": 0.18548387096774194,
      "tpr_values": 0.9166666666666666
    },
    {
      "fpr_values": 0.18548387096774194,
      "tpr_values": 0.9242424242424242
    },
    {
      "fpr_values": 0.1935483870967742,
      "tpr_values": 0.9242424242424242
    },
    {
      "fpr_values": 0.1935483870967742,
      "tpr_values": 0.9318181818181818
    },
    {
      "fpr_values": 0.1975806451612903,
      "tpr_values": 0.9318181818181818
    },
    {
      "fpr_values": 0.1975806451612903,
      "tpr_values": 0.9393939393939394
    },
    {
      "fpr_values": 0.21370967741935484,
      "tpr_values": 0.9393939393939394
    },
    {
      "fpr_values": 0.21370967741935484,
      "tpr_values": 0.9545454545454546
    },
    {
      "fpr_values": 0.22983870967741934,
      "tpr_values": 0.9545454545454546
    },
    {
      "fpr_values": 0.22983870967741934,
      "tpr_values": 0.9621212121212122
    },
    {
      "fpr_values": 0.24596774193548387,
      "tpr_values": 0.9621212121212122
    },
    {
      "fpr_values": 0.24596774193548387,
      "tpr_values": 0.9696969696969697
    },
    {
      "fpr_values": 0.3346774193548387,
      "tpr_values": 0.9696969696969697
    },
    {
      "fpr_values": 0.3346774193548387,
      "tpr_values": 0.9772727272727273
    },
    {
      "fpr_values": 0.3951612903225806,
      "tpr_values": 0.9772727272727273
    },
    {
      "fpr_values": 0.3951612903225806,
      "tpr_values": 0.9848484848484849
    },
    {
      "fpr_values": 0.4112903225806452,
      "tpr_values": 0.9848484848484849
    },
    {
      "fpr_values": 0.4112903225806452,
      "tpr_values": 0.9924242424242424
    },
    {
      "fpr_values": 0.4798387096774194,
      "tpr_values": 0.9924242424242424
    },
    {
      "fpr_values": 0.4798387096774194,
      "tpr_values": 1
    },
    {
      "fpr_values": 1,
      "tpr_values": 1
    }
  ]


  public getStaticJson(): Observable<any>{
    return this.httpClient.get(this.scatterJson)
  
   
  }

  public postData( postObj: any,url: string){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    // var header = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return this.httpClient.post(url,postObj,{headers}).pipe(retry(2),catchError(this.handleError));
  }

  public patchData( postObj: any, url: string){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    // var header = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return this.httpClient.patch(url,postObj,{headers}).pipe(retry(2),catchError(this.handleError));
  }

  public deleteData( postObj: any, url: string){
    return this.httpClient.delete(url,postObj).pipe(retry(2),catchError(this.handleError));
  }

  public generateHash(str: string){
    return sha512.sha512(str);
  }

  public getFlooredFixed(v: any, d: any) {
    return (Math.floor(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
  }

  public downloadFile(url:string): any {
		return this.httpClient.get(url, {responseType: 'blob'}).pipe(retry(2),catchError(this.handleError));
  }
  public isEmptyObject(obj:any) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
