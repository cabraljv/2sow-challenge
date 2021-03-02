import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const Container = styled.div<Props>`
  display: ${(p) => (p.open ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  align-items: center;
  justify-content: center;
  main {
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    header {
      display: flex;
      margin-bottom: 10px;
      button {
        margin-left: auto;
        background: none;
        border: 0;
      }
    }
  }
`;
