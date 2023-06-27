import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserMovieComponentComponent } from './user-movie-component/user-movie-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMovieComponentComponent } from './admin-movie-component/admin-movie-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './__auth/auth.guard';
import { AuthInterceptor } from './__auth/auth.interceptor';
import { UserService } from './__services/user.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { ChunkArrayPipe } from './home/chunk-array.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    UserDashboardComponent,
    UserMovieComponentComponent,
    AdminDashboardComponent,
    AdminMovieComponentComponent,
    ForbiddenComponent,
    NotFoundComponent,
    SearchResultsComponent,
    RegistrationSuccessComponent,
    ChunkArrayPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
