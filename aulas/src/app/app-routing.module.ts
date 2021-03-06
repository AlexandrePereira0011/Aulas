import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { HomeComponent } from './home/home.component';
import { ReadmegeneratorComponent } from './readmegenerator/readmegenerator.component';


const routes: Routes = [ 
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculadora", component:CalculadoraComponent},
  {path:"readmegenerator", component:ReadmegeneratorComponent},
  {path:"experiment", component:ExperimentComponent},
  {path:"evAndRef", component:EvAndRefComponent},
  {path:"fichaAnimal",component:FichaAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
