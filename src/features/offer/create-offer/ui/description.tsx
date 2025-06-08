import { Textarea } from '@/shared';

type DescriptionProps = {
  error?: string;
};

export const Description = ({ error }: DescriptionProps) => {
  return (
    <div className="space-y-1.5">
      <label className="mb-2 block text-sm font-medium" htmlFor="description">
        Description
      </label>
      <Textarea
        placeholder="Describe the role, responsibilities, and what makes this position exciting..."
        name="description"
        id="description"
      />
      {error ? (
        <span id={'error-description'} className="block text-sm text-red-500">
          {error}
        </span>
      ) : null}
    </div>
  );
};
