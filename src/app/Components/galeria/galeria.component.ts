import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


declare var $:any;

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{
//  @Input() anchura:number =300;
  @Input('etiquetas') captions:boolean=false;



constructor(){
              
          }
          ngOnInit(): void {
              $('.galeria').bxSlider({        
                mode: 'fade',
                captions: true,
                slideWidth: 300
               
              });
            }
        
              
        }