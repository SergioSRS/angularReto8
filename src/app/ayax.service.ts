import { Injectable } from '@angular/core';
import { PELICULAS } from './mock-pelis';
import { Pelicula } from './peliculas';
import { PeliculasComponent } from './peliculas/peliculas.component';
@Injectable({
  providedIn: 'root'
})
export class AyaxService {

  constructor() { 
   
  }
 
  mostrar(hola:String): Pelicula[] {
    PELICULAS.length=0
    let xhr= new XMLHttpRequest()
    xhr.open('GET', 'https://imdb-api.com/en/API/SearchMovie/k_howoqd6v/'+hola, true)
    xhr.onload=function (){
    if(xhr.status==200){
      let resp= JSON.parse(this.response)
        let datos=resp.results
        for(let peli of datos){
            console.log(peli)
            let dato:Pelicula =
                {
                  id: peli.id,
                  imagen: peli.image,
                  titulo: peli.title,
                  descripcion: peli.description,
                  actores: []
                }
            PELICULAS.push(dato)
        }
    }
    }
    xhr.send()
    const pelis = PELICULAS
    return pelis
  }
  verActores(hola:String): Pelicula[] {
    PELICULAS.length=0
    let xhr= new XMLHttpRequest()
    xhr.open('GET', ' https://imdb-api.com/en/API/FullCast/k_b6wwrh4z/'+hola, true)
    xhr.onload=function (){
    if(xhr.status==200){
      let resp= JSON.parse(this.response)
        let datos=resp.results
        for(let peli of datos){
            console.log(peli)
            let dato:Pelicula =
                {
                  id: peli.id,
                  imagen: peli.image,
                  titulo: peli.title,
                  descripcion: peli.description,
                  actores: []
                }
            PELICULAS.push(dato)
        }
    }
    }
    xhr.send()
    const pelis = PELICULAS
    return pelis
  }
  
}
