import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserService, private _snackBar: MatSnackBar) { }
  public user = {
    username:'',
    password : '',
    email : '',
    firstname : '',
    lastname : ''
  };
  public confirmpass = '';
  ngOnInit(): void {
    
  }
  formSubmit(){
    if(this.user.password != this.confirmpass || this.user.password == ''){
      this.openSnackBar("Password must match confirm password", "close")
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        alert("successfully registered");
      },
      (error)=>{
        this.openSnackBar("Something went wrong", "close")
        
      }
    )
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
