import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import theme from '../../styles/themes';

export const StyledInfiniteScroll = styled(InfiniteScroll)`
  width: 100%;

  margin: 30px 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  header {
    display: flex;
    align-items: center;
    button.add-user {
      background: ${theme.primary};
      color: #fff;
      border: 0;
      height: 30px;
      margin-top: 20px;
      padding: 0 10px;
      border-radius: 3px;
      margin-left: 60px;
    }
    button.add-user:hover {
      opacity: 0.9;
    }
    div.search {
      display: flex;
      margin-top: 20px;
      input {
        padding: 0 10px;
        height: 30px;
        border: 1px solid #888;
      }
      button {
        background: ${theme.primary};
        color: #fff;
        font-size: 18px;
        border: 0;
        height: 30px;
        width: 30px;
        border-radius: 0 4px 4px 0;
      }
      button:hover {
        opacity: 0.9;
      }
    }
  }
  table {
    border-collapse: separate;
    @media (max-width: 500px) {
      width: 100%;
    }
    border-spacing: 0 5px;
    thead {
      th {
        text-align: start;
        text-transform: uppercase;
        font-size: 16px;
        padding-left: 8px;
      }
    }
  }
  p.modal-text {
    font-size: 16px;
  }
  div.modal-buttons {
    display: flex;
    justify-content: space-between;
    button {
      border: 0;
    }
    button:first-of-type {
      background: none;
      font-size: 14px;
      opacity: 0.9;
    }
    button:last-of-type {
      background: #d93636;
      color: #fff;
      border-radius: 4px;
      padding: 5px 10px;
    }
    button:last-of-type:hover {
      opacity: 0.9;
    }
  }
`;
