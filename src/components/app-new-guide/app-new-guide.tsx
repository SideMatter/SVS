import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-new-guide',
  styleUrl: 'app-new-guide.css',
  
})
export class AppNewGuide {

  render() {
    return (
      <Host>
        <ion-content>
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>New Guide</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-list>
          <ion-item>
  <ion-label position="floating">Device Name</ion-label>
  <ion-input></ion-input>
</ion-item>
<ion-item>
  <ion-label position="floating">Title Of Guide</ion-label>
  <ion-input></ion-input>
</ion-item>
<ion-item>
    <ion-label>Tools Score</ion-label>
    <ion-select placeholder="Lower is better">
      <ion-select-option value="1">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3">3</ion-select-option>
      <ion-select-option value="4">4</ion-select-option>
      <ion-select-option value="5">5</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item>
    <ion-label>Difficulty Score</ion-label>
    <ion-select placeholder="Lower is better">
      <ion-select-option value="1">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3">3</ion-select-option>
      <ion-select-option value="4">4</ion-select-option>
      <ion-select-option value="5">5</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item>
    <ion-label>Materials Score</ion-label>
    <ion-select placeholder="Lower is better">
      <ion-select-option value="1">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3">3</ion-select-option>
      <ion-select-option value="4">4</ion-select-option>
      <ion-select-option value="5">5</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item>
  <ion-label position="floating">Time to Complete</ion-label>
  <ion-input></ion-input>
</ion-item>
          </ion-list>
          <ion-card>
            <ion-card-header color="primary">
              <ion-card-title>Create Your Steps</ion-card-title>
            </ion-card-header>
       
          </ion-card>
          <ion-card>
            <ion-card-header color="primary">
              <ion-input id="steptitle" placeholder="Title Goes Here"></ion-input>
              </ion-card-header>
              <ion-card-content>
              <ion-textarea id="stepcontent" placeholder="Step Content Goes Here"></ion-textarea>
              </ion-card-content>
          </ion-card>
          <ion-fab vertical="bottom" horizontal="end" >
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button><ion-icon name="footsteps-outline"></ion-icon></ion-fab-button>
    </ion-fab-list>
  
    <ion-fab-list side="start">
      <ion-fab-button><ion-icon name="information-circle-outline"></ion-icon></ion-fab-button>
    </ion-fab-list>
 
  </ion-fab>
          </ion-content>
      </Host>
    );
  }

}
