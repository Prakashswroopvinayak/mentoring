import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-mentor-carousel',
  templateUrl: './mentor-carousel.component.html',
  styleUrls: ['./mentor-carousel.component.css']
})
export class MentorCarouselComponent implements OnInit {

  @Input() mentor : any;
  /*@Output() viewMentorEvent = new EventEmitter<BigInteger>();
  addNewItem(value: BigInteger) {
    this.viewMentorEvent.emit(value);
  }*/
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
