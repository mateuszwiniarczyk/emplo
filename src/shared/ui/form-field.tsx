import { Input } from '@/shared';

import { cn } from '../lib/utils';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  placeholder,
  type = 'text',
  error,
  className = '',
  ...rest
}) => {
  const errorId = `${name}-error`;
  return (
    <div className={cn('space-y-1.5', className)}>
      <Input
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
