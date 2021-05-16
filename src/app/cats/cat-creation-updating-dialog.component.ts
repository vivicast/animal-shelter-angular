import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Cat} from './cat.model';
import {CatService} from './cat.service';

@Component({
  templateUrl: 'cat-creation-updating-dialog.component.html',
  styleUrls: ['cat-creation-updating-dialog.component.css']
})
export class CatCreationUpdatingDialogComponent {
  title: string;
  cat: Cat;
  oldCatChip: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Cat,
    private catService: CatService,
    private dialog: MatDialog
  ) {
    this.title = data ? 'Update Cat' : 'Create Cat';
    this.cat = data ? data : {
      name: undefined,
      admissionDate: undefined,
      departureDate: undefined,
      sociable: false,
      chip: undefined,
      adopterNif: undefined
    };
    this.oldCatChip = data ? data.chip : undefined;
  }

  isCreate(): boolean {
    return this.oldCatChip === undefined;
  }

  invalid(): boolean {
    return this.check(this.cat.name) ||
      this.check(this.cat.admissionDate) ||
      this.check(this.cat.chip);
  }

  create(): void {
    this.catService
      .create(this.cat)
      .subscribe(() => { this.dialog.closeAll(); });
  }

  update(): void {
    this.catService
      .update(this.oldCatChip, this.cat)
      .subscribe(() => { this.dialog.closeAll(); });
  }

  check(prop: any): boolean {
    return prop === undefined || prop === null || prop === '';
  }
}
