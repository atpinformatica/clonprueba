// 1. BASE DE DATOS Y VARIABLES (Se mantienen igual)
const CLAVE_ACCESO = "1234"; 
const escalaConceptos = ["Excelente", "Muy Bien", "Bien", "Regular", "Ausente", "Sin Calificar"];
const baseDeDatosAlumnos = {
    "MAÃ‘ANA": {
        "1 A": [{ "dni": "1", "nombre": "CASTRO GORJÃ“N, Isabella" },
                { "dni": "2", "nombre": "CASTRO RAMOS, Kiara Nicole" },
                { "dni": "3", "nombre": "CURIPE, Huilen Juliana" },
                { "dni": "4", "nombre": "DE LA FUENTE Ian Jesus Julian" },
                { "dni": "5", "nombre": "ESPINOZA, Astrid Mercedes" },
                { "dni": "6", "nombre": "LOPEZ Kevin Alexander" },
                { "dni": "7", "nombre": "MARIN, Francisco Emmanuel" },
                { "dni": "8", "nombre": "MARTINEZ, Miqueas Sebastian" },
                { "dni": "9", "nombre": "OÃ‘A, Uziel Elian" },
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
                { "dni": "8", "nombre": "NARDONI NicolÃ¡s" },
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
                { "dni": "9", "nombre": "MUÃ‘OZ, Zahira Rubi" },
                { "dni": "10", "nombre": "NAMUNCURA ANCATRUZ, Eluney Quillen" },
                { "dni": "11", "nombre": "QUIDEL, Neemias Fracisco" },
                { "dni": "12", "nombre": "RANGUILEO, Xiomara" },
                { "dni": "13", "nombre": "RODRIGUEZ Angeles Martina" },
                { "dni": "14", "nombre": "SOTO JARPA, Matheo NehuÃ©n" },
                { "dni": "15", "nombre": "TORRES, Solange Angeles" },
                { "dni": "16", "nombre": "VARGAS OVIEDO, Zaiara Yazmin" },
                { "dni": "17", "nombre": "VEJARES, JesÃºs Emanuel" }],

        "2 D": [ { "dni": "1", "nombre": "AGUIRRE, Alma" },
                { "dni": "2", "nombre": "BARALDI SAN MARTIN, Antonella" },
                { "dni": "3", "nombre": "COFRE GUAYQUIMIL, Tiziana AimarÃ¡" },
                { "dni": "4", "nombre": "CURRULEF, Erica Dalila" },
                { "dni": "5", "nombre": "DE LA FUENTE TAUX, PiuquÃ©" },
                { "dni": "6", "nombre": "DIAZ, Jonatan Gael" },
                { "dni": "7", "nombre": "EPULLAN, Miqueas Tahiel" },
                { "dni": "8", "nombre": "FLORES, Juanita Piuque" },
                { "dni": "9", "nombre": "GALLARDO, Tiago Oscar" },
                { "dni": "10", "nombre": "GODOY, Mailen Belinda" },
                { "dni": "11", "nombre": "GONZALEZ, Morena Lucia" },
                { "dni": "12", "nombre": "LACIAR HERNANDEZ, Albertina DesireÃ©" },
                { "dni": "13", "nombre": "MENA TORRES, Martina" },
                { "dni": "14", "nombre": "PAINEL, JesÃºs Leonel" },
                { "dni": "15", "nombre": "POBLETE, Daniel Urias Misail" },
                { "dni": "16", "nombre": "RIQUELME, Silvina Nahiara" },
                { "dni": "17", "nombre": "SIMONELLI SAN MARTIN, Atilio" },
                { "dni": "18", "nombre": "VALIENTE, Thiago Daniel" },
                { "dni": "19", "nombre": "SOTO, Thiago BenjamÃ­n" }],

        "3 A": [ { "dni": "1", "nombre": "AGUIRRE MONTIVERO, Santiago Emanuel" },
                { "dni": "2", "nombre": "AGUIRRE, Ian" },
                { "dni": "3", "nombre": "ARIAS, Pier Mauricio Gonzalo" },
                { "dni": "4", "nombre": "ITURRIZA VILLALBA, Daniela" },
                { "dni": "5", "nombre": "LUNA RAMIREZ, Manuel Alejandro" },
                { "dni": "6", "nombre": "MATOS QUINTANA, Joaquin Ignacio" },
                { "dni": "7", "nombre": "NAMUNCURÃ ANCATRUZ, Ceferino JosÃ©" },
                { "dni": "8", "nombre": "NARDONI, Agostina" },
                { "dni": "9", "nombre": "NUÃ‘EZ, Mia JazmÃ­n" },
                { "dni": "10", "nombre": "ORTEGA MENA, Facundo Benjamin" },
                { "dni": "11", "nombre": "TORRES EPULLAN, Sahira Eluney" },
                { "dni": "12", "nombre": "ULLOA, Axel Nehemias" },
                { "dni": "13", "nombre": "VEJARES, Bianca Solange" },
                { "dni": "14", "nombre": "AQUITO, Maia Tahiana" }],

        "3 C": [ { "dni": "1", "nombre": "ALVEAR, Santiago Gedeon" },
                { "dni": "2", "nombre": "COLILUAN, Ariel Lautaro" },
                { "dni": "3", "nombre": "EPULLAN, Ivan Benjamin" },
                { "dni": "4", "nombre": "LEYVA, Simmon Elias" },
                { "dni": "5", "nombre": "MARTINEZ, Ian Alessandro" },
                { "dni": "6", "nombre": "MONSALBE MANRIQUE, Agustin Alejandro" },
                { "dni": "7", "nombre": "MORERO FERNANDEZ, Lorenzo BenjamÃ­n" },
                { "dni": "8", "nombre": "NAVARRO, Jazmin Aixa" },
                { "dni": "9", "nombre": "PAEZ CASTILLO, Valentina" },
                { "dni": "10", "nombre": "PAVÃ“N, Gael NicolÃ¡s" },
                { "dni": "11", "nombre": "QUIÃ‘INAO COLIPI, Valentina Daiana" },
                { "dni": "12", "nombre": "TAPIA, Sofia Isabel" },
                { "dni": "13", "nombre": "TORRES, Mia Florencia" },
                { "dni": "14", "nombre": "VALENTINI SEOANE, Catalina" },
                { "dni": "15", "nombre": "ZUÃ‘IGA, Aaron Leonel" }],

        "4 A": [ { "dni": "1", "nombre": "AGUIRRE, Lorenzo" },
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
                { "dni": "13", "nombre": "MONTAÃ‘EZ, Santiago Damian" },
                { "dni": "14", "nombre": "PICOSSI, Sofia" },
                { "dni": "15", "nombre": "PINO, Aldana del Valle Pilar" },
                { "dni": "16", "nombre": "QUIDEL, Leonel Luciano" },
                { "dni": "17", "nombre": "RAMIREZ SILVA, Nicolas Martin" },
                { "dni": "18", "nombre": "ROSEMBACH, Dayana Abygail" },
                { "dni": "19", "nombre": "TORRES SCHULMEISTER, Ramiro IsaÃ­as" },
                { "dni": "20", "nombre": "VIDAL, Jeremias David" }],

        "5 A": [ { "dni": "1", "nombre": "ARANDA, Lucio Calel" },
                { "dni": "2", "nombre": "ARNESE, Fernanda" },
                { "dni": "3", "nombre": "ESPINDOLA QUICHAN, JosÃ© David" },
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

        "5 C": [ { "dni": "1", "nombre": "ALANIZ, Joselyn Denise Luana" },
                { "dni": "2", "nombre": "ARIAS, Benjamin Tadeo" },
                { "dni": "3", "nombre": "ARRIETA, Tobias Emiliano" },
                { "dni": "4", "nombre": "BAEZA, Nayara Valentina" },
                { "dni": "5", "nombre": "BARRIENTOS, Alma Gabriela" },
                { "dni": "6", "nombre": "CASTRO, Ancatruz Ãngeles Xiomara" },
                { "dni": "7", "nombre": "CURIPE, Benjamin Oriel" },
                { "dni": "8", "nombre": "DIAZ, Santiago Armando" },
                { "dni": "9", "nombre": "FLORES, Luisana Alum" },
                { "dni": "10", "nombre": "GUAQUINCHAY RAPIMAN, RocÃ­o Abigail" },
                { "dni": "11", "nombre": "JARA BARDAS, Lautaro Nahuel" },
                { "dni": "12", "nombre": "LAMBRE, Mia Morena" },
                { "dni": "13", "nombre": "LIRA ELGUETA, Nabila" },
                { "dni": "14", "nombre": "MELGAREJO CLAVERIA, Guadalupe Marisol" },
                { "dni": "15", "nombre": "MORALES ARANDA, Zahira Abril" },
                { "dni": "16", "nombre": "RAMIREZ, Santino Fabian" },
                { "dni": "17", "nombre": "ZUÃ‘IGA, Sheila Sharell" },
                { "dni": "18", "nombre": "ROSAS, Nehuen Alejandro" },
                { "dni": "19", "nombre": "VILELLA, JoaquÃ­n Emilio" },
                { "dni": "20", "nombre": "VAZQUEZ, Thiago Samir" }]
    },

    "TARDE": {
        "1 B": [ { "dni": "1", "nombre": "BELLIDO, Alma Constanza" },
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

        "1 C": [ { "dni": "1", "nombre": "ALFARO BURGOS, Abril Antu" },
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

        "1 E": [ { "dni": "1", "nombre": "ALFARO ARIAS, Gabriela Elizabeth" },
                { "dni": "2", "nombre": "CASTRO ORTEGA, Alen Huilen" },
                { "dni": "3", "nombre": "CIFUENTES, Candela Solange" },
                { "dni": "4", "nombre": "DIAZ, Sheila Milagros Lujan" },
                { "dni": "5", "nombre": "GALIANO, Felipe Benjamin" },
                { "dni": "6", "nombre": "GUZMAN CARRIZO, Alen Margarita" },
                { "dni": "7", "nombre": "HUENEHUEQUE, Nehuen" },
                { "dni": "8", "nombre": "LILLO PAILLAQUEO, NicolÃ¡s Cristobal" },
                { "dni": "9", "nombre": "LOPEZ, Gael Ian Agustin" },
                { "dni": "10", "nombre": "MONTAÃ‘EZ, Valentina Yasmin" },
                { "dni": "11", "nombre": "SEPULVEDA, Juan David" },
                { "dni": "12", "nombre": "TORRES PERALTA, Tiziano Gael" },
                { "dni": "13", "nombre": "VIVANCO, Tahiel Aaron" }],

        "2 B": [ { "dni": "1", "nombre": "ABALOS, Nayara Sayen" },
                { "dni": "2", "nombre": "ANTIFIL JUAN, Armando Sebastian" },
                { "dni": "3", "nombre": "BAIGORRIA, Alex Elias" },
                { "dni": "4", "nombre": "BARRIA, Carlos Alejandro" },
                { "dni": "5", "nombre": "BEJAR, Juan Carlos Oscar" },
                { "dni": "6", "nombre": "CELIZ LILLO, ArÃ©li InalÃ©n" },
                { "dni": "7", "nombre": "CLODOMIRO, Agustina Evelyn" },
                { "dni": "8", "nombre": "GALLARDO, Marcos Antonio" },
                { "dni": "9", "nombre": "MARDONES, Astor Josue" },
                { "dni": "10", "nombre": "MARTINEZ BURGOS, Victor Andres" },
                { "dni": "11", "nombre": "PAGLIA MONSALBE, Sol Samara" },
                { "dni": "12", "nombre": "PAVON Aixa Araceli" },
                { "dni": "13", "nombre": "PEDROZO, Mateo" },
                { "dni": "14", "nombre": "RAMOS, Deyanira Huilen" }],

        "2 C": [ { "dni": "1", "nombre": "BARRIAS, Oriana Maria Eugenia" },
                { "dni": "2", "nombre": "BARRIAS, Sebastian Lucas" },
                { "dni": "3", "nombre": "CANIULLAN, Ana Luz" },
                { "dni": "4", "nombre": "CARRERA PAINE, Ignacio Alberto" },
                { "dni": "5", "nombre": "COLIPI ROMERO, Nahiara Evelin" },
                { "dni": "6", "nombre": "CONDORI COLIPI, Briana YazmÃ­n" },
                { "dni": "7", "nombre": "ESPINOSA MARTINEZ, Kiara Victoria" },
                { "dni": "8", "nombre": "JUAN, Ulises Alejandro" },
                { "dni": "9", "nombre": "LOPEZ ARRESE Luciana Malen" },
                { "dni": "10", "nombre": "MARQUEZ, Carlos Marcelo" },
                { "dni": "11", "nombre": "MARTIN, Gustavo Leonel" },
                { "dni": "12", "nombre": "RAMIREZ, Luna Tamara" },
                { "dni": "13", "nombre": "RODRIGUEZ, Tiziana JazmÃ­n" },
                { "dni": "14", "nombre": "TORRES, Cecilia Elizabeth" },
                { "dni": "15", "nombre": "VEJARES ALVAREZ Cristian Ian" }],

        "3 B": [ { "dni": "1", "nombre": "AQUITO MULLER, Thiago AgustÃ­n" },
                { "dni": "2", "nombre": "CLODOMIRO, Solange Rayen" },
                { "dni": "3", "nombre": "CURRULEF, Sara Estefania" },
                { "dni": "4", "nombre": "DEHAIS, Bautista" },
                { "dni": "5", "nombre": "GALLARDO, Marian Luz" },
                { "dni": "6", "nombre": "GUAYQUIMIL RINALDI, Aluen Ludmila" },
                { "dni": "7", "nombre": "GUAYQUIMIL, Lucio Esteban Nicolas" },
                { "dni": "8", "nombre": "MOLINA, Leandro Braian" },
                { "dni": "9", "nombre": "QUIDEL, Maite" },
                { "dni": "10", "nombre": "RANGUILEO RODRIGUEZ, Mauro Ezequiel" },
                { "dni": "11", "nombre": "RIQUELME, RocÃ­o Maylen" },
                { "dni": "12", "nombre": "RUIZ, Morena Virginia" },
                { "dni": "13", "nombre": "SIFUENTES, Eluney Antu" },
                { "dni": "14", "nombre": "SOTELO QUINCHAGUAL, Erik Calel" },
                { "dni": "15", "nombre": "TRAIPI Bianca Eunice" },
                { "dni": "16", "nombre": "URIBE FREDES, Sebastian Aron" },
                { "dni": "17", "nombre": "VEJARES, Luciana Jazmin" },
                { "dni": "18", "nombre": "ZAPATA, Demian" }],

        "4 B": [ { "dni": "1", "nombre": "ARIAS, Melanie Evelyn" },
                { "dni": "2", "nombre": "CANIULLAN, Aylin AnahÃ­" },
                { "dni": "3", "nombre": "CARO, Alan Isaac" },
                { "dni": "4", "nombre": "CASTILLO MONSALBE, Lautaro Tomas" },
                { "dni": "5", "nombre": "COLIPI, Santiago Martin" },
                { "dni": "6", "nombre": "CURRULEF, Marcos Antonio" },
                { "dni": "7", "nombre": "DIAZ, Cristian Tiziano" },
                { "dni": "8", "nombre": "DIAZ, LÃ¡zaro Lihuen" },
                { "dni": "9", "nombre": "HUENTENAO, Ana Belen" },
                { "dni": "10", "nombre": "MANQUEO, Matias Sebastian" },
                { "dni": "11", "nombre": "PALACIOS, Agustin GeremÃ­as Moises" },
                { "dni": "12", "nombre": "QUINCHAGUAL, Esteban" },
                { "dni": "13", "nombre": "QUINCHAGUAL, Samuel Juan" },
                { "dni": "14", "nombre": "ROJO, MarÃ­a Valentina" },
                { "dni": "15", "nombre": "TORRES, Rodrigo AndrÃ©s" },
                { "dni": "16", "nombre": "TRAIPI, Alan Uciel" },
                { "dni": "17", "nombre": "ZAPATA LOPEZ, Fabricio" }],

        "4 C": [ { "dni": "1", "nombre": "AGUIRRE, Ambar Constanza" },
                { "dni": "2", "nombre": "BEJAR, Emilia Soledad" },
                { "dni": "3", "nombre": "CELIZ, Walter Shair" },
                { "dni": "4", "nombre": "COLIPI, Victoria" },
                { "dni": "5", "nombre": "DIAZ SOTO, Ana Sol" },
                { "dni": "6", "nombre": "ESPINDOLA, Natali Daniela Noemi" },
                { "dni": "7", "nombre": "GOMEZ CABRERA, Alex Ezequias" },
                { "dni": "8", "nombre": "GONZÃLEZ, Mateo SebastiÃ¡n" },
                { "dni": "9", "nombre": "LEYVA, Julieta Antonella" },
                { "dni": "10", "nombre": "MARTINEZ, Yazmin Celeste" },
                { "dni": "11", "nombre": "PALACIOS VINET, Blas Agustin" },
                { "dni": "12", "nombre": "PEREZ MOYA, JoaquÃ­n Alejandro" },
                { "dni": "13", "nombre": "POSDELEY GUTIÃ‰RREZ, TomÃ¡s" },
                { "dni": "14", "nombre": "PROVENZAL, Teo MatÃ­as" },
                { "dni": "15", "nombre": "PUELPAN, Nehuen Agustin" },
                { "dni": "16", "nombre": "RAMIREZ, Marcos Antonio" },
                { "dni": "17", "nombre": "ZAPATA, Uriel Ismael" },
                { "dni": "18", "nombre": "ZURITA FREDES Juan Martin" }],
             
        "5 B": [ { "dni": "1", "nombre": "ÃLVAREZ DEALOY, Fiamma Maiten" },
                { "dni": "2", "nombre": "ANTICURA CHAMORRO, Milagros Yenien" },
                { "dni": "3", "nombre": "COLILUAN, Morena Yenien" },
                { "dni": "4", "nombre": "MUÃ‘OZ ALFARO, Belinda Guadalupe" },
                { "dni": "5", "nombre": "PINCHEIRA, Lucia Helena" },
                { "dni": "6", "nombre": "RAMIREZ, AyelÃ©n Claudia" },
                { "dni": "7", "nombre": "SARMIENTO HERNANDEZ, Bruno Gaston" },
                { "dni": "8", "nombre": "TORRES, Gaston MatÃ­as Unelen" },
                { "dni": "9", "nombre": "VAZQUEZ RAPIMAN, Karina Lucia" },
                { "dni": "10", "nombre": "ZAPATA, Milagros Valentina" }]
    }
};

const materiasPorCurso = {
    "1 A": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "1 B": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "1 C": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREATECNOLOGÃA"],
    "1 D": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "1 E": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "2 A": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "2 B": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "2 C": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "2 D": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
    "3 A": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA TECNOLOGÃA", "COMUNICACIÃ“N Y MEDIOS", "INVESTIGACIÃ“N DE LAS ORIENTACIONES"],
    "3 B": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA TECNOLOGÃA", "COMUNICACIÃ“N Y MEDIOS", "INVESTIGACIÃ“N DE LAS ORIENTACIONES"],
    "3 C": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA TECNOLOGÃA", "COMUNICACIÃ“N Y MEDIOS", "INVESTIGACIÃ“N DE LAS ORIENTACIONES"],
   "4 A": ["HISTORIA", "GEOGRAFÃA", "SOCIEDADES POLÃTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÃ“N FÃSICA INTEGRAL", "MATEMÃTICA","INFORMÃTICA","CS. BIOLÃ“GICAS","QUÃMICA","FÃSICA","ESTADOS, POLÃTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÃ“N CONTABLE","ECONOMÃAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÃ“N CURRICULAR: ANÃLISIS Y EVALUACIÃ“N DE PROYECTOS"],
    "4 B": ["HISTORIA", "GEOGRAFÃA", "SOCIEDADES, POLÃTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÃ“N FÃSICA INTEGRAL", "MATEMÃTICA","INFORMÃTICA","CS. BIOLÃ“GICAS","QUÃMICA","FÃSICA","ESTADOS, POLÃTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÃ“N CONTABLE","ECONOMÃAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÃ“N CURRICULAR: ANÃLISIS Y EVALUACIÃ“N DE PROYECTOS"],
    "4 C": ["HISTORIA", "GEOGRAFÃA", "SOCIEDADES, POLÃTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE", "LENGUAS OTRAS", "EDUCACIÃ“N FÃSICA INTEGRAL", "MATEMÃTICA","INFORMÃTICA", "CS. BIOLÃ“GICAS", "QUÃMICA", "FÃSICA", "FILOSOFÃA DE LAS CIENCIAS", "GEOPOLÃTICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGÃAS DE LAS ARTES Y LAS ESTÃ‰TICA", "COMUNICACIÃ“N, DISCURSO Y PRODUCCIÃ“N DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
    "5 A": ["IDIOMA EXTRANJERO INGLÃ‰S O FRANCÃ‰S","MATEMÃTICA FINANCIERA","MERCEOLOGÃA","GEOGRAFÃA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÃ“N DEL COMERCIO Y DE LA EMPRESA","ECONOMÃA POLÃTICA","CONTABILIDAD","ESTENOGRAFÃA","MECANOGRAFÃA","EDUCACIÃ“N FÃSICA","INFORMÃTICA V"],
    "5 B": ["IDIOMA EXTRANJERO INGLÃ‰S O FRANCÃ‰S","MATEMÃTICA FINANCIERA","MERCEOLOGÃA","GEOGRAFÃA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÃ“N DEL COMERCIO Y DE LA EMPRESA","ECONOMÃA POLÃTICA","CONTABILIDAD","ESTENOGRAFÃA","MECANOGRAFÃA","EDUCACIÃ“N FÃSICA","INFORMÃTICA V"],
    "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMÃTICA","FÃSICA","QUÃMICA","CIENCIAS BIOLÃ“GICAS","GEOGRAFÃA ARGENTINA","HISTORIA","INSTRUCCIÃ“N CÃVICA","FILOSOFÃA","EDUCACIÃ“N FÃSICA","INFORMÃTICA V"]
    
};
const criteriosCualitativos = ["Interpreta", "Relaciona", "Aplica", "ParticipaciÃ³n", "AutonomÃ­a", "RealizaciÃ³n de TP", "Cumplimiento AEC"];
const opcionesCualitativas = ["-", "Siempre", "Frecuentemente", "A veces", "Nunca", "Sin referencia"];
const frasesPorMateria = {
    "MATEMATICA": ["Resuelve problemas con autonomÃ­a", "Requiere reforzar operaciones bÃ¡sicas", "Buen razonamiento lÃ³gico"],
    "ANALISIS": ["Deriva e integra correctamente", "Aplica conceptos a funciones complejas", "Requiere prÃ¡ctica en lÃ­mites"],
    "LENGUA": ["Excelente anÃ¡lisis de textos", "Debe mejorar la ortografÃ­a", "Participa activamente en clase"],
    "LITERATURA": ["Profundo anÃ¡lisis literario", "Relaciona autores y contextos", "Buena expresiÃ³n escrita"],
    "DEFAULT": ["Cumple con los objetivos", "En proceso de mejora", "Faltas reiteradas"]
};

let tabActual = 'espacios';
let memoriaGlobal = {}; // Se carga desde Google Sheets y tambien guarda borradores locales offline
let datosSheetsCargados = false; // Bandera para saber si ya termino la carga inicial
const URL_WEB_APP = 'https://script.google.com/macros/s/AKfycbyhoBBLl995zFUqmSe7Yc7B9_ICWOr4OGKn3vwf0kjpXUDOXNZxuhb2UXLeYlu4onz6NQ/exec';
const MEMORIA_LOCAL_KEY = 'sia_memoria_borrador_v1';

function guardarMemoriaLocal() {
    try {
        localStorage.setItem(MEMORIA_LOCAL_KEY, JSON.stringify(memoriaGlobal));
    } catch (err) {
        console.warn('No se pudo guardar el borrador local:', err);
    }
}

function cargarMemoriaLocal() {
    try {
        const guardado = localStorage.getItem(MEMORIA_LOCAL_KEY);
        if (guardado) memoriaGlobal = JSON.parse(guardado) || {};
    } catch (err) {
        console.warn('No se pudo cargar el borrador local:', err);
        memoriaGlobal = {};
    }
}

function actualizarMemoria(llaveID, dni, campo, valor) {
    if (!memoriaGlobal[llaveID]) memoriaGlobal[llaveID] = {};
    if (!memoriaGlobal[llaveID][dni]) memoriaGlobal[llaveID][dni] = {};
    memoriaGlobal[llaveID][dni][campo] = valor;
    guardarMemoriaLocal();
}

/**
 * Normaliza un nombre para comparaciÃ³n robusta:
 * quita espacios extra, pasa a mayÃºsculas y elimina tildes.
 * AsÃ­ "CASTRO GORJÃ“N, Isabella" == "Castro Gorjon,  Isabella" == true
 */
function normalizarNombre(str) {
    return str
        .trim()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // elimina tildes
        .replace(/\s+/g, " ");           // colapsa espacios mÃºltiples
}

/**
 * Carga todos los datos guardados desde Google Sheets al iniciar la app.
 * Usa el nombre normalizado como clave de bÃºsqueda para evitar fallos
 * por tildes, espacios o mayÃºsculas distintas entre Sheets y la base local.
 */
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
        let noEncontrados = [];

        filas.forEach(item => {
            // Normalizar periodo: Sheets guarda "1er Cuatrimestre", la app usa "1"
            let periodoInterno = item.periodo;
            if (item.periodo === "1er Cuatrimestre") periodoInterno = "1";
            if (item.periodo === "2do Cuatrimestre")  periodoInterno = "2";

            const llave = `${item.turno}-${item.curso}-${item.materia}-${periodoInterno}`;

            // Buscar el alumno por nombre normalizado (tolerante a tildes y espacios)
            const turnoData = baseDeDatosAlumnos[item.turno];
            if (!turnoData || !turnoData[item.curso]) return;

            const nombreBuscado = normalizarNombre(item.nombre);
            const alumno = turnoData[item.curso].find(
                a => normalizarNombre(a.nombre) === nombreBuscado
            );

            if (!alumno) {
                noEncontrados.push(`"${item.nombre}" (${item.curso} / ${item.turno})`);
                return;
            }

            if (!memoriaGlobal[llave]) memoriaGlobal[llave] = {};
            memoriaGlobal[llave][alumno.dni] = {
                nota:                  item.nota             || "",
                sel_1:                 item.obs1             || "",
                sel_2:                 item.obs2             || "",
                sel_3:                 item.obs3             || "",
                observacion:           item.obs4             || "",
                "Interpreta":          item.interpreta       || "-",
                "Relaciona":           item.relaciona        || "-",
                "Aplica":              item.aplica           || "-",
                "ParticipaciÃ³n":       item.participacion    || "-",
                "AutonomÃ­a":           item.autonomia        || "-",
                "RealizaciÃ³n de TP":   item.realizacion_tp   || "-",
                "Cumplimiento AEC":    item.cumplimiento_aec || "-"
            };
            cargados++;
        });

        datosSheetsCargados = true;
        guardarMemoriaLocal();
        console.log(`âœ… ${cargados} registros cargados desde Sheets.`);
        if (noEncontrados.length > 0) {
            console.warn("âš ï¸ Nombres en Sheets que no coinciden con la base local:", noEncontrados);
        }

    } catch (err) {
        console.warn("âš ï¸ No se pudo cargar desde Sheets, se usarÃ¡ memoria vacÃ­a.", err);
        datosSheetsCargados = true;
    }

    // Restaurar mensaje inicial de la tabla
    tbody.innerHTML = `<tr><td colspan="10" style="padding:30px;color:#777;text-align:center;">
        <i class="fas fa-filter"></i> Seleccione todos los filtros para visualizar la lista de alumnos
    </td></tr>`;
}

// 2. FUNCIONES DE ACCESO Y APOYO (Se mantienen igual)
function verificarAcceso() {
    const emailInput = document.getElementById('user-email').value.trim().toLowerCase();
    const passInput = document.getElementById('pass-input').value;
    const errorMsg = document.getElementById('login-error');
    const overlay = document.getElementById('login-overlay');
    const formatoEmail = /^[a-z]+\.[a-z]+@cpem32\.edu\.ar$/;

    if (formatoEmail.test(emailInput) && passInput === CLAVE_ACCESO) {
        sessionStorage.setItem('autenticado', 'true');
        overlay.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = !formatoEmail.test(emailInput) ? "Formato: nombre.apellido@cpem32.edu.ar" : "ContraseÃ±a incorrecta";
        document.getElementById('pass-input').value = "";
    }
}

function actualizarMaterias() {
    // 1. Obtenemos los elementos del HTML
    const selectCursos = document.getElementById("cursos");
    const selectMaterias = document.getElementById("materias");

    if (!selectCursos || !selectMaterias) {
        console.error("No se encontraron los selectores en el HTML.");
        return;
    }

    // 2. Leemos el curso y le quitamos espacios fantasmas al inicio o final
    const cursoSeleccionado = selectCursos.value.trim();

    // 3. Limpiamos el menÃº de materias por completo
    selectMaterias.innerHTML = '<option value="">Seleccione Materia</option>';

    console.log("Curso detectado en pantalla: '" + cursoSeleccionado + "'"); // Esto te ayudarÃ¡ a revisar en la consola

    // 4. Mapa de materias exacto segÃºn tus cursos de la base de datos
    const materiasPorCurso = {
        "1 A": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "1 B": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "1 C": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREATECNOLOGÃA"],
        "1 D": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "1 E": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "2 A": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "2 B": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "2 C": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "2 D": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA EDUCACIÃ“N SEXUAL INTEGRAL", "INTERÃREA TECNOLOGÃA"],
        "3 A": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA TECNOLOGÃA", "COMUNICACIÃ“N Y MEDIOS", "INVESTIGACIÃ“N DE LAS ORIENTACIONES"],
        "3 B": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA TECNOLOGÃA", "COMUNICACIÃ“N Y MEDIOS", "INVESTIGACIÃ“N DE LAS ORIENTACIONES"],
        "3 C": ["CIENCIAS SOCIALES, POLÃTICAS Y ECONÃ“MICAS", "LENGUAJES Y PRODUCCIÃ“N CULTURAL", "CIENCIAS NATURALES", "MATEMÃTICA E INFORMÃTICA", "EDUCACIÃ“N FÃSICA INTEGRAL", "INTERÃREA TECNOLOGÃA", "COMUNICACIÃ“N Y MEDIOS", "INVESTIGACIÃ“N DE LAS ORIENTACIONES"],
        "4 A": ["HISTORIA", "GEOGRAFÃA", "SOCIEDADES POLÃTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÃ“N FÃSICA INTEGRAL", "MATEMÃTICA","INFORMÃTICA","CS. BIOLÃ“GICAS","QUÃMICA","FÃSICA","ESTADOS, POLÃTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÃ“N CONTABLE","ECONOMÃAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÃ“N CURRICULAR: ANÃLISIS Y EVALUACIÃ“N DE PROYECTOS"],
        "4 B": ["HISTORIA", "GEOGRAFÃA", "SOCIEDADES, POLÃTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÃ“N FÃSICA INTEGRAL", "MATEMÃTICA","INFORMÃTICA","CS. BIOLÃ“GICAS","QUÃMICA","FÃSICA","ESTADOS, POLÃTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÃ“N CONTABLE","ECONOMÃAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÃ“N CURRICULAR: ANÃLISIS Y EVALUACIÃ“N DE PROYECTOS"],
        "4 C": ["HISTORIA", "GEOGRAFÃA", "SOCIEDADES, POLÃTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE", "LENGUAS OTRAS", "EDUCACIÃ“N FÃSICA INTEGRAL", "MATEMÃTICA","INFORMÃTICA", "CS. BIOLÃ“GICAS", "QUÃMICA", "FÃSICA", "FILOSOFÃA DE LAS CIENCIAS", "GEOPOLÃTICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGÃAS DE LAS ARTES Y LAS ESTÃ‰TICA", "COMUNICACIÃ“N, DISCURSO Y PRODUCCIÃ“N DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
        "5 A": ["IDIOMA EXTRANJERO INGLÃ‰S O FRANCÃ‰S","MATEMÃTICA FINANCIERA","MERCEOLOGÃA","GEOGRAFÃA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÃ“N DEL COMERCIO Y DE LA EMPRESA","ECONOMÃA POLÃTICA","CONTABILIDAD","ESTENOGRAFÃA","MECANOGRAFÃA","EDUCACIÃ“N FÃSICA","INFORMÃTICA V"],
        "5 B": ["IDIOMA EXTRANJERO INGLÃ‰S O FRANCÃ‰S","MATEMÃTICA FINANCIERA","MERCEOLOGÃA","GEOGRAFÃA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÃ“N DEL COMERCIO Y DE LA EMPRESA","ECONOMÃA POLÃTICA","CONTABILIDAD","ESTENOGRAFÃA","MECANOGRAFÃA","EDUCACIÃ“N FÃSICA","INFORMÃTICA V"],
        "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMÃTICA","FÃSICA","QUÃMICA","CIENCIAS BIOLÃ“GICAS","GEOGRAFÃA ARGENTINA","HISTORIA","INSTRUCCIÃ“N CÃVICA","FILOSOFÃA","EDUCACIÃ“N FÃSICA","INFORMÃTICA V"]
    };

    // 5. Verificamos si el curso existe en el mapa
    if (cursoSeleccionado && materiasPorCurso[cursoSeleccionado]) {
        
        // Cargamos las materias correspondientes
        materiasPorCurso[cursoSeleccionado].forEach(materia => {
            const option = document.createElement("option");
            option.value = materia;
            option.textContent = materia;
            selectMaterias.appendChild(option);
        });
        
    } else if (cursoSeleccionado !== "") {
        // Si el curso existe pero no le pusimos materias en el mapa todavÃ­a
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Sin materias registradas para este curso";
        selectMaterias.appendChild(option);
    }
}

function respaldarAPantallaAMemoria() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

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
    guardarMemoriaLocal();
}

function switchTab(tab) {
    // 1. Guardar cambios en memoria antes de movernos
    respaldarAPantallaAMemoria(); 
    tabActual = tab;

    // 2. Manejo visual de la interfaz
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`filtros-${tab}`).classList.add('active');

    // 3. CAPTURA DE ELEMENTOS PARA SINCRONIZAR Y BLOQUEAR
    const pEspacios = document.getElementById('periodos');
    const pCualitativas = document.getElementById('periodos-cualitativas');
    const selectorCursos = document.getElementById('cursos');
    const selectorTurnos = document.getElementById('turnos'); // Nuevo elemento a bloquear

    if (tab === 'cualitativas') {
        // --- PerÃ­odo: Sincronizar y Bloquear ---
        pCualitativas.value = pEspacios.value;
        pCualitativas.disabled = true;
        pCualitativas.style.backgroundColor = "#f0f0f0";

        // --- Curso: Bloquear ---
        selectorCursos.disabled = true;
        selectorCursos.style.backgroundColor = "#f0f0f0";
        selectorCursos.style.cursor = "not-allowed";

        // --- Turno: Bloquear (NUEVO) ---
        selectorTurnos.disabled = true;
        selectorTurnos.style.backgroundColor = "#f0f0f0";
        selectorTurnos.style.cursor = "not-allowed";

    } else {
        // --- Desbloqueo Total al volver a Espacios Curriculares ---
        pEspacios.disabled = false;
        
        selectorCursos.disabled = false;
        selectorCursos.style.backgroundColor = "";
        selectorCursos.style.cursor = "default";

        selectorTurnos.disabled = false;
        selectorTurnos.style.backgroundColor = "";
        selectorTurnos.style.cursor = "default";
    }

    // 4. Refrescar la vista de la tabla
    validarYFiltrar();
}

function validarYFiltrar() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    let filtrosCompletos = false;
    
    if (tabActual === 'espacios') {
        const mat = document.getElementById('materias').value;
        const per = document.getElementById('periodos').value;
        if (turno && curso && mat && per) filtrosCompletos = true;
    } else {
        const area = document.getElementById('areas-cualitativas').value;
        const perC = document.getElementById('periodos-cualitativas').value;
        if (turno && curso && area && perC) filtrosCompletos = true;
    }

    if (filtrosCompletos) {
        cargarAlumnos(); 
    } else {
        limpiarTabla();
    }
}

function actualizarSelectorCursos() {
    const turnoSeleccionado = document.getElementById('turnos').value;
    const selectorCursos = document.getElementById('cursos');
    selectorCursos.innerHTML = '<option value="">Seleccione Curso</option>';
    
    if (turnoSeleccionado && baseDeDatosAlumnos[turnoSeleccionado]) {
        Object.keys(baseDeDatosAlumnos[turnoSeleccionado]).sort().forEach(curso => {
            const option = document.createElement('option');
            option.value = curso; 
            option.textContent = curso; 
            selectorCursos.appendChild(option);
        });
    }
    actualizarMaterias();
    validarYFiltrar();
}

// 3. CARGAR ALUMNOS (AJUSTADO SEGÃšN TU SOLICITUD)
function cargarAlumnos() {
    const tbody = document.querySelector('#tabla-notas tbody');
    const headerRow = document.getElementById('header-row');
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

    // Si falta algÃºn filtro, limpiamos la tabla y salimos
    if (!turno || !curso || !materia || !periodo) {
        limpiarTabla();
        return;
    }

    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    const datosM = memoriaGlobal[llaveID] || {};
    const anioCurso = curso ? parseInt(curso.charAt(0)) : 0;

    // 1. CONFIGURACIÃ“N DE ENCABEZADOS (TÃTULOS)
    headerRow.innerHTML = '<th style="width: 50px;">NÂ°</th><th>Apellido y Nombre</th>';
    
    if (tabActual === 'espacios') {
        headerRow.innerHTML += '<th>Nota</th>';
        // Formato extendido para 4to/5to O cualquier aÃ±o en Bimestre
        if (anioCurso >= 4 || periodo.includes("Bimestre")) {
            headerRow.innerHTML += '<th>Observaciones (Frase y Nota Personal)</th>';
        }
    } else {
        // Formato para Cualitativas
        if (anioCurso <= 3 && !periodo.includes("Bimestre")) {
            // Formato Cuatrimestral de 1ro a 3ro
            headerRow.innerHTML += '<th>Observaciones Cualitativas (3 Frases y Nota)</th>';
        } else {
            // Formato de Criterios para 4to/5to O 1ro a 3ro en Bimestre
            criteriosCualitativos.forEach(crit => {
                headerRow.innerHTML += `<th style="font-size: 0.75rem;">${crit}</th>`;
            });
        }
    }

    // 2. RENDERIZADO DE FILAS
    tbody.innerHTML = ''; 
    const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
    
    // Buscar frases correspondientes a la materia
    let frases = frasesPorMateria["DEFAULT"];
    for(let clave in frasesPorMateria) { 
        if(materia.toUpperCase().includes(clave)) frases = frasesPorMateria[clave]; 
    }

    alumnos.forEach((alumno, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-dni', alumno.dni);
        const persistido = datosM[alumno.dni] || {};
        let html = `<td>${index + 1}</td><td style="text-align:left;">${alumno.nombre}</td>`;

        if (tabActual === 'espacios') {
            // --- PESTAÃ‘A ESPACIOS CURRICULARES ---
            const n = persistido.nota || "";
            html += `<td><select class="nota-input select-nota" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'nota', this.value)">
                        <option value="">-</option>`;
          
            //NOTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            // Usamos la nueva escala conceptual en lugar de nÃºmeros  AQUI SE REALIZA LA LOS CAMBIOS BIMESTRE 
                escalaConceptos.forEach(e => {
                 html += `<option value="${e}" ${n == e ? 'selected' : ''}>${e}</option>`;
             });
             html += `</select></td>`;
            
            //ACTIVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            //-----SE DEBE ACTIVAR ESTE CODIGO----- PARA QUE SE ACTIVEN LAS NOTAS DE 1 AL 10 AL CUATRIMESTRE
            // for(let i=1; i<=10; i++) html += `<option value="${i}" ${n==i?'selected':''}>${i}</option>`;
            // html += `</select></td>`;
            


            if (anioCurso >= 4 || periodo.includes("Bimestre")) {
                const valP = persistido[`sel_1`] || "";
                html += `<td><div style="display:flex; flex-direction:column; gap:3px;">
                            <select class="nota-input select-obs-multiple" data-pos="1" style="font-size:0.85rem;" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'sel_1', this.value)">
                                <option value="">Seleccione una frase...</option>
                                ${frases.map(f => `<option value="${f}" ${valP===f?'selected':''}>${f}</option>`).join('')}
                            </select>
                            <textarea class="nota-input text-obs" placeholder="Nota personal..." style="height:40px;" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'observacion', this.value)">${persistido.observacion || ""}</textarea>
                         </div></td>`;
            }
            
        } else {
            // --- PESTAÃ‘A CATEGORÃAS CUALITATIVAS ---
            if (anioCurso <= 3 && !periodo.includes("Bimestre")) {
                // Formato de 3 DESPLEGABLES (Cuatrimestres 1-3)
                html += `<td><div style="display:flex; flex-direction:column; gap:3px;">`;
                for(let p=1; p<=3; p++) {
                    const valP = persistido[`sel_${p}`] || "";
                    html += `<select class="nota-input select-obs-multiple" data-pos="${p}" style="font-size:0.85rem;" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'sel_${p}', this.value)">
                                <option value="">Frase ${p}...</option>
                                ${frases.map(f => `<option value="${f}" ${valP===f?'selected':''}>${f}</option>`).join('')}
                             </select>`;
                }
                html += `<textarea class="nota-input text-obs" placeholder="Nota personal..." style="height:45px;" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'observacion', this.value)">${persistido.observacion || ""}</textarea>
                         </div></td>`;
            } else {
                // Formato de CRITERIOS (Bimestres o 4to/5to)
                criteriosCualitativos.forEach(crit => {
                    const valC = persistido[crit] || "-";
                    html += `<td><select class="nota-input select-nota-cualitativa" data-criterio="${crit}" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', '${crit}', this.value)">
                                ${opcionesCualitativas.map(o => `<option value="${o}" ${valC===o?'selected':''}>${o}</option>`).join('')}
                             </select></td>`;
                });
            }
        }
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}

// 4. EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    cargarMemoriaLocal();

    if (sessionStorage.getItem('autenticado') === 'true') {
        const overlay = document.getElementById('login-overlay');
        if(overlay) overlay.style.display = 'none';
    }

    const btnLogin = document.getElementById('btn-login'); 
    if(btnLogin) btnLogin.addEventListener('click', verificarAcceso);

    document.getElementById('turnos').addEventListener('change', actualizarSelectorCursos);
    document.getElementById('cursos').addEventListener('change', actualizarMaterias);
    ['materias', 'periodos', 'areas-cualitativas', 'periodos-cualitativas'].forEach(id => {
        const el = document.getElementById(id); if(el) el.addEventListener('change', validarYFiltrar);
    });
    document.getElementById('tabla-notas').addEventListener('change', (e) => {
        if (e.target.classList.contains('nota-input')) respaldarAPantallaAMemoria();
    });
    document.getElementById('btnGuardar').onclick = guardarEnGoogleSheets;
    // BotÃ³n limpiar: ahora solo limpia la memoria en RAM de esta sesiÃ³n (los datos en Sheets no se tocan)
    document.getElementById('btnLimpiar').onclick = () => {
        if(confirm("Â¿Limpiar la memoria de esta sesiÃ³n? Los datos guardados en Sheets no se borran.")) {
            memoriaGlobal = {};
            localStorage.removeItem(MEMORIA_LOCAL_KEY);
            location.reload();
        }
    };

    // *** CLAVE: Cargar datos desde Google Sheets al abrir la app ***
    cargarDesdeSheetsAlIniciar();

    // *** PWA: Registrar Service Worker para soporte offline ***
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            console.log('Service Worker registrado');
            if ('SyncManager' in window) {
                reg.sync.register('sync-notas').catch(err => console.warn('No se pudo registrar sync:', err));
            }
        }).catch(err => console.warn('SW no registrado:', err));

        // Escuchar mensajes del SW (ej: sincronizaciÃ³n completada)
        navigator.serviceWorker.addEventListener('message', event => {
            if (event.data === 'SYNC_COMPLETADA' || event.data?.tipo === 'SYNC_COMPLETADA') {
                mostrarBannerSincronizado();
            }
        });
    }

    // Cuando vuelve la conexiÃ³n, disparar sincronizaciÃ³n manual
    window.addEventListener('online', () => {
        mostrarEstadoConexion(true);
        // Pedir al SW que sincronice la cola pendiente
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage('SYNC_NOW');
        }
        // TambiÃ©n intentar Background Sync si estÃ¡ disponible
        if ('serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.ready.then(reg => reg.sync.register('sync-notas'));
        }
    });

    window.addEventListener('offline', () => mostrarEstadoConexion(false));

    // Mostrar estado inicial de conexiÃ³n
    mostrarEstadoConexion(navigator.onLine);
});

// ============================================================
// INDICADORES DE CONEXIÃ“N
// ============================================================
function mostrarEstadoConexion(online) {
    let banner = document.getElementById('banner-conexion');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'banner-conexion';
        banner.style.cssText = `
            position: fixed; bottom: 0; left: 0; right: 0;
            padding: 10px; text-align: center; font-weight: bold;
            font-size: 0.9rem; z-index: 9999; transition: all 0.3s;
        `;
        document.body.appendChild(banner);
    }
    if (online) {
        banner.style.background = '#27ae60';
        banner.style.color = 'white';
        banner.innerHTML = 'âœ… Conectado â€” los datos pendientes se estÃ¡n sincronizando...';
        setTimeout(() => { banner.style.display = 'none'; }, 4000);
    } else {
        banner.style.display = 'block';
        banner.style.background = '#e74c3c';
        banner.style.color = 'white';
        banner.innerHTML = 'âš ï¸ Sin conexiÃ³n â€” podÃ©s seguir cargando notas, se guardarÃ¡n y enviarÃ¡n cuando vuelva internet';
    }
}

function mostrarBannerSincronizado() {
    const banner = document.getElementById('banner-conexion');
    if (banner) {
        banner.style.background = '#27ae60';
        banner.innerHTML = 'âœ… Â¡Datos sincronizados con Google Sheets!';
        setTimeout(() => { banner.style.display = 'none'; }, 4000);
    }
}

// 5. GUARDAR DATOS â€” con soporte offline
async function guardarEnGoogleSheets() {
    respaldarAPantallaAMemoria();
    const btn = document.getElementById('btnGuardar');
    btn.innerText = "Enviando..."; btn.disabled = true;

    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

    let nombrePeriodoParaPlanilla = periodo; 
    if (periodo === "1") nombrePeriodoParaPlanilla = "1er Cuatrimestre";
    else if (periodo === "2") nombrePeriodoParaPlanilla = "2do Cuatrimestre";

    const llave = `${turno}-${curso}-${materia}-${periodo}`;
    const datos = [];
    const alumnos = baseDeDatosAlumnos[turno][curso];

    alumnos.forEach((a, i) => {
        const m = memoriaGlobal[llave] ? (memoriaGlobal[llave][a.dni] || {}) : {};
        datos.push({
            _url: URL_WEB_APP,  // guardamos la URL dentro del item para que el SW pueda usarla offline
            n_orden: i + 1, 
            nombre: a.nombre, 
            curso, turno, materia, 
            periodo: nombrePeriodoParaPlanilla,
            nota: m.nota || "", 
            obs1: m.sel_1 || "", 
            obs2: m.sel_2 || "", 
            obs3: m.sel_3 || "", 
            obs4: m.observacion || "",
            interpreta: m["Interpreta"] || "-", 
            relaciona: m["Relaciona"] || "-", 
            aplica: m["Aplica"] || "-",
            participacion: m["ParticipaciÃ³n"] || "-",
            autonomia: m["AutonomÃ­a"] || "-",
            realizacion_tp: m["RealizaciÃ³n de TP"] || "-",
            cumplimiento_aec: m["Cumplimiento AEC"] || "-"
        });
    });
    try {
        const payload = datos.map(d => { const c = {...d}; delete c._url; return c; });
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });

        let resultado = {};
        try { resultado = await resp.json(); } catch (_) {}

        if (resultado.offline) {
            mostrarEstadoConexion(false);
            alert("Sin conexión. Los datos quedaron guardados en este dispositivo y se enviarán automáticamente cuando vuelva internet.");
        } else {
            alert("¡Datos guardados con éxito!");
        }
    } catch (e) {
        console.error(e);
        if (navigator.onLine) {
            alert("Error de red al intentar guardar. Volvé a intentar en unos segundos.");
        } else {
            alert("Sin conexión. Los datos quedaron guardados en este dispositivo y se enviarán automáticamente cuando vuelva internet.");
        }
    }

    btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Guardar Datos';
    btn.disabled = false;
}




