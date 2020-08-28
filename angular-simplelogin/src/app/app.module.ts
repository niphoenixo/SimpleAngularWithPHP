import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './site/add-users/add-users.component';
import { ListUsersComponent } from './site/list-users/list-users.component';
import { UpdateUsersComponent } from './site/update-users/update-users.component';
import { LoginComponent } from './site/login/login.component';
import { RegistrationComponent } from './site/registration/registration.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,   
    AddUsersComponent,
    ListUsersComponent,
    UpdateUsersComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
