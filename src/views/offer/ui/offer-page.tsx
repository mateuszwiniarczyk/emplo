import {
  BookmarkIcon,
  BuildingIcon,
  CalendarIcon,
  ClockIcon,
  DollarSignIcon,
  MapPinIcon,
  ShareIcon,
} from 'lucide-react';
import Image from 'next/image';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  getEmploymentTypeLabel,
} from '@/shared';

import { getOffer } from '../api/get-offer';

type OfferPageProps = {
  params: Promise<{ id: string }>;
};

export const OfferPage = async ({ params }: OfferPageProps) => {
  const { id = '' } = await params;
  const offer = await getOffer(id);

  if (!offer) {
    return (
      <div>
        <h1>Offer does not exist</h1>
      </div>
    );
  }

  const {
    benefits,
    createdAt,
    description,
    employmentType,
    location,
    maxSalary,
    minSalary,
    requirements,
    tags,
    title,
    user,
  } = offer;

  const formattedDate = createdAt
    ? new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(createdAt))
    : '';

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Image
                src={user.imageUrl || ''}
                alt={`${user.companyName} logo`}
                className="h-16 w-16 rounded-lg object-cover"
                width={40}
                height={40}
              />
              <div className="flex-1">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h1 className="mb-2 text-2xl font-bold">{title}</h1>
                    <div className="mb-3 flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <BuildingIcon className="h-4 w-4" />
                        <span className="text-sm">{user.companyName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        <span className="text-sm">{location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        <span className="text-sm">
                          {getEmploymentTypeLabel(employmentType)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      disabled
                    >
                      <BookmarkIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      disabled
                    >
                      <ShareIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <DollarSignIcon className="h-4 w-4 text-blue-400" />
                    <span className="font-semibold">
                      {minSalary} - {maxSalary}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4 text-gray-600" />
                    <span>Posted {formattedDate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Job Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-gray-600">{description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-gray-600">{requirements}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Benefits & Perks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-gray-600">{benefits}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="self-start">
        <CardContent className="space-y-4 p-6">
          <div className="text-center">
            <div className="mb-1 text-2xl font-bold">
              ${minSalary} - ${maxSalary}
            </div>
            <div className="text-sm text-gray-600">Per hour</div>
          </div>

          <Button className="w-full" disabled>
            Apply Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
