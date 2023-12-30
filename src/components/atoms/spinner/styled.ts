import styled from 'styled-components';

interface StyledSpinnerProps {
  size?: 'small' | 'medium' | 'big';
  severity?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'black';
}

export const StyledSpinnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.primary};
`;

export const StyledSpinner = styled.span<StyledSpinnerProps>`
  display: flex;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;
  margin: 0 10px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          border: 5px solid transparent;
          width: 25px;
          height: 25px;
        `;
      case 'medium':
        return `
          border: 8px solid transparent;
          width: 50px;
          height: 50px;
        `;
      case 'big':
        return `
          border: 12px solid transparent;
          width: 100px;
          height: 100px;
        `;
      default:
        return `
          border: 7px solid transparent;
          width: 40px;
          height: 40px;
        `;
    }
  }};

  ${(props) => {
    switch (props.severity) {
      case 'primary':
        return `
          border-top-color: ${props.theme.primary};
          border-left-color: ${props.theme.primary};
          border-right-color: ${props.theme.primary};
          
        `;
      case 'secondary':
        return `
          border-top-color: ${props.theme.secondary};
          border-left-color: ${props.theme.secondary};
          border-right-color: ${props.theme.secondary};
        `;
      case 'success':
        return `
          border-top-color: ${props.theme.palette.green};
          border-left-color: ${props.theme.palette.green};
          border-right-color: ${props.theme.palette.green};
        `;
      case 'info':
        return `
          border-top-color: ${props.theme.palette.blue};
          border-left-color: ${props.theme.palette.blue};
          border-right-color: ${props.theme.palette.blue};
        `;
      case 'warning':
        return `
          border-top-color: ${props.theme.palette.orange};
          border-left-color: ${props.theme.palette.orange};
          border-right-color: ${props.theme.palette.orange};
        `;
      case 'danger':
        return `
          border-top-color: ${props.theme.palette.red};
          border-left-color: ${props.theme.palette.red};
          border-right-color: ${props.theme.palette.red};
        `;
      case 'black':
        return `
          border-top-color: ${props.theme.palette.black};
          border-left-color: ${props.theme.palette.black};
          border-right-color: ${props.theme.palette.black};
        `;

      default:
        return `
          border-top-color: ${props.theme.palette.grey};
          border-left-color: ${props.theme.palette.grey};
          border-right-color: ${props.theme.palette.grey};
        `;
    }
  }}
`;
