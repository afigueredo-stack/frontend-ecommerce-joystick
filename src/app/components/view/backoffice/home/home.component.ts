import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  /* Responsável por exibir Dark Theme ou Light Theme */
  hasToggledTheme: boolean;

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

  /* Alterado tema da aplicação  */
  toggleTheme() {
    this.hasToggledTheme = !this.hasToggledTheme;
  }

  /* Configuracion for mobile */
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  /* Minimized/Restore Painel Left */
  display = 'listview';
  marginBottomTitle = 'listview';
  text = 'listview';
  widthSidenav = 'listview';
  minwidthSidenav = 'listview';
  paddingButton = 'listview';
  marginContentRight = 'listview';

  isMinized: boolean = false;

  minizedPainelLeft() {
    if (!this.isMinized) {
      this.display = 'none';
      this.text = 'left';
      this.widthSidenav = '75px';
      this.minwidthSidenav = '75px';
      this.paddingButton = '26px';
      this.marginContentRight = '75px';
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
