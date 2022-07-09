


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddApplicationDetailsComponent } from './add-application-details/add-application-details.component';


import { FormlyFieldCustomInput } from 'src/formly/formly-field-custom-input';



import { FormlyFieldCustomSelect } from 'src/formly/formly-field-custom-select';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './meterial/meterial.module';

import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';


import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { FormlyFieldCustomDatePicker } from 'src/formly/formly-field-custom-datepicker';
import { FormlyFieldCustomFile } from 'src/formly/formly-field-custom-file';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import { PlotlydiagramComponent } from './modules/pages/plotlydiagram/plotlydiagram.component';
import { ModelingComponent } from './modules/pages/modeling/modeling.component';
import { BasicHeatmapComponent } from './modules/pages/basic-heatmap/basic-heatmap.component';
import { BarchartComponent } from './modules/pages/barchart/barchart.component';
import { ScatterPlotComponent } from './modules/pages/scatter-plot/scatter-plot.component';
import { ScatterThresholdComponent } from './modules/pages/scatter-threshold/scatter-threshold.component';
import { FeatureButtonComponent } from './modules/pages/feature-button/feature-button.component';
import { ModelingDataComponent } from './modules/pages/modeling-data/modeling-data.component';
import { BasicHeatmapDataComponent } from './modules/pages/basic-heatmap-data/basic-heatmap-data.component';
import { BasicChartDataComponent } from './modules/pages/basic-chart-data/basic-chart-data.component';
import { ScatterPlotDataComponent } from './modules/pages/scatter-plot-data/scatter-plot-data.component';
import { ScatterThresholdDataComponent } from './modules/pages/scatter-threshold-data/scatter-threshold-data.component';
import { ClassbarComponent } from './modules/pages/classbar/classbar.component';
import { DensityplotComponent } from './modules/pages/densityplot/densityplot.component';

//import Plotly from 'plotly.js-dist';
//var Plotly = require('plotly.js/lib/core');

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    FormlyFieldCustomFile ,
    FormlyFieldCustomDatePicker,
    FormlyFieldCustomSelect,
  
    AppComponent,
    AddApplicationDetailsComponent,
    FormlyFieldCustomInput,
    PlotlydiagramComponent,
    ModelingComponent,
    BasicHeatmapComponent,
    BarchartComponent,
    ScatterPlotComponent,
    ScatterThresholdComponent,
    FeatureButtonComponent,
    ModelingDataComponent,
    BasicHeatmapDataComponent,
    BasicChartDataComponent,
    ScatterPlotDataComponent,
    ScatterThresholdDataComponent,
    ClassbarComponent,
    DensityplotComponent,



   
   
  ],
  imports: [
    
    MaterialFileInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot(), 
    
    FlexLayoutModule,
    MatFormFieldModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
     
      types: [
     
      { name: 'inno-input', component: FormlyFieldCustomInput}, //
      { name: 'inno-select', component: FormlyFieldCustomSelect}, 
      { name: 'inno-date', component: FormlyFieldCustomDatePicker}, 
      { name: 'inno-file', component:  FormlyFieldCustomFile }, 
      
    ],
      wrappers: [
       
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ], 
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
