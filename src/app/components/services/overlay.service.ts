import { Injectable, Component } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Injectable()
export class OverlayService {

  constructor(private overlay: Overlay, private dialog: MatDialog) { }
  open(component: any) {
    let dialogRef: MatDialogRef<Component> = this.dialog.open(component, {
      panelClass: 'transparent',
      disableClose: true
    });

    return dialogRef;
  }

  close(spinner: MatDialogRef<any>) {
    spinner.close();
  }
}
export interface AppOverlayConfig extends OverlayConfig { }