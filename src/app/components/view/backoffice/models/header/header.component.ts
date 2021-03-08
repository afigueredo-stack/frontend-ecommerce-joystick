import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FullscreenService } from 'src/app/components/services/fullscreen.service';
import { AuthenticationService } from 'src/app/components/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/components/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  currentUser: User;
  @Output() hasToggledTheme = new EventEmitter();
  @Output() hasMinimizedPainel = new EventEmitter();

  constructor(
    private fullscreenService: FullscreenService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void { }

  /**
   * Toggles the fullscreen mode.
   */
  onToggleFullscreen() {
    this.fullscreenService.toggle();
  }

  /* Configuracion for notificions */
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  /**
 * Toggles the theme
 */
  toggleTheme() {
    this.hasToggledTheme.emit();
  }

  /* Evento enviado para o pai para minimizar o painel esquerdo */
  minizedPainelLeft() {
    this.hasMinimizedPainel.emit();
  }

  /* Variaveis Minimized/Restore Painel Left */
  @Input() widthSidenav;
  @Input() minwidthSidenav;
  @Input() display;
  @Input() text;

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/backoffice/login']);
  }

}
