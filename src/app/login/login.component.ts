import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", [<any>Validators.required]),
      password: new FormControl("", [<any>Validators.required])
    });
  }

  login(credentials) {
    this.adminService.login(credentials).subscribe(result => {
      if(result['status']==='success'){
          this.router.navigate(['/home']);
      }
    });
    console.log(credentials);
    // this.router.navigate(['/home'])
    // console.log('submit');
  }
}
