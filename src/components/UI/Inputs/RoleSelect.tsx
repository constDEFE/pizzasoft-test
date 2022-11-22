import React, { Dispatch, SetStateAction } from "react";

interface RoleSelectProps {
  className?: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  disabled?: boolean;
}

const RoleSelect = ({ className, onChange,  value, disabled }: RoleSelectProps) => {
  return (
    <select
      className={className}
      onChange={(event) => onChange(event.target.value)}
      required
      id="role"
      value={value}
      disabled={disabled}
    >
      <option value="driver">Водитель</option>
      <option value="waiter">Официант</option>
      <option value="cook">Повар</option>
    </select>
  );
};

export default RoleSelect;
