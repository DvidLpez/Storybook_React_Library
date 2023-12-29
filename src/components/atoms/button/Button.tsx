import React from 'react';
import { StyledButton } from './styled';

export interface ButtonProps {
  label?: string;
  severity?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'black';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  badge?: string;
  rounded?: boolean;
}

export const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ label, severity, size, disabled, badge, rounded, ...props }) => {
  return (
    <StyledButton
      size={size}
      disabled={disabled}
      severity={severity}
      rounded={rounded}
      label={label}
      badge={badge}
    />
  );
};
