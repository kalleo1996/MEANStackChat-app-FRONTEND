import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../../services/validation.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:String;
username:String;
email:String;
password:String;
textoutput:String;
msg:String;
  constructor(private validateService:ValidationService,
    private ngFlashMessageService: NgFlashMessageService,
    private auth:AuthService,
    private router: Router ) { }

  ngOnInit() {
  }


  onRegisterSubmit(){
    console.log(this.name);
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }

    if(!this.validateService.validateRegister(user)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["please fill the form"], 
        type: 'danger'
        
      
      });
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      console.log('use a valid email');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["use a valid email"], 
        type: 'danger'
        
      
      });
      return false;
    }
     
    this.auth.signUp(user).subscribe(
      data => {
        console.log(data);
     
   
        this.router.navigate(['/login']);
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          
          messages: ["sucessfully registered"], 
         
        });
      },
      error => {
        console.log(error);
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["Error in Register ,pleace try again"], 
          type: 'danger'
        });
      }
    );
 

   

  }

}
