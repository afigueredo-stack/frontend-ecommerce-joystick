import { Component, Input } from '@angular/core';
import { User } from 'src/app/components/models/user';
import { AuthenticationService } from 'src/app/components/services/authentication.service';

@Component({
  selector: 'app-painel-left',
  templateUrl: './painel-left.component.html',
  styleUrls: ['./painel-left.component.css']
})
export class PainelLeftComponent {
  currentUser: User;
  fullName: string[];
  firstName: string;
  lastName: string;
  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);

    this.fullName = this.currentUser.name.split(' ');
    this.firstName = this.fullName[0];
    this.lastName = this.fullName[this.fullName.length - 1];
  }

  /* Minimized/Restore Painel Left */
  @Input() display;
  @Input() text;
  @Input() marginBottomTitle;
  @Input() paddingButton;
}
