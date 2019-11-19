import { Component, OnInit,OnChanges, Input } from "@angular/core";
import {MatDialog, MatDialogRef} from '@angular/material';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { ResetDialogComponent } from '../reset-dialog/reset-dialog.component';

@Component({
  selector: "app-treatment",
  templateUrl: "./treatment.component.html",
  styleUrls: ["./treatment.component.scss"]
})
export class TreatmentComponent implements OnInit {
  @Input() treatmentCondition: any;
  @Input() treatmentUsers:any;
  public twitterAccounts;
  public users;
  notificationDialogRef:MatDialogRef<NotificationDialogComponent>|null;
  resetDialogRef:MatDialogRef<ResetDialogComponent>|null;
  constructor(public notificationDialog:MatDialog, public resetDialog:MatDialog) {}

  ngOnInit() {
    this.twitterAccounts=this.generateTwitterAccountsObject(["elite", "mute", "block", "filter"]);
    this.users=this.treatmentUsers;
    console.log(this.users);
  }

  ngOnChanges(){
    this.ngOnInit();
  }

  openNotificationDialog(){
    const notificationDialogParams={
      disableClose:false,
      hasBackdrop:true,
      width:'500px',
      data:{type:'treatment',treatmentId:this.treatmentCondition.treatmentId}
    };

    this.notificationDialogRef=this.notificationDialog.open(NotificationDialogComponent,notificationDialogParams);
    this.notificationDialogRef.afterClosed().subscribe(dialogData=>{
      console.log(dialogData);
    });
  }

  openResetDialog(){ 
    const resetDialogParams={
      disableClose:false,
      hasBackdrop:true,
      width:'500px',
      data:{type:'treatment',treatmentId:this.treatmentCondition.treatmentId}
    };

    this.resetDialogRef=this.resetDialog.open(ResetDialogComponent,resetDialogParams);
    this.resetDialogRef.afterClosed().subscribe(dialogData=>{
      console.log(dialogData);
    });
  }

  generateTwitterAccountsObject(actions) {
    const twitterAccounts = [];
    for (const action of actions) {
      for (const twitterAccount of this.treatmentCondition[`${action}s`]) {
        twitterAccount["action"] = action;
        twitterAccounts.push(twitterAccount);
      }
    }
    return twitterAccounts;
  }
}
