import { Component , Input} from '@angular/core';
import { AyaxService } from '../ayax.service';
import { Pelicula } from '../peliculas';
@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})
export class RepartoComponent {
  constructor(private ayax: AyaxService){}
  @Input() peli?: Pelicula;
  peliculas: any;
  mostrarPeliculas():void{
    
    this.peliculas = this.ayax.verActores(this.peliculas);
   
    /*this.peliculas=PELICULAS;
    console.log(this.peliculas)*/
  }
}
