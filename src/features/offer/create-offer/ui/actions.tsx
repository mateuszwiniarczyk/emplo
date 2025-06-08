import { Button, Card, CardContent, CardHeader, CardTitle } from '@/shared';

type ActionsProps = {
  isPending: boolean;
};

export const Actions = ({ isPending }: ActionsProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg font-bold text-[#171721]">
        Actions
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#3e7eff] py-3 text-white hover:bg-[#2d5dd9]"
      >
        Publish Job Offer
      </Button>
    </CardContent>
  </Card>
);
