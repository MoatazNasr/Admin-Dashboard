import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: `${props.type}`,
  value: `${props.value}`,
  name: `${props.name}`,
  id: `${props.id}`,
}))`
  display: block;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  margin: 0 0 1.5rem 0;
  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
font-weight: 700;
`;

const InputLabel = ({ name, id, type,labelText , labelFor}) => {
  const [value, setValue] = useState('edit');

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
    <Label htmlFor={labelFor} >{labelText}</Label>
    <Input name={name} id={id} type={type} value={value} onChange={onChange} />
    </>
  );
};

export default InputLabel;
