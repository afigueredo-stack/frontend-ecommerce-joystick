import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FullscreenService } from 'src/app/components/services/fullscreen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() hasToggledTheme = new EventEmitter();
  @Output() hasMinimizedPainel = new EventEmitter();

  constructor(
    private fullscreenService: FullscreenService
  ) {
    ;
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

}
