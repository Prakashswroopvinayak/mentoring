import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService : UserService, private _snackBar: MatSnackBar) { }
  public user = {
    username:'',
    password : '',
    email : '',
    firstname : '',
    lastname : ''
  };
  
  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.password == ''){
      this.openSnackBar("Password is Mandatory", "close")
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
