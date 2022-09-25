import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.css']
})
export class MentorprofileComponent implements OnInit {

  constructor(private loginService : LoginService,private mentorService : MentorService) { }
  mentor : any;
  //user : any;
  ngOnInit(): void {
    //this.mentor = this.loginService.getMentor();
    this.mentor = this.mentorService.getMentor();
    console.log("mentor from storage is ",this.mentor);
    
    
  }

}
