import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SginupComponent } from './sginup/sginup.component';
import { StartedComponent } from './started/started.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'app-started'},
  {path:'app-started',component:StartedComponent},
  {path:'sginup',component:SginupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
