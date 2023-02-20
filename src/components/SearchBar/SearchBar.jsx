import styled from "styled-components";
import { searchBgColor } from "../../consts/colors";
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = ({value, setValue}) => {
  return (
    <Wrapper>
      <Input placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
      <AiOutlineSearch/>
    </Wrapper>
  );
}

export default SearchBar;

const Input = styled.input`
  background-color: ${searchBgColor};
  border: none;
  outline: none;
  padding: 6px 40px;
  border-radius: 4px;
`

const Wrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 10px;
    top: 5px;
  }
`