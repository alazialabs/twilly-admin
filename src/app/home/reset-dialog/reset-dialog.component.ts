import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-reset-dialog',
  templateUrl: './reset-dialog.component.html',
  styleUrls: ['./reset-dialog.component.scss']
})
export class ResetDialogComponent implements OnInit {
  public resetSubject;
  public requestBody;
  constructor(
    public dialogRef:MatDialogRef<ResetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public params:any,
    public adminService:AdminService
  ) { }

  ngOnInit() {
    if(this.params.type==='treatment'){
      this.resetSubject=`for all users of Treatment Condition ${this.params.treatmentId}`;
      this.requestBody={studyCompleted:true, treatmentId:this.params.treatmentId};
    }
    if(this.params.type==='user'){
      this.resetSubject=`user with expId ${this.params.expId}`;
      this.requestBody={studyCompleted:true, expId:this.params.expId};
    }
  }

  chooseYes(){
    console.log('yes');
    this.adminService.reset(this.requestBody).subscribe(result=>{
      console.log(result);
      this.dialogRef.close({status:'successful'});
    });
  }

  chooseNo(){
    console.log('no');
    this.dialogRef.close({status:'cancelled'});
  }

}
