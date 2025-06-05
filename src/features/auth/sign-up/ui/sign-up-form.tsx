import { Button, Input } from '@/shared';

export const SignUpForm = () => {
  return (
    <form className="space-y-4">
      <Input
        className="rounded-lg border border-[#e4e6e899] px-5 py-[18px]"
        defaultValue="Catherine Shaw"
      />

      <Input
        className="rounded-lg border border-[#e4e6e899] px-5 py-[18px]"
        defaultValue="catherine.shaw@gmail.com"
      />

      <Input
        className="rounded-lg border border-[#e4e6e899] px-5 py-[18px]"
        placeholder="Phone number"
      />

      <Input
        className="rounded-lg border border-[#e4e6e899] px-5 py-[18px]"
        placeholder="Password"
        type="password"
      />

      <Input
        className="mb-8 rounded-lg border border-[#e4e6e899] px-5 py-[18px]"
        placeholder="Confirm password"
        type="password"
      />

      <Button className="w-full" size="lg">
        Continue
      </Button>
    </form>
  );
};
