import { Component, Host, h } from '@stencil/core';
async function toastVerifed() {
  const toast = document.createElement('ion-toast');
  toast.message = 'This guide is the recommended way to skin this device and has been created by Tony Stark himself';
  toast.duration = 2000;
  toast.color = 'success';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastKit() {
  const toast = document.createElement('ion-toast');
  toast.message = 'This kit is the best way to skin this device with the least materials. If you intend to skin more then this device, consider buying a bigger skin ';
  toast.duration = 2000;
  toast.color = 'primary';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastTools() {
  const toast = document.createElement('ion-toast');
  toast.message = 'The tools score is the level of tools required to skin this device successfully, the higher the score the more tools are required';
  toast.duration = 2000;
  toast.color = 'tertiary';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastDiff() {
  const toast = document.createElement('ion-toast');
  toast.message = 'The difficulty score is how hard the application process is. The higher the score the harder the process';
  toast.duration = 2000;
  toast.color = 'tertiary';

  document.body.appendChild(toast);
  return toast.present();
}
async function toastMat() {
  const toast = document.createElement('ion-toast');
  toast.message = 'The material score is the amount of required material to skin the device successfully, the higher the score the more material is required';
  toast.duration = 2000;
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
  tag: 'app-guide',
  styleUrl: 'app-guide.css',
})
export class AppGuide {
  render() {
    return (
      <Host>
        <ion-content>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Skin Guide</ion-card-subtitle>
              <ion-card-title>How to skin a Ridge Wallet</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-chip onClick={() => toastVerifed()} color="success">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <ion-label>Verified</ion-label>
              </ion-chip>
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
              <ion-chip color="primary" onClick={() => toastTime()}>
 <ion-icon name="timer-outline"></ion-icon>
   <ion-label>Time Required: 30 Mins</ion-label>
  </ion-chip>
              
              <ion-chip color="primary" onClick={() => toastKit()}>
                <ion-icon name="checkmark-circle-outline"> </ion-icon>
                <ion-label>Kit: Macbook Pro 16"</ion-label>
              </ion-chip>
              <br></br>
   Skinning a ridge wallet is a fairly easy custom skin to complete as it basically a metal rectangle with a small indent at the bottom.
   <br></br>
              
            </ion-card-content>
          </ion-card>
          
            <ion-card class="guide">
              <ion-card-header color="primary">
                <ion-card-subtitle>Step 1</ion-card-subtitle>
                <ion-card-title>Prepare the wallet for skinning.</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <br></br>
                Wipe it down with a microfiber cleaning cloth, included in your dbrand order.
              </ion-card-content>
            </ion-card>

            <ion-card class="guide">
              <ion-card-header color="primary">
                <ion-card-subtitle>Step 2</ion-card-subtitle>
                <ion-card-title>Rough Cut</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <br></br>
                Place the item on the back of the 3m Paper. Draw a line, about one inch around the sides, then cut with either a pair of scisors or an xacto knife.
              </ion-card-content>
            </ion-card>
            <ion-card class="guide">
              <ion-card-header color="primary">
                <ion-card-subtitle>Step 3</ion-card-subtitle>
                <ion-card-title>Apply Skin</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <br></br>
                Peel off the back of the 3M paper and place the wallet face down on the exposed skin.
              </ion-card-content>
            </ion-card>
            <ion-card class="guide">
              <ion-card-header color="primary">
                <ion-card-subtitle>Step 4</ion-card-subtitle>
                <ion-card-title>Trimming</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <br></br>
                Using a <strong>sharp</strong> xacto knife, trim around the edges of the wallet, being careful to not remove skin under the face of the wallet.
              </ion-card-content>
            </ion-card>

            <ion-card class="guide">
              <ion-card-header color="primary">
                <ion-card-subtitle>Step 5</ion-card-subtitle>
                <ion-card-title>Melting the skin</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <br></br>
                After step 4, pick up your wallet, and either trim up the edges if theres excess, and wipe the edges 10-15 times with a microfiber cleaning cloth.
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header color="success" >
                <ion-card-title>Done!</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <br></br>
                  If you have any questions, you know how to reach us.
                </ion-card-content>
            </ion-card>

        </ion-content>

        <ion-footer>
          <ion-button href="/" expand="full">
            Back to Home
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
