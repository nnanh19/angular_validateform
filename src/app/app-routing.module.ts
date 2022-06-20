import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './product/add/add.component';
import { EditComponent } from './product/edit/edit.component';
import { ListComponent } from './product/list/list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: ':id/edit',
        component: EditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
