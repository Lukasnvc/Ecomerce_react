import styled from 'styled-components'
import { inputBgColor, inputColor } from '../../consts/colors';

const Input = (props) => {
  return (
    <StyledInput {...props} />
  );
}

export default Input;

const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  color: ${inputColor};
  background-color: ${inputBgColor};
  padding: 10px 14px;
  border: none;
  outline: none;
 
`