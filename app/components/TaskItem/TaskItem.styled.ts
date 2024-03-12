import styled from 'styled-components';

export const TaskItemWrapper = styled.div`
  padding: 1.2rem 1rem;
  height: 16rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: 1rem;
  background-color: ${props => props.theme.borderColor2};
  box-shadow: ${props => props.theme.shadow7};
  border: 2px solid ${props => props.theme.borderColor2};

  .date {
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${props => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      padding: 0.4rem 1rem;

      display: inline-block;

      background: ${props => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${props => props.theme.colorGreenDark} !important;
    }
  }
`;
