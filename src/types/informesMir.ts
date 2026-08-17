export interface ArchivoMir {
  id: string;
  nombre: string;
  archivo: string;
  tipo?: string;
}

export interface AnioMir {
  anio: number;
  archivos: ArchivoMir[];
}

export interface DatosInformesMir {
  anios: AnioMir[];
}

export interface ArchivoMirConUrl extends ArchivoMir {
  url: string;
}

export interface AnioMirConUrls extends Omit<AnioMir, "archivos"> {
  archivos: ArchivoMirConUrl[];
}
