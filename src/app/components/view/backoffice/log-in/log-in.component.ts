import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { BackofficeService } from '../../../services/backoffice.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  public loading = false;

  @ViewChild('emailInput', { static: true }) emailInput: ElementRef;
  @ViewChild('senhaInput', { static: true }) senhaInput: ElementRef;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })

  constructor(
    private backofficeService: BackofficeService,
    private router: Router,
    private toastr: ToastrService) { }

  showSuccess(msg: string) {
    this.toastr.success(msg);
  }

  showError(msg: string) {
    this.toastr.error(msg)
  }

  logIn(): void {

    this.loading = true;
    this.backofficeService.logIn(this.loginForm.value).subscribe(loginReturn => {
      this.loading = false;

      this.emailInput.nativeElement.value = '';
      this.senhaInput.nativeElement.value = '';

      this.showSuccess("Top! Vamos lá!.")
      this.router.navigate(['backoffice/home'])
    },
      erro => {
        this.loading = false;
        if (erro.status == 400) {
          this.senhaInput.nativeElement.value = '';
          this.senhaInput.nativeElement.focus();

          console.log(erro);
          const erroReturn = erro.error.errors;
          this.showError(erroReturn);
        }
      });
  }
}
