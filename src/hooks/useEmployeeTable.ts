import { useState, useEffect } from "react";
import { Employee, Filters } from "../models/models";

type UseEmployeeTableReturnType = [
  any[],
  (sortField: string, order: "asc" | "desc") => void,
  (filters: Filters) => void,
  boolean
];

export const useEmployeeTable = (data: Employee[]): UseEmployeeTableReturnType => {
  const [tableData, setTableData] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const sortByName = (arr: Employee[], order: "asc" | "desc"): Employee[] => {
    const newArr = [...arr];

    return newArr.sort(
      (a, b) => a.name.localeCompare(b.name) * (order === "desc" ? 1 : -1)
    );
  };

  const sortByDate = (arr: Employee[], order: "asc" | "desc"): Employee[] => {
    const newArr = [...arr];

    return newArr.sort((a, b) => {
      const dateA = Date.parse(a.birthday.split(".").reverse().join("/"));
      const dateB = Date.parse(b.birthday.split(".").reverse().join("/"));

      return (dateB - dateA) * (order === "desc" ? 1 : -1);
    });
  };

  const filterByQuery = (arr: Employee[], query: string): Employee[] => {
    const newArr = [...arr];

    return newArr.filter((employee) =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filterByRole = (arr: Employee[], role: string): Employee[] => {
    const newArr = [...arr];

    return newArr.filter((employee) => employee.role === role);
  };

  const filterArchived = (arr: Employee[]): Employee[] => {
    const newArr = [...arr];

    return newArr.filter((employee) => employee.isArchive === true);
  };

  const handleFilter = (filters: Filters): void => {
    let filteredArray = [...data];

    if (filters.query) filteredArray = filterByQuery(filteredArray, filters.query);
    if (filters.role) filteredArray = filterByRole(filteredArray, filters.role);
    if (filters.archived) filteredArray = filterArchived(filteredArray);

    setTableData(sortByName(filteredArray, "desc"));
  };

  const handleSort = (sortField: string, order: "asc" | "desc"): void => {
    switch (sortField) {
      case "name":
        setTableData(sortByName(tableData, order));
        break;
      case "birthday":
        setTableData(sortByDate(tableData, order));
        break;
    }
  };

  useEffect(() => {
    if (tableData.length !== 0) setIsLoading(false);
  }, [tableData]);

  useEffect(() => {
    setTableData(sortByName(data, "desc"));
  }, [data]);

  return [tableData, handleSort, handleFilter, isLoading];
};
