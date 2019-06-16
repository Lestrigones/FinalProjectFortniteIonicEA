import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';


declare var FB:any;
// 2049546222009975
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // FB_APP_ID: number = 2392489640796829;
  validation_messages: any;

  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    email: 'test1@test.com',
    password: '1234'
  };

  registerUser: Usuario = {
    email: 'test',
    password: '1234',
    nombre: 'Test',
    avatar: 'Alien.png'
  };

  user: any = {};


  constructor( private usuarioService: UsuarioService,
               private navCtrl: NavController,
               private uiService: UiServiceService,
               private googlePlus: GooglePlus,
               ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );

    // (window as any).fbAsyncInit = function() {
    //   FB.init({
    //     appId      : '2392489640796829',
    //     cookie     : true,
    //     xfbml      : true,
    //     version    : 'v3.2'
    //   });
    //   FB.AppEvents.logPageView();
    // };
    // (function(d, s, id){
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {return;}
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));

    // this.validation_messages = {
    //   'email': [
    //     { type: 'required', message: 'Email is required' },
    //     { type: 'pattern', message: 'Email must be valid. Must contain a @ and only one dot in the domain. Domain between 2 and 3 characters long' }
    //   ],
    //   'password': [
    //     { type: 'required', message: 'Password is required' },
    //     { type: 'pattern', message: 'Password must be valid. Must contain at least one number and must be between 4 and 8 characters' }
    //   ]
    // }
}

//   fbLogin(){

//     console.log("Mandando petición de logueo en Facebook...");
//     FB.login((resp)=>
//     {
//       if(resp.authResponse){

//           this.registerUser = {
//             email: resp.email,
//             password: resp.passwod
//           }
//           this.usuarioService.registro(this.registerUser)
//             .subcribe(
//                 res => {
//                 // localStorage.getItem('token', res.token)
//                 this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
//                 },
//           err => console.log("Ha ocurrido un error iniciando sesión con Facebook: "+err)
//         ) 
//       }else
//       {
//       console.log('User login failed');
//       }
//  });

    
  // }




  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.AlertInfo('Usuario y contraseña no son correctos.');
    }


  }

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }

    const valido = await this.usuarioService.registro( this.registerUser );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.AlertInfo('Ese correo electrónico ya existe.');
    }


  }


  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }


}