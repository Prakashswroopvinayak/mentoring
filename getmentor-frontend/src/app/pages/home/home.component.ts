import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MentorService } from '../../services/mentor.service';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../model/skill';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public topMentors : any;
  public allSkills : any;
  public isUserActive : any;
  public skill : Skill;
  constructor(private mentorService : MentorService,private skillService : SkillService, private loginService : LoginService) {
    this.skill = new Skill();
   }

  ngOnInit(): void {
    
    this.mentorService.getTopMentors().subscribe(data=>{this.topMentors=data});
    this.skillService.getAllSkills().subscribe(data=>{this.allSkills=data});
    this.isUserActive = this.loginService.isLoggedIn();
  }

}
