import styled from 'styled-components';

export const GlobalStyledProviderWrapper = styled.div`
  padding: 2.5rem;
  height: 100%;

  display: flex;
  gap: 2.5rem;

  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;
