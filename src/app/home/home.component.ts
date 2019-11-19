import { Component, OnInit } from '@angular/core';
import {BindingService} from '../services/binding.service';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showAddNew=false;
  public showTreatment=false;
  public selectedTreatmentCondition;
  public allTreatmentUsers;
  public selectedTreatmentUsers;
  constructor(private bindingService:BindingService, private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getUsers().subscribe(users=>{
      this.allTreatmentUsers=this.groupBy(users, 'treatmentId');
    });
    this.bindingService.selectedTreatmentCondition$.subscribe(selectedTreatmentCondition=>{
      this.showAddNew=false;
      this.selectedTreatmentCondition=selectedTreatmentCondition;
      if(this.allTreatmentUsers){
        this.selectedTreatmentUsers=this.allTreatmentUsers[selectedTreatmentCondition.treatmentId];
      }
      this.showTreatment=true;
      console.log(selectedTreatmentCondition.treatmentId);
    });

    this.bindingService.addNew$.subscribe(()=>{
      this.showTreatment=false;
      this.showAddNew=true;
    });
  }

  groupBy(array, key){
    return array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  } 


}
