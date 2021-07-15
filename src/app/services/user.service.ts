import { Injectable } from '@angular/core';
import { Observable, observable,of} from 'rxjs';

import {User} from '../modules/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  data:Observable<any>;

  constructor() { 
    this.users=[
      {
      firstName: 'Mukesh',
      lastName: 'Yadav',
      email:'mk@gmail.com',
      //image: 'http://lorempixel.com/100/100/people/3',
      isActive:true,
      registered:new Date('01/02/2018 08:30:00'),
      hide:true
  },
  {
      firstName: 'Pavan',
      lastName: 'Yadav',
      email:'pv@gmail.com',
      isActive:false,
      registered:new Date('01/05/2019 07:30:00'),
      hide:true
  },
  {
      firstName: 'Pravin',
      lastName: 'Yadav',
      email:'pr@gmail.com',
      isActive:true,
      registered:new Date('01/06/2017 09:30:00'),
      hide:true
  }
];
  }
  getData(){
    this.data=new  Observable(oberver => {
      setTimeout(() => {
        oberver.next(1)
      },1000);

      setTimeout(() => {
        oberver.next(2)
      },2000);

      setTimeout(() => {
        oberver.next(3)
      },3000);

      setTimeout(() => {
        oberver.next(4)
      },4000);
    });

    return this.data;
  }
  getUser():Observable <User[]>{
    console.log('Fetching user from service');
    return of(this.users);
  }
  addUser(user:User){
    this.users.unshift(user);
  }
}
