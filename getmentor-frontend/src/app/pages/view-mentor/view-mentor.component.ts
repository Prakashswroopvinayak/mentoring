import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SlotsService } from 'src/app/services/slots.service';
import { DatePipe } from '@angular/common'
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-view-mentor',
  templateUrl: './view-mentor.component.html',
  styleUrls: ['./view-mentor.component.css']
})
export class ViewMentorComponent implements OnInit {

  constructor(public route: ActivatedRoute, private slotService : SlotsService, public datepipe: DatePipe, 
    private loginService : LoginService, private router : Router) { }
  mentorId : any;
  selected: Date|null=null;
  
  slots: any|null = null;
  selectedSlot : any;
  ngOnInit(): void {
    let sub;
    sub = this.route.params.subscribe(params => {
      this.mentorId = params['mentorId'];
      });
    console.log(this.mentorId);

  }
  
  showSlots(event:any) {
    console.log(event);

    //search all slots for this mentor and selected
    /*this.slots = [
      {start:"13:00", end : "13:30"},
      {start:"13:30", end : "14:00"},
      {start:"14:00", end : "14:30"},
      {start:"14:30", end : "15:00"}
    ];*/
    let selected_date =this.datepipe.transform(this.selected, 'yyyy-MM-dd');
    this.slotService.getAvailableTimings(this.mentorId, selected_date).subscribe(
      (data:any)=>{
        this.slots=data;
        console.log(data);
      },(error:any)=>{
        console.log(error);
      }
    );
    console.log(this.slots);
  }
  setSelectedSlot(slot : any) {
    this.selectedSlot = slot;
    //alert(slot);
  }
  successAlertBox() {
    Swal.fire('Whooa!', 'Booking confirmed!', 'success')
  }
  saveSchedule() {
    if(!this.loginService.isLoggedIn()) {
      this.router.navigate(["login"]);
      return;
    }
    let slotRequest = this.selectedSlot;
    let userid = this.loginService.getUser()['id'];
    slotRequest["bookedByUser"] = userid;
    this.slotService.saveSchedule(slotRequest).subscribe(
      (data:any)=>{
        console.log(data);
        this.successAlertBox();
        this.selected = null;
        this.selectedSlot = null;
        this.slots = null;

      },(error:any)=>{
        console.log(error);
        
      }
    );
    
  }
}
