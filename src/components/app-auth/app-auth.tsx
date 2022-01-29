import { Component, Host, h } from '@stencil/core';

async function toastSignin() {
  const toast = document.createElement('ion-toast');
  toast.message = 'Signing in, please wait...';
  toast.duration = 2000;
  toast.color = 'primary';

  document.body.appendChild(toast);
  return toast.present();
}





@Component({
  tag: 'app-auth',
  styleUrl: 'app-auth.css',
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
            <ion-card-content>Please sign in</ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Sign in with Email</ion-card-title>
            </ion-card-header>
            <ion-list>
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input placeholder="100101@dbrand.com"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input placeholder="Robotsarecoolz" type="password"></ion-input>
              </ion-item>
              <ion-button expand="block" color="secondary" onClick={() => toastSignin()}>
                <ion-icon slot="start" name="mail"></ion-icon>
                Sign In With Email
              </ion-button>
            </ion-list>
          </ion-card>
          <section id="login">
            <ion-button  class="discord" expand="block" href="https://discord.com/api/oauth2/authorize?client_id=935755084959219722&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Fapi%2Fv1%2Fauth%2Fdiscord%2Fcallback%2F&response_type=code&scope=identify%20email" onClick={() => toastSignin()}>
              <ion-icon slot="start" name="logo-discord"></ion-icon>
             Sign In With Discord
            </ion-button>
            <br></br>
            <ion-button  slot="start" class="apple" expand="block" color="light" onClick={() => toastSignin()}>
              <ion-icon slot="start" name="logo-apple"></ion-icon>
              Sign In With Apple
            </ion-button>
            <br></br>
            <ion-button  slot="start" class="google" expand="block" color="danger" onClick={() => toastSignin()}>
              <ion-icon slot="start" name="logo-google"></ion-icon>
              Sign In With Google
            </ion-button>
            <br></br>
            <ion-button  slot="start" expand="block" color="light" onClick={() => toastSignin()}>
              <ion-icon slot="start"name="logo-github"></ion-icon>
              Sign In With Github
            </ion-button>
            <br></br>
            <ion-button  slot="start" expand="block" color="secondary" onClick={() => toastSignin()}>
                <ion-icon slot="start" name="mail"></ion-icon>
                Sign In With Email
              </ion-button>
            
          </section>
         
        </ion-content>
        <ion-footer></ion-footer>
      </Host>
    );
  }
}
