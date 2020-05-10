import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:String;
  constructor( private ngFlashMessageService: NgFlashMessageService,
    private auth:AuthService,
    private router: Router ) { }

  ngOnInit() {
 this.auth.getProfile().subscribe( profile =>{
  //var  json = JSON.parse(profile.user);
   console.log(profile.user);
   this.name=profile.user.name;

 })
   

  }

}
