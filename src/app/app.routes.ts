
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ReactorListPageComponent } from "./pages/reactor-list-page/reactor-list-page.component";

export const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'reactors',
    component: ReactorListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
