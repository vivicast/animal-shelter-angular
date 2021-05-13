import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdoptersComponent} from './adopters/adopters.component';
import {ColoniesComponent} from './colonies/colonies.component';

const routes: Routes = [
  {path: 'adopters', component: AdoptersComponent},
  {path: 'colonies', component: ColoniesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
