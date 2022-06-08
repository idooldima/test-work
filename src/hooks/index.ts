import { chunk } from 'lodash';
import React from 'react';
export type PaginationType = {
  items: any[];
  perPage: number;
};

const usePagination = ({
  items,
  perPage,
}: PaginationType): [any[], number, (page: number) => void] => {
  const [curPage, changePage] = React.useState(1);
  const [paginationItems, setPaginationItems] = React.useState(chunk(items, perPage));
  const onChangePage = (page: number) => {
    changePage(page);
  };
  React.useEffect(() => {
    setPaginationItems(chunk(items, perPage));
    changePage(1);
  }, [items]);

  return [paginationItems[curPage] || [], curPage, onChangePage];
};

export default usePagination;
