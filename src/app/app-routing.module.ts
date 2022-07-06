import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApplicationDetailsComponent } from './add-application-details/add-application-details.component';
import { BarchartComponent } from './modules/pages/barchart/barchart.component';
import { BasicHeatmapComponent } from './modules/pages/basic-heatmap/basic-heatmap.component';
import { FeatureButtonComponent } from './modules/pages/feature-button/feature-button.component';
import { ModelingComponent } from './modules/pages/modeling/modeling.component';
import { PlotlydiagramComponent } from './modules/pages/plotlydiagram/plotlydiagram.component';
import { ScatterPlotComponent } from './modules/pages/scatter-plot/scatter-plot.component';
import { ScatterThresholdComponent } from './scatter-threshold/scatter-threshold.component';



const routes: Routes = [
  {path:"", component: FeatureButtonComponent},
  {path:"plotly-diagram", component: FeatureButtonComponent}, // ModelingComponent PlotlydiagramComponent
  {path:"bartype", component: PlotlydiagramComponent},
  {path:"modeling-diagram", component: ModelingComponent}, //
  {path:"basic-heatmap", component: BasicHeatmapComponent}, //BarchartComponent
  {path:"bar-chart", component: BarchartComponent},
  {path:"scatter_plot", component: ScatterPlotComponent}, //ScatterPlotComponent 
  {path:"scatter_threshold", component: ScatterThresholdComponent},//ScatterThresholdComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
