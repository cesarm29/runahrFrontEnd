//generic libs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IntroandexitComponent } from './introandexit/introandexit.component';
import { ReportsadminComponent } from './reportsadmin/reportsadmin.component';
import { ReportsuserComponent } from './reportsuser/reportsuser.component';
import { ProfilesadminComponent } from './profilesadmin/profilesadmin.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofilesComponent } from './profilesadmin/updateprofiles/updateprofiles.component';

//const routes
const routes: Routes = [
  {
    //route to init
    path: '',
    component: LoginComponent,
  },
  {
    //route to home
    path: 'home',
    component: HomeComponent,
  },
  {
    //route to register
    path: 'register',
    component: RegisterComponent,
  },
  {
    //route to introandexit
    path: 'introandexit',
    component: IntroandexitComponent,
  },
  {
    //route to reportsadmin
    path: 'reportsadmin',
    component: ReportsadminComponent,
  },
  {
    //route to reportsuser
    path: 'reportsuser',
    component: ReportsuserComponent,
  },
  {
    //route to profilesadmin
    path: 'profilesadmin',
    component: ProfilesadminComponent,
  },
  {
    //route to profilesadmin
    path: 'updateprofiles',
    component: UpdateprofilesComponent,
  },
  {
    //route to profile
    path: 'profile',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }