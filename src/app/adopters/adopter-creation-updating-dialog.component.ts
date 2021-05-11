import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Adopter} from './adopter.model';
import {AdopterService} from './adopter.service';

@Component({
  templateUrl: 'adopter-creation-updating-dialog.component.html',
  styleUrls: ['adopter-creation-updating-dialog.component.css']
})
export class AdopterCreationUpdatingDialogComponent {
  title: string;
  adopter: Adopter;
  oldAdopterNif: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Adopter,
    private adopterService: AdopterService,
    private dialog: MatDialog
  ) {
    this.title = data ? 'Update Adopter' : 'Create Adopter';
    this.adopter = data ? data : {
      name: undefined,
      nif: undefined,
      address: undefined,
      birthDay: undefined
    };
    this.oldAdopterNif = data ? data.nif : undefined;
  }

  isCreate(): boolean {
    return this.oldAdopterNif === undefined;
  }

  invalid(): boolean {
    return this.check(this.adopter.name) ||
      this.check(this.adopter.nif) ||
      this.check(this.adopter.address) ||
      this.check(this.adopter.birthDay);
  }

  create(): void {
    this.adopterService
      .create(this.adopter)
      .subscribe(() => { this.dialog.closeAll(); });
  }

  update(): void {
    this.adopterService
      .update(this.oldAdopterNif, this.adopter)
      .subscribe(() => { this.dialog.closeAll(); });
  }

  check(prop: any): boolean {
    return prop === undefined || prop === null || prop === '';
  }
}
