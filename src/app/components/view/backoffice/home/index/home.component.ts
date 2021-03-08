import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { User } from 'src/app/components/models/user';
import { UserService } from 'src/app/components/services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  /* Responsável por exibir Dark Theme ou Light Theme */
  hasToggledTheme: boolean;
  users: User;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private userService: UserService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.userService.getUser().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

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
      this.widthSidenav = '72px';
      this.minwidthSidenav = '72px';
      this.paddingButton = '26px';
      this.marginContentRight = '75px';
      this.isMinized = true;
    } else if (window.innerWidth > 600) {
      this.display = 'inline-flex';
      this.marginBottomTitle = '0px';
      this.text = 'center';
      this.widthSidenav = '260px';
      this.minwidthSidenav = '260px';
      this.paddingButton = '50px 50px';
      this.marginContentRight = '260px';
      this.isMinized = false;
    }
  }

}
