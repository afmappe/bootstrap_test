import { Pagination } from './Pagination';

export class BasicSearch extends Pagination {
    search?: string;
    constructor(
        orderField: string,
        orderType?: string,
        pageIndex?: number,
        pageSize?: number,
        search?: string
    ) {
        super(orderField);
        this.orderType = orderType ? orderType : 'asc';
        this.pageIndex = pageIndex ? pageIndex : 0;
        this.pageSize = pageSize ? pageSize : 20;
        this.search = search ? search : '';
    }
}