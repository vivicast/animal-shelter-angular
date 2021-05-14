import {Component} from '@angular/core';
import {of} from 'rxjs';
import {Colony} from './colony.model';
import {ColonyService} from './colony.service';
import {MatDialog} from '@angular/material/dialog';
import {ColonyCreationUpdatingDialogComponent} from './colony-creation-updating-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {ColonySearch} from './colony-search.model';

@Component({
  selector: 'app-colonies',
  templateUrl: './colonies.component.html',
  styleUrls: ['./colonies.component.css']
})
export class ColoniesComponent {
  title = 'Colonies';
  colonies = of([]);
  colonySearch: ColonySearch = {};

  constructor(private dialog: MatDialog, private colonyService: ColonyService) {
    this.resetSearch();
  }

  search(): void {
    this.colonies = this.colonyService.search(this.colonySearch);
  }

  resetSearch(): void {
    this.colonySearch = {};
  }

  create(): void {
    this.dialog.open(ColonyCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  read(colony: Colony): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Colony Details',
        object: this.colonyService.read(colony.registry)
      }
    });
  }

  update(colony: Colony): void {
    this.colonyService
      .read(colony.registry)
      .subscribe((fullColony: Colony) =>
        this.dialog.open(ColonyCreationUpdatingDialogComponent,
          {data: fullColony})
          .afterClosed()
          .subscribe(() => this.search())
      );
  }

  delete(colony: Colony): void {
    this.dialog.open(CancelYesDialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.colonyService.delete(colony.registry)
            .subscribe(() => this.search());
        }
      });
  }
}
