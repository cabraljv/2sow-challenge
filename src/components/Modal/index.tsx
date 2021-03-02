import React from 'react';
import { MdClose } from 'react-icons/md';
import { Container } from './styles';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  return (
    <Container open={open}>
      <main>
        <header>
          <button type="button" onClick={onClose}>
            <MdClose />
          </button>
        </header>
        {children}
      </main>
    </Container>
  );
};

export default Modal;
