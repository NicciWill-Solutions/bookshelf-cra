import styled from '@emotion/styled/macro';
import { Dialog as ReachDialog } from '@reach/dialog';

export const base = 'white';
export const text = '#434449';
export const gray = '#E6E6E6'; //'#f1f2f7'
export const gray10 = '#f1f1f4';
export const gray20 = '#e4e5e9';
export const gray80 = '#6f7077';
export const indigo = '#3f51b5';
export const indigoDarken10 = '#364495';
export const indigoLighten80 = '#b7c1f8';
export const yellow = '#ffc107';
export const green = '#4caf50';
export const danger = '#ef5350';
export const orange = 'orange';

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: base,
  color: text,
  border: `1px solid ${gray10}`,
  cursor: 'pointer',
});

const Button = styled.button(props => {
  return {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
    background: props.variant === 'primary' ? indigo : gray,
    color: props.variant === 'primary' ? base : text,
  };
});

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Input = styled.input({
  borderRadius: '3px',
  border: `1px solid ${gray10}`,
  background: gray,
  padding: '8px, 12px',
});

export { Button, FormGroup, Input, CircleButton };
