import { Component, OnInit } from '@angular/core';

import { BasicSearch } from './BasicSearch';

export class TableHeader {
  text: string;
}

export const HEADER: TableHeader[] = [
  { text: 'Column-1' },
  { text: 'Column-2' },
  { text: 'Column-3' },
  { text: 'Column-4' },
];

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {

  count: number;
  color: string;
  search: BasicSearch;

  header: TableHeader[] = HEADER;

  constructor() { }

  ngOnInit() {
    this.count = 0;
    this.search = new BasicSearch('test');
  }

  onclick(): void {
    this.count += 1;
    this.search.orderField = `ColumnId-${this.count}`;
  }
}
