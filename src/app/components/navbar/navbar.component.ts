import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private ngFlashMessageService: NgFlashMessageService,
    private auth:AuthService,
    private router: Router) { }

  ngOnInit() {
    
  }


onLogoutClick(){
this.auth.logout();
this.ngFlashMessageService.showFlashMessage({
  // Array of messages each will be displayed in new line
  messages: ["Sucessfully loged out"], 
  type: 'success'
});
this.router.navigate(['/login']);
return false;
}




}
