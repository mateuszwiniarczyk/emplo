'use client';

import { signOut } from 'next-auth/react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared';

type UserDropdownProps = {
  avatar?: string;
  companyName?: string;
};

export const UserDropdown = ({ avatar, companyName }: UserDropdownProps) => {
  const signOutHandler = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="ml-4 h-10 w-10 rounded-lg">
          <AvatarImage src={avatar} alt={companyName} />
          <AvatarFallback className="rounded-lg">A</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuItem disabled>Profile</DropdownMenuItem>
        <DropdownMenuItem disabled>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={signOutHandler}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
