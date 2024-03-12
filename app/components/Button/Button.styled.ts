import styled from 'styled-components';

export const BtnStyled = styled.button`
  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;

  color: ${props => props.theme.colorGrey2};
  cursor: pointer;
  transition: all 0.55s ease-in-out;

  i {
    margin-right: 1rem;

    font-size: 1.5rem;

    color: ${props => props.theme.colorGrey2};
    transition: all 0.55s ease-in-out;
  }

  &:hover {
    color: ${props => props.theme.colorGrey0};

    i {
      color: ${props => props.theme.colorGrey0};
    }
  }
`;
