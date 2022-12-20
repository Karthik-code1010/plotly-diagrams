import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApplicationDetailsComponent } from './add-application-details/add-application-details.component';
import { BarchartComponent } from './modules/pages/barchart/barchart.component';
import { BasicChartDataComponent } from './modules/pages/basic-chart-data/basic-chart-data.component';
import { BasicHeatmapDataComponent } from './modules/pages/basic-heatmap-data/basic-heatmap-data.component';
import { BasicHeatmapComponent } from './modules/pages/basic-heatmap/basic-heatmap.component';
import { ClassbarComponent } from './modules/pages/classbar/classbar.component';
import { DensityplotComponent } from './modules/pages/densityplot/densityplot.component';
import { DensityplotdataComponent } from './modules/pages/densityplotdata/densityplotdata.component';
import { FeatureButtonComponent } from './modules/pages/feature-button/feature-button.component';
import { ModelingDataComponent } from './modules/pages/modeling-data/modeling-data.component';
import { ModelingComponent } from './modules/pages/modeling/modeling.component';
import { PlotlydiagramComponent } from './modules/pages/plotlydiagram/plotlydiagram.component';
import { ScatterPlotDataComponent } from './modules/pages/scatter-plot-data/scatter-plot-data.component';
import { ScatterPlotComponent } from './modules/pages/scatter-plot/scatter-plot.component';
import { ScatterThresholdDataComponent } from './modules/pages/scatter-threshold-data/scatter-threshold-data.component';
import { ScatterThresholdComponent } from './modules/pages/scatter-threshold/scatter-threshold.component';



const routes: Routes = [
  {path:"", component: FeatureButtonComponent},
  {path:"plotly-diagram", component: FeatureButtonComponent}, // ModelingComponent PlotlydiagramComponent
  {path:"bartype", component: PlotlydiagramComponent},
  {path:"modeling-diagram", component: ModelingComponent}, //ModelingDataComponent
  {path:"modeling-data", component: ModelingDataComponent}, 
  {path:"basic-heatmap", component: BasicHeatmapComponent}, //BarchartComponent
  {path:"basic-heatmapdata", component: BasicHeatmapDataComponent}, //BasicHeatmapDataComponent
  {path:"bar-chart", component: BarchartComponent},  
  {path:"bar-chart-data", component: BasicChartDataComponent},  //BasicChartDataComponent
  {path:"scatter_plot", component: ScatterPlotComponent}, //ScatterPlotComponent  
  {path:"scatter_plot-data", component: ScatterPlotDataComponent}, //ScatterPlotDataComponent
 
  {path:"scatter_threshold", component: ScatterThresholdComponent},//ScatterThresholdComponent
  {path:"scatter_threshold-data", component: ScatterThresholdDataComponent}, //ScatterThresholdDataComponent
  {path:"class-bar", component: ClassbarComponent}, 
  //ClassbarComponent
  {path:"density-plot", component: DensityplotComponent}, //DensityplotComponent
  {path:"density-plotdata", component: DensityplotdataComponent},  //DensityplotdataComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
