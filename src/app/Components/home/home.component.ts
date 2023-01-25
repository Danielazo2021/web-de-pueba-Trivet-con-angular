import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public visitante:string="";
  public identificado: boolean;
  public usuario:string="";
  
  constructor(){
    this.identificado=false;
    
  }
  ngOnInit(): void {
    
  }
  setIdentificado(){
    this.identificado=true;
    this.usuario= this.visitante;
  }
  incognito(){
    this.identificado=false;
  }
}
