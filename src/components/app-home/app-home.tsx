import { Component, h } from '@stencil/core';

async function presentToast() {
  const toast = document.createElement('ion-toast');
  toast.message = 'This guide has been created by Tony Stark.';
  toast.duration = 2000;
  toast.color = 'success';

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
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-segment>
  <ion-segment-button>
    <ion-label>Certified</ion-label>
  </ion-segment-button>
  <ion-segment-button>
    <ion-label>Community</ion-label>
  </ion-segment-button>
</ion-segment>
       <ion-card>
  <ion-card-header>
    <ion-card-subtitle>SideMatter</ion-card-subtitle>
    <ion-card-title>Ridge Wallet</ion-card-title>
  </ion-card-header>

  <ion-card-content>
  <ion-chip
  onClick={() => presentToast()} color="success">
  <ion-icon name="shield-checkmark-outline"></ion-icon>
  <ion-label>Verified</ion-label>
</ion-chip>
<br></br>
   Skinning a ridge wallet blah blah blah dsnfjwsnfaslknfewj
   <br></br>
   <ion-chip color="primary">
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: 1</ion-label>
  </ion-chip>
  <ion-chip color="primary">
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 1</ion-label>
  </ion-chip>
  <ion-chip color="primary">
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 1</ion-label>
  </ion-chip>
  </ion-card-content>
</ion-card>
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>SideMatter</ion-card-subtitle>
    <ion-card-title> Key fob</ion-card-title>
  </ion-card-header>

  <ion-card-content>
   Skinning a key fob is a bit harder
  </ion-card-content>
 <ion-chip color="primary">
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: 1</ion-label>
  </ion-chip>
  <ion-chip color="primary">
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 2</ion-label>
  </ion-chip>
  <ion-chip color="primary">
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 1</ion-label>
  </ion-chip>
</ion-card>


<ion-card>
  <ion-card-header>
    <ion-card-subtitle>SideMatter</ion-card-subtitle>
    <ion-card-title>A litteral child</ion-card-title>
  </ion-card-header>

  <ion-card-content>
   Skining a child is very hard, as childs are not robots and have fleshy oily skin
  </ion-card-content>
 <ion-chip color="primary">
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: 1</ion-label>
  </ion-chip>
  <ion-chip color="warning">
 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: 3</ion-label>
  </ion-chip>
  <ion-chip color="danger">
 <ion-icon name="cash-outline"></ion-icon>
   <ion-label>Materials: 5+</ion-label>
  </ion-chip>
</ion-card>
      </ion-content>,
    ];
  }
}
