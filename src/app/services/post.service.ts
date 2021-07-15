import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable} from 'rxjs';
import {Post} from '../modules/Post';

const httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl:string=
  'http://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { 

  }
  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }
  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.postsUrl,post,httpOptions);
  }
  updatePost(post:Post):Observable<Post>{
    const url= '${this.postsUrl}/${post.id}';
    return this.http.put<Post>(url,post,httpOptions);
  }

  getPosts(id: number) :Observable<Post>{
    const url= '${this.postsUrl}/${id}';
    return this.http.get<Post>(url);
  }
  removePost(post : Post | number): Observable<Post>{
    const id= typeof post === 'number' ? post : post.id;
    const url= '${this.postsUrl}/${id}';
    return this.http.delete<Post>(url,httpOptions);

  }
}
