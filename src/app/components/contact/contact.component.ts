import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public withSlider: number;
  public anchuraToSlider: any;
  public captions : boolean;
  public autor: any;
  @ViewChild('textos') textos;

  constructor() { 
    this.captions = true;
  }

  ngOnInit() {
    var opcionBasica = document.querySelector("#texto").innerHTML;    
  	//console.log(this.textos.nativeElement.innerText); 
  }

  cargarSlider(){    
    this.anchuraToSlider = this.withSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(event)
  {
    this.autor = event;
  }
}