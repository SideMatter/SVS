import { Component, h, State } from '@stencil/core';
import {Posts} from '../../interfaces';

async function toastVerifed() {
  const toast = document.createElement('ion-toast');
  toast.message = 'This guide is the recommended way to skin this device and has been created by Tony Stark himself';
  toast.duration = 4000;
  toast.color = 'success';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastCert() {
  const toast = document.createElement('ion-toast');
  toast.message = 'This guide is the reccomended way to skin this device at this time';
  toast.duration = 4000;
  toast.color = 'warning';

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


const url = "http://zevaryx.com:8000/api/v1/posts/"; // Where it gets the shit from

// sending request
const response = await fetch(url);
const data = await response.json();
console.log(data.results);

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})



export class AppHome {
  @State()
  posts : Posts = {
    op: null,
    device_name: null,
    title: null,
    content: null,
    tools: null,
    difficulty: null,
    materials: null,
    time: null,
    kit:null,

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

       <ion-card>
  <ion-card-header>
    <ion-card-subtitle>SideMatter</ion-card-subtitle>
    <ion-card-title>Ridge Wallet</ion-card-title>
    
  </ion-card-header>

  <ion-card-content>
  <ion-chip
  onClick={() => toastVerifed()} color="success">
  <ion-icon name="shield-checkmark-outline"></ion-icon>
  <ion-label>Verified</ion-label>
</ion-chip>
<br></br>
   Skinning a ridge wallet is a fairly easy custom skin to complete as it's basically a metal rectangle with a small indent at the bottom.
   <br></br>
   <ion-chip color="success" onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: Normal</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastDiff()}>
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 1</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastMat()}>
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 1</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastTime()}>
 <ion-icon name="timer-outline"></ion-icon>
   <ion-label>Time Required: 30 Mins</ion-label>
  </ion-chip>
 
  <br></br>
  <ion-button color="primary" href="/guide" expand="full" >View Guide</ion-button>
  </ion-card-content>

  

</ion-card>

<ion-card>
  <ion-card-header>
    <ion-card-subtitle>SideMatter</ion-card-subtitle>
    <ion-card-title> Key fob</ion-card-title>
  </ion-card-header>

  <ion-card-content>
  <ion-chip
  onClick={() => toastCert()} color="warning">
  <ion-icon name="shield-checkmark-outline"></ion-icon>
  <ion-label>Certified</ion-label>
</ion-chip>
<br></br>
   Skinning a key fob is a bit harder
   <br></br>
   <ion-chip color="warning" onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: Optional</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastDiff()}>
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 2</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastMat()}>
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 1</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastTime()}>
 <ion-icon name="timer-outline"></ion-icon>
   <ion-label>Time Required: 30 Mins</ion-label>
  </ion-chip>
  <br></br>
  <ion-button color="danger" href="/guide" expand="full" disabled={true}>Guide Coming Soon</ion-button>
  </ion-card-content>
  
</ion-card>


<ion-card>
  <ion-card-header>
    <ion-card-subtitle>SideMatter</ion-card-subtitle>
    <ion-card-title>A child</ion-card-title>
  </ion-card-header>

  <ion-card-content>
   Skining a child is very hard, as childs are not robots and have fleshy oily skin. Stop grammer policing a stupid mockup you dipshits.
  <br></br>
  <ion-chip color="danger" onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: Additional</ion-label>
  </ion-chip>
  <ion-chip color="danger" onClick={() => toastDiff()}>
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 5</ion-label>
  </ion-chip>
  <ion-chip color="danger" onClick={() => toastMat()}>
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 5+</ion-label>

  </ion-chip>
  <ion-chip color="danger" onClick={() => toastTime()}>
 <ion-icon name="timer-outline"></ion-icon>
   <ion-label>Time Required: Good freaking luck</ion-label>
  </ion-chip>
  <ion-button color="danger" href="/guide" expand="full" disabled={true}>Guide Coming Soon</ion-button>
  </ion-card-content>
   <br></br>

</ion-card>

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