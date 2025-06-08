import { Textarea } from '@/shared';

type RequirementsProps = {
  error?: string;
};

export const Requirements = ({ error }: RequirementsProps) => {
  return (
    <div className="space-y-1.5">
      <label className="mb-2 block text-sm font-medium" htmlFor="requirements">
        Requirements
      </label>
      <Textarea
        placeholder="List the required skills, experience, and qualifications..."
        name="requirements"
        id="requirements"
      />

      {error ? (
        <span id={'error-description'} className="block text-sm text-red-500">
          {error}
        </span>
      ) : null}
    </div>
  );
};
