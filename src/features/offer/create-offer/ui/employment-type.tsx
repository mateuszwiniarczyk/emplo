import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared';

type EmploymentTypeProps = {
  error?: string;
  handleEmploymentType: (type: string) => void;
};

export const EmploymentType = ({
  error,
  handleEmploymentType,
}: EmploymentTypeProps) => {
  return (
    <div className="space-y-1.5">
      <label className="mb-2 block text-sm font-medium">Employment Type</label>

      <Select onValueChange={handleEmploymentType}>
        <SelectTrigger
          className="w-full"
          id="employmentType"
          name="employmentType"
        >
          <SelectValue placeholder="Select job type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full-time">Full-time</SelectItem>
          <SelectItem value="part-time">Part-time</SelectItem>
          <SelectItem value="contract">Contract</SelectItem>
          <SelectItem value="freelance">Freelance</SelectItem>
          <SelectItem value="internship">Internship</SelectItem>
        </SelectContent>
      </Select>

      {error ? (
        <span id={'error-description'} className="block text-sm text-red-500">
          {error}
        </span>
      ) : null}
    </div>
  );
};
