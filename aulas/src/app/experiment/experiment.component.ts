import { Component, OnInit , ViewChild} from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {
  @ViewChild('ref') referencia;

  constructor() { }

  ngOnInit(): void {
  }

  name:string ="Alexandre";
  arrayAnimais : Array<string> = ["cao","gato", "papagaio", "coelho"];

  changeName(event){
    this.name=event.target.value;
  }

  isfocus(event){
    console.log("Olá");
  }

  analisarReferencia(){
    console.log(this.referencia.nativeElement.value);
    this.referencia.nativeElement.style.background="red";
  }
  analisarReferenciaParametro(referencia){
    console.log(referencia.value);
    referencia.style.background="red";
  }
}