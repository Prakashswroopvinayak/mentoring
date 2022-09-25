import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalPreviewComponent } from './local-preview/local-preview.component';
import { VideoCallComponent } from './video-call.component';

const routes: Routes = [
  { 
    path: '/preview', 
    component: LocalPreviewComponent,
    pathMatch:'full', 
  },
  { 
    path: '', 
    component: VideoCallComponent ,
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoCallRoutingModule { }
