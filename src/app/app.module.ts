//generic libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//routes
import { AppRoutingModule } from './app-routing.module';
//modules
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IntroandexitComponent } from './introandexit/introandexit.component';
import { ReportsadminComponent } from './reportsadmin/reportsadmin.component';
import { ReportsuserComponent } from './reportsuser/reportsuser.component';
import { ProfilesadminComponent } from './profilesadmin/profilesadmin.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofilesComponent } from './profilesadmin/updateprofiles/updateprofiles.component';
//service
import {LoginService} from './services/login.service';
import { RegisterService } from './services/register.service';
import { UsersService } from './services/users.service';
import { IntroandexitService } from './services/introandexit.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    IntroandexitComponent,
    ReportsadminComponent,
    ReportsuserComponent,
    ProfilesadminComponent,
    ProfileComponent,
    UpdateprofilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [LoginService,RegisterService,UsersService,IntroandexitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
