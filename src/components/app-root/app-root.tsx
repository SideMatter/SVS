import { Component, h } from '@stencil/core';

// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}




// TODO: Replace the following with your app's Firebase project configuration


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (

      
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"/>
          <ion-route url="/guide/" component="app-guide"/>
          <ion-route url="/auth/" component="app-auth"/>
          <ion-route url="/new-guide/" component="app-new-guide"/>
          <ion-route url="/devices/" component="app-devices"/>
        </ion-router>
       
        <ion-split-pane contentId="main">
          <ion-menu contentId="main" type="overlay">
            <ion-header>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-item href='/'>Guides</ion-item>
                <ion-item href='/devices'>Devices</ion-item>
              </ion-list>
             
            </ion-content>
          </ion-menu>
          <ion-nav id="main"></ion-nav>
        </ion-split-pane>
       
      </ion-app>
    );
  }
}
