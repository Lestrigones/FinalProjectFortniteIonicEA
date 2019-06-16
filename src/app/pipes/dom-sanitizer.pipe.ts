import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {



  // hacemos esto por si la imagen proviene de una variable js
  // Warning snitizinf unsafe style, basicamente dice q es inseguro

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(img: string): any {

    const domImg = ` background-image: url('${img}')`;

    return this.domSanitizer.bypassSecurityTrustStyle(domImg);
    
  }

}
