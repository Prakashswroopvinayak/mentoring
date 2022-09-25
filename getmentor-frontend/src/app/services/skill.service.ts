import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import {Skill} from '../model/skill';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http : HttpClient) { }
  /*public topSkills = [
    {name : "sample1"},
    {name : "sample2"},
    {name : "sample3"},
    {name : "sample4"},
    {name : "sample5"},
    {name : "sample6"},
    {name : "sample7"},
    {name : "sample8"},
    {name : "sample9"},
    
  ];*/
  

  public getAllSkills() {
    return this.http.get(`${baseUrl}/skills/`);
    
  }

}
