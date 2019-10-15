import { Component, OnInit,OnChanges, Input } from "@angular/core";

@Component({
  selector: "app-treatment",
  templateUrl: "./treatment.component.html",
  styleUrls: ["./treatment.component.scss"]
})
export class TreatmentComponent implements OnInit {
  @Input() treatmentCondition: any;
  public twitterAccounts;
  public displayedColumns=['accountId','twitterHandle','twitterId','political','ideology','action'];
  constructor() {}

  ngOnInit() {
    this.twitterAccounts=this.generateTwitterAccountsObject(["elite", "mute", "block", "filter"]);
  }

  ngOnChanges(){
    this.ngOnInit();
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
