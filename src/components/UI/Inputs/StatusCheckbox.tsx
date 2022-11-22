import React, { Dispatch, SetStateAction } from "react";
import { getStatus } from "../../../utils/functions";

interface StatusCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

const StatusCheckbox = ({ checked,  disabled, onChange, className }: StatusCheckboxProps) => {
  return (
    <>
      <p className={checked ? "status-archived" : "status-active"}>
        {getStatus(checked)}
      </p>
      <input
        className={className}
        onChange={() => onChange(!checked)}
        id="status"
        type="checkbox"
        checked={checked}
        disabled={disabled}
      />
    </>
  );
};

export default StatusCheckbox;
