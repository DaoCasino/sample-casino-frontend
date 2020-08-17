import React from 'react';

import { FooterLink } from '../Footer';

function FooterPlayLink(props) {
  const { isLogged, login } = props;

  function handleClick(e) {
    if (isLogged) {
      return true;
    }
    e.preventDefault();
    login();
  }

  return (
    <FooterLink to='/' onClick={handleClick}>
      Play
    </FooterLink>
  );
}

export default FooterPlayLink;
