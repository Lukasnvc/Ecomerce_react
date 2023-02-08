import styled from "styled-components"
import { primaryButtonColor, primatyDarkButtonColor } from "../../consts/colors";



const Button = ({ children, ...rest }) => {
  return (
    <PrimaryButton {...rest}>
      {children}
    </PrimaryButton>
  );
}

export default Button;

const PrimaryButton =styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${primaryButtonColor};
  padding: 13px 30px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${primatyDarkButtonColor};
  }
  &:disabled{
    cursor: not-allowed;
    opacity: 0.8;
  }
`