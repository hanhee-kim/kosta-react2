import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function PaginationStrap() {
  return (
    <div>
      <Pagination size="lg">
        {/* 현재페이지가 맨 첫 페이지거나 맨 마지막 페이지일때 첫번째와 마지막 아이템에 disabled를 넣어준다 */}
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=4">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=5">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default PaginationStrap;
