'use client';

import { UserButton, useClerk, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useGlobalState } from '@/app/context/globalProvider';
import menu from '@/app/utils/menu';
import { arrowLeft, bars, logout } from '@/app/utils/Icons';

import { SidebarWrapper } from './Sidebar.styled';
import Button from '../Button/Button';

const Sidebar = () => {
  const { theme, collapsed, collapseMenu } = useGlobalState();

  const { signOut } = useClerk();
  const { user } = useUser();
  const { firstName, lastName, imageUrl } = user || { firstName: '', lastName: '', imageUrl: '' };

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarWrapper theme={theme} open={collapsed}>
      <button className="toggle-nav" onClick={collapseMenu}>
        {collapsed ? bars : arrowLeft}
      </button>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} alt="profile" src={imageUrl} />
        </div>
        <div className="user-btn absolute z-20 top-0 w-full h-full">
          <UserButton />
        </div>
        <h1 className="capitalize">
          {firstName} {lastName}
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map(i => {
          return (
            <li
              className={`nav-item ${pathname === i.link ? 'active' : ''}`}
              onClick={() => handleClick(i.link)}
              key={i.id}
            >
              {i.icon}
              <Link href={i.link}>{i.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="sign-out relative m-6">
        <Button
          name={'Sign Out'}
          type={'submit'}
          padding={'0.4rem 0.8rem'}
          borderRad={'0.8rem'}
          fw={'500'}
          fs={'1.2rem'}
          icon={logout}
          click={() => {
            signOut(() => router.push('/signin'));
          }}
        />
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
