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
import {ColoniesComponent} from './colonies/colonies.component';
import {ColonyService} from './colonies/colony.service';
import {ColonyCreationUpdatingDialogComponent} from './colonies/colony-creation-updating-dialog.component';
import {CatsComponent} from './cats/cats.component';
import {CatCreationUpdatingDialogComponent} from './cats/cat-creation-updating-dialog.component';
import {CatService} from './cats/cat.service';

@NgModule({
  declarations: [
    AppComponent,
    AdoptersComponent,
    AdopterCreationUpdatingDialogComponent,
    ColoniesComponent,
    ColonyCreationUpdatingDialogComponent,
    CatsComponent,
    CatCreationUpdatingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    AdopterService,
    ColonyService,
    CatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
