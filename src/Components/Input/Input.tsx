/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../../theme';

const container = css`
  border: none;
  border-bottom: 2px solid ${color.greyColor};
  font-size: 20px;
  width: 100%;
  padding-bottom: 10px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${color.greyColor};
    font-weight: 300;
  }
`;

interface IProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  name?: string;
  onChange: any;
  //   className?: string;
}

const Input: React.SFC<IProps> = ({
  placeholder = '',
  type = 'text',
  required = true,
  value,
  name = '',
  onChange,
  //   className,
}) => (
  <input
    css={container}
    // className={className}
    onChange={onChange}
    name={name}
    type={type}
    required={required}
    value={value}
    placeholder={placeholder}
  />
);

export default Input;
