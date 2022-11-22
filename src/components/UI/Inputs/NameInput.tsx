import React, { Dispatch, SetStateAction } from "react";

interface NameInputProps {
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  disabled?: boolean;
  required?: boolean;
}

const NameInput = ({ onChange, required, value, disabled }: NameInputProps) => {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      required={required}
      id="name"
      name="name"
      type="text"
      placeholder="Имя Фамилия"
      value={value}
      disabled={disabled}
    />
  );
};

export default NameInput;
