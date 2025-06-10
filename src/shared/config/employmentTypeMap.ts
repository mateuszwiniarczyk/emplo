export const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  contract: 'Contract',
  freelance: 'Freelance',
  internship: 'Internship',
};

export type EmploymentTypeKey = keyof typeof EMPLOYMENT_TYPE_MAP;

export function getEmploymentTypeLabel(type: string): string {
  return EMPLOYMENT_TYPE_MAP[type] || 'Other';
}
