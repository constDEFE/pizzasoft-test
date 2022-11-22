import React, { useState, useEffect } from "react";
import { Employee as IEmployee } from "../models/models";
import { useAppSelector } from "../hooks/useAppSelector";
import { useParams } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";

const Employee = () => {
  const params = useParams();
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const { employees } = useAppSelector((state) => state.employees);

  useEffect(() => {
    if (params.employeeId) {
      setEmployee(employees.find((employee) => 
        employee.id === Number(params.employeeId)) ?? null
      );
    }
  }, [employees, params.employeeId]);

  return (
    <div className="container">
      {employee ? <EmployeeCard employee={employee} /> : <h1>Loading...</h1>}
    </div>
  );
};

export default Employee;
