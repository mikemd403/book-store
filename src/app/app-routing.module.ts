import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AllbooksComponent } from './books/allbooks/allbooks.component';

const booksRoutes: Routes = [
  {path:':id',component:BookComponent}
];

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'books',component:BooksComponent,
    children:booksRoutes},
  {path:'allbooks',component:AllbooksComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
