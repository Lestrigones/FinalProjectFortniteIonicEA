import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { PostsService } from '../../services/posts.service';
import { ItemsService } from '../../services/items.service';
import { Week } from 'src/app/interfaces/iteminterface';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

//  challengeRecientes: Week[] = [];

weeks: Week[];
renderComponents = false;
renderChallenges = false;
textoBuscar = '';

constructor( private itemsService: ItemsService){

  }
   
  ngOnInit() {

    this.itemsService.getChallenges()

      .subscribe((res:object)=>
      {
        this.weeks=Object.values(res['challenges']);
        console.log(this.weeks);
        this.renderComponents=true;
      })


    }
    toogleChallenges() {
      this.renderChallenges = !this.renderChallenges;
  }
  buscar(event){
    // console.log(event)
    const texto = event.detail.value;
    this.textoBuscar=texto;
  }


    // this.itemsService.getChallenges()
    //   .subscribe(resp =>{
    //     console.log('Resp', resp);
    //     this.challengeRecientes = resp.results;
        

    //   });
  }





