import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { LoadingComponent } from 'src/app/components/design/loading/loading.component';
import { AuthenticationService } from 'src/app/components/services/authentication.service';
import { OverlayService } from 'src/app/components/services/overlay.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';

  /* Material Design of Password - Visible or not */
  hide = true;

  /* breakpoint */
  breakpointForm: number = 4;
  breakpointBanner: number = 8;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private progressSpinnerService: OverlayService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/backoffice/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.breakpointForm = (window.innerWidth <= 800) ? 12 : 4;
    this.breakpointBanner = (this.breakpointForm == 12) ? 0 : 8;

  }

  onResize(event) {
    this.breakpointForm = (event.target.innerWidth <= 800) ? 12 : 4;
    this.breakpointBanner = (this.breakpointForm == 12) ? 0 : 8;
  }

  @ViewChild('usernameInput', { static: true }) usernameInput: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput: ElementRef;

  //Facilitando o acesso dos valores do Form
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // Para aqui se o form está inválido
    if (this.loginForm.invalid) {
      this.showError("Tem alguma coisa errada -_- Veja se os campos de usuário e senha estão inseridos");
      return;
    }
    let spinner = this.showProgressSpinner();
    this.authenticationService.login(this.f.username.value.trim(), this.f.password.value.trim())
      .pipe(first())
      .subscribe({
        next: () => {
          this.closeProgressSpinner(spinner);
          this.router.navigate(['backoffice/home']);
        },
        error: error => {
          this.focusPassword();
          this.closeProgressSpinner(spinner);
          this.showError(error);
        }
      });
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

  focusPassword() {
    this.passwordInput.nativeElement.value = '';
    this.passwordInput.nativeElement.focus();
  }

}
