import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private loginService : LoginService) { }
  public isMentor : any;
  ngOnInit(): void {
    this.isMentor = this.loginService.isMentor();
  }

  mode = new FormControl('over');
}
