import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isUserActive = false;
  public user:any = null;
  public mentor:any = null;
  public isMentor = false;
  constructor(public loginService : LoginService) { }

  ngOnInit(): void {
    this.isUserActive = this.loginService.isLoggedIn();
    //this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(data=>{
      this.isUserActive = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
      this.isMentor = this.loginService.isMentor();
      console.log("user is : ",this.user);
      console.log("mentor is : ",this.mentor);
    });
  }
  public logout() {
    this.loginService.logout();
    window.location.reload();
  }
}
