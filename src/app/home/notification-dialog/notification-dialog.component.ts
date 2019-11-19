import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {
  public notificationBody;
  constructor(
    public dialogRef:MatDialogRef<NotificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public params:any,
    public adminService:AdminService
  ) { }

  ngOnInit() {
  }

  sendNotification(){
    console.log('here');
    let body;
    if(this.params.type==='treatment'){
      body={
        notificationBody:this.notificationBody,
        treatmentId:this.params.treatmentId
      }
    }
    if(this.params.type==='user'){
      body={
        notificationBody:this.notificationBody,
        expIds:[this.params.expId]
      }
    }
    console.log(body);
    this.adminService.sendNotification(body).subscribe(result=>{
      console.log(result);
      this.dialogRef.close({status:'successful'})
    });
  }
}
