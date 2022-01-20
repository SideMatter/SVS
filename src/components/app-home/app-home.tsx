import { Component, h } from '@stencil/core';

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
  toast.message = 'The tools score is the level of tools required to skin this device successfully, the higher the score the more tools are required';
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


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})


export class AppHome {
  
  render() {
    return [
      <ion-header>
        <ion-toolbar color="warning">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-searchbar></ion-searchbar>
        <ion-segment>
  <ion-segment-button>
    <ion-label>Certified</ion-label>
  </ion-segment-button>
  <ion-segment-button>
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
   Skinning a ridge wallet is a fairly easy custom skin to complete as it basically a metal rectangle with a small indent at the bottom.
   <br></br>
   <ion-chip color="primary" onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: 1</ion-label>
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
  <ion-button color="warning" href="/guide" expand="full" >View Guide</ion-button>
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
   <ion-chip color="primary" onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: 1</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastDiff()}>
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 2</ion-label>
  </ion-chip>
  <ion-chip color="primary" onClick={() => toastMat()}>
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 1</ion-label>
  </ion-chip>
  <br></br>
  <ion-button color="danger" href="/guide" expand="full" disabled={true}>Guide Coming Soon</ion-button>
  </ion-card-content>
  
</ion-card>


<ion-card>
  <ion-card-header>
    <ion-card-subtitle>SideMatter</ion-card-subtitle>
    <ion-card-title>A litteral child</ion-card-title>
  </ion-card-header>

  <ion-card-content>
   Skining a child is very hard, as childs are not robots and have fleshy oily skin
  <br></br>
  <ion-chip color="warning" onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: 3</ion-label>
  </ion-chip>
  <ion-chip color="danger" onClick={() => toastDiff()}>
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 5</ion-label>
  </ion-chip>
  <ion-chip color="danger" onClick={() => toastMat()}>
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 5+</ion-label>

  </ion-chip>
  <ion-button color="danger" href="/guide" expand="full" disabled={true}>Guide Coming Soon</ion-button>
  </ion-card-content>
   <br></br>

</ion-card>
      </ion-content>,
    ];
  }
}