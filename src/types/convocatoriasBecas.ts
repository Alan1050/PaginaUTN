export interface ArchivoConvocatoriaBeca {
  id: string;
  idBeca: string;
  nombre: string;
  archivo: string;
  tipo?: string;
}

export interface DatosConvocatoriasBecas {
  convocatorias: ArchivoConvocatoriaBeca[];
}

export interface ConvocatoriaBecaConUrl extends ArchivoConvocatoriaBeca {
  url: string;
}
