import { Textarea } from '@/shared';

type BenefitsProps = {
  error?: string;
};

export const Benefits = ({ error }: BenefitsProps) => {
  return (
    <div className="space-y-1.5">
      <label className="mb-2 block text-sm font-medium" htmlFor="benefits">
        Benefits
      </label>
      <Textarea
        placeholder="Describe the benefits, perks, and what makes your company great..."
        name="benefits"
        id="benefits"
      />

      {error ? (
        <span id={'error-description'} className="block text-sm text-red-500">
          {error}
        </span>
      ) : null}
    </div>
  );
};
