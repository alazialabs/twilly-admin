import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}
  private serverDomain = environment.serverUrl;
  private basePath = this.serverDomain + "api/admin/";

  login(credentials) {
    return this.httpClient.post(this.path("login"), credentials);
  }

  listTreatmentConditions() {
    return this.httpClient.get(this.path("listTreatmentConditions"));
  }

  getUsers(){
    return this.httpClient.get(this.path("getUsers"));
  }

  reset(data){
    return this.httpClient.post(
      this.path("reset"),
      data
    );
  }

  sendNotification(data){
    return this.httpClient.post(
      this.path("sendNotification"),
      data
    );
  }

  createTreatmentConditionsFromFile(data) {
    return this.httpClient.post(
      this.path("createTreatmentConditionsFromFile"),
      data
    );
  }

  createUsersFromFile(data) {
    return this.httpClient.post(
      this.path("createUsersFromFile"),
      data
    );
  }

  private path(endPath) {
    return this.basePath + endPath;
  }
}
