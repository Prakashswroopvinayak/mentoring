import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MentorService } from 'src/app/services/mentor.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-findmentor',
  templateUrl: './findmentor.component.html',
  styleUrls: ['./findmentor.component.css']
})
export class FindmentorComponent implements OnInit {

  constructor(private mentorService : MentorService,private skillService : SkillService, private loginService : LoginService) { }
  public topMentors : any;
  public allSkills : any;
  public allMentors : any;
  public selected = [
    
  ];
  public selected1 = [
    
  ];
  
  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(data=>{this.allSkills=data});
    this.mentorService.getTopMentors().subscribe(data=>{this.topMentors=data});
    this.mentorService.getAllMentors().subscribe(data=>{this.allMentors=data});
    //console.log(this.allMentors, this.allSkills);  

    
  }

  
}
