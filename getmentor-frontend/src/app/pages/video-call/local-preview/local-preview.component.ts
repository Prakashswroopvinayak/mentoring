import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EHmsStates } from '../enums/hms-states.enum';
import { HmsVideoStateService } from '../services/hms-video-state.service';
import { LocalMediaService } from '../services/local-media.service';
//import { LibToastLogService } from 'projects/shared-services/lib-toastlog.service';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-local-preview',
  templateUrl: './local-preview.component.html',
  styleUrls: ['./local-preview.component.scss'],
})
export class LocalPreviewComponent implements OnInit, OnDestroy {
  audioInputDevices: MediaDeviceInfo[] = [];
  videoDevices: MediaDeviceInfo[] = [];

  selectedAudioInputDeviceId!: string;
  selectedVideoDeviceId!: string;
  isAudioEnabled!: boolean;
  isVideoEnabled!: boolean;

  @ViewChild('previewVideo', { static: false }) previewVideo!: ElementRef<HTMLVideoElement>;

  subscriptions: Subscription[] = [];

  constructor(
    private hmsVideoStateService: HmsVideoStateService,
    private localMediaService: LocalMediaService,
    //private libToastLogService: LibToastLogService,
  ) {}

  ngOnInit(): void {
    this.getMediaPermissions();
  }

  ngOnDestroy(): void {
    this.stopStream();
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  getMediaPermissions() {
    this.subscriptions.push(
      combineLatest(
        this.localMediaService.getMediaPermissions('videoinput'),
        this.localMediaService.getMediaPermissions('audioinput'),
      ).subscribe(([cameraPermissions, microphonePermissions]) => {
        if (cameraPermissions === 'granted' && microphonePermissions === 'granted') {
          this.getMediaDevices();
          console.log("granted");
        } else if (cameraPermissions === 'prompt' || microphonePermissions === 'prompt') {
          navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream: MediaStream) => {
            stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
            this.getMediaPermissions();
            console.log("prompt");
          });
        } else if (cameraPermissions === 'denied' || microphonePermissions === 'denied') {
          alert('Browser denied permission');
          console.log("denied");
        }
        else{
          console.log(cameraPermissions);
          console.log("error");
        }
      }),
    );
  }
  /*async getMediaPermissions() {
    await this.localMediaService.getMediaPermissions('videoinput').then(data=>{
      console.log(data);
    });
  }*/
  
  getMediaDevices(): void {
    this.subscriptions.push(
      combineLatest(this.localMediaService.getAudioInputDevices(), this.localMediaService.getVideoDevices()).subscribe(
        ([audioInputDevices, videoDevices]) => {
          this.audioInputDevices = audioInputDevices;
          this.videoDevices = videoDevices;

          this.selectAudioInputDevice(audioInputDevices[0].deviceId);
          this.selectVideoDevice(videoDevices[0].deviceId);

          this.subscribeToMediaDevices();
        },
      ),
    );
  }

  subscribeToMediaDevices(): void {
    this.subscriptions.push(
      combineLatest(
        this.localMediaService.audioInputDeviceId$,
        this.localMediaService.videoDeviceId$,
        this.localMediaService.isAudioEnabled$,
        this.localMediaService.isVideoEnabled$,
      ).subscribe(([audioInputDeviceId, videoDeviceId, isAudioEnabled, isVideoEnabled]) => {
        this.selectedAudioInputDeviceId = audioInputDeviceId;
        this.selectedVideoDeviceId = videoDeviceId;
        this.isAudioEnabled = isAudioEnabled;
        this.isVideoEnabled = isVideoEnabled;

        if (this.isVideoEnabled) {
          this.renderVideo();
        }
      }),
    );
  }

  renderVideo(): void {
    this.localMediaService.getVideoStream(this.selectedVideoDeviceId).subscribe((stream: MediaStream) => {
      this.stopStream();
      this.previewVideo.nativeElement.srcObject = stream;
    });
  }

  selectAudioInputDevice(deviceId: string): void {
    this.localMediaService.setAudioInputDeviceId(deviceId);
  }

  selectVideoDevice(deviceId: string): void {
    this.localMediaService.setVideoDeviceId(deviceId);
  }

  toggleAudio(): void {
    this.localMediaService.setIsAudioEnabled(!this.isAudioEnabled);
  }

  toggleVideo(): void {
    this.stopStream();
    this.localMediaService.setIsVideoEnabled(!this.isVideoEnabled);
  }

  stopStream(): void {
    if (this.isVideoEnabled) {
      const stream: MediaStream | MediaSource | Blob | null= this.previewVideo.nativeElement.srcObject;
      if (stream) {
        if ('getTracks' in stream) {
          const tracks: MediaStreamTrack[] = stream.getTracks();
          tracks.forEach((track: MediaStreamTrack) => track.stop());
        }
        this.previewVideo.nativeElement.srcObject = null;
      }
    }
  }

  joinRoom(): void {
    this.hmsVideoStateService.setState(EHmsStates.ROOM);
    

  }
}
