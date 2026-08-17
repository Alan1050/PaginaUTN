import { URL_ASSETS_FINANZAS } from "../config/constants";
import type { FinancialFile } from "../types/Finanzas";

const UNKNOWN_FILE_TYPE = "archivo";

const encodePathSegment = (segment: number | string) =>
  encodeURIComponent(String(segment));

export const buildFinanceAssetUrl = (
  year: number | string,
  quarterFolder: string,
  categoryFolder: string,
  fileName: string,
) => {
  const baseUrl = URL_ASSETS_FINANZAS.replace(/\/+$/, "");
  const path = [
    year,
    quarterFolder,
    categoryFolder,
    fileName,
  ]
    .map(encodePathSegment)
    .join("/");

  return `${baseUrl}/${path}`;
};

export const getFinancialFileType = (file: FinancialFile) => {
  const declaredType = file.type?.trim().toLowerCase();

  if (declaredType) {
    return declaredType;
  }

  const extension = file.file.split(".").pop()?.trim().toLowerCase();

  return extension && extension !== file.file.toLowerCase()
    ? extension
    : UNKNOWN_FILE_TYPE;
};
