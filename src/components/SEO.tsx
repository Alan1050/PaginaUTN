import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoUrl from "../assets/logos/LOGOUTN.png";

const SITE_NAME = "Universidad Tecnológica de Nayarit";
const SITE_URL = "https://www.utnay.edu.mx";

type PageMetadata = {
  title: string;
  description: string;
  canonicalPath?: string;
};

const pages: Record<string, PageMetadata> = {
  "/": {
    title: SITE_NAME,
    description:
      "Sitio oficial de la Universidad Tecnológica de Nayarit. Consulta oferta educativa, becas, servicios, vinculación e información institucional.",
  },
  "/QuienesSomos": {
    title: `Quiénes somos | ${SITE_NAME}`,
    description:
      "Conoce la misión, visión, política de calidad y valores de la Universidad Tecnológica de Nayarit.",
  },
  "/OfertaEducativa": {
    title: `Oferta educativa | ${SITE_NAME}`,
    description:
      "Consulta las carreras disponibles y sus planes de estudio en la Universidad Tecnológica de Nayarit.",
  },
  "/Carreras": {
    title: `Oferta educativa | ${SITE_NAME}`,
    description:
      "Consulta las carreras disponibles y sus planes de estudio en la Universidad Tecnológica de Nayarit.",
    canonicalPath: "/OfertaEducativa",
  },
  "/Becas": {
    title: `Becas | ${SITE_NAME}`,
    description:
      "Consulta la información sobre becas para estudiantes de la Universidad Tecnológica de Nayarit.",
  },
  "/Vinculacion": {
    title: `Vinculación | ${SITE_NAME}`,
    description:
      "Consulta los programas y servicios de vinculación de la Universidad Tecnológica de Nayarit.",
  },
  "/Incubadora": {
    title: `Incubadora de empresas | ${SITE_NAME}`,
    description:
      "Conoce la incubadora de empresas y sus servicios en la Universidad Tecnológica de Nayarit.",
  },
  "/CEELEX": {
    title: `CEELEX | ${SITE_NAME}`,
    description:
      "Consulta los servicios e información del CEELEX de la Universidad Tecnológica de Nayarit.",
  },
  "/ECECUT": {
    title: `ECECUT | ${SITE_NAME}`,
    description:
      "Consulta los servicios de evaluación y certificación de competencias de ECECUT en la Universidad Tecnológica de Nayarit.",
  },
  "/Resultados": {
    title: `Resultados del examen de ingreso | ${SITE_NAME}`,
    description:
      "Consulta los resultados publicados del examen de ingreso de la Universidad Tecnológica de Nayarit.",
  },
  "/ExtensionUniversitaria": {
    title: `Extensión universitaria | ${SITE_NAME}`,
    description:
      "Consulta los servicios y actividades de extensión universitaria de la Universidad Tecnológica de Nayarit.",
  },
  "/MovilidadEstudiantil": {
    title: `Movilidad estudiantil | ${SITE_NAME}`,
    description:
      "Consulta información sobre movilidad estudiantil en la Universidad Tecnológica de Nayarit.",
  },
  "/Convenios": {
    title: `Convenios | ${SITE_NAME}`,
    description:
      "Consulta información sobre los convenios de la Universidad Tecnológica de Nayarit.",
  },
  "/BolsaTrabajo": {
    title: `Bolsa de trabajo | ${SITE_NAME}`,
    description:
      "Consulta la bolsa de trabajo para estudiantes, egresados y organizaciones vinculadas con la Universidad Tecnológica de Nayarit.",
  },
  "/ComiteEtica": {
    title: `Comité de Ética | ${SITE_NAME}`,
    description:
      "Consulta las funciones, medios de contacto e información del Comité de Ética de la Universidad Tecnológica de Nayarit.",
  },
  "/Egresados": {
    title: `Egresados | ${SITE_NAME}`,
    description:
      "Consulta servicios, programas e información para egresados de la Universidad Tecnológica de Nayarit.",
  },
  "/Informes/Financieros": {
    title: `Informes financieros | ${SITE_NAME}`,
    description:
      "Consulta los informes contables, presupuestales, programáticos y otros informes financieros publicados por la Universidad Tecnológica de Nayarit.",
  },
  "/MIR": {
    title: `Reporte de Avance Trimestral MIR | ${SITE_NAME}`,
    description:
      "Consulta los reportes trimestrales MIR y las fichas técnicas de indicadores publicados por la Universidad Tecnológica de Nayarit.",
  },
  "/SidOut": {
    title: `Sistema de Gestión de Calidad | ${SITE_NAME}`,
    description:
      "Consulta la normativa, documentación y recursos del Sistema de Gestión de Calidad de la Universidad Tecnológica de Nayarit.",
  },
  "/CulturaPaz": {
    title: `Cultura de Paz | ${SITE_NAME}`,
    description:
      "Consulta las acciones e información sobre Cultura de Paz en la Universidad Tecnológica de Nayarit.",
  },
  "/CentroInformacion": {
    title: `Centro de Información | ${SITE_NAME}`,
    description:
      "Consulta los servicios y datos de contacto del Centro de Información de la Universidad Tecnológica de Nayarit.",
  },
  "/GuiasPago": {
    title: `Guías de pago | ${SITE_NAME}`,
    description:
      "Consulta las guías de pago publicadas por la Universidad Tecnológica de Nayarit.",
  },
};

const careerNames: Record<string, string> = {
  IMS: "Ingeniería en Microelectrónica y Semiconductores",
  IAL: "Ingeniería en Alimentos",
  IA: "Ingeniería en Tecnologías de la Información e Innovación Digital",
  IMI: "Ingeniería en Mantenimiento Industrial",
  IMT: "Ingeniería en Mecatrónica",
  LGDT: "Licenciatura en Gestión y Desarrollo Turístico",
  LAD: "Licenciatura en Administración",
  LPS: "Licenciatura en Psicología",
  ITIID: "Ingeniería en Tecnologías de la Información e Innovación Digital",
  IC: "Ingeniería Civil",
  LINM: "Licenciatura en Negocios y Mercadotecnia",
  LSP: "Licenciatura en Seguridad Pública",
  ILI: "Ingeniería en Logística Internacional",
  LGT: "Licenciatura en Gastronomía",
};

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const getMetadata = (pathname: string): PageMetadata => {
  const careerCode = decodeURIComponent(pathname).match(/^\/Carrera\/([^/]+)$/)?.[1];

  if (careerCode) {
    const careerName = careerNames[careerCode.toUpperCase()] ?? careerCode;

    return {
      title: `${careerName} | ${SITE_NAME}`,
      description: `Consulta información y el plan de estudios de ${careerName} en la Universidad Tecnológica de Nayarit.`,
    };
  }

  return pages[pathname] ?? pages["/"];
};

function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getMetadata(pathname);
    const canonicalUrl = new URL(metadata.canonicalPath ?? pathname, SITE_URL).href;
    const absoluteLogoUrl = new URL(logoUrl, SITE_URL).href;

    document.documentElement.lang = "es-MX";
    document.title = metadata.title;

    setMeta('meta[name="description"]', "name", "description", metadata.description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow");
    setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
    setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "es_MX");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", absoluteLogoUrl);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", `Logotipo de ${SITE_NAME}`);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteLogoUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector<HTMLScriptElement>("#university-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "university-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollegeOrUniversity",
          "@id": `${SITE_URL}/#university`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          logo: absoluteLogoUrl,
          telephone: "+52 311 211 9800",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Carretera Federal 200 km 9",
            addressLocality: "Xalisco",
            addressRegion: "Nayarit",
            postalCode: "63780",
            addressCountry: "MX",
          },
          sameAs: [
            "https://www.facebook.com/UTNAY",
            "https://www.instagram.com/ut.nayarit/",
            "https://www.tiktok.com/@utnayarit",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          inLanguage: "es-MX",
          publisher: { "@id": `${SITE_URL}/#university` },
        },
      ],
    });
  }, [pathname]);

  return null;
}

export default SEO;
