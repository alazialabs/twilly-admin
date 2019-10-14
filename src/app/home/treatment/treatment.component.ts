import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {
@Input() treatmentCondition:any;
  constructor() { }

  ngOnInit() {
  }

  changeDemetrication(){

  }

}
