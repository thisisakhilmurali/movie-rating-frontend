import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './__auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'login', component:AuthenticationComponent },
  { path:'home', component:HomeComponent },
  { path:'user', component:UserDashboardComponent, canActivate: [AuthGuard], data:{roles: ['User']} },
  { path:'admin', component:AdminDashboardComponent, canActivate: [AuthGuard], data:{roles: ['Admin']} },
  { path:'forbidden', component:ForbiddenComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
