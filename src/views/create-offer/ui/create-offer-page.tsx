'use client';
import { ArrowLeftIcon } from 'lucide-react';

import { CreateOfferForm } from '@/features/offer/create-offer';
import { Button } from '@/shared';

export const CreateOfferPage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="relative flex w-full flex-col bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-8">
          <div className="mb-8 flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeftIcon className="h-5 w-5 text-[#8083a3]" />
            </Button>
            <h1 className="text-2xl font-bold text-[#171721]">
              Create Job Offer
            </h1>
          </div>

          <CreateOfferForm />
        </div>
      </div>
    </div>
  );
};
