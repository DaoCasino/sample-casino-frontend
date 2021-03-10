import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: inherit;
  text-decoration: none;
`;

const DefaultDiv = styled.div``;

function WalletLink({
  href,
  isShowModal,
  children,
  showModal,
  asLink,
  asDiv,
  isLogged,
  ...props
}) {
  const Div = asDiv ? asDiv : DefaultDiv;
  const Link = asLink ? asLink : A;

  if (isLogged) {
    return (
      <Div {...props} style={{ cursor: 'auto' }}>
        {children}
      </Div>
    );
  }

  if (isShowModal) {
    return (
      <Link {...props} href={href}>
        {children}
      </Link>
    );
  }

  function handleClick() {
    // TODO: fix it
    window.modalWalletLink = href;
    showModal();
  }

  return (
    <Div {...props} onClick={handleClick}>
      {children}
    </Div>
  );
}

WalletLink.defaultProps = {
  href: window.walletAuthURL.toString(),
};

export default WalletLink;
