import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCatalogComponent } from './component/display-catalog/display-catalog.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./component/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'client-form', loadChildren: () => import('./component/client/client.module').then(m => m.ClientModule) },
  { path: 'display-catalog', component: DisplayCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
