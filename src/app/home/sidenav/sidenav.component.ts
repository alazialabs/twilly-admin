import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/admin.service";
import { BindingService } from "../../services/binding.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  public treatmentConditions;
  constructor(
    private adminService: AdminService,
    private bindingService: BindingService
  ) {}

  ngOnInit() {
    this.loadTreatmentConditions();
  }

  select(treatmentCondition) {
    this.bindingService.selectTreatmentCondition(treatmentCondition);
  }

  openAddNew(){
    this.bindingService.openAddNew();
  }

  loadTreatmentConditions() {
    this.adminService
      .listTreatmentConditions()
      .subscribe(treatmentConditions => {
        this.treatmentConditions = treatmentConditions;
        console.log(treatmentConditions);
        this.select(this.treatmentConditions[0])
      });
  }
}
