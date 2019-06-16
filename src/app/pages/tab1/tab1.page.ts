import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  textoBuscar = '';
  posts: Post [] = [];

  habilitado = true;

  constructor (private postsService: PostsService){}



  ngOnInit(){

    this.siguientes();

    this.postsService.nuevoPost
      .subscribe( post => {

        this.posts.unshift( post );//unshift primera position

      });

      // buscar(event){
      //   // console.log(event)
      //   const texto = event.detail.value;
      //   this.textoBuscar=texto;
      // }
    // this.postsService.getPosts()
    //   .subscribe(resp =>{
    //      console.log(resp);
    //      this.posts.push(...resp.posts);
         
        
    //   });
  }

    //recargo lo mismo que en siguiente pero la unica diferencia es que sera la pagina 1 la actual
    recargar (event){

      this.siguientes(event, true);
      this.habilitado = true;
      this.posts = [];



    }

  siguientes(event?, pull: boolean = false){ //o viene o no viene
    //si exite el pull le envio la pagina 0 es decir la 1


      

    this.postsService.getPosts(pull)
      .subscribe(resp =>{
         console.log(resp);
         this.posts.push(...resp.posts);

          if ( event ) {

            event.target.complete();
            //si no hay mas registros
            if(resp.posts.length ===0) {
              this.habilitado=false;

              // event.target.disable = true;


            }
            
          }
         
        
      });

  }


}
