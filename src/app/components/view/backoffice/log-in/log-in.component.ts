import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { BackofficeService } from '../../../services/backoffice.service';
import { OverlayService } from 'src/app/components/services/overlay.service';
import { LoadingComponent } from 'src/app/components/design/loading/loading.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;
  visibleSpinner = false;
  /* breakpoint/*  */
  breakpointForm: number = 4;
  breakpointBanner: number = 8;

  ngOnInit() {
    this.breakpointForm = (window.innerWidth <= 800) ? 12 : 4;
    this.breakpointBanner = (this.breakpointForm == 12) ? 0 : 8;
  }

  onResize(event) {
    this.breakpointForm = (event.target.innerWidth <= 800) ? 12 : 4;
    this.breakpointBanner = (this.breakpointForm == 12) ? 0 : 8;
  }

  @ViewChild('emailInput', { static: true }) emailInput: ElementRef;
  @ViewChild('senhaInput', { static: true }) senhaInput: ElementRef;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  })

  constructor(
    private backofficeService: BackofficeService,
    private router: Router,
    private toastr: ToastrService,
    private progressSpinnerService: OverlayService
  ) {
  }

  showSuccess(msg: string) {
    this.toastr.success(msg);
  }

  showError(msg: string) {
    this.toastr.error(msg)
  }

  showProgressSpinner() {
    return this.progressSpinnerService.open(LoadingComponent);
  }

  closeProgressSpinner(spinner: MatDialogRef<any>) {
    this.progressSpinnerService.close(spinner);
  }

  logIn(): void {
    /* Exibindo Spinner */
    let spinner = this.showProgressSpinner();
    this.backofficeService.logIn(this.loginForm.value).subscribe(loginReturn => {

      this.emailInput.nativeElement.value = '';
      this.senhaInput.nativeElement.value = '';

      this.showSuccess("Top! Vamos lá!.");
      this.router.navigate(['backoffice/home']);

      /* Retirando Spinner */
      this.closeProgressSpinner(spinner);

    },
      (err) => {
        if (err.status == 400) {
          this.senhaInput.nativeElement.value = '';
          this.senhaInput.nativeElement.focus();

          console.log(err);
          const erroReturn = err.error.errors;
          this.showError(erroReturn);

          /* Retirando Spinner */
          this.closeProgressSpinner(spinner);
        }
      });
  }
}
