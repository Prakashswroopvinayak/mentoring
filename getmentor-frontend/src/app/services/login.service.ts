import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http : HttpClient) { 
  }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  public generateToken(loginData : any) {
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  public loginUser(token : any){
    localStorage.setItem('token',token);
    return true;
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == null || tokenStr == '')
      return false;

    return true;
  }
  public getToken() {
    if(this.isLoggedIn())
      return localStorage.getItem('token');
    else
      return null;
  }
  public logout(){
    console.log("ismentor = ",this.isMentor());
    if(this.isMentor())
      localStorage.removeItem('mentor');
    localStorage.removeItem('token');
    
    localStorage.removeItem('user');

    return true;
  }

  public getCurrentMentor() {
    let username = this.getUser().username;
    return this.http.get(`${baseUrl}/user/getmentor/${username}`);
  }
  public setUser(user : any) {
    localStorage.setItem("user",JSON.stringify(user));
  }

  public getUser() {
    let userStr= localStorage.getItem("user");
    if(userStr != null) {
      //console.log("parsing",userStr);
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  
  public isMentor(){
    if(!this.isLoggedIn())
      return false;
    //console.log("u r logged in");
    let mentorStr = localStorage.getItem('mentor');
    //console.log("mentorStr is ",mentorStr);
    if(mentorStr == undefined || mentorStr == null || mentorStr == '')
        return false;
    return true;
  }

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
