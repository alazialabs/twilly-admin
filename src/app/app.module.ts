import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { SidenavComponent } from './home/sidenav/sidenav.component';
import { HeaderComponent } from './home/header/header.component';
import { TreatmentComponent } from './home/treatment/treatment.component';
import { NewTreatmentComponent } from './home/new-treatment/new-treatment.component';
import { TwitterAccountsTableComponent } from './home/twitter-accounts-table/twitter-accounts-table.component';
import { UsersTableComponent } from './home/users-table/users-table.component';
import { NotificationDialogComponent } from './home/notification-dialog/notification-dialog.component';
import { ResetDialogComponent } from './home/reset-dialog/reset-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    TreatmentComponent,
    NewTreatmentComponent,
    TwitterAccountsTableComponent,
    UsersTableComponent,
    NotificationDialogComponent,
    ResetDialogComponent
    ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatTableModule, 
    MatExpansionModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[NotificationDialogComponent, ResetDialogComponent]
})
export class AppModule { }
