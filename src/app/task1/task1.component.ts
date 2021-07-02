import { NgModule, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
  providers: [DataService]
})

// export interface Devices {
//   devices:object
// }

export class Task1Component implements OnInit {

  devices: any = [];
  constructor(service: DataService, private http:HttpClient) { 
    this.http.get('../assets/devices.json').subscribe((data:any) => {
      this.devices = data.devices ; 
    console.log('devices', this.devices)});
  }

  ngOnInit(): void {
  }

}
