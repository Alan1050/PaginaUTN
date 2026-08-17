import { URL_ASSETS_BECAS } from "../config/constants";
import catalogo from "../data/convocatoriasBecas.json";
import type {
  ArchivoConvocatoriaBeca,
  ConvocatoriaBecaConUrl,
  DatosConvocatoriasBecas,
} from "../types/convocatoriasBecas";

const datos = catalogo as DatosConvocatoriasBecas;

export const construirUrlConvocatoriaBeca = (archivo: string): string => {
  const urlBase = URL_ASSETS_BECAS.replace(/\/+$/, "");
  const rutaCodificada = archivo
    .split("/")
    .filter(Boolean)
    .map((segmento) => encodeURIComponent(segmento))
    .join("/");

  return rutaCodificada ? `${urlBase}/${rutaCodificada}` : urlBase;
};

export const obtenerConvocatoriasBecas = (): ArchivoConvocatoriaBeca[] =>
  Array.isArray(datos.convocatorias)
    ? datos.convocatorias.filter(
        (convocatoria) =>
          Boolean(convocatoria?.idBeca) && Boolean(convocatoria?.archivo),
      )
    : [];

export const obtenerConvocatoriasBecasConUrl =
  (): ConvocatoriaBecaConUrl[] =>
    obtenerConvocatoriasBecas().map((convocatoria) => ({
      ...convocatoria,
      url: construirUrlConvocatoriaBeca(convocatoria.archivo),
    }));

export const obtenerConvocatoriaBeca = (
  idBeca: string,
): ArchivoConvocatoriaBeca | undefined =>
  obtenerConvocatoriasBecas().find(
    (convocatoria) => convocatoria.idBeca === idBeca,
  );

export const obtenerUrlConvocatoriaBeca = (
  idBeca: string,
): string | undefined => {
  const convocatoria = obtenerConvocatoriasBecasConUrl().find(
    (item) => item.idBeca === idBeca,
  );

  return convocatoria?.url;
};
