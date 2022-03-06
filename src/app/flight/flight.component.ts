import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Flight } from '../class/flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flightData : Flight[] =[];
  flightform : FormGroup;
  startDate = new Date(Date.now())

  constructor(private fb:FormBuilder) {

    this.flightform = this.fb.group({
     fullName: ['', Validators.required],
     from: ['', Validators.required],
     to: ['', Validators.required],
     type: ['', Validators.required],
     departure: ['', Validators.required],
     arrival: ['', Validators.required],
     adults: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]$')]],
     children: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]$')]],
     infants: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]]
   });
 }
  ngOnInit(): void {

  }
  OnSubmit(value : any): void {
    console.log(value)
    this.flightData.push(value)
    alert("You Submit Success!!!.");
  }
}
