import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalMediaService {
  private audioInputDeviceId: BehaviorSubject<string> = new BehaviorSubject<string>('default');
  public audioInputDeviceId$ = this.audioInputDeviceId.asObservable();
  private videoDeviceId: BehaviorSubject<string> = new BehaviorSubject<string>('default');
  public videoDeviceId$ = this.videoDeviceId.asObservable();
  private isAudioEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isAudioEnabled$ = this.isAudioEnabled.asObservable();
  private isVideoEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isVideoEnabled$ = this.isVideoEnabled.asObservable();

  constructor() {}

  setAudioInputDeviceId(deviceId: string): void {
    this.audioInputDeviceId.next(deviceId);
  }

  setVideoDeviceId(deviceId: string): void {
    this.videoDeviceId.next(deviceId);
  }

  setIsAudioEnabled(isAudioEnabled: boolean): void {
    this.isAudioEnabled.next(isAudioEnabled);
  }

  setIsVideoEnabled(isVideoEnabled: boolean): void {
    this.isVideoEnabled.next(isVideoEnabled);
  }

  getPermissions(name: PermissionName): Observable<PermissionState> {
    return from(
      navigator.permissions.query({ name }).then((permission: PermissionStatus) => {
        console.log(name," permission is ",permission.state);
        return permission.state;
      }),
    );
  }
    
  getMediaPermissions = async (inputtype : any) => {
    const devices = await navigator.mediaDevices.enumerateDevices();   
    for( const device of devices) {
      if (device.kind == inputtype && device.label) {
        //return "present";
        console.log(inputtype);
        if (inputtype == 'videoinput') {
          //console.log("getting ",this.getPermissions("camera"));
          return await this.getPermissions("camera").toPromise();
        }
        else if (inputtype == 'audioinput') {
          return await this.getPermissions("microphone").toPromise();
        }
      }
            //if(device.kind == 'videoinput' && device.label) return "granted";
    }
    
    return "denied";
  }

  getAudioInputDevices(): Observable<MediaDeviceInfo[]> {
    return from(
      navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
        return devices.filter((device: MediaDeviceInfo) => device.kind === 'audioinput' && device.label !== '');
      }),
    );
  }

  getVideoDevices(): Observable<MediaDeviceInfo[]> {
    return from(
      navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
        return devices.filter((device: MediaDeviceInfo) => device.kind === 'videoinput' && device.label !== '');
      }),
    );
  }

  getVideoStream(videoId: string): Observable<MediaStream> {
    return from(navigator.mediaDevices.getUserMedia({ video: { deviceId: videoId } }));
  }

  getVideoDeviceId(): string {
    return this.videoDeviceId.getValue();
  }

  getAudioInputDeviceId(): string {
    return this.audioInputDeviceId.getValue();
  }

  getIsAudioEnabled(): boolean {
    return this.isAudioEnabled.getValue();
  }

  getIsVideoEnabled(): boolean {
    return this.isVideoEnabled.getValue();
  }
}
