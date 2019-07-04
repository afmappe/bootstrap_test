import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenericListComponent } from './generic-list/generic-list.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { TableCompleteComponent } from './table-complete/table-complete.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  { path: 'tablebasic', component: TableBasicComponent },
  { path: 'tablecomplete', component: TableCompleteComponent },
  { path: 'list', component: GenericListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
