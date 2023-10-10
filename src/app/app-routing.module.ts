import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
 // { path:'photo/link', component:PhotoComponent},
  {path:'photo',component:PhotoComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
