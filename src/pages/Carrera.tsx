import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import "./Carrera.css";

// Logos de las Carreras:

import LogoIA from "../assets/logos/IA.png";
import LogoIAL from "../assets/logos/IAL.png";
import LogoIC from "../assets/logos/IC.png";
import LogoILI from "../assets/logos/ILI.png";
import LogoIMI from "../assets/logos/IMI.png";
import LogoIMS from "../assets/logos/IMS.png";
import LogoIMT from "../assets/logos/IMT.png";
import LogoITIID from "../assets/logos/ITIID.png";
import LogoLAD from "../assets/logos/LAD.png";
import LogoLGDT from "../assets/logos/LGDT.png";
import LogoLGT from "../assets/logos/LGT.png";
import LogoLINM from "../assets/logos/LINM.png";
import LogoLSP from "../assets/logos/LSP.png";
import LogoLPS from "../assets/logos/LPS.png";

// Planes de estudio imagenes:

import PlanIAL from "../assets/planesEstudio/IAL.jpg";
import PlanIC from "../assets/planesEstudio/IC.jpg";
import PlanILI from "../assets/planesEstudio/ILI.jpg";
import PlanIMI from "../assets/planesEstudio/IMI.jpg";
import PlanITIID from "../assets/planesEstudio/ITIID.jpg";
import PlanLAD from "../assets/planesEstudio/LAD.jpg";
import PlanLGDT from "../assets/planesEstudio/LGDT.jpg";
import PlanLINM from "../assets/planesEstudio/LINM.jpg";
import PlanLSP from "../assets/planesEstudio/LSP.jpg";
import PlanLGT from "../assets/planesEstudio/LGT.jpg";
import logoFace from "../assets/logos/logo-de-facebook.png"

// Planes de estudio PDF:

import PlanIAL_PDF from "../assets/planesEstudio/pdf/IAL.pdf";
import PlanIC_PDF from "../assets/planesEstudio/pdf/IC.pdf";
import PlanILI_PDF from "../assets/planesEstudio/pdf/ILI.pdf";
import PlanIMI_PDF from "../assets/planesEstudio/pdf/IMI.pdf";
import PlanITIID_PDF from "../assets/planesEstudio/pdf/ITIID.pdf";
import PlanLAD_PDF from "../assets/planesEstudio/pdf/LAD.pdf";
import PlanLGDT_PDF from "../assets/planesEstudio/pdf/LGDT.pdf";
import PlanLINM_PDF from "../assets/planesEstudio/pdf/LINM.pdf";
import PlanLSP_PDF from "../assets/planesEstudio/pdf/LSP.pdf";
import PlanLGT_PDF from "../assets/planesEstudio/pdf/LGT.pdf";
import PlanIA_PDF from "../assets/planesEstudio/pdf/IA.pdf";

// Baners:

import bannerIAL from "../assets/banner/bannerIAL.jpg";
import bannerIC from "../assets/banner/bannerIC.jpg";
import bannerILI from "../assets/banner/bannerILI.jpg";
import bannerIMI from "../assets/banner/bannerIMI.jpg";
import bannerITIID from "../assets/banner/bannerITIID.jpg";
import bannerLAD from "../assets/banner/bannerLAD.jpg";
import bannerLGDT from "../assets/banner/bannerLGDT.jpg";
import bannerLINM from "../assets/banner/bannerLINM.jpg";
import bannerLSP from "../assets/banner/bannerLSP.jpg";
import bannerLGT from "../assets/banner/bannerLGT.jpg";
import bannerIA from "../assets/banner/bannerIA.jpg";
import bannerIMS from "../assets/banner/bannerIMS.jpg";
import bannerIMT from "../assets/banner/bannerIMT.jpg";
import bannerLPS from "../assets/banner/bannerLPS.jpg";


// Interfaz para los datos de carrera
interface CarreraInfo {
  id: number;
  src: string;
  alt: string;
  label: string;
  color: string;
  nombreCompleto: string;
  banner: string;
  egreasdo: string;
  planEstudio?: string;
  planEstudioPDF?: string;
  campoLaboral: string[];
  tsu: string;
  extension: string;
  facebook: string;
  label2: string;
}

// Interfaz para las materias
interface Materia {
  id: string;
  nombre: string;
}

// Interfaz para el cuatrimestre
interface Cuatrimestre {
  id: number;
  nombre: string;
  materias: Materia[];
}

function Carrera() {
  const { nombre } = useParams<{ nombre: string }>();
const label = nombre; // Asigna a una variable con el nombre correcto
  const [isMobile, setIsMobile] = useState(false);
  const [carreraSeleccionada, setCarreraSeleccionada] = useState<CarreraInfo | null>(null);
  const [cuatrimestreActivo, setCuatrimestreActivo] = useState<number>(1);
  const [cuatrimestres, setCuatrimestres] = useState<Cuatrimestre[]>([]);
  
  // Ref para el contenedor de cuatrimestres en móvil
  const cuatrimestresContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
    
  }, []);


  // Datos completos de todas las carreras
  const carreras: CarreraInfo[] = [
    {
      id: 1,
      src: LogoIMS,
      alt: "Logotipo Carrera Ingenieria en Microelectronica y Semiconductores",
      label: "IMS",
      color: "#0f391f",
      nombreCompleto: "Ingeniería en Microelectrónica y Semiconductores",
      egreasdo: "",
      banner: bannerIMS,
      planEstudio: "",
      campoLaboral: [],
      tsu: "Tecnico Superior Universitario en Microelectrónica y Sistemas Embebidos",
      extension: "4003", 
      facebook: "https://www.facebook.com/idgsutnay", 
      label2: "Ingeniería en Tecnologias de la Información e Innovación Digital UT Nayarit" 
    },
    {
      id: 2,
      src: LogoIAL,
      alt: "Logotipo Carrera Ingenieria en Alimentos",
      label: "IAL",
      color: "#771e1b",
      nombreCompleto: "Ingeniería en Alimentos",
      banner: bannerIAL,
      egreasdo:
        "El egresado de Ingeniería en Alimentos incluye la capacidad de diseñar, planear, evaluar y mejorar procesos de producción de alimentos. También debe ser capaz de garantizar la calidad e inocuidad de los productos.",
      planEstudio: PlanIAL,
      planEstudioPDF: PlanIAL_PDF,
      campoLaboral: [
        "Diseño y optimización de sistemas de producción de alimentos",
        "Desarrollo e innovación de nuevos productos alimenticios",
        "Gestión de la calidad e inocuidad en el proceso alimentario",
        "Supervisión y control de la producción de alimentos",
        "Investigación y desarrollo de tecnologías alimentarias",
        "Asesoría en procesos de producción y seguridad alimentaria",
        "Certificación y cumplimiento de normativas sanitarias",
        "Consultoría en innovación de productos y procesos alimenticios",
      ],
      tsu: "Tecnico Superior Universitario en Tecnología de Alimentos",
      extension: "1704", 
      facebook: "https://www.facebook.com/IAutnay", 
      label2: "ITB UT Nayarit"
    },
    {
      id: 3,
      src: LogoIA,
      alt: "Logotipo Carrera Técnico Superior Universitario en Inteligencia Artificial",
      label: "IA",
      color: "#43296e",
      banner: bannerIA,
      nombreCompleto:
        "Técnico Superior Universitario en Inteligencia Artificial",
      egreasdo:
        "El egresado en Técnico Superior Universitario en Ingeniería Artificial podrá desarrollar aplicaciones que incluyan la implementación de sistemas de inteligencia artificial que permitan optimizar el rendimiento de una organización, para resolver problemas del sector productivo, con un enfoque de inclusión, compromiso con la responsabilidad social, equidad social y de género, excelencia, innovación y sostenibilidad para social o interculturalidad.",
      planEstudio: "",
      planEstudioPDF: PlanIA_PDF,
      campoLaboral: [
        "Desarrollar y gestionar aplicaciones de inteligencia artificial en diferentes sectores productivos y empresariales.",
        "Participar en proyectos de innovación tecnológica y en la implementación de sistemas inteligentes para optimizar procesos.",
        "Brindar asesoría técnica en el diseño y desarrollo de soluciones basadas en inteligencia artificial.",
        "Colaborar en investigaciones y proyectos de innovación social, interculturalidad y sostenibilidad relacionados con la inteligencia artificial.",
        "Trabajar en instituciones académicas, centros de investigación y empresas tecnológicas en el área de inteligencia artificial aplicada.",
        "Impulsar iniciativas que promuevan la inclusión y la responsabilidad social a través del uso de tecnologías de inteligencia artificial.",
      ],
      tsu: "Tecnico Superior Universitario en Inteligencia Artificial",
      extension: "4003", 
      facebook: "https://www.facebook.com/idgsutnay",
      label2: "Ingeniería en Tecnologias de la Información e Innovación Digital UT Nayarit"
    },
    {
      id: 4,
      src: LogoIMI,
      alt: "Logotipo Carrera Ingenieria en Mantenimiento Industrial",
      label: "IMI",
      color: "#4c1706",
      banner: bannerIMI,
      nombreCompleto: "Ingenieria en Mantenimiento Industrial",
      egreasdo:
        "El perfil de egreso consiste en diseñar estrategias de mantenimiento mediante el análisis de factores humanos, tecnológicos, económicos y financieros, para la elaboración y administración del plan maestro de mantenimiento que garantice la disponibilidad y confiabilidad de la planta, contribuyendo a la competitividad de la empresa. Además, el egresado estará capacitado para optimizar las actividades del mantenimiento y las condiciones de operación de los equipos a través de técnicas y herramientas de confiabilidad, con el fin de incrementar la eficiencia global de los equipos y reducir los costos de mantenimiento, apoyando la sustentabilidad y la competitividad de la organización. También podrá validar estudios de ingeniería y proyectos técnico-económicos mediante análisis de factibilidad para mejorar la mantenibilidad de los equipos e instalaciones.",
      planEstudio: PlanIMI,
      planEstudioPDF: PlanIMI_PDF,
      campoLaboral: [
        "Gestionar el mantenimiento en plantas industriales y empresas de servicios de ingeniería y consultoría especializada en confiabilidad y mantenimiento.",
        "Participar en la planificación y ejecución de programas de mantenimiento preventivo, predictivo y correctivo.",
        "Optimizar procesos y controles de confiabilidad para incrementar la eficiencia operativa.",
        "Involucrarse en proyectos de mejora continua, análisis de fallas, evaluación de costos y sustentabilidad en instalaciones industriales.",
        "Contribuir a reducir costos y mejorar la disponibilidad de equipos y sistemas, fortaleciendo la competitividad de las organizaciones en las que laboran.",
      ],
      tsu: "Tecnico Superior Universitario en Mantenimiento Industrial",
      extension: "2104 y 2106", 
      facebook: "https://www.facebook.com/profile.php?id=100057164151875",
      label2: "MI-MT Universidad Tecnológica de Nayarit"
    },
    {
      id: 5,
      src: LogoIMT,
      alt: "Logotipo Carrera Ingenieria en Mecatronica",
      label: "IMT",
      color: "#023a5d",
      banner: bannerIMT,
      nombreCompleto: "Ingenieria en Mecatronica",
      egreasdo: "El egresado de la Ingeniería en Mecatrónica podrá desarrollar proyectos de automatización y control, a través del diseño, operación y aplicación de nuevas tecnologías. Así como operar y mantener los sistemas de procesos de producción con equipo automatizado y/o robótico para satisfacer las necesidades del sector productivo.",
      planEstudio: "",
      planEstudioPDF: "",
      campoLaboral: [
        "Diseño y desarrollo de proyectos de automatización y control",
        "Operación y mantenimiento de sistemas de procesos de producción automatizados y robóticos",
        "Implementación de nuevas tecnologías en ambientes industriales",
        "Gestión de sistemas de control en sectores productivos",
        "Optimización de procesos mediante sistemas automatizados y robóticos",
      ],
      tsu: "Tecnico Superior Universitario en Instalaciones Electricas Eficientes",
      extension: "2104 y 2106", 
      facebook: "https://www.facebook.com/profile.php?id=100057164151875", 
      label2: "MI-MT Universidad Tecnológica de Nayarit"
    },
    {
      id: 6,
      src: LogoLGDT,
      alt: "Logotipo Carrera Licenciatura en Gestión y Desarrollo Turistico",
      label: "LGDT",
      color: "#024319",
      nombreCompleto: "Licenciatura en Gestión y Desarrollo Turístico",
      banner: bannerLGDT,
      egreasdo:
        "El egresado de la licenciatura en Gestión y Desarrollo Turístico podrá: *Coordinar la presentación de servicios turísticos. *Dirigir la operación de establecimientos de hospedaje. *Desarrollar planes de venta de servicios de hospedaje, eventos y centros de consumo. *Formular proyectos de turismo cultural y de naturaleza. *Impulsar el desarrollo sustentable del sector turismo.",
      planEstudio: PlanLGDT,
      planEstudioPDF: PlanLGDT_PDF,
      campoLaboral: [
        "Gestión y administración de empresas turísticas y de hospedaje",
        "Desarrollo y planificación de eventos y servicios turísticos",
        "Diseño y venta de paquetes turísticos culturales y de naturaleza",
        "Promoción y comercialización de destinos turísticos",
        "Asesoría en turismo sostenible y desarrollo sustentable",
        "Operación y dirección de hoteles y centros de hospedaje",
        "Creación y gestión de proyectos turísticos culturales y ecológicos",
        "Consultoría en la implementación de políticas turísticas y sustentables",
      ],
      tsu: "Tecnico Superior Universitario en Turismo",
      extension: "1901", 
      facebook: "https://www.facebook.com/utnayturismo", 
      label2: "Turismo UTNay"
    },
    {
      id: 7,
      src: LogoLAD,
      alt: "Logotipo Carrera Licenciatura en Administración",
      label: "LAD",
      color: "#48254c",
      nombreCompleto: "Licenciatura en Administración",
      banner: bannerLAD,
      egreasdo: "",
      planEstudio: PlanLAD,
      planEstudioPDF: PlanLAD_PDF,
      campoLaboral: [],
      tsu: "Tecnico Superior Universitario en Emprendimiento, Formulación y Evaluación de Proyectos",
      extension: "1801", 
      facebook: "https://www.facebook.com/aep.igp.ldeis.utnay", 
      label2: "Administración UTNayarit"
    },
    {
      id: 8,
      src: LogoLPS,
      alt: "Logotipo Carrera Licenciatura en Psicología",
      label: "LPS",
      color: "#e5b40b",
      banner: bannerLPS,
      nombreCompleto: "Licenciatura en Psicología",
      egreasdo: "",
      planEstudio: "",
      planEstudioPDF: "",
      campoLaboral: [],
      tsu: "Tecnico Superior Universitario en Psicología",
      extension: "1801", 
      facebook: "#",
      label2: "NO DISPONIBLE"

    },
    {
      id: 9,
      src: LogoITIID,
      alt: "Logotipo Carrera Ingenieria en Tecnologias de la Información e Innovación Digital",
      label: "ITIID",
      color: "#23777a",
      banner: bannerITIID,
      nombreCompleto:
        "Ingenieria en Tecnologias de la Información e Innovación Digital",
      egreasdo: "",
      planEstudio: PlanITIID,
      planEstudioPDF: PlanITIID_PDF,
      campoLaboral: [],
      tsu: "Técnico Superior Universitario en Desarrollo de Software Multiplataforma",
      extension: "4003", 
      facebook: "https://www.facebook.com/idgsutnay", 
      label2: "Ingeniería en Tecnologias de la Información e Innovación Digital UT Nayarit"
    },
    {
      id: 10,
      src: LogoIC,
      alt: "Logotipo Carrera Ingenieria Civil",
      label: "IC",
      color: "#420305",
      banner: bannerIC,
      nombreCompleto: "Ingenieria Civil",
      egreasdo: "",
      planEstudio: PlanIC,
      planEstudioPDF: PlanIC_PDF,
      campoLaboral: [],
      tsu: "Técnico Superior Universitario en Construcción",
      extension: "1704", 
      facebook: "https://www.facebook.com/UTNIngCivil", 
      label2: "Ingeniería Civil UTN"
    },
    {
      id: 11,
      src: LogoLINM,
      alt: "Logotipo Carrera Licenciatura en Negocios y Mercadotecnia",
      label: "LINM",
      banner: bannerLINM,
      color: "#2a2c61",
      nombreCompleto:
        "Licenciatura en Negocios y Mercadotecnia",
      egreasdo: "",
      planEstudio: PlanLINM,
      planEstudioPDF: PlanLINM_PDF,
      campoLaboral: [],
      tsu: "Técnico Superior Universitario en Mercadotecnia",
      extension: "1801", 
      facebook: "https://www.facebook.com/mercadotecniautnayarit", 
      label2: "Mercadotecnia UT de Nayarit"

    },
    {
      id: 12,
      src: LogoLSP,
      alt: "Logotipo Carrera Licenciatura en Seguridad Pública",
      label: "LSP",
      banner: bannerLSP,
      color: "#413f40",
      nombreCompleto: "Licenciatura en Seguridad Pública",
      egreasdo: "",
      planEstudio: PlanLSP,
      planEstudioPDF: PlanLSP_PDF,
      campoLaboral: [],
      tsu: "Técnico Superior Universitario en Seguridad Pública",
      extension: "3808", 
      facebook: "https://www.facebook.com/LSPUTNay",
      label2: "UTNAY Lic. en Seguridad Pública"
    },
    {
      id: 13,
      src: LogoILI,
      alt: "Logotipo Carrera Ingenieria en Logistica Internacional",
      label: "ILI",
      color: "#4d7b2a",
      nombreCompleto: "Ingenieria en Logistica Internacional",
      egreasdo: "",
      banner: bannerILI,
      planEstudio: PlanILI,
      planEstudioPDF: PlanILI_PDF,
      campoLaboral: [],
      tsu: "Técnico Superior Universitario en Operaciones Logísticas y Comercio Exterior",
      extension: "1604", 
      facebook: "https://www.facebook.com/profile.php?id=100057583722524",
      label2: "Logística Internacional UTN"
    },
    {
      id: 14,
      src: LogoLGT,
      alt: "Logotipo Carrera Licenciatura en Gastronomía",
      label: "LGT",
      color: "#a67e16",
      nombreCompleto: "Licenciatura en Gastronomía",
      egreasdo: "",
      banner: bannerLGT,
      planEstudio: PlanLGT,
      planEstudioPDF: PlanLGT_PDF,
      campoLaboral: [],
      tsu: "Técnico Superior Universitario en Gastronomía",
      extension: "1601", 
      facebook: "https://www.facebook.com/GastronomiaUTNAY", 
      label2: "Gastronomía UTNAY"
    },
  ];

  // Datos de materias por carrera (ejemplo para IAL)
  const materiasPorCarrera: Record<string, Cuatrimestre[]> = {
    IMS: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "IMS101", nombre: "Ingles I" },
          { id: "IMS102", nombre: "Desarrollo Humano y Valores"  },
          { id: "IMS103", nombre: "Fundamentos Matemáticos",  },
          { id: "IMS104", nombre: "Química Básica" },
          { id: "IMS105", nombre: "Metodología de la Programación" },
          { id: "IMS106", nombre: "Mediciones Eléctricas en Semiconductores" },
          { id: "IMS107", nombre: "Comunicación y Habilidades Digitales" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "IMS201", nombre: "Inglés II" },
          { id: "IMS202", nombre: "Habilidades Socioemocionales y Manejo de Conflictos"  },
          { id: "IMS203", nombre: "Cálculo Diferencial" },
          { id: "IMS204", nombre: "Física" },
          { id: "IMS205", nombre: "Probabilidad y Estadística" },
          { id: "IMS206", nombre: "Física del estado Sólido" },
          { id: "IMS207", nombre: "Calidad y Normatividad Industrial" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "IMS301", nombre: "Inglés III" },
          { id: "IMS302", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "IMS303", nombre: "Cálculo Integral" },
          { id: "IMS304", nombre: "Diseño Experimental de Procesos" },
          { id: "IMS305", nombre: "Circuitos Eléctricos" },
          { id: "IMS306", nombre: "Dispositivos Semiconductores" },
          { id: "IMS307", nombre: "Proyecto Integrador I" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "IMS401", nombre: "Inglés IV" },
          { id: "IMS402", nombre: "Ética Profesional" },
          { id: "IMS403", nombre: "Cálculo de Varias Variables" },
          { id: "IMS404", nombre: "Mantenimiento y Seguridad Industrial" },
          { id: "IMS405", nombre: "Electrónica Analógica" },
          { id: "IMS406", nombre: "Manufactura Microelectrónica" },
          { id: "IMS407", nombre: "Sistemas Digitales" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "IMS501", nombre: "Inglés V" },
          { id: "IMS502", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "IMS503", nombre: "Ecuaciones Diferenciales" },
          { id: "IMS504", nombre: "Logística" },
          { id: "IMS505", nombre: "Diseño y Ensamble de PCB" },
          { id: "IMS506", nombre: "Procesos de Manufactura de Semiconductores" },
          { id: "IMS507", nombre: "Proyecto Integrador II" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "IMS601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "IMS701", nombre: "Inglés VI" },
          { id: "IMS702", nombre: "Habilidades Gerenciales" },
          { id: "IMS703", nombre: "Arquitectura de Microprocesadores" },
          { id: "IMS704", nombre: "Electromagnetismo y Señales" },
          { id: "IMS705", nombre: "Programación Avanzada" },
          { id: "IMS706", nombre: "Circuitos Amplificadores Integrados" },
          { id: "IMS707", nombre: "Caracterización de Dispositivos Semiconductores" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "IMS801", nombre: "Inglés VII" },
          { id: "IMS802", nombre: "Evaluación y Administración de Proyectos" },
          { id: "IMS803", nombre: "Diseño de Sistemas Integrados Digitales" },
          { id: "IMS804", nombre: "Electrónica de Potencia" },
          { id: "IMS805", nombre: "Programación de Sistemas Embebidos" },
          { id: "IMS806", nombre: "Amplificadores Diferenciales y Multietapa" },
          { id: "IMS807", nombre: "Optoelectrónica" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "IMS901", nombre: "Inglés VIII" },
          { id: "IMS902", nombre: "Administración del Mantenimiento" },
          { id: "IMS903", nombre: "Diseño de Circuitos Integrados Analógicos" },
          { id: "IMS904", nombre: "Enrutamiento de Circuitos Integrados" },
          { id: "IMS905", nombre: "Verificación de Circuitos Integrados" },
          { id: "IMS906", nombre: "Respuesta en Frecuencia" },
          { id: "IMS907", nombre: "Proyecto Integrador III" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "IMS1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    IAL: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "IAL101", nombre: "Bilogía" },
          { id: "IAL102", nombre: "Comunicación y Habilidades Digitales"  },
          { id: "IAL103", nombre: "Desarrollo Humano y Valores",  },
          { id: "IAL104", nombre: "Fundamentos Matematicos" },
          { id: "IAL105", nombre: "Ingles I" },
          { id: "IAL106", nombre: "Meotodología de la Investigacíon" },
          { id: "IAL107", nombre: "Química General" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "IAL201", nombre: "Cálculo Diferencial" },
          { id: "IAL202", nombre: "Fisica"  },
          { id: "IAL203", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "IAL204", nombre: "Inglés II" },
          { id: "IAL205", nombre: "Microbiologia" },
          { id: "IAL206", nombre: "Probabilidad y Estadistica" },
          { id: "IAL207", nombre: "Química Analitica" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "IAL301", nombre: "Cálculo Integral" },
          { id: "IAL302", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "IAL303", nombre: "Ingles III" },
          { id: "IAL304", nombre: "Proyecto Integradora I" },
          { id: "IAL305", nombre: "Quimica de Alimentos" },
          { id: "IAL306", nombre: "Tecnologia de Alimentos I" },
          { id: "IAL307", nombre: "Tecnologias de Conservación de Alimentos" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "IAL401", nombre: "Analisis de Alimentos" },
          { id: "IAL402", nombre: "Calculo de Varias Variables" },
          { id: "IAL403", nombre: "Eitca Profesional" },
          { id: "IAL404", nombre: "Ingles IV" },
          { id: "IAL405", nombre: "Inocuidad Alimentaria Alimentos" },
          { id: "IAL406", nombre: "Microbiologia de Alimentos" },
          { id: "IAL407", nombre: "Tecnologia de Alimentos II" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "IAL501", nombre: "Administracion de la Producción" },
          { id: "IAL502", nombre: "Ecuaciones Diferenciales" },
          { id: "IAL503", nombre: "Ingles V" },
          { id: "IAL504", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "IAL505", nombre: "Proyecto Integradora II" },
          { id: "IAL506", nombre: "Sistemas de Calidad " },
          { id: "IAL507", nombre: "Tecnologia de Alimentos III" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "IAL601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "IAL701", nombre: "Balance de Materia y Energía" },
          { id: "IAL702", nombre: "Bioquímica" },
          { id: "IAL703", nombre: "Diseño de Experimentos" },
          { id: "IAL704", nombre: "Habilidades Gerenciales" },
          { id: "IAL705", nombre: "Ingles VI" },
          { id: "IAL706", nombre: "Operaciones Unitarias I" },
          { id: "IAL707", nombre: "Termodinamica" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "IAL801", nombre: "Emprendimiento e Innovación" },
          { id: "IAL802", nombre: "Estandarización de Procesos Alimentarios" },
          { id: "IAL803", nombre: "Formulación y Evaluación de Proyectos" },
          { id: "IAL804", nombre: "Gestión de la Producción" },
          { id: "IAL805", nombre: "Industrias Alimentarias Sostenibles" },
          { id: "IAL806", nombre: "Ingles VII" },
          { id: "IAL807", nombre: "Operaciones Unitarias" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "IAL901", nombre: "Bioingeniría" },
          { id: "IAL902", nombre: "Consultoría y Capacitación a Empresas" },
          { id: "IAL903", nombre: "Diseño de Plantas" },
          { id: "IAL904", nombre: "Diseño de Procesos" },
          { id: "IAL905", nombre: "Ingles VIII" },
          { id: "IAL906", nombre: "Operaciones Unitarias III" },
          { id: "IAL907", nombre: "Proyecto Integrador III" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "IAL1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    IA: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "IA101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "IA102", nombre: "Física"  },
          { id: "IA103", nombre: "Ingles I"  },
          { id: "IA104", nombre: "Desarrollo Humano y Valores" },
          { id: "IA105", nombre: "Fundamentos de Redes" },
          { id: "IA106", nombre: "Fundamentos de Programación" },
          { id: "IA107", nombre: "Fundamentos Matemáticos" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "IA201", nombre: "Calculo Diferencial" },
          { id: "IA202", nombre: "Probabilidad y Estadistica"  },
          { id: "IA203", nombre: "Programacion Estructurada" },
          { id: "IA204", nombre: "Conmutación y Enrutamiento de Redes" },
          { id: "IA205", nombre: "Sistemas Operativos" },
          { id: "IA206", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "IA207", nombre: "Ingles II" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "IA301", nombre: "Cálculo Integral" },
          { id: "IA302", nombre: "Ingles III" },
          { id: "IA303", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "IA304", nombre: "Proyecto Integradora I" },
          { id: "IA305", nombre: "Bases de Datos" },
          { id: "IA306", nombre: "Programación Orientada a Objetos" },
          { id: "IA307", nombre: "Topicos de Calidad para el Diseño de Software" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "IA401", nombre: "Aprendizaje Profundo Deep Learning" },
          { id: "IA402", nombre: "Calculo de Varias Variables" },
          { id: "IA403", nombre: "Eitca Profesional" },
          { id: "IA404", nombre: "Ingles IV" },
          { id: "IA405", nombre: "Metodologia No Code" },
          { id: "IA406", nombre: "Sistemas Embebidos" },
          { id: "IA407", nombre: "Sistemas de Optimización Inteligente" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "IA501", nombre: "Ingles V" },
          { id: "IA502", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "IA503", nombre: "Proyecto Integrador II" },
          { id: "IA504", nombre: "Aprendizaje Maquina" },
          { id: "IA505", nombre: "Ecuaciones Diferenciales" },
          { id: "IA506", nombre: "Fundamentos de Visíon por Computadora" },
          { id: "IA507", nombre: "Mineria de Datos" },
          { id: "IA508", nombre: "Estandares y Metricas para el Desarrollo de Software" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "IA601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "IA701", nombre: "Habilidades Gerenciales" },
          { id: "IA702", nombre: "Ingles VI" },
          { id: "IA703", nombre: "Etica y Legislación en Tecnologias de la Información" },
          { id: "IA704", nombre: "Formulación de Proyectos de Tecnologia" },
          { id: "IA705", nombre: "Fundamentos de Inteligencia Artificial" },
          { id: "IA706", nombre: "Mineria de Texto" },
          { id: "IA707", nombre: "Seguridad Informatica" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "IA801", nombre: "Ingles VII" },
          { id: "IA802", nombre: "Programación para Inteligencia Artificial" },
          { id: "IA803", nombre: "Electronica Digital" },
          { id: "IA804", nombre: "Gestion de Proyectos de Tecnología" },
          { id: "IA805", nombre: "Informatica Forense" },
          { id: "IA806", nombre: "Analisis de Regresion" },
          { id: "IA807", nombre: "Programacion para Inteligencia Artificial" },
          { id: "IA808", nombre: "Administración de Servidores" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "IA901", nombre: "Ingles VIII" },
          { id: "IA902", nombre: "Proyecto Integrador III" },
          { id: "IA903", nombre: "Ciencia de Datos" },
          { id: "IA904", nombre: "Evaluación de Proyectos de Tecnologia" },
          { id: "IA905", nombre: "Internet de las Cosas" },
          { id: "IA906", nombre: "Sistemas Inteligentes" },
          { id: "IA907", nombre: "Tecnologias Disruptivas" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "IA1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    IMI: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "IMI101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "IMI102", nombre: "Desarrollo Humano y Valores"  },
          { id: "IMI103", nombre: "Dibujo Industrial"  },
          { id: "IMI104", nombre: "Fundamentos del Mantenimiento" },
          { id: "IMI105", nombre: "Fundamentos Matematicos" },
          { id: "IMI106", nombre: "Ingles I" },
          { id: "IMI107", nombre: "Seguridad Industrial" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "IMI201", nombre: "Calculo Diferencial" },
          { id: "IMI202", nombre: "Fisica"  },
          { id: "IMI203", nombre: "Gestión del Mantenimiento" },
          { id: "IMI204", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "IMI205", nombre: "Ingles II" },
          { id: "IMI206", nombre: "Probabilidad y Estadistica" },
          { id: "IMI207", nombre: "Termodinamica" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "IMI301", nombre: "Cálculo Integral" },
          { id: "IMI302", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "IMI303", nombre: "Electronica Analogica" },
          { id: "IMI304", nombre: "Ingles III" },
          { id: "IMI305", nombre: "Maquinas y Mexanismos" },
          { id: "IMI306", nombre: "Proyecto Integrador I" },
          { id: "IMI307", nombre: "Sistemas Electricos" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "IMI401", nombre: "Calculo de Varias Variables" },
          { id: "IMI402", nombre: "Electronica Digital" },
          { id: "IMI403", nombre: "Eitca Profesional" },
          { id: "IMI404", nombre: "Ingles IV" },
          { id: "IMI405", nombre: "Mantenimiento a Procesos de Manufactura" },
          { id: "IMI406", nombre: "Maquinas Electricas" },
          { id: "IMI407", nombre: "Sistemas Neumaticos e Hidraulicos" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "IMI501", nombre: "Ciencia de los Materiales" },
          { id: "IMI502", nombre: "Automatización y Robotica" },
          { id: "IMI503", nombre: "Ecuaciones Diferenciales" },
          { id: "IMI504", nombre: "Ingles V" },
          { id: "IMI505", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "IMI506", nombre: "Proyecto Integrador II" },
          { id: "IMI507", nombre: "Sistemas Termicos e Industriales" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "IMI601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "IMI701", nombre: "Administración Estrategica para Mantenimiento" },
          { id: "IMI702", nombre: "Fisica para Ingenieria" },
          { id: "IMI703", nombre: "Habilidades Gerenciales" },
          { id: "IMI704", nombre: "Ingles VI" },
          { id: "IMI705", nombre: "Instalaciones Electricas" },
          { id: "IMI706", nombre: "Metodos y Sistemas de Trabajo" },
          { id: "IMI707", nombre: "Tribología" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "IMI801", nombre: "Ensayos Destructivos" },
          { id: "IMI802", nombre: "Ingenieria Economica" },
          { id: "IMI803", nombre: "Ingles VII" },
          { id: "IMI804", nombre: "Mantenimiento Predictivo Mecanico" },
          { id: "IMI805", nombre: "Protocolos de Operación y Mantenimiento" },
          { id: "IMI806", nombre: "Sistemas Automatizados y Redes Industriales" },
          { id: "IMI807", nombre: "Tecnicas TPM y RCM" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "IMI901", nombre: "Ensayos Destructivos" },
          { id: "IMI902", nombre: "Gestión Ambiental" },
          { id: "IMI903", nombre: "Gestión de Talento Humano" },
          { id: "IMI904", nombre: "Ingles VIII" },
          { id: "IMI905", nombre: "Manufactura Asistida por Computadora" },
          { id: "IMI906", nombre: "Proyecto Integrador" },
          { id: "IMI907", nombre: "Visualización y Control de Procesos" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "IMI1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    IMT: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "IMT101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "IMT102", nombre: "Desarrollo Humano y Valores"  },
          { id: "IMT103", nombre: "Fundamentos Matematicos"  },
          { id: "IMT104", nombre: "Ingles I" },
          { id: "IMT105", nombre: "Metodologia de la Programacion" },
          { id: "IMT106", nombre: "Metrologia" },
          { id: "IMT107", nombre: "Procesos Industriales" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "IMT201", nombre: "Calculo Diferencial" },
          { id: "IMT202", nombre: "Circuitos Electronicos"  },
          { id: "IMT203", nombre: "Dibujo para la Ingenieria" },
          { id: "IMT204", nombre: "Fisica" },
          { id: "IMT205", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "IMT206", nombre: "Ingles II" },
          { id: "IMT207", nombre: "Probabilidad y Estadistica" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "IMT301", nombre: "Cálculo Integral" },
          { id: "IMT302", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "IMT303", nombre: "Electronica Analogica y de Potencia" },
          { id: "IMT304", nombre: "Electrónica Digital" },
          { id: "IMT305", nombre: "Elementos Mecanicos" },
          { id: "IMT306", nombre: "Ingles III" },
          { id: "IMT307", nombre: "Proyecto Integrador I" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "IMT401", nombre: "Calculo de Varias Variables" },
          { id: "IMT402", nombre: "Estructura y Propiedades de los Materiales" },
          { id: "IMT403", nombre: "Eitca Profesional" },
          { id: "IMT404", nombre: "Ingles IV" },
          { id: "IMT405", nombre: "Instalaciones Eléctricas en Baja y Media Tensión" },
          { id: "IMT406", nombre: "Potencia Eléctrica" },
          { id: "IMT407", nombre: "Pruebas y Control de Máquinas Eléctricas" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "IMT501", nombre: "•Controladores y Actuadores Industriales" },
          { id: "IMT502", nombre: "Ecuaciones Diferenciales" },
          { id: "IMT503", nombre: "Ingles V" },
          { id: "IMT504", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "IMT505", nombre: "Proyecto Integrador II" },
          { id: "IMT506", nombre: "Subestaciones y Protecciones Eléctricas" },
          { id: "IMT507", nombre: "Sustentabilidad Energética" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "IMT601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "IMT701", nombre: "Análisis de Mecanismos" },
          { id: "IMT702", nombre: "Cinemática y Dinámica de Robots" },
          { id: "IMT703", nombre: "Habilidades Gerenciales" },
          { id: "IMT704", nombre: "Ingles VI" },
          { id: "IMT705", nombre: "Instrumentación Virtual" },
          { id: "IMT706", nombre: "Modelado y Simulación de Sistemas" },
          { id: "IMT707", nombre: "Sistemas Embebidos" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "IMT801", nombre: "Diseño Asistido por Computadora" },
          { id: "IMT802", nombre: "Diseño de Sistemas Mecatrónicos" },
          { id: "IMT803", nombre: "Diseño Mecánico" },
          { id: "IMT804", nombre: "Ingeniería de Control" },
          { id: "IMT805", nombre: "Ingles VII" },
          { id: "IMT806", nombre: "Programación de Robots Industriales" },
          { id: "IMT807", nombre: "Sistemas CAM CNC" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "IMT901", nombre: "Administración de Mantenimiento" },
          { id: "IMT902", nombre: "Control Avanzado" },
          { id: "IMT903", nombre: "Ingeniería Asistida por Computadora" },
          { id: "IMT904", nombre: "Ingles VIII" },
          { id: "IMT905", nombre: "Proyecto Integrador III" },
          { id: "IMT906", nombre: "Sistemas de Manufactura Flexible" },
          { id: "IMT907", nombre: "• Sistemas Eléctricos Industriales" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "IMT1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    LGDT: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "LGDT101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "LGDT102", nombre: "Desarrollo Humano y Valores"  },
          { id: "LGDT103", nombre: "Fundamentos de Economía",  },
          { id: "LGDT104", nombre: "Geografia y Patrimonio" },
          { id: "LGDT105", nombre: "Inglés I" },
          { id: "LGDT106", nombre: "Introducción al Turismo" },
          { id: "LGDT107", nombre: "Matemáticas Aplicadas en el Turismo" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "LGDT201", nombre: "Administracion" },
          { id: "LGDT202", nombre: "Habilidades Socioemocionales y Manejo de Conflictos"  },
          { id: "LGDT203", nombre: "Inglés II" },
          { id: "LGDT204", nombre: "Probabilidad y Estadística" },
          { id: "LGDT205", nombre: "Servicios de Alimentos y Bebidas" },
          { id: "LGDT206", nombre: "Servicios de Viaje y Transportación" },
          { id: "LGDT207", nombre: "Sustentabilidad en el Turismo" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "LGDT301", nombre: "Capital Humano" },
          { id: "LGDT302", nombre: "Turismhilidad Aplicada al Turismo" },
          { id: "LGDT303", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "LGDT304", nombre: "Gestión de Calidad" },
          { id: "LGDT305", nombre: "Hospitalidad y Alojamiento" },
          { id: "LGDT306", nombre: "Ingles III" },
          { id: "LGDT307", nombre: "Proyecto Integrador" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "LGDT401", nombre: "Diagnóstico Turístico" },
          { id: "LGDT402", nombre: "Etica Protesional" },
          { id: "LGDT403", nombre: "Inglés IV" },
          { id: "LGDT404", nombre: "Mercadotecnia y Comercialización" },
          { id: "LGDT405", nombre: "Operación de Servicios de Alimentos y Bebidas" },
          { id: "LGDT406", nombre: "Operación de Servicios de Hospedaje" },
          { id: "LGDT407", nombre: "Turismo Cultural y de Naturaleza" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "LGDT501", nombre: "Animación Turística y Sociocultural" },
          { id: "LGDT502", nombre: "Capacitación de Capital Humano" },
          { id: "LGDT503", nombre: "Diseño de Experiencias Turísticas" },
          { id: "LGDT504", nombre: "Inglés V" },
          { id: "LGDT505", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "LGDT506", nombre: "Plan de Negocios" },
          { id: "LGDT507", nombre: "Proyecto Integrador II" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "LGDT601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "LGDT701", nombre: "Análisis e Interpretación de Información para el Sector Turístico" },
          { id: "LGDT702", nombre: "Desarrollo Regional" },
          { id: "LGDT703", nombre: "Economía para el Turismo" },
          { id: "LGDT704", nombre: "Gestión y Planificación Turística" },
          { id: "LGDT705", nombre: "Habilidades Gerenciales" },
          { id: "LGDT706", nombre: "Inglés VI" },
          { id: "LGDT707", nombre: "Instrumentos para el Desarrollo Sustentable" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "LGDT801", nombre: "Calidad y Responsabilidad Social" },
          { id: "LGDT802", nombre: "Consultoria Turistica I" },
          { id: "LGDT803", nombre: "Desarrollo de Proyectos Emprendedores para el Turismo I" },
          { id: "LGDT804", nombre: "Finanzas para el Turismo" },
          { id: "LGDT805", nombre: "Ingles VII" },
          { id: "LGDT806", nombre: "Mercadotecnia Digital" },
          { id: "LGDT807", nombre: "Tendencias del Turismo" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "LGDT901", nombre: "Consultoría Turística II" },
          { id: "LGDT902", nombre: "Desarrollo de Proyectos Emprendedores para el Turismo II" },
          { id: "LGDT903", nombre: "Destinos Turísticos Inteligentes" },
          { id: "LGDT904", nombre: "Dirección y Logística de Eventos" },
          { id: "LGDT905", nombre: "Inglés VIII" },
          { id: "LGDT906", nombre: "Proyecto Integrador III" },
          { id: "LGDT907", nombre: "Seminario de Investigación Aplicada al Turismo" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "LGDT1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    LAD: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "LAD101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "LAD102", nombre: "Contabilidad I"  },
          { id: "LAD103", nombre: "Desarrollo Humano y Valores",  },
          { id: "LAD104", nombre: "Fundamentos de Administración" },
          { id: "LAD105", nombre: "Fundamentos Matemáticos" },
          { id: "LAD106", nombre: "Inglés l" },
          { id: "LAD107", nombre: "Marco Legal de las Organizaciones" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "LAD201", nombre: "Contabilidad II" },
          { id: "LAD202", nombre: "Derecho Corporativo"  },
          { id: "LAD203", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "LAD204", nombre: "Ingles II" },
          { id: "LAD205", nombre: "Microeconomía" },
          { id: "LAD206", nombre: "Planeación Estratégica" },
          { id: "LAD207", nombre: "Probabilidad y Estadística" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "LAD301", nombre: "Análisis Financiero" },
          { id: "LAD302", nombre: "Desarrollo del Pensamiento y Toma de Decisiones." },
          { id: "LAD303", nombre: "Fundamentos de Calidad" },
          { id: "LAD304", nombre: "Fundamentos de Mercadotecnia" },
          { id: "LAD305", nombre: "Inglés III" },
          { id: "LAD306", nombre: "Macroeconomia" },
          { id: "LAD307", nombre: "Proyecto Integrador I" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "LAD401", nombre: "Administración de Proyectos I" },
          { id: "LAD402", nombre: "Estudio de Mercado" },
          { id: "LAD403", nombre: "Estudio Técnico y Organizacional" },
          { id: "LAD404", nombre: "Etica Profesional" },
          { id: "LAD405", nombre: "Fundamentos de Sistemas de Producción" },
          { id: "LAD406", nombre: "Inglés IV" },
          { id: "LAD407", nombre: "Innovación y Emprendimiento" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "LAD501", nombre: "Administración de Proyectos II" },
          { id: "LAD502", nombre: "Diagnóstico Local y Regional" },
          { id: "LAD503", nombre: "Estudio Financiero" },
          { id: "LAD504", nombre: "Inglés V" },
          { id: "LAD505", nombre: "Evaluación Financiera de Proyectos" },
          { id: "LAD506", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "LAD507", nombre: "Proyecto Integrador II" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "LAD601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "LAD701", nombre: "Administración de la Producción" },
          { id: "LAD702", nombre: "Gestión del Talento Humano" },
          { id: "LAD703", nombre: "Habilidades Gerenciales" },
          { id: "LAD704", nombre: "Inglés VI" },
          { id: "LAD705", nombre: "Mercadotecnia Estratégica" },
          { id: "LAD706", nombre: "Proyectos de Innovación Sostenibles" },
          { id: "LAD707", nombre: "Tecnologías Aplicadas a los Negocios" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "LAD801", nombre: "Administración y Gestión de la Calidad" },
          { id: "LAD802", nombre: "Dirección Estratégica" },
          { id: "LAD803", nombre: "Evaluación en el Desempeño del Capital Humano" },
          { id: "LAD804", nombre: "Inglés VII" },
          { id: "LAD805", nombre: "Investigación de Operaciones" },
          { id: "LAD806", nombre: "Modelos de Negocios" },
          { id: "LAD807", nombre: "Sistemas de la Información Aplicados en la Organización" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "LAD901", nombre: "Comercio y Logística Internacional" },
          { id: "LAD902", nombre: "Consultoría Empresarial" },
          { id: "LAD903", nombre: "Desarrollo en Proyectos de Emprendimiento Social" },
          { id: "LAD904", nombre: "Finanzas Corporativas" },
          { id: "LAD905", nombre: "Gestión de la Propiedad Intelectual" },
          { id: "LAD906", nombre: "Inglés VIII" },
          { id: "LAD907", nombre: "Integrador III" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "LAD1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    ITIID: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "ITIID101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "ITIID102", nombre: "Inglés l"  },
          { id: "ITIID103", nombre: "Desarrollo Humano y Valores",  },
          { id: "ITIID104", nombre: "Fundamentos de Redes" },
          { id: "ITIID105", nombre: "Fundamentos de Programación" },
          { id: "ITIID106", nombre: "Fundamentos Matemáticos" },
          { id: "ITIID107", nombre: "Física" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "ITIID201", nombre: "Cálculo Diferencial" },
          { id: "ITIID202", nombre: "Probabilidad y Estadística"  },
          { id: "ITIID203", nombre: "Programación Estructurada" },
          { id: "ITIID204", nombre: "Conmutación y Enrutamiento de Redes" },
          { id: "ITIID205", nombre: "Sistemas Operativos" },
          { id: "ITIID206", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "ITIID207", nombre: "Inglés II" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "ITIID301", nombre: "Cálculo Integral" },
          { id: "ITIID302", nombre: "Inglés II!" },
          { id: "ITIID303", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "ITIID304", nombre: "Proyecto Integrador l" },
          { id: "ITIID305", nombre: "Bases de Datos" },
          { id: "ITIID306", nombre: "Programación Orientada a Objetos" },
          { id: "ITIID307", nombre: "Tópicos de Calidad para el Diseño de Software" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "ITIID401", nombre: "Análisis y Diseño de Software" },
          { id: "ITIID402", nombre: "Aplicaciones Web" },
          { id: "ITIID403", nombre: "Calculo de Varias Variables" },
          { id: "ITIID404", nombre: "Desarrollo de Aplicaciones Móviles" },
          { id: "ITIID405", nombre: "Estructura de Datos" },
          { id: "ITIID406", nombre: "Ética Profesional" },
          { id: "ITIID407", nombre: "Inglés IV" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "ITIID501", nombre: "Inglés V" },
          { id: "ITIID502", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "ITIID503", nombre: "Proyecto Integrador II" },
          { id: "ITIID504", nombre: "Aplicaciones Web Orientadas a Servicios" },
          { id: "ITIID505", nombre: "Bases se Datos Avanzadas" },
          { id: "ITIID506", nombre: "Ecuaciones Diferenciales" },
          { id: "ITIID507", nombre: "Estándares Y Métricas Para El Desarrollo De Software" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "ITIID601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "ITIID701", nombre: "Habilidades Gerenciales" },
          { id: "ITIID702", nombre: "Ingles VI" },
          { id: "ITIID703", nombre: "Etica y Legislación en Tecnologias de la Información" },
          { id: "ITIID704", nombre: "Formulación de Proyectos de Tecnologia" },
          { id: "ITIID705", nombre: "Fundamentos de Inteligencia Artificial" },
          { id: "ITIID706", nombre: "Bases de Datos en la Nube" },
          { id: "ITIID707", nombre: "Seguridad Informatica" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "ITIID801", nombre: "Ingles VII" },
          { id: "ITIID802", nombre: "Programación para Inteligencia Artificial" },
          { id: "ITIID803", nombre: "Electronica Digital" },
          { id: "ITIID804", nombre: "Gestion de Proyectos de Tecnología" },
          { id: "ITIID805", nombre: "Informatica Forense" },
          { id: "ITIID806", nombre: "Programación Móvil Avanzada" },
          { id: "ITIID807", nombre: "Programacion para Inteligencia Artificial" },
          { id: "ITIID808", nombre: "Administración de Servidores" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "ITIID901", nombre: "Ingles VIII" },
          { id: "ITIID902", nombre: "Frameworks para el Desarrollo Multiplataforma" },
          { id: "ITIID903", nombre: "Proyecto Integrador III" },
          { id: "ITIID904", nombre: "Ciencia de Datos" },
          { id: "ITIID905", nombre: "Evaluación de Proyectos de Tecnología" },
          { id: "ITIID906", nombre: "Internet de las Cosas" },
          { id: "ITIID907", nombre: "Tecnologias Disruptivas" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "ITIID1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    IC: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "IC101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "IC102", nombre: "Construcción I"  },
          { id: "IC103", nombre: "Desarrollo Humano y Valores",  },
          { id: "IC104", nombre: "Dibujo Arquitectonico y Estructural" },
          { id: "IC105", nombre: "Fundamentos Matemáticos" },
          { id: "IC106", nombre: "Ingles I" },
          { id: "IC107", nombre: "Ofimatica" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "IC201", nombre: "Cálculo Diferencial" },
          { id: "IC202", nombre: "Construcción II"  },
          { id: "IC203", nombre: "Física" },
          { id: "IC204", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "IC205", nombre: "Inglés II" },
          { id: "IC206", nombre: "Probabilidad y Estadística" },
          { id: "IC207", nombre: "Topografía I" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "IC301", nombre: "Análisis de Costos I" },
          { id: "IC302", nombre: "Cálculo Integral" },
          { id: "IC303", nombre: "Construcción III" },
          { id: "IC304", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "IC305", nombre: "Inglés III" },
          { id: "IC306", nombre: "Proyecto Integrador l" },
          { id: "IC307", nombre: "Topografía II" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "IC401", nombre: "Análisis de Costos II" },
          { id: "IC402", nombre: "Cálculo de Varias Variables" },
          { id: "IC403", nombre: "Control de Calidad de Materiales" },
          { id: "IC404", nombre: "Etica Profesional" },
          { id: "IC405", nombre: "Inglés IV" },
          { id: "IC406", nombre: "Mecánica de Suelos I" },
          { id: "IC407", nombre: "Resistencia de Materiales" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "IC501", nombre: "Administración y Supervisión de Obra" },
          { id: "IC502", nombre: "Análisis Estructural" },
          { id: "IC503", nombre: "Ecuaciones Diferenciales" },
          { id: "IC504", nombre: "Hidráulica" },
          { id: "IC505", nombre: "Inglés V" },
          { id: "IC506", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "IC507", nombre: "Proyecto Integrador II" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "IC601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "IC701", nombre: "Diseño de Elementos de Concreto y Mampostería" },
          { id: "IC702", nombre: "Habilidades Gerenciales" },
          { id: "IC703", nombre: "Hidráulica de Canales" },
          { id: "IC704", nombre: "Ingeniería de Costos" },
          { id: "IC705", nombre: "Inglés VI" },
          { id: "IC706", nombre: "Mecánica de Suelos II" },
          { id: "IC707", nombre: "MovilidadInfraestructura del Transporte" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "IC801", nombre: "Agua Potable y Alcantarillado" },
          { id: "IC802", nombre: "Cimentaciones" },
          { id: "IC803", nombre: "Diseño de Elementos de Acero" },
          { id: "IC804", nombre: "Diseño de Instalaciones en Edificaciones" },
          { id: "IC805", nombre: "Diseño de Pavimentos" },
          { id: "IC806", nombre: "Inglés VII" },
          { id: "IC807", nombre: "Planeación y Programación de Obra" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "IC901", nombre: "Inglés VIII" },
          { id: "IC902", nombre: "Licitaciones de Obra Pública" },
          { id: "IC903", nombre: "Obras Hidráulicas" },
          { id: "IC904", nombre: "Proyecto Estructural Asistido" },
          { id: "IC905", nombre: "Proyecto Geométrico de Caminos" },
          { id: "IC906", nombre: "Proyecto Integrador III" },
          { id: "IC907", nombre: "Temas Selectos de Ingeniería" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "IC1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    LINM: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "LINM101", nombre: "Comunicación y Habilidades Digitales" },
          { id: "LINM102", nombre: "Desarrollo Humano y Valores"  },
          { id: "LINM103", nombre: "Fundamentos de Administración y Entorno Empresarial",  },
          { id: "LINM104", nombre: "Informática" },
          { id: "LINM105", nombre: "Inglés I" },
          { id: "LINM106", nombre: "Matemáticas" },
          { id: "LINM107", nombre: "Mercadotecnia" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "LINM201", nombre: "Comportamiento del Consumidor" },
          { id: "LINM202", nombre: "Contabilidad para Negocios"  },
          { id: "LINM203", nombre: "Economia" },
          { id: "LINM204", nombre: "Estadistica I" },
          { id: "LINM205", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "LINM206", nombre: "Ingles II" },
          { id: "LINM207", nombre: "Planeación Estrategica" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "LINM301", nombre: "Estadística II" },
          { id: "LINM302", nombre: "Preciegias de Productoo y Precio" },
          { id: "LINM303", nombre: "Ingles III" },
          { id: "LINM304", nombre: "Legislación Comercial" },
          { id: "LINM305", nombre: "Proyecto Integrador 1" },
          { id: "LINM306", nombre: "Sistema de Investigación de Mercados I" },
          { id: "LINM307", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "LINM401", nombre: "Ética Profesional" },
          { id: "LINM402", nombre: "Inglés IV" },
          { id: "LINM403", nombre: "Administración del Tiempo" },
          { id: "LINM404", nombre: "Diseño Digital y Multimedia" },
          { id: "LINM405", nombre: "Gestión de Ventas" },
          { id: "LINM406", nombre: "Mezcla Promocional" },
          { id: "LINM407", nombre: "Sistema de Investigación de Mercados II" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "LINM501", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "LINM502", nombre: "Inglés V" },
          { id: "LINM503", nombre: "Logística y Distribución" },
          { id: "LINM504", nombre: "Mercadotecnia Digital I" },
          { id: "LINM505", nombre: "Mercadotecnia Estratégica" },
          { id: "LINM506", nombre: "Mercadotecnia de Servicios" },
          { id: "LINM507", nombre: "Proyecto Integrador II" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "LINM601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "LINM701", nombre: "Desarrollo de Nuevos Productos" },
          { id: "LINM702", nombre: "Estadística Aplicada a los Negocios" },
          { id: "LINM703", nombre: "Habilidades Gerenciales" },
          { id: "LINM704", nombre: "Mercadotecnia Internacional" },
          { id: "LINM705", nombre: "Planeación y Organización del Trabajo" },
          { id: "LINM706", nombre: "•Tendencias del Mercado y Consumidor Global" },
          { id: "LINM707", nombre: "Inglés VI" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "LINM801", nombre: "Administración de la Producción" },
          { id: "LINM802", nombre: "Gestión de la Calidad" },
          { id: "LINM803", nombre: "Gestión del Talento Humano" },
          { id: "LINM804", nombre: "Inglés VII" },
          { id: "LINM805", nombre: "Inteligencia de Mercados" },
          { id: "LINM806", nombre: "Inteligencia Financiera" },
          { id: "LINM807", nombre: "Mercadotecnia Digital II" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "LINM901", nombre: "Cadena de Suministro" },
          { id: "LINM902", nombre: "Comunicación Integral de la Mercadotecnia" },
          { id: "LINM903", nombre: "Cultura Emprendedora" },
          { id: "LINM904", nombre: "Derecho Corporativo" },
          { id: "LINM905", nombre: "Inglés VIII" },
          { id: "LINM906", nombre: "Plan de Negocios" },
          { id: "LINM907", nombre: "Proyecto Integrador III" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "LINM1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    LSP: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "LSP101", nombre: "Capacidad Física y Orden Cerrado I" },
          { id: "LSP102", nombre: "Comunicación y Habilidades Digitales"  },
          { id: "LSP103", nombre: "Desarrollo Humano y Valores",  },
          { id: "LSP104", nombre: "Informática Aplicada" },
          { id: "LSP105", nombre: "Inglés I" },
          { id: "LSP106", nombre: "Marco Juridico de la Función Policial" },
          { id: "LSP107", nombre: "Matemáticas Aplicadas" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "LSP201", nombre: "Capacidad Física y Orden Cerrado II" },
          { id: "LSP202", nombre: "Derechos Humanos"  },
          { id: "LSP203", nombre: "Estructura Geografica y Socioemocional" },
          { id: "LSP204", nombre: "Habilidades Socioemocionales y Manejo de Conflictos" },
          { id: "LSP205", nombre: "Inglés II" },
          { id: "LSP206", nombre: "Proximidad Social" },
          { id: "LSP207", nombre: "Tránsito y Vialidad" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "LSP301", nombre: "Acondicionamiento Físico I" },
          { id: "LSP302", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "LSP303", nombre: "Fundamentos de Criminalistica" },
          { id: "LSP304", nombre: "Inglés III" },
          { id: "LSP305", nombre: "Prevención del Delito" },
          { id: "LSP306", nombre: "Proyecto Integrador I" },
          { id: "LSP307", nombre: "Uso Diferenciado y Proporcional de la Fuerza" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "LSP401", nombre: "Armamento y Tiro Policial" },
          { id: "LSP402", nombre: "Ética Profesional" },
          { id: "LSP403", nombre: "Inglés IV" },
          { id: "LSP404", nombre: "Probabilidad y Estadística" },
          { id: "LSP405", nombre: "Protección Civil" },
          { id: "LSP406", nombre: "Psicología Aplicada a la Función Policial" },
          { id: "LSP407", nombre: "Técnicas y Tácticas Policiales I" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "LSP501", nombre: "Actuación Inicial en el Lugar de Intervención" },
          { id: "LSP502", nombre: "Inglés V" },
          { id: "LSP503", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "LSP504", nombre: "Métodos y Técnicas de Investigación" },
          { id: "LSP505", nombre: "Proyecto Integrador II" },
          { id: "LSP506", nombre: "Seguridad Penitenciaria" },
          { id: "LSP507", nombre: "Técnicas y Tácticas Policiales II" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "LSP601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "LSP701", nombre: "Acondicionamiento Físico II" },
          { id: "LSP702", nombre: "Administración para la Seguridad Pública" },
          { id: "LSP703", nombre: "Elementos Materiales Probatorios" },
          { id: "LSP704", nombre: "Habilidades Gerenciales" },
          { id: "LSP705", nombre: "Inglés VI" },
          { id: "LSP706", nombre: "Marco Normativo Aplicable a los Proyectos de Seguridad" },
          { id: "LSP707", nombre: "Protocolos Aplicables en Materia de Seguridad." },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "LSP801", nombre: "Acondicionamiento Físico III" },
          { id: "LSP802", nombre: "Gobierno y Política Criminal" },
          { id: "LSP803", nombre: "Inglés VII" },
          { id: "LSP804", nombre: "Inteligencia Operativa Policial" },
          { id: "LSP805", nombre: "Procesamiento del Lugar de Intervención" },
          { id: "LSP806", nombre: "Servicios Periciales y Forenses" },
          { id: "LSP807", nombre: "Técnicas de Entrevista" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "LSP901", nombre: "Acondicionamiento Físico IV" },
          { id: "LSP902", nombre: "Análisis del Fenómeno Delictivo" },
          { id: "LSP903", nombre: "Inglés VIII" },
          { id: "LSP904", nombre: "Integración de Carpetas de Investigación" },
          { id: "LSP905", nombre: "Pensamiento Innovador Aplicado a la Seguridad" },
          { id: "LSP906", nombre: "Proyecto Integrador III" },
          { id: "LSP907", nombre: "Sistema Penal Acusario" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "LSP1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    ILI: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "ILI101", nombre: "Comunicación Y Habilidades Digitales" },
          { id: "ILI102", nombre: "Economía Internacional"  },
          { id: "ILI103", nombre: "Estructura Organizacional",  },
          { id: "ILI104", nombre: "Fundamentos Matemáticos" },
          { id: "ILI105", nombre: "Inglés l" },
          { id: "ILI106", nombre: "Normatividad Aplicada al Comercio Exterior l" },
          { id: "ILI107", nombre: "Desarrollo Humano y Valores" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "ILI201", nombre: "Cálculo Diferencial" },
          { id: "ILI202", nombre: "Clasificación Arancelaria I"  },
          { id: "ILI203", nombre: "Fundamentos de Logística" },
          { id: "ILI204", nombre: "Habilidades Socioemocionales y Manejo De Conflictos" },
          { id: "ILI205", nombre: "Inglés II" },
          { id: "ILI206", nombre: "Mercadotecnia Internacional" },
          { id: "ILI207", nombre: "Normatividad Aplicada al Comercio Exterior II" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "ILI301", nombre: "Administración de Ventas" },
          { id: "ILI302", nombre: "Cálculo Integral" },
          { id: "ILI303", nombre: "Clasificación Arancelaria II" },
          { id: "ILI304", nombre: "Desarrollo del Pensamiento y Toma de Decisiones" },
          { id: "ILI305", nombre: "Fisica" },
          { id: "ILI306", nombre: "Inglés III" },
          { id: "ILI307", nombre: "Proyecto Integrador l" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "ILI401", nombre: "Cálculo de Varias Variables" },
          { id: "ILI402", nombre: "Clasificación Arancelaria III" },
          { id: "ILI403", nombre: "Ética Profesional" },
          { id: "ILI404", nombre: "Inglés IV" },
          { id: "ILI405", nombre: "Presupuestos Logísticos" },
          { id: "ILI406", nombre: "Probabilidad y Estadística" },
          { id: "ILI407", nombre: "Trámites Legales Aplicados" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "ILI501", nombre: "Contribuciones al Comercio Exterior" },
          { id: "ILI502", nombre: "Ecuaciones Diferenciales" },
          { id: "ILI503", nombre: "Inglés V" },
          { id: "ILI504", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "ILI505", nombre: "Pedimentos y su Legislación" },
          { id: "ILI506", nombre: "Proyecto Integrador II" },
          { id: "ILI507", nombre: "Seguimiento Logístico" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "ILI601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "ILI701", nombre: "Contabilidad Básica" },
          { id: "ILI702", nombre: "Envase, Empaque y Embalaje" },
          { id: "ILI703", nombre: "Gestión de Cadena de Suministro" },
          { id: "ILI704", nombre: "Habilidades Gerenciales" },
          { id: "ILI705", nombre: "Inglés VII" },
          { id: "ILI706", nombre: "Seguridad en la Cadena de Suministro" },
          { id: "ILI707", nombre: "Gestión de Operación Aduanera" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "ILI801", nombre: "Administración de Operaciones de Tráfico I" },
          { id: "ILI802", nombre: "Administración de Sistemas Logísticos" },
          { id: "ILI803", nombre: "Cumplimiento Normativo" },
          { id: "ILI804", nombre: "Finanzas Internacionales" },
          { id: "ILI805", nombre: "Inglés VII" },
          { id: "ILI806", nombre: "Investigación de Operaciones" },
          { id: "ILI807", nombre: "Metodología de la Investigación" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "ILI901", nombre: "Administración de Operaciones de Tráfico II" },
          { id: "ILI902", nombre: "Administración de Proyectos con Enfoque Sostenible" },
          { id: "ILI903", nombre: "Gestión de la Calidad en la Logística" },
          { id: "ILI904", nombre: "Logística de Transporte" },
          { id: "ILI905", nombre: "Proyecto Integrador III" },
          { id: "ILI906", nombre: "Infracciones y Sanciones y Medios de Defensa" },
          { id: "ILI907", nombre: "Inglés VIII" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "ILI1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
    LGT: [
      {
        id: 1,
        nombre: "Primero",
        materias: [
          { id: "LGT101", nombre: "Bases Culinarias I" },
          { id: "LGT102", nombre: "Comunicación y Habilidades Digitales"  },
          { id: "LGT103", nombre: "Desarrollo Humano y Valores",  },
          { id: "LGT104", nombre: "Inglés I" },
          { id: "LGT105", nombre: "Introducción a la Gastronomía" },
          { id: "LGT106", nombre: "Matemáticas Aplicadas a la Gastronomia" },
          { id: "LGT107", nombre: "Seguridad e Higiene en los Alimentos" },
        ]
      },
      {
        id: 2,
        nombre: "Segundo",
        materias: [
          { id: "LGT201", nombre: "Bases Culinarias II" },
          { id: "LGT202", nombre: "Estandarización de Platillos"  },
          { id: "LGT203", nombre: "Fundamentos de Nutrición" },
          { id: "LGT204", nombre: "Habilidades Socioemocionales y Manejo De Conflictos" },
          { id: "LGT205", nombre: "Inglés II" },
          { id: "LGT206", nombre: "Panadería" },
          { id: "LGT207", nombre: "Servicio de Alimentos y Bebidas" },
        ]
      },
      {
        id: 3,
        nombre: "Tercero",
        materias: [
          { id: "LGT301", nombre: "Bases Culinarias III" },
          { id: "LGT302", nombre: "Costos y Presupuestos" },
          { id: "LGT303", nombre: "Pensamiento y Toma de Decisiones" },
          { id: "LGT304", nombre: "Inglés III" },
          { id: "LGT305", nombre: "Operación de Bar" },
          { id: "LGT306", nombre: "Pasteleria" },
          { id: "LGT307", nombre: "Proyecto Integrador I" },
        ]
      },
      {
        id: 4,
        nombre: "Cuarto",
        materias: [
          { id: "LGT401", nombre: "Administración de Alimentos y Bebidas" },
          { id: "LGT402", nombre: "Ética Profesional" },
          { id: "LGT403", nombre: "Francés I" },
          { id: "LGT404", nombre: "Fundamentos de Vitivinicultura" },
          { id: "LGT405", nombre: "Inglés IV" },
          { id: "LGT406", nombre: "Mercadotecnia de Servicios Gastronómicos" },
          { id: "LGT407", nombre: "Reposteria" },
        ]
      },
      {
        id: 5,
        nombre: "Quinto",
        materias: [
          { id: "LGT501", nombre: "Conformación de Menús" },
          { id: "LGT502", nombre: "Francés II" },
          { id: "LGT503", nombre: "Inglés V" },
          { id: "LGT504", nombre: "Liderazgo de Equipos de Alto Desempeño" },
          { id: "LGT505", nombre: "Logística de Eventos" },
          { id: "LGT506", nombre: "Metodologia de la Investigación Aplicada a la Gastronomía" },
          { id: "LGT507", nombre: "Proyecto Integrador II" },
        ]
      },
      {
        id: 6,
        nombre: "Sexto",
        materias: [
          { id: "LGT601", nombre: "Estadia en el Sector Productivo" },
        ]
      },
      {
        id: 7,
        nombre: "Séptimo",
        materias: [
          { id: "LGT701", nombre: "Administración de Procesos Gastronomicos" },
          { id: "LGT702", nombre: "Cocina Asiática" },
          { id: "LGT703", nombre: "Cocina Mexicana I" },
          { id: "LGT704", nombre: "Contabilidad" },
          { id: "LGT705", nombre: "Habilidades Gerenciales" },
          { id: "LGT706", nombre: "Inglés VI" },
          { id: "LGT707", nombre: "Patrimonio Gastronómico de México" },
        ]
      },
      {
        id: 8,
        nombre: "Octavo",
        materias: [
          { id: "LGT801", nombre: "Análisis e Interpretación Financiera" },
          { id: "LGT802", nombre: "Bebidas Destiladas Mexicanas" },
          { id: "LGT803", nombre: "Cocina Europea" },
          { id: "LGT804", nombre: "Cocina Mexicana II" },
          { id: "LGT805", nombre: "Ingeniería de Menú" },
          { id: "LGT806", nombre: "Inglés VII" },
          { id: "LGT807", nombre: "Planeación y Administración del Trabajo" },
        ]
      },
      {
        id: 9,
        nombre: "Noveno",
        materias: [
          { id: "LGT901", nombre: "Cocina Contemporánea" },
          { id: "LGT902", nombre: "Desarrollo de Negocios Gastronómicos" },
          { id: "LGT903", nombre: "Gestión de la Calidad en Procesos Gastronómicos" },
          { id: "LGT904", nombre: "Inglés VIII" },
          { id: "LGT905", nombre: "Mixología" },
          { id: "LGT906", nombre: "Proyecto Integrador III" },
          { id: "LGT907", nombre: "Optativa Ahumados" },
          { id: "LGT908", nombre: "Optativa Cocina Regional" },
          { id: "LGT909", nombre: "Optativa Escultura Culinaria"},
          { id: "LGT910", nombre: "Optativa Vitivinicultura de las Regiones de México" },
        ]
      },
      {
        id: 10,
        nombre: "Décimo",
        materias: [
          { id: "LGT1001", nombre: "Estadia en el Sector Productivo" },
        ]
      }
    ],
  };

  // Encontrar la carrera basada en el parámetro de la URL
  useEffect(() => {
  if (label) {
    const carreraEncontrada = carreras.find(
      (c) => c.label.toLowerCase() === label.toLowerCase()
    );

      if (carreraEncontrada) {
        setCarreraSeleccionada(carreraEncontrada);
        
        const materiasCarrera = materiasPorCarrera[carreraEncontrada.label] || generarCuatrimestresPorDefecto();
        setCuatrimestres(materiasCarrera);
      } else {
        console.error("Carrera no encontrada");
      }
    }
  }, [nombre]);

  // Función para generar cuatrimestres por defecto si no hay datos específicos
  const generarCuatrimestresPorDefecto = (): Cuatrimestre[] => {
    const cuatrimestres: Cuatrimestre[] = [];
    
    for (let i = 1; i <= 10; i++) {
      cuatrimestres.push({
        id: i,
        nombre: i === 1 ? "Primero" : i === 2 ? "Segundo" : i === 3 ? "Tercero" : i === 4 ? "Cuarto" : i === 5 ? "Quinto" : 
                i === 6 ? "Sexto" : i === 7 ? "Séptimo" : i === 8 ? "Octavo" : i === 9 ? "Noveno" : "Décimo",
        materias: [
          { id: `M${i}01`, nombre: `Materia ${i}.1`},
          { id: `M${i}02`, nombre: `Materia ${i}.2`},
          { id: `M${i}03`, nombre: `Materia ${i}.3`},
          { id: `M${i}04`, nombre: `Optativa ${i}`},
        ]
      });
    }
    
    return cuatrimestres;
  };

  // Función para navegar al siguiente cuatrimestre
  const siguienteCuatrimestre = () => {
    if (cuatrimestreActivo < cuatrimestres.length) {
      setCuatrimestreActivo(cuatrimestreActivo + 1);
      scrollToCuatrimestre(cuatrimestreActivo + 1);
    }
  };

  // Función para navegar al cuatrimestre anterior
  const anteriorCuatrimestre = () => {
    if (cuatrimestreActivo > 1) {
      setCuatrimestreActivo(cuatrimestreActivo - 1);
      scrollToCuatrimestre(cuatrimestreActivo - 1);
    }
  };

  // Función para hacer scroll al cuatrimestre seleccionado en móvil
  const scrollToCuatrimestre = (id: number) => {
    if (cuatrimestresContainerRef.current && isMobile) {
      const container = cuatrimestresContainerRef.current;
      const button = container.querySelector(`button[data-id="${id}"]`) as HTMLElement;
      if (button) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;
        
        container.scrollTo({
          left: buttonLeft - (containerWidth / 2) + (buttonWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  };



  if (!carreraSeleccionada) {
    return (
      <div
        style={{
          padding: "3rem",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "#333" }}>Carrera no encontrada</h1>
        <a
          href="/"
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Volver a todas las carreras
        </a>
      </div>
    );
  }

  return (
    <section
      className="Carrera"
      style={{
        backgroundColor: carreraSeleccionada.color,
        color: "white",
        minHeight: "100vh",
        transition: "background-color 0.5s ease",
      }}
    >
      {/* Banner de la carrera */}
      <img
        src={carreraSeleccionada.banner}
        className="BannerImg"
        alt="Banner Carrera"
      />

      {/* Contenido principal */}
      <div
        className="CarreraContent"
        style={{
          backgroundColor: "white",
          color: "#333",
          padding: isMobile ? "2rem 1rem" : "3rem 2rem",
          borderRadius: "20px 20px 0 0",
          marginTop: "-20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Perfil del Egresado */}
          <div className="Seccion" style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: carreraSeleccionada.color,
                fontSize: "2rem",
                marginBottom: "1.5rem",
                borderBottom: `3px solid ${carreraSeleccionada.color}`,
                paddingBottom: "0.5rem",
                display: "inline-block",
              }}
            >
              👨‍🎓 Perfil del Egresado
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              {carreraSeleccionada.egreasdo}
            </p>
          </div>

          {/* Campo Laboral */}
          <div className="Seccion" style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: carreraSeleccionada.color,
                fontSize: "2rem",
                marginBottom: "1.5rem",
                borderBottom: `3px solid ${carreraSeleccionada.color}`,
                paddingBottom: "0.5rem",
                display: "inline-block",
              }}
            >
              🏢 Campo Laboral
            </h2>
            <div
              style={{
                backgroundColor: `${carreraSeleccionada.color}10`,
                padding: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <ul style={{ listStyle: "none" }}>
                {carreraSeleccionada.campoLaboral.map((campo, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "0.75rem 0",
                      borderBottom: index < carreraSeleccionada.campoLaboral.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                      textAlign: "left",
                    }}
                  >
                    <p style={{ fontWeight: "bold", margin: 0 }}>{campo}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plan De Estudios */}
          <div className="Seccion" style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
              <h2
                style={{
                  color: carreraSeleccionada.color,
                  fontSize: "2rem",
                  marginBottom: "0",
                  borderBottom: `3px solid ${carreraSeleccionada.color}`,
                  paddingBottom: "0.5rem",
                  display: "inline-block",
                }}
              >
                📚 Plan de Estudios
              </h2>
              
              {carreraSeleccionada.planEstudioPDF && (
                <a
                  href={carreraSeleccionada.planEstudioPDF}
                  download
                  style={{
                    backgroundColor: carreraSeleccionada.color,
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                  }}
                >
                  <i className="fas fa-download"></i>
                  Descargar PDF
                </a>
              )}
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                border: `1px solid ${carreraSeleccionada.color}20`,
              }}
            >
              <div
                style={{
                  backgroundColor: `${carreraSeleccionada.color}10`,
                  padding: "1.5rem",
                  borderBottom: `1px solid ${carreraSeleccionada.color}20`,
                }}
              >
                      <h1
        style={{
          color: carreraSeleccionada.color,
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        {cuatrimestreActivo <= 6 
          ? carreraSeleccionada.tsu 
          : carreraSeleccionada.nombreCompleto}
      </h1>
              </div>

              {/* Contenedor principal del plan */}
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "500px" }} >
                {/* Panel lateral con cuatrimestres */}
<div
  style={{
    width: isMobile ? "100%" : "250px",
    backgroundColor: `${carreraSeleccionada.color}08`,
    borderRight: isMobile ? "none" : `1px solid ${carreraSeleccionada.color}20`,
    overflowY: "scroll", // Cambia de "auto" a "scroll"
    maxHeight: isMobile ? "none" : "550px",
  }}
  className="lat"
>
                  <div style={{ padding: isMobile ? "1rem" : "1.5rem" }}>
                    <h3 style={{ color: carreraSeleccionada.color, marginBottom: "1rem", fontSize: isMobile ? "1.1rem" : "1.2rem" }}>
                      <i className="fas fa-calendar-alt" style={{ marginRight: "0.5rem" }}></i>
                      Cuatrimestres
                    </h3>
                    
                    {/* Versión móvil - Carrusel horizontal */}
                    {isMobile ? (
                      <div style={{ position: "relative" }}>
                        <div 
                          ref={cuatrimestresContainerRef}
                          style={{
                            display: "flex",
                            overflowX: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            padding: "0.5rem 0",
                            gap: "0.5rem",
                            scrollBehavior: "smooth",
                          }}
                        >
                          {cuatrimestres.map((cuatrimestre) => (
                            <button
                              key={cuatrimestre.id}
                              data-id={cuatrimestre.id}
                              onClick={() => setCuatrimestreActivo(cuatrimestre.id)}
                              style={{
                                padding: "0.75rem 1rem",
                                textAlign: "center",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                backgroundColor: cuatrimestreActivo === cuatrimestre.id ? carreraSeleccionada.color : "transparent",
                                color: cuatrimestreActivo === cuatrimestre.id ? "white" : "#333",
                                fontWeight: cuatrimestreActivo === cuatrimestre.id ? "bold" : "normal",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: "100px",
                                flexShrink: 0,
                                whiteSpace: "nowrap",
                              }}
                            >
                              <div
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backgroundColor: cuatrimestreActivo === cuatrimestre.id ? "white" : carreraSeleccionada.color,
                                  color: cuatrimestreActivo === cuatrimestre.id ? carreraSeleccionada.color : "white",
                                  fontWeight: "bold",
                                  fontSize: "0.8rem",
                                  marginBottom: "0.25rem",
                                }}
                              >
                                {cuatrimestre.id}
                              </div>
                              <span style={{ fontSize: "0.85rem" }}>{cuatrimestre.nombre}</span>
                            </button>
                          ))}
                        </div>
                        
                        {/* Flechas de navegación para móvil */}
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                          <button
                            onClick={anteriorCuatrimestre}
                            disabled={cuatrimestreActivo === 1}
                            style={{
                              padding: "0.5rem 1rem",
                              border: "none",
                              borderRadius: "6px",
                              backgroundColor: cuatrimestreActivo === 1 ? "#ccc" : carreraSeleccionada.color,
                              color: "white",
                              cursor: cuatrimestreActivo === 1 ? "not-allowed" : "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              fontSize: "0.85rem",
                            }}
                          >
                            <i className="fas fa-chevron-left"></i>
                            Anterior
                          </button>
                          
                          <div style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", fontWeight: "bold", color: carreraSeleccionada.color }}>
                            {cuatrimestreActivo} de {cuatrimestres.length}
                          </div>
                          
                          <button
                            onClick={siguienteCuatrimestre}
                            disabled={cuatrimestreActivo === cuatrimestres.length}
                            style={{
                              padding: "0.5rem 1rem",
                              border: "none",
                              borderRadius: "6px",
                              backgroundColor: cuatrimestreActivo === cuatrimestres.length ? "#ccc" : carreraSeleccionada.color,
                              color: "white",
                              cursor: cuatrimestreActivo === cuatrimestres.length ? "not-allowed" : "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              fontSize: "0.85rem",
                            }}
                          >
                            Siguiente
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Versión escritorio - Lista vertical */
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {cuatrimestres.map((cuatrimestre) => (
                          <button
                            key={cuatrimestre.id}
                            onClick={() => setCuatrimestreActivo(cuatrimestre.id)}
                            style={{
                              padding: "1rem",
                              textAlign: "left",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              backgroundColor: cuatrimestreActivo === cuatrimestre.id ? carreraSeleccionada.color : "transparent",
                              color: cuatrimestreActivo === cuatrimestre.id ? "white" : "#333",
                              fontWeight: cuatrimestreActivo === cuatrimestre.id ? "bold" : "normal",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.75rem",
                            }}
                            onMouseEnter={(e) => {
                              if (cuatrimestreActivo !== cuatrimestre.id) {
                                e.currentTarget.style.backgroundColor = `${carreraSeleccionada.color}15`;
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (cuatrimestreActivo !== cuatrimestre.id) {
                                e.currentTarget.style.backgroundColor = "transparent";
                              }
                            }}
                          >
                            <div
                              style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: cuatrimestreActivo === cuatrimestre.id ? "white" : carreraSeleccionada.color,
                                color: cuatrimestreActivo === cuatrimestre.id ? carreraSeleccionada.color : "white",
                                fontWeight: "bold",
                                fontSize: "0.9rem",
                              }}
                            >
                              {cuatrimestre.id}
                            </div>
                            <span>{cuatrimestre.nombre}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Panel de contenido con las materias */}
                <div style={{ flex: 1, padding: isMobile ? "1.5rem" : "2rem" }}>
                  {cuatrimestres.length > 0 ? (
                    <>
                      <div style={{ marginBottom: "1.5rem" }}>
                        <h3 style={{ fontSize: isMobile ? "1.3rem" : "1.5rem", color: carreraSeleccionada.color, marginBottom: "0.5rem" }}>
                          {cuatrimestres.find(c => c.id === cuatrimestreActivo)?.nombre} Cuatrimestre
                        </h3>
                        <p style={{ color: "#666", fontSize: "0.95rem" }}>
                          {cuatrimestres.find(c => c.id === cuatrimestreActivo)?.materias.length} materias en este cuatrimestre
                        </p>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        {cuatrimestres.find(c => c.id === cuatrimestreActivo)?.materias.map((materia) => (
                          <div
                            key={materia.id}
                            style={{
                              backgroundColor: "#f9f9f9",
                              borderRadius: "10px",
                              padding: "1.5rem",
                              borderLeft: `4px solid ${carreraSeleccionada.color}`,
                              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-5px)";
                              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                              <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333" }}>{materia.nombre}</h4>
                            </div>
                            
                            {/*<div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.5rem" }}>
                              <strong>Código:</strong> {materia.id}
                            </div> */}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div style={{ textAlign: "center", padding: "3rem", color: "#666" }}>
                      <i className="fas fa-book" style={{ fontSize: "3rem", marginBottom: "1rem", color: "#ddd" }}></i>
                      <p>No hay información de materias disponible para esta carrera.</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Nota al pie */}
              <div
                style={{
                  padding: "1rem 1.5rem",
                  backgroundColor: "#f8f9fa",
                  borderTop: `1px solid ${carreraSeleccionada.color}20`,
                  fontSize: "0.85rem",
                  color: "#666",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <i className="fas fa-info-circle" style={{ fontSize: "1rem" }}></i>
                  <span>{isMobile ? "Desliza o usa las flechas para navegar" : "Haz clic en un cuatrimestre para ver sus materias"}</span>
                </div>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>

                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<p 
  className="buttonFace"
  style={{ 
    backgroundColor: carreraSeleccionada.color, 
  }}
>
  <a 
    href={carreraSeleccionada.facebook} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="enlaceFace"
  > 
    <img 
      src={logoFace} 
      alt="Logo Facebook" 
      className="logoFace"
    /> 
    {carreraSeleccionada.label2}
  </a>
</p>

<h2 style={{marginTop: "40px", textAlign: "center", fontFamily: "Arial", color: carreraSeleccionada.color }}>
  311 211 98 00 EXT {carreraSeleccionada.extension}
</h2>

        {/* Botón para volver */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "2px solid #eee",
          }}
        >
          <a
            href="/OfertaEducativa"
            style={{
              backgroundColor: carreraSeleccionada.color,
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ← Volver a todas las carreras
          </a>
        </div>
      </div>
    </section>
  );
}

export default Carrera;