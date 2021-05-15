import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Cat} from './cat.model';
import {CatService} from './cat.service';
import {CatCreationUpdatingDialogComponent} from './cat-creation-updating-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  title = 'Cats';
  showOnlyAdoptableCats = false;
  cats = of([]);

  constructor(private dialog: MatDialog, private catService: CatService) {
  }

  search(): void {
    this.cats = this.catService.search({onlyAdoptable: this.showOnlyAdoptableCats});
  }

  create(): void {
    this.dialog.open(CatCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  read(cat: Cat): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Cat Details',
        object: this.catService.read(cat.chip)
      }
    });
  }

  update(cat: Cat): void {
    this.catService
      .read(cat.chip)
      .subscribe((fullCat: Cat) =>
        this.dialog.open(CatCreationUpdatingDialogComponent,
          {data: fullCat})
          .afterClosed()
          .subscribe(() => this.search())
      );
  }

  delete(cat: Cat): void {
    this.dialog.open(CancelYesDialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.catService.delete(cat.chip)
            .subscribe(() => this.search());
        }
      });
  }
}
