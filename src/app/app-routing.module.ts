import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserMovieComponentComponent } from './user-movie-component/user-movie-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'login',component:AuthenticationComponent},
  {path:'home',component:HomeComponent},
  {path:'admin-dash',component:AdminDashboardComponent},
  {path:'user-movie-dash',component:UserMovieComponentComponent}

  
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
