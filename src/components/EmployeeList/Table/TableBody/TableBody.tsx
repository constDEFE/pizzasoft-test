import React from "react";
import { Employee } from "../../../../models/models";
import TableItem from "../TableItem/TableItem";

interface TableBodyProps {
  items: Employee[];
}

const TableBody = ({ items }: TableBodyProps) => {
  return (
    <tbody>
      {items.map((employee, i) => (
        <TableItem key={employee.id} index={i} employee={employee} />
      ))}
    </tbody>
  );
};

export default TableBody;
