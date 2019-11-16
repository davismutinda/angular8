import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import {  NavigationComponent} from './navigation/navigation.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'',component: NavigationComponent,
  canActivate: [AuthGuard],
  children:[
    {
    path:'dashboard',
    loadChildren:()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
  ]
},
  {path:'login',component: LoginComponent},
  {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
