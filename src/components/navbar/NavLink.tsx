'use client';

import { usePathname } from 'next/navigation';
import { Link, NavbarItem } from '@nextui-org/react';

type Props = { href: string; label: string };

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();

  return (
    <NavbarItem as={Link} href={href} isActive={pathname === href}>
      {label}
    </NavbarItem>
  );
}
