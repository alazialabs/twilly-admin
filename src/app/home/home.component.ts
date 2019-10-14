import { Component, OnInit } from '@angular/core';
import {BindingService} from '../services/binding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showAddNew=true;
  public showTreatment=false;
  public selectedTreatmentCondition;
  constructor(private bindingService:BindingService) { }

  ngOnInit() {
    this.bindingService.selectedTreatmentCondition$.subscribe(selectedTreatmentCondition=>{
      this.showAddNew=false;
      this.selectedTreatmentCondition=selectedTreatmentCondition;
      this.showTreatment=true;
      console.log(selectedTreatmentCondition.treatmentId);
    });

    this.bindingService.addNew$.subscribe(()=>{
      this.showTreatment=false;
      this.showAddNew=true;
    });
  }



}
