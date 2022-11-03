import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCatalogComponent } from './component/display-catalog/display-catalog.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderModule } from './component/header/header.module';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { OnlyLetterDirective } from './directives/onlyLetter/only-letter.directive';
import { SpecificNumberDigitDirective } from './directives/specificNumberDigit/specific-number-digit.directive';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SpecificNumberDigitDirective,
    OnlyLetterDirective,
    DisplayCatalogComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDividerModule,
    HeaderModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
