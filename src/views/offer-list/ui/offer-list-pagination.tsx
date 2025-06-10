import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';

import { OFFERS_PAGE_SIZE } from '../model/constants';

type OfferListPaginationProps = {
  pageNumber: number;
  offersCount: number;
};

export const OfferListPagination = async ({
  pageNumber,
  offersCount,
}: OfferListPaginationProps) => {
  const totalPages = Math.ceil(offersCount / OFFERS_PAGE_SIZE);
  const previousPage = pageNumber - 1;
  const nextPage = pageNumber + 1;
  return (
    <Pagination>
      <PaginationContent>
        {previousPage > 0 ? (
          <PaginationItem>
            <PaginationPrevious href={`/?page=${previousPage}`} />
          </PaginationItem>
        ) : null}
        <PaginationItem>
          <PaginationLink href="#">{pageNumber}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {nextPage < totalPages ? (
          <PaginationItem>
            <PaginationNext href={`/?page=${nextPage}`} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
