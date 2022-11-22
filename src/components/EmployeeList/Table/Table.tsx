import { useEmployeeTable } from "../../../hooks/useEmployeeTable";
import { Employee } from "../../../models/models";
import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";
import styles from "./Table.module.scss";
import React from "react";

interface TableProps {
  data: Employee[];
  searchQuery: string;
}

const Table = ({ data, searchQuery }: TableProps) => {
  const [tableData, handleSort, handleFilter, isLoading] = useEmployeeTable(data);

  return (
    <>
      <table className={styles.table}>
        <TableHead
          handleSort={handleSort}
          handleFilter={handleFilter}
          searchQuery={searchQuery}
        />
        {!isLoading && <TableBody items={tableData} />}
      </table>
      {isLoading && <p className={styles.loading}>Loading...</p>}
    </>
  );
};

export default Table;
