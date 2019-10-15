import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.scss"]
})
export class UsersTableComponent implements OnInit {
  @Input() users;
  constructor() {}

  ngOnInit() {}
}
