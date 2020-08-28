import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './site/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddUsersComponent } from './site/add-users/add-users.component';
import { ListUsersComponent } from './site/list-users/list-users.component';
import { UpdateUsersComponent } from './site/update-users/update-users.component';
import { RegistrationComponent } from './site/registration/registration.component';


const routes: Routes = [{ path: 'login', component: LoginComponent },

{ path: 'register', component : RegistrationComponent},

{ path: 'update-users', component : UpdateUsersComponent},

{ path: 'list-users', component : ListUsersComponent},

{ path: 'add-users', component : AddUsersComponent},

{ path: '',

redirectTo:'/login',

pathMatch:'full'

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
