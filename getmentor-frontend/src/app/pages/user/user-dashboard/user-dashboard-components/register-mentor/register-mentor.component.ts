import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { MentorService } from 'src/app/services/mentor.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-register-mentor',
  templateUrl: './register-mentor.component.html',
  styleUrls: ['./register-mentor.component.css']
})
export class RegisterMentorComponent implements OnInit {

  constructor(private loginService : LoginService, private _snackBar: MatSnackBar, private mentorService : MentorService,
    private skillService : SkillService) { }
  public Dto = {
    mentor:{
      education : '',
      college : '',
      currentdesig : '',
      companyname : '',
      description : ''
    },
    username:this.loginService.getUser().username,
    skills:[]
  };
  allSkills :any;
  selected = [
    
  ];
  
  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(data=>{this.allSkills=data})
  }
  formSubmit(){
    if(this.selected == null || this.selected.length == 0){
      this.openSnackBar("Atleast one skill is mandatory", "close")
      return;
    }
    this.selected.forEach( (value) => {
      //console.log(value["id"]);
      this.Dto.skills.push(value["id"]);
    });
    this.mentorService.addMentor(this.Dto).subscribe(
      (data:any)=>{
        console.log(data);
        alert("successfully registered");
      },
      (error)=>{
        this.openSnackBar("Something went wrong", "close")  
      }
    );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
