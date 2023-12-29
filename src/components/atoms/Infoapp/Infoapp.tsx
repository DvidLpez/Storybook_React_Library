import React from 'react';
import DOMPurify from 'dompurify';
import { StyledInfoapp } from './styled';

export type InfoappProps = {
  type?: string;
  text: string;
};

export const Infoapp: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InfoappProps
> = (props) => {
  const { type = 'info', text = '<b>Hola</b><p>Esto es un ejemplo</p>' } =
    props;

  return (
    <StyledInfoapp
      type={type}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
    />
  );
};

// export default React.forwardRef<HTMLDivElement, InfoappProps>(Infoapp);
