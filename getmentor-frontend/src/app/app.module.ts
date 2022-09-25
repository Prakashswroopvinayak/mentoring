import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { MentorComponent } from './pages/user/mentor/mentor.component';
import { MenteeComponent } from './pages/user/mentee/mentee.component';
import { HomeComponent } from './pages/home/home.component';
import { MentorCarouselComponent } from './pages/home/mentor-carousel/mentor-carousel.component';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './pages/user/user-dashboard/user-dashboard-components/profile/profile.component';
import { RegisterMentorComponent } from './pages/user/user-dashboard/user-dashboard-components/register-mentor/register-mentor.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MentorprofileComponent } from './pages/user/mentor/mentorcomponents/mentorprofile/mentorprofile.component';
import { AllmenteeComponent } from './pages/user/mentor/mentorcomponents/allmentee/allmentee.component';
import { ScheduleComponent } from './pages/user/mentor/mentorcomponents/schedule/schedule.component';
import { RequestsComponent } from './pages/user/mentor/mentorcomponents/requests/requests.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FindmentorComponent } from './pages/user/findmentor/findmentor.component';
import { ViewMentorComponent} from './pages/view-mentor/view-mentor.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { VideoCallRoomComponent } from './pages/video-call-room/video-call-room.component';
import { MentorVideoCallComponent } from './pages/user/mentor/mentorcomponents/mentor-video-call/mentor-video-call.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DatePipe } from '@angular/common';
import { LocalPreviewComponent } from './pages/video-call-room/local-preview/local-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    UserDashboardComponent,
    MentorComponent,
    MenteeComponent,
    HomeComponent,
    MentorCarouselComponent,
    ProfileComponent,
    RegisterMentorComponent,
    MentorprofileComponent,
    AllmenteeComponent,
    ScheduleComponent,
    RequestsComponent,
    FindmentorComponent,
    ViewMentorComponent,
    VideoCallRoomComponent,
    MentorVideoCallComponent,
    LocalPreviewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatMenuModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    IvyCarouselModule,
    MatListModule,
    NgSelectModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [authInterceptorProviders,DatePipe],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
