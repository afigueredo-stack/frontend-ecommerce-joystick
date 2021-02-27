import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /* Configuracion for mobile */
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  /* Minimized/Restore Painel Left */
  display = 'listview';
  marginBottomTitle = 'listview';
  text = 'listview';//ok
  widthSidenav = 'listview';//ok
  minwidthSidenav = 'listview';//ok
  paddingButton = 'listview';
  marginContentRight = 'listview';//ok

  isMinized: boolean = false;

  minizedPainelLeft() {
    if (!this.isMinized) {
      this.display = 'none';
      /* this.marginBottomTitle = '0'; */
      this.text = 'left';
      this.widthSidenav = '72px';
      this.minwidthSidenav = '72px';
      this.paddingButton = '10px';
      this.marginContentRight = '72px';
      this.isMinized = true;
    } else if (window.innerWidth > 600) {
      this.display = 'inline-flex';
      this.marginBottomTitle = '0px';
      this.text = 'center';
      this.widthSidenav = '270px';
      this.minwidthSidenav = '270px';
      this.paddingButton = '50px 50px';
      this.marginContentRight = '270px';
      this.isMinized = false;
    }
  }

}
