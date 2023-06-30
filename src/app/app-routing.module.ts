import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './__auth/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { UserMovieComponentComponent } from './user-movie-component/user-movie-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserDashboardComponent, canActivate: [AuthGuard], data:{roles: ['User']} },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data:{roles: ['Admin']} },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'search/:movieName', component: SearchResultsComponent },
  { path: 'search/date/:movieDate', component: SearchResultsComponent },
  { path: 'success', component: RegistrationSuccessComponent },
  { path: 'umovie-dash/:movieId',component: UserMovieComponentComponent},
  { path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
