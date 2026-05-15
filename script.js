// 1. BASE DE DATOS Y VARIABLES (Se mantienen igual)
const CLAVE_ACCESO = "1234"; 
const escalaConceptos = ["Excelente", "Muy Bien", "Bien", "Regular", "Ausente", "Sin Calificar"];
const baseDeDatosAlumnos = {
    "MAÑANA": {
        "1 A": [{ "dni": "1", "nombre": "CASTRO GORJÓN, Isabella" },
                { "dni": "2", "nombre": "CASTRO RAMOS, Kiara Nicole" },
                { "dni": "3", "nombre": "CURIPE, Huilen Juliana" },
                { "dni": "4", "nombre": "DE LA FUENTE Ian Jesus Julian" },
                { "dni": "5", "nombre": "ESPINOZA, Astrid Mercedes" },
                { "dni": "6", "nombre": "LOPEZ Kevin Alexander" },
                { "dni": "7", "nombre": "MARIN, Francisco Emmanuel" },
                { "dni": "8", "nombre": "MARTINEZ, Miqueas Sebastian" },
                { "dni": "9", "nombre": "OÑA, Uziel Elian" },
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
                { "dni": "8", "nombre": "NARDONI Nicolás" },
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
                { "dni": "9", "nombre": "MUÑOZ, Zahira Rubi" },
                { "dni": "10", "nombre": "NAMUNCURA ANCATRUZ, Eluney Quillen" },
                { "dni": "11", "nombre": "QUIDEL, Neemias Fracisco" },
                { "dni": "12", "nombre": "RANGUILEO, Xiomara" },
                { "dni": "13", "nombre": "RODRIGUEZ Angeles Martina" },
                { "dni": "14", "nombre": "SOTO JARPA, Matheo Nehuén" },
                { "dni": "15", "nombre": "TORRES, Solange Angeles" },
                { "dni": "16", "nombre": "VARGAS OVIEDO, Zaiara Yazmin" },
                { "dni": "17", "nombre": "VEJARES, Jesús Emanuel" }],

        "2 D": [ { "dni": "1", "nombre": "AGUIRRE, Alma" },
                { "dni": "2", "nombre": "BARALDI SAN MARTIN, Antonella" },
                { "dni": "3", "nombre": "COFRE GUAYQUIMIL, Tiziana Aimará" },
                { "dni": "4", "nombre": "CURRULEF, Erica Dalila" },
                { "dni": "5", "nombre": "DE LA FUENTE TAUX, Piuqué" },
                { "dni": "6", "nombre": "DIAZ, Jonatan Gael" },
                { "dni": "7", "nombre": "EPULLAN, Miqueas Tahiel" },
                { "dni": "8", "nombre": "FLORES, Juanita Piuque" },
                { "dni": "9", "nombre": "GALLARDO, Tiago Oscar" },
                { "dni": "10", "nombre": "GODOY, Mailen Belinda" },
                { "dni": "11", "nombre": "GONZALEZ, Morena Lucia" },
                { "dni": "12", "nombre": "LACIAR HERNANDEZ, Albertina Desireé" },
                { "dni": "13", "nombre": "MENA TORRES, Martina" },
                { "dni": "14", "nombre": "PAINEL, Jesús Leonel" },
                { "dni": "15", "nombre": "POBLETE, Daniel Urias Misail" },
                { "dni": "16", "nombre": "RIQUELME, Silvina Nahiara" },
                { "dni": "17", "nombre": "SIMONELLI SAN MARTIN, Atilio" },
                { "dni": "18", "nombre": "VALIENTE, Thiago Daniel" },
                { "dni": "19", "nombre": "SOTO, Thiago Benjamín" }],

        "3 A": [ { "dni": "1", "nombre": "AGUIRRE MONTIVERO, Santiago Emanuel" },
                { "dni": "2", "nombre": "AGUIRRE, Ian" },
                { "dni": "3", "nombre": "ARIAS, Pier Mauricio Gonzalo" },
                { "dni": "4", "nombre": "ITURRIZA VILLALBA, Daniela" },
                { "dni": "5", "nombre": "LUNA RAMIREZ, Manuel Alejandro" },
                { "dni": "6", "nombre": "MATOS QUINTANA, Joaquin Ignacio" },
                { "dni": "7", "nombre": "NAMUNCURÁ ANCATRUZ, Ceferino José" },
                { "dni": "8", "nombre": "NARDONI, Agostina" },
                { "dni": "9", "nombre": "NUÑEZ, Mia Jazmín" },
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
                { "dni": "7", "nombre": "MORERO FERNANDEZ, Lorenzo Benjamín" },
                { "dni": "8", "nombre": "NAVARRO, Jazmin Aixa" },
                { "dni": "9", "nombre": "PAEZ CASTILLO, Valentina" },
                { "dni": "10", "nombre": "PAVÓN, Gael Nicolás" },
                { "dni": "11", "nombre": "QUIÑINAO COLIPI, Valentina Daiana" },
                { "dni": "12", "nombre": "TAPIA, Sofia Isabel" },
                { "dni": "13", "nombre": "TORRES, Mia Florencia" },
                { "dni": "14", "nombre": "VALENTINI SEOANE, Catalina" },
                { "dni": "15", "nombre": "ZUÑIGA, Aaron Leonel" }],

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
                { "dni": "13", "nombre": "MONTAÑEZ, Santiago Damian" },
                { "dni": "14", "nombre": "PICOSSI, Sofia" },
                { "dni": "15", "nombre": "PINO, Aldana del Valle Pilar" },
                { "dni": "16", "nombre": "QUIDEL, Leonel Luciano" },
                { "dni": "17", "nombre": "RAMIREZ SILVA, Nicolas Martin" },
                { "dni": "18", "nombre": "ROSEMBACH, Dayana Abygail" },
                { "dni": "19", "nombre": "TORRES SCHULMEISTER, Ramiro Isaías" },
                { "dni": "20", "nombre": "VIDAL, Jeremias David" }],

        "5 A": [ { "dni": "1", "nombre": "ARANDA, Lucio Calel" },
                { "dni": "2", "nombre": "ARNESE, Fernanda" },
                { "dni": "3", "nombre": "ESPINDOLA QUICHAN, José David" },
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
                { "dni": "15", "nombre": "TORRES, Victoria Ambar" },
                { "dni": "16", "nombre": "TRAIPI, Naiara Abigail" },
                { "dni": "17", "nombre": "VICENCIO ROSAS, Giuliana Fiorella" },
                { "dni": "18", "nombre": "VILLARROEL, Martin Emanuel" }],

        "5 C": [ { "dni": "1", "nombre": "ALANIZ, Joselyn Denise Luana" },
                { "dni": "2", "nombre": "ARIAS, Benjamin Tadeo" },
                { "dni": "3", "nombre": "ARRIETA, Tobias Emiliano" },
                { "dni": "4", "nombre": "BAEZA, Nayara Valentina" },
                { "dni": "5", "nombre": "BARRIENTOS, Alma Gabriela" },
                { "dni": "6", "nombre": "CASTRO, Ancatruz Ángeles Xiomara" },
                { "dni": "7", "nombre": "CURIPE, Benjamin Oriel" },
                { "dni": "8", "nombre": "DIAZ, Santiago Armando" },
                { "dni": "9", "nombre": "FLORES, Luisana Alum" },
                { "dni": "10", "nombre": "GUAQUINCHAY RAPIMAN, Rocío Abigail" },
                { "dni": "11", "nombre": "JARA BARDAS, Lautaro Nahuel" },
                { "dni": "12", "nombre": "LAMBRE, Mia Morena" },
                { "dni": "13", "nombre": "LIRA ELGUETA, Nabila" },
                { "dni": "14", "nombre": "MELGAREJO CLAVERIA, Guadalupe Marisol" },
                { "dni": "15", "nombre": "MORALES ARANDA, Zahira Abril" },
                { "dni": "16", "nombre": "RAMIREZ, Santino Fabian" },
                { "dni": "17", "nombre": "ZUÑIGA, Sheila Sharell" },
                { "dni": "18", "nombre": "ROSAS, Nehuen Alejandro" },
                { "dni": "19", "nombre": "VILELLA, Joaquín Emilio" },
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
                { "dni": "8", "nombre": "LILLO PAILLAQUEO, Nicolás Cristobal" },
                { "dni": "9", "nombre": "LOPEZ, Gael Ian Agustin" },
                { "dni": "10", "nombre": "MONTAÑEZ, Valentina Yasmin" },
                { "dni": "11", "nombre": "SEPULVEDA, Juan David" },
                { "dni": "12", "nombre": "TORRES PERALTA, Tiziano Gael" },
                { "dni": "13", "nombre": "VIVANCO, Tahiel Aaron" }],

        "2 B": [ { "dni": "1", "nombre": "ABALOS, Nayara Sayen" },
                { "dni": "2", "nombre": "ANTIFIL JUAN, Armando Sebastian" },
                { "dni": "3", "nombre": "BAIGORRIA, Alex Elias" },
                { "dni": "4", "nombre": "BARRIA, Carlos Alejandro" },
                { "dni": "5", "nombre": "BEJAR, Juan Carlos Oscar" },
                { "dni": "6", "nombre": "CELIZ LILLO, Aréli Inalén" },
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
                { "dni": "6", "nombre": "CONDORI COLIPI, Briana Yazmín" },
                { "dni": "7", "nombre": "ESPINOSA MARTINEZ, Kiara Victoria" },
                { "dni": "8", "nombre": "JUAN, Ulises Alejandro" },
                { "dni": "9", "nombre": "LOPEZ ARRESE Luciana Malen" },
                { "dni": "10", "nombre": "MARQUEZ, Carlos Marcelo" },
                { "dni": "11", "nombre": "MARTIN, Gustavo Leonel" },
                { "dni": "12", "nombre": "RAMIREZ, Luna Tamara" },
                { "dni": "13", "nombre": "RODRIGUEZ, Tiziana Jazmín" },
                { "dni": "14", "nombre": "TORRES, Cecilia Elizabeth" },
                { "dni": "15", "nombre": "VEJARES ALVAREZ Cristian Ian" }],

        "3 B": [ { "dni": "1", "nombre": "AQUITO MULLER, Thiago Agustín" },
                { "dni": "2", "nombre": "CLODOMIRO, Solange Rayen" },
                { "dni": "3", "nombre": "CURRULEF, Sara Estefania" },
                { "dni": "4", "nombre": "DEHAIS, Bautista" },
                { "dni": "5", "nombre": "GALLARDO, Marian Luz" },
                { "dni": "6", "nombre": "GUAYQUIMIL RINALDI, Aluen Ludmila" },
                { "dni": "7", "nombre": "GUAYQUIMIL, Lucio Esteban Nicolas" },
                { "dni": "8", "nombre": "MOLINA, Leandro Braian" },
                { "dni": "9", "nombre": "QUIDEL, Maite" },
                { "dni": "10", "nombre": "RANGUILEO RODRIGUEZ, Mauro Ezequiel" },
                { "dni": "11", "nombre": "RIQUELME, Rocío Maylen" },
                { "dni": "12", "nombre": "RUIZ, Morena Virginia" },
                { "dni": "13", "nombre": "SIFUENTES, Eluney Antu" },
                { "dni": "14", "nombre": "SOTELO QUINCHAGUAL, Erik Calel" },
                { "dni": "15", "nombre": "TRAIPI Bianca Eunice" },
                { "dni": "16", "nombre": "URIBE FREDES, Sebastian Aron" },
                { "dni": "17", "nombre": "VEJARES, Luciana Jazmin" },
                { "dni": "18", "nombre": "ZAPATA, Demian" }],

        "4 B": [ { "dni": "1", "nombre": "ARIAS, Melanie Evelyn" },
                { "dni": "2", "nombre": "CANIULLAN, Aylin Anahí" },
                { "dni": "3", "nombre": "CARO, Alan Isaac" },
                { "dni": "4", "nombre": "CASTILLO MONSALBE, Lautaro Tomas" },
                { "dni": "5", "nombre": "COLIPI, Santiago Martin" },
                { "dni": "6", "nombre": "CURRULEF, Marcos Antonio" },
                { "dni": "7", "nombre": "DIAZ, Cristian Tiziano" },
                { "dni": "8", "nombre": "DIAZ, Lázaro Lihuen" },
                { "dni": "9", "nombre": "HUENTENAO, Ana Belen" },
                { "dni": "10", "nombre": "MANQUEO, Matias Sebastian" },
                { "dni": "11", "nombre": "PALACIOS, Agustin Geremías Moises" },
                { "dni": "12", "nombre": "QUINCHAGUAL, Esteban" },
                { "dni": "13", "nombre": "QUINCHAGUAL, Samuel Juan" },
                { "dni": "14", "nombre": "ROJO, María Valentina" },
                { "dni": "15", "nombre": "TORRES, Rodrigo Andrés" },
                { "dni": "16", "nombre": "TRAIPI, Alan Uciel" },
                { "dni": "17", "nombre": "ZAPATA LOPEZ, Fabricio" }],

        "4 C": [ { "dni": "1", "nombre": "AGUIRRE, Ambar Constanza" },
                { "dni": "2", "nombre": "BEJAR, Emilia Soledad" },
                { "dni": "3", "nombre": "CELIZ, Walter Shair" },
                { "dni": "4", "nombre": "COLIPI, Victoria" },
                { "dni": "5", "nombre": "DIAZ SOTO, Ana Sol" },
                { "dni": "6", "nombre": "ESPINDOLA, Natali Daniela Noemi" },
                { "dni": "7", "nombre": "GOMEZ CABRERA, Alex Ezequias" },
                { "dni": "8", "nombre": "GONZÁLEZ, Mateo Sebastián" },
                { "dni": "9", "nombre": "LEYVA, Julieta Antonella" },
                { "dni": "10", "nombre": "MARTINEZ, Yazmin Celeste" },
                { "dni": "11", "nombre": "PALACIOS VINET, Blas Agustin" },
                { "dni": "12", "nombre": "PEREZ MOYA, Joaquín Alejandro" },
                { "dni": "13", "nombre": "POSDELEY GUTIÉRREZ, Tomás" },
                { "dni": "14", "nombre": "PROVENZAL, Teo Matías" },
                { "dni": "15", "nombre": "PUELPAN, Nehuen Agustin" },
                { "dni": "16", "nombre": "RAMIREZ, Marcos Antonio" },
                { "dni": "17", "nombre": "ZAPATA, Uriel Ismael" },
                { "dni": "18", "nombre": "ZURITA FREDES Juan Martin" }],
             
        "5 B": [ { "dni": "1", "nombre": "ÁLVAREZ DEALOY, Fiamma Maiten" },
                { "dni": "2", "nombre": "ANTICURA CHAMORRO, Milagros Yenien" },
                { "dni": "3", "nombre": "COLILUAN, Morena Yenien" },
                { "dni": "4", "nombre": "MUÑOZ ALFARO, Belinda Guadalupe" },
                { "dni": "5", "nombre": "PINCHEIRA, Lucia Helena" },
                { "dni": "6", "nombre": "RAMIREZ, Ayelén Claudia" },
                { "dni": "7", "nombre": "SARMIENTO HERNANDEZ, Bruno Gaston" },
                { "dni": "8", "nombre": "TORRES, Gaston Matías Unelen" },
                { "dni": "9", "nombre": "VAZQUEZ RAPIMAN, Karina Lucia" },
                { "dni": "10", "nombre": "ZAPATA, Milagros Valentina" }]
    }
};

const materiasPorCurso = {
    "1 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREATECNOLOGÍA"],
    "1 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 E": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "3 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
    "3 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
    "3 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
   "4 A": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÓN FÍSICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
    "4 B": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÓN FÍSICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
    "4 C": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE", "LENGUAS OTRAS", "EDUCACIÓN FÍSICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA", "CS. BIOLÓGICAS", "QUÍMICA", "FÍSICA", "FILOSOFÍA DE LAS CIENCIAS", "GEOPOLÍTICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGÍAS DE LAS ARTES Y LAS ESTÉTICA", "COMUNICACIÓN, DISCURSO Y PRODUCCIÓN DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
    "5 A": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
    "5 B": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
    "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMÁTICA","FÍSICA","QUÍMICA","CIENCIAS BIOLÓGICAS","GEOGRAFÍA ARGENTINA","HISTORIA","INSTRUCCIÓN CÍVICA","FILOSOFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"]
    
};
const criteriosCualitativos = ["Interpreta", "Relaciona", "Aplica", "Participación", "Autonomía", "Realización de TP", "Cumplimiento AEC"];
const opcionesCualitativas = ["-", "Siempre", "Frecuentemente", "A veces", "Nunca", "Sin referencia"];
const frasesPorMateria = {
    "MATEMATICA": ["Resuelve problemas con autonomía", "Requiere reforzar operaciones básicas", "Buen razonamiento lógico"],
    "ANALISIS": ["Deriva e integra correctamente", "Aplica conceptos a funciones complejas", "Requiere práctica en límites"],
    "LENGUA": ["Excelente análisis de textos", "Debe mejorar la ortografía", "Participa activamente en clase"],
    "LITERATURA": ["Profundo análisis literario", "Relaciona autores y contextos", "Buena expresión escrita"],
    "DEFAULT": ["Cumple con los objetivos", "En proceso de mejora", "Faltas reiteradas"]
};

let tabActual = 'espacios';
let memoriaGlobal = {}; // Ya no usa localStorage — se carga desde Google Sheets al iniciar
let datosSheetsCargados = false; // Bandera para saber si ya terminó la carga inicial
const URL_WEB_APP = 'https://script.google.com/macros/s/AKfycbyhoBBLl995zFUqmSe7Yc7B9_ICWOr4OGKn3vwf0kjpXUDOXNZxuhb2UXLeYlu4onz6NQ/exec';

/**
 * Normaliza un nombre para comparación robusta:
 * quita espacios extra, pasa a mayúsculas y elimina tildes.
 * Así "CASTRO GORJÓN, Isabella" == "Castro Gorjon,  Isabella" == true
 */
function normalizarNombre(str) {
    return str
        .trim()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // elimina tildes
        .replace(/\s+/g, " ");           // colapsa espacios múltiples
}

/**
 * Carga todos los datos guardados desde Google Sheets al iniciar la app.
 * Usa el nombre normalizado como clave de búsqueda para evitar fallos
 * por tildes, espacios o mayúsculas distintas entre Sheets y la base local.
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
                "Participación":       item.participacion    || "-",
                "Autonomía":           item.autonomia        || "-",
                "Realización de TP":   item.realizacion_tp   || "-",
                "Cumplimiento AEC":    item.cumplimiento_aec || "-"
            };
            cargados++;
        });

        datosSheetsCargados = true;
        console.log(`✅ ${cargados} registros cargados desde Sheets.`);
        if (noEncontrados.length > 0) {
            console.warn("⚠️ Nombres en Sheets que no coinciden con la base local:", noEncontrados);
        }

    } catch (err) {
        console.warn("⚠️ No se pudo cargar desde Sheets, se usará memoria vacía.", err);
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
        errorMsg.innerText = !formatoEmail.test(emailInput) ? "Formato: nombre.apellido@cpem32.edu.ar" : "Contraseña incorrecta";
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

    // 3. Limpiamos el menú de materias por completo
    selectMaterias.innerHTML = '<option value="">Seleccione Materia</option>';

    console.log("Curso detectado en pantalla: '" + cursoSeleccionado + "'"); // Esto te ayudará a revisar en la consola

    // 4. Mapa de materias exacto según tus cursos de la base de datos
    const materiasPorCurso = {
        "1 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "1 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "1 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREATECNOLOGÍA"],
        "1 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "1 E": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA EDUCACIÓN SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "3 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
        "3 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
        "3 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACIÓN FÍSICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
        "4 A": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÓN FÍSICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
        "4 B": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACIÓN FÍSICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
        "4 C": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE", "LENGUAS OTRAS", "EDUCACIÓN FÍSICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA", "CS. BIOLÓGICAS", "QUÍMICA", "FÍSICA", "FILOSOFÍA DE LAS CIENCIAS", "GEOPOLÍTICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGÍAS DE LAS ARTES Y LAS ESTÉTICA", "COMUNICACIÓN, DISCURSO Y PRODUCCIÓN DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
        "5 A": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
        "5 B": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
        "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMÁTICA","FÍSICA","QUÍMICA","CIENCIAS BIOLÓGICAS","GEOGRAFÍA ARGENTINA","HISTORIA","INSTRUCCIÓN CÍVICA","FILOSOFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"]
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
        // Si el curso existe pero no le pusimos materias en el mapa todavía
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
    // Nota: ya no guardamos en localStorage. Los datos persisten en Google Sheets al presionar "Guardar".
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
        // --- Período: Sincronizar y Bloquear ---
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

// 3. CARGAR ALUMNOS (AJUSTADO SEGÚN TU SOLICITUD)
function cargarAlumnos() {
    const tbody = document.querySelector('#tabla-notas tbody');
    const headerRow = document.getElementById('header-row');
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

    // Si falta algún filtro, limpiamos la tabla y salimos
    if (!turno || !curso || !materia || !periodo) {
        limpiarTabla();
        return;
    }

    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    const datosM = memoriaGlobal[llaveID] || {};
    const añoCurso = curso ? parseInt(curso.charAt(0)) : 0;

    // 1. CONFIGURACIÓN DE ENCABEZADOS (TÍTULOS)
    headerRow.innerHTML = '<th style="width: 50px;">N°</th><th>Apellido y Nombre</th>';
    
    if (tabActual === 'espacios') {
        headerRow.innerHTML += '<th>Nota</th>';
        // Formato extendido para 4to/5to O cualquier año en Bimestre
        if (añoCurso >= 4 || periodo.includes("Bimestre")) {
            headerRow.innerHTML += '<th>Observaciones (Frase y Nota Personal)</th>';
        }
    } else {
        // Formato para Cualitativas
        if (añoCurso <= 3 && !periodo.includes("Bimestre")) {
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
            // --- PESTAÑA ESPACIOS CURRICULARES ---
            const n = persistido.nota || "";
            html += `<td><select class="nota-input select-nota" onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'nota', this.value)">
                        <option value="">-</option>`;
          
            //NOTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            // Usamos la nueva escala conceptual en lugar de números  AQUI SE REALIZA LA LOS CAMBIOS BIMESTRE 
                escalaConceptos.forEach(e => {
                 html += `<option value="${e}" ${n == e ? 'selected' : ''}>${e}</option>`;
             });
             html += `</select></td>`;
            
            //ACTIVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            //-----SE DEBE ACTIVAR ESTE CODIGO----- PARA QUE SE ACTIVEN LAS NOTAS DE 1 AL 10 AL CUATRIMESTRE
            // for(let i=1; i<=10; i++) html += `<option value="${i}" ${n==i?'selected':''}>${i}</option>`;
            // html += `</select></td>`;
            


            if (añoCurso >= 4 || periodo.includes("Bimestre")) {
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
            // --- PESTAÑA CATEGORÍAS CUALITATIVAS ---
            if (añoCurso <= 3 && !periodo.includes("Bimestre")) {
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
    // Botón limpiar: ahora solo limpia la memoria en RAM de esta sesión (los datos en Sheets no se tocan)
    document.getElementById('btnLimpiar').onclick = () => {
        if(confirm("¿Limpiar la memoria de esta sesión? Los datos guardados en Sheets no se borran.")) {
            memoriaGlobal = {};
            location.reload();
        }
    };

    // *** CLAVE: Cargar datos desde Google Sheets al abrir la app ***
    cargarDesdeSheetsAlIniciar();
});

// 5. GUARDAR DATOS (VERSIÓN CORREGIDA 2026)
async function guardarEnGoogleSheets() {
    respaldarAPantallaAMemoria();
    const btn = document.getElementById('btnGuardar');
    btn.innerText = "Enviando..."; btn.disabled = true;

    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    // Línea 679 original (Mantenla igual para que funcionen las notas)
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

    // NUEVA LÓGICA: Traducimos el "1" a "1er Cuatrimestre" solo para la planilla
    let nombrePeriodoParaPlanilla = periodo; 

    if (periodo === "1") {
        nombrePeriodoParaPlanilla = "1er Cuatrimestre";
    } else if (periodo === "2") {
        nombrePeriodoParaPlanilla = "2do Cuatrimestre";
    }

  
    const llave = `${turno}-${curso}-${materia}-${periodo}`;
    const datos = [];
    const alumnos = baseDeDatosAlumnos[turno][curso];

    alumnos.forEach((a, i) => {
        const m = memoriaGlobal[llave] ? (memoriaGlobal[llave][a.dni] || {}) : {};
        
        datos.push({
            n_orden: i + 1, 
            nombre: a.nombre, 
            curso: curso, 
            turno: turno, 
            materia: materia, 
            periodo: nombrePeriodoParaPlanilla,
            // Notas y Observaciones
            nota: m.nota || "", 
            obs1: m.sel_1 || "", 
            obs2: m.sel_2 || "", 
            obs3: m.sel_3 || "", 
            obs4: m.observacion || "",
            // Criterios Cualitativos 1 (Ya los tenías)
            interpreta: m["Interpreta"] || "-", 
            relaciona: m["Relaciona"] || "-", 
            aplica: m["Aplica"] || "-",
            // NUEVOS CRITERIOS (Faltaban aquí para conectar con el Google Script)
            participacion: m["Participación"] || "-",
            autonomia: m["Autonomía"] || "-",
            realizacion_tp: m["Realización de TP"] || "-",
            cumplimiento_aec: m["Cumplimiento AEC"] || "-"
        });
    });

    try {
        await fetch(URL_WEB_APP, { 
            method: 'POST', 
            mode: 'no-cors', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos) 
        });
        alert("¡Sincronizado con éxito en PRUEBA 2026!");
    } catch (e) { 
        console.error(e);
        alert("Error de red al intentar guardar"); 
    }
    
    btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Guardar Datos'; 
    btn.disabled = false;
}
