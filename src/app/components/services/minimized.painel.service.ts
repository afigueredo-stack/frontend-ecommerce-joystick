import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinimizedPainelService {

  display = 'listview';
  text = 'listview';
  widthSidenav = 'listview';
  minwidthSidenav = 'listview';
  paddingButton = 'listview';
  marginContentRight = 'listview';

  isMinized = false;

  minizedPainel() {
    this.isMinized = this.isMinized ? false : true;

    if (this.isMinized) {
      this.display = 'none';
      this.text = 'left';
      this.widthSidenav = '72px';
      this.minwidthSidenav = '72px';
      this.paddingButton = '10px';
      this.marginContentRight = '72px';
    } else {
      this.display = 'inline-flex';
      this.text = 'center';
      this.widthSidenav = '270px';
      this.minwidthSidenav = '270px';
      this.paddingButton = '50px 50px';
      this.marginContentRight = '270px';
    }
  }
}