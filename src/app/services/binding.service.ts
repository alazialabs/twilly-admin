import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

 @Injectable({
  providedIn: 'root'
})
export class BindingService {
private selectedTreatmentCondition=new Subject<any>();
private addNew=new Subject<any>();

public selectedTreatmentCondition$=this.selectedTreatmentCondition.asObservable();
public addNew$=this.addNew.asObservable();

selectTreatmentCondition(treatmentCondition){
  this.selectedTreatmentCondition.next(treatmentCondition);
}

openAddNew(){
  this.addNew.next(true);
}

}
