import React from 'react';
import { registry } from './registry';

export const Icon = ({ icon, size, ...props }) => {
  const IconComponent = registry[icon];
  return <IconComponent size={size} {...props} />;
};
