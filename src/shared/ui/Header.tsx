import LogoIcon from '~/logo.svg';

export const Header = () => (
  <header className=" border-b border-gray-200 ">
    <div className="flex items-center md:py-3.5 container py-5 md:h-20">
      <LogoIcon className="h-9 w-9" />
    </div>
  </header>
);
