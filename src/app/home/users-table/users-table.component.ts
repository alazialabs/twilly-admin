import { Component, OnInit, Input } from "@angular/core";
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { ResetDialogComponent } from '../reset-dialog/reset-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.scss"]
})
export class UsersTableComponent implements OnInit {
  @Input() users;

  public displayedColumns=['expId','twitterHandle','twitterId','gender','ideology','location','notification','reset'];

  notificationDialogRef:MatDialogRef<NotificationDialogComponent>|null;
  resetDialogRef:MatDialogRef<ResetDialogComponent>|null;
  constructor(public notificationDialog:MatDialog, public resetDialog:MatDialog) {}

  ngOnInit() {
    console.log(this.users);
  }

  openNotificationDialog(expId){
    const notificationDialogParams={
      disableClose:false,
      hasBackdrop:true,
      width:'500px',
      data:{type:'user',expId:expId}
    };

    this.notificationDialogRef=this.notificationDialog.open(NotificationDialogComponent,notificationDialogParams);
    this.notificationDialogRef.afterClosed().subscribe(dialogData=>{
      console.log(dialogData);
    });
  }

  openResetDialog(expId){ 
    const resetDialogParams={
      disableClose:false,
      hasBackdrop:true,
      width:'500px',
      data:{type:'user',expId:expId}
    };

    this.resetDialogRef=this.resetDialog.open(ResetDialogComponent,resetDialogParams);
    this.resetDialogRef.afterClosed().subscribe(dialogData=>{
      console.log(dialogData);
    });
  }

}
