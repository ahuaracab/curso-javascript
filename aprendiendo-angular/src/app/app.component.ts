import { Component } from '@angular/core';
import { Configuracion} from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string = 'Master de  javscript y angular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config = Configuracion;

  constructor(){

  	this.title = Configuracion.titulo;
  	this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(mostrar_videojuegos){
  	this.mostrar_videojuegos = mostrar_videojuegos;
  }
}
