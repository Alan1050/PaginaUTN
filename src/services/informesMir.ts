import { URL_ASSETS_MIR } from "../config/constants";
import catalogo from "../data/informesMir.json";
import type {
  AnioMir,
  AnioMirConUrls,
  DatosInformesMir,
} from "../types/informesMir";

const datos = catalogo as DatosInformesMir;

export const construirUrlInformeMir = (
  anio: number | string,
  archivo: string,
): string => {
  const urlBase = URL_ASSETS_MIR.replace(/\/+$/, "");
  const segmentos = [String(anio), ...archivo.split("/")]
    .filter(Boolean)
    .map((segmento) => encodeURIComponent(segmento));

  return segmentos.length ? `${urlBase}/${segmentos.join("/")}` : urlBase;
};

const esAnioValido = (anio: AnioMir): boolean =>
  Number.isFinite(anio?.anio) && Array.isArray(anio?.archivos);

export const obtenerAniosMir = (): AnioMirConUrls[] =>
  (Array.isArray(datos.anios) ? datos.anios : [])
    .filter(esAnioValido)
    .map((anio) => ({
      anio: anio.anio,
      archivos: anio.archivos
        .filter((archivo) => Boolean(archivo?.id) && Boolean(archivo?.archivo))
        .map((archivo) => ({
          ...archivo,
          url: construirUrlInformeMir(anio.anio, archivo.archivo),
        })),
    }))
    .sort((a, b) => b.anio - a.anio);

export const obtenerAnioMir = (
  anio: number | string,
): AnioMirConUrls | undefined =>
  obtenerAniosMir().find((item) => String(item.anio) === String(anio));
