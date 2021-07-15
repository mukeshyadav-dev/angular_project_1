import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import {PostService} from '../../services/post.service';
import {Post} from '../../modules/Post';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  post:Post;

  constructor(
    private route:ActivatedRoute,
    private postservice:PostService,
    private location : Location
  ) { 
    
  }

  ngOnInit(){
    const id= +this.route.snapshot.paramMap.get('id');
    this.postservice.getPosts(id).subscribe(post =>this.post=post );
  }

}
