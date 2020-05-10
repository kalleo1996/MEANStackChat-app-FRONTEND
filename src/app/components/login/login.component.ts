import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../../services/validation.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
  constructor(private validateService:ValidationService,
    private ngFlashMessageService: NgFlashMessageService,
    private auth:AuthService,
    private router: Router) { }

  ngOnInit() {
  }


  onLoginSubmit(){
    console.log(this.username);
    const User ={
   username:this.username,
   password:this.password
    }

   
    
    this.auth.authenticateUser(User).subscribe(data => {
   
      console.log(data.token);
      if(data.success){
     this.auth.StoreUserData(data.token , data.user);
     this.ngFlashMessageService.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: ["Sucessfully loggedIn"], 
    });
    this.router.navigate(['/dashboard']);


      }else{

        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["User not found"], 
          type: 'danger'
        });

       
        this.router.navigate(['/login']);


      }
    });

  }
}
