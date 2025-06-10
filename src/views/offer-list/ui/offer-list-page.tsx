import Link from 'next/link';

import { getOffers } from '../api/get-offers';
import { OfferCard } from './offer-card';

type OfferListPageProps = {
  searchParams: { page?: string };
};

export const OfferListPage = async ({ searchParams }: OfferListPageProps) => {
  const page = (await searchParams.page) || 1;
  const offers = await getOffers(page);

  return (
    <>
      <div className="space-y-5">
        {offers.map((offer) => (
          <OfferCard offer={offer} key={offer.id} />
        ))}
      </div>
      <Link href="/offer/test">X</Link>
    </>
  );
};
