import reportsData from "../data/informesFinancieros.json";
import type {
  FinancialQuarter,
  FinancialReportsData,
  FinancialYear,
} from "../types/Finanzas";

const data = reportsData as FinancialReportsData;

const isValidYear = (year: FinancialYear) =>
  Number.isFinite(year.year) && Array.isArray(year.quarters);

export const getFinancialYears = (): FinancialYear[] =>
  (Array.isArray(data.years) ? data.years : [])
    .filter(isValidYear)
    .map((year) => ({
      ...year,
      quarters: Array.isArray(year.quarters) ? year.quarters : [],
    }))
    .sort((a, b) => b.year - a.year);

export const getFinancialYear = (
  year: number | string,
): FinancialYear | undefined =>
  getFinancialYears().find((item) => String(item.year) === String(year));

export const getFinancialQuarters = (
  year: number | string,
): FinancialQuarter[] => getFinancialYear(year)?.quarters ?? [];

export const getFinancialCategories = (
  year: number | string,
  quarterId: string,
) =>
  getFinancialQuarters(year).find((quarter) => quarter.id === quarterId)
    ?.categories ?? [];
