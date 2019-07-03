import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { NgbdSortableHeader } from './table-complete/sortable.directive';
import { TableCompleteComponent } from './table-complete/table-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicComponent,
    TableCompleteComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NgbdSortableHeader],
  bootstrap: [AppComponent]
})
export class AppModule { }
