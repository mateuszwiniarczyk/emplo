import { Card, CardContent, CardHeader, CardTitle } from '@/shared';

export const Tips = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold text-[#171721]">
          💡 Tips for a great job post
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-xs text-[#8083a3]">
          • Use clear, specific job titles
        </div>
        <div className="text-xs text-[#8083a3]">
          • Include salary range for better responses
        </div>
        <div className="text-xs text-[#8083a3]">
          • Highlight unique benefits and culture
        </div>
        <div className="text-xs text-[#8083a3]">
          • Add relevant tags for better visibility
        </div>
      </CardContent>
    </Card>
  );
};
