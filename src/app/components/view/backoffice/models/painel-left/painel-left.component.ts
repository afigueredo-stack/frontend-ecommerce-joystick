import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-painel-left',
  templateUrl: './painel-left.component.html',
  styleUrls: ['./painel-left.component.css']
})
export class PainelLeftComponent {
  constructor() { }

  /* Minimized/Restore Painel Left */
  @Input() display;
  @Input() text;
  @Input() marginBottomTitle;
  @Input() paddingButton;

}
