import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allmentee',
  templateUrl: './allmentee.component.html',
  styleUrls: ['./allmentee.component.css']
})
export class AllmenteeComponent implements OnInit {

  constructor() { }
  allmentees = [
    {"id":1,"name":"Rahul","description":"I am a final year student and I would need help in Competitive programming","rating":5,
    "education":"Btech","companyname":"NA","college":"Indian Institute of Information Technology","currentdesig":"student"},
    {"id":1,"name":"Rahul","description":"I am a final year student and I would need help in Competitive programming","rating":5,
    "education":"Btech","companyname":"NA","college":"Indian Institute of Information Technology","currentdesig":"student"},
    {"id":1,"name":"Rahul","description":"I am a final year student and I would need help in Competitive programming","rating":5,
    "education":"Btech","companyname":"NA","college":"Indian Institute of Information Technology","currentdesig":"student"},
    {"id":1,"name":"Rahul","description":"I am a final year student and I would need help in Competitive programming","rating":5,
    "education":"Btech","companyname":"NA","college":"Indian Institute of Information Technology","currentdesig":"student"},
    {"id":1,"name":"Rahul","description":"I am a final year student and I would need help in Competitive programming","rating":5,
    "education":"Btech","companyname":"NA","college":"Indian Institute of Information Technology","currentdesig":"student"},
    {"id":1,"name":"Rahul","description":"I am a final year student and I would need help in Competitive programming","rating":5,
    "education":"Btech","companyname":"NA","college":"Indian Institute of Information Technology","currentdesig":"student"},
    {"id":1,"name":"Rahul","description":"I am a final year student and I would need help in Competitive programming","rating":5,
    "education":"Btech","companyname":"NA","college":"Indian Institute of Information Technology","currentdesig":"student"},
  ];
  ngOnInit(): void {
  }

}
