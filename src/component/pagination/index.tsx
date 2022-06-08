import { PaginationItem, Pagination as BootstrapPagination, PaginationLink, Col } from 'reactstrap';
import { isFunction, size } from 'lodash';
type Props = {
  curPage: number;
  items: any[];
  perPage: number;
  onChangePage: (page: number) => void;
};

export default function Pagination({ curPage, perPage, items, onChangePage }: Props) {
  const changePage = (page: number) => {
    if (isFunction(onChangePage)) {
      onChangePage(page);
    }
  };
  return (
    <Col>
      <BootstrapPagination aria-label="Page navigation example">
        <PaginationItem disabled={curPage <= 0}>
          <PaginationLink previous onClick={() => changePage(curPage - 1)} href="#" />
        </PaginationItem>

        {Array(Math.floor(size(items) / perPage))
          .fill(null)
          .map((_, index) => (
            <PaginationItem active={curPage === index + 1} key={index}>
              <PaginationLink href="#" onClick={() => onChangePage(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        <PaginationItem disabled={curPage >= size(items) - 1}>
          <PaginationLink next onClick={() => changePage(curPage + 1)} href="#" />
        </PaginationItem>
      </BootstrapPagination>
    </Col>
  );
}
