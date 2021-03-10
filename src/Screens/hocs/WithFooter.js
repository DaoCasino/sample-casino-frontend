import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Helmet } from 'react-helmet';
import Modals from 'Components/Modals';
import styled from 'styled-components';
import seo from 'Config/Seo';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  /* header,
  main,
  footer {
    grid-row: auto;
  }

  footer {
    grid-row: 3;
  } */
`;

function WithFooter({ title, children, inner, description, ...props }) {
  if (inner === true) {
    title += ' – ' + seo.title;
  }
  return (
    <React.Fragment>
      <Helmet>
        <meta property='og:title' content={title} />
        <title>{title}</title>
        {description && (
          <meta property='og:description' content={description} />
        )}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <Wrapper {...props}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
      <Modals />
    </React.Fragment>
  );
}

WithFooter.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  inner: PropTypes.bool,
};

WithFooter.defaultProps = {
  inner: true,
};

export default WithFooter;
