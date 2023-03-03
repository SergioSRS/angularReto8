import { Component } from '@angular/core';
import { PELICULAS } from '../mock-pelis';
import { Pelicula } from '../peliculas';
import { AyaxService } from '../ayax.service';
import { IDBService } from '../idb.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
 pelicula: String = "";
 peliculas: Pelicula[] =[];
 selectedPeli?:Pelicula
  constructor(private ayax: AyaxService, public idb: IDBService){
    
  };
  
  anadirFavoritos(pelicula:Pelicula):void{
    this.idb.insertar(pelicula);
  }
  
  mostrarPeliculas():void{
    
    this.peliculas = this.ayax.mostrar(this.pelicula);
   
    /*this.peliculas=PELICULAS;
    console.log(this.peliculas)*/
  }
  onSelect(peli:Pelicula):void{
    this.selectedPeli = peli;
  }
  ngOnInit(): void {
    this.mostrarPeliculas()
  }

  
}
