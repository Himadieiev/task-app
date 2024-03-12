import styled from 'styled-components';

interface TasksWrapperProps {
  theme: object;
}

export const TasksWrapper = styled.main<TasksWrapperProps>`
  width: 100%;
  height: 100%;
  padding: 1rem;

  background-color: ${p => p.theme.colorBg2};
  border: 2px solid ${p => p.theme.borderColor2};
  border-radius: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .tasks {
    margin: 2rem 0;
  }

  > h1 {
    position: relative;
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;

      width: 3rem;
      height: 0.2rem;

      background-color: ${props => props.theme.colorPrimaryGreen};
      border-radius: 0.5rem;
    }
  }

  .create-task {
    height: 16rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-weight: 600;

    color: ${props => props.theme.colorGrey2};
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${props => props.theme.colorGrey5};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${props => props.theme.colorGrey5};
      color: ${props => props.theme.colorGrey0};
    }
  }
`;
