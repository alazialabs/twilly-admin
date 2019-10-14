import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
@Component({
  selector: 'app-new-treatment',
  templateUrl: './new-treatment.component.html',
  styleUrls: ['./new-treatment.component.scss']
})
export class NewTreatmentComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }

  fileUpload(files:FileList, type){
    console.log(files);
    if(files && files.length>0){
      const file:File=files.item(0);
      const reader:FileReader=new FileReader();
      reader.readAsText(file);
      reader.onload=(e)=>{
        let csv=reader.result;
        console.log(type,csv);
        if(type==='treatmentCondition'){
          this.adminService.createTreatmentConditionsFromFile({csv:csv}).subscribe(result=>{
            console.log(result);
          });
        }
        if(type==='user'){
          this.adminService.createUsersFromFile({csv:csv}).subscribe(result=>{
            console.log(result);
          });
        }
      };
    }
  }

}
