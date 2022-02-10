
import { Component, h, State } from '@stencil/core';
// import {Posts} from '../../interfaces';

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


const url = "https://sdapi.zevaryx.com/api/v1/posts/"; // Where it gets the shit from

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
  posts: Posts[] = [];
  
    async componentDidLoad() {
      const response = await fetch("https://sdapi.zevaryx.com/api/v1/posts/");
      const data = await response.json();
      console.log('data', data);
      this.posts = data;
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
    <ion-card-title>{posts.device_name}</ion-card-title>
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
   <ion-chip
   color={posts.tools = 1
   ? "primary"
   : posts.tools = 2
       ? "primary"
       : posts.tools = 3
       ? "warning"
       : posts.tools = 4
       ? "warning"
       : "danger"}
   
   
   
   onClick={() => toastTools()}>
 <ion-icon name="hammer-outline"></ion-icon>
   <ion-label>Tools: {posts.tools}</ion-label>
  </ion-chip>
  <ion-chip color={posts.tools == 'normal' ? "primary" : posts.tools == 'additional' ? "danger" : posts.tools == 'optional' ? "warning" : "primary"} onClick={() => toastDiff()}>

 <ion-icon name="speedometer-outline"></ion-icon>
   <ion-label>Difficulty: {posts.difficulty}</ion-label>
  </ion-chip>
  <ion-chip color={posts.tools = 1
   ? "primary"
   : posts.tools = 2
       ? "primary"
       : posts.tools = 3
       ? "warning"
       : posts.tools = 4
       ? "warning"
       : "danger"} onClick={() => toastMat()}>
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