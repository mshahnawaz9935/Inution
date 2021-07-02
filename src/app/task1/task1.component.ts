import { NgModule, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})

// export interface Devices {
//   devices:object
// }

export class Task1Component implements OnInit {

  devices: any = [];
  constructor( private http:HttpClient) { 
   
  }

  ngOnInit(): void {
    this.http.get('../assets/devices.json').subscribe((data:any) => {
      this.devices = data.devices ; })
  }

}
