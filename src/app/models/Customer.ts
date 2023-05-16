export interface Customer {
  name: string;
  document: string;
  dateOfBirth: string;
  monthlyIncome: number;
  email: string;
  createDate: string;
  [key: string]: any; 
};

export interface CustomerTableColumn {
  name: string;
  prop: string;
  sort: boolean;
}
