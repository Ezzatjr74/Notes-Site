import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiesService } from '../servies.service';
import { Form } from '@angular/forms';
import { Pipe } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class HomeComponent implements OnInit {

  posts: any = [];
  newpost: any = {};
  url = "https://jsonplaceholder.typicode.com/posts";
  ourlength: any;
  constructor(config: NgbModalConfig, private modalService: NgbModal, public _Servies: ServiesService) {

    this._Servies.userdata().subscribe((user) => {
      this.posts = user
      this.ourlength = this.posts.length + 1;   
     })

    config.backdrop = 'static';
    config.keyboard = false;
  }


  postdata(title: any, note: any) {
    this.newpost = {
      title: title.value,
      body: note.value,
      id: this.ourlength++,
      userid: 19
    }
    this._Servies._HttpClient.post(this.url, this.newpost).subscribe(newpos => {
      this.posts.splice(0, 0, this.newpost);
      console.log(note.value.length)
    })
  }

  updatepost(post: any, updatetitle: { value: any; }, updatebody: { value: any; }) {
    let updatepost = {
      title: updatetitle.value,
      body: updatebody.value,
    }
    this._Servies._HttpClient.put(this.url + '/' + post.id, post).subscribe(newpos => {
      let index = this.posts.indexOf(post);
      this.posts[index] = updatepost
    })
  }

  deletpost(post: any) {
    let index = this.posts.indexOf(post)
    this._Servies._HttpClient.delete(this.url + '/' + post.id).subscribe(newpos => {
      this.posts.splice(index, 1)
    })
  }
// function to open any model
  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
