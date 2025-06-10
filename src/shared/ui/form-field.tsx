import { Input } from '@/shared';

import { cn } from '../lib/utils';

interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  error?: string | null;
  label?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  placeholder,
  label,
  type = 'text',
  error,
  className = '',
  ...rest
}) => {
  const errorId = `${name}-error`;

  return (
    <div className={cn('space-y-1.5', className)}>
      {label && (
        <label htmlFor={name} className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <span id={errorId} className="block text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};
