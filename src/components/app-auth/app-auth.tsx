import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-auth',
  styleUrl: 'app-auth.css',
  shadow: true,
})
export class AppAuth {

  render() {
    return (
      <Host>
        <ion-content>
     <ion-header>
        {/* <ion-toolbar color="primary">
          <ion-title>Welcome</ion-title>
          </ion-toolbar> */}
     </ion-header>
<ion-card>
  <ion-card-header>
    <ion-card-title>Welcome to the Skindex</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Please sign in
    </ion-card-content>
    <ion-button class="discord" expand="block">
<ion-icon name="logo-discord"></ion-icon>
Log In With Discord
</ion-button>
<ion-button class="google" expand="block">
<ion-icon name="logo-google"></ion-icon>
Sign In With Google
</ion-button>
<ion-button class="apple" color="light" expand="block">
<ion-icon name="logo-apple"></ion-icon>
Sign In With Apple
</ion-button>
</ion-card>

     </ion-content>
     <ion-footer>
     
     </ion-footer>
      </Host>
    );
  }

}
