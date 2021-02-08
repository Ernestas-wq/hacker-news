import React from 'react';

export const Button = ({ onClick, className, type = 'button', children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);
export const ButtonInLine = ({ onClick, type = 'button', children }) => (
  <button type={type} className="button-inline" onClick={onClick}>
    {children}
  </button>
);
