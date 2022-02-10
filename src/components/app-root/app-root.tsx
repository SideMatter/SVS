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
          <ion-menu contentId="main" type="overlay" color="primary">
            <ion-header>
            
              <ion-toolbar>
              <ion-thumbnail slot="start">
  <img src="https://cdn.discordapp.com/attachments/833432914863194152/940359942861389844/unknown.png"></img>
</ion-thumbnail>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-item href='/'>
                <ion-icon name="list" slot="start"></ion-icon>Guides</ion-item>
                <ion-item href='/devices'>
                <ion-icon name="phone-portrait" slot="start"></ion-icon>Devices</ion-item>
              </ion-list>
            </ion-content>
            <ion-footer>
               <ion-item href="/auth">
               <ion-icon name="person-circle-outline" slot="start"></ion-icon>
                 SideMatter</ion-item>
             </ion-footer>
          </ion-menu>
          <ion-nav id="main"></ion-nav>
        </ion-split-pane>
       
      </ion-app>
    );
  }
}
