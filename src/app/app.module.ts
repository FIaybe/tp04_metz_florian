import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './component/client/client-form/client-form.component';
import { DisplayClientComponent } from './component/client/display-client/display-client.component';
import { DisplayCatalogComponent } from './component/display-catalog/display-catalog.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { OnlyLetterDirective } from './directives/onlyLetter/only-letter.directive';
import { SpecificNumberDigitDirective } from './directives/specificNumberDigit/specific-number-digit.directive';
import { PhoneFormatPipe } from './pipe/phone-format.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientFormComponent,
    WelcomeComponent,
    DisplayClientComponent,
    SpecificNumberDigitDirective,
    OnlyLetterDirective,
    PhoneFormatPipe,
    DisplayCatalogComponent,
    SearchBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
