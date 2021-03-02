import styled from 'styled-components';

export const Container = styled.tr`
  margin: 5px 0;
  position: relative;
  transition: transform 0.3s;
  &&:hover {
    transform: translateX(20px);
  }
  td {
    padding: 8px 10px;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
  }
  td:first-of-type {
    border-left: 1px solid #aaa;
    border-radius: 5px 0 0 5px;
  }
  td:last-of-type {
    border-right: 1px solid #aaa;
    border-radius: 0 5px 5px 0;
    button {
      background: none;
      border: 0;
      font-size: 18px;
      color: #555;
    }
    button:first-of-type {
      margin-right: 5px;
    }
  }
`;
