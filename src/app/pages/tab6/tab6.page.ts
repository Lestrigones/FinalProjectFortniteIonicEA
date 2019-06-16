import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { PostsService } from '../../services/posts.service';
import { ItemsService } from '../../services/items.service';
import { Week } from 'src/app/interfaces/iteminterface';
import { Item } from 'src/app/interfaces/storeinterface';
import { FortniteApiService } from '../../services/fortnite-api.service';
import { Router, Routes } from '@angular/router';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page implements OnInit {
  textoBuscar = '';
  
  constructor(private fortniteApiService: FortniteApiService,
    public navCtrl: NavController, private router: Router){



  }

  buscar(event){
    // console.log(event)
    const texto = event.detail.value;
    this.textoBuscar=texto;
  }

  // mas(){
  //   // this.navCtrl.push(MasinfoPage);
 
  //   this.router.navigate('MasinfoPage');
  // }
  
  
  ngOnInit() {




   
  }




}





