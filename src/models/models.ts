export interface Employee {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}

export type Sort = "desc" | "asc";

export type Filters = {
  query?: string;
  role?: string;
  archived?: boolean;
};

export type DropdownOption = {
  label: string;
  value: any;
};