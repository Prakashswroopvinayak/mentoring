import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http : HttpClient) { }
  /*public topMentors = [
    {name : "sample1", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample2", education:"btech", rating:4, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample3", education:"btech", rating:4, companyname:"None", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample4", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample5", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample6", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample7", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample8", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample9", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    
  ];*/
  myMentorProfile :any;
  public getTopMentors() {
    return this.http.get(`${baseUrl}/mentor/mentors/top`);
    //return this.topMentors;
  }
  public addMentor(Dto : any) {
    return this.http.post(`${baseUrl}/mentor/`,Dto);
  }
  public getAllMentors() {
    return this.http.get(`${baseUrl}/mentor/mentors`);
  } 

  //check if its -1 else get the mentor details
  public setMentor(mentor : any) {
    if(mentor.mentor == -1)
      return;
    let id = mentor.mentor;
    this.http.get(`${baseUrl}/mentor/getmentor/${id}`).subscribe(
      (data:any)=>{
        this.myMentorProfile = data;
        console.log(data);
        localStorage.setItem("mentor",JSON.stringify(this.myMentorProfile));
        //console.log("mentor is set");
      },
      (error:any)=>{
        console.log("error");
      }
    );
    localStorage.setItem("mentor",JSON.stringify(this.myMentorProfile));
  }
  
  public getMentor() {
    let mentorStr= localStorage.getItem("mentor");
    if(mentorStr != null) {
      return JSON.parse(mentorStr);
      //return mentorStr;
    }else{
      return null;
    }
  }
   
}
