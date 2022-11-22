import { formatRole, getStatus } from "../../../../utils/functions";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../../../models/models";
import styles from "./TableItem.module.scss";
import React from "react";

interface TableItemProps {
  employee: Employee;
  index: number;
}

const TableItem = ({ employee, index }: TableItemProps) => {
  const navigate = useNavigate();

  const handleNavigate = (): void => navigate(`/employee/${employee.id}`);

  return (
    <tr className={index % 2 !== 0 ? styles.row : styles.accentRow} onClick={handleNavigate}>
      <td className={styles.item}>
        <p className={styles.text}>{employee.name}</p>
      </td>
      <td className={styles.item}>
        <p className={styles.text}>{formatRole(employee.role)}</p>
      </td>
      <td className={styles.item}>
        <p className={styles.text}>{employee.birthday}</p>
      </td>
      <td className={styles.item}>
        <label className={styles.text} htmlFor="status">
          {getStatus(employee.isArchive)}
        </label>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="status"
          id="status"
          disabled
          checked={employee.isArchive}
        />
      </td>
    </tr>
  );
};

export default TableItem;
