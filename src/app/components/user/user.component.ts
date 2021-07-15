//import {Component} from '@angular/core'
import {Component,OnInit,ViewChild} from '@angular/core'
import {User} from '../../modules/User'
import {UserService} from '../../services/user.service'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    // template: '<h2>Mukesh Yadav</h2>'
})

export class UserComponent implements OnInit{
//Properties
user: User={
    firstName:'',
    lastName:'',
    email:''
};
users: User[];
showExtended:boolean=true;
loaded: boolean=false;
enableAdd:boolean=false;
showUserForm:boolean=false;
@ViewChild('userForm')form:any;
data:any;


// mixedArray : any[];
// myTuple: [string,number,boolean];
// unsuable:void;
// u:undefined;
// n:null;

//Method
constructor(private userService:UserService){
    
}
ngOnInit(){
    this.userService.getUser().subscribe (users => {
        this.users =users;
        this.loaded=true; 
    });

    this.userService.getData().subscribe(data => {
        console.log(data)
    })
    

}

onSubmit({value,valid}:{value:User,valid:boolean}){
   if(!valid){
console.log('Form is not valid')
   }else{
       value.isActive=true;
       value.registered=new Date();
       value.hide=true;
     this.userService.addUser(value);

     this.form.reset();
   } 
}


}

