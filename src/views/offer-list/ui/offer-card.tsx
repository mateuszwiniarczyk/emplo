import { BuildingIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge, Card, CardContent, getEmploymentTypeLabel } from '@/shared';

import { getOffers } from '../api/get-offers';

type Offer = Awaited<ReturnType<typeof getOffers>>[number];

type OfferCardProps = {
  offer: Offer;
};

export const OfferCard = ({ offer }: OfferCardProps) => (
  <Link key={offer.id} href={`/offer/${offer.id}`} className="block">
    <Card className="group cursor-pointer rounded-xl border border-gray-300 transition-all duration-200 hover:border-blue-400 hover:shadow-lg">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <div className="flex-shrink-0 self-center sm:self-start">
            <Image
              className="h-12 w-12 rounded-lg object-cover sm:h-14 sm:w-14"
              alt={`${offer.user.companyName} logo`}
              src={offer.user.imageUrl || ''}
              width={40}
              height={40}
            />
          </div>

          <div className="w-full min-w-0 flex-1">
            <div className="mb-3 flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <h3 className="text-lg leading-tight font-bold transition-colors group-hover:text-blue-400 sm:text-xl">
                {offer.title}
              </h3>

              <div className="rounded-md bg-blue-400 px-3 py-1 text-sm font-semibold text-white">
                {offer.minSalary} - {offer.maxSalary} / hour
              </div>
            </div>

            <div className="mb-3 flex flex-col gap-2 text-[#8083a3] sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-1">
                <BuildingIcon className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{offer.user.companyName}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{offer.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">
                  {getEmploymentTypeLabel(offer.employmentType)}
                </span>
              </div>
            </div>

            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#8083a3] sm:text-base">
              {offer.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {offer.tags.map((tag: string, index: number) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-gray-300 bg-[#f5f5fa] px-2 py-1 text-xs transition-colors hover:border-blue-400 hover:bg-blue-400 hover:text-white sm:px-3 sm:text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
);
