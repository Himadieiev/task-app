'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useGlobalState } from '@/app/context/globalProvider';
import menu from '@/app/utils/menu';

import { SidebarWrapper } from './Sidebar.styled';

const Sidebar = () => {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarWrapper theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} alt="profile" src="/avatar.jpg" />
        </div>
        <h1>
          <span>Ruslan</span>
          <span>Him</span>
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
      <button></button>
    </SidebarWrapper>
  );
};

export default Sidebar;
