import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tela:any="";
  conta:any="";
  ultimoNumero:number;


  mudarMostrador(event){
    if (event.target.value=="C"){
      this.tela="";
      this.conta="";
    }else if (event.target.value=="x"){
      this.conta = this.conta + "*";
      this.tela = this.conta;
    }else if (event.target.value=="+/-"){
      if (Math.sign(Number(this.conta))){
        this.conta = "+" + this.conta ;
        this.tela = this.conta;
      }else if (this.ultimoNumero>0){
        this.conta = this.conta;
        this.tela = this.conta;
      }
    }else{
        this.conta = this.conta + event.target.value;
        this.tela = this.conta;
    }
  }

  calcular(){
    this.conta = eval(this.conta);
    this.tela = this.conta;
  }
 
}