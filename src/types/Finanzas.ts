export interface FinancialFile {
  id: string;
  name: string;
  file: string;
  type?: string;
}

export interface FinancialCategory {
  id: string;
  name: string;
  folder: string;
  icon?: string;
  files: FinancialFile[];
}

export interface FinancialQuarter {
  id: string;
  name: string;
  folder: string;
  categories: FinancialCategory[];
}

export interface FinancialYear {
  year: number;
  quarters: FinancialQuarter[];
}

export interface FinancialReportsData {
  years: FinancialYear[];
}
