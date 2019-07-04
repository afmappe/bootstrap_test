import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { SearchDirective } from './generic-list/search.directive';
import { HighlightDirective } from './highlight.directive';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { NgbdSortableHeader } from './table-complete/sortable.directive';
import { TableCompleteComponent } from './table-complete/table-complete.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    GenericListComponent,
    HighlightDirective,
    NgbdSortableHeader,
    SearchDirective,
    TableBasicComponent,
    TableCompleteComponent,
  ],

  providers: [NgbdSortableHeader],
  bootstrap: [AppComponent]
})
export class AppModule { }
