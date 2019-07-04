import { HttpClient } from '@angular/common/http';
import {
  Directive,
  DoCheck,
  ElementRef,
  Input,
  KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { BasicSearch } from './BasicSearch';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements OnInit, DoCheck {

  order: string;
  pageIndex: number;
  pageSize: number;
  // search: BasicSearch;
  differ: KeyValueDiffer<string, any>;;

  @Input('search') search: BasicSearch;

  constructor(
    private el: ElementRef,
    private differs: KeyValueDiffers,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(
        map(params => {
          this.search.orderField = params.order;
          this.search.pageIndex = parseInt(params.pageIndex);
          this.search.pageSize = parseInt(params.pageSize);
          this.differ = this.differs.find(this.search).create();
        })
      ).subscribe();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.search);

    if (changes) {
      this.customerChanged(changes);
      this.onUpdate();
    }
  }

  customerChanged(changes: KeyValueChanges<string, any>) {
    console.log('changes');
    /* If you want to see details then use
      changes.forEachRemovedItem((record) => ...);
      changes.forEachAddedItem((record) => ...);
      changes.forEachChangedItem((record) => ...);
    */
  }

  public onUpdate(): void {
    this.router.navigate([], {
      queryParams:
      {
        order: this.search.orderField,
        pageIndex: this.search.pageIndex,
        pageSize: this.search.pageSize
      },
      queryParamsHandling: 'merge'
    });
  }
}