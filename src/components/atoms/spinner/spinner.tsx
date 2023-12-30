import React from 'react';
import { StyledSpinner, StyledSpinnerBox } from './styled';

export type SpinnerProps = {
  text?: string;
  size?: 'small' | 'medium' | 'big';
  severity?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'black';
};

export const Spinner: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerProps> = ({ text, size, severity }) => {

  return (
    <>
    <StyledSpinnerBox>
      <StyledSpinner size={size} severity={severity} />  
      {text}
    </StyledSpinnerBox>
    </>
  );
};
