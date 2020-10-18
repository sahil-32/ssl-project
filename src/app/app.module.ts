import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { GetpostService } from './getpost.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GetpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
