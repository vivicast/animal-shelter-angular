import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Colony} from './colony.model';
import {ColonyService} from './colony.service';

@Component({
  templateUrl: 'colony-creation-updating-dialog.component.html',
  styleUrls: ['colony-creation-updating-dialog.component.css']
})
export class ColonyCreationUpdatingDialogComponent {
  title: string;
  colony: Colony;
  oldColonyRegistry: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Colony,
    private colonyService: ColonyService,
    private dialog: MatDialog
  ) {
    this.title = data ? 'Update Colony' : 'Create Colony';
    this.colony = data ? data : {
      registry: undefined,
      manager: undefined,
      phone: undefined,
      location: undefined
    };
    this.oldColonyRegistry = data ? data.registry : undefined;
  }

  isCreate(): boolean {
    return this.oldColonyRegistry === undefined;
  }

  invalid(): boolean {
    return this.check(this.colony.registry) || this.check(this.colony.manager);
  }

  create(): void {
    this.colonyService
      .create(this.colony)
      .subscribe(() => { this.dialog.closeAll(); });
  }

  update(): void {
    this.colonyService
      .update(this.oldColonyRegistry, this.colony)
      .subscribe(() => { this.dialog.closeAll(); });
  }

  check(prop: any): boolean {
    return prop === undefined || prop === null || prop === '';
  }
}
