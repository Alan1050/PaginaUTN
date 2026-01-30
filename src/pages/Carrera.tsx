import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Carrera.css";
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
import Banner from "../assets/banner/IAL-1.png";
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

//Planes de estudio PDF
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

// Interfaz para los datos de carrera
interface CarreraInfo {
  id: number;
  src: string;
  alt: string;
  label: string;
  color: string;
  nombreCompleto: string;
  descripcion: string;
  duracion: string;
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
      descripcion: "",
      duracion: "",
      egreasdo: "",
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
      descripcion: "",
      duracion: "",
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
      nombreCompleto:
        "Técnico Superior Universitario en Inteligencia Artificial",
      descripcion: "",
      duracion: "",
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
      nombreCompleto: "Ingenieria en Mantenimiento Industrial",
      descripcion: "",
      duracion: "",
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
      nombreCompleto: "Ingenieria en Mecatronica",
      descripcion: "",
      duracion: "",
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
      descripcion: "",
      duracion: "",
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
      descripcion: "",
      duracion: "",
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
      nombreCompleto: "Licenciatura en Psicología",
      descripcion: "",
      duracion: "",
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
      nombreCompleto:
        "Ingenieria en Tecnologias de la Información e Innovación Digital",
      descripcion: "",
      duracion: "",
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
      nombreCompleto: "Ingenieria Civil",
      descripcion: "",
      duracion: "",
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
      color: "#2a2c61",
      nombreCompleto:
        "Licenciatura en Negocios y Mercadotecnia",
      descripcion: "",
      duracion: "",
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
      color: "#413f40",
      nombreCompleto: "Licenciatura en Seguridad Pública",
      descripcion: "",
      duracion: "",
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
      descripcion: "",
      duracion: "",
      egreasdo: "",
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
      descripcion: "",
      duracion: "",
      egreasdo: "",
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
  };

  // Encontrar la carrera basada en el parámetro de la URL
  useEffect(() => {
    if (nombre) {
      const carreraEncontrada = carreras.find(
        (c) =>
          c.nombreCompleto.toLowerCase().includes(nombre.toLowerCase()) ||
          c.label.toLowerCase() === nombre.toLowerCase(),
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
        src={Banner}
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
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "500px" }}>
                {/* Panel lateral con cuatrimestres */}
                <div
                  style={{
                    width: isMobile ? "100%" : "250px",
                    backgroundColor: `${carreraSeleccionada.color}08`,
                    borderRight: isMobile ? "none" : `1px solid ${carreraSeleccionada.color}20`,
                    overflowY: "auto",
                    maxHeight: isMobile ? "none" : "550px",
                  }}
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
            href="/"
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