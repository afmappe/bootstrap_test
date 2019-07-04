export class Pagination {

    constructor(
        public orderField: string,
        public orderType?: string,
        public pageIndex?: number,
        public pageSize?: number
    ) { }
}