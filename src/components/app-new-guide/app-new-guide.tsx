import { Component, Host, h } from '@stencil/core';

function submitGuide() {
  const toast = document.createElement('ion-toast');
  toast.message = 'Guide NOT created, SideMatter Hasnt coded submission yet';
  toast.duration = 2000;
  toast.color = 'danger';

  document.body.appendChild(toast);
  return toast.present();
}

async function addChip() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Chips';
  alert.subHeader = 'So about that chip...';
  alert.message = 'Adding chips is not yet supported, it will be soon tho';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

function addSteps() {
  const div = document.getElementById('addhere');
  div.insertAdjacentHTML(
    'beforeend',
    `

  <ion-card>
  <ion-card-header color="primary">
    <ion-input id="steptitle" placeholder="Title Goes Here"></ion-input>
    </ion-card-header>
    <ion-card-content>
    <ion-textarea id="stepcontent" placeholder="Step Content Goes Here"></ion-textarea>
    </ion-card-content>
</ion-card>
`,
  );
  const toast = document.createElement('ion-toast');
  toast.message = 'New Step Created';
  toast.duration = 2000;
  toast.color = 'primary';

  document.body.appendChild(toast);
  return toast.present();
}
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
          <ion-card>
            <ion-card-header color="danger">THIS IS NOT A WORKING PAGE YET!!! YOU HAVE BEEN WARNED!!!</ion-card-header>
          </ion-card>
          <ion-list>
            <ion-item>
              <ion-label position="floating">Device Name</ion-label>
              <ion-input placeholder="iPhone 13 Pro Max"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Title Of Guide</ion-label>
              <ion-input placeholder="Skinning for dummies"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Reccomended Kit</ion-label>
              <ion-input placeholder="Macbook Pro 16 inch"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Tools Score</ion-label>
              <ion-select placeholder="Does it require more then normal tools?">
                <ion-select-option value="1">Normal</ion-select-option>
                <ion-select-option value="2">Optional</ion-select-option>
                <ion-select-option value="3">Additional</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label>Difficulty Score</ion-label>
              <ion-select placeholder="Lower is easier">
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
              <ion-input placeholder="20 min"></ion-input>
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
            

            <div id="addhere"></div>
    

          
          <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button>
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="top">
              <ion-fab-button onClick={() => addSteps()}>
                <ion-icon name="footsteps-outline"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>

            <ion-fab-list side="start">
              <ion-fab-button>
                <ion-icon name="information-circle-outline" onClick={() => addChip()}></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
        </ion-content>
        <ion-footer>
          <ion-button expand="full" onClick={() => submitGuide()}>
            Submit Guide
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
