import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '@core/core.module';
import {SharedModule} from '@shared/shared.module';
import {AdoptersComponent} from './adopters/adopters.component';
import {AdopterService} from './adopters/adopter.service';
import {AdopterCreationUpdatingDialogComponent} from './adopters/adopter-creation-updating-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdoptersComponent,
    AdopterCreationUpdatingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    AdopterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
