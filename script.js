// ============================================================
// SIA CPEM 32 - SCRIPT PRINCIPAL CON AUTENTICACIÓN Y ROLES
// ============================================================

// ============================================================
// 1. CONSTANTES Y VARIABLES GLOBALES
// ============================================================

const URL_WEB_APP = 'https://script.google.com/macros/s/AKfycbyhoBBLl995zFUqmSe7Yc7B9_ICWOr4OGKn3vwf0kjpXUDOXNZxuhb2UXLeYlu4onz6NQ/exec';

const escalaConceptos = ["Excelente", "Muy Bien", "Bien", "Regular", "Ausente", "Sin Calificar"];
const criteriosCualitativos = ["Interpreta", "Relaciona", "Aplica", "Participacion", "Autonomia", "Realizacion de TP", "Cumplimiento AEC"];
const opcionesCualitativas = ["-", "Siempre", "Frecuentemente", "A veces", "Nunca", "Sin referencia"];
const frasesPorMateria = {
    "MATEMATICA": ["Resuelve problemas con autonomia", "Requiere reforzar operaciones basicas", "Buen razonamiento logico"],
    "ANALISIS": ["Deriva e integra correctamente", "Aplica conceptos a funciones complejas", "Requiere practica en limites"],
    "LENGUA": ["Excelente analisis de textos", "Debe mejorar la ortografia", "Participa activamente en clase"],
    "LITERATURA": ["Profundo analisis literario", "Relaciona autores y contextos", "Buena expresion escrita"],
    "DEFAULT": ["Cumple con los objetivos", "En proceso de mejora", "Faltas reiteradas"]
};
const nombresRoles = {
    'admin': 'Administrador',
    'jefe_preceptor': 'Jefe de Preceptor',
    'sub_jefe_preceptor': 'Sub Jefe de Preceptor',
    'preceptor': 'Preceptor',
    'docente': 'Docente'
};

let tabActual = 'espacios';
let mainTabActual = 'calificaciones';
let memoriaGlobal = {};
let datosSheetsCargados = false;
let sesionActual = null; // { correo, rol, materias_permitidas }
let editandoCorreo = ''; // Para modales de edicion
let llavesGuardadas = new Set(); // Llaves (turno-curso-materia-periodo) que ya fueron guardadas exitosamente en la BD

// ============================================================
// ESTRUCTURA DE MATERIAS POR CURSO (para libros escolares)
// ============================================================

const materiasPorCursoLibro = {
    "1 A": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 B": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 C": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 D": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 E": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 A": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 B": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 C": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 D": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "3 A": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA TECNOLOGIA", "COMUNICACION Y MEDIOS", "INVESTIGACION DE LAS ORIENTACIONES"],
    "3 B": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA TECNOLOGIA", "COMUNICACION Y MEDIOS", "INVESTIGACION DE LAS ORIENTACIONES"],
    "3 C": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA TECNOLOGIA", "COMUNICACION Y MEDIOS", "INVESTIGACION DE LAS ORIENTACIONES"],
    "4 A": ["HISTORIA", "GEOGRAFIA", "SOCIEDADES POLITICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA", "ARTE", "LENGUAS OTRAS", "EDUCACION FISICA INTEGRAL", "MATEMATICA", "INFORMATICA", "CS. BIOLOGICAS", "QUIMICA", "FISICA", "ESTADOS, POLITICAS Y LEGISLACIONES", "SISTEMA DE INFORMACION CONTABLE", "ECONOMIAS", "ORGANIZACIONES Y ADMINISTRACIONES", "INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
    "4 B": ["HISTORIA", "GEOGRAFIA", "SOCIEDADES, POLITICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA", "ARTE", "LENGUAS OTRAS", "EDUCACION FISICA INTEGRAL", "MATEMATICA", "INFORMATICA", "CS. BIOLOGICAS", "QUIMICA", "FISICA", "ESTADOS, POLITICAS Y LEGISLACIONES", "SISTEMA DE INFORMACION CONTABLE", "ECONOMIAS", "ORGANIZACIONES Y ADMINISTRACIONES", "INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
    "4 C": ["HISTORIA", "GEOGRAFIA", "SOCIEDADES, POLITICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA", "ARTE", "LENGUAS OTRAS", "EDUCACION FISICA INTEGRAL", "MATEMATICA", "INFORMATICA", "CS. BIOLOGICAS", "QUIMICA", "FISICA", "FILOSOFIA DE LAS CIENCIAS", "GEOPOLITICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGIAS DE LAS ARTES Y LAS ESTETICA", "COMUNICACION, DISCURSO Y PRODUCCION DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
    "5 A": ["IDIOMA EXTRANJERO INGLES O FRANCES", "MATEMATICA FINANCIERA", "MERCEOLOGIA", "GEOGRAFIA", "DERECHO COMERCIAL", "DERECHO ADMINISTRATIVO", "ORGANIZACION DEL COMERCIO Y DE LA EMPRESA", "ECONOMIA POLITICA", "CONTABILIDAD", "ESTENOGRAFIA", "MECANOGRAFIA", "EDUCACION FISICA", "INFORMATICA V"],
    "5 B": ["IDIOMA EXTRANJERO INGLES O FRANCES", "MATEMATICA FINANCIERA", "MERCEOLOGIA", "GEOGRAFIA", "DERECHO COMERCIAL", "DERECHO ADMINISTRATIVO", "ORGANIZACION DEL COMERCIO Y DE LA EMPRESA", "ECONOMIA POLITICA", "CONTABILIDAD", "ESTENOGRAFIA", "MECANOGRAFIA", "EDUCACION FISICA", "INFORMATICA V"],
    "5 C": ["LITERATURA", "IDIOMA EXTRANJERO", "MATEMATICA", "FISICA", "QUIMICA", "CIENCIAS BIOLOGICAS", "GEOGRAFIA ARGENTINA", "HISTORIA", "INSTRUCCION CIVICA", "FILOSOFIA", "EDUCACION FISICA", "INFORMATICA V"]
};

// Mapeo de areas para 1°-3° año (agrupacion de materias por area)
const areasPorMateria = {
    "HISTORIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "GEOGRAFIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "ECONOMIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "CONSTRUCCION DE CIUDADANIAS": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "FILOSOFIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "LENGUA": "LENGUAJES Y PRODUCCION CULTURAL",
    "LITERATURA": "LENGUAJES Y PRODUCCION CULTURAL",
    "LENGUAS OTRAS": "LENGUAJES Y PRODUCCION CULTURAL",
    "TEATRO": "LENGUAJES Y PRODUCCION CULTURAL",
    "DANZA": "LENGUAJES Y PRODUCCION CULTURAL",
    "MUSICA": "LENGUAJES Y PRODUCCION CULTURAL",
    "ARTES VISUALES": "LENGUAJES Y PRODUCCION CULTURAL",
    "LENGUA Y LITERATURA": "LENGUAJES Y PRODUCCION CULTURAL",
    "ARTE": "LENGUAJES Y PRODUCCION CULTURAL",
    "LENGUAS PREEXISTENTES": "LENGUAJES Y PRODUCCION CULTURAL",
    "BIOLOGIA": "CIENCIAS NATURALES",
    "FISICO QUIMICA": "CIENCIAS NATURALES",
    "QUIMICA": "CIENCIAS NATURALES",
    "FISICA": "CIENCIAS NATURALES",
    "CS. BIOLOGICAS": "CIENCIAS NATURALES",
    "CIENCIAS BIOLOGICAS": "CIENCIAS NATURALES",
    "MATEMATICA": "MATEMATICA E INFORMATICA",
    "INFORMATICA": "MATEMATICA E INFORMATICA",
    "MATEMATICA E INFORMATICA": "MATEMATICA E INFORMATICA",
    "INFORMATICA V": "MATEMATICA E INFORMATICA",
    "MATEMATICA FINANCIERA": "MATEMATICA E INFORMATICA",
    "EDUCACION FISICA INTEGRAL": "EDUCACION FISICA INTEGRAL",
    "EDUCACION FISICA": "EDUCACION FISICA INTEGRAL",
    "INTERAREA EDUCACION SEXUAL INTEGRAL": "INTERAREA EDUCACION SEXUAL INTEGRAL",
    "INTERAREA TECNOLOGIA": "INTERAREA TECNOLOGIA",
    "COMUNICACION Y MEDIOS": "COMUNICACION Y MEDIOS",
    "INVESTIGACION DE LAS ORIENTACIONES": "INVESTIGACION DE LAS ORIENTACIONES"
};

// ============================================================
// 2. BASE DE DATOS DE ALUMNOS
// ============================================================

const baseDeDatosAlumnos = {
    "MAÑANA": {
        "1 A": [{ "dni": "1", "nombre": "CASTRO GORJON, Isabella" },
                { "dni": "2", "nombre": "CASTRO RAMOS, Kiara Nicole" },
                { "dni": "3", "nombre": "CURIPE, Huilen Juliana" },
                { "dni": "4", "nombre": "DE LA FUENTE Ian Jesus Julian" },
                { "dni": "5", "nombre": "ESPINOZA, Astrid Mercedes" },
                { "dni": "6", "nombre": "LOPEZ Kevin Alexander" },
                { "dni": "7", "nombre": "MARIN, Francisco Emmanuel" },
                { "dni": "8", "nombre": "MARTINEZ, Miqueas Sebastian" },
                { "dni": "9", "nombre": "ONA, Uziel Elian" },
                { "dni": "10", "nombre": "POBLETE, Eluney Milagros" },
                { "dni": "11", "nombre": "REYNOSO, Franco Benjamin" },
                { "dni": "12", "nombre": "ULLOA, Guadalupe Abigail" },
                { "dni": "13", "nombre": "VALENZUELA, Ana Sofia" }],

        "1 D": [{ "dni": "1", "nombre": "ALVEAR, Rut Isabella" },
                { "dni": "2", "nombre": "ARAYA ALFARO, Mario Sebastian" },
                { "dni": "3", "nombre": "ARAYA, Briana Martina" },
                { "dni": "4", "nombre": "EPULLAN, Sol Alen" },
                { "dni": "5", "nombre": "HAYLLAPAN, Martin Imanol" },
                { "dni": "6", "nombre": "HERNANDEZ, Edda Bella" },
                { "dni": "7", "nombre": "MARTINEZ, Isaias Antonio" },
                { "dni": "8", "nombre": "NARDONI Nicolas" },
                { "dni": "9", "nombre": "PAVON, Emma Xiomara" },
                { "dni": "10", "nombre": "PICOSSI, Santiago Agustin" },
                { "dni": "11", "nombre": "RANGUILEO, Cristian Daniel" },
                { "dni": "12", "nombre": "RIQUELME, Nicole Selene" },
                { "dni": "13", "nombre": "RUIZ DIAZ, Enoc Yair" }],

        "2 A": [{ "dni": "1", "nombre": "AGURTO RAMOS, Alejandro Alberto" },
                { "dni": "2", "nombre": "ALFONSO, Lourdes Romina" },
                { "dni": "3", "nombre": "GODOY, Eluney Solange" },
                { "dni": "4", "nombre": "GODOY, Lihuel Ariel" },
                { "dni": "5", "nombre": "IBARRA, Alma" },
                { "dni": "6", "nombre": "JARA CATIVA, Brandon Javier" },
                { "dni": "7", "nombre": "JUAN, Jeremias Lautaro" },
                { "dni": "8", "nombre": "LOPEZ, Emma Solcire" },
                { "dni": "9", "nombre": "MUNOZ, Zahira Rubi" },
                { "dni": "10", "nombre": "NAMUNCURA ANCATRUZ, Eluney Quillen" },
                { "dni": "11", "nombre": "QUIDEL, Neemias Fracisco" },
                { "dni": "12", "nombre": "RANGUILEO, Xiomara" },
                { "dni": "13", "nombre": "RODRIGUEZ Angeles Martina" },
                { "dni": "14", "nombre": "SOTO JARPA, Matheo Nehuen" },
                { "dni": "15", "nombre": "TORRES, Solange Angeles" },
                { "dni": "16", "nombre": "VARGAS OVIEDO, Zaiara Yazmin" },
                { "dni": "17", "nombre": "VEJARES, Jesus Emanuel" }],

        "2 D": [{ "dni": "1", "nombre": "AGUIRRE, Alma" },
                { "dni": "2", "nombre": "BARALDI SAN MARTIN, Antonella" },
                { "dni": "3", "nombre": "COFRE GUAYQUIMIL, Tiziana Aimara" },
                { "dni": "4", "nombre": "CURRULEF, Erica Dalila" },
                { "dni": "5", "nombre": "DE LA FUENTE TAUX, Piuque" },
                { "dni": "6", "nombre": "DIAZ, Jonatan Gael" },
                { "dni": "7", "nombre": "EPULLAN, Miqueas Tahiel" },
                { "dni": "8", "nombre": "FLORES, Juanita Piuque" },
                { "dni": "9", "nombre": "GALLARDO, Tiago Oscar" },
                { "dni": "10", "nombre": "GODOY, Mailen Belinda" },
                { "dni": "11", "nombre": "GONZALEZ, Morena Lucia" },
                { "dni": "12", "nombre": "LACIAR HERNANDEZ, Albertina Desiree" },
                { "dni": "13", "nombre": "MENA TORRES, Martina" },
                { "dni": "14", "nombre": "PAINEL, Jesus Leonel" },
                { "dni": "15", "nombre": "POBLETE, Daniel Urias Misail" },
                { "dni": "16", "nombre": "RIQUELME, Silvina Nahiara" },
                { "dni": "17", "nombre": "SIMONELLI SAN MARTIN, Atilio" },
                { "dni": "18", "nombre": "VALIENTE, Thiago Daniel" },
                { "dni": "19", "nombre": "SOTO, Thiago Benjamin" }],

        "3 A": [{ "dni": "1", "nombre": "AGUIRRE MONTIVERO, Santiago Emanuel" },
                { "dni": "2", "nombre": "AGUIRRE, Ian" },
                { "dni": "3", "nombre": "ARIAS, Pier Mauricio Gonzalo" },
                { "dni": "4", "nombre": "ITURRIZA VILLALBA, Daniela" },
                { "dni": "5", "nombre": "LUNA RAMIREZ, Manuel Alejandro" },
                { "dni": "6", "nombre": "MATOS QUINTANA, Joaquin Ignacio" },
                { "dni": "7", "nombre": "NAMUNCURA ANCATRUZ, Ceferino Jose" },
                { "dni": "8", "nombre": "NARDONI, Agostina" },
                { "dni": "9", "nombre": "NUNEZ, Mia Jazmin" },
                { "dni": "10", "nombre": "ORTEGA MENA, Facundo Benjamin" },
                { "dni": "11", "nombre": "TORRES EPULLAN, Sahira Eluney" },
                { "dni": "12", "nombre": "ULLOA, Axel Nehemias" },
                { "dni": "13", "nombre": "VEJARES, Bianca Solange" },
                { "dni": "14", "nombre": "AQUITO, Maia Tahiana" }],

        "3 C": [{ "dni": "1", "nombre": "ALVEAR, Santiago Gedeon" },
                { "dni": "2", "nombre": "COLILUAN, Ariel Lautaro" },
                { "dni": "3", "nombre": "EPULLAN, Ivan Benjamin" },
                { "dni": "4", "nombre": "LEYVA, Simmon Elias" },
                { "dni": "5", "nombre": "MARTINEZ, Ian Alessandro" },
                { "dni": "6", "nombre": "MONSALBE MANRIQUE, Agustin Alejandro" },
                { "dni": "7", "nombre": "MORERO FERNANDEZ, Lorenzo Benjamin" },
                { "dni": "8", "nombre": "NAVARRO, Jazmin Aixa" },
                { "dni": "9", "nombre": "PAEZ CASTILLO, Valentina" },
                { "dni": "10", "nombre": "PAVON, Gael Nicolas" },
                { "dni": "11", "nombre": "QUININAO COLIPI, Valentina Daiana" },
                { "dni": "12", "nombre": "TAPIA, Sofia Isabel" },
                { "dni": "13", "nombre": "TORRES, Mia Florencia" },
                { "dni": "14", "nombre": "VALENTINI SEOANE, Catalina" },
                { "dni": "15", "nombre": "ZUNIGA, Aaron Leonel" }],

        "4 A": [{ "dni": "1", "nombre": "AGUIRRE, Lorenzo" },
                { "dni": "2", "nombre": "ALONSO RAMOS, Tomas" },
                { "dni": "3", "nombre": "ANCATRUZ, Nahiara Pilmaiquen" },
                { "dni": "4", "nombre": "DESTREE, Amelie" },
                { "dni": "5", "nombre": "DIAZ, Naiara Candela" },
                { "dni": "6", "nombre": "FUENTES, Tiziana Valentina" },
                { "dni": "7", "nombre": "GOMEZ HUENTENAO, Agustina Jazmin" },
                { "dni": "8", "nombre": "HAYLLAPAN, Facundo Manuel" },
                { "dni": "9", "nombre": "KULJKO, Rocio Abril" },
                { "dni": "10", "nombre": "LUCERO GALLARDO, Tania Sofia" },
                { "dni": "11", "nombre": "MALIQUEO, Yamira Yoseli" },
                { "dni": "12", "nombre": "MERCADO, Tomas Agustin" },
                { "dni": "13", "nombre": "MONTANEZ, Santiago Damian" },
                { "dni": "14", "nombre": "PICOSSI, Sofia" },
                { "dni": "15", "nombre": "PINO, Aldana del Valle Pilar" },
                { "dni": "16", "nombre": "QUIDEL, Leonel Luciano" },
                { "dni": "17", "nombre": "RAMIREZ SILVA, Nicolas Martin" },
                { "dni": "18", "nombre": "ROSEMBACH, Dayana Abygail" },
                { "dni": "19", "nombre": "TORRES SCHULMEISTER, Ramiro Isaias" },
                { "dni": "20", "nombre": "VIDAL, Jeremias David" }],

        "5 A": [{ "dni": "1", "nombre": "ARANDA, Lucio Calel" },
                { "dni": "2", "nombre": "ARNESE, Fernanda" },
                { "dni": "3", "nombre": "ESPINDOLA QUICHAN, Jose David" },
                { "dni": "4", "nombre": "GALLARDO PARADA, Kiara Selene" },
                { "dni": "5", "nombre": "GALMEZ ANCATRUZ, Paloma Solange" },
                { "dni": "6", "nombre": "KREMER, Erwin Valentino" },
                { "dni": "7", "nombre": "LOPEZ, Ignacio Marcelo Nicolas" },
                { "dni": "8", "nombre": "MAAIAN, Maslowski" },
                { "dni": "9", "nombre": "MENA GALLARDO, Gabriel Adrian" },
                { "dni": "10", "nombre": "MENA ROMERO, Alcira Malen" },
                { "dni": "11", "nombre": "MOLINA, Priscila Yasmin" },
                { "dni": "12", "nombre": "MORERO FERNANDEZ, Santino Gabriel" },
                { "dni": "13", "nombre": "SANCHEZ, Luana Edith" },
                { "dni": "14", "nombre": "SOTELO QUINCHAGUAL, Tiana Nahiana" },
                { "dni": "15", "nombre": "SARMIENTO HERNANDEZ, Bruno Gaston" },
                { "dni": "16", "nombre": "TORRES, Victoria Ambar" },
                { "dni": "17", "nombre": "TRAIPI, Naiara Abigail" },
                { "dni": "18", "nombre": "VICENCIO ROSAS, Giuliana Fiorella" },
                { "dni": "19", "nombre": "VILLARROEL, Martin Emanuel" }],

        "5 C": [{ "dni": "1", "nombre": "ALANIZ, Joselyn Denise Luana" },
                { "dni": "2", "nombre": "ARIAS, Benjamin Tadeo" },
                { "dni": "3", "nombre": "ARRIETA, Tobias Emiliano" },
                { "dni": "4", "nombre": "BAEZA, Nayara Valentina" },
                { "dni": "5", "nombre": "BARRIENTOS, Alma Gabriela" },
                { "dni": "6", "nombre": "CASTRO, Ancatruz Angeles Xiomara" },
                { "dni": "7", "nombre": "CURIPE, Benjamin Oriel" },
                { "dni": "8", "nombre": "DIAZ, Santiago Armando" },
                { "dni": "9", "nombre": "FLORES, Luisana Alum" },
                { "dni": "10", "nombre": "GUAQUINCHAY RAPIMAN, Rocio Abigail" },
                { "dni": "11", "nombre": "JARA BARDAS, Lautaro Nahuel" },
                { "dni": "12", "nombre": "LAMBRE, Mia Morena" },
                { "dni": "13", "nombre": "LIRA ELGUETA, Nabila" },
                { "dni": "14", "nombre": "MELGAREJO CLAVERIA, Guadalupe Marisol" },
                { "dni": "15", "nombre": "MORALES ARANDA, Zahira Abril" },
                { "dni": "16", "nombre": "RAMIREZ, Santino Fabian" },
                { "dni": "17", "nombre": "ZUNIGA, Sheila Sharell" },
                { "dni": "18", "nombre": "ROSAS, Nehuen Alejandro" },
                { "dni": "19", "nombre": "VILELLA, Joaquin Emilio" },
                { "dni": "20", "nombre": "VAZQUEZ, Thiago Samir" }]
    },

    "TARDE": {
        "1 B": [{ "dni": "1", "nombre": "BELLIDO, Alma Constanza" },
                { "dni": "2", "nombre": "COLILUAN VAZQUEZ, Santino Tail" },
                { "dni": "3", "nombre": "DOMINGUEZ, Yenien Elizabeth" },
                { "dni": "4", "nombre": "GALLARDO PARADA, Mirko Leandro" },
                { "dni": "5", "nombre": "GALMEZ ANCATRUZ, Brunella Abigail" },
                { "dni": "6", "nombre": "GELVES, Yanella Natalia" },
                { "dni": "7", "nombre": "LOPEZ, Agustina Fernanda" },
                { "dni": "8", "nombre": "MARTINEZ, Thiago Santino" },
                { "dni": "9", "nombre": "PAILLALEF TORRES, Naiara Maite" },
                { "dni": "10", "nombre": "PAVON, Dilan Martin" },
                { "dni": "11", "nombre": "RAMIREZ, Josias Moises" },
                { "dni": "12", "nombre": "ZAPATA, Renata Martina" }],

        "1 C": [{ "dni": "1", "nombre": "ALFARO BURGOS, Abril Antu" },
                { "dni": "2", "nombre": "ANCATRUZ, Morena Solange" },
                { "dni": "3", "nombre": "BASCHETO, Thiago Lean Samuel" },
                { "dni": "4", "nombre": "BLANCO VENEGA, Sofia" },
                { "dni": "5", "nombre": "ESPINDOLA RODRIGUEZ, Angeles Luisana" },
                { "dni": "6", "nombre": "GIMENEZ, Juanita Lucia" },
                { "dni": "7", "nombre": "GUAYQUIFIL, Luana Jazmin" },
                { "dni": "8", "nombre": "LUNA ARIAS, David Adrian" },
                { "dni": "9", "nombre": "MANOSALVA, Izan Gael" },
                { "dni": "10", "nombre": "MARIANO Isaias Nehuen" },
                { "dni": "11", "nombre": "MARTINEZ ANCATRUZ, Federico" },
                { "dni": "12", "nombre": "PEREZ RODRIGO, Efrain" },
                { "dni": "13", "nombre": "SANDOVAL, Zahira Jazmin" },
                { "dni": "14", "nombre": "SOTELO QUINCHAGUAL, Juan Moise" }],

        "1 E": [{ "dni": "1", "nombre": "ALFARO ARIAS, Gabriela Elizabeth" },
                { "dni": "2", "nombre": "CASTRO ORTEGA, Alen Huilen" },
                { "dni": "3", "nombre": "CIFUENTES, Candela Solange" },
                { "dni": "4", "nombre": "DIAZ, Sheila Milagros Lujan" },
                { "dni": "5", "nombre": "GALIANO, Felipe Benjamin" },
                { "dni": "6", "nombre": "GUZMAN CARRIZO, Alen Margarita" },
                { "dni": "7", "nombre": "HUENEHUEQUE, Nehuen" },
                { "dni": "8", "nombre": "LILLO PAILLAQUEO, Nicolas Cristobal" },
                { "dni": "9", "nombre": "LOPEZ, Gael Ian Agustin" },
                { "dni": "10", "nombre": "MONTANEZ, Valentina Yasmin" },
                { "dni": "11", "nombre": "SEPULVEDA, Juan David" },
                { "dni": "12", "nombre": "TORRES PERALTA, Tiziano Gael" },
                { "dni": "13", "nombre": "VIVANCO, Tahiel Aaron" }],

        "2 B": [{ "dni": "1", "nombre": "ABALOS, Nayara Sayen" },
                { "dni": "2", "nombre": "ANTIFIL JUAN, Armando Sebastian" },
                { "dni": "3", "nombre": "BAIGORRIA, Alex Elias" },
                { "dni": "4", "nombre": "BARRIA, Carlos Alejandro" },
                { "dni": "5", "nombre": "BEJAR, Juan Carlos Oscar" },
                { "dni": "6", "nombre": "CELIZ LILLO, Areli Inalen" },
                { "dni": "7", "nombre": "CLODOMIRO, Agustina Evelyn" },
                { "dni": "8", "nombre": "GALLARDO, Marcos Antonio" },
                { "dni": "9", "nombre": "MARDONES, Astor Josue" },
                { "dni": "10", "nombre": "MARTINEZ BURGOS, Victor Andres" },
                { "dni": "11", "nombre": "PAGLIA MONSALBE, Sol Samara" },
                { "dni": "12", "nombre": "PAVON Aixa Araceli" },
                { "dni": "13", "nombre": "PEDROZO, Mateo" },
                { "dni": "14", "nombre": "RAMOS, Deyanira Huilen" }],

        "2 C": [{ "dni": "1", "nombre": "BARRIAS, Oriana Maria Eugenia" },
                { "dni": "2", "nombre": "BARRIAS, Sebastian Lucas" },
                { "dni": "3", "nombre": "CANIULLAN, Ana Luz" },
                { "dni": "4", "nombre": "CARRERA PAINE, Ignacio Alberto" },
                { "dni": "5", "nombre": "COLIPI ROMERO, Nahiara Evelin" },
                { "dni": "6", "nombre": "CONDORI COLIPI, Briana Yazmin" },
                { "dni": "7", "nombre": "ESPINOSA MARTINEZ, Kiara Victoria" },
                { "dni": "8", "nombre": "JUAN, Ulises Alejandro" },
                { "dni": "9", "nombre": "LOPEZ ARRESE Luciana Malen" },
                { "dni": "10", "nombre": "MARQUEZ, Carlos Marcelo" },
                { "dni": "11", "nombre": "MARTIN, Gustavo Leonel" },
                { "dni": "12", "nombre": "RAMIREZ, Luna Tamara" },
                { "dni": "13", "nombre": "RODRIGUEZ, Tiziana Jazmin" },
                { "dni": "14", "nombre": "TORRES, Cecilia Elizabeth" },
                { "dni": "15", "nombre": "VEJARES ALVAREZ Cristian Ian" }],

        "3 B": [{ "dni": "1", "nombre": "AQUITO MULLER, Thiago Agustin" },
                { "dni": "2", "nombre": "CLODOMIRO, Solange Rayen" },
                { "dni": "3", "nombre": "CURRULEF, Sara Estefania" },
                { "dni": "4", "nombre": "DEHAIS, Bautista" },
                { "dni": "5", "nombre": "GALLARDO, Marian Luz" },
                { "dni": "6", "nombre": "GUAYQUIMIL RINALDI, Aluen Ludmila" },
                { "dni": "7", "nombre": "GUAYQUIMIL, Lucio Esteban Nicolas" },
                { "dni": "8", "nombre": "MOLINA, Leandro Braian" },
                { "dni": "9", "nombre": "QUIDEL, Maite" },
                { "dni": "10", "nombre": "RANGUILEO RODRIGUEZ, Mauro Ezequiel" },
                { "dni": "11", "nombre": "RIQUELME, Rocio Maylen" },
                { "dni": "12", "nombre": "RUIZ, Morena Virginia" },
                { "dni": "13", "nombre": "SIFUENTES, Eluney Antu" },
                { "dni": "14", "nombre": "SOTELO QUINCHAGUAL, Erik Calel" },
                { "dni": "15", "nombre": "TRAIPI Bianca Eunice" },
                { "dni": "16", "nombre": "URIBE FREDES, Sebastian Aron" },
                { "dni": "17", "nombre": "VEJARES, Luciana Jazmin" },
                { "dni": "18", "nombre": "ZAPATA, Demian" }],

        "4 B": [{ "dni": "1", "nombre": "ARIAS, Melanie Evelyn" },
                { "dni": "2", "nombre": "CANIULLAN, Aylin Anahi" },
                { "dni": "3", "nombre": "CARO, Alan Isaac" },
                { "dni": "4", "nombre": "CASTILLO MONSALBE, Lautaro Tomas" },
                { "dni": "5", "nombre": "COLIPI, Santiago Martin" },
                { "dni": "6", "nombre": "CURRULEF, Marcos Antonio" },
                { "dni": "7", "nombre": "DIAZ, Cristian Tiziano" },
                { "dni": "8", "nombre": "DIAZ, Lazaro Lihuen" },
                { "dni": "9", "nombre": "HUENTENAO, Ana Belen" },
                { "dni": "10", "nombre": "MANQUEO, Matias Sebastian" },
                { "dni": "11", "nombre": "PALACIOS, Agustin Geremias Moises" },
                { "dni": "12", "nombre": "QUINCHAGUAL, Esteban" },
                { "dni": "13", "nombre": "QUINCHAGUAL, Samuel Juan" },
                { "dni": "14", "nombre": "ROJO, Maria Valentina" },
                { "dni": "15", "nombre": "TORRES, Rodrigo Andres" },
                { "dni": "16", "nombre": "TRAIPI, Alan Uciel" },
                { "dni": "17", "nombre": "ZAPATA LOPEZ, Fabricio" }],

        "4 C": [{ "dni": "1", "nombre": "AGUIRRE, Ambar Constanza" },
                { "dni": "2", "nombre": "BEJAR, Emilia Soledad" },
                { "dni": "3", "nombre": "CELIZ, Walter Shair" },
                { "dni": "4", "nombre": "COLIPI, Victoria" },
                { "dni": "5", "nombre": "DIAZ SOTO, Ana Sol" },
                { "dni": "6", "nombre": "ESPINDOLA, Natali Daniela Noemi" },
                { "dni": "7", "nombre": "GOMEZ CABRERA, Alex Ezequias" },
                { "dni": "8", "nombre": "GONZALEZ, Mateo Sebastian" },
                { "dni": "9", "nombre": "LEYVA, Julieta Antonella" },
                { "dni": "10", "nombre": "MARTINEZ, Yazmin Celeste" },
                { "dni": "11", "nombre": "PALACIOS VINET, Blas Agustin" },
                { "dni": "12", "nombre": "PEREZ MOYA, Joaquin Alejandro" },
                { "dni": "13", "nombre": "POSDELEY GUTIERREZ, Tomas" },
                { "dni": "14", "nombre": "PROVENZAL, Teo Matias" },
                { "dni": "15", "nombre": "PUELPAN, Nehuen Agustin" },
                { "dni": "16", "nombre": "RAMIREZ, Marcos Antonio" },
                { "dni": "17", "nombre": "ZAPATA, Uriel Ismael" },
                { "dni": "18", "nombre": "ZURITA FREDES Juan Martin" }],
             
        "5 B": [{ "dni": "1", "nombre": "ALVAREZ DEALOY, Fiamma Maiten" },
                { "dni": "2", "nombre": "ANTICURA CHAMORRO, Milagros Yenien" },
                { "dni": "3", "nombre": "COLILUAN, Morena Yenien" },
                { "dni": "4", "nombre": "MUNOZ ALFARO, Belinda Guadalupe" },
                { "dni": "5", "nombre": "PINCHEIRA, Lucia Helena" },
                { "dni": "6", "nombre": "RAMIREZ, Ayelen Claudia" },
                { "dni": "7", "nombre": "SARMIENTO HERNANDEZ, Bruno Gaston" },
                { "dni": "8", "nombre": "TORRES, Gaston Matias Unelen" },
                { "dni": "9", "nombre": "VAZQUEZ RAPIMAN, Karina Lucia" },
                { "dni": "10", "nombre": "ZAPATA, Milagros Valentina" },
                { "dni": "11", "nombre": "RANGUILEO, Emilse Malen" },
                { "dni": "12", "nombre": "RODRIGUEZ, Mical Ruth" },
                { "dni": "13", "nombre": "AGUIRRE, Maximiliano" }]
    }
};

const materiasPorCurso = {
    "1 A": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 B": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 C": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 D": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "1 E": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 A": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 B": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 C": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "2 D": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA EDUCACION SEXUAL INTEGRAL", "INTERAREA TECNOLOGIA"],
    "3 A": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA TECNOLOGIA", "COMUNICACION Y MEDIOS", "INVESTIGACION DE LAS ORIENTACIONES"],
    "3 B": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA TECNOLOGIA", "COMUNICACION Y MEDIOS", "INVESTIGACION DE LAS ORIENTACIONES"],
    "3 C": ["CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS", "LENGUAJES Y PRODUCCION CULTURAL", "CIENCIAS NATURALES", "MATEMATICA E INFORMATICA", "EDUCACION FISICA INTEGRAL", "INTERAREA TECNOLOGIA", "COMUNICACION Y MEDIOS", "INVESTIGACION DE LAS ORIENTACIONES"],
    "4 A": ["HISTORIA", "GEOGRAFIA", "SOCIEDADES POLITICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL", "MATEMATICA","INFORMATICA","CS. BIOLOGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMIAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
    "4 B": ["HISTORIA", "GEOGRAFIA", "SOCIEDADES, POLITICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL", "MATEMATICA","INFORMATICA","CS. BIOLOGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMIAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
    "4 C": ["HISTORIA", "GEOGRAFIA", "SOCIEDADES, POLITICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE", "LENGUAS OTRAS", "EDUCACION FISICA INTEGRAL", "MATEMATICA","INFORMATICA", "CS. BIOLOGICAS", "QUIMICA", "FISICA", "FILOSOFIA DE LAS CIENCIAS", "GEOPOLITICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGIAS DE LAS ARTES Y LAS ESTETICA", "COMUNICACION, DISCURSO Y PRODUCCION DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
    "5 A": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACION FISICA INTEGRAL","INFORMATICA V"],
    "5 B": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACION FISICA INTEGRAL","INFORMATICA V"],
    "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMATICA","FISICA","QUIMICA","CIENCIAS BIOLOGICAS","GEOGRAFIA ARGENTINA","HISTORIA","INSTRUCCION CIVICA","FILOSOFIA","EDUCACION FISICA INTEGRAL","INFORMATICA V"]
};

// ============================================================
// 3. FUNCIONES DE AUTENTICACIÓN
// ============================================================

function obtenerSesion() {
    const datos = localStorage.getItem('sia_sesion');
    if (!datos) return null;
    try {
        return JSON.parse(datos);
    } catch(e) {
        return null;
    }
}

function guardarSesion(datos) {
    localStorage.setItem('sia_sesion', JSON.stringify(datos));
    sesionActual = datos;
}

function cerrarSesion() {
    localStorage.removeItem('sia_sesion');
    sesionActual = null;
    memoriaGlobal = {};
    llavesGuardadas.clear(); // Limpiar llaves guardadas al cerrar sesion
    
    // Limpiar inputs y filtros
    actualizarSelectorTurnos();
    document.getElementById('cursos').innerHTML = '<option value="">Seleccione Curso</option>';
    document.getElementById('materias').innerHTML = '<option value="">Seleccione Curso primero</option>';
    document.getElementById('periodos').value = '';
    
    // Limpiar tabla
    const headerRow = document.getElementById('header-row');
    const tbody = document.querySelector('#tabla-notas tbody');
    if (headerRow) headerRow.innerHTML = '';
    if (tbody) tbody.innerHTML = `<tr><td colspan="10" style="padding:30px;color:#777;text-align:center;"><i class="fas fa-filter"></i> Seleccione todos los filtros para visualizar la lista de alumnos</td></tr>`;
    
    // Resetear tabs
    mainTabActual = 'calificaciones';
    document.getElementById('tab-espacios').classList.add('active');
    document.getElementById('tab-gestion').classList.remove('active');
    
    // Ocultar app, mostrar login
    document.getElementById('app-main').style.display = 'none';
    document.getElementById('login-overlay').style.display = 'flex';
    document.getElementById('user-email').value = '';
    document.getElementById('pass-input').value = '';
    document.getElementById('login-error').style.display = 'none';
}

async function verificarAcceso() {
    const correo = document.getElementById('user-email').value.trim();
    const password = document.getElementById('pass-input').value;
    const errorMsg = document.getElementById('login-error');
    
    if (!correo || !password) {
        errorMsg.textContent = 'Complete ambos campos';
        errorMsg.style.display = 'block';
        return;
    }

    // Mostrar cargando
    const btnLogin = document.getElementById('btn-login');
    btnLogin.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verificando...';
    btnLogin.disabled = true;

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'login', correo: correo, password: password })
        });
        const resultado = await resp.json();
        
        if (resultado.success) {
            guardarSesion({
                correo: resultado.correo,
                rol: resultado.rol,
                turno: resultado.turno,
                materias_permitidas: resultado.materias_permitidas || [],
                cursos_permitidos: resultado.cursos_permitidos || []
            });
            iniciarApp();
        } else {
            let msg = resultado.error || 'Credenciales incorrectas';
            if (resultado.error === 'Usuario inactivo') {
                msg = 'Tu cuenta esta desactivada. Contacta al administrador.';
            } else if (resultado.error === 'Sistema en mantenimiento') {
                msg = 'Sistema en mantenimiento. Vuelve mas tarde.';
            }
            errorMsg.textContent = msg;
            errorMsg.style.display = 'block';
            document.getElementById('pass-input').value = '';
        }
    } catch (err) {
        console.error('Error de login:', err);
        errorMsg.textContent = 'Error de conexion con el servidor';
        errorMsg.style.display = 'block';
    }
    
    btnLogin.innerHTML = '<i class="fas fa-sign-in-alt"></i> Iniciar Sesion';
    btnLogin.disabled = false;
}

// ============================================================
// 4. INICIALIZACIÓN DE LA APP (POST-LOGIN)
// ============================================================

async function iniciarApp() {
    if (!sesionActual) return;
    
    // Ocultar login, mostrar app
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('app-main').style.display = 'block';
    
    // Cargar recursantes desde Sheets
    await cargarRecursantes();
    
    // Mostrar datos de sesion en header
    document.getElementById('session-email').textContent = sesionActual.correo;
    document.getElementById('session-rol').textContent = nombresRoles[sesionActual.rol] || sesionActual.rol;
    
    // Configurar UI segun rol
    configurarUIporRol();
    
    // Filtrar turnos si es preceptor
    actualizarSelectorTurnos();
    
    // Cargar datos desde Sheets (esperar a que termine)
    await cargarDesdeSheetsAlIniciar();
}

function configurarUIporRol() {
    const tabGestion = document.getElementById('tab-gestion');
    const tabAlumnos = document.getElementById('tab-alumnos');
    const accionesGuardar = document.getElementById('acciones-guardar');
    const avisoReadonly = document.getElementById('aviso-solo-lectura');
    const dangerZone = document.getElementById('danger-zone-admin');

    const rol = sesionActual.rol;
    const esAdmin = rol === 'admin';
    const esJefePreceptor = rol === 'jefe_preceptor' || rol === 'sub_jefe_preceptor';
    const esPreceptor = rol === 'preceptor';
    const esCualquierPreceptor = esJefePreceptor || esPreceptor;

    if (esAdmin) {
        // Admin: mostrar tabs de gestion y alumnos, calificaciones en solo lectura, danger zone visible
        tabGestion.style.display = 'inline-flex';
        tabAlumnos.style.display = 'inline-flex';
        accionesGuardar.style.display = 'none';
        avisoReadonly.style.display = 'block';
        if (dangerZone) dangerZone.style.display = 'block';
    } else if (esJefePreceptor) {
        // Jefe/Sub-jefe de preceptores: tab alumnos visible, calificaciones solo lectura, gestion de preceptores
        tabGestion.style.display = 'none';
        tabAlumnos.style.display = 'inline-flex';
        accionesGuardar.style.display = 'none';
        avisoReadonly.style.display = 'block';
        if (dangerZone) dangerZone.style.display = 'none';
    } else if (esPreceptor) {
        // Preceptor: solo tab de alumnos, calificaciones solo lectura
        tabGestion.style.display = 'none';
        tabAlumnos.style.display = 'inline-flex';
        accionesGuardar.style.display = 'none';
        avisoReadonly.style.display = 'block';
        if (dangerZone) dangerZone.style.display = 'none';
    } else {
        // Docente: solo calificaciones, con permisos segun materias, danger zone oculta
        tabGestion.style.display = 'none';
        tabAlumnos.style.display = 'none';
        accionesGuardar.style.display = 'flex';
        avisoReadonly.style.display = 'none';
        if (dangerZone) dangerZone.style.display = 'none';
    }
}

// ============================================================
// 5. TABS PRINCIPALES
// ============================================================

function switchMainTab(tab) {
    mainTabActual = tab;
    document.querySelectorAll('#main-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    
    // Ocultar todos los paneles
    document.getElementById('panel-calificaciones').style.display = 'none';
    document.getElementById('panel-gestion').style.display = 'none';
    document.getElementById('panel-alumnos').style.display = 'none';
    
    if (tab === 'calificaciones') {
        document.getElementById('tab-espacios').classList.add('active');
        document.getElementById('panel-calificaciones').style.display = 'block';
    } else if (tab === 'gestion') {
        document.getElementById('tab-gestion').classList.add('active');
        document.getElementById('panel-gestion').style.display = 'block';
        cargarListaUsuarios();
        // Solo admin ve fechas límite y libros escolares
        const esAdminGestionTab = sesionActual.rol === 'admin';
        const fechasSection = document.querySelector('.fechas-section');
        const librosSection = document.querySelector('.libros-section');
        if (fechasSection) fechasSection.style.display = esAdminGestionTab ? 'block' : 'none';
        if (librosSection) librosSection.style.display = esAdminGestionTab ? 'block' : 'none';
        if (esAdminGestionTab) cargarFechasLimite();
    } else if (tab === 'alumnos') {
        document.getElementById('tab-alumnos').classList.add('active');
        document.getElementById('panel-alumnos').style.display = 'block';

        // Mostrar u ocultar seccion de preceptores segun rol
        const esJefePreceptor = sesionActual.rol === 'jefe_preceptor' || sesionActual.rol === 'sub_jefe_preceptor';
        const seccionPreceptores = document.getElementById('seccion-preceptores');
        if (seccionPreceptores) {
            seccionPreceptores.style.display = esJefePreceptor ? 'block' : 'none';
        }

        cargarListaAlumnosGestion();
        if (esJefePreceptor) cargarPreceptores();
    }
}

// ============================================================
// 6. SUB-TABS CALIFICACIONES (Espacios / Cualitativas) - DEPRECATED
// ============================================================

function switchTab(tab) {
    // Funcion deprecada - ya no hay sub-tabs
    console.log('switchTab deprecado');
}

// ============================================================
// 7. FUNCIONES DE FILTRADO Y SELECCIÓN
// ============================================================

function normalizarNombre(str) {
    return str.trim().toUpperCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ");
}

async function actualizarMaterias() {
    const selectCursos = document.getElementById("cursos");
    const selectMaterias = document.getElementById("materias");

    if (!selectCursos || !selectMaterias) return;

    const cursoSeleccionado = selectCursos.value.trim();

    selectMaterias.innerHTML = '<option value="">Seleccione Materia</option>';

    if (cursoSeleccionado && materiasPorCurso[cursoSeleccionado]) {
        materiasPorCurso[cursoSeleccionado].forEach(materia => {
            const option = document.createElement("option");
            option.value = materia;
            option.textContent = materia;
            selectMaterias.appendChild(option);
        });
    }
    validarYFiltrar();
}

function actualizarSelectorTurnos() {
    const selectorTurnos = document.getElementById('turnos');
    if (!selectorTurnos) return;

    if (sesionActual && sesionActual.rol === 'preceptor' && sesionActual.turno) {
        const turnoAsignado = sesionActual.turno;
        // Reemplazamos las opciones por solo la permitida
        selectorTurnos.innerHTML = `<option value="${turnoAsignado}">${turnoAsignado}</option>`;
        selectorTurnos.value = turnoAsignado;
        // Disparamos la actualización de cursos para ese turno
        actualizarSelectorCursos();
    } else {
        // Reset para otros roles o cuando no hay sesión (cerrar sesión)
        selectorTurnos.innerHTML = '<option value="">Seleccione Turno</option><option value="MAÑANA">MAÑANA</option><option value="TARDE">TARDE</option>';
    }
}

async function actualizarSelectorCursos() {
    const turnoSeleccionado = document.getElementById('turnos').value;
    const selectorCursos = document.getElementById('cursos');
    selectorCursos.innerHTML = '<option value="">Seleccione Curso</option>';

    // Pre-cargar alumnos desde Sheets en segundo plano para que estén listos cuando el docente
    // seleccione la materia y el periodo. No bloqueamos la UI esperando la respuesta.
    if (turnoSeleccionado && sesionActual?.correo && alumnosDesdeSheets.length === 0) {
        fetch(`${URL_WEB_APP}?action=obtenerAlumnos&correo=${encodeURIComponent(sesionActual.correo)}&turno=${encodeURIComponent(turnoSeleccionado)}`, { method: 'GET', mode: 'cors' })
            .then(r => r.json())
            .then(res => { if (res.success) alumnosDesdeSheets = res.alumnos || []; })
            .catch(() => {});
    }

    if (turnoSeleccionado && baseDeDatosAlumnos[turnoSeleccionado]) {
        const cursosDisponibles = Object.keys(baseDeDatosAlumnos[turnoSeleccionado]).sort();
        
        // Normalizamos el rol a minusculas para evitar errores
        const rolActual = (sesionActual?.rol || "").toLowerCase();
        const esRolRestringido = (rolActual === 'docente' || rolActual === 'preceptor');
        
        // Aseguramos que cursosPermitidos sea siempre un array de strings normalizados
        let cursosPermitidos = sesionActual?.cursos_permitidos || [];
        if (!Array.isArray(cursosPermitidos)) cursosPermitidos = [cursosPermitidos];
        cursosPermitidos = cursosPermitidos.map(c => String(c).trim().toUpperCase());
        
        cursosDisponibles.forEach(curso => {
            // Si es un rol restringido, solo mostrar si el curso está en su lista de permitidos
            if (esRolRestringido) {
                if (!cursosPermitidos.includes(curso.trim().toUpperCase())) return;
            }
            
            const option = document.createElement('option');
            option.value = curso; 
            option.textContent = curso; 
            selectorCursos.appendChild(option);
        });

        // Si es preceptor y solo tiene un curso asignado, seleccionarlo automáticamente
        if (rolActual === 'preceptor' && cursosPermitidos.length === 1) {
            selectorCursos.value = cursosPermitidos[0];
        }
    }
    await actualizarMaterias();
    await validarYFiltrar();
}

async function validarYFiltrar() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const mat = document.getElementById('materias').value;
    const per = document.getElementById('periodos').value;
    
    if (turno && curso && mat && per) {
        await cargarAlumnos();
    } else {
        limpiarTabla();
    }
}

function limpiarTabla() {
    const tbody = document.querySelector('#tabla-notas tbody');
    const headerRow = document.getElementById('header-row');
    const loader = document.getElementById('loader-tabla');
    const tabla = document.getElementById('tabla-notas');
    
    headerRow.innerHTML = '';
    tbody.innerHTML = `<tr><td colspan="10" style="padding:30px;color:#777;text-align:center;">
        <i class="fas fa-filter"></i> Seleccione todos los filtros para visualizar la lista de alumnos
    </td></tr>`;
    
    // Ocultar loader y mostrar tabla
    if (loader) loader.style.display = 'none';
    if (tabla) tabla.style.display = 'table';
}

// ============================================================
// 8. CARGAR ALUMNOS (CON CONTROL DE PERMISOS)
// ============================================================

async function cargarAlumnos() {
    const tbody = document.querySelector('#tabla-notas tbody');
    const headerRow = document.getElementById('header-row');
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;

    if (!turno || !curso || !materia || !periodo) {
        limpiarTabla();
        return;
    }

    // Mostrar fecha limite para el periodo seleccionado
    await mostrarFechaLimite(periodo);

    // Mostrar loader y ocultar tabla
    let loader = document.getElementById('loader-tabla');
    let tabla = document.getElementById('tabla-notas');
    if (loader) loader.style.display = 'block';
    if (tabla) tabla.style.display = 'none';

    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    
    // Cargar datos existentes desde Sheets antes de renderizar
    await cargarDatosDesdeSheets(turno, curso, materia, periodo);
    
    const datosM = memoriaGlobal[llaveID] || {};
    const anoCurso = curso ? parseInt(curso.charAt(0)) : 0;
    const esBimestre = periodo.includes("Bimestre");
    const esCuatrimestre = (periodo === "1" || periodo === "2");
    console.log('[DEBUG] Periodo:', periodo, '| esCuatrimestre:', esCuatrimestre, '| esBimestre:', esBimestre);
    const mostrarCualitativas = (anoCurso >= 4) || esBimestre;

    // Determinar si puede editar
    const puedeEditar = verificarPermisoEdicion(materia);
    
    // Mostrar/ocultar avisos
    const avisoMateria = document.getElementById('aviso-materia-bloqueada');
    const accionesGuardar = document.getElementById('acciones-guardar');
    
    if (sesionActual.rol === 'admin') {
        accionesGuardar.style.display = 'none';
        avisoMateria.style.display = 'none';
    } else if (!puedeEditar) {
        accionesGuardar.style.display = 'none';
        avisoMateria.style.display = 'block';
    } else {
        accionesGuardar.style.display = 'flex';
        avisoMateria.style.display = 'none';
    }
    
    // Mostrar boton comprobante si hay tabla cargada
    const btnComprobante = document.getElementById('btnComprobante');
    if (btnComprobante) {
        btnComprobante.style.display = (turno && curso && materia && periodo) ? 'inline-flex' : 'none';
    }
    actualizarEstadoBotonComprobante();

    // Ocultar loader y mostrar tabla
    loader = document.getElementById('loader-tabla');
    tabla = document.getElementById('tabla-notas');
    if (loader) loader.style.display = 'none';
    if (tabla) tabla.style.display = 'table';

    // Encabezados - SIEMPRE todas las columnas
    headerRow.innerHTML = `
        <th class="sticky-col" style="width: 50px;">N</th>
        <th class="sticky-col nombre-col">Apellido y Nombre</th>
    `;
    
    if (mostrarCualitativas) {
        criteriosCualitativos.forEach(crit => {
            headerRow.innerHTML += `<th style="font-size: 0.75rem; min-width: 90px;">${crit}</th>`;
        });
    }
    
    headerRow.innerHTML += `<th>Nota</th><th>Observaciones</th>`;

    // Renderizar filas
    tbody.innerHTML = '';

    // Obtener alumnos: primero desde Sheets (cache alumnosDesdeSheets), luego del objeto local como respaldo
    // alumnosDesdeSheets se carga en cargarListaAlumnosGestion; si el docente abre directo la tab de
    // calificaciones sin pasar por Gestion Alumnos, lo cargamos ahora.
    let alumnosCurso = alumnosDesdeSheets.filter(a =>
        a.curso.trim().toUpperCase() === curso.trim().toUpperCase() &&
        (!turno || a.turno.trim().toUpperCase() === turno.trim().toUpperCase())
    );

    // Si Sheets no devolvió nada para este curso/turno, usar el objeto hardcodeado como respaldo
    if (alumnosCurso.length === 0) {
        alumnosCurso = [...(baseDeDatosAlumnos[turno]?.[curso] || [])];
    }

    // Si todavía está vacío puede ser que alumnosDesdeSheets aún no se haya cargado; intentar cargar
    if (alumnosCurso.length === 0 && alumnosDesdeSheets.length === 0) {
        try {
            const urlA = `${URL_WEB_APP}?action=obtenerAlumnos&correo=${encodeURIComponent(sesionActual.correo)}&curso=${encodeURIComponent(curso)}&turno=${encodeURIComponent(turno)}`;
            const respA = await fetch(urlA, { method: 'GET', mode: 'cors' });
            const resA = await respA.json();
            if (resA.success && resA.alumnos.length > 0) {
                alumnosDesdeSheets = resA.alumnos;
                alumnosCurso = resA.alumnos;
            } else {
                // Último respaldo: objeto hardcodeado
                alumnosCurso = [...(baseDeDatosAlumnos[turno]?.[curso] || [])];
            }
        } catch(e) {
            alumnosCurso = [...(baseDeDatosAlumnos[turno]?.[curso] || [])];
        }
    }

    let alumnos = [...alumnosCurso];

    // Agregar recursantes SOLO de la materia exacta (comparación normalizada)
    const turnoNorm = turno.trim().toUpperCase();
    const materiaNorm = materia.trim().toUpperCase();
    let recursantesDeLaMateria = [];
    Object.keys(recursantesPorMateria[curso] || {}).forEach(mat => {
        if (mat.trim().toUpperCase() === materiaNorm) {
            (recursantesPorMateria[curso][mat] || [])
                .filter(r => r.turno.trim().toUpperCase() === turnoNorm)
                .forEach(r => recursantesDeLaMateria.push(r));
        }
    });
    const dnisExistentes = new Set(alumnos.map(a => a.dni));
    recursantesDeLaMateria.forEach(r => {
        if (!dnisExistentes.has(r.dni)) {
            alumnos.push({ ...r, esRecursante: true, materiaAsignada: materia });
        }
    });
    
    let frases = frasesPorMateria["DEFAULT"];
    for (let clave in frasesPorMateria) { 
        if (materia.toUpperCase().includes(clave)) frases = frasesPorMateria[clave]; 
    }

    const disabledAttr = (!puedeEditar || sesionActual.rol === 'admin') ? 'disabled' : '';
    const bgStyle = (!puedeEditar || sesionActual.rol === 'admin') ? 'background-color:#e9ecef;' : '';

    alumnos.forEach((alumno, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-dni', alumno.dni);
        const persistido = datosM[alumno.dni] || {};
        
        let html = `
            <td class="sticky-col">${index + 1}</td>
            <td class="sticky-col nombre-col" style="text-align:left;">
                ${alumno.nombre}
                ${(alumno.esRecursante && sesionActual.rol !== 'docente') ? `<button onclick="eliminarRecursante('${alumno.turno}', '${curso}', '${alumno.materiaAsignada}', '${alumno.dni}')" title="Eliminar recursante" style="margin-left:8px; background:#dc3545; color:white; border:none; border-radius:4px; cursor:pointer; padding:2px 6px; font-size:0.75rem;">🗑️</button>` : ''}
            </td>
        `;

        // Cualitativas (solo 4°-5° o bimestre)
        if (mostrarCualitativas) {
            criteriosCualitativos.forEach(crit => {
                const valC = persistido[crit] || "-";
                html += `<td><select class="nota-input select-nota-cualitativa" data-criterio="${crit}" style="${bgStyle}" ${disabledAttr} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', '${crit}', this.value)">
                            ${opcionesCualitativas.map(o => `<option value="${o}" ${valC===o?'selected':''}>${o}</option>`).join('')}
                         </select></td>`;
            });
        }

        // Nota
        const n = persistido.nota || "";
        if (esCuatrimestre) {
            // Nota numérica 1-10 para cuatrimestre (select desplegable)
            html += `<td><select class="nota-input select-nota" ${disabledAttr} style="${bgStyle}" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'nota', this.value)">
                        <option value="">-</option>`;
            for (let i = 1; i <= 10; i++) {
                html += `<option value="${i}" ${n == i ? 'selected' : ''}>${i}</option>`;
            }
            html += `</select></td>`;
        } else {
            // Nota conceptual para bimestre
            html += `<td><select class="nota-input select-nota" ${disabledAttr} style="${bgStyle}" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'nota', this.value)">
                        <option value="">-</option>`;
            escalaConceptos.forEach(e => {
                html += `<option value="${e}" ${n == e ? 'selected' : ''}>${e}</option>`;
            });
            html += `</select></td>`;
        }

        // Observaciones (siempre visible)
        const valP = persistido['sel_1'] || "";
        html += `<td><div style="display:flex; flex-direction:column; gap:3px; min-width: 180px;">
                    <select class="nota-input select-obs-multiple" data-pos="1" style="font-size:0.85rem;${bgStyle}" ${disabledAttr} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'sel_1', this.value)">
                        <option value="">Seleccione una frase...</option>
                        ${frases.map(f => `<option value="${f}" ${valP===f?'selected':''}>${f}</option>`).join('')}
                    </select>
                    <textarea class="nota-input text-obs" placeholder="Nota personal..." style="height:40px;${bgStyle}" ${disabledAttr} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'observacion', this.value)">${persistido.observacion || ""}</textarea>
                 </div></td>`;
        
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}

// ============================================================
// 9. PERMISOS DE EDICIÓN
// ============================================================

function verificarPermisoEdicion(materia) {
    if (!sesionActual) return false;
    if (sesionActual.rol === 'admin') return false; // Admin = solo lectura en calificaciones

    // Jefe de Preceptor, Sub Jefe de Preceptor y Preceptor = solo lectura
    const rol = sesionActual.rol;
    if (rol === 'jefe_preceptor' || rol === 'sub_jefe_preceptor' || rol === 'preceptor') {
        return false;
    }

    // Si el docente no tiene materias asignadas (array vacio), puede editar todo
    if (!sesionActual.materias_permitidas || sesionActual.materias_permitidas.length === 0) {
        return true;
    }

    // Verificar si la materia esta en su lista
    return sesionActual.materias_permitidas.indexOf(materia) !== -1;
}

// ============================================================
// 9.5 CARGAR DATOS EXISTENTES DESDE SHEETS
// ============================================================

async function cargarDatosDesdeSheets(turno, curso, materia, periodo) {
    if (!turno || !curso || !materia || !periodo) return;
    
    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    
    try {
        // Convertir periodo al formato de la planilla
        let periodoParaSheets = periodo;
        if (periodo === "1") periodoParaSheets = "1er Cuatrimestre";
        else if (periodo === "2") periodoParaSheets = "2do Cuatrimestre";
        else if (periodo === "1_Bimestre") periodoParaSheets = "1er_Bimestre";
        else if (periodo === "2_Bimestre") periodoParaSheets = "2do_Bimestre";
        
        const url = `${URL_WEB_APP}?action=obtenerDatosCurso&correo=${encodeURIComponent(sesionActual.correo)}&turno=${encodeURIComponent(turno)}&curso=${encodeURIComponent(curso)}&materia=${encodeURIComponent(materia)}&periodo=${encodeURIComponent(periodoParaSheets)}`;
        
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        
        if (resultado.success && resultado.datos && resultado.datos.length > 0) {
            // Inicializar memoria para esta llave (sobrescribir si ya existe)
            memoriaGlobal[llaveID] = {};
            
            resultado.datos.forEach(dato => {
                // Buscar el DNI del alumno por nombre
                const alumno = buscarAlumnoPorNombre(turno, curso, dato.nombre);
                if (alumno) {
                    memoriaGlobal[llaveID][alumno.dni] = {
                        nota: dato.nota || "",
                        sel_1: dato.obs1 || "",
                        sel_2: dato.obs2 || "",
                        sel_3: dato.obs3 || "",
                        observacion: dato.obs4 || "",
                        "Interpreta": dato.interpreta || "-",
                        "Relaciona": dato.relaciona || "-",
                        "Aplica": dato.aplica || "-",
                        "Participacion": dato.participacion || "-",
                        "Autonomia": dato.autonomia || "-",
                        "Realizacion de TP": dato.realizacion_tp || "-",
                        "Cumplimiento AEC": dato.cumplimiento_aec || "-"
                    };
                }
            });
            
            console.log(`[DEBUG] Datos cargados desde Sheets para ${llaveID}:`, resultado.datos.length, 'alumnos');
        } else {
            // Si no hay datos en Sheets, limpiar memoria para esta llave
            memoriaGlobal[llaveID] = {};
        }
    } catch (err) {
        console.error('Error cargando datos desde Sheets:', err);
    }
}

function buscarAlumnoPorNombre(turno, curso, nombre) {
    const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
    return alumnos.find(a => a.nombre === nombre);
}

// ============================================================
// 10. MEMORIA Y RESPALDO
// ============================================================

function actualizarMemoria(llave, dni, campo, valor) {
    if (!memoriaGlobal[llave]) memoriaGlobal[llave] = {};
    if (!memoriaGlobal[llave][dni]) memoriaGlobal[llave][dni] = {};
    memoriaGlobal[llave][dni][campo] = valor;
}

function respaldarAPantallaAMemoria() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;

    if (!turno || !curso || !materia || !periodo) return;

    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    if (!memoriaGlobal[llaveID]) memoriaGlobal[llaveID] = {};

    const filas = document.querySelectorAll('#tabla-notas tbody tr');
    filas.forEach(fila => {
        const dni = fila.getAttribute('data-dni');
        if (!dni) return;
        if (!memoriaGlobal[llaveID][dni]) memoriaGlobal[llaveID][dni] = {};

        const selNota = fila.querySelector('.select-nota');
        if (selNota) memoriaGlobal[llaveID][dni].nota = selNota.value;

        fila.querySelectorAll('.select-obs-multiple').forEach(sel => {
            memoriaGlobal[llaveID][dni][`sel_${sel.dataset.pos}`] = sel.value;
        });

        fila.querySelectorAll('.select-nota-cualitativa').forEach(sel => {
            memoriaGlobal[llaveID][dni][sel.dataset.criterio] = sel.value;
        });

        const txtObs = fila.querySelector('.text-obs');
        if (txtObs) memoriaGlobal[llaveID][dni].observacion = txtObs.value;
    });
}

// ============================================================
// 11. CARGA DESDE GOOGLE SHEETS
// ============================================================

async function cargarDesdeSheetsAlIniciar() {
    const tbody = document.querySelector('#tabla-notas tbody');
    tbody.innerHTML = `<tr><td colspan="10" style="padding:30px;text-align:center;color:#007bff;">
        <i class="fas fa-spinner fa-spin"></i> Cargando datos desde el servidor...
    </td></tr>`;

    try {
        const resp = await fetch(URL_WEB_APP, { method: 'GET', mode: 'cors' });
        const filas = await resp.json();

        if (filas.error) throw new Error(filas.error);

        let cargados = 0;

        filas.forEach(item => {
            const turnoItem = item.turno || '';
            const cursoItem = item.curso || '';
            const materiaItem = item.materia || '';
            let periodoItem = item.periodo || '';
            const nombreItem = item.nombre || '';
            
            let periodoInterno = periodoItem;
            if (periodoItem === "1er Cuatrimestre") periodoInterno = "1";
            if (periodoItem === "2do Cuatrimestre") periodoInterno = "2";

            const llave = `${turnoItem}-${cursoItem}-${materiaItem}-${periodoInterno}`;

            const turnoData = baseDeDatosAlumnos[turnoItem];
            if (!turnoData || !turnoData[cursoItem]) return;

            const nombreBuscado = normalizarNombre(nombreItem);
            const alumno = turnoData[cursoItem].find(
                a => normalizarNombre(a.nombre) === nombreBuscado
            );

            if (!alumno) return;

            if (!memoriaGlobal[llave]) memoriaGlobal[llave] = {};
            memoriaGlobal[llave][alumno.dni] = {
                nota:                  item.nota || "",
                sel_1:                 item.obs1 || "",
                sel_2:                 item.obs2 || "",
                sel_3:                 item.obs3 || "",
                observacion:           item.obs4 || "",
                "Interpreta":          item.interpreta || "-",
                "Relaciona":           item.relaciona || "-",
                "Aplica":              item.aplica || "-",
                "Participacion":       item.participacion || "-",
                "Autonomia":           item.autonomia || "-",
                "Realizacion de TP":   item.realizacion_tp || "-",
                "Cumplimiento AEC":    item.cumplimiento_aec || "-"
            };
            cargados++;
        });

        datosSheetsCargados = true;
        console.log(`${cargados} registros cargados desde Sheets.`);

    } catch (err) {
        console.warn("No se pudo cargar desde Sheets, se usara memoria vacia.", err);
        datosSheetsCargados = true;
    }

    tbody.innerHTML = `<tr><td colspan="10" style="padding:30px;color:#777;text-align:center;">
        <i class="fas fa-filter"></i> Seleccione todos los filtros para visualizar la lista de alumnos
    </td></tr>`;
}

// ============================================================
// 12. GUARDAR EN GOOGLE SHEETS
// ============================================================

async function guardarEnGoogleSheets() {
    if (!sesionActual || sesionActual.rol === 'admin') {
        alert('Los administradores no pueden editar calificaciones');
        return;
    }
    
    respaldarAPantallaAMemoria();
    const btn = document.getElementById('btnGuardar');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    // Mostrar barra de progreso
    if (progressContainer) progressContainer.style.display = 'block';
    if (progressBar) progressBar.style.width = '10%';
    if (progressText) progressText.textContent = 'Preparando datos...';
    
    btn.innerText = "Enviando..."; btn.disabled = true;

    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;

    // Verificar permiso de materia
    if (!verificarPermisoEdicion(materia)) {
        alert('No tiene permiso para editar esta materia');
        btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Guardar Datos'; 
        btn.disabled = false;
        if (progressContainer) progressContainer.style.display = 'none';
        return;
    }

    let nombrePeriodoParaPlanilla = periodo; 
    if (periodo === "1") nombrePeriodoParaPlanilla = "1er Cuatrimestre";
    else if (periodo === "2") nombrePeriodoParaPlanilla = "2do Cuatrimestre";

    const llave = `${turno}-${curso}-${materia}-${periodo}`;
    const datos = [];
    const alumnos = baseDeDatosAlumnos[turno][curso];
    
    if (progressBar) progressBar.style.width = '30%';
    if (progressText) progressText.textContent = 'Recolectando datos de alumnos...';

    alumnos.forEach((a, i) => {
        const m = memoriaGlobal[llave] ? (memoriaGlobal[llave][a.dni] || {}) : {};
        datos.push({
            n_orden: i + 1, 
            nombre: a.nombre, 
            curso: curso, 
            turno: turno, 
            materia: materia, 
            periodo: nombrePeriodoParaPlanilla,
            nota: m.nota || "", 
            obs1: m.sel_1 || "", 
            obs2: m.sel_2 || "", 
            obs3: m.sel_3 || "", 
            obs4: m.observacion || "",
            interpreta: m["Interpreta"] || "-", 
            relaciona: m["Relaciona"] || "-", 
            aplica: m["Aplica"] || "-",
            participacion: m["Participacion"] || "-",
            autonomia: m["Autonomia"] || "-",
            realizacion_tp: m["Realizacion de TP"] || "-",
            cumplimiento_aec: m["Cumplimiento AEC"] || "-"
        });
    });

    try {
        if (progressBar) progressBar.style.width = '60%';
        if (progressText) progressText.textContent = 'Enviando a Google Sheets...';
        
        const payload = {
            action: 'guardarNotas',
            correoDocente: sesionActual.correo,
            datos: datos
        };
        
        const resp = await fetch(URL_WEB_APP, { 
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload) 
        });
        
        if (progressBar) progressBar.style.width = '80%';
        if (progressText) progressText.textContent = 'Procesando respuesta...';
        
        if (!resp.ok) {
            throw new Error('El servidor respondio con error: ' + resp.status);
        }
        
        const resultado = await resp.json();
        
        if (resultado.success) {
            if (progressBar) progressBar.style.width = '100%';
            if (progressText) progressText.textContent = 'Datos guardados exitosamente!';
            
            // Marcar esta llave como guardada exitosamente
            const turno = document.getElementById('turnos').value;
            const curso = document.getElementById('cursos').value;
            const materia = document.getElementById('materias').value;
            const periodo = document.getElementById('periodos').value;
            const llave = `${turno}-${curso}-${materia}-${periodo}`;
            llavesGuardadas.add(llave);
            actualizarEstadoBotonComprobante();
            
            setTimeout(() => {
                alert("Datos sincronizados con exito!");
                if (progressContainer) progressContainer.style.display = 'none';
                if (progressBar) progressBar.style.width = '0%';
            }, 500);
        } else {
            if (progressBar) progressBar.style.width = '0%';
            if (progressText) progressText.textContent = 'Error al guardar';
            alert("Error al guardar: " + (resultado.error || 'Respuesta inesperada del servidor'));
            if (progressContainer) progressContainer.style.display = 'none';
        }
    } catch (e) { 
        console.error(e);
        if (progressBar) progressBar.style.width = '0%';
        if (progressText) progressText.textContent = 'Error de conexion';
        alert("Error de red al intentar guardar. Verifique su conexion e intente nuevamente."); 
        if (progressContainer) progressContainer.style.display = 'none';
    }
    
    btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Guardar Datos'; 
    btn.disabled = false;
}

// ============================================================
// 13. PANEL DE GESTIÓN DE USUARIOS (ADMIN)
// ============================================================

// --- FECHAS LIMITE DE CARGA ---
const PERIODOS_FECHAS = [
    { id: '1_Bimestre', nombre: '1er Bimestre' },
    { id: '2_Bimestre', nombre: '2do Bimestre' },
    { id: '1', nombre: '1er Cuatrimestre' },
    { id: '2', nombre: '2do Cuatrimestre' }
];

function renderizarFechasLimite(fechasGuardadas) {
    const container = document.getElementById('fechas-container');
    container.innerHTML = '';
    
    PERIODOS_FECHAS.forEach(periodo => {
        const fechaGuardada = fechasGuardadas[periodo.id] || '';
        const div = document.createElement('div');
        div.style.cssText = 'display:flex; flex-direction:column; gap:4px; min-width:180px;';
        div.innerHTML = `
            <label style="font-size:0.85rem; font-weight:bold; color:#856404;">${periodo.nombre}</label>
            <input type="date" id="fecha-${periodo.id}" value="${fechaGuardada}" 
                   style="padding:6px; border:1px solid #ffc107; border-radius:4px; font-size:0.85rem;">
        `;
        container.appendChild(div);
    });
}

async function cargarFechasLimite() {
    try {
        const url = `${URL_WEB_APP}?action=obtenerFechasLimite&correo=${encodeURIComponent(sesionActual.correo)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        
        if (resultado.success) {
            renderizarFechasLimite(resultado.fechas || {});
        } else {
            renderizarFechasLimite({});
        }
    } catch (err) {
        console.error('Error cargando fechas limite:', err);
        renderizarFechasLimite({});
    }
}

async function guardarFechasLimite() {
    const fechas = {};
    PERIODOS_FECHAS.forEach(periodo => {
        const input = document.getElementById(`fecha-${periodo.id}`);
        if (input && input.value) {
            fechas[periodo.id] = input.value;
        }
    });
    
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'guardarFechasLimite',
                correoAdmin: sesionActual.correo,
                fechas: fechas
            })
        });
        
        const resultado = await resp.json();
        const msg = document.getElementById('msg-fechas');
        
        if (resultado.success) {
            msg.textContent = 'Fechas guardadas correctamente';
            msg.style.color = '#28a745';
            setTimeout(() => { msg.textContent = ''; }, 3000);
        } else {
            msg.textContent = 'Error: ' + resultado.error;
            msg.style.color = '#dc3545';
        }
    } catch (err) {
        const msg = document.getElementById('msg-fechas');
        msg.textContent = 'Error al guardar fechas';
        msg.style.color = '#dc3545';
    }
}

async function obtenerFechaLimitePeriodo(periodoId) {
    try {
        const url = `${URL_WEB_APP}?action=obtenerFechasLimite&correo=${encodeURIComponent(sesionActual.correo)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        
        if (resultado.success && resultado.fechas) {
            return resultado.fechas[periodoId] || null;
        }
        return null;
    } catch (err) {
        console.error('Error obteniendo fecha limite:', err);
        return null;
    }
}

function verificarTerminidad(fechaLimite) {
    if (!fechaLimite) return { enTermino: true, mensaje: '' };
    
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const limite = new Date(fechaLimite);
    limite.setHours(23, 59, 59, 999); // Hasta el final del dia limite
    
    if (hoy <= limite) {
        return { enTermino: true, mensaje: 'Completado En Termino' };
    } else {
        return { enTermino: false, mensaje: 'Completado Fuera de Termino' };
    }
}

async function mostrarFechaLimite(periodo) {
    const aviso = document.getElementById('aviso-fechas-limite');
    const texto = document.getElementById('texto-fecha-limite');
    
    if (!aviso || !texto) return;
    
    try {
        const fechaLimite = await obtenerFechaLimitePeriodo(periodo);
        
        if (fechaLimite) {
            // Formatear fecha a dd/mm/aaaa
            const fecha = new Date(fechaLimite);
            const dia = fecha.getDate().toString().padStart(2, '0');
            const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            const anio = fecha.getFullYear();
            const fechaFormateada = `${dia}/${mes}/${anio}`;
            
            // Nombre del periodo
            let nombrePeriodo = periodo;
            if (periodo === "1") nombrePeriodo = "1er Cuatrimestre";
            else if (periodo === "2") nombrePeriodo = "2do Cuatrimestre";
            else if (periodo === "1_Bimestre") nombrePeriodo = "1er Bimestre";
            else if (periodo === "2_Bimestre") nombrePeriodo = "2do Bimestre";
            
            texto.textContent = `Fecha limite para ${nombrePeriodo}: ${fechaFormateada}`;
            aviso.style.display = 'block';
        } else {
            aviso.style.display = 'none';
        }
    } catch (err) {
        console.error('Error mostrando fecha limite:', err);
        aviso.style.display = 'none';
    }
}

async function cargarListaUsuarios() {
    const tbody = document.getElementById('tbody-usuarios');
    tbody.innerHTML = '<tr><td colspan="5" style="padding:20px;text-align:center;"><i class="fas fa-spinner fa-spin"></i> Cargando...</td></tr>';
    
    try {
        const url = `${URL_WEB_APP}?action=listarUsuarios&correo=${encodeURIComponent(sesionActual.correo)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        
        if (!resultado.success) {
            tbody.innerHTML = `<tr><td colspan="5" style="padding:20px;text-align:center;color:red;">${resultado.error}</td></tr>`;
            return;
        }
        
        renderizarTablaUsuarios(resultado.usuarios, resultado.sistema_activo);
    } catch (err) {
        tbody.innerHTML = '<tr><td colspan="5" style="padding:20px;text-align:center;color:red;">Error al cargar usuarios</td></tr>';
    }
}

function renderizarTablaUsuarios(usuarios, sistemaActivo) {
    const tbody = document.getElementById('tbody-usuarios');
    const thMateriasTurno = document.getElementById('th-materias-turno');
    const esJefePreceptorRender = sesionActual.rol === 'jefe_preceptor' || sesionActual.rol === 'sub_jefe_preceptor';

    if (thMateriasTurno) {
        thMateriasTurno.textContent = esJefePreceptorRender ? 'Turno Asignado' : 'Materias Asignadas';
    }

    tbody.innerHTML = '';
    
    if (!usuarios || usuarios.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="padding:20px;text-align:center;">No hay usuarios registrados</td></tr>';
        return;
    }
    
    // Switch global de sistema (solo visible para admin)
    const panelGestion = document.getElementById('panel-gestion');
    const esAdminGestion = sesionActual.rol === 'admin';
    let switchGlobal = document.getElementById('switch-global-sistema');

    if (esAdminGestion) {
        if (!switchGlobal) {
            switchGlobal = document.createElement('div');
            switchGlobal.id = 'switch-global-sistema';
            switchGlobal.className = 'switch-global-container';
            switchGlobal.innerHTML = `
                <label class="switch-global-label">
                    <input type="checkbox" id="chk-sistema-activo" ${sistemaActivo !== false ? 'checked' : ''} onchange="toggleSistemaGlobal(this.checked)">
                    <span class="switch-slider"></span>
                    <span id="txt-sistema-estado" class="switch-text">${sistemaActivo !== false ? 'Sistema activo' : 'En mantenimiento'}</span>
                </label>
            `;
            panelGestion.insertBefore(switchGlobal, panelGestion.firstChild);
        } else {
            switchGlobal.style.display = 'flex';
            document.getElementById('chk-sistema-activo').checked = sistemaActivo !== false;
            document.getElementById('txt-sistema-estado').textContent = sistemaActivo !== false ? 'Sistema activo' : 'En mantenimiento';
        }
    } else {
        // Ocultar switch global para jefe/sub-jefe de preceptor
        if (switchGlobal) switchGlobal.style.display = 'none';
    }
    
    usuarios.forEach(u => {
        const tr = document.createElement('tr');
        const esAdminPrincipal = u.esAdminPrincipal;
        const nombreRolDisplay = nombresRoles[u.rol] || u.rol;
        const materiasTexto = (u.materias_permitidas && u.materias_permitidas.length > 0) 
            ? u.materias_permitidas.join(', ') 
            : '<em>Todas (sin restriccion)</em>';
        const cursosTexto = (u.cursos_permitidos && u.cursos_permitidos.length > 0)
            ? u.cursos_permitidos.join(', ')
            : '<em>Todos (sin restriccion)</em>';
        
        const estaActivo = u.activo === 'si' || u.activo === true;
        const badgeActivo = estaActivo 
            ? '<span class="badge badge-activo">ACTIVO</span>' 
            : '<span class="badge badge-inactivo">INACTIVO</span>';
        
        // Toggle switch para activar/desactivar (solo admin)
        const esAdminToggle = sesionActual.rol === 'admin';
        const toggleDisabled = esAdminPrincipal || !esAdminToggle ? 'disabled' : '';
        const toggleChecked = estaActivo ? 'checked' : '';
        const toggleHtml = esAdminToggle ? `
            <label class="switch-toggle">
                <input type="checkbox" ${toggleChecked} ${toggleDisabled} onchange="toggleUsuarioActivo('${u.correo}', this.checked)">
                <span class="switch-toggle-slider"></span>
            </label>
        ` : '';
        
        let acciones = '';
        const esAdminGestionTabla = sesionActual.rol === 'admin';
        const esJefePreceptorTabla = sesionActual.rol === 'jefe_preceptor' || sesionActual.rol === 'sub_jefe_preceptor';

        if (esAdminGestionTabla) {
            // Admin: todas las acciones
            if (u.rol === 'docente' || (u.rol === 'admin' && !esAdminPrincipal)) {
                acciones += `<button class="btn-action btn-edit-mat" onclick="abrirModalMaterias('${u.correo}')"><i class="fas fa-book"></i></button>`;
            }
            acciones += `<button class="btn-action btn-edit-pass" onclick="abrirModalPassword('${u.correo}')"><i class="fas fa-key"></i></button>`;
            if (!esAdminPrincipal) {
                acciones += `<button class="btn-action btn-delete" onclick="confirmarEliminarUsuario('${u.correo}')"><i class="fas fa-trash"></i></button>`;
            }
        } else if (esJefePreceptorTabla) {
            // Jefe/Sub-jefe: solo eliminar preceptores
            if (!esAdminPrincipal) {
                acciones += `<button class="btn-action btn-delete" onclick="confirmarEliminarUsuario('${u.correo}')"><i class="fas fa-trash"></i></button>`;
            }
        }
        
        // Para jefe/sub-jefe, mostrar turno en lugar de materias
        const esJefePreceptorRender = sesionActual.rol === 'jefe_preceptor' || sesionActual.rol === 'sub_jefe_preceptor';
        const turnoTexto = u.turno || '<em>No asignado</em>';

        tr.innerHTML = `
            <td>${u.correo}</td>
            <td><span class="badge badge-${u.rol}">${nombreRolDisplay}</span></td>
            <td class="materias-cell">${esJefePreceptorRender ? turnoTexto : materiasTexto}</td>
            <td class="materias-cell">${cursosTexto}</td>
            <td>${badgeActivo} ${toggleHtml}</td>
            <td class="acciones-cell">${acciones}</td>
        `;
        tbody.appendChild(tr);
    });
}

async function toggleUsuarioActivo(correo, activo) {
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'toggleActivo', correoAdmin: sesionActual.correo, correoObjetivo: correo, activo: activo })
        });
        const res = await resp.json();
        if (!res.success) {
            alert(res.error || 'Error al cambiar estado');
            cargarListaUsuarios(); // Recargar para revertir visualmente
        }
    } catch (err) {
        alert('Error de conexion');
        cargarListaUsuarios();
    }
}

async function toggleSistemaGlobal(activo) {
    const txt = document.getElementById('txt-sistema-estado');
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'setConfig', correoAdmin: sesionActual.correo, clave: 'sistema_activo', valor: activo ? 'si' : 'no' })
        });
        const res = await resp.json();
        if (res.success) {
            txt.textContent = activo ? 'Sistema activo' : 'En mantenimiento';
        } else {
            alert(res.error || 'Error');
            document.getElementById('chk-sistema-activo').checked = !activo;
        }
    } catch (err) {
        alert('Error de conexion');
        document.getElementById('chk-sistema-activo').checked = !activo;
    }
}

// ============================================================
// 14. MODALES DE GESTIÓN
// ============================================================

function cerrarModal(id) {
    document.getElementById(id).style.display = 'none';
}

function obtenerTodosLosCursos() {
    const todos = new Set();
    Object.keys(baseDeDatosAlumnos).forEach(turno => {
        Object.keys(baseDeDatosAlumnos[turno]).forEach(curso => {
            todos.add(curso);
        });
    });
    return Array.from(todos).sort((a, b) => {
        const numA = parseInt(a.charAt(0));
        const numB = parseInt(b.charAt(0));
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b);
    });
}

function obtenerTodasLasMaterias() {
    const todas = new Set();
    Object.values(materiasPorCurso).forEach(arr => {
        arr.forEach(m => todas.add(m));
    });
    return Array.from(todas).sort();
}

async function cargarRecursantes() {
    try {
        const url = `${URL_WEB_APP}?action=obtenerRecursantes&correo=${encodeURIComponent(sesionActual.correo)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        
        if (resultado.success && resultado.recursantes) {
            // Organizar recursantes por curso y materia
            recursantesPorMateria = {};
            resultado.recursantes.forEach(r => {
                if (!recursantesPorMateria[r.curso]) recursantesPorMateria[r.curso] = {};
                if (!recursantesPorMateria[r.curso][r.materia]) recursantesPorMateria[r.curso][r.materia] = [];
                recursantesPorMateria[r.curso][r.materia].push({
                    nombre: r.nombre,
                    dni: r.dni,
                    turno: r.turno
                });
            });
            console.log('[DEBUG] Recursantes cargados:', resultado.recursantes.length);
        }
    } catch (err) {
        console.error('Error cargando recursantes:', err);
    }
}

// ============================================================
// GESTION DE ALUMNOS (PRECEPTORES Y ADMIN)
// ============================================================

// Cache de alumnos cargados desde Sheets (hoja Alumnos)
let alumnosDesdeSheets = [];

/**
 * Carga los alumnos desde la hoja "Alumnos" de Google Sheets y refresca la tabla.
 * Se llama al entrar al tab de Alumnos y después de cada alta/baja/modificación.
 */
async function cargarListaAlumnosGestion() {
    const tbody = document.getElementById('tbody-alumnos-gestion');
    tbody.innerHTML = '<tr><td colspan="6" style="padding:20px;text-align:center;color:#777;"><i class="fas fa-spinner fa-spin"></i> Cargando alumnos...</td></tr>';

    const esPreceptor = sesionActual && sesionActual.rol === 'preceptor';
    let cursosPermitidos = (sesionActual?.cursos_permitidos || []).map(c => String(c).trim().toUpperCase());
    const turnoPreceptor = esPreceptor ? (sesionActual.turno || '').trim().toUpperCase() : '';

    // Bloquear/habilitar selectores según rol
    const selTurno = document.getElementById('filtro-turno-alumnos');
    const selCurso = document.getElementById('filtro-curso-alumnos');
    if (esPreceptor) {
        const cursoAsignado = cursosPermitidos.length > 0 ? cursosPermitidos[0] : '';
        if (selCurso) { selCurso.value = cursoAsignado; selCurso.disabled = true; }
        if (selTurno) { selTurno.value = turnoPreceptor; selTurno.disabled = true; }
    } else {
        if (selTurno) selTurno.disabled = false;
        if (selCurso) selCurso.disabled = false;
    }

    // --- Cargar desde hoja Alumnos de Sheets ---
    try {
        const cursoParam = esPreceptor && cursosPermitidos.length > 0 ? cursosPermitidos[0] : '';
        const turnoParam = esPreceptor && turnoPreceptor ? turnoPreceptor : '';
        const url = `${URL_WEB_APP}?action=obtenerAlumnos&correo=${encodeURIComponent(sesionActual.correo)}&curso=${encodeURIComponent(cursoParam)}&turno=${encodeURIComponent(turnoParam)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        if (resultado.success) {
            alumnosDesdeSheets = resultado.alumnos || [];
        } else {
            console.warn('obtenerAlumnos error:', resultado.error);
            alumnosDesdeSheets = [];
        }
    } catch (err) {
        console.error('Error cargando alumnos desde Sheets:', err);
        alumnosDesdeSheets = [];
    }

    renderizarTablaAlumnos();
}

/**
 * Renderiza la tabla con los alumnos ya cargados + recursantes, aplicando los filtros del UI.
 */
function renderizarTablaAlumnos() {
    const tbody = document.getElementById('tbody-alumnos-gestion');
    const busqueda = document.getElementById('buscar-alumno').value.toLowerCase();
    const turnoFiltro = document.getElementById('filtro-turno-alumnos').value;
    const cursoFiltro = document.getElementById('filtro-curso-alumnos').value;

    const esPreceptor = sesionActual && sesionActual.rol === 'preceptor';
    let cursosPermitidos = (sesionActual?.cursos_permitidos || []).map(c => String(c).trim().toUpperCase());
    const turnoPreceptor = esPreceptor ? (sesionActual.turno || '').trim().toUpperCase() : '';

    // Combinar alumnos de Sheets + hardcodeados en baseDeDatosAlumnos
    // Los de Sheets tienen prioridad; los hardcodeados solo aparecen si no están ya en Sheets
    let dniEnSheets = new Set(alumnosDesdeSheets.map(a => String(a.dni).trim()));
    let alumnos = [...alumnosDesdeSheets.map(a => ({ ...a, esRecursante: false, materia: '' }))];

    // Agregar alumnos del código que NO están ya en Sheets (respaldo)
    Object.keys(baseDeDatosAlumnos).forEach(turno => {
        Object.keys(baseDeDatosAlumnos[turno]).forEach(curso => {
            if (esPreceptor) {
                if (!cursosPermitidos.includes(curso.trim().toUpperCase())) return;
                if (turnoPreceptor && turno.trim().toUpperCase() !== turnoPreceptor) return;
            }
            baseDeDatosAlumnos[turno][curso].forEach((alumno, idx) => {
                if (!dniEnSheets.has(String(alumno.dni).trim())) {
                    alumnos.push({ ...alumno, turno, curso, index: idx, esRecursante: false, materia: '' });
                }
            });
        });
    });

    // Agregar recursantes con restricción de preceptor
    Object.keys(recursantesPorMateria).forEach(curso => {
        Object.keys(recursantesPorMateria[curso]).forEach(materia => {
            (recursantesPorMateria[curso][materia] || []).forEach(r => {
                if (esPreceptor) {
                    if (!cursosPermitidos.includes(curso.trim().toUpperCase())) return;
                    if (turnoPreceptor && (r.turno || '').trim().toUpperCase() !== turnoPreceptor) return;
                }
                alumnos.push({ nombre: r.nombre, dni: r.dni, turno: r.turno, curso, esRecursante: true, materia });
            });
        });
    });

    // Aplicar filtros
    if (turnoFiltro) alumnos = alumnos.filter(a => a.turno === turnoFiltro);
    if (cursoFiltro) alumnos = alumnos.filter(a => a.curso === cursoFiltro);
    if (busqueda) alumnos = alumnos.filter(a =>
        a.nombre.toLowerCase().includes(busqueda) ||
        String(a.dni).toLowerCase().includes(busqueda)
    );

    if (alumnos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="padding:20px;text-align:center;color:#777;">No se encontraron alumnos</td></tr>';
        return;
    }

    tbody.innerHTML = alumnos.map((a, i) => `
        <tr style="${a.esRecursante ? 'background:#f0faff;' : ''}">
            <td>${i + 1}</td>
            <td style="text-align:left;">
                ${a.nombre}
                ${a.esRecursante ? '<span style="margin-left:6px;background:#17a2b8;color:white;border-radius:4px;padding:1px 6px;font-size:0.7rem;">Recursante</span>' : ''}
            </td>
            <td>${a.curso}</td>
            <td>${a.turno}</td>
            <td style="font-size:0.82rem;color:#555;">${a.esRecursante ? a.materia : '-'}</td>
            <td>
                ${a.esRecursante
                    ? `<button class="btn-action" onclick="eliminarRecursante('${a.turno}', '${a.curso}', '${a.materia}', '${a.dni}')" style="background:#dc3545;color:white;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;">
                           <i class="fas fa-trash-alt"></i> Eliminar
                       </button>`
                    : `<button class="btn-action" onclick="mostrarModalEditarAlumno('${a.turno}', '${a.curso}', '${a.dni}')" style="background:#ffc107;color:#333;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;margin-right:4px;">
                           <i class="fas fa-edit"></i> Editar
                       </button>
                       <button class="btn-action" onclick="eliminarAlumno('${a.turno}', '${a.curso}', '${a.dni}')" style="background:#dc3545;color:white;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;">
                           <i class="fas fa-trash-alt"></i> Eliminar
                       </button>`
                }
            </td>
        </tr>
    `).join('');
}

function filtrarAlumnos() {
    renderizarTablaAlumnos();
}

function mostrarModalAgregarAlumno() {
    document.getElementById('titulo-modal-alumno').textContent = 'Agregar Alumno';
    document.getElementById('alumno-modo').value = 'agregar';
    document.getElementById('alumno-dni-original').value = '';
    document.getElementById('nuevo-alumno-nombre').value = '';
    document.getElementById('nuevo-alumno-dni').value = '';

    const selectCurso = document.getElementById('nuevo-alumno-curso');
    const selectTurno = document.getElementById('nuevo-alumno-turno');

    // Si es preceptor, preseleccionar y bloquear su curso asignado
    // El turno solo se bloquea si está registrado en la sesión
    const esPreceptor = sesionActual && sesionActual.rol === 'preceptor';
    if (esPreceptor) {
        const cursosPermitidos = (sesionActual.cursos_permitidos || []);
        const cursoAsignado = cursosPermitidos.length > 0 ? cursosPermitidos[0] : '';
        const turnoAsignado = (sesionActual.turno || '').trim();
        selectCurso.value = cursoAsignado;
        selectCurso.disabled = true;
        if (turnoAsignado) {
            selectTurno.value = turnoAsignado;
            selectTurno.disabled = true;
        } else {
            // Sin turno registrado: dejar libre para que el preceptor elija
            selectTurno.value = '';
            selectTurno.disabled = false;
        }
    } else {
        selectCurso.value = '';
        selectCurso.disabled = false;
        selectTurno.value = '';
        selectTurno.disabled = false;
    }

    document.getElementById('modal-agregar-alumno').style.display = 'flex';
}

function mostrarModalEditarAlumno(turno, curso, dni) {
    const dniStr = String(dni).trim();

    // Buscar primero en alumnos cargados desde Sheets
    let alumno = alumnosDesdeSheets.find(a =>
        String(a.dni).trim() === dniStr &&
        a.curso.trim().toUpperCase() === curso.trim().toUpperCase()
    );

    // Si no está en Sheets, buscar en el objeto hardcodeado como respaldo
    if (!alumno) {
        const encontrado = baseDeDatosAlumnos[turno]?.[curso]?.find(a => String(a.dni).trim() === dniStr);
        if (encontrado) alumno = { ...encontrado, turno, curso };
    }

    if (!alumno) {
        alert('Alumno no encontrado');
        return;
    }

    const esPreceptor = sesionActual && sesionActual.rol === 'preceptor';
    const selectCurso = document.getElementById('nuevo-alumno-curso');
    const selectTurno = document.getElementById('nuevo-alumno-turno');

    document.getElementById('titulo-modal-alumno').textContent = 'Editar Alumno';
    document.getElementById('alumno-modo').value = 'editar';
    document.getElementById('alumno-dni-original').value = dniStr;
    document.getElementById('nuevo-alumno-nombre').value = alumno.nombre;
    document.getElementById('nuevo-alumno-dni').value = alumno.dni;
    selectCurso.value = alumno.curso || curso;
    selectTurno.value = alumno.turno || turno;

    // Bloquear curso/turno para preceptores
    if (esPreceptor) {
        selectCurso.disabled = true;
        selectTurno.disabled = !!( (sesionActual.turno || '').trim() );
    } else {
        selectCurso.disabled = false;
        selectTurno.disabled = false;
    }

    document.getElementById('modal-agregar-alumno').style.display = 'flex';
}

async function confirmarGuardarAlumno() {
    const modo = document.getElementById('alumno-modo').value;
    const nombre = document.getElementById('nuevo-alumno-nombre').value.trim();
    const dni = document.getElementById('nuevo-alumno-dni').value.trim();
    const curso = document.getElementById('nuevo-alumno-curso').value;
    const turno = document.getElementById('nuevo-alumno-turno').value;
    const dniOriginal = document.getElementById('alumno-dni-original').value;
    
    if (!nombre || !dni || !curso || !turno) {
        alert('Complete todos los campos');
        return;
    }
    
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: modo === 'editar' ? 'editarAlumno' : 'agregarAlumno',
                correo: sesionActual.correo,
                datos: { nombre, dni, curso, turno },
                dniOriginal: dniOriginal
            })
        });
        
        const resultado = await resp.json();
        
        if (resultado.success) {
            alert(modo === 'editar' ? 'Alumno actualizado exitosamente' : 'Alumno agregado exitosamente');
            cerrarModal('modal-agregar-alumno');
            // Recargar desde Sheets para reflejar el estado real de la base de datos
            await cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al guardar alumno');
    }
}

async function eliminarAlumno(turno, curso, dni) {
    if (!confirm('¿Esta seguro de eliminar este alumno?')) return;
    
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'eliminarAlumno',
                correo: sesionActual.correo,
                turno: turno,
                curso: curso,
                dni: dni
            })
        });
        
        const resultado = await resp.json();
        
        if (resultado.success) {
            alert('Alumno eliminado exitosamente');
            // Recargar desde Sheets para reflejar el estado real de la base de datos
            await cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al eliminar alumno');
    }
}

// ============================================================
// GESTION DE RECURSANTES
// ============================================================

function mostrarModalAgregarRecursante() {
    document.getElementById('recursante-nombre').value = '';
    document.getElementById('recursante-curso').value = '';
    document.getElementById('recursante-materia').innerHTML = '<option value="">Seleccione Curso primero</option>';
    document.getElementById('recursante-turno').value = '';
    document.getElementById('modal-agregar-recursante').style.display = 'flex';
}

function actualizarMateriasRecursante() {
    const curso = document.getElementById('recursante-curso').value;
    const selectMateria = document.getElementById('recursante-materia');
    
    if (!curso) {
        selectMateria.innerHTML = '<option value="">Seleccione Curso primero</option>';
        return;
    }
    
    const materias = materiasPorCurso[curso] || [];
    selectMateria.innerHTML = '<option value="">Seleccione Materia</option>' + 
        materias.map(m => `<option value="${m}">${m}</option>`).join('');
}

async function confirmarAgregarRecursante() {
    const nombre = document.getElementById('recursante-nombre').value.trim();
    const curso = document.getElementById('recursante-curso').value;
    const materia = document.getElementById('recursante-materia').value;
    const turno = document.getElementById('recursante-turno').value;
    
    if (!nombre || !curso || !materia || !turno) {
        alert('Complete todos los campos');
        return;
    }
    
    // Generar un DNI temporal unico basado en timestamp
    const dniTemporal = 'REC-' + Date.now();
    
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'agregarRecursante',
                correo: sesionActual.correo,
                datos: { nombre, dni: dniTemporal, curso, materia, turno }
            })
        });
        
        const resultado = await resp.json();
        
        if (resultado.success) {
            // Actualizar base de datos local de recursantes
            if (!recursantesPorMateria[curso]) recursantesPorMateria[curso] = {};
            if (!recursantesPorMateria[curso][materia]) recursantesPorMateria[curso][materia] = [];
            recursantesPorMateria[curso][materia].push({ nombre, dni: dniTemporal, turno });
            
            alert('Recursante agregado exitosamente');
            cerrarModal('modal-agregar-recursante');
            cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al agregar recursante');
    }
}

// Variable global para recursantes
let recursantesPorMateria = {};

// --- MODAL AGREGAR USUARIO ---
function mostrarModalAgregar() {
    document.getElementById('nuevo-correo').value = '';
    document.getElementById('nuevo-password').value = '';
    document.getElementById('nuevo-rol').value = 'docente';
    
    const containerMat = document.getElementById('materias-multiselect');
    const materias = obtenerTodasLasMaterias();
    containerMat.innerHTML = '';
    materias.forEach(m => {
        containerMat.innerHTML += `<label class="check-item"><input type="checkbox" value="${m}"> ${m}</label>`;
    });
    
    const containerCur = document.getElementById('cursos-multiselect');
    const cursos = obtenerTodosLosCursos();
    containerCur.innerHTML = '';
    cursos.forEach(c => {
        containerCur.innerHTML += `<label class="check-item"><input type="checkbox" value="${c}"> ${c}</label>`;
    });
    
    document.getElementById('modal-agregar').style.display = 'flex';
}

async function confirmarAgregarUsuario() {
    const correo = document.getElementById('nuevo-correo').value.trim();
    const password = document.getElementById('nuevo-password').value;
    const rol = document.getElementById('nuevo-rol').value;

    if (!correo || !password) {
        alert('Complete correo y contrasena');
        return;
    }
    // Validar correo institucional
    if (!correo.endsWith('@cpem32.edu.ar')) {
        alert('El correo debe ser institucional (@cpem32.edu.ar)');
        return;
    }
    if (password.length < 4) {
        alert('La contrasena debe tener al menos 4 caracteres');
        return;
    }
    
    const materiasSeleccionadas = [];
    document.querySelectorAll('#materias-multiselect input:checked').forEach(cb => {
        materiasSeleccionadas.push(cb.value);
    });
    
    const cursosSeleccionados = [];
    document.querySelectorAll('#cursos-multiselect input:checked').forEach(cb => {
        cursosSeleccionados.push(cb.value);
    });
    
    try {
        const payload = {
            action: 'agregarUsuario',
            correoAdmin: sesionActual.correo,
            datos: {
                correo: correo,
                password: password,
                rol: rol,
                materias_permitidas: materiasSeleccionadas,
                cursos_permitidos: cursosSeleccionados
            }
        };
        
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });
        const res = await resp.json();
        
        if (res.success) {
            alert('Usuario creado exitosamente');
            cerrarModal('modal-agregar');
            cargarListaUsuarios();
        } else {
            alert('Error: ' + (res.error || 'No se pudo crear el usuario'));
        }
    } catch (err) {
        alert('Error de conexion al crear usuario');
    }
}

// --- MODAL EDITAR MATERIAS Y CURSOS ---
function abrirModalMaterias(correo) {
    editandoCorreo = correo;
    document.getElementById('editar-materias-usuario').textContent = correo;
    
    const containerMat = document.getElementById('materias-editar-checklist');
    const materias = obtenerTodasLasMaterias();
    containerMat.innerHTML = '';
    
    const containerCur = document.getElementById('cursos-editar-checklist');
    const cursos = obtenerTodosLosCursos();
    containerCur.innerHTML = '';
    
    // Obtener materias y cursos actuales del usuario desde la tabla
    const filas = document.querySelectorAll('#tbody-usuarios tr');
    let materiasActuales = [];
    let cursosActuales = [];
    filas.forEach(fila => {
        if (fila.cells && fila.cells[0] && fila.cells[0].textContent === correo) {
            const textoMaterias = fila.cells[2].textContent;
            if (!textoMaterias.includes('sin restriccion') && !textoMaterias.includes('Todas')) {
                materiasActuales = textoMaterias.split(', ').map(m => m.trim());
            }
            const textoCursos = fila.cells[3].textContent;
            if (!textoCursos.includes('sin restriccion') && !textoCursos.includes('Todos')) {
                cursosActuales = textoCursos.split(', ').map(c => c.trim());
            }
        }
    });
    
    materias.forEach(m => {
        const checked = materiasActuales.indexOf(m) !== -1 ? 'checked' : '';
        containerMat.innerHTML += `<label class="check-item"><input type="checkbox" value="${m}" ${checked}> ${m}</label>`;
    });
    
    cursos.forEach(c => {
        const checked = cursosActuales.indexOf(c) !== -1 ? 'checked' : '';
        containerCur.innerHTML += `<label class="check-item"><input type="checkbox" value="${c}" ${checked}> ${c}</label>`;
    });
    
    document.getElementById('modal-materias').style.display = 'flex';
}

async function confirmarEditarMaterias() {
    const materiasSeleccionadas = [];
    document.querySelectorAll('#materias-editar-checklist input:checked').forEach(cb => {
        materiasSeleccionadas.push(cb.value);
    });
    
    const cursosSeleccionados = [];
    document.querySelectorAll('#cursos-editar-checklist input:checked').forEach(cb => {
        cursosSeleccionados.push(cb.value);
    });
    
    try {
        // Actualizar materias
        const payloadMat = {
            action: 'actualizarMaterias',
            correoAdmin: sesionActual.correo,
            correoDocente: editandoCorreo,
            materias: materiasSeleccionadas
        };
        
        const respMat = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payloadMat)
        });
        const resMat = await respMat.json();
        
        if (!resMat.success) {
            alert('Error materias: ' + (resMat.error || 'No se pudo actualizar'));
            return;
        }
        
        // Actualizar cursos
        const payloadCur = {
            action: 'actualizarCursos',
            correoAdmin: sesionActual.correo,
            correoDocente: editandoCorreo,
            cursos: cursosSeleccionados
        };
        
        const respCur = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payloadCur)
        });
        const resCur = await respCur.json();
        
        if (resCur.success) {
            alert('Materias y cursos actualizados');
            cerrarModal('modal-materias');
            cargarListaUsuarios();
        } else {
            alert('Error cursos: ' + (resCur.error || 'No se pudo actualizar'));
        }
    } catch (err) {
        alert('Error de conexion');
    }
}

// --- MODAL CAMBIAR PASSWORD ---
function abrirModalPassword(correo) {
    editandoCorreo = correo;
    document.getElementById('cambiar-pass-usuario').textContent = correo;
    document.getElementById('nueva-password-input').value = '';
    document.getElementById('confirmar-password-input').value = '';
    document.getElementById('modal-password').style.display = 'flex';
}

async function confirmarCambiarPassword() {
    const nueva = document.getElementById('nueva-password-input').value;
    const confirmar = document.getElementById('confirmar-password-input').value;
    
    if (!nueva || nueva.length < 4) {
        alert('La contrasena debe tener al menos 4 caracteres');
        return;
    }
    if (nueva !== confirmar) {
        alert('Las contrasenas no coinciden');
        return;
    }
    
    try {
        const payload = {
            action: 'cambiarPassword',
            correoSolicitante: sesionActual.correo,
            correoObjetivo: editandoCorreo,
            nuevaPassword: nueva
        };
        
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });
        const res = await resp.json();
        
        if (res.success) {
            alert('Contrasena actualizada');
            cerrarModal('modal-password');
        } else {
            alert('Error: ' + (res.error || 'No se pudo cambiar la contrasena'));
        }
    } catch (err) {
        alert('Error de conexion');
    }
}

// --- ELIMINAR USUARIO ---
async function confirmarEliminarUsuario(correo) {
    if (!confirm(`Seguro que desea eliminar a ${correo}?`)) return;
    
    try {
        const payload = {
            action: 'eliminarUsuario',
            correoAdmin: sesionActual.correo,
            correoEliminar: correo
        };
        
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });
        const res = await resp.json();
        
        if (res.success) {
            alert('Usuario eliminado');
            cargarListaUsuarios();
        } else {
            alert('Error: ' + (res.error || 'No se pudo eliminar'));
        }
    } catch (err) {
        alert('Error de conexion');
    }
}

// ============================================================
// 15. UTILIDADES
// ============================================================

function borrarMemoriaLocal() {
    if (confirm("Limpiar la memoria de esta sesion? Los datos guardados en Sheets no se borran.")) {
        memoriaGlobal = {};
        location.reload();
    }
}

// ============================================================
// GESTION DE PRECEPTORES (Jefe y Sub-jefe de Preceptores)
// ============================================================

let listaPreceptoresGlobal = [];

async function cargarPreceptores() {
    const tbody = document.getElementById('tbody-preceptores');

    try {
        const url = `${URL_WEB_APP}?action=listarPreceptores&correo=${encodeURIComponent(sesionActual.correo)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();

        if (resultado.success && resultado.preceptores) {
            listaPreceptoresGlobal = resultado.preceptores;
        } else {
            listaPreceptoresGlobal = [];
        }
    } catch (err) {
        console.error('Error cargando preceptores:', err);
        listaPreceptoresGlobal = [];
    }

    renderizarPreceptores();
}

function renderizarPreceptores() {
    const tbody = document.getElementById('tbody-preceptores');
    const busqueda = (document.getElementById('buscar-preceptor')?.value || '').toLowerCase();

    let preceptores = [...listaPreceptoresGlobal];

    if (busqueda) {
        preceptores = preceptores.filter(p =>
            (p.correo || '').toLowerCase().includes(busqueda) ||
            (p.turno || '').toLowerCase().includes(busqueda) ||
            (p.curso || '').toLowerCase().includes(busqueda)
        );
    }

    if (preceptores.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="padding:20px;text-align:center;color:#777;">No hay preceptores registrados</td></tr>';
        return;
    }

    tbody.innerHTML = preceptores.map((p, i) => `
        <tr>
            <td>${i + 1}</td>
            <td style="text-align:left;">${p.correo}</td>
            <td>${p.turno || '-'}</td>
            <td>${p.curso || '-'}</td>
            <td>
                <button class="btn-action btn-delete" onclick="eliminarPreceptor('${p.correo}')" title="Eliminar preceptor">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function filtrarPreceptores() {
    renderizarPreceptores();
}

function mostrarModalAgregarPreceptor() {
    document.getElementById('preceptor-correo').value = '';
    document.getElementById('preceptor-password').value = '';
    document.getElementById('preceptor-turno').value = '';
    document.getElementById('preceptor-curso').value = '';
    document.getElementById('modal-agregar-preceptor').style.display = 'flex';
}

async function confirmarAgregarPreceptor() {
    const correo = document.getElementById('preceptor-correo').value.trim();
    const password = document.getElementById('preceptor-password').value;
    const turno = document.getElementById('preceptor-turno').value;
    const curso = document.getElementById('preceptor-curso').value;

    if (!correo || !password || !turno || !curso) {
        alert('Complete todos los campos');
        return;
    }
    if (!correo.endsWith('@cpem32.edu.ar')) {
        alert('El correo debe ser institucional (@cpem32.edu.ar)');
        return;
    }
    if (password.length < 4) {
        alert('La contrasena debe tener al menos 4 caracteres');
        return;
    }

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'agregarPreceptor',
                correoSolicitante: sesionActual.correo,
                datos: {
                    correo: correo,
                    password: password,
                    rol: 'preceptor',
                    turno: turno,
                    curso: curso
                }
            })
        });
        const res = await resp.json();

        if (res.success) {
            alert('Preceptor agregado exitosamente');
            cerrarModal('modal-agregar-preceptor');
            cargarPreceptores();
        } else {
            alert('Error: ' + (res.error || 'No se pudo agregar el preceptor'));
        }
    } catch (err) {
        console.error(err);
        alert('Error de conexion al agregar preceptor');
    }
}

async function eliminarPreceptor(correo) {
    if (!confirm(`Esta seguro de eliminar al preceptor ${correo}?`)) return;

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'eliminarPreceptor',
                correoSolicitante: sesionActual.correo,
                correoEliminar: correo
            })
        });
        const res = await resp.json();

        if (res.success) {
            alert('Preceptor eliminado');
            cargarPreceptores();
        } else {
            alert('Error: ' + (res.error || 'No se pudo eliminar'));
        }
    } catch (err) {
        console.error(err);
        alert('Error de conexion');
    }
}

// ============================================================
// 16. INICIALIZACIÓN AL CARGAR PÁGINA
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // Verificar sesion existente
    sesionActual = obtenerSesion();
    
    if (sesionActual) {
        iniciarApp();
    } else {
        document.getElementById('login-overlay').style.display = 'flex';
        document.getElementById('app-main').style.display = 'none';
    }
    
    // Enter en login
    document.getElementById('pass-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verificarAcceso();
    });
    document.getElementById('user-email').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('pass-input').focus();
    });

    // Event listeners
    document.getElementById('turnos').addEventListener('change', () => actualizarSelectorCursos());
    document.getElementById('cursos').addEventListener('change', () => actualizarMaterias());
    
    ['materias', 'periodos'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => validarYFiltrar());
    });
    
    document.getElementById('tabla-notas').addEventListener('change', (e) => {
        if (e.target.classList.contains('nota-input')) respaldarAPantallaAMemoria();
    });
    
    document.getElementById('btnGuardar').onclick = guardarEnGoogleSheets;
});

// ============================================================
// DESCARGAR COMPROBANTE PDF
// ============================================================

function actualizarEstadoBotonComprobante() {
    const btn = document.getElementById('btnComprobante');
    const msg = document.getElementById('msg-desbloquear');
    if (!btn) return;
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    if (!turno || !curso || !materia || !periodo) {
        btn.style.display = 'none';
        if (msg) msg.style.display = 'none';
        return;
    }
    const llave = `${turno}-${curso}-${materia}-${periodo}`;
    const guardado = llavesGuardadas.has(llave);
    btn.style.display = 'inline-flex';
    btn.disabled = !guardado;
    btn.style.opacity = guardado ? '1' : '0.5';
    btn.style.cursor = guardado ? 'pointer' : 'not-allowed';
    btn.title = guardado ? 'Descargar comprobante' : 'Primero debe guardar los datos';
    if (guardado) {
        btn.classList.add('activo');
        if (msg) msg.style.display = 'none';
    } else {
        btn.classList.remove('activo');
        if (msg) msg.style.display = 'block';
    }
}

function verificarDatosCompletos() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    const datosM = memoriaGlobal[llaveID] || {};
    const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
    const anoCurso = parseInt(curso.charAt(0));
    const esBimestre = periodo.includes("Bimestre");
    const esCuatrimestre = (periodo === "1" || periodo === "2");
    const incompletos = [];

    alumnos.forEach((alumno, idx) => {
        const d = datosM[alumno.dni] || {};
        let falta = [];
        // Verificar nota (siempre requerida)
        if (esCuatrimestre) {
            // Para cuatrimestre: nota numérica 1-10
            const notaNum = parseInt(d.nota);
            if (!d.nota || d.nota.trim() === '' || isNaN(notaNum) || notaNum < 1 || notaNum > 10) {
                falta.push('Nota');
            }
        } else {
            // Para bimestre: nota conceptual
            if (!d.nota || d.nota === '-' || d.nota === 'Sin Calificar' || d.nota.trim() === '') {
                falta.push('Nota');
            }
        }
        // Verificar observaciones
        const obs = d.observacion || d.sel_1 || '';
        if (!obs || obs.trim() === '' || obs === '-') {
            falta.push('Observacion');
        }
        // Verificar categorias cualitativas (solo 4to/5to o bimestre)
        if (anoCurso >= 4 || esBimestre) {
            const criterios = ["Interpreta", "Relaciona", "Aplica", "Participacion", "Autonomia", "Realizacion de TP", "Cumplimiento AEC"];
            criterios.forEach(crit => {
                const val = d[crit];
                if (!val || val === '-' || val.trim() === '') {
                    falta.push(crit);
                }
            });
        }
        if (falta.length > 0) {
            incompletos.push({ nombre: alumno.nombre, faltantes: falta });
        }
    });

    return incompletos;
}

let _callbackDescargarComprobante = null;

function mostrarModalVerificacion(incompletos, callbackDescargar) {
    // Crear modal si no existe
    let modal = document.getElementById('modal-verificacion');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-verificacion';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content" style="max-width:600px;">
                <div class="modal-header">
                    <h3><i class="fas fa-exclamation-triangle" style="color:#f0ad4e;"></i> Verificacion de datos</h3>
                    <button class="btn-close-modal" id="btn-cerrar-modal-v">&times;</button>
                </div>
                <div class="modal-body" id="modal-verif-body"></div>
                <div class="modal-footer" id="modal-verif-footer"></div>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('btn-cerrar-modal-v').addEventListener('click', cerrarModalVerificacion);
    }

    const body = document.getElementById('modal-verif-body');
    const footer = document.getElementById('modal-verif-footer');

    if (incompletos.length === 0) {
        body.innerHTML = '<p style="text-align:center;color:#28a745;"><i class="fas fa-check-circle" style="font-size:2rem;"></i><br><br>Todos los alumnos tienen sus datos completos.</p>';
        footer.innerHTML = `
            <button class="btn-save" id="btn-modal-descargar"><i class="fas fa-file-pdf"></i> Descargar comprobante</button>
            <button class="btn-cancel" id="btn-modal-cancelar">Cancelar</button>
        `;
    } else {
        let html = `<p style="color:#856404;"><strong>Atencion:</strong> Los siguientes alumnos tienen datos incompletos:</p>
        <div id="scroll-top-modal" style="overflow-x:auto; overflow-y:hidden; height:12px;">
            <div style="width:100%; min-width:500px; height:1px;"></div>
        </div>
        <div id="scroll-bottom-modal" style="max-height:250px; overflow-y:auto; overflow-x:auto; border:1px solid #ddd; border-radius:4px; margin:10px 0;">
        <table style="width:100%; font-size:0.85rem; min-width:500px;">
            <thead><tr style="background:#f8f9fa;"><th style="white-space:nowrap;">Alumno</th><th style="white-space:nowrap;">Datos faltantes</th></tr></thead>
            <tbody>`;
        incompletos.forEach(item => {
            html += `<tr><td style="padding:6px; border-bottom:1px solid #eee;">${item.nombre}</td><td style="padding:6px; border-bottom:1px solid #eee; color:#721c24;">${item.faltantes.join(', ')}</td></tr>`;
        });
        html += `</tbody></table></div>`;
        body.innerHTML = html;
        
        // Sincronizar scroll entre arriba y abajo
        const scrollTop = document.getElementById('scroll-top-modal');
        const scrollBottom = document.getElementById('scroll-bottom-modal');
        if (scrollTop && scrollBottom) {
            scrollTop.addEventListener('scroll', () => { scrollBottom.scrollLeft = scrollTop.scrollLeft; });
            scrollBottom.addEventListener('scroll', () => { scrollTop.scrollLeft = scrollBottom.scrollLeft; });
        }
        
        footer.innerHTML = `
            <button class="btn-save" style="background:#6c757d;" id="btn-modal-descargar"><i class="fas fa-file-pdf"></i> Omitir y descargar igual</button>
            <button class="btn-save" id="btn-modal-volver"><i class="fas fa-edit"></i> Volver a completar</button>
        `;
    }

    _callbackDescargarComprobante = callbackDescargar;

    // Asignar event listeners
    const btnDescargar = document.getElementById('btn-modal-descargar');
    const btnCancelar = document.getElementById('btn-modal-cancelar');
    const btnVolver = document.getElementById('btn-modal-volver');

    if (btnDescargar) {
        btnDescargar.onclick = function() {
            console.log('[DEBUG] btn-modal-descargar clickeado');
            const cb = _callbackDescargarComprobante;
            cerrarModalVerificacion();
            console.log('[DEBUG] modal cerrado, callback guardado:', typeof cb);
            if (typeof cb === 'function') {
                console.log('[DEBUG] ejecutando callback...');
                cb();
            } else {
                console.log('[DEBUG] callback no es funcion:', cb);
            }
        };
    }
    if (btnCancelar) {
        btnCancelar.onclick = cerrarModalVerificacion;
    }
    if (btnVolver) {
        btnVolver.onclick = cerrarModalVerificacion;
    }

    modal.style.display = 'flex';
}

function cerrarModalVerificacion() {
    const modal = document.getElementById('modal-verificacion');
    if (modal) modal.style.display = 'none';
    _callbackDescargarComprobante = null;
}

function descargarComprobante() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    const llave = `${turno}-${curso}-${materia}-${periodo}`;

    // 1. Verificar que se haya guardado previamente
    if (!llavesGuardadas.has(llave)) {
        alert('Primero debe guardar los datos en la base de datos antes de descargar el comprobante.');
        return;
    }

    // 2. Verificar que todos los alumnos tengan datos completos
    const incompletos = verificarDatosCompletos();

    // 3. Mostrar modal y luego descargar
    console.log('[DEBUG] descargarComprobante - incompletos:', incompletos.length);
    mostrarModalVerificacion(incompletos, async () => {
        console.log('[DEBUG] callback ejecutandose, llamando generarPDFComprobante');
        await generarPDFComprobante();
    });
}

async function generarPDFComprobante() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    
    const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    const datosM = memoriaGlobal[llaveID] || {};
    const anoCurso = parseInt(curso.charAt(0));
    const esBimestre = periodo.includes("Bimestre");
    
    // Obtener fecha limite y verificar terminidad
    let mensajeTermino = '';
    try {
        const fechaLimite = await obtenerFechaLimitePeriodo(periodo);
        const resultadoTermino = verificarTerminidad(fechaLimite);
        
        // Verificar si los datos estan completos
        const incompletos = verificarDatosCompletos();
        if (incompletos.length === 0) {
            mensajeTermino = resultadoTermino.mensaje;
        } else {
            mensajeTermino = 'Falta Completar Datos';
        }
    } catch (err) {
        console.error('Error verificando fecha limite:', err);
    }
    
    const ahora = new Date();
    const fechaStr = ahora.toLocaleDateString('es-AR');
    const horaStr = ahora.toLocaleTimeString('es-AR');
    
    // Formatear nombre del periodo para mostrar
    let nombrePeriodoMostrar = periodo;
    if (periodo === "1") nombrePeriodoMostrar = "1er Cuatrimestre";
    else if (periodo === "2") nombrePeriodoMostrar = "2do Cuatrimestre";
    else if (periodo === "1_Bimestre") nombrePeriodoMostrar = "1er Bimestre";
    else if (periodo === "2_Bimestre") nombrePeriodoMostrar = "2do Bimestre";
    else if (periodo === "3_Bimestre") nombrePeriodoMostrar = "3er Bimestre";
    else if (periodo === "4_Bimestre") nombrePeriodoMostrar = "4to Bimestre";
    
    let html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Comprobante - ${materia} - ${curso}</title>
        <style>
            @page { size: A4 landscape; margin: 15mm; }
            * { box-sizing: border-box; }
            body { font-family: Arial, sans-serif; font-size: 10pt; margin: 0; padding: 20px; color: #333; position: relative; }
            .header { text-align: center; border-bottom: 2px solid #0056b3; padding-bottom: 10px; margin-bottom: 15px; }
            .header h1 { margin: 0; font-size: 16pt; color: #0056b3; }
            .header h2 { margin: 5px 0; font-size: 12pt; color: #555; }
            .info { display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 9pt; }
            .info-box { background: #f5f5f5; padding: 8px 12px; border-radius: 4px; }
            .termino-box { position: absolute; top: 20px; right: 20px; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-size: 9pt; }
            .termino-ok { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
            .termino-fuera { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
            .termino-incompleto { background: #fff3cd; color: #856404; border: 1px solid #ffc107; }
            table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
            th { background: #0056b3; color: white; padding: 6px 4px; text-align: left; font-weight: bold; border: 1px solid #004494; }
            td { padding: 5px 4px; border: 1px solid #ddd; vertical-align: top; }
            tr:nth-child(even) { background: #f9f9f9; }
            .col-n { width: 30px; text-align: center; }
            .col-nombre { width: 180px; }
            .col-nota { width: 80px; }
            .col-obs { width: 200px; }
            .col-crit { width: 55px; text-align: center; font-size: 7.5pt; }
            .footer { margin-top: 15px; text-align: center; font-size: 8pt; color: #777; border-top: 1px solid #ddd; padding-top: 10px; }
            .badge { display: inline-block; padding: 2px 6px; border-radius: 3px; font-size: 7.5pt; font-weight: bold; }
            .badge-siempre { background: #d4edda; color: #155724; }
            .badge-frecuentemente { background: #fff3cd; color: #856404; }
            .badge-a_veces { background: #ffe0b2; color: #e65100; }
            .badge-nunca { background: #f8d7da; color: #721c24; }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>CPEM 32 - Sistema Integral de Acreditacion</h1>
            <h2>Comprobante de Carga de Calificaciones</h2>
        </div>
        
        <div class="info">
            <div class="info-box">
                <strong>Turno:</strong> ${turno}<br>
                <strong>Curso:</strong> ${curso}<br>
                <strong>Materia:</strong> ${materia}
            </div>
            <div class="info-box">
                <strong>Periodo:</strong> ${nombrePeriodoMostrar}<br>
                <strong>Docente:</strong> ${sesionActual ? sesionActual.correo : ''}<br>
                <strong>Fecha:</strong> ${fechaStr} ${horaStr}
            </div>
        </div>
        
        ${mensajeTermino ? `<div class="termino-box ${mensajeTermino.includes('Fuera') ? 'termino-fuera' : mensajeTermino.includes('Falta') ? 'termino-incompleto' : 'termino-ok'}">
            ${mensajeTermino}
        </div>` : ''}
        
        <table>
            <thead>
                <tr>
                    <th class="col-n">N°</th>
                    <th class="col-nombre">Apellido y Nombre</th>
                    ${anoCurso >= 4 || esBimestre ? `
                        <th class="col-nota">Nota</th>
                        <th class="col-obs">Observaciones</th>
                        <th class="col-crit">Interp.</th>
                        <th class="col-crit">Relac.</th>
                        <th class="col-crit">Aplica</th>
                        <th class="col-crit">Partic.</th>
                        <th class="col-crit">Auton.</th>
                        <th class="col-crit">Real. TP</th>
                        <th class="col-crit">Cump. AEC</th>
                    ` : `
                        <th class="col-nota">Nota</th>
                        <th class="col-obs">Observaciones</th>
                    `}
                </tr>
            </thead>
            <tbody>
    `;
    
    alumnos.forEach((alumno, index) => {
        const d = datosM[alumno.dni] || {};
        const nota = d.nota || '-';
        const obs = d.observacion || d.sel_1 || '-';
        
        html += `<tr>
            <td class="col-n">${index + 1}</td>
            <td class="col-nombre">${alumno.nombre}</td>
        `;
        
        if (anoCurso >= 4 || esBimestre) {
            const badgeClass = (val) => {
                const v = (val || '-').toString().toLowerCase().trim();
                if (v === 'siempre') return 'badge-siempre';
                if (v === 'frecuentemente') return 'badge-frecuentemente';
                if (v === 'a veces') return 'badge-a_veces';
                if (v === 'nunca') return 'badge-nunca';
                return '';
            };
            const fmt = (val) => {
                const v = (val || '-').toString().trim();
                const cls = badgeClass(v);
                return cls ? `<span class="badge ${cls}">${v}</span>` : v;
            };
            
            html += `
                <td class="col-nota">${nota}</td>
                <td class="col-obs">${obs}</td>
                <td class="col-crit">${fmt(d['Interpreta'])}</td>
                <td class="col-crit">${fmt(d['Relaciona'])}</td>
                <td class="col-crit">${fmt(d['Aplica'])}</td>
                <td class="col-crit">${fmt(d['Participacion'])}</td>
                <td class="col-crit">${fmt(d['Autonomia'])}</td>
                <td class="col-crit">${fmt(d['Realizacion de TP'])}</td>
                <td class="col-crit">${fmt(d['Cumplimiento AEC'])}</td>
            `;
        } else {
            html += `
                <td class="col-nota">${nota}</td>
                <td class="col-obs">${obs}</td>
            `;
        }
        
        html += `</tr>`;
    });
    
    html += `
            </tbody>
        </table>
        
        <div class="footer">
            Comprobante generado por SIA CPEM 32 | ${fechaStr} ${horaStr}<br>
            Este documento es una constancia de las calificaciones cargadas en el sistema.
        </div>
        
        <div class="no-print" style="text-align:center; margin-top:20px;">
            <button onclick="window.print()" style="padding:10px 30px; font-size:12pt; cursor:pointer;">
                <i class="fas fa-print"></i> Imprimir / Guardar como PDF
            </button>
            <p style="font-size:9pt; color:#777;">Para guardar como PDF, seleccione "Guardar como PDF" en el destino de la impresora.</p>
        </div>
    </body>
    </html>`;
    
    // Crear iframe invisible para imprimir
    console.log('[DEBUG] generarPDFComprobante - creando iframe');
    let iframe = document.getElementById('iframe-comprobante');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'iframe-comprobante';
        iframe.style.position = 'fixed';
        iframe.style.top = '-9999px';
        iframe.style.left = '-9999px';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        document.body.appendChild(iframe);
    }

    try {
        iframe.contentDocument.open();
        iframe.contentDocument.write(html);
        iframe.contentDocument.close();
        console.log('[DEBUG] HTML escrito en iframe');

        // Esperar a que cargue y luego imprimir
        setTimeout(() => {
            console.log('[DEBUG] llamando print() en iframe');
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        }, 500);

        // Guardar copia en Google Drive en segundo plano (sin bloquear al docente)
        guardarComprobanteEnDrive(html, turno, curso, materia, periodo);

    } catch (err) {
        console.error('[DEBUG] Error al generar PDF:', err);
        alert('Error al generar el comprobante: ' + err.message);
    }
}

/**
 * Envía el HTML del comprobante al Apps Script para guardarlo en Google Drive.
 * Se ejecuta en segundo plano; si falla, solo loguea el error sin molestar al docente.
 */
async function guardarComprobanteEnDrive(html, turno, curso, materia, periodo) {
    try {
        // 1. Renderizar el HTML en un iframe oculto para capturarlo con html2canvas
        const iframeCaptura = document.createElement('iframe');
        iframeCaptura.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:1200px;height:900px;border:none;visibility:hidden;';
        document.body.appendChild(iframeCaptura);

        // Escribir el HTML en el iframe y esperar a que cargue
        await new Promise(resolve => {
            iframeCaptura.onload = resolve;
            iframeCaptura.contentDocument.open();
            iframeCaptura.contentDocument.write(html);
            iframeCaptura.contentDocument.close();
        });

        // Pequeña pausa para que los estilos terminen de aplicarse
        await new Promise(r => setTimeout(r, 600));

        // 2. Capturar el contenido del iframe como imagen PNG con html2canvas
        const canvas = await html2canvas(iframeCaptura.contentDocument.body, {
            scale: 2,           // doble resolucion para mejor calidad
            useCORS: true,
            backgroundColor: '#ffffff',
            width: 1200,
            windowWidth: 1200
        });

        document.body.removeChild(iframeCaptura);

        // 3. Convertir canvas a base64 PNG (sin el prefijo "data:image/png;base64,")
        const pngBase64 = canvas.toDataURL('image/png').split(',')[1];
        const fechaHora = new Date().toISOString();

        // 4. Enviar la imagen a Apps Script via POST (text/plain, sin preflight CORS)
        const params = new URLSearchParams({
            action:   'guardarComprobanteDrive',
            correo:   sesionActual.correo,
            curso,
            turno,
            materia,
            periodo,
            fechaHora,
            tipo:     'png'
        });

        const resp = await fetch(URL_WEB_APP + '?' + params.toString(), {
            method:   'POST',
            mode:     'cors',
            redirect: 'follow',
            headers:  { 'Content-Type': 'text/plain;charset=utf-8' },
            body:     pngBase64
        });

        const resultado = await resp.json();

        if (resultado.success) {
            console.log('[Drive] Comprobante guardado como imagen:', resultado.nombre);
            mostrarToastDrive('✅ Copia guardada en Google Drive');
        } else {
            console.warn('[Drive] No se pudo guardar:', resultado.error);
            mostrarToastDrive('⚠️ No se pudo guardar en Drive: ' + resultado.error);
        }
    } catch (err) {
        console.warn('[Drive] Error:', err.message);
        mostrarToastDrive('⚠️ Error al guardar en Drive');
    }
}

/**
 * Muestra una pequeña notificación en la esquina inferior derecha por 4 segundos.
 */
function mostrarToastDrive(mensaje) {
    let toast = document.getElementById('toast-drive');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-drive';
        toast.style.cssText = [
            'position:fixed', 'bottom:24px', 'right:24px', 'z-index:9999',
            'background:#28a745', 'color:white', 'padding:12px 20px',
            'border-radius:8px', 'font-size:14px', 'font-weight:bold',
            'box-shadow:0 4px 12px rgba(0,0,0,0.25)', 'transition:opacity 0.5s',
            'opacity:0', 'pointer-events:none'
        ].join(';');
        document.body.appendChild(toast);
    }
    toast.textContent = mensaje;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 4000);
}

// ============================================================
// LIBROS ESCOLARES PDF (ADMIN)
// ============================================================

function correoANombre(correo) {
    if (!correo || !correo.includes('@')) return correo;
    const parte = correo.split('@')[0];
    const partes = parte.split('.');
    return partes.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(' ');
}

function obtenerDocentePorMateria(materia, usuarios) {
    if (!usuarios) return 'Sin docente';
    for (const u of usuarios) {
        if (u.rol === 'docente' && u.materias_permitidas && u.materias_permitidas.includes(materia)) {
            return correoANombre(u.correo);
        }
    }
    return 'Sin docente';
}

function obtenerNotasAlumnoParaLibro(alumno, curso, materias, periodo) {
    const resultado = {};
    const turno = Object.keys(baseDeDatosAlumnos).find(t => baseDeDatosAlumnos[t] && baseDeDatosAlumnos[t][curso]);
    if (!turno) return resultado;

    materias.forEach(materia => {
        const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
        const datosM = memoriaGlobal[llaveID] || {};
        const d = datosM[alumno.dni] || {};
        resultado[materia] = {
            nota: d.nota || '',
            interpreta: d['Interpreta'] || '-',
            relaciona: d['Relaciona'] || '-',
            aplica: d['Aplica'] || '-',
            participacion: d['Participacion'] || '-',
            autonomia: d['Autonomia'] || '-',
            realizacion_tp: d['Realizacion de TP'] || '-',
            cumplimiento_aec: d['Cumplimiento AEC'] || '-',
            observacion: d.observacion || d.sel_1 || ''
        };
    });
    return resultado;
}

function generarHTMLLibroCurso(curso, usuarios, periodo = '1_Bimestre', anio = '2025') {
    const alumnos = [];
    Object.keys(baseDeDatosAlumnos).forEach(turno => {
        if (baseDeDatosAlumnos[turno][curso]) {
            baseDeDatosAlumnos[turno][curso].forEach(a => alumnos.push({...a, turno}));
        }
    });
    alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    const materias = materiasPorCursoLibro[curso] || [];
    const anoCurso = parseInt(curso.charAt(0));
    const esArea = anoCurso <= 3; // 1°-3° año: notas por área

    // Formatear nombre del periodo
    let nombrePeriodo = periodo;
    if (periodo === "1") nombrePeriodo = "1er Cuatrimestre";
    else if (periodo === "2") nombrePeriodo = "2do Cuatrimestre";
    else if (periodo === "1_Bimestre") nombrePeriodo = "1er Bimestre";
    else if (periodo === "2_Bimestre") nombrePeriodo = "2do Bimestre";

    const ahora = new Date();
    const fechaStr = ahora.toLocaleDateString('es-AR');

    let html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Libro Escolar - ${curso}</title>
        <style>
            @page { size: A4 landscape; margin: 10mm; }
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: Arial, sans-serif; font-size: 8pt; color: #333; padding: 15px; }
            .page-break { page-break-after: always; }
            .header-libro {
                text-align: center;
                background: linear-gradient(135deg, #c8a2c8 0%, #d4a5d4 100%);
                color: #4a154b;
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 10px;
                border: 2px solid #b080b0;
            }
            .header-libro h1 { font-size: 14pt; margin: 0; }
            .header-libro h2 { font-size: 11pt; margin: 4px 0; }
            .header-libro .datos-alumno {
                display: flex;
                justify-content: space-around;
                margin-top: 8px;
                font-size: 9pt;
                font-weight: bold;
            }
            table.libro-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 7.5pt;
                margin-top: 8px;
            }
            table.libro-table th {
                background: #e8d5e8;
                color: #4a154b;
                padding: 5px 3px;
                text-align: center;
                font-weight: bold;
                border: 1px solid #b080b0;
                font-size: 7pt;
            }
            table.libro-table td {
                padding: 4px 3px;
                border: 1px solid #ccc;
                text-align: center;
                vertical-align: middle;
            }
            table.libro-table td.area-cell {
                text-align: left;
                font-weight: bold;
                background: #f5f0f5;
                font-size: 7pt;
            }
            table.libro-table td.materia-cell {
                text-align: left;
                font-size: 7pt;
            }
            table.libro-table td.docente-cell {
                text-align: left;
                font-size: 6.5pt;
                color: #555;
            }
            .nota-final { font-weight: bold; font-size: 8pt; }
            .obs-cell { text-align: left; font-size: 6.5pt; max-width: 120px; }
            .firma-section {
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
                font-size: 8pt;
            }
            .firma-box {
                text-align: center;
                width: 45%;
            }
            .firma-line {
                border-top: 1px solid #333;
                margin-top: 25px;
                padding-top: 5px;
            }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body>`;

    alumnos.forEach((alumno, idx) => {
        const notas = obtenerNotasAlumnoParaLibro(alumno, curso, materias, periodo);

        html += `
        <div class="header-libro">
            <h1>CPEM N° 32</h1>
            <h2>Informe ${nombrePeriodo} - ${anio}</h2>
            <div class="datos-alumno">
                <span>Alumno/a: <u>${alumno.nombre}</u></span>
                <span>Curso: <u>${curso}</u></span>
                <span>Preceptor/a: ____________________</span>
            </div>
        </div>

        <table class="libro-table">
            <thead>
                <tr>
                    <th style="width:18%">${esArea ? 'ÁREA' : 'ESPACIO CURRICULAR'}</th>
                    ${!esArea ? '<th style="width:14%">Docente</th>' : ''}
                    <th style="width:7%">Interp.</th>
                    <th style="width:7%">Relac.</th>
                    <th style="width:7%">Aplica</th>
                    <th style="width:7%">Partic.</th>
                    <th style="width:7%">Auton.</th>
                    <th style="width:9%">Realiz. TP</th>
                    <th style="width:9%">Cump. AEC</th>
                    <th style="width:8%">Nota Final</th>
                    <th style="width:20%">Observaciones</th>
                </tr>
            </thead>
            <tbody>`;

        if (esArea) {
            // 1°-3°: agrupar por área
            const areasUnicas = [...new Set(materias.map(m => areasPorMateria[m] || m))];
            areasUnicas.forEach(area => {
                const materiasDelArea = materias.filter(m => (areasPorMateria[m] || m) === area);
                const primeraMateria = materiasDelArea[0];
                const d = notas[primeraMateria] || {};
                const docente = obtenerDocentePorMateria(primeraMateria, usuarios);

                html += `
                <tr>
                    <td class="area-cell">${area}<br><span style="font-weight:normal;font-size:6.5pt;color:#666;">${docente}</span></td>
                    <td>${d.interpreta || '-'}</td>
                    <td>${d.relaciona || '-'}</td>
                    <td>${d.aplica || '-'}</td>
                    <td>${d.participacion || '-'}</td>
                    <td>${d.autonomia || '-'}</td>
                    <td>${d.realizacion_tp || '-'}</td>
                    <td>${d.cumplimiento_aec || '-'}</td>
                    <td class="nota-final">${d.nota || ''}</td>
                    <td class="obs-cell">${d.observacion || ''}</td>
                </tr>`;
            });
        } else {
            // 4°-5°: por materia individual
            materias.forEach(materia => {
                const d = notas[materia] || {};
                const docente = obtenerDocentePorMateria(materia, usuarios);

                html += `
                <tr>
                    <td class="materia-cell">${materia}</td>
                    <td class="docente-cell">${docente}</td>
                    <td>${d.interpreta || '-'}</td>
                    <td>${d.relaciona || '-'}</td>
                    <td>${d.aplica || '-'}</td>
                    <td>${d.participacion || '-'}</td>
                    <td>${d.autonomia || '-'}</td>
                    <td>${d.realizacion_tp || '-'}</td>
                    <td>${d.cumplimiento_aec || '-'}</td>
                    <td class="nota-final">${d.nota || ''}</td>
                    <td class="obs-cell">${d.observacion || ''}</td>
                </tr>`;
            });
        }

        html += `
            </tbody>
        </table>

        <div class="firma-section">
            <div class="firma-box">
                <div class="firma-line">Firma de la Familia</div>
            </div>
            <div class="firma-box">
                <div class="firma-line">Firma del Equipo de Gobierno</div>
            </div>
        </div>

        ${idx < alumnos.length - 1 ? '<div class="page-break"></div>' : ''}`;
    });

    html += `
        <div class="no-print" style="text-align:center; margin-top:20px;">
            <button onclick="window.print()" style="padding:10px 30px; font-size:12pt; cursor:pointer;">
                <i class="fas fa-print"></i> Imprimir / Guardar como PDF
            </button>
        </div>
    </body>
    </html>`;

    return html;
}

function imprimirHTMLenIframe(html) {
    let iframe = document.getElementById('iframe-comprobante');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'iframe-comprobante';
        iframe.style.position = 'fixed';
        iframe.style.top = '-9999px';
        iframe.style.left = '-9999px';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        document.body.appendChild(iframe);
    }
    try {
        iframe.contentDocument.open();
        iframe.contentDocument.write(html);
        iframe.contentDocument.close();
        setTimeout(() => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        }, 500);
    } catch (err) {
        console.error('Error al generar PDF:', err);
        alert('Error al generar el PDF: ' + err.message);
    }
}

async function descargarLibroPorCurso() {
    const curso = document.getElementById('select-curso-libro').value;
    const anio = document.getElementById('input-anio-libro').value;
    const periodo = document.getElementById('select-periodo-libro').value;
    
    if (!curso) {
        alert('Seleccione un curso');
        return;
    }

    // Cargar usuarios para obtener docentes
    let usuarios = [];
    try {
        const resp = await fetch(URL_WEB_APP + '?action=listarUsuarios&correo=' + encodeURIComponent(sesionActual.correo));
        const res = await resp.json();
        if (res.success) usuarios = res.usuarios || [];
    } catch (e) { console.warn('No se pudieron cargar usuarios para docentes', e); }

    const html = generarHTMLLibroCurso(curso, usuarios, periodo, anio);
    imprimirHTMLenIframe(html);
}

async function descargarLibroTodosCursos() {
    const anio = document.getElementById('input-anio-libro').value;
    const periodo = document.getElementById('select-periodo-libro').value;
    const cursos = Object.keys(materiasPorCursoLibro);
    let usuarios = [];
    try {
        const resp = await fetch(URL_WEB_APP + '?action=listarUsuarios&correo=' + encodeURIComponent(sesionActual.correo));
        const res = await resp.json();
        if (res.success) usuarios = res.usuarios || [];
    } catch (e) { console.warn('No se pudieron cargar usuarios para docentes', e); }

    let htmlCompleto = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Libro Escolar - Todos los Cursos</title>
        <style>
            @page { size: A4 landscape; margin: 10mm; }
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: Arial, sans-serif; font-size: 8pt; color: #333; padding: 15px; }
            .page-break { page-break-after: always; }
        </style>
    </head>
    <body>`;

    cursos.forEach((curso, idx) => {
        const htmlCurso = generarHTMLLibroCurso(curso, usuarios, periodo, anio);
        // Extraer solo el body content
        const bodyMatch = htmlCurso.match(/<body>([\s\S]*)<\/body>/);
        if (bodyMatch) {
            htmlCompleto += bodyMatch[1];
            if (idx < cursos.length - 1) htmlCompleto += '<div class="page-break"></div>';
        }
    });

    htmlCompleto += `
        <div class="no-print" style="text-align:center; margin-top:20px;">
            <button onclick="window.print()" style="padding:10px 30px; font-size:12pt; cursor:pointer;">
                <i class="fas fa-print"></i> Imprimir / Guardar como PDF
            </button>
        </div>
    </body>
    </html>`;

    imprimirHTMLenIframe(htmlCompleto);
}

// ============================================================
// ELIMINAR RECURSANTE
// ============================================================

async function eliminarRecursante(turno, curso, materia, dni) {
    if (!confirm('¿Está seguro de eliminar este recursante de la base de datos?')) return;
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'eliminarRecursante',
                correo: sesionActual.correo,
                turno: turno,
                curso: curso,
                materia: materia,
                dni: dni
            })
        });
        const resultado = await resp.json();
        if (resultado.success) {
            // Eliminar de memoria local
            if (recursantesPorMateria[curso]?.[materia]) {
                recursantesPorMateria[curso][materia] = recursantesPorMateria[curso][materia].filter(r => r.dni !== dni);
            }
            alert('✅ Recursante eliminado correctamente.');
            cargarAlumnos();
            cargarListaAlumnosGestion();
        } else {
            alert('❌ Error: ' + (resultado.error || 'No se pudo eliminar'));
        }
    } catch (err) {
        console.error(err);
        alert('❌ Error de conexión al eliminar recursante.');
    }
}

// ============================================================
// TOGGLE BOTON BORRADO (checkbox de confirmacion)
// ============================================================

function toggleBotonBorrado() {
    const chk = document.getElementById('chk-confirmar-borrado');
    const btn = document.getElementById('btnLimpiar');
    const txt = document.getElementById('txt-borrado-estado');
    if (chk && btn) {
        btn.disabled = !chk.checked;
        btn.style.opacity = chk.checked ? '1' : '0.5';
        btn.style.cursor = chk.checked ? 'pointer' : 'not-allowed';
        if (txt) {
            txt.textContent = chk.checked ? 'Borrado habilitado' : 'Borrado bloqueado';
            txt.style.color = chk.checked ? '#28a745' : '#721c24';
        }
    }
}
// ============================================================
// INFORME CUATRIMESTRAL - GENERADOR DE PDF
// ============================================================

const AREAS_POR_CURSO = {
  "1 A": [
    { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIA","FILOSOFIA"] },
    { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES"] },
    { area: "Ciencias Naturales",                        materias: ["BIOLOGIA","FISICO QUIMICA"] },
    { area: "Matemática e Informática",                  materias: ["MATEMATICA","INFORMATICA"] },
    { area: "Educación Física Integral",                 materias: ["EDUCACION FISICA INTEGRAL"] },
    { area: "Interárea Ed. Sexual Integral",             materias: ["EDUCACION SEXUAL INTEGRAL"] },
    { area: "Interárea Tecnología",                      materias: ["INTEGRACION TECNOLOGICA"] }
  ],
  "3 A": [
    { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIA","FILOSOFIA"] },
    { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES"] },
    { area: "Ciencias Naturales",                        materias: ["BIOLOGIA","FISICO QUIMICA"] },
    { area: "Matemática e Informática",                  materias: ["MATEMATICA","INFORMATICA"] },
    { area: "Educación Física Integral",                 materias: ["EDUCACION FISICA INTEGRAL"] },
    { area: "Interárea Tecnología",                      materias: ["INTEGRACION TECNOLOGICA"] },
    { area: "Comunicación y Medios",                     materias: ["COMUNICACION Y MEDIOS"] },
    { area: "Investigación de las Orientaciones",        materias: ["INVESTIGACION DE LAS ORIENTACIONES"] }
  ]
};
["1 B","1 C","1 D","1 E","2 A","2 B","2 C","2 D"].forEach(c => AREAS_POR_CURSO[c] = AREAS_POR_CURSO["1 A"]);
["3 B","3 C"].forEach(c => AREAS_POR_CURSO[c] = AREAS_POR_CURSO["3 A"]);

const MATERIAS_4_5 = {
  "4 A": ["HISTORIA","GEOGRAFIA","SOCIEDADES POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLOGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMIAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
  "4 B": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLOGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMIAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
  "4 C": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLOGICAS","QUIMICA","FISICA","FILOSOFIA DE LAS CIENCIAS","GEOPOLITICA","ESTUDIOS SOCIALES Y CULTURALES","GENEALOGIAS DE LAS ARTES Y LAS ESTETICA","COMUNICACION, DISCURSO Y PRODUCCION DE SENTIDOS","PROYECTOS SOCIOCOMUNITARIOS"],
  "5 A": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACION FISICA INTEGRAL","INFORMATICA V"],
  "5 B": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACION FISICA INTEGRAL","INFORMATICA V"],
  "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMATICA","FISICA","QUIMICA","CIENCIAS BIOLOGICAS","GEOGRAFIA ARGENTINA","HISTORIA","INSTRUCCION CIVICA","FILOSOFIA","EDUCACION FISICA INTEGRAL","INFORMATICA V"]
};

const anioDesde = c => parseInt((c || '').trim().charAt(0)) || 0;

function mostrarModalInforme() {
  const modal = document.getElementById('modal-informe');
  if (!modal) { alert('Modal de informe no encontrado'); return; }
  const selCurso   = document.getElementById('informe-curso');
  const esPreceptor = sesionActual.rol === 'preceptor';
  selCurso.innerHTML = '<option value="">Seleccione curso</option>';
  const todos = [...Object.keys(AREAS_POR_CURSO), ...Object.keys(MATERIAS_4_5)];
  const lista = esPreceptor ? (sesionActual.cursos_permitidos || []) : [...new Set(todos)].sort();
  lista.forEach(c => { selCurso.innerHTML += `<option value="${c}">${c}</option>`; });
  if (esPreceptor && lista.length === 1) { selCurso.value = lista[0]; selCurso.disabled = true; }
  else selCurso.disabled = false;
  modal.style.display = 'flex';
}

function cerrarModalInforme() {
  const m = document.getElementById('modal-informe');
  if (m) m.style.display = 'none';
}

async function generarInformes() {
  const curso     = document.getElementById('informe-curso').value;
  const periodo   = document.getElementById('informe-periodo').value;
  const turno     = document.getElementById('informe-turno').value;
  const preceptor = document.getElementById('informe-preceptor').value.trim();

  if (!curso || !periodo || !turno) { alert('Completá Curso, Turno y Período.'); return; }

  const btn = document.getElementById('btn-generar-informes');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando datos...';

  try {
    const url = `${URL_WEB_APP}?action=obtenerInformeCurso`
      + `&correo=${encodeURIComponent(sesionActual.correo)}`
      + `&curso=${encodeURIComponent(curso)}`
      + `&turno=${encodeURIComponent(turno)}`
      + `&periodo=${encodeURIComponent(periodo)}`;

    const resp = await fetch(url, { method:'GET', mode:'cors' });
    const data = await resp.json();

    if (!data.success) { alert('Error: ' + data.error); return; }
    if (!data.alumnos?.length) { alert('No se encontraron alumnos para este curso.'); return; }

    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Generando PDF...`;

    const es4o5 = anioDesde(curso) >= 4;

    // Generar UN SOLO HTML con todos los alumnos (una página por alumno con page-break)
    const paginasHTML = data.alumnos.map(alumno => {
      const notas = data.notasMap[alumno.nombre] || {};
      return es4o5
        ? paginaInforme45(alumno, curso, turno, periodo, preceptor, notas, data.docenteMap)
        : paginaInforme13(alumno, curso, turno, periodo, preceptor, notas, data.docenteMap);
    }).join('\n');

    abrirInformeEnPestana(paginasHTML);

    cerrarModalInforme();

  } catch(err) {
    alert('Error: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-file-pdf"></i> Generar Informes PDF';
  }
}

function abrirInformeEnPestana(paginasHTML) {
  // Usamos localStorage para pasar el HTML a la nueva pestaña
  // (window.open + onload no funciona en file:// por restricciones del navegador)
  try {
    localStorage.setItem('sia_informe_html', paginasHTML);
    localStorage.setItem('sia_informe_ts', Date.now().toString());
  } catch(e) {
    alert('Error al preparar el informe: ' + e.message);
    return;
  }
  const ventana = window.open('informe.html', '_blank');
  if (!ventana) {
    alert('El navegador bloqueó la ventana emergente.\nPermití las ventanas emergentes para este sitio e intentá de nuevo.');
  }
}

// ── CABECERA COMÚN — usa clases de informe.html ──────────────
function cabeceraHTML(alumno, curso, preceptor) {
  return `<div class="cabecera">
    <div class="cab-cpem">
      <span class="titulo">CPEM N° 32</span>
      <span class="subtitulo">Informe Cuatrimestral 2026</span>
    </div>
    <div class="cab-nombre">${alumno.nombre}</div>
    <div class="cab-curso">${curso}</div>
    <div class="cab-prece">
      <span class="label">Preceptor/a:</span>
      <span class="valor">${preceptor || '_______________'}</span>
    </div>
  </div>`;
}

function valorCelda(v) {
  const s = (v || '').toString().trim();
  if (!s || s === '-') return `<td class="td-val">-</td>`;
  return `<td class="td-val tiene-valor">${s}</td>`;
}

// ── PLANILLA 1°–3° AÑO ───────────────────────────────────────
function paginaInforme13(alumno, curso, turno, periodo, preceptor, notas, docenteMap) {
  const areas = AREAS_POR_CURSO[curso] || [];
  let filas = '';
  areas.forEach(({ area, materias }) => {
    materias.forEach((mat, idx) => {
      const n   = notas[mat] || notas[mat.toUpperCase()] || {};
      const doc = docenteMap[mat] || docenteMap[mat.toUpperCase()] || '';
      const nota = (n.nota || '').toString().trim();
      filas += `<tr>
        ${idx === 0 ? `<td rowspan="${materias.length}" class="td-area">${area}</td>` : ''}
        <td class="td-mat" style="width:170px;">${mat}</td>
        <td class="td-docente">${doc}</td>
        <td class="td-obs">${n.obs1 || ''}</td>
        <td class="td-nota" style="width:48px;">${nota}</td>
      </tr>`;
    });
  });
  return `<div class="pagina">
    ${cabeceraHTML(alumno, curso, preceptor)}
    <table>
      <thead><tr>
        <th class="th-main" style="width:130px;">Área</th>
        <th class="th-main" style="width:170px;">Asignaturas</th>
        <th class="th-main" style="width:120px;">Docentes</th>
        <th class="th-main">Informe Cualitativo</th>
        <th class="th-main" style="width:48px;">NOTA</th>
      </tr></thead>
      <tbody>${filas}</tbody>
    </table>
  </div>`;
}

// ── PLANILLA 4°–5° AÑO ───────────────────────────────────────
function paginaInforme45(alumno, curso, turno, periodo, preceptor, notas, docenteMap) {
  const materias = MATERIAS_4_5[curso] || [];
  let filas = '';
  materias.forEach(mat => {
    const n   = notas[mat] || notas[mat.toUpperCase()] || {};
    const doc = docenteMap[mat] || docenteMap[mat.toUpperCase()] || '';
    const nota = (n.nota || '').toString().trim();
    filas += `<tr>
      <td class="td-mat" style="width:185px;">${mat}</td>
      <td class="td-docente">${doc}</td>
      ${valorCelda(n.interpreta)}
      ${valorCelda(n.relaciona)}
      ${valorCelda(n.aplica)}
      ${valorCelda(n.participacion)}
      ${valorCelda(n.autonomia)}
      ${valorCelda(n.realizacion_tp)}
      ${valorCelda(n.cumplimiento_aec)}
      <td class="td-nota" style="width:44px;">${nota}</td>
      <td class="td-obs">${n.obs1 || ''}</td>
    </tr>`;
  });
  return `<div class="pagina">
    ${cabeceraHTML(alumno, curso, preceptor)}
    <table>
      <thead>
        <tr>
          <th class="th-main" rowspan="2" style="width:185px;">Espacio curricular</th>
          <th class="th-main" rowspan="2" style="width:110px;">Docentes</th>
          <th class="th-main" colspan="3">Apropiación de conocimientos y saberes</th>
          <th class="th-main" colspan="3">Responsabilidad en su proceso de aprendizaje</th>
          <th class="th-main" rowspan="2" style="width:62px;">Cumplimiento de los AEC</th>
          <th class="th-main" rowspan="2" style="width:44px;">Nota final</th>
          <th class="th-main" rowspan="2">Observaciones</th>
        </tr>
        <tr>
          <th class="th-sub" style="width:50px;">Interpreta</th>
          <th class="th-sub" style="width:50px;">Relaciona</th>
          <th class="th-sub" style="width:44px;">Aplica</th>
          <th class="th-sub" style="width:60px;">Participación</th>
          <th class="th-sub" style="width:52px;">Autonomía</th>
          <th class="th-sub" style="width:68px;">Realización de TP/Actividades</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>
  </div>`;
}