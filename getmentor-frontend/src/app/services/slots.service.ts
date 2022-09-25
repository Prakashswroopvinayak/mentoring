import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  constructor(private http : HttpClient) { }

  getAvailableTimings(mentorId:number, slotdate:any) {
    /*const qparams = new HttpParams().append('mentorid',mentorId);
    qparams.append('slotdate', slotdate);*/
    let qparams = new HttpParams().set('mentorid',mentorId).set('slotdate', slotdate);
    return this.http.get(`${baseUrl}/meetingslots/gettime`,{ params: qparams });
    
  }
  saveSchedule(slot:any) {
    return this.http.put(`${baseUrl}/meetingslots/`, slot,{ responseType: 'text' });
    
  }
}
