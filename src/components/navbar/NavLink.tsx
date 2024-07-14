'use client';

import { usePathname } from 'next/navigation';
import { Link, NavbarItem } from '@nextui-org/react';
import useMessageStore from '@/hooks/useMessageStore';

type Props = { href: string; label: string };

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  const { unreadCount } = useMessageStore(state => ({
    unreadCount: state.unreadCount,
  }));

  return (
    <NavbarItem as={Link} href={href} isActive={pathname === href}>
      <span>{label}</span>
      {href === '/messages' && <span className='ml-1'>({unreadCount})</span>}
    </NavbarItem>
  );
}
