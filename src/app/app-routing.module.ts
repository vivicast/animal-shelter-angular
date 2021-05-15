import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdoptersComponent} from './adopters/adopters.component';
import {ColoniesComponent} from './colonies/colonies.component';
import {CatsComponent} from './cats/cats.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path: 'adopters', component: AdoptersComponent},
  {path: 'colonies', component: ColoniesComponent},
  {path: 'cats', component: CatsComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
