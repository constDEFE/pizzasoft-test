import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Filters } from "../../../../models/models";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import styles from "./TableHead.module.scss";

interface TableHeadProps {
  handleSort: (sortField: string, order: "asc" | "desc") => void;
  handleFilter: ({ role, archived }: Filters) => void;
  searchQuery: string;
}

const TableHead = ({ handleSort, handleFilter,  searchQuery }: TableHeadProps) => {
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [filters, setFilters] = useState<Filters>({});

  const handleSortChange = (field: string) => {
    const sortOrder = field === sortField && order === "asc" ? "desc" : "asc";

    setSortField(field);
    setOrder(sortOrder);
    handleSort(field, sortOrder);
  };

  const handleRoleSelect = (value: string): void =>
    setFilters({ ...filters, role: value });

  const handleStatusChange = (value: boolean): void =>
    setFilters({ ...filters, archived: value });

  const roles = [
    {
      label: "Водитель",
      value: "driver",
    },
    {
      label: "Повар",
      value: "cook",
    },
    {
      label: "Официант",
      value: "waiter",
    },
  ];

  useEffect(() => {
    setFilters({ ...filters, query: searchQuery });
  }, [searchQuery]);

  useEffect(() => {
    handleFilter(filters);
  }, [filters]);

  return (
    <thead>
      <tr className={styles.row}>
        <th onClick={() => handleSortChange("name")} className={styles.column}>
          <div className={styles.item}>
            <p className={styles.text}>Имя</p>
            {sortField === "name" && order === "asc" ? (
              <BsFillCaretUpFill />
            ) : (
              <BsFillCaretDownFill />
            )}
          </div>
        </th>
        <th className={styles.column}>
          <Dropdown
            onChange={handleRoleSelect}
            options={roles}
            label="Должность"
          />
        </th>
        <th
          onClick={() => handleSortChange("birthday")}
          className={styles.column}
        >
          <div className={styles.item}>
            <p className={styles.text}>Дата рождения</p>
            {sortField === "birthday" && order === "asc" ? (
              <BsFillCaretUpFill />
            ) : (
              <BsFillCaretDownFill />
            )}
          </div>
        </th>
        <th className={styles.column}>
          <div className={styles.item}>
            <label className={styles.label} htmlFor="status">
              В архиве
            </label>
            <input
              onChange={(event) => handleStatusChange(event.target.checked)}
              type="checkbox"
              name="status"
              id="status"
            />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
