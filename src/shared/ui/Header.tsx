import LogoIcon from '~/logo.svg';

export const Header = () => (
  <header className="border-b border-gray-200">
    <div className="container flex items-center py-5 md:h-20 md:py-3.5">
      <LogoIcon className="h-9 w-9" />
    </div>
  </header>
);
