import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // 'http://plabbincom.atwebpages.com/wp-json/wp/v2/posts/posts
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly ROOT_URL = 'http://jsonplaceholder.typicode.com';
  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(
    private http: HttpClient,

    private alertCtrl: AlertController
  ) {}

  //    getPosts() {
  //     this.alertCtrl.create({
  //       header: 'Are you sure?',
  //       message:'Do you want to submit this post',
  //       buttons:['Yes']
  //     }).then(alertEl => {
  //       alertEl.present();
  //     });
  //      this.posts = this.http.get(this.ROOT_URL + '/posts');


  //    }

createPost(){
  this.alertCtrl.create({
    header: 'Are you sure?',
    message:'Do you want to submit this post',
    buttons:['Yes']
  }).then(alertEl => {
    alertEl.present();
  });
   const data: Post = {
     id: null,
     userId: 23,
     title: 'Simple Blog Post',
     body: 'Your Blog Post'
   };
   this.newPost = this.http.post(this.ROOT_URL + '/posts', data);
}


  btnCancel() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message:'Do you want to delete this post',
      buttons:['Yes']
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
