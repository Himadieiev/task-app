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
`;
