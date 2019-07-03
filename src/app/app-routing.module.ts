import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableBasicComponent } from './table-basic/table-basic.component';
import { TableCompleteComponent } from './table-complete/table-complete.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "tablecomplete",
    pathMatch: "full"
  },
  { path: 'tablebasic', component: TableBasicComponent },
  { path: 'tablecomplete', component: TableCompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
