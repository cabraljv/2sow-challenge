import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <img src="http://www.tosow.com.br/assets/images/logo.png" alt="" />
      <h2>{title}</h2>
    </Container>
  );
};

export default Header;
