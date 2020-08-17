import React from 'react';

export default function ErrorSnackbar(props) {
  const { error } = props;
  console.error(error);
  return <React.Fragment />;
}
