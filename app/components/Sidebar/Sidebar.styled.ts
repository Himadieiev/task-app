import styled from 'styled-components';

interface SidebarWrapperProps {
  theme: object;
  open: boolean;
}

export const SidebarWrapper = styled.nav<SidebarWrapperProps>`
  position: relative;

  width: ${p => p.theme.sidebarWidth};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${p => p.theme.colorGrey3};
  background-color: ${p => p.theme.colorBg2};
  border: 2px solid ${p => p.theme.borderColor2};
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 100;

    height: calc(100vh - 2rem);

    transform: ${p => (p.open ? 'translateX(-107%)' : 'translateX(0)')};
    transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);

    .toggle-nav {
      display: block !important;
    }
  }

  .toggle-nav {
    position: absolute;
    right: -69px;
    top: 1.8rem;

    padding: 0.8rem 0.9rem;

    display: none;

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: ${p => p.theme.colorBg2};
    border-right: 2px solid ${p => p.theme.borderColor2};
    border-top: 2px solid ${p => p.theme.borderColor2};
    border-bottom: 2px solid ${p => p.theme.borderColor2};
  }

  .user-btn {
    .cl-rootBox {
      width: 100%;
      height: 100%;

      .cl-userButtonBox {
        width: 100%;
        height: 100%;

        .cl-userButtonTrigger {
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
  }

  .profile {
    position: relative;

    margin: 1.5rem;
    padding: 1rem 0.8rem;

    display: flex;
    align-items: center;

    font-weight: 500;

    color: ${p => p.theme.colorGrey0};
    border-radius: 1rem;
    cursor: pointer;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;

      width: 100%;
      height: 100%;

      opacity: 0.2;
      border-radius: 1rem;
      border: 2px solid ${p => p.theme.borderColor2};
      backdrop-filter: blur(10px);
      background-color: ${p => p.theme.colorBg3};
      transition: all 0.5s linear;
    }

    h1 {
      display: flex;
      flex-direction: column;

      font-size: 1.2rem;
      line-height: 1.4rem;
    }

    .image,
    h1 {
      position: relative;
      z-index: 1;
    }

    .image {
      width: 70px;
      height: 70px;

      flex-shrink: 0;
      display: inline-block;

      overflow: hidden;
      border-radius: 100%;
      transition: all 0.5s ease;

      img {
        border-radius: 100%;
        transition: all 0.5s ease;
      }
    }

    > h1 {
      margin-left: 0.8rem;

      /* font-size: clamp(1.2rem, 4vw, 1.4rem); */
      font-size: 16px;
      line-height: 100%;
    }

    &:hover {
      .profile-overlay {
        opacity: 1;
        border: 2px solid ${p => p.theme.borderColor2};
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  .nav-item {
    position: relative;

    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;

    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;

    cursor: pointer;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      z-index: 1;

      width: 0;
      height: 100%;

      background-color: ${p => p.theme.activeNavLinkHover};
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;

      width: 0%;
      height: 100%;

      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      background-color: ${p => p.theme.colorGreenDark};
    }

    a {
      z-index: 2;

      font-weight: 500;
      line-height: 0;

      transition: all 0.3s ease-in-out;
    }

    i {
      display: flex;
      align-items: center;
      color: ${props => props.theme.colorIcons};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: ${props => props.theme.activeNavLink};

    i,
    a {
      color: ${props => props.theme.colorIcons2};
    }
  }

  .active::before {
    width: 0.3rem;
  }

  > button {
    margin: 1.5rem;
  }
`;
