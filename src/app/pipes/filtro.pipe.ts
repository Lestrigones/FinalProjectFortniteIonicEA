import { Pipe, PipeTransform } from '@angular/core';
import { Post, Usuario } from '../interfaces/interfaces';
import { Challenge } from '../interfaces/iteminterface';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: Challenge[], texto: string ): Challenge[] {

    if(texto.length ===0){
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(palabra =>{
      return palabra.difficulty.toLocaleLowerCase().includes(texto);
    });
  }

}