import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

/*
const mediaConstraints = {
  audio:true,
  video:{width:720, height:540}

}

@Component({
  selector: 'app-video-call-room',
  templateUrl: './video-call-room.component.html',
  styleUrls: ['./video-call-room.component.css']
})
export class VideoCallRoomComponent implements AfterViewInit {

  private localStream: MediaStream | undefined;
  @ViewChild("local_video") localVideo!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.requestMediaDevices();   
  }
  private async requestMediaDevices() : Promise<void>{
    this.localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
    this.pauseLocalVideo();
    //this.startLocalVideo();
  }
  pauseLocalVideo() : void {
    if(this.localStream != undefined) {
      this.localStream.getTracks().forEach(track =>{
        track.enabled = false;
      });
      
    }
    
    this.localVideo.nativeElement.srcObject = undefined;
    
  }
  startLocalVideo() : void{
    if(this.localStream != undefined) {
    this.localStream.getTracks().forEach(track =>{
      track.enabled = true;
    });
  }
    this.localVideo.nativeElement.srcObject = this.localStream;
  }

}
*/

// import {
//   HMSReactiveStore,
//   selectIsConnectedToRoom,
//   selectPeers
// } from "@100mslive/hms-video-store";

// const hms = new HMSReactiveStore();
// //hms.triggerOnSubscribe();
// const hmsStore = hms.getStore();
// const hmsActions = hms.getHMSActions();
@Component({
  selector: 'app-video-call-room',
  templateUrl: './video-call-room.component.html',
  styleUrls: ['./video-call-room.component.css']
})
export class VideoCallRoomComponent implements OnInit {
  // peers = hmsStore.getState(selectPeers);
  // @ViewChild("peersContainer",{ static: false }) peersContainer!: ElementRef<any>;

  // audioInputDevices: MediaDeviceInfo[] = [];
  // videoDevices: MediaDeviceInfo[] = [];
  
  constructor() {
  }
  
  ngOnInit(): void {
    //window.onunload = this.leaveRoom;
    //const devices = hmsStore.getState(audioInput);

  }
//   ngAfterViewInit(): void {
//     this.peers = hmsStore.getState(selectPeers);
//     hmsStore.subscribe(this.renderPeers.bind(this), selectPeers);
//     hmsStore.subscribe(this.onConnection.bind(this), selectIsConnectedToRoom);
      
//     /*navigator.mediaDevices.enumerateDevices().then( devices => 
//         devices.forEach( (device) => {
//             if (device.kind == 'audioinput' && device.label)
//               console.log(device);
//             //if(device.kind == 'videoinput' && device.label) return "granted";
//             if (device.kind == 'videoinput' && device.label){
//               //console.log(from(navigator.mediaDevices.getUserMedia({ video: { deviceId: device.deviceId.toString() } })));
//               from(
//                 navigator.permissions.query({ name: 'camera' }).then((permission: PermissionStatus) => {
//                   console.log("camera perm : ",permission.state);
//                 }),
//               );
//               //console.log(device);
//             }
            
//           }
        
//     ));*/

    
//   }
//   fun() : any{
//     console.log("clicked");
//     hmsActions.join({
//       userName: "nikita",
//       authToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjFjMjMxYTdjN2UxNTVhMGVmYWU2ODBhIiwicm9vbV9pZCI6IjYxZTFhZDNjYWNmYmY1OTNmNTk5YzgxYyIsInVzZXJfaWQiOiI2MWMyMzFhN2M3ZTE1NWEwZWZhZTY4MDciLCJyb2xlIjoiZ3Vlc3QiLCJqdGkiOiJlNTRlNTE2Yi02ZTFkLTQ1NWUtYmQ5YS0wNjQzOGFlMWFkY2MiLCJ0eXBlIjoiYXBwIiwidmVyc2lvbiI6MiwiZXhwIjoxNjQyMjczNzg0fQ.dzp9MX6x6CwUPtKogtwIKYGXrkQnJaUtVWyW7dxxXuU"
//     });
//     console.log("joined");
//   }
//   leaveRoom() {
//     hmsActions.leave();
//   }
  
// // helper function to create html elements
//   h(tag:any, attrs:any, ...children:any[]) {
//     const newElement = document.createElement(tag);

//     Object.keys(attrs).forEach((key) => {
//       newElement.setAttribute(key, attrs[key]);
//     });
//     children.forEach((child) => {
//       newElement.append(child);
//     });
//     return newElement;
//   }
//   renderPeers(peers:any[]) {
    
//       // 1. clear the peersContainer
//     if (!peers) {
//       peers = hmsStore.getState(selectPeers);
//     }
    
//     this.peersContainer.nativeElement.innerHTML="";
//     // 2. loop through the peers and render a tile for each peer
//     peers.forEach((peer) => {
//       const video = this.h("video", {
//         class: "peer-video",
//         autoplay: true,
//         muted: true,
//         playsinline: true,
//       });

//       hmsActions.attachVideo(peer.videoTrack, video);

//       const peerContainer = this.h(
//         "div",
//         {
//           class: "peer-container col-sm-4"
//         },
//         video,
//         this.h(
//           "div",
//           {
//             class: "peer-name"
//           },
//           peer.name
//         )
//       );
//      this.peersContainer.nativeElement.appendChild(peerContainer);   
//      const peerContainer1 = this.h(
//       "div",
//       {
//         class: "peer-container col-sm-4"
//       },
//       video,
//       this.h(
//         "div",
//         {
//           class: "peer-name"
//         },
//         peer.name
//       )
//     );
//     this.peersContainer.nativeElement.appendChild(peerContainer1);   
     
//     });
//   }    //end of renderPeers()
//   onConnection(isConnected:any) {
//     if (isConnected) {
      
//     }
//   }
  

}