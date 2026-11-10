// Ejemplos de demostración: imagen, crédito y licencia de cada caso.
const SAMPLES = [
  {
    "img": "s/e1.jpg",
    "kind": "electrico",
    "credit": "Old Fuse Box · chrstphre · CC BY 2.0",
    "link": "https://www.flickr.com/photos/12457246@N03/32673756057",
    "rep": {
      "tipo": "electrico",
      "resumen": "La instalación eléctrica se encuentra en estado crítico, con componentes expuestos, cables pelados y suciedad acumulada dentro de una caja metálica abierta, lo que representa un riesgo eléctrico inmediato.",
      "corresponde": true,
      "cumple": [
        "La caja metálica contiene y delimita físicamente los componentes eléctricos",
        "Los conductores ingresan a la caja mediante canalización rígida",
        "Existen dispositivos de corte o protección (portafusibles) instalados en el tablero",
        "La instalación se encuentra en una zona de pared y piso, sin evidencia de humedad visible en el momento de la captura"
      ],
      "no_evaluable": [
        "Corriente de fuga o aislamiento de los conductores, requiere medición con equipo",
        "Estado de funcionamiento de los fusibles o interruptores, requiere revisión operativa",
        "Existencia de puesta a tierra del tablero y de las canalizaciones, requiere verificación en terreno",
        "Etiquetado de circuitos y señalización de peligro, requiere inspección documental y visual cercana",
        "Capacidad de corte y coordinación de protecciones, requiere revisión de cálculos y documentos técnicos"
      ],
      "hallazgos": [
        {
          "titulo": "Caja eléctrica abierta y sin tapa",
          "observacion": "Caja metálica rectangular sin cubierta, dejando expuestos bornes, cables y conexiones eléctricas al contacto accidental.",
          "severidad": "alta",
          "caja": [
            170,
            75,
            940,
            920
          ],
          "busqueda": "Los tableros y cajas de derivación deben permanecer cerrados con tapa que impida el acceso directo a partes activas",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.3–6.1.4",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "6.1.3  Todos los tableros deberán contar con una cubierta cubre equipos y con una puerta exterior.\nLa puerta exterior será totalmente cerrada y su fijación se hará mediante bisagras en\ndisposición vertical u horizontal. Se permite montar sobre ella luces piloto de indicación de\ntablero energizado, y equipos de medida u otro elemento de maniobra o control, siempre que\nse mantenga el grado IP de protección del tablero. La cubierta cubre equipos deberá ser del\nmismo material que el gabinete, armario o caja, cumpliendo con las especificaciones\nindicadas en el punto 6.1.2. de este pliego.\n6.1.4  Las protecciones sólo serán accesibles abriendo la puerta exterior la que deberá permanecer\ncerrada, para lo cual se deberá contar con un dispositivo que permita el cierre y cuando\ncorresponda, deberá ser cerrado con llave.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.5–6.1.8",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "6.1.5  Se podrán exceptuar de cumplir con lo indicado en los puntos 6.1.3 y 6.1.4 precedentes\naquellos tableros que cuenten con un seccionador bajo carga que permita su accionamiento\ndesde el exterior de la caja, sin que exista la exposición de personas al contacto con partes\ncon tensión.\n6.1.6  Las exigencias descritas en el punto 6.1.4 no serán aplicables para los tableros de tipo\ncentros de control de motores (CCM).\n6.1.7  Tanto la envolvente como la tapa de un tablero, deberá ser capaz de resistir los esfuerzos\nmecánicos, eléctricos y térmicos, para los que fueron diseñados.\n6.1.8  La cubierta cubre equipos tendrá por finalidad principal, impedir el contacto de cuerpos\nextraños con las partes energizadas, o bien, que partes energizadas queden al alcance del\nusuario al operar las protecciones o dispositivos de maniobra.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8"
            }
          ],
          "exigencia": "Los tableros deben contar con cubierta cubre equipos y puerta exterior que permanezca cerrada, impidiendo el contacto con partes energizadas.",
          "accion": "Instalar tapa o cubierta en la caja eléctrica y mantenerla cerrada para proteger bornes y conexiones.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 5.9",
              "h": "Conductores, materiales y sistemas de canalización › Conceptos Generales",
              "t": "construcción estanca al polvo.\n5.20 Las uniones de las tuberías con las cajas a prueba de humedad, goteo, chorro, de agua, salpicaduras\no polvo deben efectuarse de modo que el conjunto conserve sus características de estanqueidad.\n5.21 Las cajas deben estar rígidamente fijas a la superficie sobre la cual van montadas. En general, para\ncanalizaciones ocultas o a la vista, las cajas deberán estar fijadas a alguna parte estructural de la\nconstrucción.\n5.22 Los conductores deberán quedar libremente accesibles dentro de la caja sólo retirando la tapa, y ésta\ndeberá poder retirarse sin necesidad de romper el enlucido de los muros, ni retirar ningún otro tipo de\ncubierta.\n5.23 Las dimensiones de las cajas de derivación serán tales que permitan alojar holgadamente todos los\nconductores que deban contener, dejando un volumen disponible del 25%.\n5.24 Las tuercas, contratuercas y boquillas utilizadas para fijar las tuberías o cables a las entradas de las\ncajas, deberán ser resistentes a la corrosión o estar protegidas contra ella, y tener la resistencia\nmecánica adecuada al uso que se les esté dando.\n5.25 Las uniones y derivaciones se aislarán convenientemente, debiendo recuperar a lo menos un nivel de\naislamiento equivalente al propio del conductor, utilizando para ello cintas aislantes, mufas de resinas\nepóxicas, cubiertas termoretráctiles o mecanoretráctiles u otros medios aprobados, según lo definido\nen los protocolos de análisis y/o ensayos de seguridad de productos eléctricos respectivos definidos por\nla Superintendencia.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=8"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 560",
              "h": "TITULO XI GENERALIDADES DE EXPLOSIVOS EN LA MINERIA › Capítulo Tercero Perforación y Tronadura",
              "t": "Artículo 560.- El circuito de potencia usado para disparar, deberá ser controlado por un interruptor localizado a una distancia determinada por el Supervisor.\nTales interruptores, cuando se hallen en servicio, deberán permanecer en una caja hermética, cerrada todo el tiempo, excepto cuando se enciendan, y sólo el Supervisor tendrá acceso al interruptor. Este deberá estar en cortocircuito en la posición \"desconectado\" y dispuesto de modo que la tapa de la caja pueda ser cerrada solamente cuando esté en dicha posición.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650303"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 593 (parte 12)",
              "h": "TITULO XIV DISPOSICIONES FINALES",
              "t": "75. Cable:\n Conductor sólido o trenzado con aislación o sin ella o una combinación de conductores aislados entre sí.\n76. Cable armado:\n Conductor o conductores eléctricos aislados y protegidos mecánicamente por una o varias cintas metálicas. Sobre éstas, normalmente va una cubierta de protección contra el polvo, humedad, etc.\n77. Circuito:\n Un conductor o sistema de conductores por los cuales circula una corriente eléctrica.\n78. Conductor:\n Material metálico, usualmente en forma de alambre o cable, adecuado para el transporte de corriente eléctrica.\n79. Conductores de puesta a tierra:\n Conductor que se usa para poner a tierra el equipo o el sistema de alambrado a un electrodo o electrodos a tierra.\n80. Ducto:\n Canalización tubular para cables o conductores subterráneos.\n81. Equipos:\n Término general que comprende accesorios, dispositivos, artefactos, aparatos y similares, usados como una parte o en conexión a una instalación eléctrica.\n82. Expuesto:\n No aislado o resguardado. Dispositivo que puede ser tocado accidentalmente o al que una persona pueda aproximarse más cerca de la distancia segura. Se aplica a aquellos objetos que no están aislados o resguardados en forma conveniente.\n83. Interruptor:\n Aparato para abrir o cerrar o para cambiar la conexión de un circuito. Se entenderá que un interruptor es maniobrado manualmente, a menos que se indique otra cosa.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650338"
            }
          ]
        },
        {
          "titulo": "Cables con aislamiento dañado y conductores pelados",
          "observacion": "Varios cables negros presentan aislamiento deteriorado y extremos con cobre al descubierto, incluyendo un cable blanco con punta pelada en la parte superior.",
          "severidad": "alta",
          "caja": [
            30,
            110,
            620,
            720
          ],
          "busqueda": "Los conductores eléctricos deben contar con aislamiento en buen estado y no presentar partes activas expuestas",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 7.3–7.4.1",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos directos",
              "t": "7.3  Los medios a utilizar como medidas de protección contra contactos directos son habitualmente:\na)  Protección por aislamiento de las partes activas.\nb)  Protección por medio de barreras o envolventes.\nc)  Protección por medio de obstáculos.\nd)  Protección por puesta fuera de alcance por alejamiento.\ne)  Protección complementaria por dispositivos de corriente diferencial residual (Protecciones\nDiferenciales).\n7.4  Protección por aislamiento de las partes activas.\n7.4.1  Las partes activas deberán estar recubiertas de un aislamiento que no pueda ser eliminado\nmás que destruyéndolo.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=7"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 7.4.2–7.5.1",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos directos › Protección por aislamiento de las partes activas",
              "t": "7.4.2  Las pinturas, barnices, lacas y productos similares no se considera que constituyan un\naislamiento suficiente en el marco de la protección contra los contactos directos.\n7.5  Protección por medio de barreras o envolventes.\n7.5.1  Las partes activas deben estar situadas en el interior de las envolventes o detrás de barreras\nque posean, como mínimo, un grado de protección IP2X. Si se necesitan aberturas mayores\npara la reparación de piezas o para el buen funcionamiento de los equipos, se adoptarán\nmedidas adicionales para impedir que las personas o animales domésticos toquen las partes\nactivas. Además, se deberá señalizar, mediante una advertencia de peligro.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=7"
            }
          ],
          "exigencia": "Las partes activas deben estar recubiertas con aislamiento que no pueda ser eliminado más que destruyéndolo, o protegidas con barreras o envolventes al menos IP2X.",
          "accion": "Reparar o reemplazar los cables con aislamiento dañado y cubrir los conductores pelados para evitar contacto accidental.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 8.6.3",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos indirectos",
              "t": "8.6.3  Empleo de aislación de protección clase II o doble aislación: Este sistema consiste en\nrecubrir todas las partes accesibles de las carcasas metálicas con un material aislante\napropiado. Se asegura esta protección por:\n8.6.3.1  Utilización de equipos con un aislamiento doble o reforzado (clase II).\n8.6.3.2  Conjuntos de equipos eléctricos construidos en fábrica y que posean aislamiento\nequivalente (doble o reforzado).\n8.6.3.3  Aislamientos suplementarios montados en la construcción de la instalación\neléctrica y que aíslen equipos eléctricos que posean únicamente un aislamiento\nprincipal.\n8.6.3.4  Aislamientos reforzados montados en la construcción de la instalación eléctrica y\nque aíslen las partes activas descubiertas, cuando por construcción no sea posible\nla utilización de un doble aislamiento.\nEl empleo de materiales no conductores en la construcción de las carcasas de\nelectrodomésticos y maquinas herramientas portátiles ha hecho que este sistema de\nprotección haya alcanzado una gran difusión y efectividad.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=11"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 421",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 421.- Las vías y soportes de cables deberán revisarse anualmente, o con mayor frecuencia si las condiciones de trabajo lo exigen, efectuando las reparaciones necesarias a todos los elementos dañados, así como la limpieza y extracción de material extraño que pueda deteriorar los cables o afectar la disipación térmica.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650156"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 450",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 450.- Deberá proveerse con pisos aislantes a ambos lados de cada tablero principal que contenga partes energizadas expuestas y accesibles. Estos pisos deberán ser de tamaño tal que imposibiliten alcanzar la parte energizada a cualquier persona que esté situada fuera del piso aislante.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650185"
            }
          ]
        },
        {
          "titulo": "Componentes eléctricos sucios y con residuos",
          "observacion": "Interior de la caja con polvo, suciedad y restos de material ajeno sobre bornes, fusibles y conexiones, comprometiendo el aislamiento y la operación segura.",
          "severidad": "media",
          "caja": [
            200,
            200,
            900,
            850
          ],
          "busqueda": "Los equipos y tableros eléctricos deben mantenerse limpios y libres de suciedad o cuerpos extraños que afecten su funcionamiento",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 447",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 447.- Todo equipo eléctrico debe protegerse apropiadamente de:\n\na) La humedad, con cubiertas protectoras y calefactores si fuere necesario.\nb) La acumulación de polvo.\nc) La acción de los roedores, cerrando las aberturas con rejillas para no impedir su ventilación.\nd) Daños mecánicos por caída de piedras u otro motivo;\ny\n e) Sobrecarga, cortocircuito y fallas a tierra.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650182"
            }
          ],
          "exigencia": "Todo equipo eléctrico debe protegerse apropiadamente de la acumulación de polvo.",
          "accion": "Limpiar el interior de la caja, retirando polvo y residuos de bornes, fusibles y conexiones.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6–6.1.2",
              "h": "Tableros eléctricos › Especificaciones de construcción",
              "t": "6  Especificaciones de construcción\n6.1  Formas constructivas\n6.1.1  Todos los dispositivos y componentes de un tablero deberán montarse dentro de cajas,\ngabinetes murales o armarios autosoportados, dependiendo del tamaño requerido.\n6.1.2  Los materiales empleados en la construcción de gabinetes, armarios o cajas que formen\nparte de la envolvente de los tableros eléctricos, deberán ser no propagadores de la llama,\nresistentes a la corrosión o estar adecuadamente protegidos contra ella, en conformidad con\nlo definido en los protocolos de análisis y/o ensayos de seguridad de productos eléctricos\nrespectivos establecidos por la Superintendencia.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.9",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "6.1.9  La cubierta cubre equipos deberá contar con perforaciones de tamaño adecuado para dejar\npasar libremente las manillas o palancas de operación, si procede, de los dispositivos de\nmaniobra, protección, control y señalización, según sea su uso. En casos justificados en que\nse perfore la cubierta cubre equipos o la tapa del tablero, deberá eliminarse las rebabas y\nmantenerse el proceso de galvanizado con el que contaba este material antes de su\nmodificación.\n6.1.10 La cubierta cubre equipos se fijará mediante bisagras en disposición vertical, elementos de\ncierre a presión o cierres de tipo atornillado; en este último caso los tornillos de fijación\nempleados deberán ser del tipo imperdible.\n6.1.11 Las partes energizadas de un tablero sólo podrán alcanzarse removiendo la cubierta cubre\nequipos, entendiéndose que esta maniobra solo se realizará por necesidad de efectuar\ntrabajos de inspección, mantenimiento o modificaciones en el interior del tablero, ejecutadas\npor personal calificado.\n6.1.12 Las cajas mencionadas en el punto 6.1.1 se utilizarán para montajes embutidos o\nsobrepuestos en muros o tabiques y se utilizarán en el montaje de tableros de baja capacidad\ny dimensiones reducidas.\n6.1.13 Los gabinetes mencionados en el punto 6.1.1 se utilizarán para montajes embutidos o\nsobrepuestos en muros o bien sobre estructuras autosoportantes y se utilizarán en el\nmontaje de tableros de mediana capacidad y dimensiones.\n6.1.14 Los armarios mencionados en el punto 6.1.1 se utilizarán en el montaje de tableros de gran",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5–5.2.1",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5  Conceptos generales\n5.1  La cantidad de tableros que sea necesario para el comando y protección de una instalación se\ndeterminará buscando salvaguardar la seguridad, y tratando de obtener la mejor funcionalidad y\nflexibilidad en la operación de dicha instalación, tomando en cuenta la distribución y finalidad de cada\nuno de los recintos en que estén subdivididos el o los edificios componentes de la propiedad.\n5.2  Los tableros serán instalados en lugares seguros y fácilmente accesibles, teniendo en cuenta las\ncondiciones particulares siguientes:\n5.2.1  Los tableros de locales de reunión de personas se ubicarán en recintos, nichos, gabinetes o\ncajas cerrados con llave, con acceso al interior del tablero solo de personal calificado de\noperación y mantenimiento.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 593 (parte 12)",
              "h": "TITULO XIV DISPOSICIONES FINALES",
              "t": "75. Cable:\n Conductor sólido o trenzado con aislación o sin ella o una combinación de conductores aislados entre sí.\n76. Cable armado:\n Conductor o conductores eléctricos aislados y protegidos mecánicamente por una o varias cintas metálicas. Sobre éstas, normalmente va una cubierta de protección contra el polvo, humedad, etc.\n77. Circuito:\n Un conductor o sistema de conductores por los cuales circula una corriente eléctrica.\n78. Conductor:\n Material metálico, usualmente en forma de alambre o cable, adecuado para el transporte de corriente eléctrica.\n79. Conductores de puesta a tierra:\n Conductor que se usa para poner a tierra el equipo o el sistema de alambrado a un electrodo o electrodos a tierra.\n80. Ducto:\n Canalización tubular para cables o conductores subterráneos.\n81. Equipos:\n Término general que comprende accesorios, dispositivos, artefactos, aparatos y similares, usados como una parte o en conexión a una instalación eléctrica.\n82. Expuesto:\n No aislado o resguardado. Dispositivo que puede ser tocado accidentalmente o al que una persona pueda aproximarse más cerca de la distancia segura. Se aplica a aquellos objetos que no están aislados o resguardados en forma conveniente.\n83. Interruptor:\n Aparato para abrir o cerrar o para cambiar la conexión de un circuito. Se entenderá que un interruptor es maniobrado manualmente, a menos que se indique otra cosa.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650338"
            }
          ]
        },
        {
          "titulo": "Canalización sin fijación visible y suelta",
          "observacion": "Tubo rígido negro que ingresa a la caja sin soporte ni sujeción visible, quedando suelto sobre el equipo eléctrico.",
          "severidad": "media",
          "caja": [
            30,
            260,
            220,
            560
          ],
          "busqueda": "Las canalizaciones eléctricas deben estar adecuadamente sujetas y fijadas a la estructura",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 5.9",
              "h": "Conductores, materiales y sistemas de canalización › Conceptos Generales",
              "t": "construcción estanca al polvo.\n5.20 Las uniones de las tuberías con las cajas a prueba de humedad, goteo, chorro, de agua, salpicaduras\no polvo deben efectuarse de modo que el conjunto conserve sus características de estanqueidad.\n5.21 Las cajas deben estar rígidamente fijas a la superficie sobre la cual van montadas. En general, para\ncanalizaciones ocultas o a la vista, las cajas deberán estar fijadas a alguna parte estructural de la\nconstrucción.\n5.22 Los conductores deberán quedar libremente accesibles dentro de la caja sólo retirando la tapa, y ésta\ndeberá poder retirarse sin necesidad de romper el enlucido de los muros, ni retirar ningún otro tipo de\ncubierta.\n5.23 Las dimensiones de las cajas de derivación serán tales que permitan alojar holgadamente todos los\nconductores que deban contener, dejando un volumen disponible del 25%.\n5.24 Las tuercas, contratuercas y boquillas utilizadas para fijar las tuberías o cables a las entradas de las\ncajas, deberán ser resistentes a la corrosión o estar protegidas contra ella, y tener la resistencia\nmecánica adecuada al uso que se les esté dando.\n5.25 Las uniones y derivaciones se aislarán convenientemente, debiendo recuperar a lo menos un nivel de\naislamiento equivalente al propio del conductor, utilizando para ello cintas aislantes, mufas de resinas\nepóxicas, cubiertas termoretráctiles o mecanoretráctiles u otros medios aprobados, según lo definido\nen los protocolos de análisis y/o ensayos de seguridad de productos eléctricos respectivos definidos por\nla Superintendencia.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=8"
            }
          ],
          "exigencia": "Las cajas deben estar rígidamente fijas a la superficie sobre la cual van montadas, y las canalizaciones a la vista deben sujetarse adecuadamente.",
          "accion": "Fijar el tubo rígido y la caja a una parte estructural o superficie estable, evitando que queden sueltos.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°10 · 4–4.3",
              "h": "Instalaciones de uso general › TERMINOLOGÍA",
              "t": "4  TERMINOLOGÍA\n4.1  Aparato: Elemento de la instalación destinado a controlar el paso de la energía eléctrica.\n4.2  Artefacto: Elemento fijo o portátil, parte de una instalación, que consume energía eléctrica.\n4.3  Canalización: Conjunto formado por conductores eléctricos, elementos que los soportan y\naccesorios que aseguran su fijación y protección mecánica.\nA la vista: Canalizaciones que son observables a simple vista.\nEmbutida: Canalizaciones colocadas en perforaciones o calados hechos en muros, losas\no tabiques de una construcción y que son recubiertas por las terminaciones o enlucidos\nde éstos.\nOculta: Canalizaciones colocadas en lugares que no permiten su visualización directa,\npero que son accesibles en toda su extensión. Este término es aplicable también a\nequipos.\nPreembutida: Canalización que se incorpora a la estructura de una edificación junto con\nsus envigados.\nSubterránea: Canalizaciones que van enterradas en el suelo.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N10-Instalaciones-de-uso-general.pdf#page=2"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 477",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 477.- Los rieles se conectarán eléctricamente en cada juntura, conformando un conductor continuo. Estas conexiones deben inspeccionarse periódicamente, reacondicionando las uniones que se hayan soltado.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650212"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            }
          ]
        },
        {
          "titulo": "Conexiones y bornes expuestos sin protección",
          "observacion": "Bloque de bornes y portafusibles con terminales metálicos y cables conectados al descubierto, sin barrera ni cubierta isolante.",
          "severidad": "alta",
          "caja": [
            530,
            370,
            840,
            760
          ],
          "busqueda": "Las partes activas de tableros y equipos deben estar protegidas contra el contacto accidental directo",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 430",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 430.- Los terminales de un conductor, que presenten riesgo de contacto accidental para personas o instalaciones, deberán protegerse con aislación equivalente, manteniendo la resistencia de aislación del conductor, a lo menos.\n Los terminales de un conductor expuestos a originar fallas en el circuito por contaminación del medio ambiente, deben ser protegidos con aislación apropiada, resistente al contaminante. La aislación de los terminales debe ser adecuada a la tensión máxima a que éstos estén conectados.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650165"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 7.3–7.4.1",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos directos",
              "t": "7.3  Los medios a utilizar como medidas de protección contra contactos directos son habitualmente:\na)  Protección por aislamiento de las partes activas.\nb)  Protección por medio de barreras o envolventes.\nc)  Protección por medio de obstáculos.\nd)  Protección por puesta fuera de alcance por alejamiento.\ne)  Protección complementaria por dispositivos de corriente diferencial residual (Protecciones\nDiferenciales).\n7.4  Protección por aislamiento de las partes activas.\n7.4.1  Las partes activas deberán estar recubiertas de un aislamiento que no pueda ser eliminado\nmás que destruyéndolo.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=7"
            }
          ],
          "exigencia": "Los terminales de conductores con riesgo de contacto accidental deben protegerse con aislación equivalente, y las partes activas deben contar con aislamiento o barreras que impidan el contacto.",
          "accion": "Instalar cubiertas o barreras aislantes sobre el bloque de bornes y portafusibles, dejando los terminales protegidos.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 7.4.2–7.5.1",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos directos › Protección por aislamiento de las partes activas",
              "t": "7.4.2  Las pinturas, barnices, lacas y productos similares no se considera que constituyan un\naislamiento suficiente en el marco de la protección contra los contactos directos.\n7.5  Protección por medio de barreras o envolventes.\n7.5.1  Las partes activas deben estar situadas en el interior de las envolventes o detrás de barreras\nque posean, como mínimo, un grado de protección IP2X. Si se necesitan aberturas mayores\npara la reparación de piezas o para el buen funcionamiento de los equipos, se adoptarán\nmedidas adicionales para impedir que las personas o animales domésticos toquen las partes\nactivas. Además, se deberá señalizar, mediante una advertencia de peligro.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=7"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 7–7.1",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos directos",
              "t": "7  Medidas de protección contra contactos directos\n7.1  Esta metodología consiste en tomar las medidas citadas en los puntos 7.2 y 7.3 de este pliego,\ndestinadas a proteger a las personas contra los peligros que pueden derivarse de un contacto con\nlas partes activas de los materiales eléctricos que integran la instalación.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=7"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 451",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 451.- El acceso a las áreas posteriores de los tableros descubiertos deberá ser restringido por barreras sólidas o puertas, ubicadas de tal manera que impidan el ingreso a personal no autorizado. Las entradas a estas áreas permanecerán siempre cerradas con llave, excepto cuando se realicen trabajos en el tablero.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650186"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 46246
    }
  },
  {
    "img": "s/e2.jpg",
    "kind": "electrico",
    "credit": "Electrical room 2 · footloosiety · CC BY 2.0",
    "link": "https://www.flickr.com/photos/15199494@N04/2900721439",
    "rep": {
      "tipo": "electrico",
      "resumen": "Se observa un tablero eléctrico con múltiples paneles y disyuntores, con señales de deterioro y suciedad, junto a una persona con casco de seguridad.",
      "corresponde": true,
      "cumple": [
        "El trabajador utiliza casco de seguridad blanco.",
        "El tablero cuenta con interruptores con manijas para operación manual.",
        "Los paneles están montados de forma fija y alineados en la pared.",
        "Existe ventilación en los laterales de algunos paneles del tablero."
      ],
      "no_evaluable": [
        "Estado de los cables internos y conexiones dentro del tablero.",
        "Verificación de puesta a tierra del tablero y equipos.",
        "Medición de tensiones y corrientes en los circuitos.",
        "Revisión de documentación técnica y certificaciones del tablero.",
        "Estado de los dispositivos de protección contra sobrecorriente (fusibles o breakers) internos."
      ],
      "hallazgos": [
        {
          "titulo": "Deterioro y suciedad en tablero eléctrico",
          "observacion": "Los paneles del tablero presentan manchas de óxido, suciedad acumulada y desgaste en la pintura, especialmente en los bordes y alrededor de los interruptores.",
          "severidad": "media",
          "caja": [
            120,
            0,
            710,
            999
          ],
          "busqueda": "Los tableros eléctricos deben mantenerse en buen estado de conservación, limpios y libres de óxido o suciedad que pueda comprometer su funcionamiento o seguridad.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 39",
              "h": "TITULO II NORMAS GENERALES › Capítulo Segundo De las Obligaciones de los Trabajadores",
              "t": "Artículo 39.- Sin perjuicio de las mantenciones y/o revisiones realizadas por personal especialista; es obligación de todo trabajador verificar, al inicio de su jornada de trabajo, el buen funcionamiento de los equipos, maquinarias y elementos de control con que deba efectuar su labor. También, verificará el buen estado de las estructuras, fortificación, materiales y el orden y limpieza del lugar de trabajo.\n Si el trabajador observa defectos o fallas en los equipos y sistemas antes mencionados en cualquier lugar de la faena, debe dar cuenta de inmediato a sus superiores, sin perjuicio de las medidas que pueda tomar, conforme a lo que él este autorizado.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649732"
            }
          ],
          "exigencia": "El trabajador debe verificar el buen estado de las estructuras, materiales y el orden y limpieza del lugar de trabajo, y reportar defectos o fallas a sus superiores.",
          "accion": "Limpiar el tablero eléctrico, eliminar óxido y suciedad, y restaurar la pintura y conservación de los paneles según corresponda.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 6",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 6°: Las paredes interiores de los lugares de trabajo, los cielos rasos, puertas y ventanas y demás elementos estructurales, serán mantenidos en buen estado de limpieza y conservación, y serán pintados, cuando el caso lo requiera, de acuerdo a la naturaleza de las labores que se ejecutan.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643083"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · ANEXO 2.3",
              "h": "Tableros eléctricos › ANEXO 2.3",
              "t": "* límite de corriente por calibre\n2.2 diseño\nSistema de ventilación según especificaciones y  *verificación de condiciones de diseño del conjunto\n2.3 uso de tablero  (caudal, materialidad)\n2.4  Verificación de juegos de barra  dimensión, materialidad y tratamiento superficial\n3.0  PRUEBAS DIELÉCTRICAS  Descripción\n*una vez realizado el montaje, se debe verificar\nTest dieléctrico de tensión (fábrica)\n3.1  nuevamente\n3.2 Verificación de distancias dieléctricas  *entre: partes conductivas, fases, fase-tierra.\n4.0  VERIFICACIÓN DE AISLAMIENTO  Descripción\n*todas las partes metálicas están unidas por un\nVerificación de la conexión efectiva de masas\n4.1  conductor a la tierra\n4.2 Verificación con testar de continuidad.  *verificación punto a punto\nResistencia de aislación no inferior 500V. Valor\n* según pliego 19.\n4.3 mínimo medido\n5.0  DESEMPEÑO MECÁNICO  Descripción\nVerificación de la conservación del grado de\n* verificar sellos de equipos incorporados\n5.1 protección IP\n5.2 Verificación del funcionamiento mecánico\n6.0 EFICACIA DE POTENCIA  Descripción\n6.1 Test de dispositivos diferenciales",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=18"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 4.9",
              "h": "Tableros eléctricos › Terminología",
              "t": "diferencial. Se entenderá por corriente diferencial a la suma fasorial de los valores instantáneos de\nlas corrientes que circulan a través de todos los conductores del circuito principal del protector.\n4.22 Señales de seguridad: Señales que, mediante una combinación de formas geométricas y colores\nestandarizados, entregan una indicación general relacionada con la seguridad y que a través de\nsímbolos o textos muestran un mensaje particular relativo a una condición de seguridad.\n4.23 Sobrecarga: Aumento de la potencia o corriente absorbida por un artefacto más allá de su valor\nnominal.\n4.24 Superintendencia: Superintendencia de Electricidad y Combustibles.\n4.25 Tablero eléctrico: Los tableros son equipos eléctricos de una instalación, que concentran\ndispositivos de protección y de maniobra o comando, desde los cuales se puede proteger y operar\ntoda la instalación o parte de ella.\n4.25.1 Los Tableros eléctricos se clasifican según la función y ubicación dentro de la instalación, en:\n4.25.1.1  Tableros generales: Son los tableros principales de las instalaciones. En ellos\nestarán montados los dispositivos de protección y de maniobra que protegen los\nalimentadores y que permiten operar sobre toda la instalación de consumo en\nforma conjunta o fraccionada.\n4.25.1.2  Tableros generales auxiliares: Son tableros que son alimentados desde un\ntablero general y desde ellos se protegen y operan subalimentadores que\nenergizan tableros de distribución.\n4.25.1.3  Tableros de distribución: Son tableros que contienen dispositivos de protección",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=3"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 1",
              "h": "Tableros eléctricos › Objetivos",
              "t": "1  Objetivos\nEl objetivo del presente pliego técnico es establecer los requisitos de seguridad que deben cumplir los\ntableros eléctricos en las instalaciones de consumo de energía eléctrica del país.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=1"
            }
          ]
        },
        {
          "titulo": "Falta de identificación clara en algunos paneles",
          "observacion": "Algunos paneles tienen etiquetas ilegibles, desgastadas o con información incompleta, dificultando la identificación de los circuitos.",
          "severidad": "media",
          "caja": [
            180,
            170,
            650,
            950
          ],
          "busqueda": "Cada panel o interruptor del tablero eléctrico debe contar con una identificación clara y legible que indique el circuito o equipo que controla.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.3.5–5.3.6",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.3.5  Todos los tableros, sin excepción, deberán llevar estampada en forma visible, legible e\nindeleble la marca de fabricación, el nombre del tablero, la tensión de servicio, la corriente\nnominal y el número de fases. El responsable de la instalación deberá agregar en su\noportunidad su nombre o marca registrada.\nMarca de Fabricación:\nNombre del Tablero: (Ejemplo: TGAux A. y F.)\nTipo de servicio: (Normal o Emergencia)\nTensión de servicio:\nCorriente nominal:\nEmpresa desarrolladora:\nAño de instalación:\nGrado de Protección IP:\nTipo de ambiente para el que fue diseñado en caso de ser un tablero especial:\n5.3.6  Todos los tableros deberán tener adherida la siguiente información:\n5.3.6.1  Cuadro indicador y rotulado para identificar los circuitos, su número y su función.\n5.3.6.2  Diagrama unilineal actualizado, de tamaño legible, y con protección permanente\npara mantener su condición.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5"
            }
          ],
          "exigencia": "Todos los tableros deben tener un cuadro indicador y rotulado para identificar los circuitos, su número y su función, además de un diagrama unilineal actualizado, legible y protegido permanentemente.",
          "accion": "Reemplazar o rehacer las etiquetas ilegibles e incompletas de los paneles, identificando claramente cada circuito con su número y función, y contar con diagrama unilineal actualizado y protegido.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°9 · 11",
              "h": "Sistemas de autogeneración › ROTULACIÓN Y SEÑALIZACIÓN",
              "t": "11  ROTULACIÓN Y SEÑALIZACIÓN\n11.1 Todas las rotulaciones, señalizaciones, procedimientos y advertencias requeridas en este pliego\ndeberán cumplir con lo siguiente:\n11.1.1  Ser indelebles.\n11.1.2  Ser legibles.\n11.1.3  Estar diseñadas y fijas de manera que sean legibles durante la vida útil del\nequipo o tablero al que están adheridas o relacionadas.\n11.1.4  Ser simples y comprensibles.\n11.2 La caja de empalme deberá contar con una placa de advertencia ubicada al frente o a un costado,\nde manera que sea visible y con el siguiente texto:\nPRECAUCIÓN\nESTA PROPIEDAD CUENTA CON UN SISTEMA DE AUTOGENERACIÓN\n11.3 El tamaño de la placa indicada en el punto 11.2 anterior deberá tener como mínimo de 70 mm\npor 40 mm. La inscripción deberá ser indeleble y la letra deberá tener un tamaño de 5 mm cómo\nmínimo.\n11.4 Todos los equipamientos, protecciones, interruptores, terminales y alimentadores del equipo de\nautogeneración a la llegada de la barra del punto de conexión deben estar rotulados.\n11.5 Se deberá identificar claramente el o los conductores provenientes del equipamiento de\nautogeneración que ingresen a la barra de distribución de un tablero diferente al tablero de\nautogeneración, tanto en su aislación o cubierta protectora como en el tablero. Se deberá\nidentificar además la barra de distribución donde se conecte la generación, diferenciándola del\nresto de barras de distribución que contenga el tablero eléctrico.\n11.6 Se deberá instalar una placa de identificación legible e indeleble por parte del instalador al",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N09-Sistemas-de-autogeneracion.pdf#page=12"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 6.2.7",
              "h": "Conductores, materiales y sistemas de canalización › Conductores › Características y condiciones de uso de los conductores",
              "t": "6.2.7  Identificación de conductores.\n6.2.7.1  Los conductores deberán ser marcados según lo indiquen los protocolos de\nanálisis y/o ensayos de seguridad de productos eléctricos respectivos definidos\npor la Superintendencia, y a falta de éstos, se deberá tomar como referencia la\nnorma de fabricación. La identificación deberá ser legible e indeleble.\n6.2.7.2  Las características a indicar de los conductores serán a lo menos las siguientes\n(o lo que indique la norma de producto respectiva):\n6.2.7.2.1  Nombre del fabricante o su marca registrada.\n6.2.7.2.2  País de fabricación del producto.\n6.2.7.2.3  Tipo de conductor, según norma. Por ejemplo, H07V-U.\n6.2.7.2.4  Sección en mm 2 para las secciones métricas, y sección en mm 2 y\nen paréntesis el número AWG ó kcmil para secciones AWG ó kcmil.\n6.2.7.2.5  Tensión de servicio. Corresponde a la tensión entre fases.\n6.2.7.2.6  Temperatura de servicio en grados Celsius (ºC).\n6.2.7.2.7  Número de certificado de aprobación del producto para aquellos\nconductores afectos a esta exigencia.\n6.2.7.3  En el caso de ser impresa, esta inscripción deberá hacerse en un color de\ncontraste con el color de la aislación o cubierta del conductor, de modo tal que\nesta información sea fácilmente legible y se deberá repetir con un\nespaciamiento máximo de 0,50 m entre el término y el comienzo de la siguiente\nmarca, en toda la longitud del conductor.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=27"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 474",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 474.- Los circuitos principales de trole se deben proteger con interruptores automáticos, que se desconecten por sobrecarga o cortocircuito.\n En toda derivación del circuito de trole deberá instalarse un interruptor seccionador que permita desenergizar dicha rama cuando se desee intervenir en ella.\nLos interruptores deben:\n\na) Ser perfectamente visibles.\nb) Poderse bloquear en la posición de apertura mediante una llave especial o candado.\nc) Tener un mecanismo que indique si están en posición abierta o cerrada.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650209"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 593 (parte 12)",
              "h": "TITULO XIV DISPOSICIONES FINALES",
              "t": "75. Cable:\n Conductor sólido o trenzado con aislación o sin ella o una combinación de conductores aislados entre sí.\n76. Cable armado:\n Conductor o conductores eléctricos aislados y protegidos mecánicamente por una o varias cintas metálicas. Sobre éstas, normalmente va una cubierta de protección contra el polvo, humedad, etc.\n77. Circuito:\n Un conductor o sistema de conductores por los cuales circula una corriente eléctrica.\n78. Conductor:\n Material metálico, usualmente en forma de alambre o cable, adecuado para el transporte de corriente eléctrica.\n79. Conductores de puesta a tierra:\n Conductor que se usa para poner a tierra el equipo o el sistema de alambrado a un electrodo o electrodos a tierra.\n80. Ducto:\n Canalización tubular para cables o conductores subterráneos.\n81. Equipos:\n Término general que comprende accesorios, dispositivos, artefactos, aparatos y similares, usados como una parte o en conexión a una instalación eléctrica.\n82. Expuesto:\n No aislado o resguardado. Dispositivo que puede ser tocado accidentalmente o al que una persona pueda aproximarse más cerca de la distancia segura. Se aplica a aquellos objetos que no están aislados o resguardados en forma conveniente.\n83. Interruptor:\n Aparato para abrir o cerrar o para cambiar la conexión de un circuito. Se entenderá que un interruptor es maniobrado manualmente, a menos que se indique otra cosa.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650338"
            }
          ]
        },
        {
          "titulo": "Persona cerca de equipo eléctrico en operación",
          "observacion": "Un trabajador con casco de seguridad se encuentra de pie muy cerca del tablero eléctrico, frente a los paneles activos.",
          "severidad": "alta",
          "caja": [
            730,
            190,
            920,
            999
          ],
          "busqueda": "Se debe mantener una distancia de seguridad adecuada entre las personas y los equipos eléctricos energizados para prevenir contactos accidentales o arcos eléctricos.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.3.7–5.4.1",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.3.7  Todas las protecciones y aparatos de maniobra deberán ser rotulados indicando cuál es su\nNúmero de circuito y servicio.\n5.3.8  Cuando el tablero cuente con seccionador, éste deberá tener claramente marcado la\nposición abierto o cerrado.\n5.3.9  Se deberá identificar claramente la sección milimétrica de los alimentadores que ingresen a\nla barra de distribución de un tablero o a la protección general.\n5.4  Espacios de trabajo en tableros y salas eléctricas:\n5.4.1  Para los efectos de fijación de los espacios de trabajo y distancias mínimas de seguridad, se\nconsiderará como zona alcanzable por una persona, a aquella que medida desde el punto\ndonde ésta pueda situarse, esté a una distancia límite de 2,50 m por arriba, 1,0 m\nlateralmente y 1,0 m hacia abajo. En el anexo 2.1 se expresa gráficamente esta definición.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=6"
            }
          ],
          "exigencia": "Se considera zona alcanzable por una persona aquella que, desde donde ésta pueda situarse, esté a 1,0 m lateralmente de equipos o partes energizadas.",
          "accion": "Mantener al trabajador a una distancia lateral mínima de 1,0 m del tablero eléctrico en operación o establecer barreras/espacios de trabajo que impidan el acercamiento a partes activas.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 428",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 428.- Se deberán adoptar las medidas para evitar todo contacto accidental de personas con elementos energizados de una instalación o equipo cuya tensión sea superior a cincuenta (50) volts. Se deben aplicar medidas tales como:\n\na) Disponer en las instalaciones de espacios necesarios para ejecutar las tareas.\nb) Los terminales de conductores, deberán poseer sus sistemas de aislación y protección aprobados.\nc) En las instalaciones de toda faena minera, los sistemas eléctricos, deberán diseñarse e instalarse de tal forma de evitar todo contacto de cables energizados con tendidos de cañerías, rieles u otros elementos metálicos, como asimismo con eventuales focos de agua.\nd) La instalación de cables para los sistemas de comunicación o tendidos de otra naturaleza, deberán diseñarse e instalarse de tal forma que no exista posibilidad alguna de que estos entren en contacto con cables eléctricos energizados o que puedan recibir algún tipo de inducción de corriente.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650163"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°11 · 12.2.1",
              "h": "Instalaciones especiales › CERCOS ELÉCTRICOS",
              "t": "12.5.1 Los cercos eléctricos de seguridad deberán ser instalados, operados y mantenidos de\nmodo tal de minimizar el peligro a las personas y reducir el riesgo de que las mismas\nreciban un shock eléctrico, salvo que intenten penetrar la barrera física, o se encuentren\nen el área segura sin la debida autorización.\n12.5.2 Se debe evitar las construcciones de cercos eléctricos de seguridad que puedan conducir\nal atrapamiento de personas.\n12.5.3 Las entradas de los cercos eléctricos de seguridad deberán poder ser abiertas sin que las\npersonas reciban un shock eléctrico.\n12.5.4 Los cercos eléctricos de seguridad instalados sobre rejas, murallas u otras protecciones,\ndeberán tener una altura igual o superior a 2.000 mm; en caso contrario, deberán tener\nuna barrera física, de una altura mínima de 1.800 mm, que deberá situarse a la distancia\nmenor de 200 mm o mayor de 1.000 mm. El objetivo de esta barrera es aislar el cerco de\nun contacto accidental por parte de terceros y prevenir que las personas queden atrapadas\nentre el cerco eléctrico y la barrera física.\n12.5.5 Respecto de la puesta a tierra, deberán seguirse las recomendaciones del fabricante del\nenergizador. La distancia entre el electrodo de tierra del cerco eléctrico de seguridad y\ndemás sistemas de tierra será como mínimo 2 m, salvo cuando esté asociada a una malla\nde puesta a tierra.\n12.5.6 Las partes conductivas expuestas de la barrera física serán puestas efectivamente a tierra.\n12.5.7 Cuando un cerco eléctrico de seguridad pase por debajo de conductores de líneas",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N11-Instalaciones-Especiales.pdf#page=51"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 5.2.1–5.3",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Exigencias generales",
              "t": "5.2.1  Se entenderá que queda sometido a una tensión por contacto directo, cuando toca con\nalguna parte de su cuerpo una parte del circuito o sistema eléctrico, que en condiciones\nnormales está energizada.\n5.2.2  Se entenderá que queda sometido a una tensión por contacto indirecto, cuando alguna parte\nde su cuerpo toca una parte metálica de un equipo eléctrico, la que en condiciones normales\nestá desenergizada, pero que en condiciones de falla se energiza.\n5.3  La instalación eléctrica debe estar dispuesta de forma que se minimice cualquier riesgo de peligro\nde contacto directo o indirecto para las personas y los animales domésticos, y de la ignición de\nmaterias inflamables debido a las temperaturas elevadas o a los arcos eléctricos. Además, en\nservicio normal, las personas y los animales no deben incurrir en ningún riesgo de quemaduras.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=2"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 406",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 406.- En plantas generadoras, subestaciones, centros de distribución y otros lugares en que exista el riesgo de contacto con equipos energizados, se deberá disponer de instrucciones escritas para el rescate de personas electrocutadas y su reanimación, así como de los medios necesarios para ello.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650141"
            }
          ]
        },
        {
          "titulo": "Señalización de advertencia deteriorada",
          "observacion": "Existe una etiqueta amarilla con texto en uno de los paneles superiores que se encuentra doblada y con el texto difícil de leer.",
          "severidad": "media",
          "caja": [
            580,
            190,
            640,
            340
          ],
          "busqueda": "Los equipos eléctricos deben contar con señalización de advertencia visible y en buen estado que indique los peligros eléctricos presentes.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°9 · 11",
              "h": "Sistemas de autogeneración › ROTULACIÓN Y SEÑALIZACIÓN",
              "t": "11  ROTULACIÓN Y SEÑALIZACIÓN\n11.1 Todas las rotulaciones, señalizaciones, procedimientos y advertencias requeridas en este pliego\ndeberán cumplir con lo siguiente:\n11.1.1  Ser indelebles.\n11.1.2  Ser legibles.\n11.1.3  Estar diseñadas y fijas de manera que sean legibles durante la vida útil del\nequipo o tablero al que están adheridas o relacionadas.\n11.1.4  Ser simples y comprensibles.\n11.2 La caja de empalme deberá contar con una placa de advertencia ubicada al frente o a un costado,\nde manera que sea visible y con el siguiente texto:\nPRECAUCIÓN\nESTA PROPIEDAD CUENTA CON UN SISTEMA DE AUTOGENERACIÓN\n11.3 El tamaño de la placa indicada en el punto 11.2 anterior deberá tener como mínimo de 70 mm\npor 40 mm. La inscripción deberá ser indeleble y la letra deberá tener un tamaño de 5 mm cómo\nmínimo.\n11.4 Todos los equipamientos, protecciones, interruptores, terminales y alimentadores del equipo de\nautogeneración a la llegada de la barra del punto de conexión deben estar rotulados.\n11.5 Se deberá identificar claramente el o los conductores provenientes del equipamiento de\nautogeneración que ingresen a la barra de distribución de un tablero diferente al tablero de\nautogeneración, tanto en su aislación o cubierta protectora como en el tablero. Se deberá\nidentificar además la barra de distribución donde se conecte la generación, diferenciándola del\nresto de barras de distribución que contenga el tablero eléctrico.\n11.6 Se deberá instalar una placa de identificación legible e indeleble por parte del instalador al",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N09-Sistemas-de-autogeneracion.pdf#page=12"
            }
          ],
          "exigencia": "Todas las rotulaciones, señalizaciones, procedimientos y advertencias requeridas deben ser indelebles, legibles, simples y comprensibles, y permanecer legibles durante la vida útil del equipo o tablero.",
          "accion": "Reemplazar la etiqueta deteriorada por una señal de advertencia indeleble, legible y fijada permanentemente en el panel superior.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°11 · 12.2.1",
              "h": "Instalaciones especiales › CERCOS ELÉCTRICOS",
              "t": "eléctricas desnudos, el elemento metálico más alto será efectivamente puesto a tierra para\nuna distancia de cómo mínimo 5 m a cualquier lado del punto de cruce.\n12.5.8 Los cercos eléctricos de seguridad deberán ser identificados con letreros de advertencia\nubicados en lugares visualmente destacados. Los carteles de advertencia deberán ser\nlegibles desde el área segura y del área de acceso público.\n12.5.9 Los carteles de advertencia deberán colocarse:\n12.5.9.1 En cada puerta o portón.\n12.5.9.2 En cada punto de acceso.\n12.5.9.3 A intervalos no mayores de 10 m.\n12.5.9.4 Adyacentes a cada cartel que indique peligros para la información de los\nservicios de emergencia.\n12.5.10 El tamaño del cartel de advertencia será como mínimo 100 mm por 200 mm. La inscripción\nserá indeleble, inscrita por ambos lados del cartel de advertencia y tendrá una altura de\ncómo mínimo 25 mm, con el texto siguiente: “PRECAUCIÓN CERCO ELÉCTRICO DE\nSEGURIDAD”.\n12.5.11 Para exigencias de instalaciones de cercos eléctricos que no se indiquen en lo puntos\nprecedentes se debe consultar la norma IEC 60335-2-76, Anexos BB y CC.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N11-Instalaciones-Especiales.pdf#page=51"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 404",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 404.- Los avisos de advertencia e instrucciones destinados a restringir y advertir al personal respecto de los riesgos presentes, las limitaciones de acceso a recintos energizados y las restricciones para la intervención de sistemas deberán ser instalados en lugares destacados.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650139"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°11 · 8.3.3–8.3.6",
              "h": "Instalaciones especiales › Exigencias generales",
              "t": "8.3.3  Se permite que las tensiones internas de los equipos de conversión de potencia y\nasociados, incluidos los conductores que interconectan el equipo, sean más altas, siempre\nque dichos equipos y conductores sean apropiados para esa mayor tensión. Cuando la\ntensión supere los 400 V, se debe instalar en los equipos y en lugar visible, carteles o\netiquetas con la advertencia \"PELIGRO - ALTA TENSIÓN\".\n8.3.4  Los circuitos de iluminación cumplirán los requisitos de este reglamento.\n8.3.5  Los circuitos para los equipos de calefacción y aire acondicionado situados en la cabina\ndel ascensor tendrán una tensión máxima de 400 V.\n8.3.6  Las partes activas para los aparatos eléctricos ubicados en los huecos de los ascensores,\nen las paradas; sobre o dentro de las cabinas de los ascensores, montacargas, minicargas;\nen los fosos o paradas de escaleras mecánicas o rampas móviles y espacios de\nmaquinarias de los ascensores, de plataformas elevadoras, salva escaleras, deben estar\nprotegidos para evitar cualquier contacto accidental.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N11-Instalaciones-Especiales.pdf#page=34"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 37",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 37: Deberá suprimirse en los lugares de trabajo cualquier factor de peligro que pueda afectar la salud o integridad física de los trabajadores.\n Todos los locales o lugares de trabajo deberán contar con vías de evacuación horizontales y/o verticales que, además de cumplir con las exigencias de la Ordenanza General de Urbanismo y Construcción, dispongan de salidas en número, capacidad y ubicación y con la identificación apropiada para permitir la segura, rápida y expedita salida de todos sus ocupantes hacia zonas de seguridad. Las puertas de salida no deberán abrirse en contra del sentido de evacuación y sus accesos deberán conservarse señalizados y libres de obstrucciones. Estas salidas podrán mantenerse entornadas, pero no cerradas con llave, candado u otro medio que impida su fácil apertura.\n Las dependencias de los establecimientos públicos o privados deberán contar con señalización visible y permanente en las zonas de peligro, indicando el agente y/o condición de riesgo, así como las vías de escape y zonas de seguridad ante emergencias.\n Además, deberá indicarse claramente por medio de señalización visible y permanente la necesidad de uso de elementos de protección personal específicos cuando sea necesario.\n Los símbolos y palabras que se utilicen en la señalización, deberán estar de acuerdo con la normativa nacional vigente, y a falta de ella con la que determinen las normas chilenas oficiales y aparecer en el idioma oficial del país y, en caso necesario cuando haya trabajadores de otro idioma, además en el de ellos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643121"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 10458
    }
  },
  {
    "img": "s/e3.jpg",
    "kind": "electrico",
    "credit": "Pulling cables to the panels in an electrical room in the fu · MTA C&D - EAST SIDE ACCESS · CC BY 2.0",
    "link": "https://www.flickr.com/photos/59595815@N03/50097767532",
    "rep": {
      "tipo": "electrico",
      "resumen": "Tablero eléctrico abierto con canalización metálica superior y cableado expuesto; se observan deficiencias visibles de orden y protección, junto con tuberías de gas o fluidos bajo el equipo.",
      "corresponde": true,
      "cumple": [
        "Tablero metálico con estructura visible y puerta con bisagras",
        "Canalización metálica rígida instalada en la parte superior del tablero",
        "Presencia de dispositivos de protección o maniobra al interior del tablero",
        "Manómetros instalados en tubería inferior con visibilidad de lectura"
      ],
      "no_evaluable": [
        "Estado de aislamiento de los conductores (requiere medición eléctrica)",
        "Corriente de carga y calibración de protecciones (requiere datos de placa y mediciones)",
        "Existencia y vigencia de certificación o inspección del tablero (requiere documentos)",
        "Conexión a tierra del tablero y de la canalización metálica (requiere verificación en terreno)",
        "Etiquetado de circuitos y dispositivos dentro del tablero (no se lee en la imagen)"
      ],
      "hallazgos": [
        {
          "titulo": "Cableado desordenado dentro del tablero",
          "observacion": "Numerosos conductores de colores variados sueltos y entrelazados al interior del tablero, sin canalización ni sujetadores visibles que los ordenen.",
          "severidad": "alta",
          "caja": [
            590,
            440,
            900,
            990
          ],
          "busqueda": "Los conductores dentro de tableros eléctricos deben ir ordenados, sujetados y protegidos contra daños mecánicos.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.2–6.2.3",
              "h": "Tableros eléctricos › Especificaciones de construcción › Material eléctrico",
              "t": "6.2  Material eléctrico\n6.2.1  Los conductores de alimentación que lleguen a un tablero deberán hacerlo a los dispositivos\nde comando o protección, o en su defecto, a barras de distribución.\n6.2.2  El cableado interno del tablero se deberá dimensionar de acuerdo con las tablas de\nutilizando como equivalente el método de instalación A1 indicado en la letra e) de las notas\nincluidas al final de la tabla N°4.4 de dicho pliego. Cada conductor deberá quedar protegido\na la sobrecarga y al cortocircuito.\n6.2.3  Toda barra de distribución desnuda deberá estar protegida mediante una barrera o material\nque impida el contacto directo con la superficie de las barras, en ningún caso se considerará\nla cubierta cubre equipo como un único elemento de protección. El elemento que cubra las\nbarras desnudas debe tener el símbolo de riesgo eléctrico indicado en el anexo 2.2 y deberán\ncontar con una identificación según su uso (normal, emergencia, especial de uso fotovoltaico,\netc.)",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=10"
            }
          ],
          "exigencia": "El cableado interno del tablero debe estar protegido contra sobrecarga y cortocircuito, y los conductores de alimentación deben llegar a dispositivos de comando, protección o barras de distribución.",
          "accion": "Ordenar, sujetar y canalizar los conductores sueltos dentro del tablero, conectándolos a dispositivos de comando, protección o barras de distribución.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 5.9",
              "h": "Conductores, materiales y sistemas de canalización › Conceptos Generales",
              "t": "buena adherencia a la aislación u otro método que garantice la permanencia en el tiempo de la marca,\nrespetando el código de colores establecido en el punto 5.32 anterior.\nPor razones de seguridad, las cubiertas o aislaciones de color verde o verde/amarillo solo se emplearán\npara identificar conductores de protección (puesta a tierra). Por tal razón, no se permite el uso de\nalambres o cables multiconductores con cubierta exterior de color verde o verde/amarillo para otros\nfines, salvo que su fin específico sea la utilización como conductor de tierra de protección.\n5.34 Todos los conductores deben ser continuos entre tableros eléctricos, entre caja y caja o entre artefactos\ny artefactos. No se permiten las uniones de conductores dentro de los tableros eléctricos o en los ductos.\n5.35 Al alambrar una instalación se deberán seguir las siguientes indicaciones:\n5.35.1 Todo el sistema de ductos debe estar instalado completo o en secciones completas antes de\nalambrar.\n5.35.2 Debe evitarse el alambrar mientras la edificación no se encuentre en un estado de avance tal\nque se asegure una protección adecuada de la canalización contra daños físicos, humedad y\nagentes atmosféricos que la puedan deteriorar.\n5.35.3 En el momento de efectuar el alambrado debe verificarse que los sistemas de ductos estén\nlimpios, sin agua y libres de agentes extraños a la canalización.\n5.35.4 Si se usan lubricantes para el tendido de los conductores, debe verificarse que éstos sean de\nun tipo que no degrade las características de la aislación y/o cubierta de los conductores.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=9"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · ANEXO 2.3",
              "h": "Tableros eléctricos › ANEXO 2.3",
              "t": "ANEXO 2.3\nVERIFICACIONES DE DISEÑO Y PRUEBAS DE RUTINA PARA TABLERO\nTABLEROS > Pruebas, Verificaciones y Documentación\n1.0  REQUISITOS GENERALES  Descripción\n1.1 Conformidad según los planos  *cantidad y tipo de elementos\n1.2 Verificación de equipos  *rango (corriente, cc, aislación sensibilidad)\n1.3 Conformidad de equipos especificados  *comprobar que cumple con EETT (marca formato)\n*energizar y verificar continuidad hasta el último\nFuncionamiento eléctrico (potencia)\n1.4  punto\n1.5 Funcionamiento eléctrico (comando)  *energizar y probar funcionamiento de control\n1.6 Verificación de aparatos de medida  *energizar y verificar tensión de llegada\n*Diseño de acuerdo a requerimientos de\nCertificado de fabricante de envolvente  especificación técnica IP, IK, grado de aislación y\n1.7  compartimentación\n1.8 Código de colores  Código de colores en conformidad al pliego N°4\nBornes para conductores externos y/o barras de\nInspección visual\n1.9 llegada o salida\n1.10 Presencia de placa de datos (Rotulado)  Inspección visual\n1.11 Plano unilineal del tablero  * en el tablero\nPresencia de documentación (Mínimo: Planos\nconstrucción, esquema eléctrico y control, listado\n*entregar según convenido con mandante\nde circuitos, listado de materiales, certificado de\n1.12 calidad)\n*cuando amerite, según peso, tamaño, transporte y\nRecomendaciones de izaje y/o transporte\n1.13  disposición final.\nREQUISITOS PARA CONTROLAR\nDescripción\n2.0  CALENTAMIENTO\nNOTA: Se requiere normalizar tabla de torque en el\nVerificación de torques de apriete\n2.1  reglamento\nVerificación del calibre del cableado conforme a",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=18"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 475",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 475.- Los conductores y demás elementos instalados en las locomotoras eléctricas, deben estar protegidos contra eventuales daños causados por agentes externos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650210"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 447",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 447.- Todo equipo eléctrico debe protegerse apropiadamente de:\n\na) La humedad, con cubiertas protectoras y calefactores si fuere necesario.\nb) La acumulación de polvo.\nc) La acción de los roedores, cerrando las aberturas con rejillas para no impedir su ventilación.\nd) Daños mecánicos por caída de piedras u otro motivo;\ny\n e) Sobrecarga, cortocircuito y fallas a tierra.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650182"
            }
          ]
        },
        {
          "titulo": "Tuberías de servicio bajo el tablero eléctrico",
          "observacion": "Tubería metálica con manómetros y válvulas instalada directamente debajo del tablero eléctrico abierto, con riesgo de contacto o derrame sobre equipos energizados.",
          "severidad": "alta",
          "caja": [
            110,
            850,
            700,
            999
          ],
          "busqueda": "No se deben instalar tuberías de fluidos o gas directamente bajo tableros eléctricos ni en zonas que expongan el equipo a fugas o contacto accidental.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 7.1.4–7.1.7",
              "h": "Conductores, materiales y sistemas de canalización › Sistemas de canalización › Disposiciones generales",
              "t": "7.1.4  La selección del tipo de canalización en cada instalación particular se realizará\nescogiendo, en función de las influencias externas, el que se considere más adecuado\nentre los indicados en el punto 7.1.1 de este pliego.\n7.1.5  Las canalizaciones eléctricas no se instalarán debajo de elementos que pudieran\nproducir condensación o filtraciones, tales como las destinadas a conducción de vapor,\nde agua, de gas o similares, a menos que se tomen las consideraciones necesarias para\nproteger las canalizaciones eléctricas contra los efectos de estas.\n7.1.6  En un mismo conducto, shaft o canal de una construcción, solo se podrán instalar\ncanalizaciones eléctricas y de comunicación o control. Para estas últimas se debe tener\nniveles de tensión peligrosos.\n7.1.7  Las canalizaciones eléctricas y de comunicación o control, instaladas al interior de un\nmismo conducto, shaft o canal de una construcción, se deberán separar y distanciar\nadecuadamente para evitar influencias electromagnéticas.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=28"
            }
          ],
          "exigencia": "Las canalizaciones eléctricas no se instalarán debajo de elementos que pudieran producir condensación o filtraciones, tales como conducción de vapor, agua, gas o similares, a menos que se tomen consideraciones para protegerlas.",
          "accion": "Reubicar o proteger la tubería metálica de servicio instalada debajo del tablero eléctrico para evitar contacto o derrame sobre equipos energizados.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°1 · 7.9.7",
              "h": "Empalmes › CONDICIONES DE DISEÑO",
              "t": "7.16 Los recintos de empalmes eléctricos podrán utilizarse también para instalar en ellos los empalmes\ndestinados a servicios de comunicaciones, los cuales deberán estar separados de los eléctricos por\nun panel divisorio de material no combustible, dispuesto de forma tal que no entorpezca el acceso ni\nla operación de ninguna de las instalaciones. En este recinto no podrán instalarse los empalmes o\nequipos de medida de otros servicios tales como agua potable o gas, así como tampoco podrá usarse\neste recinto como lugar de estadía de personal, bodega, ni como lugar de almacenamiento de ninguna\nespecie.\n7.17 En los casos en que la canalización de otros servicios, tales como de comunicaciones o control,\ncompartan recintos, canalizaciones o conductos con instalaciones eléctricas, aquella deberá ser\nproyectada e instalada teniendo en cuenta que podrán ser afectados por fallas o interferencias\noriginadas en las instalaciones eléctricas.\n7.18 Está prohibido que los ductos de agua o gas crucen por el interior de los staff o recintos donde se\nubican los empalmes eléctricos.\n7.19 Está prohibido realizar derivaciones desde el alimentador o conductores que conectan el empalme\ncon el primer tablero de la instalación.\n7.20 Los empalmes subterráneos deben ser mecánicamente resistentes, con una adecuada conductividad\neléctrica, aislados y sellados en forma efectiva para evitar el ingreso de agua. En zonas donde sea\nimposible cumplir con tal requerimiento por su alto nivel pluviométrico, se deberán utilizar conductores",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=7"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 7.9.9",
              "h": "Conductores, materiales y sistemas de canalización › Sistemas de canalización › Conductores en canalizaciones subterráneas",
              "t": "impactos, a las compresiones y a las deformaciones debidas a los efectos del\ncalor y tener una resistencia mecánica suficiente como para soportar los\nesfuerzos a que se verán sometidas durante su manipulación, montaje y uso.\n7.16.3.2 Está prohibido el uso de tuberías no metálicas en las siguientes condiciones:\na)  En lugares en que se presenten riesgos de incendio o de explosión.\nb)  Como soporte de equipos y otros dispositivos.\nc)  Expuestas directamente a la radiación solar, excepto si el material de la\ntubería está expresamente aprobado para este uso y la tubería lleva\nmarcada en forma indeleble esta condición en su cubierta.\nd)  Donde están expuestas a daños físicos severos que excedan la\nresistencia mecánica para la cual la tubería fue diseñada.\ne)  En donde la temperatura ambiente exceda la temperatura para la cual la\ntubería fue aprobada.\nf)  Para llevar conductores cuya temperatura de servicio exceda la\ntemperatura para la cual la tubería fue aprobada.\n7.16.3.3 En donde se instale una tubería no metálica embutida o preembutida en muros,\nse deberá montar en tramos verticales y horizontales próximos al cielo o piso.\nEn los tramos horizontales se aceptará tenderlos a 0,30 m de los cielos y a 0,20\nm de los pisos.\n7.16.3.4 Las tuberías no metálicas rígidas curvables en caliente, podrán ser\nensamblados entre sí en caliente, recubriendo el empalme con un pegamento\nespecial cuando se precise una unión estanca.\n7.16.3.5 Podrán utilizarse tuberías no metálicas flexibles construidas de materiales\nincombustibles o autoextinguentes y resistentes a la acción de la humedad, la",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=59"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 465",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 465.- Las líneas aéreas desnudas de transmisión y distribución en superficie, exceptuando las de trole, no deben estar a menos de seis metros veinte centímetros (6,20 mts.) sobre la superficie, a través de todo su recorrido. Las instalaciones de esta naturaleza, deben cumplir con el Reglamento de la Superintendencia de Electricidad y Combustibles.\n En los lugares en que se produce constante movimiento de equipos bajo las líneas eléctricas aéreas, se deberán adoptar a lo menos las siguientes medidas:\n\na) Instalar avisos de advertencia sobre el riesgo eléctrico.\nb) Indicar altura o distancias de seguridad de modo que las personas y equipos queden fuera del campo eléctrico.\nc) Colocar esferas anaranjadas en los cables más bajos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650200"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 405",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 405.- Toda instalación que se canalice bajo tierra debe estar señalizada en superficie con letreros que adviertan su presencia y replantearse en un plano que estará disponible en las faenas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650140"
            }
          ]
        },
        {
          "titulo": "Canalización metálica sin terminación visible en el tablero",
          "observacion": "Varios conductos metálicos rígidos terminan en la parte superior del tablero sin que se observe conexión a caja de derivación, tapas o sellado que evite ingreso de cuerpos extraños.",
          "severidad": "media",
          "caja": [
            400,
            0,
            700,
            450
          ],
          "busqueda": "Los conductos que ingresan a tableros eléctricos deben terminar de forma segura y protegida, evitando accesos abiertos al interior del equipo.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 5.9",
              "h": "Conductores, materiales y sistemas de canalización › Conceptos Generales",
              "t": "metálicas cada caja deberá conectarse a un conductor de protección; esta conexión se deberá hacer\ncon un perno colocado en la caja con este único propósito. No se acepta que se usen para este efecto\nlos pernos de sujeción de la tapa.\nLas cajas no metálicas no podrán utilizarse en canalizaciones con tuberías metálicas.\n5.14 En la unión de las tuberías con las cajas, se deberán utilizar boquillas con bordes redondeados o\ndispositivos equivalentes, con el objetivo de realizar una efectiva unión mecánica y proteger la aislación\nde los conductores en su instalación y manipulación.\n5.15 La entrada de un cable a una caja se fijará y protegerá mediante una prensaestopas o dispositivo similar,\nadecuado a la forma del cable.\n5.16 Las entradas de una caja que no se usen deberán dejarse cerradas. Para posibilitar el cumplimiento de\nesta disposición, las perforaciones de entrada que se hagan durante el proceso de fabricación serán\nsemicizalladas, de modo que puedan ser retiradas con facilidad con la ayuda de herramientas, pero\ndeberán resistir sin desprenderse los esfuerzos propios de su manipulación e instalación.\n5.17 Toda caja deberá tener su respectiva tapa, la que deberá quedar firmemente asegurada en su posición\nmediante pernos u otro sistema de cierre que exija de una herramienta para removerlo.\n5.18 Las cajas usadas en lugares húmedos o mojados deberán ser de construcción adecuada para resistir\nlas condiciones ambientes e impedir la entrada de humedad o fluido en su interior.\n5.19 Las cajas que se usen en lugares en que haya gran cantidad de polvo en suspensión deberán ser de",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=7"
            }
          ],
          "exigencia": "Las entradas de una caja que no se usen deberán dejarse cerradas, y la entrada de un cable a una caja se fijará y protegerá mediante prensaestopas o dispositivo similar.",
          "accion": "Cerrar o sellar las terminaciones de los conductos metálicos en la parte superior del tablero con dispositivos adecuados que impidan el ingreso de cuerpos extraños.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.9",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "capacidad, se construirán de modo tal que sean autosoportantes y se montarán anclados al\npiso. Además de ser accesibles frontalmente a través de puertas y cubiertas cubre equipos\ncomo las indicadas en el punto 6.1.3 y siguientes, podrán ser accesibles por los costados o\npor su parte trasera mediante tapas removibles fijadas mediante pernos del tipo imperdible.\n6.1.15 El conjunto de elementos que constituyen la parte eléctrica de un tablero deberá ser montado\nsobre un bastidor, placa de montaje o riel DIN fijado sobre montantes, mecánicamente\nindependiente de la caja, gabinete o armario los que se fijarán a éstos mediante pernos, de\nmodo de ser fácilmente removidos en caso de ser necesario. Se deberá asegurar la correcta\nconexión a tierra de todos los elementos metálicos que componen el tablero.\n6.1.16 El tamaño de caja, gabinete o armario se seleccionará considerando que:\n6.1.16.1  El cableado utilizado para la interconexión entre sus dispositivos en el tablero\ndeberá hacerse a través de bandejas portaconductores no metálicas que permitan\nel paso cómodo y seguro de los conductores, ocupando como máximo el 50 % de\nla sección transversal de cada bandeja. Se exceptuará de utilizar bandejas\nportaconductores en aquellos tableros eléctricos que tengan menos de 8 circuitos.\n6.1.16.2  Deberá quedar un espacio suficiente entre las paredes de los gabinetes o\nenvolvente y las protecciones o dispositivos de comando y/o maniobra de modo tal\nde permitir un fácil mantenimiento e inspección del tablero.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=9"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 593 (parte 12)",
              "h": "TITULO XIV DISPOSICIONES FINALES",
              "t": "75. Cable:\n Conductor sólido o trenzado con aislación o sin ella o una combinación de conductores aislados entre sí.\n76. Cable armado:\n Conductor o conductores eléctricos aislados y protegidos mecánicamente por una o varias cintas metálicas. Sobre éstas, normalmente va una cubierta de protección contra el polvo, humedad, etc.\n77. Circuito:\n Un conductor o sistema de conductores por los cuales circula una corriente eléctrica.\n78. Conductor:\n Material metálico, usualmente en forma de alambre o cable, adecuado para el transporte de corriente eléctrica.\n79. Conductores de puesta a tierra:\n Conductor que se usa para poner a tierra el equipo o el sistema de alambrado a un electrodo o electrodos a tierra.\n80. Ducto:\n Canalización tubular para cables o conductores subterráneos.\n81. Equipos:\n Término general que comprende accesorios, dispositivos, artefactos, aparatos y similares, usados como una parte o en conexión a una instalación eléctrica.\n82. Expuesto:\n No aislado o resguardado. Dispositivo que puede ser tocado accidentalmente o al que una persona pueda aproximarse más cerca de la distancia segura. Se aplica a aquellos objetos que no están aislados o resguardados en forma conveniente.\n83. Interruptor:\n Aparato para abrir o cerrar o para cambiar la conexión de un circuito. Se entenderá que un interruptor es maniobrado manualmente, a menos que se indique otra cosa.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650338"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 467",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 467.- Los puntos por los cuales un conductor blindado entra a una carcasa de metal, deben estar provistos de un acoplamiento que afiance firmemente el conductor a la carcasa y asegure la continuidad eléctrica entre el blindaje y la carcasa.\n Los puntos por los cuales los conductores entran en una carcasa de madera, deberán estar provistos de una mordaza con boquilla aislada, de modo que la mordaza no dañe a los conductores.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650202"
            }
          ]
        },
        {
          "titulo": "Puerta del tablero abierta sin señalización ni barrera",
          "observacion": "La puerta del tablero se encuentra abierta y apoyada, sin señalización de zona restringida ni barrera que impida el acceso de personas no autorizadas.",
          "severidad": "media",
          "caja": [
            170,
            430,
            470,
            850
          ],
          "busqueda": "Los tableros eléctricos deben mantenerse cerrados o, si están abiertos para trabajo, señalizados y protegidos contra acceso no autorizado.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 451",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 451.- El acceso a las áreas posteriores de los tableros descubiertos deberá ser restringido por barreras sólidas o puertas, ubicadas de tal manera que impidan el ingreso a personal no autorizado. Las entradas a estas áreas permanecerán siempre cerradas con llave, excepto cuando se realicen trabajos en el tablero.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650186"
            }
          ],
          "exigencia": "El acceso a las áreas posteriores de los tableros descubiertos deberá ser restringido por barreras sólidas o puertas, y las entradas permanecerán cerradas con llave, excepto durante trabajos en el tablero.",
          "accion": "Cerrar la puerta del tablero con llave y colocar señalización de zona restringida o barrera que impida el acceso de personal no autorizado.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.3.7–5.4.1",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.3.7  Todas las protecciones y aparatos de maniobra deberán ser rotulados indicando cuál es su\nNúmero de circuito y servicio.\n5.3.8  Cuando el tablero cuente con seccionador, éste deberá tener claramente marcado la\nposición abierto o cerrado.\n5.3.9  Se deberá identificar claramente la sección milimétrica de los alimentadores que ingresen a\nla barra de distribución de un tablero o a la protección general.\n5.4  Espacios de trabajo en tableros y salas eléctricas:\n5.4.1  Para los efectos de fijación de los espacios de trabajo y distancias mínimas de seguridad, se\nconsiderará como zona alcanzable por una persona, a aquella que medida desde el punto\ndonde ésta pueda situarse, esté a una distancia límite de 2,50 m por arriba, 1,0 m\nlateralmente y 1,0 m hacia abajo. En el anexo 2.1 se expresa gráficamente esta definición.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=6"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.4.3–5.4.8",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.4.3  Si la parte energizada descubierta está ubicada en la parte frontal de un tablero o centro de\ncontrol, el espacio de trabajo libre mínimo será de 1,50 m.\n5.4.4  El acceso a los espacios de trabajo debe estar asegurado por lo menos por una entrada de\nancho mínimo de 0,80 m y altura mínima de 2,20 m, salvo que la presencia de equipos de\ngran volumen dentro de la zona exija mayores dimensiones. Las puertas deberán abrir hacia\nfuera y estar premunidas de cerraduras que permitan abrir desde el interior sin el uso de\nllaves o herramientas.\n5.4.5  La altura libre sobre los espacios de trabajo no debe ser inferior a 1,0 m.\n5.4.6  Los espacios de trabajo deben tener una iluminancia mínima de 500 lux.\n5.4.7  Los espacios libres y de trabajo de estos recintos no podrán ser usados como lugares de\nalmacenamiento de ningún tipo de material, equipo o mobiliario, ni como recinto de estadía\nde personal.\n5.4.8  En este tipo de recintos no podrán instalarse tuberías o equipos de medida de otros servicios\ntales como agua potable o gas.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.2–6.2.3",
              "h": "Tableros eléctricos › Especificaciones de construcción › Material eléctrico",
              "t": "6.2  Material eléctrico\n6.2.1  Los conductores de alimentación que lleguen a un tablero deberán hacerlo a los dispositivos\nde comando o protección, o en su defecto, a barras de distribución.\n6.2.2  El cableado interno del tablero se deberá dimensionar de acuerdo con las tablas de\nutilizando como equivalente el método de instalación A1 indicado en la letra e) de las notas\nincluidas al final de la tabla N°4.4 de dicho pliego. Cada conductor deberá quedar protegido\na la sobrecarga y al cortocircuito.\n6.2.3  Toda barra de distribución desnuda deberá estar protegida mediante una barrera o material\nque impida el contacto directo con la superficie de las barras, en ningún caso se considerará\nla cubierta cubre equipo como un único elemento de protección. El elemento que cubra las\nbarras desnudas debe tener el símbolo de riesgo eléctrico indicado en el anexo 2.2 y deberán\ncontar con una identificación según su uso (normal, emergencia, especial de uso fotovoltaico,\netc.)",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=10"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 37",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 37: Deberá suprimirse en los lugares de trabajo cualquier factor de peligro que pueda afectar la salud o integridad física de los trabajadores.\n Todos los locales o lugares de trabajo deberán contar con vías de evacuación horizontales y/o verticales que, además de cumplir con las exigencias de la Ordenanza General de Urbanismo y Construcción, dispongan de salidas en número, capacidad y ubicación y con la identificación apropiada para permitir la segura, rápida y expedita salida de todos sus ocupantes hacia zonas de seguridad. Las puertas de salida no deberán abrirse en contra del sentido de evacuación y sus accesos deberán conservarse señalizados y libres de obstrucciones. Estas salidas podrán mantenerse entornadas, pero no cerradas con llave, candado u otro medio que impida su fácil apertura.\n Las dependencias de los establecimientos públicos o privados deberán contar con señalización visible y permanente en las zonas de peligro, indicando el agente y/o condición de riesgo, así como las vías de escape y zonas de seguridad ante emergencias.\n Además, deberá indicarse claramente por medio de señalización visible y permanente la necesidad de uso de elementos de protección personal específicos cuando sea necesario.\n Los símbolos y palabras que se utilicen en la señalización, deberán estar de acuerdo con la normativa nacional vigente, y a falta de ella con la que determinen las normas chilenas oficiales y aparecer en el idioma oficial del país y, en caso necesario cuando haya trabajadores de otro idioma, además en el de ellos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643121"
            }
          ]
        },
        {
          "titulo": "Pared con orificios sin tapar cerca del tablero",
          "observacion": "Se observan al menos dos orificios abiertos en la pared de bloques a la altura del tablero y la canalización, sin tapa ni protección.",
          "severidad": "baja",
          "caja": [
            360,
            270,
            410,
            310
          ],
          "busqueda": "Las aberturas en paredes de recintos eléctricos deben cerrarse para evitar ingreso de polvo, humedad o contacto accidental con partes vivas.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.5–6.1.8",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "6.1.5  Se podrán exceptuar de cumplir con lo indicado en los puntos 6.1.3 y 6.1.4 precedentes\naquellos tableros que cuenten con un seccionador bajo carga que permita su accionamiento\ndesde el exterior de la caja, sin que exista la exposición de personas al contacto con partes\ncon tensión.\n6.1.6  Las exigencias descritas en el punto 6.1.4 no serán aplicables para los tableros de tipo\ncentros de control de motores (CCM).\n6.1.7  Tanto la envolvente como la tapa de un tablero, deberá ser capaz de resistir los esfuerzos\nmecánicos, eléctricos y térmicos, para los que fueron diseñados.\n6.1.8  La cubierta cubre equipos tendrá por finalidad principal, impedir el contacto de cuerpos\nextraños con las partes energizadas, o bien, que partes energizadas queden al alcance del\nusuario al operar las protecciones o dispositivos de maniobra.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8"
            }
          ],
          "exigencia": "La cubierta cubre equipos tendrá por finalidad principal impedir el contacto de cuerpos extraños con las partes energizadas, o que partes energizadas queden al alcance del usuario al operar protecciones o dispositivos de maniobra.",
          "accion": "Tapar los orificios abiertos en la pared cercana al tablero y la canalización para impedir el ingreso de cuerpos extraños y el contacto accidental con partes energizadas.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.9",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "agentes climáticos, y deberán ser resistentes a la radiación UV.\n6.1.19.5  En caso de que estén instalados en locales de reunión de personas, deberán ser\nlibre de halógenos.\n6.1.20 Las distancias mínimas entre partes desnudas energizadas dentro de un tablero serán\ndeterminadas de acuerdo con la tabla Nº2.2. Se exceptúan de esta exigencia a las distancias\nentre contactos de dispositivos de protección y de maniobra las cuales deberán cumplir con\nlas normas específicas respectivas.\nTabla Nº2.2: Distancias entre partes energizadas desnudas dentro de un tablero\nDistinta polaridad\nTensiones de  Distinta polaridad  Partes energizadas\nmontada sobre la\nservicio  tendido al aire  con respecto a tierra\nmisma superficie\n[V]\n[mm]\n0 a 200  15  20  15\n201 a 400  20  35  15\n401 a 1000  30  50  30\n6.1.21 Los tableros deberán construirse con un índice de protección (grado IP) adecuado al medio\nambiente y a las condiciones de instalación considerando lo siguiente:\n6.1.21.1  No se aceptará la construcción de tableros de tipo abierto.\n6.1.21.2  Se deberá considerar un grado IP 41, como mínimo, para tableros en interior.\n6.1.21.3  Se deberá considerar un grado IP 44, como mínimo, para tableros instalados en\nexterior bajo techo y si no se encuentra bajo esta condición, debe ser de grado IP\n54 mínimo.\n6.1.21.4  En recintos considerados como húmedos o mojados, las cajas, gabinetes y\narmarios deberán estar instalados y/o equipados de modo que se evite que la\nhumedad y/o el agua entren al tablero. Se deberán separar como mínimo 6.5\nmilímetros de paredes u otra superficie de soporte.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=9"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 447",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 447.- Todo equipo eléctrico debe protegerse apropiadamente de:\n\na) La humedad, con cubiertas protectoras y calefactores si fuere necesario.\nb) La acumulación de polvo.\nc) La acción de los roedores, cerrando las aberturas con rejillas para no impedir su ventilación.\nd) Daños mecánicos por caída de piedras u otro motivo;\ny\n e) Sobrecarga, cortocircuito y fallas a tierra.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650182"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 7.2",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos directos",
              "t": "7.2  Se considerará suficiente protección contra los contactos directos con partes energizadas que\nfuncionen a más 24 V en lugares húmedos y más de 50 V en lugares secos, la adopción de una o\nmás de las siguientes medidas:\na)  Colocando las partes energizadas fuera de la zona alcanzable por una persona.\nb)  Colocando las partes activas en bóvedas, salas o recintos similares, accesibles únicamente a\npersonal calificado.\nc)  Separando las partes energizadas mediante rejas, tabiques o disposiciones similares, de modo\nque ninguna persona pueda entrar en contacto accidental con ellas y que sólo personal\ncalificado tenga acceso a la zona así delimitada.\nd)  Recubriendo las partes energizadas con aislantes apropiados, capaces de conservar sus\npropiedades a través del tiempo y que limiten las corrientes de fuga a valores no superiores a 1\nmA.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=7"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 451",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 451.- El acceso a las áreas posteriores de los tableros descubiertos deberá ser restringido por barreras sólidas o puertas, ubicadas de tal manera que impidan el ingreso a personal no autorizado. Las entradas a estas áreas permanecerán siempre cerradas con llave, excepto cuando se realicen trabajos en el tablero.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650186"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 13826
    }
  },
  {
    "img": "s/e4.jpg",
    "kind": "electrico",
    "credit": "Electrical Panel · peretzp · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/68877611@N00/5397919963",
    "rep": {
      "tipo": "electrico",
      "resumen": "El tablero eléctrico presenta cableado desordenado y material combustible dentro del recinto, lo que genera un riesgo grave de incendio y contacto accidental.",
      "corresponde": true,
      "cumple": [
        "El tablero cuenta con puerta metálica con cierre y manija.",
        "Existen tres indicadores luminosos (verde, rojo y amarillo) en el frente del tablero.",
        "Los interruptores automáticos visibles tienen cubiertas que protegen los bornes superiores.",
        "Los tres amperímetros del frente están instalados y protegidos por cubierta transparente."
      ],
      "no_evaluable": [
        "Corriente nominal real de los interruptores y si corresponde a la carga del circuito.",
        "Estado del aislamiento de los conductores mediante medición de resistencia.",
        "Existencia y vigencia de certificación del tablero o de los equipos instalados.",
        "Conexión a tierra del recinto metálico y continuidad del conductor de protección.",
        "Temperatura de operación de los equipos bajo carga."
      ],
      "hallazgos": [
        {
          "titulo": "Material combustible dentro del tablero",
          "observacion": "Se observa paja o material seco acumulado entre los interruptores y en el fondo del recinto eléctrico.",
          "severidad": "alta",
          "caja": [
            120,
            400,
            880,
            930
          ],
          "busqueda": "El interior de los tableros eléctricos debe mantenerse libre de materiales combustibles o inflamables.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.4.3–5.4.8",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.4.3  Si la parte energizada descubierta está ubicada en la parte frontal de un tablero o centro de\ncontrol, el espacio de trabajo libre mínimo será de 1,50 m.\n5.4.4  El acceso a los espacios de trabajo debe estar asegurado por lo menos por una entrada de\nancho mínimo de 0,80 m y altura mínima de 2,20 m, salvo que la presencia de equipos de\ngran volumen dentro de la zona exija mayores dimensiones. Las puertas deberán abrir hacia\nfuera y estar premunidas de cerraduras que permitan abrir desde el interior sin el uso de\nllaves o herramientas.\n5.4.5  La altura libre sobre los espacios de trabajo no debe ser inferior a 1,0 m.\n5.4.6  Los espacios de trabajo deben tener una iluminancia mínima de 500 lux.\n5.4.7  Los espacios libres y de trabajo de estos recintos no podrán ser usados como lugares de\nalmacenamiento de ningún tipo de material, equipo o mobiliario, ni como recinto de estadía\nde personal.\n5.4.8  En este tipo de recintos no podrán instalarse tuberías o equipos de medida de otros servicios\ntales como agua potable o gas.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7"
            }
          ],
          "exigencia": "Los espacios libres y de trabajo de los recintos eléctricos no podrán usarse como lugares de almacenamiento de ningún tipo de material, equipo o mobiliario.",
          "accion": "Retirar la paja y todo material combustible acumulado dentro y alrededor del tablero eléctrico.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.4.9",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.4.9  Las salas eléctricas deberán cumplir con los siguientes requisitos:\n5.4.9.1  Estar destinadas exclusivamente a la instalación de equipos eléctricos.\n5.4.9.2  Los recintos donde se ubiquen las salas eléctricas deberán ofrecer una resistencia\nal fuego RF 120.\n5.4.9.3  Los equipos eléctricos que se ubiquen en el interior de las salas eléctricas deberán\nutilizar aislantes tipo seco o líquido clase K, de acuerdo con la Norma IEC 61039.\n(aislantes con T° de ignición superior a 300°C)\n5.4.10 Las salas eléctricas deberán estar provistas de suficiente espacio de trabajo, que permita el\ncorrecto montaje y mantenimiento de los tableros eléctricos y equipos asociados, y disponer de\npiso antideslizante e iluminación suficiente. Además, deberán contar con equipos autónomos\nde alumbrado de emergencia, de autonomía no inferior a 2 horas que proporcione un nivel\nmínimo de iluminación de 5 lux presentes en el acceso a los tableros, en conformidad con el\n5.4.11 En los puntos de acceso a los espacios de trabajo se deberá colocar en forma destacada\nletreros prohibiendo el acceso a personal no calificado.\n5.4.12 Los tableros que dependan de la circulación natural de aire y de los principios de la\nconvección, para el enfriamiento de sus componentes, se deben instalar de modo que tengan\nel suficiente espacio para la circulación de este.\n5.4.13 Los tableros que cuenten con aberturas de ventilación deben instalarse de modo que las\nparedes u otros obstáculos no impidan la libre circulación del aire a través de este.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.9",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "agentes climáticos, y deberán ser resistentes a la radiación UV.\n6.1.19.5  En caso de que estén instalados en locales de reunión de personas, deberán ser\nlibre de halógenos.\n6.1.20 Las distancias mínimas entre partes desnudas energizadas dentro de un tablero serán\ndeterminadas de acuerdo con la tabla Nº2.2. Se exceptúan de esta exigencia a las distancias\nentre contactos de dispositivos de protección y de maniobra las cuales deberán cumplir con\nlas normas específicas respectivas.\nTabla Nº2.2: Distancias entre partes energizadas desnudas dentro de un tablero\nDistinta polaridad\nTensiones de  Distinta polaridad  Partes energizadas\nmontada sobre la\nservicio  tendido al aire  con respecto a tierra\nmisma superficie\n[V]\n[mm]\n0 a 200  15  20  15\n201 a 400  20  35  15\n401 a 1000  30  50  30\n6.1.21 Los tableros deberán construirse con un índice de protección (grado IP) adecuado al medio\nambiente y a las condiciones de instalación considerando lo siguiente:\n6.1.21.1  No se aceptará la construcción de tableros de tipo abierto.\n6.1.21.2  Se deberá considerar un grado IP 41, como mínimo, para tableros en interior.\n6.1.21.3  Se deberá considerar un grado IP 44, como mínimo, para tableros instalados en\nexterior bajo techo y si no se encuentra bajo esta condición, debe ser de grado IP\n54 mínimo.\n6.1.21.4  En recintos considerados como húmedos o mojados, las cajas, gabinetes y\narmarios deberán estar instalados y/o equipados de modo que se evite que la\nhumedad y/o el agua entren al tablero. Se deberán separar como mínimo 6.5\nmilímetros de paredes u otra superficie de soporte.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=9"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 663",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo quinto      Servicios para la minería › Párrafo 1.      Normas seguridad sobre electricidad y combustibles",
              "t": "Artículo 663.- Los lugares con productos inflamables y combustibles deben estar provistos con señaléticas de advertencia, deben contar con equipo de extinción de incendio y la prohibición de fumar; además, deben ser construidos o encontrarse ubicados en un lugar distante de la entrada de la mina. Los lugares destinados a reabastecer de combustible a las máquinas diésel, deberán ubicarse fuera de la mina subterránea.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313370"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 324",
              "h": "TITULO VII PROCESAMIENTO DE SUSTANCIAS MINERALES › Capítulo Primero Plantas de Tratamiento de Minerales",
              "t": "Artículo 324.- Los productos inflamables y combustibles deben ser almacenados en bodegas, recintos o estanques dispuestos para tal objetivo, de acuerdo a normas nacionales vigentes, debiendo observarse, además, las siguientes medidas:\n\na) Toda bodega o recinto de almacenamiento de productos inflamables debe construirse de materiales incombustibles con una resistencia mínima al fuego de dos horas (2hrs.).\nb) Su ubicación debe quedar a no menos de quince metros (15 mt.) del edificio más próximo.\nc) Disponer de sistemas de ventilación que aseguren la no formación y acumulación de mezclas inflamables o explosivas.\nd) Mantener control permanente del almacenamiento y despacho de productos, a través de personal instruido para ello.\n\n El almacenamiento y distribución de combustibles derivados del petróleo, se hará de acuerdo a las disposiciones vigentes del Ministerio de Transportes y Telecomunicaciones.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650048"
            }
          ]
        },
        {
          "titulo": "Cableado desordenado y sin sujeción",
          "observacion": "Cables de colores rojo, rosa, azul y verde están enredados, sueltos y sin canalización ni fijación dentro del tablero.",
          "severidad": "alta",
          "caja": [
            110,
            400,
            880,
            930
          ],
          "busqueda": "Los conductores eléctricos dentro de los tableros deben estar ordenados, sujetados y protegidos contra daños mecánicos.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 5.9",
              "h": "Conductores, materiales y sistemas de canalización › Conceptos Generales",
              "t": "buena adherencia a la aislación u otro método que garantice la permanencia en el tiempo de la marca,\nrespetando el código de colores establecido en el punto 5.32 anterior.\nPor razones de seguridad, las cubiertas o aislaciones de color verde o verde/amarillo solo se emplearán\npara identificar conductores de protección (puesta a tierra). Por tal razón, no se permite el uso de\nalambres o cables multiconductores con cubierta exterior de color verde o verde/amarillo para otros\nfines, salvo que su fin específico sea la utilización como conductor de tierra de protección.\n5.34 Todos los conductores deben ser continuos entre tableros eléctricos, entre caja y caja o entre artefactos\ny artefactos. No se permiten las uniones de conductores dentro de los tableros eléctricos o en los ductos.\n5.35 Al alambrar una instalación se deberán seguir las siguientes indicaciones:\n5.35.1 Todo el sistema de ductos debe estar instalado completo o en secciones completas antes de\nalambrar.\n5.35.2 Debe evitarse el alambrar mientras la edificación no se encuentre en un estado de avance tal\nque se asegure una protección adecuada de la canalización contra daños físicos, humedad y\nagentes atmosféricos que la puedan deteriorar.\n5.35.3 En el momento de efectuar el alambrado debe verificarse que los sistemas de ductos estén\nlimpios, sin agua y libres de agentes extraños a la canalización.\n5.35.4 Si se usan lubricantes para el tendido de los conductores, debe verificarse que éstos sean de\nun tipo que no degrade las características de la aislación y/o cubierta de los conductores.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=9"
            }
          ],
          "exigencia": "No se permiten las uniones de conductores dentro de los tableros eléctricos y el cableado debe mantenerse ordenado y protegido.",
          "accion": "Organizar, sujetar y canalizar el cableado interno del tablero, eliminando enredos y conductores sueltos.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.2–6.2.3",
              "h": "Tableros eléctricos › Especificaciones de construcción › Material eléctrico",
              "t": "6.2  Material eléctrico\n6.2.1  Los conductores de alimentación que lleguen a un tablero deberán hacerlo a los dispositivos\nde comando o protección, o en su defecto, a barras de distribución.\n6.2.2  El cableado interno del tablero se deberá dimensionar de acuerdo con las tablas de\nutilizando como equivalente el método de instalación A1 indicado en la letra e) de las notas\nincluidas al final de la tabla N°4.4 de dicho pliego. Cada conductor deberá quedar protegido\na la sobrecarga y al cortocircuito.\n6.2.3  Toda barra de distribución desnuda deberá estar protegida mediante una barrera o material\nque impida el contacto directo con la superficie de las barras, en ningún caso se considerará\nla cubierta cubre equipo como un único elemento de protección. El elemento que cubra las\nbarras desnudas debe tener el símbolo de riesgo eléctrico indicado en el anexo 2.2 y deberán\ncontar con una identificación según su uso (normal, emergencia, especial de uso fotovoltaico,\netc.)",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=10"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°11 · 8.7.4",
              "h": "Instalaciones especiales › Cableado de ascensores",
              "t": "8.7.4  Dentro del espacio de máquinas\n8.7.4.1  Se permitirá instalar tubo metálico flexible, tubo metálico flexible y hermético a\nlíquidos, de 16 mm de diámetro nominal o superior, pero que no excedan 1,80\nm de longitud, entre los paneles de control y los motores de las máquinas,\nfrenos de las máquinas, grupo motor-generador, medios de desconexión y\nmotores y válvulas de las unidades de bombeo.\n8.7.4.2  Cuando los grupos motor-generador, motores de máquinas o motores y\nválvulas de las unidades de bombeo estén situados adyacentes o debajo del\nequipo de control y estén provistos con conductores de longitud suficiente pero\nno mayores a 1,8 m, se permite que dichos conductores se prolonguen hasta\nconectarlos directamente con los bornes del controlador.\n8.7.4.3  Se permite instalar canaletas auxiliares en los espacios de máquinas y los\nespacios de control.\n8.7.4.4  Se permitirá usar cables y cordones flexibles que formen parte de equipos y\nutilizados en circuitos de baja tensión (menor a 50 V efectivos o menor a 60 V\nen corriente continua), cuando su longitud no exceda 1,8 m, siempre que los\ncables y cordones estén bien soportados y protegidos contra daños físicos.\n8.7.4.5  En los equipos existentes, se permitirá que los conductores estén agrupados y\natados con amarra cable, cordón sin estar instalados en una canalización.\nDichos grupos de cables serán soportados a intervalos no mayores a 9 m y\nubicados de modo que no estén expuestos a daños físicos.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N11-Instalaciones-Especiales.pdf#page=38"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 461",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 461.- Al atravesar barreras, puertas de ventilación y otras instalaciones semejantes, los cables deberán estar protegidos contra el riesgo de aplastamiento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650196"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 475",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 475.- Los conductores y demás elementos instalados en las locomotoras eléctricas, deben estar protegidos contra eventuales daños causados por agentes externos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650210"
            }
          ]
        },
        {
          "titulo": "Falta de identificación de circuitos",
          "observacion": "No se ven etiquetas, letreros ni marcadores que identifiquen qué circuito protege cada interruptor automático.",
          "severidad": "media",
          "caja": [
            190,
            420,
            690,
            630
          ],
          "busqueda": "Cada dispositivo de maniobra y protección debe estar identificado de forma clara y permanente.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°19 · 6.3.9",
              "h": "Puesta en servicio › INSPECCIÓN",
              "t": "6.3.9  La presencia de esquemas tales como, rotulado de tableros, diagrama unilineal,\nseñalética de emergencia si corresponde, carteles de aviso e informaciones análogas\nacordes a las condiciones ambientales donde se encuentren.\n6.3.10 La identificación de circuitos, dispositivos de protección, interruptores, bornes, barras de\ndistribución, regletas de conexión, alimentadores, conductores, etc.\n6.3.11 La adecuada unión mecánica y aislación de las conexiones entre conductores y\ndispositivos, verificando además el correcto uso de terminales de conexión.\n6.3.12 La presencia y adecuada instalación de los conductores de protección, incluyendo\nconductores de uniones equipotenciales de protección y equipotenciales suplementarias.\n6.3.13 La correcta implementación y operación de los sistemas de emergencia y respaldo de\nenergía, con sus respectivas señalizaciones.\n6.3.14 El adecuado emplazamiento (respecto a las condiciones climáticas, contaminación,\nriesgo de explosión, exposición solar, etc.) y fijación de canalizaciones.\n6.3.15 La adecuada accesibilidad para la cómoda operación y mantenimiento de la instalación y\nla verificación de las distancias de seguridad de la instalación.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N19-Puesta-en-Servicio-080621.pdf#page=4"
            }
          ],
          "exigencia": "Debe existir identificación de circuitos, dispositivos de protección, interruptores, bornes, barras de distribución, regletas de conexión, alimentadores y conductores.",
          "accion": "Etiquetar cada interruptor automático indicando el circuito que protege y colocar rotulado del tablero.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°7 · 7.4–7.4.3",
              "h": "Instalaciones de equipos › INSTALACIÓN DE EQUIPOS DE CLIMATIZACIÓN › Protecciones y comandos",
              "t": "7.4  Protecciones y comandos\n7.4.1  Los dispositivos de desconexión de los equipos de calefacción deberán instalarse con vistas\nal equipo controlado o en el frontis del mismo equipo.\n7.4.2  Se podrá usar como dispositivo de desconexión para un equipo de climatización el interruptor\no el protector termomagnético del circuito, siempre que estén a la vista del equipo y\nfácilmente accesible.\n7.4.3  Los dispositivos de interrupción controlados térmicamente y la combinación de termostatos\ne interruptores controlados manualmente podrán utilizarse simultáneamente para controles\ny medio de desconexión, si cumplen con todas las condiciones siguientes:\na)  Deberán estar provistos de una marca para la posición de \"apagado\".\nb)  Se desconectan directamente todos los conductores activos cuando se colocan\nmanualmente en la posición de \"apagado\".\nc)  Estar diseñados de tal forma que el circuito no pueda ser energizado automáticamente\ndespués de que el dispositivo ha sido colocado manualmente en la posición \"apagado\".",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/03/RIC-N07-Instalaciones-de-Equipos-V1.1-1.pdf#page=15"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°19 · 6.3.6–6.3.8",
              "h": "Puesta en servicio › INSPECCIÓN",
              "t": "6.3.6  La elección y uso de los equipos y de las medidas de protección apropiadas a las\ninfluencias externas o de medio ambiente tales como, clima, contaminación o polución\ndel aire, altura, riesgo de explosión o exposición solar, etc.\n6.3.7  La correcta identificación de los conductores de neutro y de los conductores de\nprotección, además de la identificación de circuitos y el etiquetado de conductores\nactivos, de acuerdo con el código de colores y de acuerdo con el tipo de uso de los\nalimentadores y conductores (si corresponde a respaldo o emergencias).\n6.3.8  La correcta instalación y uso de dispositivos de seccionamiento unipolar, bipolar, tripolar\no tetrapolar en los conductores de fase y neutro según corresponda.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N19-Puesta-en-Servicio-080621.pdf#page=4"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 441",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 441.- La capacidad de los fusibles empleados para proteger los circuitos alimentadores no debe exceder la corriente máxima permanente del conductor que protege. Esta capacidad debe estar claramente indicada en el cartucho, balín del fusible o en la placa del interruptor, así como también su tensión nominal de trabajo y si es de acción lenta o rápida.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650176"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 593 (parte 12)",
              "h": "TITULO XIV DISPOSICIONES FINALES",
              "t": "75. Cable:\n Conductor sólido o trenzado con aislación o sin ella o una combinación de conductores aislados entre sí.\n76. Cable armado:\n Conductor o conductores eléctricos aislados y protegidos mecánicamente por una o varias cintas metálicas. Sobre éstas, normalmente va una cubierta de protección contra el polvo, humedad, etc.\n77. Circuito:\n Un conductor o sistema de conductores por los cuales circula una corriente eléctrica.\n78. Conductor:\n Material metálico, usualmente en forma de alambre o cable, adecuado para el transporte de corriente eléctrica.\n79. Conductores de puesta a tierra:\n Conductor que se usa para poner a tierra el equipo o el sistema de alambrado a un electrodo o electrodos a tierra.\n80. Ducto:\n Canalización tubular para cables o conductores subterráneos.\n81. Equipos:\n Término general que comprende accesorios, dispositivos, artefactos, aparatos y similares, usados como una parte o en conexión a una instalación eléctrica.\n82. Expuesto:\n No aislado o resguardado. Dispositivo que puede ser tocado accidentalmente o al que una persona pueda aproximarse más cerca de la distancia segura. Se aplica a aquellos objetos que no están aislados o resguardados en forma conveniente.\n83. Interruptor:\n Aparato para abrir o cerrar o para cambiar la conexión de un circuito. Se entenderá que un interruptor es maniobrado manualmente, a menos que se indique otra cosa.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650338"
            }
          ]
        },
        {
          "titulo": "Interior del tablero sucio y con residuos",
          "observacion": "Existe suciedad, polvo y restos orgánicos sobre los equipos y en la base del recinto eléctrico.",
          "severidad": "media",
          "caja": [
            110,
            400,
            880,
            930
          ],
          "busqueda": "Los recintos eléctricos deben mantenerse limpios y libres de polvo, humedad y residuos que puedan afectar el aislamiento.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 447",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 447.- Todo equipo eléctrico debe protegerse apropiadamente de:\n\na) La humedad, con cubiertas protectoras y calefactores si fuere necesario.\nb) La acumulación de polvo.\nc) La acción de los roedores, cerrando las aberturas con rejillas para no impedir su ventilación.\nd) Daños mecánicos por caída de piedras u otro motivo;\ny\n e) Sobrecarga, cortocircuito y fallas a tierra.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650182"
            }
          ],
          "exigencia": "Todo equipo eléctrico debe protegerse apropiadamente de la acumulación de polvo.",
          "accion": "Limpiar el interior del tablero, retirando polvo, suciedad y restos orgánicos de equipos y base del recinto.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.4.3–5.4.8",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.4.3  Si la parte energizada descubierta está ubicada en la parte frontal de un tablero o centro de\ncontrol, el espacio de trabajo libre mínimo será de 1,50 m.\n5.4.4  El acceso a los espacios de trabajo debe estar asegurado por lo menos por una entrada de\nancho mínimo de 0,80 m y altura mínima de 2,20 m, salvo que la presencia de equipos de\ngran volumen dentro de la zona exija mayores dimensiones. Las puertas deberán abrir hacia\nfuera y estar premunidas de cerraduras que permitan abrir desde el interior sin el uso de\nllaves o herramientas.\n5.4.5  La altura libre sobre los espacios de trabajo no debe ser inferior a 1,0 m.\n5.4.6  Los espacios de trabajo deben tener una iluminancia mínima de 500 lux.\n5.4.7  Los espacios libres y de trabajo de estos recintos no podrán ser usados como lugares de\nalmacenamiento de ningún tipo de material, equipo o mobiliario, ni como recinto de estadía\nde personal.\n5.4.8  En este tipo de recintos no podrán instalarse tuberías o equipos de medida de otros servicios\ntales como agua potable o gas.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.9",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "agentes climáticos, y deberán ser resistentes a la radiación UV.\n6.1.19.5  En caso de que estén instalados en locales de reunión de personas, deberán ser\nlibre de halógenos.\n6.1.20 Las distancias mínimas entre partes desnudas energizadas dentro de un tablero serán\ndeterminadas de acuerdo con la tabla Nº2.2. Se exceptúan de esta exigencia a las distancias\nentre contactos de dispositivos de protección y de maniobra las cuales deberán cumplir con\nlas normas específicas respectivas.\nTabla Nº2.2: Distancias entre partes energizadas desnudas dentro de un tablero\nDistinta polaridad\nTensiones de  Distinta polaridad  Partes energizadas\nmontada sobre la\nservicio  tendido al aire  con respecto a tierra\nmisma superficie\n[V]\n[mm]\n0 a 200  15  20  15\n201 a 400  20  35  15\n401 a 1000  30  50  30\n6.1.21 Los tableros deberán construirse con un índice de protección (grado IP) adecuado al medio\nambiente y a las condiciones de instalación considerando lo siguiente:\n6.1.21.1  No se aceptará la construcción de tableros de tipo abierto.\n6.1.21.2  Se deberá considerar un grado IP 41, como mínimo, para tableros en interior.\n6.1.21.3  Se deberá considerar un grado IP 44, como mínimo, para tableros instalados en\nexterior bajo techo y si no se encuentra bajo esta condición, debe ser de grado IP\n54 mínimo.\n6.1.21.4  En recintos considerados como húmedos o mojados, las cajas, gabinetes y\narmarios deberán estar instalados y/o equipados de modo que se evite que la\nhumedad y/o el agua entren al tablero. Se deberán separar como mínimo 6.5\nmilímetros de paredes u otra superficie de soporte.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=9"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 5.4.9",
              "h": "Tableros eléctricos › Conceptos generales",
              "t": "5.4.9  Las salas eléctricas deberán cumplir con los siguientes requisitos:\n5.4.9.1  Estar destinadas exclusivamente a la instalación de equipos eléctricos.\n5.4.9.2  Los recintos donde se ubiquen las salas eléctricas deberán ofrecer una resistencia\nal fuego RF 120.\n5.4.9.3  Los equipos eléctricos que se ubiquen en el interior de las salas eléctricas deberán\nutilizar aislantes tipo seco o líquido clase K, de acuerdo con la Norma IEC 61039.\n(aislantes con T° de ignición superior a 300°C)\n5.4.10 Las salas eléctricas deberán estar provistas de suficiente espacio de trabajo, que permita el\ncorrecto montaje y mantenimiento de los tableros eléctricos y equipos asociados, y disponer de\npiso antideslizante e iluminación suficiente. Además, deberán contar con equipos autónomos\nde alumbrado de emergencia, de autonomía no inferior a 2 horas que proporcione un nivel\nmínimo de iluminación de 5 lux presentes en el acceso a los tableros, en conformidad con el\n5.4.11 En los puntos de acceso a los espacios de trabajo se deberá colocar en forma destacada\nletreros prohibiendo el acceso a personal no calificado.\n5.4.12 Los tableros que dependan de la circulación natural de aire y de los principios de la\nconvección, para el enfriamiento de sus componentes, se deben instalar de modo que tengan\nel suficiente espacio para la circulación de este.\n5.4.13 Los tableros que cuenten con aberturas de ventilación deben instalarse de modo que las\nparedes u otros obstáculos no impidan la libre circulación del aire a través de este.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 452",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 452.- Las salas de transformadores deben mantenerse bien ventiladas para evitar el sobrecalentamiento de los transformadores. La ventilación debe efectuarse con aire limpio y factible de ser suspendida en caso de incendio en la sala.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650187"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 24670
    }
  },
  {
    "img": "s/b1.jpg",
    "kind": "bodega",
    "credit": "Green Oil · XcBiker · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/66534737@N00/740500486",
    "rep": {
      "tipo": "bodega",
      "resumen": "La imagen muestra una zona de almacenamiento de tambores metálicos apilados en pallets, con presencia de óxido, etiquetas y sellos visibles, sin evidencia de contención de derrames ni señalización de seguridad en el sector observado.",
      "corresponde": true,
      "cumple": [
        "Los tambores se encuentran ordenados sobre pallets de madera",
        "Los envases están agrupados por tipo y color en bloques definidos",
        "Existe espacio de circulación entre los bloques de almacenamiento",
        "Los tambores están cerrados con sus tapas originales"
      ],
      "no_evaluable": [],
      "hallazgos": [
        {
          "titulo": "Apilamiento de tambores sin contención de derrames",
          "observacion": "Se observan tambores metálicos apilados en cinco niveles sobre pallets de madera, sin bandeja de contención, dique o sistema visible para retener derrames en caso de rotura o fuga.",
          "severidad": "alta",
          "caja": [
            0,
            0,
            1000,
            970
          ],
          "busqueda": "Los recipientes que contengan sustancias peligrosas deben almacenarse sobre superficies impermeables con sistema de contención de derrames",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 21",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO I DEL ALMACENAMIENTO DE PEQUEÑAS CANTIDADES",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 52",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 52.- Las bodegas para sustancias peligrosas que contengan líquidos deberán tener un sistema de control de derrames, el que podrá consistir en:\n   . Bodega auto contenida, con piso de pendiente no inferior a 0,5% que permita el escurrimiento del derrame hacia una zona de acumulación o con contención perimetral a través de soleras y/o lomos de toro.\n . Sistema de recolección conectado a una cámara de contención estanca la que tendrá un volumen equivalente al 110% del envase de mayor capacidad, con un mínimo de 1,1 m3.\n   En el caso de almacenarse sustancias incompatibles, se deberá contar con sistemas de contención separados.\n   Adicionalmente, tanto las bodegas que almacenen líquidos como sólidos, deberán contar con agentes de absorción y/o neutralización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689329"
            }
          ],
          "exigencia": "El lugar de almacenamiento de sustancias peligrosas debe contar con sistema de control de derrames, como materiales absorbentes o bandejas de contención",
          "accion": "Instalar bandejas de contención o sistema de retención de derrames bajo los tambores apilados y disponer agentes absorbentes",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 57",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 57.- Si las pilas están conformadas por pallets, con sustancias envasadas en sacos y cajas, tendrán una altura máxima de 3 m y de 4 m, cuando las sustancias estén en tambores, en contenedores IBC o maxisacos, y un largo y ancho tal que se cumplan las condiciones relativas a las puertas de escape establecidas en el artículo 38 de este reglamento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689334"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 5",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 5°: Los pavimentos y revestimientos de los pisos serán, en general, sólidos y no resbaladizos. En aquellos lugares de trabajo donde se almacenen, fabriquen o manipulen productos tóxicos o corrosivos, de cualquier naturaleza, los pisos deberán ser de material resistente a éstos, impermeables y no porosos, de tal manera que faciliten una limpieza oportuna y completa. Cuando las operaciones o el proceso expongan a la humedad del piso, existirán sistemas de drenaje u otros dispositivos que protejan a las personas contra la humedad.\n Para efectos del presente reglamento se entenderá por sustancias tóxicas, corrosivas, peligrosas, infecciosas, radiactivas, venenosas, explosivas o inflamables aquellas definidas en la Norma Oficial NCh 382:2013.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643082"
            }
          ]
        },
        {
          "titulo": "Tambores con corrosión y óxido visible",
          "observacion": "Varios tambores, especialmente en los niveles inferiores y medios, presentan manchas de óxido, desgaste de pintura y abolladuras que comprometen su integridad estructural.",
          "severidad": "media",
          "caja": [
            220,
            600,
            380,
            740
          ],
          "busqueda": "Los envases y recipientes deben mantenerse en buen estado, sin corrosión ni daños que provoquen derrames",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 9",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283"
            }
          ],
          "exigencia": "Los envases de sustancias peligrosas deben estar diseñados para impedir pérdidas de contenido, ser adecuados para su conservación, químicamente compatibles, de difícil ruptura y minimizar accidentes",
          "accion": "Retirar o reemplazar los tambores con corrosión, óxido, abolladuras o desgaste que comprometan su integridad y estanquidad",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 51 (parte 6)",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "n los hidrantes enterrados.\n Inspección visual comprobando la estanquidad del conjunto.\n Quitar las tapas de las salidas, engrasar las roscas.\n   Sistemas fijos de extinción  - Rociadores de agua  - Agua pulverizada  - Polvo  - Espuma  - Agentes extintores gaseosos  - Pitones Monitores.\n   Comprobación de que las boquillas del agente extintor o rociadores están en buen estado y libres de obstáculos.\n   Comprobación del buen estado de los componentes del sistema, especialmente de la válvula de prueba en los sistemas de rociadores, o los mandos manuales de la instalación de los sistemas de polvo o agentes extintores gaseosos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689328"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 105",
              "h": "TÍTULO VIII ALMACENAMIENTO DE SUSTANCIAS TÓXICAS, CORROSIVAS Y VARIAS EN ENVASES",
              "t": "Artículo 105.- Las bodegas de sustancias peligrosas que almacenen sustancias de la división 6.1, en las que exista fraccionamiento para uso en la propia empresa o por motivo de toma de muestra, se deberá asegurar que los envases abiertos que permanezcan en la bodega, queden adecuadamente cerrados y libres de producto en su exterior.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689393"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 65bis",
              "h": "TITULO IV De la Contaminación Ambiental › PARRAFO II De los Contaminantes Químicos",
              "t": "Artículo 65 bis: Prohíbase el uso de chorro de arena en seco como método de limpieza abrasiva.\n   Para efectos de esta prohibición, se entenderá por:\n \n a) Arena: Conjunto de partículas generadas por la disgregación natural de las rocas, que contienen sílice o cuarzo, provenientes de ríos, cantos rodados, minas o depósitos en el interior de tierra formando capas y playas, y que presentan forma angular y de color azul, gris o rosa.\n b) Sílice Libre Cristalizada o Sílice Cristalina:\nDióxido de silicios cristalizados (Si02), siendo las formas más comunes de encontrarse el cuarzo, además de la cristobalita y la tridimita, como compuestos derivados de procesos de altas temperaturas.\n c) Limpieza Abrasiva con Chorro de Arena: Proyección de arena a alta presión contra una determinada superficie, que puede ser metal, concreto, telas, vidrio u otra, con el objeto de pulir, limpiar, retirar óxidos o pinturas, desgaste de materiales, tallado, etc.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=9553861"
            }
          ]
        },
        {
          "titulo": "Falta de señalización de riesgo visible",
          "observacion": "No se observan letreros, diamantes de peligro, pictogramas ni señalización que identifique la clase de sustancia almacenada ni advierta del riesgo en el área de almacenamiento.",
          "severidad": "alta",
          "caja": [
            0,
            0,
            1000,
            200
          ],
          "busqueda": "Las zonas de almacenamiento de sustancias peligrosas deben contar con señalización visible que identifique el riesgo presente",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 30",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO II DE LAS BODEGAS COMUNES",
              "t": "Artículo 30.- La zona destinada para el almacenamiento de las sustancias peligrosas deberá estar claramente señalizada y demarcada, adicionalmente, deberá contar con el pictograma que indique las clases y divisiones de las sustancias en ella almacenadas, de acuerdo a la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha\n23.04.2004, del Ministerio de Transporte y Telecomunicaciones.\n   Se deberá mantener una distancia de 2,4 m entre sustancias peligrosas incompatibles. Además, se deberá mantener una distancia de 1,2 m entre las sustancias peligrosas y otras sustancias o mercancías no peligrosas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689306"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 33",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 33.- Cuando se superen las cantidades establecidas en el artículo 25, las sustancias peligrosas envasadas deberán almacenarse en una Bodega para Sustancias Peligrosas. Dichas bodegas deberán contar con pictogramas externos e internos, que indiquen las clases y divisiones de las sustancias almacenadas, de acuerdo a la NCh2190 Of.2003, oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones.\n   Los pictogramas ubicados en todos los muros externos de la bodega, deberán indicar las clases o divisiones de sustancias almacenadas en su interior, debiendo ser  visibles a una distancia de 10 m. Los pictogramas internos deberán ubicarse en cada una de las zonas de almacenamiento, de acuerdo a las clases y divisiones de las sustancias en ellas dispuestas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689310"
            }
          ],
          "exigencia": "La zona de almacenamiento de sustancias peligrosas debe estar claramente señalizada y demarcada con pictogramas que indiquen las clases y divisiones de las sustancias almacenadas",
          "accion": "Instalar señalización y pictogramas de peligro visibles en el área de almacenamiento y en los muros externos de la bodega, según NCh 2190 Of.2003",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 135",
              "h": "TÍTULO IX ALMACENAMIENTO A GRANEL › PÁRRAFO II LÍQUIDOS A GRANEL",
              "t": "Artículo 135.- Los estanques fijos superficiales deberán estar rotulados con el peligro primario y secundario, de acuerdo con la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones y la Norma Chilena Oficial 1411/4-2001, Prevención de riesgos - Parte 4: Señales de seguridad, para la identificación de riesgos de materiales.\nEstos rótulos deberán ser visibles a una distancia de 10 m y no podrá tener una dimensión menor de 50 cm por lado. En el caso de los estanques enterrados, esta señalética deberá estar sobre superficie en forma vertical y a no más de 3 m de la tapa de la cámara y a una altura no menor a\n1.5 m. Además, la zona sobre la cual están los estanques debe estar señalizada con letrero que indique \"Zona de estanques enterrados\", el cual deberá ser visible a 10 m.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689427"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 37",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 37: Deberá suprimirse en los lugares de trabajo cualquier factor de peligro que pueda afectar la salud o integridad física de los trabajadores.\n Todos los locales o lugares de trabajo deberán contar con vías de evacuación horizontales y/o verticales que, además de cumplir con las exigencias de la Ordenanza General de Urbanismo y Construcción, dispongan de salidas en número, capacidad y ubicación y con la identificación apropiada para permitir la segura, rápida y expedita salida de todos sus ocupantes hacia zonas de seguridad. Las puertas de salida no deberán abrirse en contra del sentido de evacuación y sus accesos deberán conservarse señalizados y libres de obstrucciones. Estas salidas podrán mantenerse entornadas, pero no cerradas con llave, candado u otro medio que impida su fácil apertura.\n Las dependencias de los establecimientos públicos o privados deberán contar con señalización visible y permanente en las zonas de peligro, indicando el agente y/o condición de riesgo, así como las vías de escape y zonas de seguridad ante emergencias.\n Además, deberá indicarse claramente por medio de señalización visible y permanente la necesidad de uso de elementos de protección personal específicos cuando sea necesario.\n Los símbolos y palabras que se utilicen en la señalización, deberán estar de acuerdo con la normativa nacional vigente, y a falta de ella con la que determinen las normas chilenas oficiales y aparecer en el idioma oficial del país y, en caso necesario cuando haya trabajadores de otro idioma, además en el de ellos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643121"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ]
        },
        {
          "titulo": "Etiquetas ilegibles o deterioradas en tambores",
          "observacion": "Algunos tambores muestran etiquetas blancas o marcas que están desgastadas, parcialmente desprendidas o sin contenido legible a simple vista.",
          "severidad": "media",
          "caja": [
            30,
            330,
            90,
            380
          ],
          "busqueda": "Cada recipiente debe estar debidamente identificado con etiqueta legible que indique su contenido y riesgos",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 183",
              "h": "TÍTULO XII DEL ETIQUETADO",
              "t": "Artículo 183.- Los envases y los envases/embalajes se etiquetarán en idioma español, con letra legible. Los elementos del recuadro de seguridad deberán destacar claramente del fondo y tener un tamaño y llevar una separación que faciliten su lectura, deberán estar dispuestos en forma horizontal cuando el envase se encuentre en su posición normal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689480"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 9",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283"
            }
          ],
          "exigencia": "Los envases deben estar debidamente etiquetados en idioma español, con letra legible y elementos de seguridad que destaquen del fondo",
          "accion": "Reemplazar o reponer las etiquetas ilegibles, deterioradas o desprendidas de los tambores, asegurando que sean legibles y estén en español",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 135",
              "h": "TÍTULO IX ALMACENAMIENTO A GRANEL › PÁRRAFO II LÍQUIDOS A GRANEL",
              "t": "Artículo 135.- Los estanques fijos superficiales deberán estar rotulados con el peligro primario y secundario, de acuerdo con la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones y la Norma Chilena Oficial 1411/4-2001, Prevención de riesgos - Parte 4: Señales de seguridad, para la identificación de riesgos de materiales.\nEstos rótulos deberán ser visibles a una distancia de 10 m y no podrá tener una dimensión menor de 50 cm por lado. En el caso de los estanques enterrados, esta señalética deberá estar sobre superficie en forma vertical y a no más de 3 m de la tapa de la cámara y a una altura no menor a\n1.5 m. Además, la zona sobre la cual están los estanques debe estar señalizada con letrero que indique \"Zona de estanques enterrados\", el cual deberá ser visible a 10 m.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689427"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 2)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "d) El personal que manipule las sustancias peligrosas deberá estar debidamente capacitado sobre los peligros y riesgos asociados a su manipulación.\n e) Las sustancias peligrosas deberán estar etiquetadas de acuerdo a lo establecido en el Título XII, del decreto supremo N° 43, de 2015, del Ministerio de Salud, con excepción de los plaguicidas que deberán ajustarse a la normativa específica para ellos.\n Los estanques de almacenamiento de combustibles líquidos deberán cumplir las exigencias dispuestas en el decreto supremo Nº 160, de 2008, del Ministerio de Economía, Fomento y Reconstrucción, que aprueba el Reglamento de Seguridad para las Instalaciones y Operaciones de Producción y Refinación, Transporte, Almacenamiento, Distribución y Abastecimiento de Combustibles Líquidos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ]
        },
        {
          "titulo": "Uso de precintos o cintas plásticas sobre tambores",
          "observacion": "Se observan cintas plásticas o precintos transversales sujetando tambores en los pallets, los cuales no constituyen un sistema de contención ni protección contra caídas.",
          "severidad": "baja",
          "caja": [
            200,
            40,
            370,
            110
          ],
          "busqueda": "El almacenamiento debe impedir el vuelco o caída de los recipientes",
          "citas": [],
          "exigencia": "",
          "accion": "Retirar las cintas plásticas o precintos que sujetan los tambores y verificar que el apilamiento y estiba cumplan con los requisitos de estabilidad y contención aplicables",
          "confianza": "baja",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 67",
              "h": "TÍTULO IV ALMACENAMIENTO DE GASES ENVASADOS",
              "t": "Artículo 67.- Los cilindros llenos deberán almacenarse separados de los vacíos. Estas distintas áreas deben estar claramente señalizadas de acuerdo a su condición de \"Cilíndros Llenos\" o \"Cilíndros Vacíos\".\nTodos los cilindros deben ser dispuestos en su posición normal de uso o almacenamiento y sujetos, encadenados a la pared o con una baranda o sistema que impida su volcamiento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689346"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 52",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 52.- Las bodegas para sustancias peligrosas que contengan líquidos deberán tener un sistema de control de derrames, el que podrá consistir en:\n   . Bodega auto contenida, con piso de pendiente no inferior a 0,5% que permita el escurrimiento del derrame hacia una zona de acumulación o con contención perimetral a través de soleras y/o lomos de toro.\n . Sistema de recolección conectado a una cámara de contención estanca la que tendrá un volumen equivalente al 110% del envase de mayor capacidad, con un mínimo de 1,1 m3.\n   En el caso de almacenarse sustancias incompatibles, se deberá contar con sistemas de contención separados.\n   Adicionalmente, tanto las bodegas que almacenen líquidos como sólidos, deberán contar con agentes de absorción y/o neutralización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689329"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 57",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 57.- Si las pilas están conformadas por pallets, con sustancias envasadas en sacos y cajas, tendrán una altura máxima de 3 m y de 4 m, cuando las sustancias estén en tambores, en contenedores IBC o maxisacos, y un largo y ancho tal que se cumplan las condiciones relativas a las puertas de escape establecidas en el artículo 38 de este reglamento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689334"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 67",
              "h": "TITULO IV De la Contaminación Ambiental › PARRAFO II De los Contaminantes Químicos",
              "t": "Artículo 67: Las sustancias de los artículos 61 y 66 que llevan calificativo ''Piel'' son aquellas que pueden ser absorbidas a través de la piel humana. Con ellas deberán adoptarse todas las medidas necesarias para impedir el contacto con la piel de los trabajadores y se extremarán las medidas de protección y de higiene personal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643156"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 11413
    }
  },
  {
    "img": "s/b2.jpg",
    "kind": "bodega",
    "credit": "Legal Committee 100th session - Photo Album · imo.un · CC BY 2.0",
    "link": "https://www.flickr.com/photos/62937028@N02/8568414991",
    "rep": {
      "tipo": "bodega",
      "resumen": "La imagen muestra ocho tambores metálicos apilados en dos pallets, con signos de corrosión, abolladuras y falta de identificación visible, lo que indica un almacenamiento de sustancias peligrosas con deficiencias evidentes.",
      "corresponde": true,
      "cumple": [
        "Los tambores están agrupados y ordenados sobre pallets, evitando almacenamiento suelto en el suelo.",
        "No se observan derrames visibles ni manchas de líquido en los pallets ni en el entorno inmediato de los tambores."
      ],
      "no_evaluable": [
        "Tipo y clasificación de las sustancias almacenadas en cada tambor.",
        "Ventilación natural o mecánica del área de almacenamiento.",
        "Distancia de seguridad a fuentes de ignición, áreas de tránsito o límites del predio.",
        "Existencia de señalización de peligro en el perímetro de la bodega o zona.",
        "Disponibilidad y ubicación de equipos de extinción o elementos de emergencia cercanos."
      ],
      "hallazgos": [
        {
          "titulo": "Tambores corroídos y deteriorados",
          "observacion": "Varios tambores presentan óxido superficial, abolladuras y desgaste en su estructura metálica, especialmente en los de color rojo, azul y verde.",
          "severidad": "alta",
          "caja": [
            30,
            60,
            950,
            930
          ],
          "busqueda": "Los envases de sustancias peligrosas deben mantenerse en buen estado, sin corrosión ni daños que comprometan su integridad y contención.",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 9",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283"
            }
          ],
          "exigencia": "Los envases de sustancias peligrosas deben impedir pérdidas de contenido, ser adecuados para su conservación, de material químicamente compatible, de difícil ruptura y que minimice accidentes.",
          "accion": "Reemplazar los tambores corroídos, abollados o deteriorados por envases en buen estado y aptos para la sustancia.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 105",
              "h": "TÍTULO VIII ALMACENAMIENTO DE SUSTANCIAS TÓXICAS, CORROSIVAS Y VARIAS EN ENVASES",
              "t": "Artículo 105.- Las bodegas de sustancias peligrosas que almacenen sustancias de la división 6.1, en las que exista fraccionamiento para uso en la propia empresa o por motivo de toma de muestra, se deberá asegurar que los envases abiertos que permanezcan en la bodega, queden adecuadamente cerrados y libres de producto en su exterior.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689393"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 39",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 39.- Dentro de las bodegas para sustancias peligrosas no podrán realizarse mezclas ni re-envasado de esas sustancias, excepto en aquellas que existan estanques fijos o en aquellas en que se deba realizar fraccionamiento para ser utilizado en la zona producción dentro del mismo sitio de la empresa. El proceso de etiquetado de las sustancias podrá realizarse al interior de la bodega. Tanto el fraccionamiento permitido como el etiquetado, al interior de una bodega, deberá realizarse en una zona especialmente destinada para ello.\n   Cuando se realice picking y packing al interior de las bodegas deberán mantenerse las mismas condiciones de seguridad establecidas en este reglamento y resguardarse las condiciones de seguridad para los trabajadores de acuerdo a lo establecido en DS 594 de 1999 del Ministerio de Salud. No obstante lo anterior, el embalaje de las sustancias después del picking deberá realizarse en una zona destinada especialmente para ello y sólo podrá realizarse con sustancias de dicha bodega, no permitiendo el ingreso de sustancias de otras bodegas, en tal caso, deberá habilitarse una zona habilitada para ello fuera de la bodega.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689316"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 2)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "d) El personal que manipule las sustancias peligrosas deberá estar debidamente capacitado sobre los peligros y riesgos asociados a su manipulación.\n e) Las sustancias peligrosas deberán estar etiquetadas de acuerdo a lo establecido en el Título XII, del decreto supremo N° 43, de 2015, del Ministerio de Salud, con excepción de los plaguicidas que deberán ajustarse a la normativa específica para ellos.\n Los estanques de almacenamiento de combustibles líquidos deberán cumplir las exigencias dispuestas en el decreto supremo Nº 160, de 2008, del Ministerio de Economía, Fomento y Reconstrucción, que aprueba el Reglamento de Seguridad para las Instalaciones y Operaciones de Producción y Refinación, Transporte, Almacenamiento, Distribución y Abastecimiento de Combustibles Líquidos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ]
        },
        {
          "titulo": "Falta de etiquetado e identificación de contenido",
          "observacion": "No se observan etiquetas, pictogramas ni leyendas visibles en los tambores que permitan identificar la sustancia almacenada ni sus peligros.",
          "severidad": "alta",
          "caja": [
            30,
            60,
            950,
            930
          ],
          "busqueda": "Cada envase de sustancia peligrosa debe estar debidamente identificado con su nombre y los peligros asociados.",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 9",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 2)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "d) El personal que manipule las sustancias peligrosas deberá estar debidamente capacitado sobre los peligros y riesgos asociados a su manipulación.\n e) Las sustancias peligrosas deberán estar etiquetadas de acuerdo a lo establecido en el Título XII, del decreto supremo N° 43, de 2015, del Ministerio de Salud, con excepción de los plaguicidas que deberán ajustarse a la normativa específica para ellos.\n Los estanques de almacenamiento de combustibles líquidos deberán cumplir las exigencias dispuestas en el decreto supremo Nº 160, de 2008, del Ministerio de Economía, Fomento y Reconstrucción, que aprueba el Reglamento de Seguridad para las Instalaciones y Operaciones de Producción y Refinación, Transporte, Almacenamiento, Distribución y Abastecimiento de Combustibles Líquidos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ],
          "exigencia": "Las sustancias peligrosas deben estar contenidas en envases debidamente etiquetadas según el Título XII del DS 43.",
          "accion": "Etiquetar todos los tambores con pictogramas y leyendas que identifiquen la sustancia y sus peligros.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 33",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 33.- Cuando se superen las cantidades establecidas en el artículo 25, las sustancias peligrosas envasadas deberán almacenarse en una Bodega para Sustancias Peligrosas. Dichas bodegas deberán contar con pictogramas externos e internos, que indiquen las clases y divisiones de las sustancias almacenadas, de acuerdo a la NCh2190 Of.2003, oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones.\n   Los pictogramas ubicados en todos los muros externos de la bodega, deberán indicar las clases o divisiones de sustancias almacenadas en su interior, debiendo ser  visibles a una distancia de 10 m. Los pictogramas internos deberán ubicarse en cada una de las zonas de almacenamiento, de acuerdo a las clases y divisiones de las sustancias en ellas dispuestas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689310"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 188",
              "h": "TÍTULO XII DEL ETIQUETADO",
              "t": "Artículo 188.- En el caso que los envases que contienen sustancias o productos peligrosos importados no cumplan con las exigencias de etiquetado aquí dispuestas, se encuentren embalados y no se pretenda desembalarlos durante su almacenamiento, será responsabilidad del importador o distribuidores que los recuadros de seguridad estén disponibles en forma impresa y sean distribuidos en conjunto con las respectivas sustancias o productos a sus clientes. En el caso de productos que se exportan podrán exceptuarse de las exigencias del etiquetado, pero deberán ser almacenadas embaladas y sobre el embalaje contar con el pictograma de peligro establecido en la NCh 2190 Of.2003 oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689485"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 37",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 37: Deberá suprimirse en los lugares de trabajo cualquier factor de peligro que pueda afectar la salud o integridad física de los trabajadores.\n Todos los locales o lugares de trabajo deberán contar con vías de evacuación horizontales y/o verticales que, además de cumplir con las exigencias de la Ordenanza General de Urbanismo y Construcción, dispongan de salidas en número, capacidad y ubicación y con la identificación apropiada para permitir la segura, rápida y expedita salida de todos sus ocupantes hacia zonas de seguridad. Las puertas de salida no deberán abrirse en contra del sentido de evacuación y sus accesos deberán conservarse señalizados y libres de obstrucciones. Estas salidas podrán mantenerse entornadas, pero no cerradas con llave, candado u otro medio que impida su fácil apertura.\n Las dependencias de los establecimientos públicos o privados deberán contar con señalización visible y permanente en las zonas de peligro, indicando el agente y/o condición de riesgo, así como las vías de escape y zonas de seguridad ante emergencias.\n Además, deberá indicarse claramente por medio de señalización visible y permanente la necesidad de uso de elementos de protección personal específicos cuando sea necesario.\n Los símbolos y palabras que se utilicen en la señalización, deberán estar de acuerdo con la normativa nacional vigente, y a falta de ella con la que determinen las normas chilenas oficiales y aparecer en el idioma oficial del país y, en caso necesario cuando haya trabajadores de otro idioma, además en el de ellos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643121"
            }
          ]
        },
        {
          "titulo": "Apilamiento de tambores sobre pallets sin contención",
          "observacion": "Los tambores están apilados dos niveles sobre pallets de madera, sin bandeja de contención ni barrera que impida derrames al suelo en caso de fuga.",
          "severidad": "media",
          "caja": [
            30,
            430,
            950,
            960
          ],
          "busqueda": "El almacenamiento de sustancias peligrosas debe contar con sistema de contención de derrames o captación de líquidos.",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 52",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 52.- Las bodegas para sustancias peligrosas que contengan líquidos deberán tener un sistema de control de derrames, el que podrá consistir en:\n   . Bodega auto contenida, con piso de pendiente no inferior a 0,5% que permita el escurrimiento del derrame hacia una zona de acumulación o con contención perimetral a través de soleras y/o lomos de toro.\n . Sistema de recolección conectado a una cámara de contención estanca la que tendrá un volumen equivalente al 110% del envase de mayor capacidad, con un mínimo de 1,1 m3.\n   En el caso de almacenarse sustancias incompatibles, se deberá contar con sistemas de contención separados.\n   Adicionalmente, tanto las bodegas que almacenen líquidos como sólidos, deberán contar con agentes de absorción y/o neutralización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689329"
            }
          ],
          "exigencia": "Las bodegas para sustancias peligrosas que contengan líquidos deben tener un sistema de control de derrames, como piso con pendiente hacia zona de acumulación, contención perimetral o cámara estanca de 1,1 m3 mínimo, además de agentes de absorción y/o neutralización.",
          "accion": "Instalar sistema de contención de derrames bajo los tambores apilados y disponer de agentes de absorción o neutralización.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 122",
              "h": "TÍTULO IX ALMACENAMIENTO A GRANEL › PÁRRAFO II LÍQUIDOS A GRANEL",
              "t": "Artículo 122.- Los líquidos que se almacenen en estanque fijo superficial, deberán contar con un sistema de control de derrames, consistente en un depósito de contención estanco, que impida que el líquido se infiltre en el suelo, de capacidad equivalente a 1,1 veces el volumen del estanque. Cuando el depósito de contención sirva a dos o más estanques, su capacidad debe ser equivalente a 1,1 veces el volumen del estanque mayor, descontado el volumen que ocupa el resto de los estanques hasta la altura del pretil, siempre y cuando las sustancias almacenadas en todos los estanques sean compatibles entre sí. En el caso de sustancias incompatibles, se deberá disponer de depósitos de contención separados, cumpliendo las demás condiciones de este artículo.\n   En el caso que las bombas se encuentren ubicadas fuera de los depósitos de contención, éstas deberán contar con un sistema propio de contención.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689414"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 57",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 57.- Si las pilas están conformadas por pallets, con sustancias envasadas en sacos y cajas, tendrán una altura máxima de 3 m y de 4 m, cuando las sustancias estén en tambores, en contenedores IBC o maxisacos, y un largo y ancho tal que se cumplan las condiciones relativas a las puertas de escape establecidas en el artículo 38 de este reglamento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689334"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 110",
              "h": "TITULO IV De la Contaminación Ambiental › PARRAFO III De los Agentes Físicos › 10.- De la Hipobaria Intermitente Crónica por Gran Altitud",
              "t": "Artículo 110 b.9.- Los lugares de trabajo o faenas deben contar con una brigada de emergencia, cuyo número será determinado por la Administración de acuerdo con la extensión de las faenas y el número de trabajadores, a la cual le corresponderá actuar sólo en caso de emergencia para atender al accidentado hasta que obtenga atención profesional. Sus integrantes deben recibir instrucción en forma anual, de dos horas cronológicas de duración, en las siguientes materias:\n . Atención de accidentados, primeros auxilios, manejos básicos de politraumatizados y extricación.\n . Precauciones estándares en la atención de salud, como protección de patógenos en la sangre.\n . Conceptos básicos de alteraciones fisiológicas y patologías producidas y relacionadas a la altura.\n . Conceptos básicos de espacio confinado, fugas químicas, incendio y derrames.\n Estos trabajadores/as deberán actuar sólo en caso de emergencia para atender al accidentado hasta que éste reciba atención profesional.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=9311178"
            }
          ]
        },
        {
          "titulo": "Pallets en mal estado",
          "observacion": "Los pallets de madera bajo los tambores muestran desgaste, astillas y posible deterioro estructural, lo que podría afectar la estabilidad de la carga.",
          "severidad": "media",
          "caja": [
            30,
            430,
            950,
            960
          ],
          "busqueda": "Los soportes o pallets utilizados para almacenar envases deben ser adecuados y mantenerse en condiciones que garanticen la estabilidad de la carga.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ],
          "exigencia": "El almacenamiento de materiales debe realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.",
          "accion": "Retirar y reemplazar los pallets deteriorados, astillados o con posible falla estructural bajo los tambores.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 57",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 57.- Si las pilas están conformadas por pallets, con sustancias envasadas en sacos y cajas, tendrán una altura máxima de 3 m y de 4 m, cuando las sustancias estén en tambores, en contenedores IBC o maxisacos, y un largo y ancho tal que se cumplan las condiciones relativas a las puertas de escape establecidas en el artículo 38 de este reglamento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689334"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 9",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 26",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO II DE LAS BODEGAS COMUNES",
              "t": "Artículo 26.- Dentro de la bodega común, las sustancias tóxicas en envases menores a 25 kg o L y los de vidrio, deberán estar en estanterías de material no absorbente, liso y lavable, cerradas, con control de derrames y ventilación para evitar la acumulación de gases en su interior. Dicha estantería deberá contar con señalización que indique almacenamiento de sustancias tóxicas, de acuerdo a los rótulos de la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones. Se exceptúan de la exigencia de mantenerse en estanterías, aquellas sustancias o productos que se encuentren embalados sobre pallet y no se pretenda desembalarlos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689302"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 6",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 6°: Las paredes interiores de los lugares de trabajo, los cielos rasos, puertas y ventanas y demás elementos estructurales, serán mantenidos en buen estado de limpieza y conservación, y serán pintados, cuando el caso lo requiera, de acuerdo a la naturaleza de las labores que se ejecutan.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643083"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 7842
    }
  },
  {
    "img": "s/b3.jpg",
    "kind": "bodega",
    "credit": "Fuel drums, so pretty, who'd have thought?!! · LightStalking · CC BY 2.0",
    "link": "https://www.flickr.com/photos/45117421@N08/6758442387",
    "rep": {
      "tipo": "bodega",
      "resumen": "La zona muestra tambores metálicos apilados y deteriorados, con óxido, abolladuras y posibles residuos, sin señalización ni contención visible, lo que indica un almacenamiento inadecuado de sustancias peligrosas.",
      "corresponde": true,
      "cumple": [
        "Los tambores están ubicados en un área delimitada por una estructura de concreto.",
        "No se observan personas dentro de la zona de almacenamiento en la imagen.",
        "No hay llamas abiertas ni fuentes de ignición visibles junto a los tambores.",
        "Los envases están agrupados en un solo sector y no dispersos por el lugar."
      ],
      "no_evaluable": [
        "Identificación química exacta del contenido de cada tambor, ya que no hay etiquetas legibles.",
        "Capacidad real de contención del sistema, pues no se miden volúmenes ni dimensiones de retención.",
        "Ventilación natural o forzada del lugar, que requiere medición de renovación de aire.",
        "Distancias de seguridad respecto a límites de propiedad, edificios u otras zonas de trabajo, que requieren planos y medición en terreno.",
        "Existencia de plan de emergencia, equipos de extinción o kits de derrame, que no son visibles en la fotografía."
      ],
      "hallazgos": [
        {
          "titulo": "Tambores deteriorados y apilados sin orden",
          "observacion": "Se observan numerosos tambores metálicos apilados de forma desordenada, con óxido, abolladuras, tapas corroídas y posibles residuos de contenido, algunos apoyados directamente sobre una estructura de concreto.",
          "severidad": "alta",
          "caja": [
            0,
            0,
            1000,
            950
          ],
          "busqueda": "Los envases de sustancias peligrosas deben mantenerse en buen estado, sin corrosión ni daños que comprometan su integridad, y almacenarse de forma estable y ordenada.",
          "citas": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 9",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ],
          "exigencia": "Los envases de sustancias peligrosas deben impedir pérdidas de contenido, ser adecuados para su conservación, químicamente compatibles, de difícil ruptura y minimizar accidentes; el almacenamiento debe ser en lugares apropiados y seguros.",
          "accion": "Retirar o reemplazar los tambores deteriorados, oxidados, abollados y con tapas corroídas, y almacenarlos en envases íntegros, compatibles y en buen estado.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 102",
              "h": "TÍTULO VIII ALMACENAMIENTO DE SUSTANCIAS TÓXICAS, CORROSIVAS Y VARIAS EN ENVASES",
              "t": "Artículo 102.- Se encuentran regidas por las disposiciones de este título las sustancias peligrosas pertenecientes a las clases o divisiones 6.1, 8 y 9 de la NCh 382:2013.\n   Las bodegas donde se almacenan estas sustancias deberán cumplir las condiciones de almacenamiento establecidas en los títulos I y II de este reglamento, sin perjuicio de las normas especiales que para algunos tipos de bodegas se establecen en el presente título.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689390"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 105",
              "h": "TÍTULO VIII ALMACENAMIENTO DE SUSTANCIAS TÓXICAS, CORROSIVAS Y VARIAS EN ENVASES",
              "t": "Artículo 105.- Las bodegas de sustancias peligrosas que almacenen sustancias de la división 6.1, en las que exista fraccionamiento para uso en la propia empresa o por motivo de toma de muestra, se deberá asegurar que los envases abiertos que permanezcan en la bodega, queden adecuadamente cerrados y libres de producto en su exterior.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689393"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 65bis",
              "h": "TITULO IV De la Contaminación Ambiental › PARRAFO II De los Contaminantes Químicos",
              "t": "Artículo 65 bis: Prohíbase el uso de chorro de arena en seco como método de limpieza abrasiva.\n   Para efectos de esta prohibición, se entenderá por:\n \n a) Arena: Conjunto de partículas generadas por la disgregación natural de las rocas, que contienen sílice o cuarzo, provenientes de ríos, cantos rodados, minas o depósitos en el interior de tierra formando capas y playas, y que presentan forma angular y de color azul, gris o rosa.\n b) Sílice Libre Cristalizada o Sílice Cristalina:\nDióxido de silicios cristalizados (Si02), siendo las formas más comunes de encontrarse el cuarzo, además de la cristobalita y la tridimita, como compuestos derivados de procesos de altas temperaturas.\n c) Limpieza Abrasiva con Chorro de Arena: Proyección de arena a alta presión contra una determinada superficie, que puede ser metal, concreto, telas, vidrio u otra, con el objeto de pulir, limpiar, retirar óxidos o pinturas, desgaste de materiales, tallado, etc.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=9553861"
            }
          ]
        },
        {
          "titulo": "Ausencia de sistema de contención de derrames",
          "observacion": "No se ve bandeja de contención, tarima impermeable ni barrera física que impida que un eventual derrame de los tambores se esparza por el suelo de concreto.",
          "severidad": "alta",
          "caja": [
            0,
            720,
            1000,
            1000
          ],
          "busqueda": "Las zonas de almacenamiento de sustancias peligrosas deben contar con un sistema de contención de derrames capaz de retener el volumen almacenado.",
          "citas": [],
          "exigencia": "",
          "accion": "Instalar un sistema de contención de derrames para los tambores, como bandejas de contención, tarima impermeable o barrera física, y disponer de agentes de absorción y/o neutralización.",
          "confianza": "baja",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 52",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 52.- Las bodegas para sustancias peligrosas que contengan líquidos deberán tener un sistema de control de derrames, el que podrá consistir en:\n   . Bodega auto contenida, con piso de pendiente no inferior a 0,5% que permita el escurrimiento del derrame hacia una zona de acumulación o con contención perimetral a través de soleras y/o lomos de toro.\n . Sistema de recolección conectado a una cámara de contención estanca la que tendrá un volumen equivalente al 110% del envase de mayor capacidad, con un mínimo de 1,1 m3.\n   En el caso de almacenarse sustancias incompatibles, se deberá contar con sistemas de contención separados.\n   Adicionalmente, tanto las bodegas que almacenen líquidos como sólidos, deberán contar con agentes de absorción y/o neutralización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689329"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 21",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO I DEL ALMACENAMIENTO DE PEQUEÑAS CANTIDADES",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 122",
              "h": "TÍTULO IX ALMACENAMIENTO A GRANEL › PÁRRAFO II LÍQUIDOS A GRANEL",
              "t": "Artículo 122.- Los líquidos que se almacenen en estanque fijo superficial, deberán contar con un sistema de control de derrames, consistente en un depósito de contención estanco, que impida que el líquido se infiltre en el suelo, de capacidad equivalente a 1,1 veces el volumen del estanque. Cuando el depósito de contención sirva a dos o más estanques, su capacidad debe ser equivalente a 1,1 veces el volumen del estanque mayor, descontado el volumen que ocupa el resto de los estanques hasta la altura del pretil, siempre y cuando las sustancias almacenadas en todos los estanques sean compatibles entre sí. En el caso de sustancias incompatibles, se deberá disponer de depósitos de contención separados, cumpliendo las demás condiciones de este artículo.\n   En el caso que las bombas se encuentren ubicadas fuera de los depósitos de contención, éstas deberán contar con un sistema propio de contención.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689414"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 129",
              "h": "TITULO VII NORMAS ESPECIALES PARA ACTIVIDADES PRIMARIAS AGRICOLAS, PECUARIAS Y FORESTALES A CAMPO ABIERTO › 5.- De las Sustancias Peligrosas y Plaguicidas",
              "t": "Artículo 129.- En aquellas zonas de trabajo, abiertas o cerradas, donde se apliquen pesticidas o cualquier producto tóxico capaz de causar daño a la salud humana, se prohíbe la presencia de personas sin protección personal adecuada tanto durante el período de aplicación como en el tiempo que sigue a éste hasta que se haya cumplido el plazo de seguridad señalado en la etiqueta del envase del producto aplicado y, a falta de ello, del plazo fijado por la autoridad sanitaria de acuerdo con criterios técnicos y recomendaciones internacionales.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643248"
            }
          ]
        },
        {
          "titulo": "Falta de señalización de peligro",
          "observacion": "No se observan letreros, diamantes de peligro, pictogramas ni etiquetas que identifiquen los riesgos de los productos almacenados en los tambores.",
          "severidad": "alta",
          "caja": [
            0,
            0,
            1000,
            950
          ],
          "busqueda": "Los lugares donde se almacenan sustancias peligrosas deben estar señalizados con los pictogramas de peligro correspondientes a las clases de riesgo presentes.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 2)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "d) El personal que manipule las sustancias peligrosas deberá estar debidamente capacitado sobre los peligros y riesgos asociados a su manipulación.\n e) Las sustancias peligrosas deberán estar etiquetadas de acuerdo a lo establecido en el Título XII, del decreto supremo N° 43, de 2015, del Ministerio de Salud, con excepción de los plaguicidas que deberán ajustarse a la normativa específica para ellos.\n Los estanques de almacenamiento de combustibles líquidos deberán cumplir las exigencias dispuestas en el decreto supremo Nº 160, de 2008, del Ministerio de Economía, Fomento y Reconstrucción, que aprueba el Reglamento de Seguridad para las Instalaciones y Operaciones de Producción y Refinación, Transporte, Almacenamiento, Distribución y Abastecimiento de Combustibles Líquidos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ],
          "exigencia": "La zona de almacenamiento de sustancias peligrosas debe estar claramente señalizada y demarcada con el pictograma de las clases y divisiones, y las sustancias peligrosas deben estar etiquetadas según el Título XII del DS 43.",
          "accion": "Colocar señalización y pictogramas de peligro según NCh 2190 Of.2003 en la zona de almacenamiento y etiquetar cada tambor conforme al Título XII del DS 43.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 33",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 33.- Cuando se superen las cantidades establecidas en el artículo 25, las sustancias peligrosas envasadas deberán almacenarse en una Bodega para Sustancias Peligrosas. Dichas bodegas deberán contar con pictogramas externos e internos, que indiquen las clases y divisiones de las sustancias almacenadas, de acuerdo a la NCh2190 Of.2003, oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones.\n   Los pictogramas ubicados en todos los muros externos de la bodega, deberán indicar las clases o divisiones de sustancias almacenadas en su interior, debiendo ser  visibles a una distancia de 10 m. Los pictogramas internos deberán ubicarse en cada una de las zonas de almacenamiento, de acuerdo a las clases y divisiones de las sustancias en ellas dispuestas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689310"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 30",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO II DE LAS BODEGAS COMUNES",
              "t": "Artículo 30.- La zona destinada para el almacenamiento de las sustancias peligrosas deberá estar claramente señalizada y demarcada, adicionalmente, deberá contar con el pictograma que indique las clases y divisiones de las sustancias en ella almacenadas, de acuerdo a la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha\n23.04.2004, del Ministerio de Transporte y Telecomunicaciones.\n   Se deberá mantener una distancia de 2,4 m entre sustancias peligrosas incompatibles. Además, se deberá mantener una distancia de 1,2 m entre las sustancias peligrosas y otras sustancias o mercancías no peligrosas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689306"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 175",
              "h": "TÍTULO XI ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS EN LOCALES COMERCIALES",
              "t": "Artículo 175.- Cuando se almacenen más de 600 kg o L de sustancias peligrosas en locales comerciales, deberán exhibirse o almacenarse en las siguientes condiciones:\n   . Las sustancias peligrosas deberán exhibirse en góndolas o estanterías de material incombustible, liso y lavable. Los sectores donde se exhiban las sustancias, deberán estar señalizados de acuerdo a la NCh 2190 Of.\n2003, oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones.\n . Las góndolas o estanterías con sustancias peligrosas no podrán estar adyacentes a otras que contengan productos alimenticios, debiendo existir entre ellas pasillos que las separen.\n . El sector donde se exhiban o almacenen sustancias peligrosas líquidas deberá contar con un sistema de control de derrames, consistente en repisas auto contenidas y material absorbente. En el caso de almacenamiento a piso podrá habilitar sólo material absorbente.\n . La altura mínima de exhibición de sustancias tóxicas deberá ser de 1m medido desde el suelo.\n . Los productos o sustancias peligrosas deberán exhibirse en envases en buen estado.\n . Las sustancias deberán venderse en su envase original debidamente cerrado y etiquetado de acuerdo a lo establecido en el Título XII del presente reglamento.\n . Las sustancias o productos peligrosos almacenados en los niveles superiores de las estanterías, que no están al alcance del público, deben estar debidamente embalados para evitar caídas.\n   Adicionalmente, se deberá contar con las Hojas de Datos de Seguridad, en forma impresa o digital, de todas las sustancias o productos peligrosos almacenados o exhibidos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689471"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ]
        },
        {
          "titulo": "Almacenamiento al aire libre sin protección",
          "observacion": "Los tambores están expuestos directamente a la intemperie, bajo cielo abierto, lo que puede acelerar su deterioro y favorecer la liberación de vapores o derrames por lluvia.",
          "severidad": "media",
          "caja": [
            0,
            0,
            1000,
            950
          ],
          "busqueda": "Las sustancias peligrosas deben almacenarse bajo techo o en lugares protegidos de la intemperie, según sus características de riesgo.",
          "citas": [],
          "exigencia": "",
          "accion": "Trasladar los tambores a un lugar cerrado y adecuado, o si se mantiene al aire libre, asegurar piso impermeable, protección contra lluvia y viento, acceso controlado y rotulación de peligro.",
          "confianza": "baja",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 8",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 8.- Las sustancias peligrosas solamente podrán almacenarse en los lugares especiales que se señalan a continuación en el presente reglamento, de acuerdo con su cantidad, clase y división de peligrosidad, según la NCh382:2013. Este almacenaje podrá siempre efectuarse en instalaciones de almacenamiento de mayor exigencia pero en ningún caso en una de menor complejidad que las que les corresponda según estas disposiciones.\n   Las sustancias peligrosas que tengan como segunda clase o división de peligro, 2.1, 3 o 4, deberán almacenarse de acuerdo a las condiciones establecidas para dicha clase.\nPara las sustancias de la división 2.3, las cantidades deberán regirse por las establecidas para esta división.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689282"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 116",
              "h": "TÍTULO IX ALMACENAMIENTO A GRANEL › PÁRRAFO I SÓLIDOS A GRANEL",
              "t": "Artículo 116.- Para almacenar sólidos en pila al aire libre, se deberán acreditar las siguientes condiciones mínimas:\n   . La sustancia almacenada no se dispersará ni habrá emanaciones de gases, producto de la lluvia, viento u otra condición climática.\n . El almacenamiento no podrá estar en una zona residencial o mixta.\n . La zona de almacenamiento deberá tener acceso controlado.\n . El piso deberá ser impermeable y resistente a la sustancia almacenada.\n . La zona de almacenamiento deberá estar rotulada, indicando las clases y divisiones de las sustancias peligrosas almacenadas, de acuerdo a la NCh 2190 Of.2003 oficializada por decreto Nº 43 de fecha 23.04.2004 del Ministerio de Transporte y Telecomunicaciones, los que deben ser visibles a una distancia de 10 m.\n . La cantidad a apilar de la sustancia deberá considerar los riesgos para la salud humana, para los trabajadores expuestos a la sustancia, al medio ambiente y a las instalaciones circundantes. Para todo ello se deberá considerar, entre otros: la clase y división de peligro, las propiedades físicas de la sustancia a almacenar, la granulometría, ángulo de reposo y condiciones climáticas.\n . La distancia mínima entre pilas será de 2,4 m, cuando no exista una barrera física entre las pilas.\n . Análisis de consecuencia en caso de un accidente tecnológico que asegure que en el muro medianero o deslinde del sitio y que en las otras construcciones al interior del mismo sitio no se superen los límites establecidos en artículo 44 de este reglamento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689407"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 106",
              "h": "TÍTULO IX ALMACENAMIENTO A GRANEL › NORMAS GENERALES",
              "t": "Artículo 106.- Se rigen por este título las sustancias peligrosas que deban almacenarse a granel debido a condiciones de seguridad, logísticas o económicas cualquiera sea su estado de agregación (sólido, líquido o gas). Se consideran en este título los líquidos y gases en estanques y los sólidos en silos o pilas al aire libre o en bodegas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689396"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 10",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 10: En los trabajos que necesariamente deban ser realizados en locales descubiertos o en sitios a cielo abierto, deberán tomarse precauciones adecuadas que protejan a los trabajadores contra las inclemencias del tiempo.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643087"
            }
          ]
        },
        {
          "titulo": "Posible mezcla de sustancias sin segregación",
          "observacion": "Tambores de diferentes colores y estados están apilados juntos sin separación visible, lo que impide identificar si están segregados por clase de riesgo o compatibilidad.",
          "severidad": "media",
          "caja": [
            0,
            0,
            1000,
            950
          ],
          "busqueda": "Las sustancias peligrosas deben segregarse según su clase de riesgo y compatibilidad para evitar reacciones peligrosas en caso de derrame o incendio.",
          "citas": [],
          "exigencia": "",
          "accion": "Segregar los tambores por clase de riesgo y compatibilidad, manteniendo distancias de incompatibilidad y evitando el apilamiento mixto sin identificación.",
          "confianza": "baja",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 104",
              "h": "TÍTULO VIII ALMACENAMIENTO DE SUSTANCIAS TÓXICAS, CORROSIVAS Y VARIAS EN ENVASES",
              "t": "Artículo 104.- En el caso de sustancias de la clase\n6.1, 8 o 9 que presenten reacciones peligrosas con el agua, se deberá mantener alejado de fuentes de agua o productos a base de agua, además de respetar las distancias de incompatibilidad indicadas en los títulos precedentes.\nCuando existan sustancias líquidas, la bodega deberá estar diseñada con pendientes o sistemas de colección de derrames diferenciados, que permitan evitar la mezcla de estas sustancias en caso de derrame.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689392"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 2",
              "h": "TÍTULO I DISPOSICIONES GENERALES",
              "t": "Artículo 2°.- Se entenderá por sustancias peligrosas, o productos peligrosos, para efectos de la aplicación de este reglamento, aquellas que puedan significar un riesgo para la salud, la seguridad o el bienestar de los seres humanos y animales, siendo aquellas clasificadas en la Norma Chilena N° 382:2013, Sustancias Peligrosas - Clasificación (NCh 382:2013), correspondiendo a las siguientes:\n  Clase 1, sustancias explosivas.\nClase 2, gases.\nClase 3, líquidos inflamables.\nClase 4, sólidos inflamables; sustancias que pueden experimentar combustión espontánea, sustancias que, en contacto con el agua, desprenden gases inflamables.\nClase 5, sustancias comburentes y peróxidos orgánicos.\nClase 6, sustancias tóxicas y sustancias infecciosas.\nClase 7, sustancias radiactivas.\nClase 8, sustancias corrosivas.\nClase 9, sustancias y objetos peligrosos varios, incluidas las peligrosas para el medio ambiente.\n   Podrán eximirse del presente reglamento aquellas mezclas o sustancias que dada sus características, y de acuerdo a las metodologías y criterios de clasificación definidos en esta norma, no se consideren peligrosas. El interesado presentará los antecedentes que así lo acrediten ante el Ministerio de Salud, quien evaluará y se pronunciará al respecto.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689275"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 8",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 8.- Las sustancias peligrosas solamente podrán almacenarse en los lugares especiales que se señalan a continuación en el presente reglamento, de acuerdo con su cantidad, clase y división de peligrosidad, según la NCh382:2013. Este almacenaje podrá siempre efectuarse en instalaciones de almacenamiento de mayor exigencia pero en ningún caso en una de menor complejidad que las que les corresponda según estas disposiciones.\n   Las sustancias peligrosas que tengan como segunda clase o división de peligro, 2.1, 3 o 4, deberán almacenarse de acuerdo a las condiciones establecidas para dicha clase.\nPara las sustancias de la división 2.3, las cantidades deberán regirse por las establecidas para esta división.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689282"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 52",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO III De la Prevención y Protección contra Incendios",
              "t": "Artículo 52: En los lugares en que se almacenen o manipulen sustancias peligrosas, la autoridad sanitaria podrá exigir un sistema automático de detección de incendios.\n Además, en caso de existir alto riesgo potencial, dado el volumen o naturaleza de las sustancias, podrá exigir la instalación de un sistema automático de extinción de incendios, cuyo agente de extinción sea compatible con el riesgo a proteger.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643137"
            }
          ]
        },
        {
          "titulo": "Estructura de soporte con posible deterioro",
          "observacion": "El muro o plataforma de concreto donde descansan los tambores presenta grietas, descascarillado y manchas de óxido, lo que podría afectar su capacidad de soporte.",
          "severidad": "media",
          "caja": [
            0,
            720,
            1000,
            1000
          ],
          "busqueda": "Las estructuras de almacenamiento deben ser resistentes, estables y estar en condiciones que soporten el peso y las características de los envases.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ],
          "exigencia": "Las bodegas para sustancias peligrosas deben tener piso sólido resistente estructural y químicamente, liso, lavable e impermeable, y el almacenamiento de materiales debe realizarse en lugares apropiados y seguros para los trabajadores.",
          "accion": "Reparar o reforzar la estructura de concreto con grietas, descascarillado y manchas de óxido, verificando su capacidad de soporte antes de volver a apilar tambores.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 35",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS › PÁRRAFO III DE LAS BODEGAS PARA SUSTANCIAS PELIGROSAS",
              "t": "Artículo 35.- Las bodegas para sustancias peligrosas deberán ser cerradas en su perímetro por muros, resistentes a la acción del agua, con techumbre y piso sólido resistente estructural y químicamente, liso, lavable e impermeable y no poroso. Adicionalmente a las exigencias que se establecen en el presente reglamento, las bodegas deberán ajustarse a lo señalado en la OGUC, respecto a su diseño y características de construcción, considerando el estudio de carga combustible.\n   Sin perjuicio de lo que determine la OGUC, las bodegas de sustancias peligrosas no podrán construirse con un estándar menor al tipo C, según Art. 4.3.3 de dicha Ordenanza y, los muros perimetrales no soportantes no podrán tener una resistencia al fuego menor a 15 minutos.\n   Las bodegas que funcionen con ambientes controlados de temperatura y/o presión podrán exceptuarse de contar con techo con cubierta liviana, al igual que aquellas bodegas, en que se demuestre que hay un mejor control de riesgos, con otro tipo de cubierta.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689312"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 9",
              "h": "TÍTULO II DEL ALMACENAMIENTO DE SUSTANCIAS PELIGROSAS",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283"
            },
            {
              "norma": "DS 43",
              "ref": "DS 43 · art. 125",
              "h": "TÍTULO IX ALMACENAMIENTO A GRANEL › PÁRRAFO II LÍQUIDOS A GRANEL",
              "t": "Artículo 125.- Los estanques sobre superficie deberán descansar sobre fundaciones de concreto, albañilería o de acero y estar anclados. Las fundaciones deben ser diseñadas de manera tal que no se produzca corrosión o asentamiento disparejo del estanque. En caso de estanques existentes las fundaciones podrán ser de otro material que no sea concreto.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689417"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 65bis",
              "h": "TITULO IV De la Contaminación Ambiental › PARRAFO II De los Contaminantes Químicos",
              "t": "Artículo 65 bis: Prohíbase el uso de chorro de arena en seco como método de limpieza abrasiva.\n   Para efectos de esta prohibición, se entenderá por:\n \n a) Arena: Conjunto de partículas generadas por la disgregación natural de las rocas, que contienen sílice o cuarzo, provenientes de ríos, cantos rodados, minas o depósitos en el interior de tierra formando capas y playas, y que presentan forma angular y de color azul, gris o rosa.\n b) Sílice Libre Cristalizada o Sílice Cristalina:\nDióxido de silicios cristalizados (Si02), siendo las formas más comunes de encontrarse el cuarzo, además de la cristobalita y la tridimita, como compuestos derivados de procesos de altas temperaturas.\n c) Limpieza Abrasiva con Chorro de Arena: Proyección de arena a alta presión contra una determinada superficie, que puede ser metal, concreto, telas, vidrio u otra, con el objeto de pulir, limpiar, retirar óxidos o pinturas, desgaste de materiales, tallado, etc.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=9553861"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 14985
    }
  },
  {
    "img": "s/f1.jpg",
    "kind": "faena",
    "credit": "Textile Machine · darkday. · CC BY 2.0",
    "link": "https://www.flickr.com/photos/99649389@N02/14437232660",
    "rep": {
      "tipo": "faena",
      "resumen": "El área muestra maquinaria industrial antigua con partes móviles expuestas y pasillos obstruidos por residuos, lo que genera condiciones de riesgo visibles.",
      "corresponde": true,
      "cumple": [
        "El área cuenta con iluminación general que permite visualizar el entorno de trabajo.",
        "Existe espacio físico alrededor de la maquinaria para el desplazamiento de personas.",
        "La estructura de la máquina está anclada al suelo y no presenta movimiento inestable visible.",
        "No se observan personas realizando tareas en el momento de la captura."
      ],
      "no_evaluable": [
        "Distancia exacta entre partes móviles y protectores, requiere medición en terreno.",
        "Estado de los sistemas de parada de emergencia y su funcionamiento.",
        "Existencia y vigencia de instrucciones de trabajo seguras para la máquina.",
        "Condición de los sistemas eléctricos y conexión a tierra, requiere revisión técnica.",
        "Capacitación de los trabajadores sobre los riesgos de la maquinaria."
      ],
      "hallazgos": [
        {
          "titulo": "Partes móviles de máquina sin protección",
          "observacion": "Se observan poleas, engranajes, correas y ejes giratorios expuestos sin carenados ni protectores que impidan el contacto accidental.",
          "severidad": "alta",
          "caja": [
            80,
            50,
            990,
            900
          ],
          "busqueda": "Las partes móviles de las máquinas deben estar protegidas con carenados o protectores que impidan el acceso de las personas a zonas de peligro.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 389",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 38",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122"
            }
          ],
          "exigencia": "Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule.",
          "accion": "Instalar carenados o protectores fijos en poleas, engranajes, correas y ejes giratorios que impidan el contacto accidental.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 56",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 56.- Todo sistema de transmisión de movimientos deberá estar convenientemente protegido para evitar el contacto accidental con personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649750"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 57",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 57.- Las protecciones de seguridad deberán ser diseñadas y construidas de tal manera que impidan el acceso hasta la zona peligrosa de cualquier parte del cuerpo humano.\n Las protecciones deben identificarse a través de los respectivos códigos de colores según las normas nacionales o internacionales aceptadas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649751"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            }
          ]
        },
        {
          "titulo": "Pasillo y acceso obstruido por residuos",
          "observacion": "El suelo del área de trabajo está cubierto de telas, plásticos y escombros que reducen el espacio de tránsito y generan riesgo de tropiezos.",
          "severidad": "media",
          "caja": [
            0,
            700,
            1000,
            1000
          ],
          "busqueda": "Los pasillos y accesos de las áreas de trabajo deben mantenerse libres de obstáculos y materiales que dificulten el tránsito seguro.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 7",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ],
          "exigencia": "Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores.",
          "accion": "Retirar telas, plásticos y escombros del pasillo y acceso, manteniéndolos libres de obstáculos.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 376",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 376.- En la instalación y operación de equipos y máquinas-herramientas en las áreas de talleres, deberán considerarse los siguientes aspectos básicos:\n\na) Definición de áreas específicas de trabajo y pasillos de tránsito debidamente demarcados.\nb) Sistemas de ventilación, iluminación, ergonómicos y de control, de acuerdo a normas nacionales reconocidas y aprobadas.\nc) Instalación de defensas y protecciones de partes móviles susceptibles de generar accidentes.\nd) Instalación de dispositivos de bloqueo y parada de emergencia.\n e) Uso de elementos de protección personal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650108"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 58",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 58.- Las faenas mineras deberán disponer de medios expeditos y seguros, para el acceso y salida del personal desde cualquier parte de ellas. Estos deberán ser mantenidos en forma conveniente.\n Para facilitar la circulación, los caminos, senderos y labores deberán mantenerse en buenas condiciones y debidamente señalizadas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649752"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 37",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 37: Deberá suprimirse en los lugares de trabajo cualquier factor de peligro que pueda afectar la salud o integridad física de los trabajadores.\n Todos los locales o lugares de trabajo deberán contar con vías de evacuación horizontales y/o verticales que, además de cumplir con las exigencias de la Ordenanza General de Urbanismo y Construcción, dispongan de salidas en número, capacidad y ubicación y con la identificación apropiada para permitir la segura, rápida y expedita salida de todos sus ocupantes hacia zonas de seguridad. Las puertas de salida no deberán abrirse en contra del sentido de evacuación y sus accesos deberán conservarse señalizados y libres de obstrucciones. Estas salidas podrán mantenerse entornadas, pero no cerradas con llave, candado u otro medio que impida su fácil apertura.\n Las dependencias de los establecimientos públicos o privados deberán contar con señalización visible y permanente en las zonas de peligro, indicando el agente y/o condición de riesgo, así como las vías de escape y zonas de seguridad ante emergencias.\n Además, deberá indicarse claramente por medio de señalización visible y permanente la necesidad de uso de elementos de protección personal específicos cuando sea necesario.\n Los símbolos y palabras que se utilicen en la señalización, deberán estar de acuerdo con la normativa nacional vigente, y a falta de ella con la que determinen las normas chilenas oficiales y aparecer en el idioma oficial del país y, en caso necesario cuando haya trabajadores de otro idioma, además en el de ellos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643121"
            }
          ]
        },
        {
          "titulo": "Acumulación de materiales inflamables cerca de equipos",
          "observacion": "Existen grandes cantidades de telas y plásticos acumulados junto a maquinaria en funcionamiento, lo que representa una carga de incendio.",
          "severidad": "alta",
          "caja": [
            0,
            50,
            300,
            800
          ],
          "busqueda": "Los materiales combustibles deben almacenarse alejados de fuentes de ignición y equipos que generen calor o chispas.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 44",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO III De la Prevención y Protección contra Incendios",
              "t": "Artículo 44: En todo lugar de trabajo deberán implementarse las medidas necesarias para la prevención de incendios con el fin de disminuir la posibilidad de inicio de un fuego, controlando las cargas combustibles y las fuentes de calor e inspeccionando las instalaciones a través de un programa preestablecido.\n El control de los productos combustibles deberá incluir medidas tales como programas de orden y limpieza y racionalización de la cantidad de materiales combustibles, tanto almacenados como en proceso.   El control de las fuentes de calor deberá adoptarse en todos aquellos lugares o procesos donde se cuente con equipos e instalaciones eléctricas, maquinarias que puedan originar fricción, chispas mecánicas o de combustión y/o superficies calientes, cuidando que su diseño, ubicación, estado y condiciones de operación, esté de acuerdo a la reglamentación vigente sobre la materia.   En áreas donde exista una gran cantidad de productos combustibles o donde se almacenen, trasvasijen o procesen sustancias inflamables o de fácil combustión, deberá establecerse una estricta prohibición de fumar y encender fuegos, debiendo existir procedimientos específicos de seguridad para la realización de labores de soldadura, corte de metales o similares.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643128"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ],
          "exigencia": "En todo lugar de trabajo deberán implementarse las medidas necesarias para la prevención de incendios, controlando las cargas combustibles y las fuentes de calor.",
          "accion": "Retirar o reubicar las telas y plásticos acumulados junto a la maquinaria en funcionamiento y aplicar un programa de orden y limpieza.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 324",
              "h": "TITULO VII PROCESAMIENTO DE SUSTANCIAS MINERALES › Capítulo Primero Plantas de Tratamiento de Minerales",
              "t": "Artículo 324.- Los productos inflamables y combustibles deben ser almacenados en bodegas, recintos o estanques dispuestos para tal objetivo, de acuerdo a normas nacionales vigentes, debiendo observarse, además, las siguientes medidas:\n\na) Toda bodega o recinto de almacenamiento de productos inflamables debe construirse de materiales incombustibles con una resistencia mínima al fuego de dos horas (2hrs.).\nb) Su ubicación debe quedar a no menos de quince metros (15 mt.) del edificio más próximo.\nc) Disponer de sistemas de ventilación que aseguren la no formación y acumulación de mezclas inflamables o explosivas.\nd) Mantener control permanente del almacenamiento y despacho de productos, a través de personal instruido para ello.\n\n El almacenamiento y distribución de combustibles derivados del petróleo, se hará de acuerdo a las disposiciones vigentes del Ministerio de Transportes y Telecomunicaciones.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650048"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 663",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo quinto      Servicios para la minería › Párrafo 1.      Normas seguridad sobre electricidad y combustibles",
              "t": "Artículo 663.- Los lugares con productos inflamables y combustibles deben estar provistos con señaléticas de advertencia, deben contar con equipo de extinción de incendio y la prohibición de fumar; además, deben ser construidos o encontrarse ubicados en un lugar distante de la entrada de la mina. Los lugares destinados a reabastecer de combustible a las máquinas diésel, deberán ubicarse fuera de la mina subterránea.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313370"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 199",
              "h": "TITULO III EXPLOTACION DE MINAS SUBTERRANEAS › Capítulo Octavo Prevención y Control de Incendios",
              "t": "Artículo 199.- Los brocales y accesos a la mina, se deberán mantener limpios de toda acumulación de desechos o materiales combustibles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649905"
            }
          ]
        },
        {
          "titulo": "Máquina con componentes sueltos y deteriorados",
          "observacion": "Se observan piezas de tela o fibra enrolladas en ejes y resortes, así como elementos oxidados y con desgaste visible en la estructura de la máquina.",
          "severidad": "media",
          "caja": [
            250,
            150,
            850,
            600
          ],
          "busqueda": "Los equipos de trabajo deben mantenerse en condiciones operativas seguras, sin componentes sueltos, deteriorados o que puedan desprenderse.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 36",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119"
            }
          ],
          "exigencia": "Todos los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
          "accion": "Retirar las piezas de tela o fibra enrolladas en ejes y resortes, y reparar o reemplazar los elementos oxidados y desgastados de la estructura de la máquina.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 41",
              "h": "TITULO II NORMAS GENERALES › Capítulo Segundo De las Obligaciones de los Trabajadores",
              "t": "Artículo 41.- Se prohíbe a los trabajadores, cuya labor se ejecuta cerca de maquinarias en movimiento y/o sistemas de transmisión descubiertos, el uso de elementos sueltos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649734"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 387",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 387.- Los equipos de oxicorte deben poseer manómetros en buenas condiciones de uso, tanto para medir la presión de los cilindros como la presión de trabajo y estar provistos de válvulas cortallamas.\n Los cilindros y demás elementos de dichos equipos deben mantenerse a resguardo en un sitio seguro, estar limpios de aceite o grasa y alejados de toda fuente de calor.\n Dichos cilindros deben ir montados sobre carros, cuando se deban mover de un lugar de trabajo a otro. Al almacenarlos, manipularlos o transportarlos se deberá mantener éstos con la cápsula protectora de las válvulas.\n Cuando se use el equipo deberá cuidarse que el metal fundido no caiga sobre las mangueras de éste o sobre otros materiales combustibles y en la operación se debe tener un extintor a mano.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650120"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 517",
              "h": "TITULO XI GENERALIDADES DE EXPLOSIVOS EN LA MINERIA › Capítulo Segundo Manipulación de Explosivos",
              "t": "Artículo 517.- Los equipos y herramientas utilizados en el carguío, tronaduras y disparos se deben guardar en lugares fuera de polvorines y mantenerse en buenas condiciones de trabajo.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650259"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 18792
    }
  },
  {
    "img": "s/f2.jpg",
    "kind": "faena",
    "credit": "Factory Floor · Augapfel · CC BY 2.0",
    "link": "https://www.flickr.com/photos/47038415@N00/3287974828",
    "rep": {
      "tipo": "faena",
      "resumen": "El área muestra maquinaria en funcionamiento con pasillos y accesos visibles, pero presenta protección incompleta de partes móviles y ausencia de señalización de seguridad en equipos.",
      "corresponde": true,
      "cumple": [
        "Pasillos principales con ancho suficiente para el tránsito de personas",
        "Piso en buen estado, sin grietas ni desniveles evidentes en las zonas de tránsito",
        "Iluminación general del área mediante luminarias en el techo",
        "Señal informativa visible en columna con datos del equipo"
      ],
      "no_evaluable": [
        "Distancia mínima de seguridad entre equipos y paredes",
        "Niveles de ruido en el área de trabajo",
        "Estado de mantenimiento y funcionamiento de los sistemas de emergencia",
        "Capacidad de carga de estructuras y plataformas",
        "Existencia y vigencia de instrucciones de trabajo seguras para los equipos"
      ],
      "hallazgos": [
        {
          "titulo": "Protección incompleta de correa y poleas",
          "observacion": "La correa transportadora inclinada y sus poleas de transmisión están expuestas sin carenado ni protección física que impida el contacto accidental.",
          "severidad": "alta",
          "caja": [
            490,
            440,
            780,
            760
          ],
          "busqueda": "Las partes móviles de máquinas y equipos deben estar protegidas con carenados o guardas que impidan el acceso de personas a zonas de peligro.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 638",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo cuarto      Normas de diseño y operaciones en minería › Párrafo 3.      Operación y tránsito de equipos, vehículos y personas",
              "t": "Artículo 638.- Todo sistema de transmisión de movimiento o correa transportadora deberá estar equipada con parada de emergencia y/o cable de seguridad, instalada a lo largo de la correa, que permita su inmediata detención en caso de emergencia. Además:\n   a. Los sistemas de transmisión mecánico deben contar con protección que impida el contacto con las personas.\n b. Donde se utilicen correas transportadoras en una faena minera, se debe mantener y aplicar procedimientos para la operación, mantención e inspección del sistema.\n c. En el sistema de transmisión mecánico, el tambor motriz y el tambor de cola deberán encontrarse protegidos  d. Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y el sistema de energización bloqueado.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313332"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 389",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122"
            }
          ],
          "exigencia": "Todo sistema de transmisión de movimiento o correa transportadora debe contar con protección que impida el contacto con las personas, protegiendo tambor motriz y tambor de cola.",
          "accion": "Instalar carenado o protección física sobre la correa inclinada y sus poleas de transmisión que impida el contacto accidental.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 38",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 390",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 390.- Las máquinas accionadas por correa, a las cuales sea necesario detener o poner en marcha sin interferir con el funcionamiento del motor (polea loca), estarán acondicionadas en forma permanente con un dispositivo mecánico adecuado para tal efecto.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650123"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            }
          ]
        },
        {
          "titulo": "Eje de transmisión expuesto",
          "observacion": "Un eje rotativo con poleas en la zona central del taller carece de protección física alrededor.",
          "severidad": "alta",
          "caja": [
            380,
            470,
            560,
            620
          ],
          "busqueda": "Los ejes, poleas y engranajes expuestos deben contar con protección que evite el contacto de trabajadores con partes en movimiento.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 56",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 56.- Todo sistema de transmisión de movimientos deberá estar convenientemente protegido para evitar el contacto accidental con personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649750"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 389",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122"
            }
          ],
          "exigencia": "Todo sistema de transmisión de movimientos deberá estar convenientemente protegido para evitar el contacto accidental con personas.",
          "accion": "Instalar protección física alrededor del eje rotativo con poleas en la zona central del taller.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 41",
              "h": "TITULO II NORMAS GENERALES › Capítulo Segundo De las Obligaciones de los Trabajadores",
              "t": "Artículo 41.- Se prohíbe a los trabajadores, cuya labor se ejecuta cerca de maquinarias en movimiento y/o sistemas de transmisión descubiertos, el uso de elementos sueltos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649734"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 38",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122"
            }
          ]
        },
        {
          "titulo": "Ausencia de señalización de seguridad en equipos",
          "observacion": "No se observan letreros de advertencia, prohibición o obligación en las máquinas ni en los pasillos de acceso al área.",
          "severidad": "media",
          "caja": [
            0,
            0,
            1000,
            1000
          ],
          "busqueda": "Los equipos, zonas de riesgo y pasillos deben estar señalizados con letreros visibles que adviertan sobre peligros e indiquen medidas de protección.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 609 (parte 3)",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo tercero      Normas Generales › Párrafo 1.      Obligaciones de las empresas",
              "t": "Extracción de material de caserones o similares, de acuerdo a lo señalado en el artículo 657 de este reglamento.\n   Estos registros deberán estar en la faena y disponibles para el Servicio, debiendo actualizarse permanentemente.\n e. Proporcionar a sus trabajadores, en forma gratuita, los elementos de protección personal (EPP) certificados y adecuados a la función que cada uno de ellos desempeñe.\n f. Implementar protecciones y señaléticas de advertencias de seguridad en instalaciones y equipos, de tal manera que impidan el acceso o contacto de los trabajadores a lugares o a elementos peligrosos, tales como sectores con riesgo de caída a distinto nivel, lugares energizados, entre otros.\n g. Suspender las operaciones en las áreas que presenten riesgos no controlados a la seguridad e integridad de los trabajadores, señalizar e instalar barreras duras para impedir el acceso a ellas.\n h. Disponer de medios expeditos y seguros para el acceso y salida del personal hacia y desde cualquier parte de la faena minera y sus instalaciones. Para estos efectos, los caminos deberán mantenerse en buenas condiciones e incorporar señalización mínima de seguridad vial.\n i. Mantener y actualizar los planos de la mina, los cuales no deben tener una vigencia que exceda de seis meses desde la última actualización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313293"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 404",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 404.- Los avisos de advertencia e instrucciones destinados a restringir y advertir al personal respecto de los riesgos presentes, las limitaciones de acceso a recintos energizados y las restricciones para la intervención de sistemas deberán ser instalados en lugares destacados.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650139"
            }
          ],
          "exigencia": "Implementar protecciones y señaléticas de advertencias de seguridad en instalaciones y equipos, e instalar avisos de advertencia e instrucciones en lugares destacados respecto de los riesgos presentes.",
          "accion": "Colocar letreros de advertencia, prohibición y obligación en máquinas y pasillos de acceso al área.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 37",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 37: Deberá suprimirse en los lugares de trabajo cualquier factor de peligro que pueda afectar la salud o integridad física de los trabajadores.\n Todos los locales o lugares de trabajo deberán contar con vías de evacuación horizontales y/o verticales que, además de cumplir con las exigencias de la Ordenanza General de Urbanismo y Construcción, dispongan de salidas en número, capacidad y ubicación y con la identificación apropiada para permitir la segura, rápida y expedita salida de todos sus ocupantes hacia zonas de seguridad. Las puertas de salida no deberán abrirse en contra del sentido de evacuación y sus accesos deberán conservarse señalizados y libres de obstrucciones. Estas salidas podrán mantenerse entornadas, pero no cerradas con llave, candado u otro medio que impida su fácil apertura.\n Las dependencias de los establecimientos públicos o privados deberán contar con señalización visible y permanente en las zonas de peligro, indicando el agente y/o condición de riesgo, así como las vías de escape y zonas de seguridad ante emergencias.\n Además, deberá indicarse claramente por medio de señalización visible y permanente la necesidad de uso de elementos de protección personal específicos cuando sea necesario.\n Los símbolos y palabras que se utilicen en la señalización, deberán estar de acuerdo con la normativa nacional vigente, y a falta de ella con la que determinen las normas chilenas oficiales y aparecer en el idioma oficial del país y, en caso necesario cuando haya trabajadores de otro idioma, además en el de ellos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643121"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 376",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 376.- En la instalación y operación de equipos y máquinas-herramientas en las áreas de talleres, deberán considerarse los siguientes aspectos básicos:\n\na) Definición de áreas específicas de trabajo y pasillos de tránsito debidamente demarcados.\nb) Sistemas de ventilación, iluminación, ergonómicos y de control, de acuerdo a normas nacionales reconocidas y aprobadas.\nc) Instalación de defensas y protecciones de partes móviles susceptibles de generar accidentes.\nd) Instalación de dispositivos de bloqueo y parada de emergencia.\n e) Uso de elementos de protección personal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650108"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ]
        },
        {
          "titulo": "Pasillo con obstrucciones y materiales acumulados",
          "observacion": "En el sector derecho del pasillo hay materiales y componentes sueltos que reducen el espacio de tránsito y pueden generar tropiezos.",
          "severidad": "media",
          "caja": [
            700,
            550,
            1000,
            900
          ],
          "busqueda": "Los pasillos y accesos deben mantenerse despejados, libres de obstáculos y materiales que dificulten el tránsito seguro de personas.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 7",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ],
          "exigencia": "Los pisos y pasillos de tránsito se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, y los pasillos serán lo suficientemente amplios para permitir el movimiento seguro sin exponerlos a accidentes.",
          "accion": "Retirar los materiales y componentes sueltos del sector derecho del pasillo para liberar el espacio de tránsito y evitar tropiezos.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 48",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 48.- Los senderos en altura para tránsito de personas deberán llevar barandas o cables de acero u otro material resistente, afianzados a las rocas de las cajas, pilares u otro lugar seguro.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649742"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 58",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 58.- Las faenas mineras deberán disponer de medios expeditos y seguros, para el acceso y salida del personal desde cualquier parte de ellas. Estos deberán ser mantenidos en forma conveniente.\n Para facilitar la circulación, los caminos, senderos y labores deberán mantenerse en buenas condiciones y debidamente señalizadas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649752"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 337",
              "h": "TITULO VII PROCESAMIENTO DE SUSTANCIAS MINERALES › Capítulo Tercero Plantas de Extracción por Solventes y Refinación por Electro-Obtención",
              "t": "Artículo 337.- En las naves de celdas electrolíticas se deberá asegurar un nivel de iluminación que permita el libre tránsito de personas en su interior y una ventilación, ya sea natural o forzada, que no permita concentraciones de acidez en la zona de tránsito y de operaciones, por sobre la norma establecida.\n Todos aquellos elementos estructurales y de apoyo como pasillos, estructuras, grúas, cables y otros componentes, deberán estar sujetos a estrictas normas de mantención y control.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650063"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 8654
    }
  },
  {
    "img": "s/f3.jpg",
    "kind": "faena",
    "credit": "Abandoned Conveyor Belt · darkday. · CC BY 2.0",
    "link": "https://www.flickr.com/photos/99649389@N02/16562118085",
    "rep": {
      "tipo": "faena",
      "resumen": "El área muestra una persona caminando sobre una estructura de correas transportadoras en un taller o planta, con pasillos y accesos visibles, pero con condiciones de orden y limpieza deficientes y exposición a partes móviles sin protección evidente.",
      "corresponde": true,
      "cumple": [
        "Existe iluminación artificial en el techo del área de trabajo.",
        "Se identifican estructuras metálicas de soporte y pasillos definidos junto a los equipos.",
        "Las paredes y divisiones del recinto se encuentran en condiciones estructurales visibles sin deterioro crítico aparente.",
        "Se observan elementos de señalización o marcación en postes y estructuras del área."
      ],
      "no_evaluable": [
        "Estado de funcionamiento y protección de las partes móviles de las correas transportadoras.",
        "Existencia y vigencia de capacitaciones e instrucciones a los trabajadores.",
        "Condiciones de ventilación, temperatura y calidad del aire en el área.",
        "Existencia de procedimientos de bloqueo y etiquetado (lockout/tagout) para los equipos.",
        "Distancias de seguridad entre equipos, pasillos y zonas de peligro según requerimientos técnicos."
      ],
      "hallazgos": [
        {
          "titulo": "Persona sobre estructura de correas",
          "observacion": "Una persona camina directamente sobre las correas transportadoras y sus estructuras metálicas, en lugar de usar un pasillo o acceso seguro separado.",
          "severidad": "alta",
          "caja": [
            380,
            100,
            515,
            520
          ],
          "busqueda": "Los trabajadores deben transitar por pasillos o accesos seguros y no sobre estructuras de máquinas en movimiento o partes móviles de equipos.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ],
          "exigencia": "Los pasillos de circulación deben permitir el movimiento seguro del personal sin exponerlo a accidentes.",
          "accion": "Prohibir caminar sobre las correas y estructuras; usar pasillo o acceso seguro separado.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 115",
              "h": "TITULO III EXPLOTACION DE MINAS SUBTERRANEAS › Capítulo Segundo Equipos de Transporte en Interior Mina",
              "t": "Artículo 115.- Toda correa transportadora deberá estar equipada con elementos efectivos de seguridad, instalados a todo lo largo de la correa, que permitan una inmediata detención de ella, en caso de emergencia.\n Deberán mantenerse protegidas todas las partes en movimiento, y se realizarán revisiones periódicas de las instalaciones y uniones de la correa.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649815"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 389",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 391",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 391.- Ninguna persona montará o desmontará una correa de transmisión de una máquina durante el período en que ésta se encuentre en operación.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650124"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            }
          ]
        },
        {
          "titulo": "Acumulación de residuos sobre correas",
          "observacion": "Se observan restos blancos y otros desechos acumulados sobre las superficies de las correas transportadoras y en los bordes de la estructura.",
          "severidad": "media",
          "caja": [
            0,
            480,
            1000,
            1000
          ],
          "busqueda": "Las áreas de trabajo y los equipos deben mantenerse libres de residuos, materiales sueltos y elementos que puedan generar riesgos de tropezón, deslizamiento o contacto con partes móviles.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 304",
              "h": "TITULO V EXPLOTACION MINERIA DEL CARBON › Capítulo Quinto Prevención y Control de Incendios y Explosiones",
              "t": "Artículo 304.- Las correas transportadoras deben instalarse a la distancia necesaria de las cajas y del piso, a fin de que se pueda recoger sin peligro el carbón derramado y a la vez se puedan inspeccionar cómodamente todos los elementos móviles.\n El material de construcción de las correas transportadoras debe ser incombustible o resistente al fuego. Sus partes mecánicas deben estar siempre engrasadas y los rodillos deben hallarse constantemente libres de polvo de carbón y de toda obstrucción que pueda provocar fricción. Respecto de estas correas deben adoptarse todas las medidas razonables para prevenir la acumulación de polvo de carbón en, o alrededor de sus partes en movimiento donde la fricción pudiere causar calentamiento.\n Las correas transportadoras deberán ser inspeccionadas periódicamente a intervalos cortos cuando estén en funcionamiento; a intervalos regulares, por lo menos durante dos horas después de paradas o después de cualquier avería de funcionamiento; y, a horas apropiadas, en los días en que no funcionen.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650024"
            }
          ],
          "exigencia": "Las correas transportadoras deben instalarse a la distancia necesaria del piso para recoger sin peligro el material derramado e inspeccionar los elementos móviles, y sus partes mecánicas deben estar libres de obstrucciones.",
          "accion": "Retirar los residuos acumulados sobre las correas y bordes de la estructura y mantenerlas limpias.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 376",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 376.- En la instalación y operación de equipos y máquinas-herramientas en las áreas de talleres, deberán considerarse los siguientes aspectos básicos:\n\na) Definición de áreas específicas de trabajo y pasillos de tránsito debidamente demarcados.\nb) Sistemas de ventilación, iluminación, ergonómicos y de control, de acuerdo a normas nacionales reconocidas y aprobadas.\nc) Instalación de defensas y protecciones de partes móviles susceptibles de generar accidentes.\nd) Instalación de dispositivos de bloqueo y parada de emergencia.\n e) Uso de elementos de protección personal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650108"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 41",
              "h": "TITULO II NORMAS GENERALES › Capítulo Segundo De las Obligaciones de los Trabajadores",
              "t": "Artículo 41.- Se prohíbe a los trabajadores, cuya labor se ejecuta cerca de maquinarias en movimiento y/o sistemas de transmisión descubiertos, el uso de elementos sueltos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649734"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 38",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122"
            }
          ]
        },
        {
          "titulo": "EPP incompleto",
          "observacion": "La persona visible no usa casco de seguridad, calzado de protección ni otros elementos de protección personal evidentes mientras se encuentra en un área con equipos y estructuras industriales.",
          "severidad": "alta",
          "caja": [
            380,
            100,
            515,
            520
          ],
          "busqueda": "Toda persona que ingrese a áreas de faena, planta o taller debe usar el equipo de protección personal correspondiente a los riesgos del lugar, incluido casco y calzado de seguridad.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 53",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO IV De los Equipos de Protección Personal",
              "t": "Artículo 53.- El empleador deberá proporcionar a sus trabajadores, libres de todo costo y cualquiera sea la función que éstos desempeñen en la empresa, los elementos de protección personal que cumplan con los requisitos, características y tipos que exige el riesgo a cubrir y la capacitación teórica y práctica necesaria para su correcto empleo debiendo, además, mantenerlos en perfecto estado de funcionamiento. Por su parte el trabajador deberá usarlos en forma permanente mientras se encuentre expuesto al riesgo.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643138"
            }
          ],
          "exigencia": "El empleador debe proporcionar gratuitamente los elementos de protección personal adecuados al riesgo y el trabajador debe usarlos permanentemente mientras esté expuesto al riesgo.",
          "accion": "Entregar y exigir el uso permanente de casco, calzado de protección y demás EPP adecuados al área industrial.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 609 (parte 3)",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo tercero      Normas Generales › Párrafo 1.      Obligaciones de las empresas",
              "t": "Extracción de material de caserones o similares, de acuerdo a lo señalado en el artículo 657 de este reglamento.\n   Estos registros deberán estar en la faena y disponibles para el Servicio, debiendo actualizarse permanentemente.\n e. Proporcionar a sus trabajadores, en forma gratuita, los elementos de protección personal (EPP) certificados y adecuados a la función que cada uno de ellos desempeñe.\n f. Implementar protecciones y señaléticas de advertencias de seguridad en instalaciones y equipos, de tal manera que impidan el acceso o contacto de los trabajadores a lugares o a elementos peligrosos, tales como sectores con riesgo de caída a distinto nivel, lugares energizados, entre otros.\n g. Suspender las operaciones en las áreas que presenten riesgos no controlados a la seguridad e integridad de los trabajadores, señalizar e instalar barreras duras para impedir el acceso a ellas.\n h. Disponer de medios expeditos y seguros para el acceso y salida del personal hacia y desde cualquier parte de la faena minera y sus instalaciones. Para estos efectos, los caminos deberán mantenerse en buenas condiciones e incorporar señalización mínima de seguridad vial.\n i. Mantener y actualizar los planos de la mina, los cuales no deben tener una vigencia que exceda de seis meses desde la última actualización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313293"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 376",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 376.- En la instalación y operación de equipos y máquinas-herramientas en las áreas de talleres, deberán considerarse los siguientes aspectos básicos:\n\na) Definición de áreas específicas de trabajo y pasillos de tránsito debidamente demarcados.\nb) Sistemas de ventilación, iluminación, ergonómicos y de control, de acuerdo a normas nacionales reconocidas y aprobadas.\nc) Instalación de defensas y protecciones de partes móviles susceptibles de generar accidentes.\nd) Instalación de dispositivos de bloqueo y parada de emergencia.\n e) Uso de elementos de protección personal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650108"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 319",
              "h": "TITULO VII PROCESAMIENTO DE SUSTANCIAS MINERALES › Capítulo Primero Plantas de Tratamiento de Minerales",
              "t": "Artículo 319.- Sólo se permitirá el ingreso de personal a las tolvas de almacenamiento o un chancador, cuando se tomen las siguientes precauciones:\n\na) Que las personas que se introduzcan estén provistas de casco y de cinturón de seguridad con cable;\nb) Que un Supervisor vigile la operación;\nc) Que mientras se encuentre personal dentro de la tolva, se suspenda la carga o descarga de material en o desde ella, colocando para ese efecto señales de advertencia y barreras efectivas que prevengan el peligro y eviten el vaciado;\nd) Se prevenga la caída de material de los bordes o paredes de la tolva sobre el trabajador; y\ne) Se verifique que no existen gases nocivos en concentraciones peligrosas ni deficiencia de oxígeno.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650043"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 54",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO IV De los Equipos de Protección Personal",
              "t": "Artículo 54.- Los elementos de protección personal usados en los lugares de trabajo, sean éstos de procedencia nacional o extranjera, deberán cumplir con las normas y exigencias de calidad que rijan a tales artículos según su naturaleza, de conformidad a lo establecido en el decreto Nº 18, de 1982, del Ministerio de Salud, sobre Certificación de Calidad de Elementos de Protección Personal contra Riesgos Ocupacionales. Sin embargo, si no fuese posible aplicar dicho procedimiento, por la inexistencia de entidades certificadoras, el Instituto de Salud Pública de Chile podrá, transitoriamente, validar la certificación de origen.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643140"
            }
          ]
        },
        {
          "titulo": "Pasillo con obstrucciones y desorden",
          "observacion": "El área de tránsito junto a las correas presenta materiales, restos y estructuras que reducen el espacio libre y dificultan el desplazamiento seguro.",
          "severidad": "media",
          "caja": [
            0,
            480,
            400,
            780
          ],
          "busqueda": "Los pasillos y accesos deben mantenerse despejados, con ancho suficiente y libres de obstrucciones que impidan el tránsito seguro de las personas.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 7",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084"
            }
          ],
          "exigencia": "Los pisos y pasillos de tránsito se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores.",
          "accion": "Retirar materiales, restos y estructuras que obstruyan el pasillo junto a las correas y restaurar el espacio libre de tránsito.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 337",
              "h": "TITULO VII PROCESAMIENTO DE SUSTANCIAS MINERALES › Capítulo Tercero Plantas de Extracción por Solventes y Refinación por Electro-Obtención",
              "t": "Artículo 337.- En las naves de celdas electrolíticas se deberá asegurar un nivel de iluminación que permita el libre tránsito de personas en su interior y una ventilación, ya sea natural o forzada, que no permita concentraciones de acidez en la zona de tránsito y de operaciones, por sobre la norma establecida.\n Todos aquellos elementos estructurales y de apoyo como pasillos, estructuras, grúas, cables y otros componentes, deberán estar sujetos a estrictas normas de mantención y control.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650063"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 48",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 48.- Los senderos en altura para tránsito de personas deberán llevar barandas o cables de acero u otro material resistente, afianzados a las rocas de las cajas, pilares u otro lugar seguro.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649742"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 58",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 58.- Las faenas mineras deberán disponer de medios expeditos y seguros, para el acceso y salida del personal desde cualquier parte de ellas. Estos deberán ser mantenidos en forma conveniente.\n Para facilitar la circulación, los caminos, senderos y labores deberán mantenerse en buenas condiciones y debidamente señalizadas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649752"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 29801
    }
  },
  {
    "img": "s/f4.jpg",
    "kind": "faena",
    "credit": "Photo · kvanhorn · CC BY 2.0",
    "link": "https://www.flickr.com/photos/8503402@N08/36854218130",
    "rep": {
      "tipo": "faena",
      "resumen": "El área de trabajo muestra pasillos y accesos obstruidos por equipos, materiales y cables en el suelo, lo que genera riesgos de tropiezos y dificulta el tránsito seguro.",
      "corresponde": true,
      "cumple": [
        "Iluminación general encendida en el área de trabajo",
        "Existen bancadas y estantes para apoyar herramientas y materiales",
        "El piso es de material firme y continuo sin hoyos visibles",
        "Hay espacio físico para el tránsito, aunque parcialmente obstruido"
      ],
      "no_evaluable": [
        "Distancia mínima entre equipos y pasillos según requerimiento normativo",
        "Resistencia y anclaje de estantes y repisas",
        "Estado de mantención y protección de máquinas y correas",
        "Existencia y vigencia de instrucciones de trabajo o procedimientos",
        "Señalización de seguridad en el área"
      ],
      "hallazgos": [
        {
          "titulo": "Pasillo obstruido por equipos y materiales",
          "observacion": "En el centro del pasillo hay una aspiradora industrial, un ventilador, un balde rojo, cajas y tablones que reducen el ancho de tránsito.",
          "severidad": "alta",
          "caja": [
            20,
            540,
            930,
            950
          ],
          "busqueda": "Los pasillos y accesos deben mantenerse libres de obstáculos que impidan el tránsito seguro de las personas.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 7",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ],
          "exigencia": "Los pasillos de tránsito se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores.",
          "accion": "Retirar la aspiradora, ventilador, balde, cajas y tablones del pasillo para liberar el tránsito.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 48",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 48.- Los senderos en altura para tránsito de personas deberán llevar barandas o cables de acero u otro material resistente, afianzados a las rocas de las cajas, pilares u otro lugar seguro.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649742"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 58",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 58.- Las faenas mineras deberán disponer de medios expeditos y seguros, para el acceso y salida del personal desde cualquier parte de ellas. Estos deberán ser mantenidos en forma conveniente.\n Para facilitar la circulación, los caminos, senderos y labores deberán mantenerse en buenas condiciones y debidamente señalizadas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649752"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 609 (parte 3)",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo tercero      Normas Generales › Párrafo 1.      Obligaciones de las empresas",
              "t": "Extracción de material de caserones o similares, de acuerdo a lo señalado en el artículo 657 de este reglamento.\n   Estos registros deberán estar en la faena y disponibles para el Servicio, debiendo actualizarse permanentemente.\n e. Proporcionar a sus trabajadores, en forma gratuita, los elementos de protección personal (EPP) certificados y adecuados a la función que cada uno de ellos desempeñe.\n f. Implementar protecciones y señaléticas de advertencias de seguridad en instalaciones y equipos, de tal manera que impidan el acceso o contacto de los trabajadores a lugares o a elementos peligrosos, tales como sectores con riesgo de caída a distinto nivel, lugares energizados, entre otros.\n g. Suspender las operaciones en las áreas que presenten riesgos no controlados a la seguridad e integridad de los trabajadores, señalizar e instalar barreras duras para impedir el acceso a ellas.\n h. Disponer de medios expeditos y seguros para el acceso y salida del personal hacia y desde cualquier parte de la faena minera y sus instalaciones. Para estos efectos, los caminos deberán mantenerse en buenas condiciones e incorporar señalización mínima de seguridad vial.\n i. Mantener y actualizar los planos de la mina, los cuales no deben tener una vigencia que exceda de seis meses desde la última actualización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313293"
            }
          ]
        },
        {
          "titulo": "Cables eléctricos extendidos sobre el suelo de tránsito",
          "observacion": "Varios cables negros y rojos cruzan el pasillo y están tendidos sobre el piso donde circula el personal.",
          "severidad": "alta",
          "caja": [
            480,
            720,
            900,
            930
          ],
          "busqueda": "Los cables eléctricos no deben tenderse sobre zonas de tránsito de personas de manera que generen riesgo de tropiezo o contacto.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 225",
              "h": "TITULO III EXPLOTACION DE MINAS SUBTERRANEAS › Capítulo Décimo Sistemas Eléctricos",
              "t": "Artículo 225.- Las canalizaciones que cruzan áreas de tránsito deben estar a lo menos a dos metros diez centímetros (2,10 m) sobre el nivel del piso, o deben ser instaladas bajo tierra.\n Todas las redes eléctricas que deban pasar bajo tierra deben quedar debidamente protegidas y señalizadas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649933"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 7",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084"
            }
          ],
          "exigencia": "Las canalizaciones que cruzan áreas de tránsito deben estar a lo menos a 2,10 m sobre el nivel del piso, o instaladas bajo tierra; los pasillos se mantendrán libres de obstáculos que impidan un fácil y seguro desplazamiento.",
          "accion": "Elevar los cables eléctricos a 2,10 m o pasarlos bajo tierra, y retirarlos del suelo de tránsito.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 428",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 428.- Se deberán adoptar las medidas para evitar todo contacto accidental de personas con elementos energizados de una instalación o equipo cuya tensión sea superior a cincuenta (50) volts. Se deben aplicar medidas tales como:\n\na) Disponer en las instalaciones de espacios necesarios para ejecutar las tareas.\nb) Los terminales de conductores, deberán poseer sus sistemas de aislación y protección aprobados.\nc) En las instalaciones de toda faena minera, los sistemas eléctricos, deberán diseñarse e instalarse de tal forma de evitar todo contacto de cables energizados con tendidos de cañerías, rieles u otros elementos metálicos, como asimismo con eventuales focos de agua.\nd) La instalación de cables para los sistemas de comunicación o tendidos de otra naturaleza, deberán diseñarse e instalarse de tal forma que no exista posibilidad alguna de que estos entren en contacto con cables eléctricos energizados o que puedan recibir algún tipo de inducción de corriente.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650163"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 46",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 46.- Por motivo alguno deberá permitirse el tránsito de personal debajo de lugares con riesgo de caídas de cargas, herramientas, materiales o líquidos que puedan causar daños a la integridad física de las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649740"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ]
        },
        {
          "titulo": "Materiales apilados de forma inestable junto a equipos",
          "observacion": "Tablones y paneles de madera están apoyados de forma inclinada junto a maquinaria y bancos de trabajo, sin sujeción visible.",
          "severidad": "media",
          "caja": [
            540,
            360,
            630,
            620
          ],
          "busqueda": "Los materiales almacenados deben estar apilados de forma estable y segura para evitar caídas sobre personas o equipos.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 36",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119"
            }
          ],
          "exigencia": "Las herramientas y equipos se mantendrán en condiciones seguras para evitar daño a las personas.",
          "accion": "Sujetar o estabilizar los tablones y paneles de madera apilados junto a la maquinaria para evitar su caída o vuelco.",
          "confianza": "media",
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 639",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo cuarto      Normas de diseño y operaciones en minería › Párrafo 3.      Operación y tránsito de equipos, vehículos y personas",
              "t": "Artículo 639.- Cada vez que, por estrictas razones de operación, el personal deba transitar o trabajar sobre material de relleno en caserones, piques, tolvas u otros, se deberán implementar las medidas de seguridad pertinentes para evitar que las personas sean succionadas por un eventual hundimiento del piso, tales como: cuerda de vida, plataformas, tapados o pasarelas con sujeción independiente del material de relleno.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313334"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 170",
              "h": "TITULO III EXPLOTACION DE MINAS SUBTERRANEAS › CAPITULO SEPTIMO Equipos de Izamiento",
              "t": "Artículo 170.- Todos los equipos y accesorios utilizados para el transporte vertical o inclinado de personas, deben ser diseñados e instalados sobre la base de criterios técnicos y por personal competente, de modo de garantizar la plena seguridad y eficiencia de los sistemas.\n En su operación se deberán adoptar todas las medidas de seguridad tendientes a evitar la caída de las personas que son transportadas o que éstas puedan ser afectadas por rocas u objetos que caigan a los piques.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649874"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 389",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 44",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO III De la Prevención y Protección contra Incendios",
              "t": "Artículo 44: En todo lugar de trabajo deberán implementarse las medidas necesarias para la prevención de incendios con el fin de disminuir la posibilidad de inicio de un fuego, controlando las cargas combustibles y las fuentes de calor e inspeccionando las instalaciones a través de un programa preestablecido.\n El control de los productos combustibles deberá incluir medidas tales como programas de orden y limpieza y racionalización de la cantidad de materiales combustibles, tanto almacenados como en proceso.   El control de las fuentes de calor deberá adoptarse en todos aquellos lugares o procesos donde se cuente con equipos e instalaciones eléctricas, maquinarias que puedan originar fricción, chispas mecánicas o de combustión y/o superficies calientes, cuidando que su diseño, ubicación, estado y condiciones de operación, esté de acuerdo a la reglamentación vigente sobre la materia.   En áreas donde exista una gran cantidad de productos combustibles o donde se almacenen, trasvasijen o procesen sustancias inflamables o de fácil combustión, deberá establecerse una estricta prohibición de fumar y encender fuegos, debiendo existir procedimientos específicos de seguridad para la realización de labores de soldadura, corte de metales o similares.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643128"
            }
          ]
        },
        {
          "titulo": "Equipos y herramientas sobre bancada sin orden",
          "observacion": "Sobre la bancada derecha se ven herramientas, piezas y cajas acumuladas sin orden, cerca del borde de la superficie.",
          "severidad": "baja",
          "caja": [
            620,
            380,
            850,
            480
          ],
          "busqueda": "Las herramientas y elementos de trabajo deben mantenerse ordenados en los puestos de trabajo para evitar caídas y golpes.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 11",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 11: Los lugares de trabajo deberán mantenerse en buenas condiciones de orden y limpieza.\nAdemás, deberán tomarse medidas efectivas para evitar la entrada o eliminar la presencia de insectos, roedores y otras plagas de interés sanitario.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643088"
            }
          ],
          "exigencia": "Los lugares de trabajo deberán mantenerse en buenas condiciones de orden y limpieza.",
          "accion": "Ordenar herramientas, piezas y cajas sobre la bancada, retirándolas del borde y acumulándolas de forma estable.",
          "confianza": "alta",
          "revisados": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 36",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 517",
              "h": "TITULO XI GENERALIDADES DE EXPLOSIVOS EN LA MINERIA › Capítulo Segundo Manipulación de Explosivos",
              "t": "Artículo 517.- Los equipos y herramientas utilizados en el carguío, tronaduras y disparos se deben guardar en lugares fuera de polvorines y mantenerse en buenas condiciones de trabajo.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650259"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 387",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 387.- Los equipos de oxicorte deben poseer manómetros en buenas condiciones de uso, tanto para medir la presión de los cilindros como la presión de trabajo y estar provistos de válvulas cortallamas.\n Los cilindros y demás elementos de dichos equipos deben mantenerse a resguardo en un sitio seguro, estar limpios de aceite o grasa y alejados de toda fuente de calor.\n Dichos cilindros deben ir montados sobre carros, cuando se deban mover de un lugar de trabajo a otro. Al almacenarlos, manipularlos o transportarlos se deberá mantener éstos con la cápsula protectora de las válvulas.\n Cuando se use el equipo deberá cuidarse que el metal fundido no caiga sobre las mangueras de éste o sobre otros materiales combustibles y en la operación se debe tener un extintor a mano.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650120"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 376",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 376.- En la instalación y operación de equipos y máquinas-herramientas en las áreas de talleres, deberán considerarse los siguientes aspectos básicos:\n\na) Definición de áreas específicas de trabajo y pasillos de tránsito debidamente demarcados.\nb) Sistemas de ventilación, iluminación, ergonómicos y de control, de acuerdo a normas nacionales reconocidas y aprobadas.\nc) Instalación de defensas y protecciones de partes móviles susceptibles de generar accidentes.\nd) Instalación de dispositivos de bloqueo y parada de emergencia.\n e) Uso de elementos de protección personal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650108"
            }
          ]
        }
      ],
      "modelos": [
        "nemotron-3.5-super-vl-120b-a12b",
        "nemotron-3.5-super-vl-120b-a12b"
      ],
      "ms": 12791
    }
  }
];
