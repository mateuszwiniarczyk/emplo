import { getOffers } from '../api/get-offers';
import { getOffersCount } from '../api/get-offers-count';
import { OfferCard } from './offer-card';
import { OfferListPagination } from './offer-list-pagination';

type OfferListPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export const OfferListPage = async ({ searchParams }: OfferListPageProps) => {
  const { page = '1' } = await searchParams;
  const pageNumber = parseFloat(page);
  const offersData = getOffers(pageNumber);
  const offersCountData = getOffersCount();
  const [offers, offersCount] = await Promise.all([
    offersData,
    offersCountData,
  ]);

  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="space-y-5">
        {offers.map((offer) => (
          <OfferCard offer={offer} key={offer.id} />
        ))}
      </div>

      <OfferListPagination pageNumber={pageNumber} offersCount={offersCount} />
    </div>
  );
};
