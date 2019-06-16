import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imageSanitizer'
})
export class ImageSanitizerPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {}

  transform( img: string, userId: string): string {
    return `${ URL }/posts/imagen/${ userId }/${ img }`;
  }

}

