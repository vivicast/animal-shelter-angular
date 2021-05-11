import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Adopter} from './adopter.model';
import {AdopterService} from './adopter.service';
import {AdopterCreationUpdatingDialogComponent} from './adopter-creation-updating-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';

@Component({
  selector: 'app-adopters',
  templateUrl: './adopters.component.html',
  styleUrls: ['./adopters.component.css']
})
export class AdoptersComponent {
  title = 'Adopters';
  adopters = of([]);

  constructor(private dialog: MatDialog, private adopterService: AdopterService) {
    this.search();
  }

  search(): void {
    this.adopters = this.adopterService.findAll();
  }

  create(): void {
    this.dialog.open(AdopterCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  read(adopter: Adopter): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Adopter Details',
        object: this.adopterService.read(adopter.nif)
      }
    });
  }

  update(adopter: Adopter): void {
    this.adopterService
      .read(adopter.nif)
      .subscribe((fullAdopter: Adopter) =>
        this.dialog.open(AdopterCreationUpdatingDialogComponent,
          {data: fullAdopter})
          .afterClosed()
          .subscribe(() => this.search())
      );
  }

  delete(adopter: Adopter): void {
    this.dialog.open(CancelYesDialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.adopterService.delete(adopter.nif)
            .subscribe(() => this.search());
        }
      });
  }

}
