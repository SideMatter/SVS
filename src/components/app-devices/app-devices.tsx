import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-devices',
  styleUrl: 'app-devices.css',
})
export class AppDevices {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
          <ion-menu-button slot="start"></ion-menu-button>
            <ion-title>Devices</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-item>
            <ion-label>Legend The Dipshit</ion-label>
            <ion-chip color="danger">
              <ion-icon name="close-circle"></ion-icon>
              <ion-label>No Guide Found</ion-label>
            </ion-chip>
          </ion-item>
          <ion-item>
            <ion-label>Meta Quest</ion-label>
            <ion-chip color="warning">
              <ion-icon name="people"></ion-icon>
              <ion-label>Community Guides Created</ion-label>
            </ion-chip>
          </ion-item>
          <ion-item>
            <ion-label>The Ridge Wallet</ion-label>
            <ion-chip color="success">
              <ion-icon name="checkmark-circle"></ion-icon>
              <ion-label>Offically Verified Guide</ion-label>
            </ion-chip>
          </ion-item>
          <ion-fab vertical="bottom" horizontal="end" slot="fixed">
<ion-fab-button href="/new-device">
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
            </ion-fab>
        </ion-content>
      </Host>
    );
  }
}
