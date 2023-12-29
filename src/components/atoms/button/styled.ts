import styled from 'styled-components';

export interface StyledProps {
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
  rounded?: boolean;
  label?: string;
  badge?: string;
}

export const StyledButton = styled.button<StyledProps>`
  border: 0px;
  border-radius: ${(pr) => (pr.rounded ? '50px' : '5px')};
  color: ${(props) => props.theme.palette.white};
  position: relative;

  &:before {
    content: '${(props) => props.label}';
  }

  &:hover {
    cursor: ${(pr) => (pr.disabled ? 'not-allowed' : 'pointer')};
  }

  ${(props) => {
    if (props.badge) {
      return `
      &:after {
        border-radius: 8px;
        background: ${props.theme.palette.white};
        border: 1px solid ${props.theme.palette.red};
        box-shadow: 0 1px 3px rgba(0,0,0,0.4);
        color: ${props.theme.palette.red};
        content: "${props.badge}";
        display: inline-block;
        font-size: 0.8em;
        line-height: 13px;
        margin: 0 2px 0px 10px;
        padding: 3px;
        text-align: center;
        vertical-align: middle; 
      }
      `;
    }
  }};

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          font-size: 0.9em;
          padding: 4px 10px;
        `;
      case 'medium':
        return `
          font-size: 1em;
          padding: 4px 10px;
        `;
      case 'large':
        return `
          font-size: 1.2em;
          padding: 5px 10px;
        `;
      default:
        return `
          font-size: 1em;
          padding: 4px 10px;
        `;
    }
  }};

  ${(props) => {
    switch (props.severity) {
      case 'primary':
        return `
          background-color: ${props.theme.primary};
          &:hover {
              background-color: ${props.theme.dark_primary};
          }
          &:disabled {
              background-color: ${props.theme.light_primary};
          }
        `;
      case 'secondary':
        return `
          background-color: ${props.theme.palette.grey};
          &:hover {
              background-color: ${props.theme.palette.darrk_grey};
          }
          &:disabled {
              background-color: ${props.theme.palette.light_grey};
          }
        `;
      case 'success':
        return `
          background-color: ${props.theme.palette.green};
          &:hover {
              background-color: ${props.theme.palette.dark_green};
          }
          &:disabled {
              background-color: ${props.theme.palette.light_green};
          }
        `;
      case 'info':
        return `
          background-color: ${props.theme.palette.blue};
          &:hover {
              background-color: ${props.theme.palette.dark_blue};
          }
          &:disabled {
              background-color: ${props.theme.palette.light_blue};
          }
        `;
      case 'warning':
        return `
          background-color: ${props.theme.palette.orange};
          &:hover {
              background-color: ${props.theme.palette.dark_orange};
          }
          &:disabled {
              background-color: ${props.theme.palette.light_orange};
          }
        `;
      case 'danger':
        return `
          background-color: ${props.theme.palette.red};
          &:hover {
              background-color: ${props.theme.palette.dark_red};
          }
          &:disabled {
              background-color: ${props.theme.palette.light_red};
          }
        `;
      case 'black':
        return `
          background-color: ${props.theme.palette.black};
          &:hover {
              background-color: ${props.theme.palette.dark_black};
          }
          &:disabled {
              background-color: ${props.theme.palette.light_black};
          }
        `;

      default:
        return `
          background-color: ${props.theme.primary};
          &:hover {
              background-color: ${props.theme.dark_primary};
          }
          &:disabled {
              background-color: ${props.theme.light_primary};
          }
        `;
    }
  }}
`;
