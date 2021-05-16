import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {MaterialModule} from '@shared/material.module';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';
import {CrudComponent} from '@shared/components/crud.component';
import {SearchComponent} from '@shared/components/search.component';
import {SearchByAdopterComponent} from '@shared/components/search-by-adopter.component';
import {SharedAdopterService} from '@shared/services/shared.adopter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule
  ],
  declarations: [
    CancelYesDialogComponent,
    CrudComponent,
    ReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    SearchByAdopterComponent,
  ],
  exports: [
    CancelYesDialogComponent,
    CommonModule,
    CrudComponent,
    FlexLayoutModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    SearchByAdopterComponent,
  ],
  entryComponents: [
    CancelYesDialogComponent,
    ReadDetailDialogComponent,
  ],
  providers: [
    SharedAdopterService
  ]
})
export class SharedModule {
}
