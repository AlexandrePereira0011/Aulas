import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { HomeComponent } from './home/home.component';
import { ReadmegeneratorComponent } from './readmegenerator/readmegenerator.component';


const routes: Routes = [ 
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculadora", component:CalculadoraComponent},
  {path:"readmegenerator", component:ReadmegeneratorComponent},
  {path:"experiment", component:ExperimentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
