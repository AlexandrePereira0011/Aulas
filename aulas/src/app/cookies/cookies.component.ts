import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ler();
  }
  cookies:boolean;

  aceitar(ref:HTMLElement)
  {
    localStorage.setItem("cookie","1");
    ref.classList.add("descer");
    setTimeout(() => {
     ref.style.display ="none";
      },1000);
  }

  ler(){
    localStorage.getItem("cookie");
    this.cookies = localStorage.getItem("cookie") == "1" ? true : false;
  }
}