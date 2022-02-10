
import { Component, h, State } from '@stencil/core';
// import {Posts} from '../../interfaces';

const API_ROOT = "https://sdapi.zevaryx.com/api/v1";

async function toastVerifed() {
  const toast = document.createElement('ion-toast');
  toast.message = 'This guide is the recommended way to skin this device and has been created by Tony Stark himself';
  toast.duration = 4000;
  toast.color = 'success';

  document.body.appendChild(toast);
  return toast.present();
}


async function toastTools() {
  const toast = document.createElement('ion-toast');
  toast.message = 'The amount of tools required to skin this device successfully';
  toast.duration = 4000;
  toast.color = 'tertiary';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastDiff() {
  const toast = document.createElement('ion-toast');
  toast.message = 'The difficulty score is how hard the application process is. The higher the score the harder the process';
  toast.duration = 3000;
  toast.color = 'tertiary';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastMat() {
  const toast = document.createElement('ion-toast');
  toast.message = 'The material score is the amount of required material to skin the device successfully, the higher the score the more material is required';
  toast.duration = 4000;
  toast.color = 'tertiary';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastTime() {
  const toast = document.createElement('ion-toast');
  toast.message = 'The estimated time to skin the device successfully';
  toast.duration = 2000;
  toast.color = 'tertiary';

  document.body.appendChild(toast);
  return toast.present();
}

async function toastUnbulit() {
  const toast = document.createElement('ion-toast');
  toast.message = 'Hey! Just a heads up that this feature isnt built yet. It will be soon!';
  toast.duration = 2000;
  toast.color = 'primary';

  document.body.appendChild(toast);
  return toast.present();
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})



export class AppHome {

  @State()
  posts: Posts[] = [];
  devices: Devices[] = [];
  deviceLookup: Object[] = [];

    async componentDidLoad() {
        const device_resp = await fetch(API_ROOT + "/devices/");
        const device_data = await device_resp.json();
        console.log('devices', device_data);
        this.devices = device_data;

        const posts_resp = await fetch(API_ROOT + "/posts/");
        const post_data = await posts_resp.json();
        console.log('posts', post_data);
        this.posts = post_data;

        for (let key in this.devices) {
            const device = this.devices[key];
            this.deviceLookup[device.id] = device.long_name;
        }
    }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-menu-button slot="start"></ion-menu-button>


          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-searchbar onIonChange={() => toastUnbulit()}></ion-searchbar>
        <ion-segment>
  <ion-segment-button onClick={() => toastUnbulit()}>
    <ion-label>Certified</ion-label>
  </ion-segment-button>
  <ion-segment-button onClick={() => toastUnbulit()}>
    <ion-label>Community</ion-label>
  </ion-segment-button>
</ion-segment>

<ion-seachbar></ion-seachbar>

{
            !this.posts ?
 <ion-spinner />:
this.posts.map(posts => (
<ion-card>
  <ion-card-header>
    {/* <ion-card-subtitle>{posts.op}</ion-card-subtitle> */}
    <ion-card-title>{this.deviceLookup[posts.device_name] ?? "Device not found"}</ion-card-title>
  </ion-card-header>

  <ion-card-content>
  <ion-chip
  onClick={() => toastVerifed()} color="success">
  <ion-icon name="shield-checkmark-outline"></ion-icon>
  <ion-label>Certified</ion-label>
</ion-chip>
<br></br>
   {posts.content}
   <br></br>
   <ion-chip color="warning" onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: {posts.tools}</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastDiff()}>
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: {posts.difficulty}</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastMat()}>
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: {posts.materials}</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastTime()}>
 <ion-icon name="timer-outline"></ion-icon>
   <ion-label>Time Required: {posts.time}</ion-label>
  </ion-chip>
  <br></br>
  <ion-button color="danger" href="/guide" expand="full" disabled={true}>Guide Coming Soon</ion-button>
  </ion-card-content>

</ion-card>

              )
            )

}

<div id="app"></div>
<ion-fab vertical="bottom" horizontal="end" slot="fixed">
<ion-fab-button href="/new-guide">
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
            </ion-fab>
      </ion-content>,


    ];
  }
}
