import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/contact', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
