'use client';

import { useActionState, useState } from 'react';
import { toast } from 'sonner';

import { Card, CardContent, CardHeader, CardTitle, FormField } from '@/shared';

import { createOffer } from '../api/create-offer';
import { useTags } from '../model/use-tags';
import { Actions } from './actions';
import { Benefits } from './benefits';
import { Description } from './description';
import { EmploymentType } from './employment-type';
import { Requirements } from './requirements';
import { Tags } from './tags';
import { Tips } from './tips';

export const CreateOfferForm = () => {
  const [employmentType, setEmploymentType] = useState('');

  const { handleAddTag, handleRemoveTag, handleSetTag, newTag, tags } =
    useTags();

  const createOfferHandler = async (_: unknown, formData: FormData) => {
    const data = {
      title: formData.get('title') as string,
      location: formData.get('location') as string,
      minSalary: formData.get('minSalary') as string,
      maxSalary: formData.get('maxSalary') as string,
      description: formData.get('description') as string,
      requirements: formData.get('requirements') as string,
      benefits: formData.get('benefits') as string,
      tags,
      employmentType,
    };

    const result = await createOffer(data);

    toast(result.message);

    return result;
  };

  const [state, formAction, isPending] = useActionState(
    createOfferHandler,
    null,
  );

  const { data, error } = state || {};

  const handleEmploymentType = (type: string) => {
    setEmploymentType(type);
  };

  return (
    <form action={formAction}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#171721]">
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                name="title"
                placeholder="e.g. Senior Frontend Developer"
                label="Job Title"
                type="text"
                error={error?.title?.[0]}
                defaultValue={(data?.payload?.title || '') as string}
              />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <EmploymentType
                  error={error?.employmentType?.[0]}
                  handleEmploymentType={handleEmploymentType}
                />

                <FormField
                  name="location"
                  placeholder="e.g. New York, NY"
                  label="Location"
                  type="text"
                  error={error?.location?.[0]}
                  defaultValue={(data?.payload?.location || '') as string}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#171721]">
                Salary Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  name="minSalary"
                  placeholder="e.g. 50"
                  label="Minimum Salary ($/hour)"
                  type="number"
                  min="0"
                  error={error?.minSalary?.[0]}
                  defaultValue={(data?.payload?.minSalary || '0') as string}
                />

                <FormField
                  name="maxSalary"
                  placeholder="e.g. 80"
                  label="Maximum Salary ($/hour)"
                  type="number"
                  min="0"
                  error={error?.maxSalary?.[0]}
                  defaultValue={(data?.payload?.maxSalary || '0') as string}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                Job Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Description error={error?.description?.[0]} />

              <Requirements error={error?.requirements?.[0]} />

              <Benefits error={error?.benefits?.[0]} />
            </CardContent>
          </Card>

          <Tags
            handleAddTag={handleAddTag}
            handleRemoveTag={handleRemoveTag}
            handleSetTag={handleSetTag}
            tags={tags}
            newTag={newTag}
            error={error?.tags?.[0]}
          />
        </div>

        <div className="space-y-6">
          <Actions isPending={isPending} />
          <Tips />
        </div>
      </div>
    </form>
  );
};
