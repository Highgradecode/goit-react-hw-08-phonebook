import styled from '@emotion/styled';

export const UserMenuStyle = styled.div`
  display: flex;
  justify-content: space-between;

  .user-logut {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .user-menu-link {
    padding: 8px;
    &.active {
      border-bottom: 3px solid;
    }
  }
`;
