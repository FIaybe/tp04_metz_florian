import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { DisplayCatalogComponent } from './catalog.component';

const appChild: Routes = [
  {
    path: '',
    component: DisplayCatalogComponent,
  }
];

@NgModule({
  declarations: [
    DisplayCatalogComponent,
  ],
  imports: [
    RouterModule.forChild(appChild),
    CommonModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SearchBarModule,
  ]
})
export class DisplayCatalogModule { }
