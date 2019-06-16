import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {


  
  @Output() avatarSel = new EventEmitter<string>();
  @Input() avatarActual = 'Alien.png';

  avatars = [
  
    {
      img: 'Alien.png',
      seleccionado: false
    },
    {
      img: 'Bat.png',
      seleccionado: false
    },
    {
      img: 'Casper.png',
      seleccionado: false
    },
    {
      img: 'Chucky.png',
      seleccionado: false
    },
    {
      img: 'Devil.png',
      seleccionado: false
    },
    {
      img: 'Dracula.png',
      seleccionado: false
    },
    {
      img: 'Frankenstein.png',
      seleccionado: false
    },
    {
      img: 'Freddie.png',
      seleccionado: false
    },
    {
      img: 'Ghost.png',
      seleccionado: false
    },
    {
      img: 'Gomez.png',
      seleccionado: false
    },
    {
      img: 'Jack Skellington.png',
      seleccionado: false
    },
    {
      img: 'Jason.png',
      seleccionado: false
    },
    {
      img: 'Kokey.png',
      seleccionado: false
    },
    {
      img: 'Mike.png',
      seleccionado: false
    },
    {
      img: 'Mummy.png',
      seleccionado: false
    },
    {
      img: 'Pumpkin.png',
      seleccionado: false
    },
    {
      img: 'Scream.png',
      seleccionado: false
    },
    {
      img: 'Skull.png',
      seleccionado: false
    },
    {
      img: 'Slimer.png',
      seleccionado: false
    },
    {
      img: 'Squash.png',
      seleccionado: false
    },

    
];

  avatarSlide ={

    slidesPerView:3.5
  };

  constructor() { }

  ngOnInit() {
    this.avatars.forEach( avatar => avatar.seleccionado = false );

    for ( const avatar of this.avatars ) {

      if ( avatar.img === this.avatarActual ) {
        avatar.seleccionado = true;
        break;
      }
    }


  }

  seleccionarAvatar(avatar){
    this.avatars.forEach(av => av.seleccionado = false);

    avatar.seleccionado = true;
    console.log(avatar.img);
    this.avatarSel.emit(avatar.img);

  }

}
