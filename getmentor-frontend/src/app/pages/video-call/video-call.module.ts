import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCallRoutingModule } from './video-call-routing.module';
import { VideoCallComponent } from './video-call.component';

import { LocalPreviewComponent } from './local-preview/local-preview.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    VideoCallComponent,
    LocalPreviewComponent
  ],
  imports: [
    MatCardModule,
    NgSelectModule,
    CommonModule,
    VideoCallRoutingModule,
    HttpClientModule,
    HttpClient,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule
  ]
})
export class VideoCallModule { }
