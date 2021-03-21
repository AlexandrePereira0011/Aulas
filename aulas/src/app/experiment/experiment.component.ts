import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string ="Alexandre";

  changeName(event){
    this.name=event.target.value;
  }

  isfocus(event){
    console.log("gfsr8ug");
  }
}