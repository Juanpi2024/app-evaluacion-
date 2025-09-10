
import { CourseModule } from '../types';
import { BookOpenIcon, ClipboardCheckIcon, ScaleIcon, ArrowUpIcon, AcademicCapIcon } from '../components/IconComponents';

export const COURSE_DATA: CourseModule[] = [
  {
    id: 1,
    title: "Fundamentos y Modalidades de Enseñanza",
    icon: BookOpenIcon,
    content: [
      "El Reglamento del CEIA \"Juanita Zúñiga Fuentes\" establece las normas de evaluación, calificación y promoción escolar a partir del año 2024. Es responsabilidad compartida de la Unidad Técnica Pedagógica, profesores y estudiantes conocer y aplicar estas normas.",
      "La Dirección del centro tiene facultades clave, como eximir del requisito de asistencia para la promoción (hasta un 80% mínimo) por motivos justificados y resolver situaciones especiales de evaluación de estudiantes que deban ausentarse por razones laborales, familiares u otras.",
      "El centro ofrece diversas modalidades de enseñanza para adultos. La Educación Básica (7° y 8°) admite estudiantes desde los 15 años. La Educación Media, tanto en la modalidad Técnico Profesional como Humanista-Científica, requiere una edad mínima de 17 años para el ingreso."
    ],
    questions: [
      {
        questionText: "¿Cuál es la edad mínima de ingreso para la Educación Media Técnico Profesional?",
        options: ["15 años", "16 años", "17 años", "18 años"],
        correctAnswerIndex: 2,
        explanation: "Según el reglamento, tanto la modalidad Técnico Profesional como la Humanista-Científica requieren una edad de ingreso de 17 años, cumplidos al 30 de junio del año lectivo."
      },
      {
        questionText: "¿Quién es responsable de dar a conocer las normas de evaluación a los estudiantes?",
        options: ["Solamente el Director", "La Unidad Técnica Pedagógica a través de los profesores jefes", "Los propios estudiantes", "El Ministerio de Educación"],
        correctAnswerIndex: 1,
        explanation: "El documento indica que será responsabilidad de la Unidad Técnica Pedagógica, a través de los profesores jefes, dar a conocer las normas a los estudiantes."
      },
      {
        questionText: "El porcentaje mínimo de asistencia para ser promovido, que la Dirección puede eximir en casos justificados, es del:",
        options: ["70%", "80%", "85%", "90%"],
        correctAnswerIndex: 1,
        explanation: "El reglamento cita el decreto que establece un 80% de asistencia, y faculta a la Dirección a eximir de este requisito en casos calificados."
      }
    ]
  },
  {
    id: 2,
    title: "El Proceso de Evaluación",
    icon: ClipboardCheckIcon,
    content: [
      "El proceso educativo se estructura en dos semestres y utiliza varios tipos de evaluación. Se prohíbe estrictamente el uso de corrector en el libro de clases; los errores deben ser tarjados y firmados por el profesor.",
      "Evaluación Diagnóstica: Se realiza al inicio del año escolar para determinar los conocimientos previos de los alumnos. No se califica, pero sus resultados son clave para planificar el proceso de enseñanza.",
      "Evaluación Formativa: Es un proceso constante que busca retroalimentar el aprendizaje. Incluye pautas de observación y autoevaluaciones. Al final de una unidad, el resultado de este proceso se puede transformar en una calificación coeficiente uno.",
      "Evaluación Acumulativa (Sumativa): Mide el grado de logro de los objetivos al final de una unidad. Estas calificaciones son coeficiente uno y utilizan la escala numérica de 1.0 a 7.0. Puede incluir pruebas escritas o trabajos de investigación."
    ],
    questions: [
      {
        questionText: "¿Qué tipo de evaluación se realiza al inicio del año escolar para nivelar a los alumnos?",
        options: ["Sumativa", "Formativa", "Diagnóstica", "Especial"],
        correctAnswerIndex: 2,
        explanation: "La evaluación diagnóstica se efectúa en las primeras semanas para determinar la presencia o ausencia de conocimientos requeridos e iniciar un proceso de nivelación."
      },
      {
        questionText: "¿Qué se debe hacer en caso de cometer un error al registrar una nota en el libro de clases?",
        options: ["Usar corrector líquido", "Borrar y reescribir", "Tarjar el error con una línea y firmar", "Dejar el error como está"],
        correctAnswerIndex: 2,
        explanation: "El reglamento prohíbe el uso de corrector. El procedimiento correcto es tarjar el error con una línea diagonal, anotar la corrección y que el profesor responsable firme."
      },
      {
        questionText: "La evaluación que pone énfasis en la evaluación de productos al término de una unidad y usa la escala de 1.0 a 7.0 es la:",
        options: ["Diagnóstica", "Formativa", "Acumulativa (Sumativa)", "Diferenciada"],
        correctAnswerIndex: 2,
        explanation: "La Evaluación Acumulativa o Sumativa tiene como objetivo determinar el grado de logro de los objetivos terminales y asignar una calificación numérica."
      }
    ]
  },
  {
    id: 3,
    title: "Calificaciones y Condiciones",
    icon: ScaleIcon,
    content: [
      "Todas las asignaturas se califican usando una escala numérica de 1.0 a 7.0, con un decimal. La nota mínima de aprobación es 4.0, con un nivel de exigencia del 50%.",
      "Tipos de Calificaciones: Las 'Parciales' son todas las notas obtenidas durante el semestre. Las 'Semestrales' son el promedio de las parciales. Las 'Finales' son el promedio de las dos notas semestrales. El 'Promedio General' es el promedio de todas las calificaciones finales.",
      "La inasistencia a una evaluación programada obliga al alumno a rendirla en la clase siguiente con un 60% de exigencia y nota máxima 6.0. Si falta a esta segunda oportunidad, la rendirá con 70% de exigencia y nota máxima 4.0.",
      "Si un alumno es sorprendido usando medios de apoyo no permitidos (copiando), se le aplicará un nuevo instrumento con 70% de exigencia. La nota máxima que podrá obtener en esa evaluación será un 4.0."
    ],
    questions: [
      {
        questionText: "¿Cuál es la nota mínima de aprobación y con qué nivel de exigencia?",
        options: ["5.0 con 60% de exigencia", "4.0 con 60% de exigencia", "4.0 con 50% de exigencia", "5.0 con 50% de exigencia"],
        correctAnswerIndex: 2,
        explanation: "El artículo 5° establece que la aprobación mínima es un 4.0, con un nivel de exigencia de un 50%."
      },
      {
        questionText: "Si un estudiante falta a una prueba programada y no justifica, ¿qué sucede en su segunda oportunidad para rendirla?",
        options: ["La rinde con 50% de exigencia y nota 7.0", "La rinde con 60% de exigencia y nota 6.0", "No tiene segunda oportunidad", "La rinde con 70% de exigencia y nota 4.0"],
        correctAnswerIndex: 3,
        explanation: "La primera oportunidad es con 60% de exigencia y nota máxima 6.0. La segunda oportunidad (si falta a la primera) es en la clase subsiguiente con un 70% de exigencia y nota máxima 4.0."
      },
      {
        questionText: "¿Cuál es la máxima calificación que puede obtener un alumno sorprendido copiando en una evaluación?",
        options: ["1.0", "7.0", "5.0", "4.0"],
        correctAnswerIndex: 3,
        explanation: "Al alumno sorprendido copiando se le aplica un nuevo instrumento con 70% de exigencia, pero la nota máxima que se registrará en el libro de clases será un 4.0, independientemente de su desempeño."
      }
    ]
  },
  {
    id: 4,
    title: "Promoción y Repitencia",
    icon: ArrowUpIcon,
    content: [
      "Para ser promovidos, los alumnos deben cumplir con dos requisitos fundamentales: asistencia y rendimiento. La asistencia mínima requerida es del 80% del total de clases.",
      "En Educación Básica, un alumno aprueba si aprueba todos los subsectores. Puede ser promovido reprobando un subsector (que no sea Lenguaje o Matemática) si su promedio general es 4.5 o superior. Si reprueba Lenguaje o Matemática, su promedio debe ser 5.5 o superior.",
      "En Educación Media (Científico-Humanista y Técnico Profesional), la regla es similar: se puede promover con un subsector reprobado (que no sea Lenguaje o Matemática) si el promedio general es 4.5 o más. Si el subsector reprobado es Lenguaje o Matemática, el promedio exigido es 5.0 o superior.",
      "Repetirán el curso los alumnos que no cumplan con los requisitos de promoción. Aquellos que reprueben hasta dos asignaturas pueden optar a una evaluación especial al final del año, siempre que su promedio en la asignatura reprobada sea 3.5 o superior."
    ],
    questions: [
      {
        questionText: "En Educación Media, si un alumno reprueba Educación Física pero su promedio general es 4.7, ¿es promovido?",
        options: ["No, debe aprobar todo", "Sí, porque su promedio es sobre 4.5 y la asignatura no es crítica", "No, necesita un promedio de 5.0", "Sí, sin importar el promedio"],
        correctAnswerIndex: 1,
        explanation: "Para Ed. Media, se puede promover con un subsector reprobado que no sea Lenguaje o Matemática si el promedio general (incluida la nota reprobada) es igual o superior a 4.5."
      },
      {
        questionText: "Un alumno de Educación Básica reprueba Matemática con un 3.8. ¿Qué promedio general necesita como mínimo para ser promovido?",
        options: ["4.5", "5.0", "5.5", "No puede ser promovido"],
        correctAnswerIndex: 2,
        explanation: "En Educación Básica, si el subsector reprobado es Lengua Castellana y Comunicación o Educación Matemática, el promedio exigido es igual o superior a 5.5."
      },
      {
        questionText: "¿Cuál es la condición para que un alumno que reprobó dos asignaturas pueda dar una evaluación especial al final del año?",
        options: ["Tener un promedio general sobre 6.0", "Tener un promedio anual en la asignatura reprobada igual o superior a 3.5", "Tener 100% de asistencia", "Ser autorizado por el apoderado"],
        correctAnswerIndex: 1,
        explanation: "El Art. 10° indica que para optar a la evaluación especial, el promedio anual en la asignatura reprobada debe ser igual o superior a 3.5."
      }
    ]
  },
  {
    id: 5,
    title: "Titulación Técnico-Profesional",
    icon: AcademicCapIcon,
    content: [
      "Los alumnos egresados de Educación Media Técnico Profesional deben realizar un proceso de titulación para obtener su título de Técnico de Nivel Medio. Este proceso se inicia con la matrícula como alumno regular.",
      "El requisito central es la Práctica Profesional. Para aprobarla, el estudiante debe completar el 100% de las horas (mínimo 360 horas cronológicas), ejecutar satisfactoriamente las tareas y recibir un informe de práctica aprobado tanto por el maestro guía de la empresa como por el profesor tutor del CEIA.",
      "Los estudiantes están protegidos por el seguro escolar (Ley N°16.744) durante su práctica. Además, tienen derechos como contar con un profesor tutor y postular a la beca técnico profesional de JUNAEB, y obligaciones como cumplir las normas de la empresa y usar elementos de protección personal.",
      "La evaluación de la práctica se divide en dos partes, cada una con un 50% de ponderación: la Supervisión del Profesor Tutor y la Evaluación del Maestro Guía de la empresa. El proceso de titulación debe iniciarse en un plazo máximo de 3 años desde el egreso."
    ],
    questions: [
      {
        questionText: "¿Cuál es la duración mínima en horas de la práctica profesional?",
        options: ["180 horas", "720 horas", "360 horas", "No hay mínimo"],
        correctAnswerIndex: 2,
        explanation: "El Art. 16° establece que la práctica profesional tendrá una duración de 360 horas en todas las especialidades."
      },
      {
        questionText: "¿Cómo se pondera la nota final de la práctica profesional?",
        options: ["100% Profesor Tutor", "100% Maestro Guía", "50% Profesor Tutor y 50% Maestro Guía", "70% Maestro Guía y 30% Profesor Tutor"],
        correctAnswerIndex: 2,
        explanation: "Según el Art. 27°, la nota final se pondera con un 50% de la supervisión del Profesor(a) Tutor y un 50% de la evaluación del Maestro Guía o Empresario."
      },
      {
        questionText: "¿Cuál es el plazo máximo para iniciar el proceso de titulación después de egresar?",
        options: ["1 año", "2 años", "3 años", "No hay plazo"],
        correctAnswerIndex: 2,
        explanation: "El Art. 35° especifica que el proceso de titulación debe iniciarse dentro de un plazo máximo de 3 años contados desde la fecha de egreso del alumno."
      }
    ]
  }
];
