import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdoptersComponent} from './adopters/adopters.component';

const routes: Routes = [
  {path: 'adopters', component: AdoptersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
