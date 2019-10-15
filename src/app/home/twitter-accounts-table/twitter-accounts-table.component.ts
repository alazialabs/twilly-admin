import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-accounts-table',
  templateUrl: './twitter-accounts-table.component.html',
  styleUrls: ['./twitter-accounts-table.component.scss']
})
export class TwitterAccountsTableComponent implements OnInit {
@Input() twitterAccounts;
public displayedColumns=['accountId','twitterHandle','twitterId','political','ideology','action'];

  constructor() { }

  ngOnInit() {
  }

}
