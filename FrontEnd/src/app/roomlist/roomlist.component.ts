import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  public roomList: Object[] = [
    {'ID' : '1', 'number' : '123', 'Availability' : 'available', 'Price' : '750'},
    {'ID' : '2', 'number' : '345', 'Availability' : 'available', 'Price' : '500'},
    {'ID' : '3', 'number' : '456', 'Availability' : 'not available', 'Price' : '550'},
    {'ID' : '4', 'number' : '567', 'Availability' : 'not available', 'Price' : '650'},
    {'ID' : '5', 'number' : '678', 'Availability' : 'available', 'Price' : '700'},
  ];

    Book(id) : void {
      for (var i = 0; i < this.roomList.length; i++) {
        if (this.roomList[i]['number'] == id) {
          this.roomList[i]['Availability'] = 'not available';
          break;
        }
      }
    }
  


  constructor() { }

  ngOnInit() {
  }

}
