// Ejemplos de demostración: imagen, crédito y licencia de cada caso.
const SAMPLES = [
  {
    "img": "s/m1.jpg",
    "title": "Medidor en poste, Lonquimay",
    "credit": "Medidor eléctrico en Lonquimay · Carlos Reusser · CC0 1.0",
    "link": "https://www.flickr.com/photos/26984243@N07/31142840895",
    "rep": {
      "etapas": {
        "identificar": 19505,
        "confirmar": 2054,
        "revisar": 8658
      },
      "razonado": false,
      "ident": {
        "categoria": "medidor_empalme",
        "subtipo": "individual, aéreo",
        "entorno": "vivienda",
        "descripcion": "Medidor de energía de la distribuidora instalado en caja blanca sobre poste de madera, con conexión aérea.",
        "evidencia": [
          "caja blanca con visor de lectura de medidor",
          "instalada sobre poste de madera",
          "cable negro que sube desde el medidor hacia la línea aérea",
          "bornera inferior con cable de salida",
          "etiqueta visible en el visor del medidor"
        ],
        "alternativas": [
          {
            "categoria": "tablero",
            "por_que_no": "no hay automáticos, diferenciales ni fusibles de reparto, solo el medidor"
          },
          {
            "categoria": "canalizacion",
            "por_que_no": "no se ven ductos, bandejas ni cajas de paso, solo conducto de conexión al medidor"
          }
        ],
        "confianza": 0.95,
        "caja_clave": [
          305,
          140,
          500,
          700
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "visor o mica con display de energía (kWh) o disco giratorio",
            "visto": "si",
            "detalle": "visor rectangular con mica y lectura tipo display/disco visible"
          },
          {
            "t": "caja de empalme con visor, individual o en un banco de cajas, no un gabinete con varios interruptores",
            "visto": "si",
            "detalle": "caja individual de empalme montada en poste, no gabinete de interruptores"
          },
          {
            "t": "acometida que llega desde la red de distribución (poste o subterránea)",
            "visto": "no_claro",
            "detalle": "se ve cable negro entrando, pero no se confirma si es acometida desde poste o subterránea"
          },
          {
            "t": "sello o precinto de la distribuidora",
            "visto": "no",
            "detalle": "no se aprecia sello o precinto de la distribuidora"
          },
          {
            "t": "protección o limitador del empalme",
            "visto": "no_claro",
            "detalle": "no se identifica claramente protección o limitador del empalme"
          }
        ],
        "vistos": 2,
        "ok": true
      },
      "categoria": "medidor_empalme",
      "nombre": "Medidor y empalme",
      "familia": "electrico",
      "subtipo": "individual, aéreo",
      "entorno": "vivienda",
      "fuera": [
        "M9",
        "M10"
      ],
      "resumen": "El medidor está montado en poste de madera junto a una vivienda, con vegetación rodeando el equipo y sin señal visible de sello de la distribuidora. La lectura desde el exterior es posible y no se observan daños evidentes en el aislamiento ni conexiones ajenas entre el medidor y el primer tablero.",
      "puntos": [
        {
          "id": "M1",
          "texto": "La unidad de medida se puede leer desde el exterior: visor limpio, sin opacidad ni obstrucción",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°1 · 7.1, 7.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=4",
              "t": "7.1 La unidad de medida del empalme se ubicará en una posición tal que permita una fácil y expedita lectura, su control y eventuales trabajos de reparación o mantenimiento. Por su parte, las acometidas, sean aéreas o subterráneas, en ningún caso podrán atravesar propiedades vecinas, con excepción de aquellas en las que exista servidumbre de paso.\n7.2 Para construcciones habitacionales unifamiliares u otro tipo de recintos, conectados a través de un empalme único, la unidad de medida de éste deberá ubicarse en la fachada principal de la vivienda, con vista frontal desde la vía pública de acceso, permitiendo una fácil lectura desde el exterior de la propiedad e impidiéndose su manipulación por terceros, y dentro de un semicírculo de radio no superior a 15 m, con centro en la puerta de acceso desde la vía pública al punto de medición. Ver anexo 1.1"
            }
          ],
          "actua": "distribuidora",
          "estado": "cumple",
          "observacion": "El visor del medidor es visible desde el exterior, con cubierta transparente y sin opacidad que impida la lectura.",
          "caja": [
            520,
            240,
            730,
            440
          ]
        },
        {
          "id": "M2",
          "texto": "Caja de empalme íntegra: sin roturas, perforaciones ni tapa forzada",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°1 · 6.5",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=3",
              "t": "6.5 Todas las cajas de empalme tendrán una resistencia mecánica mínima IK 09 y deberán cumplir"
            }
          ],
          "actua": "cliente y distribuidora",
          "estado": "cumple",
          "observacion": "La caja del medidor se ve íntegra, sin roturas, perforaciones ni tapa forzada.",
          "caja": [
            260,
            140,
            780,
            880
          ]
        },
        {
          "id": "M3",
          "texto": "Mica y caja expuestas al sol sin degradación visible (amarillamiento, fisuras, opacidad)",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°1 · 6.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=3",
              "t": "6.3 Las cajas de empalme, sus micas y las canalizaciones no metálicas que queden expuestos a los rayos solares deberán tener protección UV adecuadas al ambiente donde se instalarán."
            }
          ],
          "actua": "cliente y distribuidora",
          "estado": "no_se_ve",
          "observacion": "No se puede determinar con certeza si hay degradación por exposición solar (amarillamiento, fisuras u opacidad) por la resolución y el ángulo de la foto.",
          "caja": []
        },
        {
          "id": "M4",
          "texto": "Sello o precinto de la distribuidora presente en el equipo de medida",
          "sev": "media",
          "refs": [
            {
              "ref": "Estándar de empalmes de la distribuidora",
              "url": "",
              "t": "El RIC N°1 punto 5.1 acepta los estándares constructivos de cada distribuidora, publicados en su web. El sello del equipo de medida lo pone y lo retira la distribuidora."
            }
          ],
          "actua": "distribuidora",
          "estado": "no_se_ve",
          "observacion": "No se observa sello o precinto de la distribuidora en el equipo de medida en ninguna de las dos imágenes.",
          "caja": []
        },
        {
          "id": "M5",
          "texto": "Ubicación accesible para lectura y mantenimiento: fachada, poste junto al cierre o nicho, sin vegetación u objetos que lo tapen",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°1 · 7.1, 7.3, 7.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=4",
              "t": "7.1 La unidad de medida del empalme se ubicará en una posición tal que permita una fácil y expedita lectura, su control y eventuales trabajos de reparación o mantenimiento. Por su parte, las acometidas, sean aéreas o subterráneas, en ningún caso podrán atravesar propiedades vecinas, con excepción de aquellas en las que exista servidumbre de paso.\n7.3 Las unidades de medida se montarán en la fachada exterior de la edificación sí ésta queda dentro de la zona delimitada; en caso contrario, se ubicarán en un punto próximo a la línea de cierre, cumpliendo la exigencia establecida, y se montarán en una estructura construida o instalada exclusivamente para este propósito. Ver anexo 1.1\n7.4 En zonas rurales y situaciones similares, en que las condiciones de terreno y las dimensiones de los predios no posibilitan el cumplimiento estricto de las disposiciones precedentes, se deberá determinar la u"
            }
          ],
          "actua": "cliente",
          "estado": "cumple",
          "observacion": "El equipo está en fachada/poste accesible, aunque hay vegetación alrededor que no tapa completamente el medidor ni impide el acceso para lectura y mantenimiento.",
          "caja": [
            0,
            0,
            1000,
            1000
          ]
        },
        {
          "id": "M6",
          "texto": "Sin conexiones ni derivaciones ajenas entre la red, el medidor y el primer tablero (cables añadidos, empalmes improvisados)",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°1 · 7.19",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=7",
              "t": "7.19 Está prohibido realizar derivaciones desde el alimentador o conductores que conectan el empalme con el primer tablero de la instalación."
            }
          ],
          "actua": "cliente",
          "estado": "cumple",
          "observacion": "No se observan conexiones ni derivaciones ajenas entre la red, el medidor y el primer tablero; los conductores visibles parecen ser los originales de la acometida.",
          "caja": [
            140,
            250,
            330,
            950
          ]
        },
        {
          "id": "M7",
          "texto": "Alimentador hacia el primer tablero canalizado en ducto, sin conductores expuestos",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°1 · 7.15",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=7",
              "t": "7.15 Para cualquier tipo de empalme, en el caso de utilizar ductos para canalizar los alimentadores destinados a unir el equipo de medida con el primer tablero de la instalación, el diámetro del ducto deberá permitir ampliar la sección de los conductores inicialmente instalados en un 100% y en ningún caso este ducto podrá ser inferior a 32 mm de diámetro."
            }
          ],
          "actua": "cliente",
          "estado": "no_se_ve",
          "observacion": "No se ve el alimentador hacia el primer tablero ni su canalización en ducto, por lo que no se puede confirmar si hay conductores expuestos.",
          "caja": []
        },
        {
          "id": "M8",
          "texto": "Acometida, conectores y conductores sin daño del aislamiento ni señales de calentamiento",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°1 · 6.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=3",
              "t": "6.2 El material del conector o terminal debe garantizar que los cambios de temperatura provocados por el ambiente o por el paso de la corriente, no ocasione puntos calientes, arcos eléctricos o falsas conexiones y garantizar la compatibilidad de los materiales empleados en la conexión."
            }
          ],
          "actua": "distribuidora",
          "estado": "cumple",
          "observacion": "La acometida, conectores y conductores visibles no muestran daño del aislamiento ni señales de calentamiento.",
          "caja": [
            140,
            250,
            330,
            950
          ]
        }
      ],
      "otros": [],
      "no_foto": [
        "Capacidad del empalme frente a la potencia declarada (RIC N°1 · 5.3)",
        "Curva y poder de corte del limitador (RIC N°1 · 8.1–8.2)",
        "Distancia a la puerta de acceso, semicírculo de 15 m (RIC N°1 · 7.2)",
        "Comunicación de energización inscrita en la SEC (RIC N°1 · 5.2)",
        "Acometida que no atraviese propiedades vecinas (RIC N°1 · 7.1)"
      ],
      "ms": 30349
    }
  },
  {
    "img": "s/m2.jpg",
    "title": "Banco de medidores",
    "credit": "medidores · gabofr · CC BY 2.0",
    "link": "https://www.flickr.com/photos/46096359@N00/5409725158",
    "rep": {
      "etapas": {
        "identificar": 11834,
        "confirmar": 8737,
        "revisar": 12606
      },
      "razonado": false,
      "ident": {
        "categoria": "medidor_empalme",
        "subtipo": "concentrado, aéreo",
        "entorno": "faena_minera",
        "descripcion": "Banco de medidores de energía de la distribuidora instalados en una caja de empalme exterior, con varios equipos en fila y conexiones aéreas visibles.",
        "evidencia": [
          "Múltiples medidores con tapa transparente y disco de inducción visibles",
          "Caja metálica común que alberga varios medidores en fila",
          "Etiquetas y sellos típicos de medidores de distribuidora",
          "Cables de alimentación aérea conectados en la parte superior",
          "Interruptores de corte individuales debajo de cada medidor"
        ],
        "alternativas": [
          {
            "categoria": "tablero",
            "por_que_no": "No hay automáticos, diferenciales ni fusibles de reparto; los dispositivos son medidores de energía, no protecciones de circuito"
          },
          {
            "categoria": "sala_electrica",
            "por_que_no": "Es una instalación exterior en caja de empalme, no un recinto con varios tableros o celdas"
          },
          {
            "categoria": "canalizacion",
            "por_que_no": "No se ven ductos, bandejas ni cajas de paso como elemento principal"
          }
        ],
        "confianza": 0.95,
        "caja_clave": [
          0,
          80,
          1000,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "visor o mica con display de energía (kWh) o disco giratorio",
            "visto": "si",
            "detalle": "Se ven varios medidores con tapa transparente y disco/visor interno, típicos de medición de energía."
          },
          {
            "t": "caja de empalme con visor, individual o en un banco de cajas, no un gabinete con varios interruptores",
            "visto": "si",
            "detalle": "Es un banco de cajas de empalme/medidores montadas en una estructura común, no un gabinete de interruptores."
          },
          {
            "t": "acometida que llega desde la red de distribución (poste o subterránea)",
            "visto": "no_claro",
            "detalle": "No se aprecia la acometida desde poste o subterránea en este acercamiento."
          },
          {
            "t": "sello o precinto de la distribuidora",
            "visto": "no_claro",
            "detalle": "No se identifica claramente sello o precinto de la distribuidora en los medidores visibles."
          },
          {
            "t": "protección o limitador del empalme",
            "visto": "no",
            "detalle": "No se observa protección o limitador del empalme en la imagen."
          }
        ],
        "vistos": 2,
        "ok": true
      },
      "categoria": "medidor_empalme",
      "nombre": "Medidor y empalme",
      "familia": "electrico",
      "subtipo": "concentrado, aéreo",
      "entorno": "faena_minera",
      "fuera": [],
      "resumen": "Panel de medición concentrado con varios medidores y cajas de empalme en mal estado, con óxido, tapas faltantes y posible falta de sellos, lo que impide verificar condiciones de seguridad y operación.",
      "puntos": [
        {
          "id": "M1",
          "texto": "La unidad de medida se puede leer desde el exterior: visor limpio, sin opacidad ni obstrucción",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°1 · 7.1, 7.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=4",
              "t": "7.1 La unidad de medida del empalme se ubicará en una posición tal que permita una fácil y expedita lectura, su control y eventuales trabajos de reparación o mantenimiento. Por su parte, las acometidas, sean aéreas o subterráneas, en ningún caso podrán atravesar propiedades vecinas, con excepción de aquellas en las que exista servidumbre de paso.\n7.2 Para construcciones habitacionales unifamiliares u otro tipo de recintos, conectados a través de un empalme único, la unidad de medida de éste deberá ubicarse en la fachada principal de la vivienda, con vista frontal desde la vía pública de acceso, permitiendo una fácil lectura desde el exterior de la propiedad e impidiéndose su manipulación por terceros, y dentro de un semicírculo de radio no superior a 15 m, con centro en la puerta de acceso desde la vía pública al punto de medición. Ver anexo 1.1"
            }
          ],
          "actua": "distribuidora",
          "estado": "no_se_ve",
          "observacion": "Los visores están opacos y sucios, no se logra leer la unidad de medida desde el exterior; faltaría ver el visor limpio y sin obstrucción.",
          "caja": [
            0,
            80,
            1000,
            820
          ]
        },
        {
          "id": "M2",
          "texto": "Caja de empalme íntegra: sin roturas, perforaciones ni tapa forzada",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°1 · 6.5",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=3",
              "t": "6.5 Todas las cajas de empalme tendrán una resistencia mecánica mínima IK 09 y deberán cumplir"
            }
          ],
          "actua": "cliente y distribuidora",
          "estado": "no_cumple",
          "observacion": "Cajas de empalme con tapas faltantes, óxido severo y estructura deteriorada; no están íntegras.",
          "caja": [
            0,
            80,
            1000,
            820
          ],
          "verificado": true,
          "cerca": "La caja de empalme presenta roturas y perforaciones visibles en la estructura metálica, con oxidación y daños en la carcasa, lo que indica que no está íntegra."
        },
        {
          "id": "M3",
          "texto": "Mica y caja expuestas al sol sin degradación visible (amarillamiento, fisuras, opacidad)",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°1 · 6.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=3",
              "t": "6.3 Las cajas de empalme, sus micas y las canalizaciones no metálicas que queden expuestos a los rayos solares deberán tener protección UV adecuadas al ambiente donde se instalarán."
            }
          ],
          "actua": "cliente y distribuidora",
          "estado": "cumple",
          "observacion": "Las micas de los medidores se ven intactas, sin amarillamiento, fisuras ni opacidad visible. La caja metálica presenta óxido, pero el punto de revisión solo considera degradación de la mica y no menciona el estado de la pintura o corrosión de la caja.",
          "caja": [
            0,
            80,
            1000,
            820
          ],
          "verificado": true,
          "corregido": {
            "de": "no_cumple",
            "obs": "Micas y cajas expuestas al sol con opacidad, suciedad y posible degradación visible."
          }
        },
        {
          "id": "M4",
          "texto": "Sello o precinto de la distribuidora presente en el equipo de medida",
          "sev": "media",
          "refs": [
            {
              "ref": "Estándar de empalmes de la distribuidora",
              "url": "",
              "t": "El RIC N°1 punto 5.1 acepta los estándares constructivos de cada distribuidora, publicados en su web. El sello del equipo de medida lo pone y lo retira la distribuidora."
            }
          ],
          "actua": "distribuidora",
          "estado": "no_se_ve",
          "observacion": "No se aprecia sello o precinto de la distribuidora en los equipos de medida; faltaría ver el sello presente.",
          "caja": [
            0,
            80,
            1000,
            820
          ]
        },
        {
          "id": "M5",
          "texto": "Ubicación accesible para lectura y mantenimiento: fachada, poste junto al cierre o nicho, sin vegetación u objetos que lo tapen",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°1 · 7.1, 7.3, 7.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=4",
              "t": "7.1 La unidad de medida del empalme se ubicará en una posición tal que permita una fácil y expedita lectura, su control y eventuales trabajos de reparación o mantenimiento. Por su parte, las acometidas, sean aéreas o subterráneas, en ningún caso podrán atravesar propiedades vecinas, con excepción de aquellas en las que exista servidumbre de paso.\n7.3 Las unidades de medida se montarán en la fachada exterior de la edificación sí ésta queda dentro de la zona delimitada; en caso contrario, se ubicarán en un punto próximo a la línea de cierre, cumpliendo la exigencia establecida, y se montarán en una estructura construida o instalada exclusivamente para este propósito. Ver anexo 1.1\n7.4 En zonas rurales y situaciones similares, en que las condiciones de terreno y las dimensiones de los predios no posibilitan el cumplimiento estricto de las disposiciones precedentes, se deberá determinar la u"
            }
          ],
          "actua": "cliente",
          "estado": "no_se_ve",
          "observacion": "No se ve el entorno completo ni si hay vegetación u objetos que tapen el acceso; faltaría ver la ubicación respecto al piso y accesos.",
          "caja": []
        },
        {
          "id": "M6",
          "texto": "Sin conexiones ni derivaciones ajenas entre la red, el medidor y el primer tablero (cables añadidos, empalmes improvisados)",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°1 · 7.19",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=7",
              "t": "7.19 Está prohibido realizar derivaciones desde el alimentador o conductores que conectan el empalme con el primer tablero de la instalación."
            }
          ],
          "actua": "cliente",
          "estado": "no_se_ve",
          "observacion": "No se aprecia la alimentación hacia el primer tablero ni derivaciones ajenas; faltaría ver el trazo de conductores desde el medidor al tablero.",
          "caja": []
        },
        {
          "id": "M7",
          "texto": "Alimentador hacia el primer tablero canalizado en ducto, sin conductores expuestos",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°1 · 7.15",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=7",
              "t": "7.15 Para cualquier tipo de empalme, en el caso de utilizar ductos para canalizar los alimentadores destinados a unir el equipo de medida con el primer tablero de la instalación, el diámetro del ducto deberá permitir ampliar la sección de los conductores inicialmente instalados en un 100% y en ningún caso este ducto podrá ser inferior a 32 mm de diámetro."
            }
          ],
          "actua": "cliente",
          "estado": "no_se_ve",
          "observacion": "No se ve el ducto ni conductores hacia el primer tablero; faltaría ver la canalización del alimentador.",
          "caja": []
        },
        {
          "id": "M8",
          "texto": "Acometida, conectores y conductores sin daño del aislamiento ni señales de calentamiento",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°1 · 6.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=3",
              "t": "6.2 El material del conector o terminal debe garantizar que los cambios de temperatura provocados por el ambiente o por el paso de la corriente, no ocasione puntos calientes, arcos eléctricos o falsas conexiones y garantizar la compatibilidad de los materiales empleados en la conexión."
            }
          ],
          "actua": "distribuidora",
          "estado": "no_se_ve",
          "observacion": "No se aprecian conectores ni conductores de acometida con claridad para descartar daño o calentamiento; faltaría ver detalle de conexiones.",
          "caja": []
        },
        {
          "id": "M9",
          "texto": "Recinto de empalmes concentrados de uso exclusivo: sin bodega, basura, ni medidores de agua o gas",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°1 · 7.8.2, 7.16",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=5",
              "t": "7.8.2 Este recinto deberá ser destinado a este único propósito y nunca podrá alojarse con el de otros servicios tales como calderas, medidores de agua, gas, maquinaria de ascensores o de otros como almacén, cuarto de basuras, excepto lo indicado en el punto 7.16.\n7.16 Los recintos de empalmes eléctricos podrán utilizarse también para instalar en ellos los empalmes destinados a servicios de comunicaciones, los cuales deberán estar separados de los eléctricos por un panel divisorio de material no combustible, dispuesto de forma tal que no entorpezca el acceso ni la operación de ninguna de las instalaciones. En este recinto no podrán instalarse los empalmes o equipos de medida de otros servicios tales como agua potable o gas, así como tampoco podrá usarse este recinto como lugar de estadía de personal, bodega, ni como lugar de almacenamiento de ninguna especie."
            }
          ],
          "actua": "administración del edificio",
          "solo": {
            "subtipo": "concentrado"
          },
          "estado": "no_se_ve",
          "observacion": "No se ve el recinto completo para confirmar uso exclusivo ni presencia de basura u otros medidores; faltaría ver el entorno del panel.",
          "caja": []
        },
        {
          "id": "M10",
          "texto": "Cajas de empalmes concentrados entre 0,80 m y 2,10 m del piso terminado",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°1 · 7.8.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N01-Empalmes.pdf#page=5",
              "t": "7.8.4 Las cajas de empalme individuales dentro de los recintos de concentración de empalmes se ubicarán de modo tal que el borde inferior de ninguna de ellas quede a una altura inferior a 0,80 m, ni el borde superior de ninguna de ellas quede a una altura superior a 2,10 m, ambas cotas medidas respecto del nivel de piso terminado y tendrá una distancia mínima de sus paredes colindantes de 20 cm. También deberán tener una anchura mínima de paredes ocupadas por medidores de 1,50 m tendrá un espacio libre de 1,10 m mínimo desde la parte más saliente de las cajas de empalme hasta la pared opuesta y la puerta de acceso del recinto deberá abrir hacia el exterior y estar equipada con la cerradura. (Ver anexo 1.5)"
            }
          ],
          "actua": "administración del edificio",
          "solo": {
            "subtipo": "concentrado"
          },
          "estado": "no_se_ve",
          "observacion": "No se ve el piso terminado ni se puede medir la altura de las cajas; faltaría ver referencia de altura desde el piso.",
          "caja": []
        }
      ],
      "otros": [
        {
          "titulo": "Óxido severo en estructura del panel",
          "observacion": "El panel presenta corrosión avanzada en chapa y bordes, comprometiendo la integridad mecánica del recinto.",
          "severidad": "alta",
          "caja": [
            0,
            400,
            500,
            1000
          ],
          "busqueda": "Los recintos eléctricos deben mantenerse en buen estado estructural, sin corrosión que comprometa su resistencia o cierre.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 36",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119"
            }
          ],
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°4 · 5.9",
              "h": "Conductores, materiales y sistemas de canalización › Conceptos Generales",
              "t": "construcción estanca al polvo.\n5.20 Las uniones de las tuberías con las cajas a prueba de humedad, goteo, chorro, de agua, salpicaduras\no polvo deben efectuarse de modo que el conjunto conserve sus características de estanqueidad.\n5.21 Las cajas deben estar rígidamente fijas a la superficie sobre la cual van montadas. En general, para\ncanalizaciones ocultas o a la vista, las cajas deberán estar fijadas a alguna parte estructural de la\nconstrucción.\n5.22 Los conductores deberán quedar libremente accesibles dentro de la caja sólo retirando la tapa, y ésta\ndeberá poder retirarse sin necesidad de romper el enlucido de los muros, ni retirar ningún otro tipo de\ncubierta.\n5.23 Las dimensiones de las cajas de derivación serán tales que permitan alojar holgadamente todos los\nconductores que deban contener, dejando un volumen disponible del 25%.\n5.24 Las tuercas, contratuercas y boquillas utilizadas para fijar las tuberías o cables a las entradas de las\ncajas, deberán ser resistentes a la corrosión o estar protegidas contra ella, y tener la resistencia\nmecánica adecuada al uso que se les esté dando.\n5.25 Las uniones y derivaciones se aislarán convenientemente, debiendo recuperar a lo menos un nivel de\naislamiento equivalente al propio del conductor, utilizando para ello cintas aislantes, mufas de resinas\nepóxicas, cubiertas termoretráctiles o mecanoretráctiles u otros medios aprobados, según lo definido\nen los protocolos de análisis y/o ensayos de seguridad de productos eléctricos respectivos definidos por\nla Superintendencia.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N04-Conductores-y-Canalizaciones.pdf#page=8"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.1.9",
              "h": "Tableros eléctricos › Especificaciones de construcción › Formas constructivas",
              "t": "6.1.16.3  Para una instalación nueva, el tamaño inicial de los gabinetes y armarios deberá\nprever una ampliación de un 25% de la capacidad total por cada tipo de servicio\nque contenga el tablero eléctrico. Para esta condición se deberá dejar espacios\ndisponibles en barras de distribución y riel DIN o soporte de las protecciones.\n6.1.17 Las cajas y gabinetes metálicos podrán estar constituidos por placas de acero plegadas y\nsoldadas las que le darán forma y rigidez mecánica. Los armarios metálicos se estructurarán\nsobre bastidores de perfiles de resistencia mecánica adecuada a las exigencias del montaje\ny se cerrarán con placas plegadas las que formarán sus cubiertas y puertas. Será\nrecomendable la construcción modular de estos contenedores de modo de poder construir\ntableros de gran tamaño mediante el montaje de grupos de estos módulos.\n6.1.18 Todos los componentes metálicos de cajas, gabinetes y armarios deberán someterse a un\nproceso de acabado que garantice una adecuada resistencia a la corrosión.\n6.1.19 Los materiales no metálicos empleados en la construcción de cajas, gabinetes o armarios\ndeberán cumplir las siguientes condiciones:\n6.1.19.1  Serán no higroscópicos.\n6.1.19.2  En caso de combustión deberán ser autoextinguentes, arder sin llama y emitir\nhumos de baja opacidad, sus residuos gaseosos serán no tóxicos.\n6.1.19.3  Tendrán una resistencia mecánica suficiente como para soportar una energía de\nchoque de 2 Joules (IK 07).\n6.1.19.4  En caso de que estén instalados a la intemperie, tendrán una resistencia a los",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=9"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°15 · 9",
              "h": "Infraestructura para la recarga de vehículos eléctricos › ALIMENTADORES",
              "t": "9  Resistencia a la corrosión de tubos metálicos y  Protección interior y exterior\n2*\ncompuestos  media",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2024/03/RIC-N15-Version-2024.pdf#page=17"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 427",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 427.- Las cubiertas, rejillas de protección y envolventes deben ser de material incombustible, tener resistencia mecánica suficiente a los requerimientos y estar sólidamente fijados.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650162"
            }
          ],
          "exigencia": "Los elementos estructurales, instalaciones y equipos se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
          "accion": "Reparar o reemplazar la estructura del panel con óxido severo para restaurar su integridad mecánica.",
          "confianza": "media",
          "descartadas": []
        }
      ],
      "no_foto": [
        "Capacidad del empalme frente a la potencia declarada (RIC N°1 · 5.3)",
        "Curva y poder de corte del limitador (RIC N°1 · 8.1–8.2)",
        "Distancia a la puerta de acceso, semicírculo de 15 m (RIC N°1 · 7.2)",
        "Comunicación de energización inscrita en la SEC (RIC N°1 · 5.2)",
        "Acometida que no atraviese propiedades vecinas (RIC N°1 · 7.1)"
      ],
      "ms": 39060
    }
  },
  {
    "img": "s/e1.jpg",
    "title": "Caja eléctrica abierta",
    "credit": "Old Fuse Box · chrstphre · CC BY 2.0",
    "link": "https://www.flickr.com/photos/12457246@N03/32673756057",
    "rep": {
      "etapas": {
        "identificar": 2954,
        "confirmar": 33213,
        "revisar": 10276
      },
      "razonado": false,
      "ident": {
        "categoria": "medidor_empalme",
        "subtipo": "individual, subterráneo",
        "entorno": "industria",
        "descripcion": "Caja de empalme de medidor de energía con cables de alimentación y bornes de conexión visibles.",
        "evidencia": [
          "Caja metálica de empalme instalada en pared",
          "Bornes de conexión con cables de cobre",
          "Cables de alimentación entrando por conducto",
          "Componentes típicos de medición de energía eléctrica"
        ],
        "alternativas": [
          {
            "categoria": "tablero",
            "por_que_no": "No hay interruptores automáticos ni diferenciales, solo bornes de conexión"
          },
          {
            "categoria": "canalizacion",
            "por_que_no": "Aunque hay conducto, el equipo principal es la caja de empalme del medidor"
          }
        ],
        "confianza": 0.85,
        "caja_clave": [
          150,
          80,
          950,
          920
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "visor o mica con display de energía (kWh) o disco giratorio",
            "visto": "no",
            "detalle": "No se observa visor, mica, display kWh ni disco giratorio."
          },
          {
            "t": "caja de empalme con visor, individual o en un banco de cajas, no un gabinete con varios interruptores",
            "visto": "si",
            "detalle": "Se ve una caja de empalme abierta con bornes y conexiones, no un gabinete con interruptores."
          },
          {
            "t": "acometida que llega desde la red de distribución (poste o subterránea)",
            "visto": "no_claro",
            "detalle": "Hay cables negros que entran a la caja, pero no se identifica claramente si provienen de poste o red subterránea."
          },
          {
            "t": "sello o precinto de la distribuidora",
            "visto": "no",
            "detalle": "No se aprecia sello ni precinto de la distribuidora."
          },
          {
            "t": "protección o limitador del empalme",
            "visto": "no_claro",
            "detalle": "Se ven bornes y conexiones, pero no se distingue claramente un dispositivo de protección o limitador."
          }
        ],
        "vistos": 1,
        "ok": false
      },
      "corregido": {
        "de": "medidor_empalme",
        "a": "tablero"
      },
      "categoria": "tablero",
      "nombre": "Tablero eléctrico",
      "familia": "electrico",
      "subtipo": "individual, subterráneo",
      "entorno": "industria",
      "fuera": [],
      "resumen": "El tablero es una caja metálica abierta sin puerta ni cubierta, con partes energizadas expuestas y sin rotulación ni diagrama unilineal visible. Se observan además conductores sin protección mecánica y conexiones improvisadas dentro del recinto.",
      "puntos": [
        {
          "id": "T1",
          "texto": "Puerta exterior y cubierta cubre equipos presentes y cerradas; las protecciones solo se alcanzan abriendo la puerta",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.3, 6.1.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.3 Todos los tableros deberán contar con una cubierta cubre equipos y con una puerta exterior. La puerta exterior será totalmente cerrada y su fijación se hará mediante bisagras en disposición vertical u horizontal. Se permite montar sobre ella luces piloto de indicación de tablero energizado, y equipos de medida u otro elemento de maniobra o control, siempre que se mantenga el grado IP de protección del tablero. La cubierta cubre equipos deberá ser del mismo material que el gabinete, armario o caja, cumpliendo con las especificaciones indicadas en el punto 6.1.2. de este pliego.\n6.1.4 Las protecciones sólo serán accesibles abriendo la puerta exterior la que deberá permanecer cerrada, para lo cual se deberá contar con un dispositivo que permita el cierre y cuando corresponda, deberá ser cerrado con llave."
            }
          ],
          "estado": "no_cumple",
          "observacion": "No existe puerta ni cubierta; los equipos y protecciones están expuestos directamente.",
          "caja": [
            0,
            0,
            1000,
            1000
          ],
          "verificado": true,
          "cerca": "No hay puerta ni cubierta cerrada; los equipos y protecciones están expuestos dentro de una caja abierta."
        },
        {
          "id": "T2",
          "texto": "Ninguna parte energizada expuesta al operar: cubierta cubre equipos completa y barras desnudas con barrera",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.8, 6.2.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.8 La cubierta cubre equipos tendrá por finalidad principal, impedir el contacto de cuerpos extraños con las partes energizadas, o bien, que partes energizadas queden al alcance del usuario al operar las protecciones o dispositivos de maniobra.\n6.2.3 Toda barra de distribución desnuda deberá estar protegida mediante una barrera o material que impida el contacto directo con la superficie de las barras, en ningún caso se considerará la cubierta cubre equipo como un único elemento de protección. El elemento que cubra las barras desnudas debe tener el símbolo de riesgo eléctrico indicado en el anexo 2.2 y deberán contar con una identificación según su uso (normal, emergencia, especial de uso fotovoltaico, etc.)"
            }
          ],
          "estado": "no_cumple",
          "observacion": "Barras y bornes energizados están expuestos sin barrera ni cubierta que los proteja al operar.",
          "caja": [
            0,
            0,
            1000,
            1000
          ],
          "verificado": true,
          "cerca": "Se observan barras y bornes eléctricos desnudos y energizados sin barrera ni cubierta que los proteja completamente, quedando expuestos al operar."
        },
        {
          "id": "T3",
          "texto": "Envolvente íntegra: sin perforaciones, corrosión avanzada ni partes faltantes; no es un tablero de tipo abierto",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.2, 6.1.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.2 Los materiales empleados en la construcción de gabinetes, armarios o cajas que formen parte de la envolvente de los tableros eléctricos, deberán ser no propagadores de la llama, resistentes a la corrosión o estar adecuadamente protegidos contra ella, en conformidad con lo definido en los protocolos de análisis y/o ensayos de seguridad de productos eléctricos respectivos establecidos por la Superintendencia.\n6.1.7 Tanto la envolvente como la tapa de un tablero, deberá ser capaz de resistir los esfuerzos mecánicos, eléctricos y térmicos, para los que fueron diseñados."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Es un tablero de tipo abierto: caja sin tapa, con perforaciones, corrosión y partes faltantes.",
          "caja": [
            0,
            0,
            1000,
            1000
          ],
          "verificado": true,
          "cerca": "La envolvente presenta perforaciones evidentes y partes faltantes en su estructura, además de corrosión avanzada en los bordes y componentes internos."
        },
        {
          "id": "T4",
          "texto": "Placa del tablero visible: marca, nombre, tensión de servicio y corriente nominal",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.5",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.5 Todos los tableros, sin excepción, deberán llevar estampada en forma visible, legible e indeleble la marca de fabricación, el nombre del tablero, la tensión de servicio, la corriente nominal y el número de fases. El responsable de la instalación deberá agregar en su oportunidad su nombre o marca registrada. Marca de Fabricación: Nombre del Tablero: (Ejemplo: TGAux A. y F.) Tipo de servicio: (Normal o Emergencia) Tensión de servicio: Corriente nominal: Empresa desarrolladora: Año de instalación: Grado de Protección IP: Tipo de ambiente para el que fue diseñado en caso de ser un tablero especial:"
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia placa identificadora con marca, tensión ni corriente nominal; faltaría ver una placa legible en el equipo.",
          "caja": []
        },
        {
          "id": "T5",
          "texto": "Protecciones rotuladas con número de circuito y servicio, y cuadro indicador de circuitos",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.1, 5.3.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.1 Cuadro indicador y rotulado para identificar los circuitos, su número y su función.\n5.3.7 Todas las protecciones y aparatos de maniobra deberán ser rotulados indicando cuál es su Número de circuito y servicio."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ven rotulaciones de circuitos ni cuadro indicador; faltaría ver etiquetas por circuito y servicio.",
          "caja": []
        },
        {
          "id": "T6",
          "texto": "Diagrama unilineal adherido y legible",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.2 Diagrama unilineal actualizado, de tamaño legible, y con protección permanente para mantener su condición."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia diagrama unilineal adherido; faltaría ver un diagrama legible fijado al tablero.",
          "caja": []
        },
        {
          "id": "T7",
          "texto": "Cableado sin conexiones de dispositivo a dispositivo ni puentes improvisados; peines con todos sus accesorios",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.2.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=11",
              "t": "6.2.4 No se aceptará el cableado de un tablero con conexiones hechas de dispositivo a dispositivo, con la salvedad de:"
            }
          ],
          "estado": "no_cumple",
          "observacion": "Se observan conexiones improvisadas y puentes con conductores sueltos dentro de la caja; no se confirman peines con todos sus accesorios.",
          "caja": [
            0,
            0,
            1000,
            1000
          ],
          "verificado": true,
          "cerca": "Se observa cableado expuesto y conexiones improvisadas dentro de una caja metálica, sin peines ni accesorios adecuados, lo que incumple el punto de revisión."
        },
        {
          "id": "T8",
          "texto": "Gabinete metálico con conexión visible al conductor de protección (tierra)",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.4.1, 6.4.2, 6.4.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=13",
              "t": "6.4.1 Todo tablero deberá contar con la conexión a un sistema de puesta a tierra adecuado, que\n6.4.2 Si la caja, gabinete o armario que contiene a un tablero es metálico, deberá protegerse contra tensiones peligrosas.\n6.4.3 Las conexiones a tierra de un tablero deberán asegurar una continuidad eléctrica entre éste y el conductor de protección, cumpliendo con lo dispuesto en el Pliego Técnico Normativo RIC N°06."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se identifica claramente un conductor de protección conectado al gabinete metálico; faltaría ver la conexión a tierra visible.",
          "caja": []
        },
        {
          "id": "T9",
          "texto": "Espacio frente al tablero libre: sin materiales, muebles ni combustible almacenado",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.7 Los espacios libres y de trabajo de estos recintos no podrán ser usados como lugares de almacenamiento de ningún tipo de material, equipo o mobiliario, ni como recinto de estadía de personal."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "La foto solo muestra el tablero y su entorno inmediato; no se alcanza a ver el espacio frente al tablero completo.",
          "caja": []
        },
        {
          "id": "T10",
          "texto": "Sin tuberías ni medidores de agua o gas en el recinto del tablero",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.8",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.8 En este tipo de recintos no podrán instalarse tuberías o equipos de medida de otros servicios tales como agua potable o gas."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan tuberías ni medidores de agua o gas en la imagen, pero el recinto completo no se alcanza a ver.",
          "caja": []
        },
        {
          "id": "T11",
          "texto": "Ingreso de conductores sin romper la envolvente; en exterior sin techo, los conductores entran por abajo",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.21.6",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=10",
              "t": "6.1.21.6 El acoplamiento de canalizaciones o ingreso de conductores a tableros, se deberá realizar de forma de mantener el grado IP de la envolvente y el conjunto. Cuando los tableros estén instalados al exterior y no estén bajo techo, todas sus canalizaciones y conductores ingresen por la parte inferior, conservando su índice de protección IP."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia el ingreso de conductores ni si la instalación es en exterior; faltaría ver la forma de ingreso y la envolvente completa.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Resistencia de la puesta a tierra y continuidad de protecciones (medición)",
        "Aislamiento de conductores (medición)",
        "Ajuste y selectividad de las protecciones",
        "Grado IP real de la envolvente",
        "Apriete y temperatura de conexiones (termografía)"
      ],
      "ms": 50522
    }
  },
  {
    "img": "s/e2.jpg",
    "title": "Sala de tableros",
    "credit": "Electrical room 2 · footloosiety · CC BY 2.0",
    "link": "https://www.flickr.com/photos/15199494@N04/2900721439",
    "rep": {
      "etapas": {
        "identificar": 3180,
        "confirmar": 2117,
        "revisar": 10416
      },
      "razonado": false,
      "ident": {
        "categoria": "tablero",
        "subtipo": "concentrado",
        "entorno": "industria",
        "descripcion": "Banco de tableros de distribución con interruptores y etiquetas de circuitos de iluminación y fuerza.",
        "evidencia": [
          "Gabinetes metálicos con múltiples celdas",
          "Interruptores automáticos con manijas",
          "Etiquetas como LIGHTING PANEL y POWER PANEL",
          "Ventilaciones en los gabinetes"
        ],
        "alternativas": [
          {
            "categoria": "sala_electrica",
            "por_que_no": "No se visualiza un recinto amplio con varios tableros independientes, solo un banco concentrado"
          },
          {
            "categoria": "medidor_empalme",
            "por_que_no": "No se identifica medidor de energía de la distribuidora, solo interruptores de distribución interna"
          }
        ],
        "confianza": 0.92,
        "caja_clave": [
          0,
          0,
          710,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "interruptores automáticos, diferenciales o fusibles montados en fila",
            "visto": "si",
            "detalle": "Se ven varios interruptores automáticos con manijas negras montados en fila en los gabinetes."
          },
          {
            "t": "barras o borneras de distribución",
            "visto": "no",
            "detalle": "No se ven barras o borneras de distribución; los equipos están cerrados."
          },
          {
            "t": "varios circuitos que salen del gabinete",
            "visto": "no",
            "detalle": "No se ven varios circuitos que salen del gabinete; solo se ven los gabinetes cerrados."
          },
          {
            "t": "puerta exterior o cubierta cubre equipos",
            "visto": "si",
            "detalle": "Se ven puertas exteriores o cubiertas de los gabinetes eléctricos."
          }
        ],
        "vistos": 2,
        "ok": true
      },
      "categoria": "tablero",
      "nombre": "Tablero eléctrico",
      "familia": "electrico",
      "subtipo": "concentrado",
      "entorno": "industria",
      "fuera": [],
      "resumen": "El tablero eléctrico presenta envolvente metálica con puertas cerradas y equipos protegidos, pero no se observan placas de identificación, rotulación de circuitos ni diagrama unilineal, y hay evidencia de corrosión y perforaciones en la carcasa.",
      "puntos": [
        {
          "id": "T1",
          "texto": "Puerta exterior y cubierta cubre equipos presentes y cerradas; las protecciones solo se alcanzan abriendo la puerta",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.3, 6.1.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.3 Todos los tableros deberán contar con una cubierta cubre equipos y con una puerta exterior. La puerta exterior será totalmente cerrada y su fijación se hará mediante bisagras en disposición vertical u horizontal. Se permite montar sobre ella luces piloto de indicación de tablero energizado, y equipos de medida u otro elemento de maniobra o control, siempre que se mantenga el grado IP de protección del tablero. La cubierta cubre equipos deberá ser del mismo material que el gabinete, armario o caja, cumpliendo con las especificaciones indicadas en el punto 6.1.2. de este pliego.\n6.1.4 Las protecciones sólo serán accesibles abriendo la puerta exterior la que deberá permanecer cerrada, para lo cual se deberá contar con un dispositivo que permita el cierre y cuando corresponda, deberá ser cerrado con llave."
            }
          ],
          "estado": "cumple",
          "observacion": "Las puertas de los compartimentos están cerradas y cubren los equipos; las protecciones solo son accesibles al abrir cada puerta.",
          "caja": [
            120,
            0,
            710,
            999
          ]
        },
        {
          "id": "T2",
          "texto": "Ninguna parte energizada expuesta al operar: cubierta cubre equipos completa y barras desnudas con barrera",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.8, 6.2.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.8 La cubierta cubre equipos tendrá por finalidad principal, impedir el contacto de cuerpos extraños con las partes energizadas, o bien, que partes energizadas queden al alcance del usuario al operar las protecciones o dispositivos de maniobra.\n6.2.3 Toda barra de distribución desnuda deberá estar protegida mediante una barrera o material que impida el contacto directo con la superficie de las barras, en ningún caso se considerará la cubierta cubre equipo como un único elemento de protección. El elemento que cubra las barras desnudas debe tener el símbolo de riesgo eléctrico indicado en el anexo 2.2 y deberán contar con una identificación según su uso (normal, emergencia, especial de uso fotovoltaico, etc.)"
            }
          ],
          "estado": "cumple",
          "observacion": "No se ven partes energizadas expuestas; los equipos están cubiertos por las puertas y no se observan barras desnudas sin barrera.",
          "caja": [
            120,
            0,
            710,
            999
          ]
        },
        {
          "id": "T3",
          "texto": "Envolvente íntegra: sin perforaciones, corrosión avanzada ni partes faltantes; no es un tablero de tipo abierto",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.2, 6.1.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.2 Los materiales empleados en la construcción de gabinetes, armarios o cajas que formen parte de la envolvente de los tableros eléctricos, deberán ser no propagadores de la llama, resistentes a la corrosión o estar adecuadamente protegidos contra ella, en conformidad con lo definido en los protocolos de análisis y/o ensayos de seguridad de productos eléctricos respectivos establecidos por la Superintendencia.\n6.1.7 Tanto la envolvente como la tapa de un tablero, deberá ser capaz de resistir los esfuerzos mecánicos, eléctricos y térmicos, para los que fueron diseñados."
            }
          ],
          "estado": "no_cumple",
          "observacion": "La envolvente muestra perforaciones, manchas de humedad/corrosión y desgaste en varios paneles; no es un tablero de tipo abierto, pero su integridad está comprometida.",
          "caja": [
            120,
            0,
            710,
            999
          ],
          "verificado": true,
          "cerca": "Se observan múltiples perforaciones y orificios en las puertas de los módulos del tablero, además de manchas de corrosión y desgaste en la pintura, lo que indica que la envolvente no es íntegra."
        },
        {
          "id": "T4",
          "texto": "Placa del tablero visible: marca, nombre, tensión de servicio y corriente nominal",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.5",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.5 Todos los tableros, sin excepción, deberán llevar estampada en forma visible, legible e indeleble la marca de fabricación, el nombre del tablero, la tensión de servicio, la corriente nominal y el número de fases. El responsable de la instalación deberá agregar en su oportunidad su nombre o marca registrada. Marca de Fabricación: Nombre del Tablero: (Ejemplo: TGAux A. y F.) Tipo de servicio: (Normal o Emergencia) Tensión de servicio: Corriente nominal: Empresa desarrolladora: Año de instalación: Grado de Protección IP: Tipo de ambiente para el que fue diseñado en caso de ser un tablero especial:"
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia placa visible con marca, nombre, tensión de servicio y corriente nominal del tablero.",
          "caja": []
        },
        {
          "id": "T5",
          "texto": "Protecciones rotuladas con número de circuito y servicio, y cuadro indicador de circuitos",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.1, 5.3.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.1 Cuadro indicador y rotulado para identificar los circuitos, su número y su función.\n5.3.7 Todas las protecciones y aparatos de maniobra deberán ser rotulados indicando cuál es su Número de circuito y servicio."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ven rotulaciones con número de circuito y servicio ni cuadro indicador de circuitos legibles.",
          "caja": []
        },
        {
          "id": "T6",
          "texto": "Diagrama unilineal adherido y legible",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.2 Diagrama unilineal actualizado, de tamaño legible, y con protección permanente para mantener su condición."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observa diagrama unilineal adherido y legible en el tablero.",
          "caja": []
        },
        {
          "id": "T7",
          "texto": "Cableado sin conexiones de dispositivo a dispositivo ni puentes improvisados; peines con todos sus accesorios",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.2.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=11",
              "t": "6.2.4 No se aceptará el cableado de un tablero con conexiones hechas de dispositivo a dispositivo, con la salvedad de:"
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se puede revisar el cableado interno ni los peines porque las puertas están cerradas.",
          "caja": []
        },
        {
          "id": "T8",
          "texto": "Gabinete metálico con conexión visible al conductor de protección (tierra)",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.4.1, 6.4.2, 6.4.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=13",
              "t": "6.4.1 Todo tablero deberá contar con la conexión a un sistema de puesta a tierra adecuado, que\n6.4.2 Si la caja, gabinete o armario que contiene a un tablero es metálico, deberá protegerse contra tensiones peligrosas.\n6.4.3 Las conexiones a tierra de un tablero deberán asegurar una continuidad eléctrica entre éste y el conductor de protección, cumpliendo con lo dispuesto en el Pliego Técnico Normativo RIC N°06."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ve conexión visible al conductor de protección (tierra) en el gabinete metálico.",
          "caja": []
        },
        {
          "id": "T9",
          "texto": "Espacio frente al tablero libre: sin materiales, muebles ni combustible almacenado",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.7 Los espacios libres y de trabajo de estos recintos no podrán ser usados como lugares de almacenamiento de ningún tipo de material, equipo o mobiliario, ni como recinto de estadía de personal."
            }
          ],
          "estado": "cumple",
          "observacion": "El espacio frente al tablero está libre de materiales, muebles o combustible almacenado.",
          "caja": [
            700,
            500,
            1000,
            999
          ]
        },
        {
          "id": "T10",
          "texto": "Sin tuberías ni medidores de agua o gas en el recinto del tablero",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.8",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.8 En este tipo de recintos no podrán instalarse tuberías o equipos de medida de otros servicios tales como agua potable o gas."
            }
          ],
          "estado": "cumple",
          "observacion": "No se observan tuberías ni medidores de agua o gas en el recinto del tablero.",
          "caja": [
            700,
            0,
            1000,
            999
          ]
        },
        {
          "id": "T11",
          "texto": "Ingreso de conductores sin romper la envolvente; en exterior sin techo, los conductores entran por abajo",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.21.6",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=10",
              "t": "6.1.21.6 El acoplamiento de canalizaciones o ingreso de conductores a tableros, se deberá realizar de forma de mantener el grado IP de la envolvente y el conjunto. Cuando los tableros estén instalados al exterior y no estén bajo techo, todas sus canalizaciones y conductores ingresen por la parte inferior, conservando su índice de protección IP."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia el ingreso de conductores ni la envolvente superior para verificar si entran por abajo en exterior sin techo.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Resistencia de la puesta a tierra y continuidad de protecciones (medición)",
        "Aislamiento de conductores (medición)",
        "Ajuste y selectividad de las protecciones",
        "Grado IP real de la envolvente",
        "Apriete y temperatura de conexiones (termografía)"
      ],
      "ms": 21544
    }
  },
  {
    "img": "s/e3.jpg",
    "title": "Tablero en obra",
    "credit": "Pulling cables to the panels in an electrical room in the fu · MTA C&D - EAST SIDE ACCESS · CC BY 2.0",
    "link": "https://www.flickr.com/photos/59595815@N03/50097767532",
    "rep": {
      "etapas": {
        "identificar": 2958,
        "confirmar": 2380,
        "revisar": 11749
      },
      "razonado": false,
      "ident": {
        "categoria": "tablero",
        "subtipo": "distribución, empotrado",
        "entorno": "industria",
        "descripcion": "Tablero eléctrico de distribución con disyuntores y cableado, instalado en pared de bloque con canalización metálica superior.",
        "evidencia": [
          "Gabinete metálico con puerta abierta",
          "Múltiples interruptores automáticos en filas",
          "Bornes y cableado de colores conectados",
          "Canalización metálica rígida con conductores negros entrando desde el techo"
        ],
        "alternativas": [
          {
            "categoria": "medidor_empalme",
            "por_que_no": "No se identifica medidor de energía de la distribuidora ni sello de caja de empalme"
          },
          {
            "categoria": "sala_electrica",
            "por_que_no": "Se observa un solo tablero, no un recinto con varios equipos"
          },
          {
            "categoria": "canalizacion",
            "por_que_no": "Los ductos son accesorios de entrada al tablero, no el equipo principal"
          }
        ],
        "confianza": 0.9,
        "caja_clave": [
          170,
          430,
          790,
          860
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "interruptores automáticos, diferenciales o fusibles montados en fila",
            "visto": "si",
            "detalle": "Se observan varios interruptores automáticos montados en fila en el panel derecho del gabinete."
          },
          {
            "t": "barras o borneras de distribución",
            "visto": "si",
            "detalle": "Se ven borneras y terminales de conexión en la parte superior e inferior del panel eléctrico."
          },
          {
            "t": "varios circuitos que salen del gabinete",
            "visto": "si",
            "detalle": "Numerosos cables de colores salen del gabinete hacia la parte inferior y superior."
          },
          {
            "t": "puerta exterior o cubierta cubre equipos",
            "visto": "si",
            "detalle": "La puerta exterior del gabinete está abierta y visible a la izquierda."
          }
        ],
        "vistos": 4,
        "ok": true
      },
      "categoria": "tablero",
      "nombre": "Tablero eléctrico",
      "familia": "electrico",
      "subtipo": "distribución, empotrado",
      "entorno": "industria",
      "fuera": [],
      "resumen": "El tablero está instalado empotrado con puerta abierta y sin placa identificadora visible; además, hay tuberías de agua o gas junto al equipo y el cableado presenta conexiones improvisadas y peines sin todos sus accesorios.",
      "puntos": [
        {
          "id": "T1",
          "texto": "Puerta exterior y cubierta cubre equipos presentes y cerradas; las protecciones solo se alcanzan abriendo la puerta",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.3, 6.1.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.3 Todos los tableros deberán contar con una cubierta cubre equipos y con una puerta exterior. La puerta exterior será totalmente cerrada y su fijación se hará mediante bisagras en disposición vertical u horizontal. Se permite montar sobre ella luces piloto de indicación de tablero energizado, y equipos de medida u otro elemento de maniobra o control, siempre que se mantenga el grado IP de protección del tablero. La cubierta cubre equipos deberá ser del mismo material que el gabinete, armario o caja, cumpliendo con las especificaciones indicadas en el punto 6.1.2. de este pliego.\n6.1.4 Las protecciones sólo serán accesibles abriendo la puerta exterior la que deberá permanecer cerrada, para lo cual se deberá contar con un dispositivo que permita el cierre y cuando corresponda, deberá ser cerrado con llave."
            }
          ],
          "estado": "no_cumple",
          "observacion": "La puerta está abierta y no cubre los equipos; las protecciones están expuestas sin necesidad de abrir nada.",
          "caja": [
            110,
            430,
            790,
            860
          ],
          "verificado": true,
          "cerca": "La puerta del tablero está abierta, exponiendo directamente los equipos y protecciones sin necesidad de abrirla."
        },
        {
          "id": "T2",
          "texto": "Ninguna parte energizada expuesta al operar: cubierta cubre equipos completa y barras desnudas con barrera",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.8, 6.2.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.8 La cubierta cubre equipos tendrá por finalidad principal, impedir el contacto de cuerpos extraños con las partes energizadas, o bien, que partes energizadas queden al alcance del usuario al operar las protecciones o dispositivos de maniobra.\n6.2.3 Toda barra de distribución desnuda deberá estar protegida mediante una barrera o material que impida el contacto directo con la superficie de las barras, en ningún caso se considerará la cubierta cubre equipo como un único elemento de protección. El elemento que cubra las barras desnudas debe tener el símbolo de riesgo eléctrico indicado en el anexo 2.2 y deberán contar con una identificación según su uso (normal, emergencia, especial de uso fotovoltaico, etc.)"
            }
          ],
          "estado": "no_cumple",
          "observacion": "Con la puerta abierta se ven partes energizadas expuestas y no se aprecia barrera sobre barras desnudas.",
          "caja": [
            470,
            430,
            790,
            830
          ],
          "verificado": true,
          "cerca": "Se observan barras y conexiones energizadas expuestas dentro del tablero, sin cubierta ni barrera que las proteja completamente al operar."
        },
        {
          "id": "T3",
          "texto": "Envolvente íntegra: sin perforaciones, corrosión avanzada ni partes faltantes; no es un tablero de tipo abierto",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.2, 6.1.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.2 Los materiales empleados en la construcción de gabinetes, armarios o cajas que formen parte de la envolvente de los tableros eléctricos, deberán ser no propagadores de la llama, resistentes a la corrosión o estar adecuadamente protegidos contra ella, en conformidad con lo definido en los protocolos de análisis y/o ensayos de seguridad de productos eléctricos respectivos establecidos por la Superintendencia.\n6.1.7 Tanto la envolvente como la tapa de un tablero, deberá ser capaz de resistir los esfuerzos mecánicos, eléctricos y térmicos, para los que fueron diseñados."
            }
          ],
          "estado": "cumple",
          "observacion": "El tablero eléctrico se ve como una envolvente metálica cerrada con puerta, sin perforaciones visibles, corrosión avanzada ni partes faltantes. No es un tablero de tipo abierto.",
          "caja": [
            110,
            0,
            1000,
            1000
          ],
          "verificado": true,
          "corregido": {
            "de": "no_cumple",
            "obs": "La envolvente tiene perforaciones visibles en la pared contigua y no se ve íntegra; además el tablero está abierto."
          }
        },
        {
          "id": "T4",
          "texto": "Placa del tablero visible: marca, nombre, tensión de servicio y corriente nominal",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.5",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.5 Todos los tableros, sin excepción, deberán llevar estampada en forma visible, legible e indeleble la marca de fabricación, el nombre del tablero, la tensión de servicio, la corriente nominal y el número de fases. El responsable de la instalación deberá agregar en su oportunidad su nombre o marca registrada. Marca de Fabricación: Nombre del Tablero: (Ejemplo: TGAux A. y F.) Tipo de servicio: (Normal o Emergencia) Tensión de servicio: Corriente nominal: Empresa desarrolladora: Año de instalación: Grado de Protección IP: Tipo de ambiente para el que fue diseñado en caso de ser un tablero especial:"
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia placa con marca, tensión ni corriente nominal; solo hay etiquetas pequeñas ilegibles en la puerta.",
          "caja": [
            180,
            720,
            360,
            820
          ]
        },
        {
          "id": "T5",
          "texto": "Protecciones rotuladas con número de circuito y servicio, y cuadro indicador de circuitos",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.1, 5.3.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.1 Cuadro indicador y rotulado para identificar los circuitos, su número y su función.\n5.3.7 Todas las protecciones y aparatos de maniobra deberán ser rotulados indicando cuál es su Número de circuito y servicio."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ven rotulados los circuitos ni cuadro indicador de servicios.",
          "caja": []
        },
        {
          "id": "T6",
          "texto": "Diagrama unilineal adherido y legible",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.2 Diagrama unilineal actualizado, de tamaño legible, y con protección permanente para mantener su condición."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observa diagrama unilineal adherido al tablero.",
          "caja": []
        },
        {
          "id": "T7",
          "texto": "Cableado sin conexiones de dispositivo a dispositivo ni puentes improvisados; peines con todos sus accesorios",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.2.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=11",
              "t": "6.2.4 No se aceptará el cableado de un tablero con conexiones hechas de dispositivo a dispositivo, con la salvedad de:"
            }
          ],
          "estado": "no_cumple",
          "observacion": "Se ven conexiones de dispositivo a dispositivo y puentes improvisados; los peines no tienen todos sus accesorios.",
          "caja": [
            500,
            440,
            950,
            1000
          ],
          "verificado": true,
          "cerca": "Se observan cables sueltos y desordenados que conectan dispositivos sin usar peines ni terminales adecuados, con conexiones improvisadas y sin protección visible."
        },
        {
          "id": "T8",
          "texto": "Gabinete metálico con conexión visible al conductor de protección (tierra)",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.4.1, 6.4.2, 6.4.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=13",
              "t": "6.4.1 Todo tablero deberá contar con la conexión a un sistema de puesta a tierra adecuado, que\n6.4.2 Si la caja, gabinete o armario que contiene a un tablero es metálico, deberá protegerse contra tensiones peligrosas.\n6.4.3 Las conexiones a tierra de un tablero deberán asegurar una continuidad eléctrica entre éste y el conductor de protección, cumpliendo con lo dispuesto en el Pliego Técnico Normativo RIC N°06."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia conexión visible del gabinete metálico al conductor de protección.",
          "caja": []
        },
        {
          "id": "T9",
          "texto": "Espacio frente al tablero libre: sin materiales, muebles ni combustible almacenado",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.7 Los espacios libres y de trabajo de estos recintos no podrán ser usados como lugares de almacenamiento de ningún tipo de material, equipo o mobiliario, ni como recinto de estadía de personal."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ve el área frente al tablero en su totalidad para confirmar que está libre de materiales o combustibles.",
          "caja": []
        },
        {
          "id": "T10",
          "texto": "Sin tuberías ni medidores de agua o gas en el recinto del tablero",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.8",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.8 En este tipo de recintos no podrán instalarse tuberías o equipos de medida de otros servicios tales como agua potable o gas."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Hay tuberías con medidores y manómetros de agua o gas justo debajo y al costado del tablero.",
          "caja": [
            100,
            850,
            800,
            1000
          ],
          "verificado": true,
          "cerca": "Se observan tuberías con medidores de presión instalados directamente dentro del recinto del tablero eléctrico."
        },
        {
          "id": "T11",
          "texto": "Ingreso de conductores sin romper la envolvente; en exterior sin techo, los conductores entran por abajo",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.21.6",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=10",
              "t": "6.1.21.6 El acoplamiento de canalizaciones o ingreso de conductores a tableros, se deberá realizar de forma de mantener el grado IP de la envolvente y el conjunto. Cuando los tableros estén instalados al exterior y no estén bajo techo, todas sus canalizaciones y conductores ingresen por la parte inferior, conservando su índice de protección IP."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia el punto de ingreso de conductores ni si rompe la envolvente; no es posible determinar si es exterior.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Resistencia de la puesta a tierra y continuidad de protecciones (medición)",
        "Aislamiento de conductores (medición)",
        "Ajuste y selectividad de las protecciones",
        "Grado IP real de la envolvente",
        "Apriete y temperatura de conexiones (termografía)"
      ],
      "ms": 21941
    }
  },
  {
    "img": "s/e4.jpg",
    "title": "Tablero con paja",
    "credit": "Electrical Panel · peretzp · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/68877611@N00/5397919963",
    "rep": {
      "etapas": {
        "identificar": 2839,
        "confirmar": 8952,
        "revisar": 14036
      },
      "razonado": false,
      "ident": {
        "categoria": "tablero",
        "subtipo": "individual, distribución",
        "entorno": "industria",
        "descripcion": "Tablero eléctrico con tres voltímetros, indicadores luminosos y disyuntores que reparten circuitos.",
        "evidencia": [
          "Gabinete metálico con puerta y manija",
          "Tres analógicos de voltaje (V) en la parte superior",
          "Tres botones indicadores (verde, rojo, amarillo)",
          "Tres interruptores automáticos (disyuntores) con cableado rojo, azul y rosa en la parte inferior"
        ],
        "alternativas": [
          {
            "categoria": "medidor_empalme",
            "por_que_no": "No hay medidor de energía de la distribuidora visible, solo voltímetros"
          },
          {
            "categoria": "sala_electrica",
            "por_que_no": "Es un solo gabinete, no un recinto con varios tableros o celdas"
          }
        ],
        "confianza": 0.95,
        "caja_clave": [
          100,
          80,
          900,
          950
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "interruptores automáticos, diferenciales o fusibles montados en fila",
            "visto": "si",
            "detalle": "Se ven tres interruptores automáticos montados en fila en la parte inferior del gabinete."
          },
          {
            "t": "barras o borneras de distribución",
            "visto": "no_claro",
            "detalle": "No se identifican claramente barras o borneras de distribución; solo se observan cables y bornes de los interruptores."
          },
          {
            "t": "varios circuitos que salen del gabinete",
            "visto": "si",
            "detalle": "Se observan varios cables de colores (rojos, rosados, azules, verdes) que salen del área de los interruptores."
          },
          {
            "t": "puerta exterior o cubierta cubre equipos",
            "visto": "si",
            "detalle": "Se ve la puerta exterior o cubierta metálica del gabinete con una manija a la derecha."
          }
        ],
        "vistos": 3,
        "ok": true
      },
      "categoria": "tablero",
      "nombre": "Tablero eléctrico",
      "familia": "electrico",
      "subtipo": "individual, distribución",
      "entorno": "industria",
      "fuera": [],
      "resumen": "El tablero está abierto y sin puerta, con cableado desordenado y material combustible dentro del gabinete, lo que expone partes energizadas y genera riesgo de incendio. Falta identificación de circuitos, diagrama unilineal y placa de datos visible.",
      "puntos": [
        {
          "id": "T1",
          "texto": "Puerta exterior y cubierta cubre equipos presentes y cerradas; las protecciones solo se alcanzan abriendo la puerta",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.3, 6.1.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.3 Todos los tableros deberán contar con una cubierta cubre equipos y con una puerta exterior. La puerta exterior será totalmente cerrada y su fijación se hará mediante bisagras en disposición vertical u horizontal. Se permite montar sobre ella luces piloto de indicación de tablero energizado, y equipos de medida u otro elemento de maniobra o control, siempre que se mantenga el grado IP de protección del tablero. La cubierta cubre equipos deberá ser del mismo material que el gabinete, armario o caja, cumpliendo con las especificaciones indicadas en el punto 6.1.2. de este pliego.\n6.1.4 Las protecciones sólo serán accesibles abriendo la puerta exterior la que deberá permanecer cerrada, para lo cual se deberá contar con un dispositivo que permita el cierre y cuando corresponda, deberá ser cerrado con llave."
            }
          ],
          "estado": "no_cumple",
          "observacion": "El tablero no tiene puerta ni cubierta cerrada; los equipos y protecciones están expuestos directamente.",
          "caja": [
            90,
            75,
            910,
            940
          ],
          "verificado": true,
          "cerca": "La puerta del tablero está abierta, dejando expuestos los equipos y protecciones sin necesidad de abrirla; además se observa material extraño (paja o pasto) dentro del recinto eléctrico."
        },
        {
          "id": "T2",
          "texto": "Ninguna parte energizada expuesta al operar: cubierta cubre equipos completa y barras desnudas con barrera",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.8, 6.2.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.8 La cubierta cubre equipos tendrá por finalidad principal, impedir el contacto de cuerpos extraños con las partes energizadas, o bien, que partes energizadas queden al alcance del usuario al operar las protecciones o dispositivos de maniobra.\n6.2.3 Toda barra de distribución desnuda deberá estar protegida mediante una barrera o material que impida el contacto directo con la superficie de las barras, en ningún caso se considerará la cubierta cubre equipo como un único elemento de protección. El elemento que cubra las barras desnudas debe tener el símbolo de riesgo eléctrico indicado en el anexo 2.2 y deberán contar con una identificación según su uso (normal, emergencia, especial de uso fotovoltaico, etc.)"
            }
          ],
          "estado": "no_cumple",
          "observacion": "No hay cubierta que cubra los equipos; se ven bornes, bornes de disyuntores y cableado energizado al descubierto.",
          "caja": [
            190,
            425,
            690,
            630
          ],
          "verificado": true,
          "cerca": "Se observan barras y bornes de conexión energizados expuestos, sin cubierta ni barrera que los proteja, lo que permite contacto accidental al operar."
        },
        {
          "id": "T3",
          "texto": "Envolvente íntegra: sin perforaciones, corrosión avanzada ni partes faltantes; no es un tablero de tipo abierto",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.2, 6.1.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=8",
              "t": "6.1.2 Los materiales empleados en la construcción de gabinetes, armarios o cajas que formen parte de la envolvente de los tableros eléctricos, deberán ser no propagadores de la llama, resistentes a la corrosión o estar adecuadamente protegidos contra ella, en conformidad con lo definido en los protocolos de análisis y/o ensayos de seguridad de productos eléctricos respectivos establecidos por la Superintendencia.\n6.1.7 Tanto la envolvente como la tapa de un tablero, deberá ser capaz de resistir los esfuerzos mecánicos, eléctricos y térmicos, para los que fueron diseñados."
            }
          ],
          "estado": "no_cumple",
          "observacion": "La envolvente tiene perforaciones y deterioro en los bordes; el interior está expuesto y no es un tablero cerrado tipo industrial.",
          "caja": [
            10,
            10,
            990,
            990
          ],
          "verificado": true,
          "cerca": "La envolvente presenta perforaciones y deterioro visible en los bordes, con material extraño (paja o fibras) dentro del tablero, lo que indica que no es íntegra."
        },
        {
          "id": "T4",
          "texto": "Placa del tablero visible: marca, nombre, tensión de servicio y corriente nominal",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.5",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.5 Todos los tableros, sin excepción, deberán llevar estampada en forma visible, legible e indeleble la marca de fabricación, el nombre del tablero, la tensión de servicio, la corriente nominal y el número de fases. El responsable de la instalación deberá agregar en su oportunidad su nombre o marca registrada. Marca de Fabricación: Nombre del Tablero: (Ejemplo: TGAux A. y F.) Tipo de servicio: (Normal o Emergencia) Tensión de servicio: Corriente nominal: Empresa desarrolladora: Año de instalación: Grado de Protección IP: Tipo de ambiente para el que fue diseñado en caso de ser un tablero especial:"
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia placa con marca, tensión de servicio ni corriente nominal; solo se ven tres amperímetros sin datos claros del tablero.",
          "caja": [
            130,
            115,
            850,
            265
          ]
        },
        {
          "id": "T5",
          "texto": "Protecciones rotuladas con número de circuito y servicio, y cuadro indicador de circuitos",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.1, 5.3.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.1 Cuadro indicador y rotulado para identificar los circuitos, su número y su función.\n5.3.7 Todas las protecciones y aparatos de maniobra deberán ser rotulados indicando cuál es su Número de circuito y servicio."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan rotulados con número de circuito ni cuadro indicador de servicios en los disyuntores.",
          "caja": [
            190,
            425,
            690,
            630
          ]
        },
        {
          "id": "T6",
          "texto": "Diagrama unilineal adherido y legible",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 5.3.6.2",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=5",
              "t": "5.3.6.2 Diagrama unilineal actualizado, de tamaño legible, y con protección permanente para mantener su condición."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ve diagrama unilineal adherido al tablero.",
          "caja": []
        },
        {
          "id": "T7",
          "texto": "Cableado sin conexiones de dispositivo a dispositivo ni puentes improvisados; peines con todos sus accesorios",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 6.2.4",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=11",
              "t": "6.2.4 No se aceptará el cableado de un tablero con conexiones hechas de dispositivo a dispositivo, con la salvedad de:"
            }
          ],
          "estado": "no_cumple",
          "observacion": "El cableado es un enredo de conductores sin orden, con empalmes visibles y material extraño dentro del gabinete; no se confirman peines con todos sus accesorios.",
          "caja": [
            110,
            410,
            880,
            920
          ],
          "verificado": true,
          "cerca": "Se observa cableado desordenado con empalmes visibles y cinta aislante improvisada entre dispositivos, sin uso de peines ni conexiones ordenadas."
        },
        {
          "id": "T8",
          "texto": "Gabinete metálico con conexión visible al conductor de protección (tierra)",
          "sev": "alta",
          "refs": [
            {
              "ref": "RIC N°2 · 6.4.1, 6.4.2, 6.4.3",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=13",
              "t": "6.4.1 Todo tablero deberá contar con la conexión a un sistema de puesta a tierra adecuado, que\n6.4.2 Si la caja, gabinete o armario que contiene a un tablero es metálico, deberá protegerse contra tensiones peligrosas.\n6.4.3 Las conexiones a tierra de un tablero deberán asegurar una continuidad eléctrica entre éste y el conductor de protección, cumpliendo con lo dispuesto en el Pliego Técnico Normativo RIC N°06."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia conexión visible del gabinete metálico al conductor de protección (tierra).",
          "caja": []
        },
        {
          "id": "T9",
          "texto": "Espacio frente al tablero libre: sin materiales, muebles ni combustible almacenado",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.7",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.7 Los espacios libres y de trabajo de estos recintos no podrán ser usados como lugares de almacenamiento de ningún tipo de material, equipo o mobiliario, ni como recinto de estadía de personal."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ve el área frente al tablero en la foto; solo se observa el interior del gabinete.",
          "caja": []
        },
        {
          "id": "T10",
          "texto": "Sin tuberías ni medidores de agua o gas en el recinto del tablero",
          "sev": "media",
          "refs": [
            {
              "ref": "RIC N°2 · 5.4.8",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=7",
              "t": "5.4.8 En este tipo de recintos no podrán instalarse tuberías o equipos de medida de otros servicios tales como agua potable o gas."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia el recinto alrededor del tablero para verificar tuberías o medidores de agua o gas.",
          "caja": []
        },
        {
          "id": "T11",
          "texto": "Ingreso de conductores sin romper la envolvente; en exterior sin techo, los conductores entran por abajo",
          "sev": "baja",
          "refs": [
            {
              "ref": "RIC N°2 · 6.1.21.6",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=10",
              "t": "6.1.21.6 El acoplamiento de canalizaciones o ingreso de conductores a tableros, se deberá realizar de forma de mantener el grado IP de la envolvente y el conjunto. Cuando los tableros estén instalados al exterior y no estén bajo techo, todas sus canalizaciones y conductores ingresen por la parte inferior, conservando su índice de protección IP."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ve el ingreso de conductores ni si el tablero está en exterior sin techo.",
          "caja": []
        }
      ],
      "otros": [
        {
          "titulo": "Falta de disyuntor general de maniobra y corte",
          "observacion": "No se aprecia un dispositivo general que permita desconectar toda la instalación desde el origen del tablero.",
          "severidad": "alta",
          "caja": [
            190,
            425,
            690,
            630
          ],
          "busqueda": "Todo tablero de distribución debe contar con un dispositivo de maniobra y corte general que interrumpa el suministro de todos los circuitos.",
          "citas": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.6",
              "h": "Tableros eléctricos › Especificaciones de construcción › Disposiciones aplicables a tableros de distribución",
              "t": "6.6  Disposiciones aplicables a tableros de distribución\n6.6.1  En un tablero de distribución no se permitirá instalar más de 25 circuitos, por cada protección\ngeneral según la clasificación del punto 4.25.1 del presente pliego técnico.1\n6.6.2  Los tableros de distribución en una instalación deberán llevar un interruptor o disyuntor\ngeneral que corte todos los conductores activos, incluyendo el neutro (corte omnipolar), que\npermita operar sobre toda la instalación en forma simultánea. Se exceptúan de esta\ndisposición los tableros domiciliarios que contengan hasta 3 circuitos.\n6.6.3  En un tablero de distribución en que se alimentan circuitos de distintos servicios, tales como\nfuerza, alumbrado, climatización u otros, las protecciones se deberán agrupar\nordenadamente ocupando distintas secciones del tablero. Se colocarán protecciones\ngenerales de corte omnipolar correspondientes a cada servicio, independientemente de lo\nestipulado en el punto 6.6.2. Se exceptúan de esta disposición los servicios de menos de 4\ncircuitos.\n6.6.4  Todos los tableros de distribución ubicados en aeropuertos, grandes hoteles de más de 300\nhabitaciones, locales de espectáculos con capacidad para más de 1.000 espectadores,\ncentros comerciales de más de 2.000 m2 de superficie, edificios de oficinas de gran altura\nsegún NFPA 101 y en instalaciones en ambientes explosivos, deberán implementar una de\nlas siguientes medidas de seguridad contra incendio:\n6.6.4.1  Todos los tableros de distribución deberán contar con un interruptor o disyuntor\ngeneral que corte todos los conductores activos, incluyendo el neutro (corte\nomnipolar) y una protección diferencial general con una sensibilidad de 300 mA.\nEste diferencial no reemplaza la exigencia de utilizar la protección diferencial\nexigida para cada uno de los circuitos.\n6.6.4.2  Todos los circuitos de los tableros de distribución deberán quedar protegidos por\nun dispositivo de detección de falla de arco eléctrico, en conformidad de la norma\nIEC 62606",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=14"
            }
          ],
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°2 · 6.5.2–6.5.3",
              "h": "Tableros eléctricos › Especificaciones de construcción › Disposiciones aplicables a tableros generales",
              "t": "6.5.2  También se deberá colocar un tablero general en aquellas instalaciones en que, existiendo\nun único tablero de distribución, este último esté separado más de 30 m del equipo de medida\ndel empalme.\n6.5.3  Todo tablero general del cual dependa más de un alimentador deberá llevar un interruptor o\ndisyuntor general que corte todos los conductores activos, incluyendo el neutro (corte\nomnipolar), que permita operar sobre toda la instalación en forma simultánea.\n6.5.4  Los tableros generales auxiliares se colocarán en aquellas instalaciones en que se necesite\nderivar subalimentadores desde un alimentador, para energizar distintos tableros de\ndistribución en forma individual o en grupo.\n6.5.5  En un tablero general no podrán colocarse dispositivos de operación o protección para\nalimentadores de distintas tensiones.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/06/RIC-N02-Tableros-Electricos-170621-2.pdf#page=13"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°7 · 5.6.3",
              "h": "Instalaciones de equipos › INSTALACIÓN DE EQUIPOS DE FUERZA › Protecciones y comandos de motores",
              "t": "partidor.\n5.6.3.10  El interruptor deberá ubicarse en un punto en que quede con vistas al partidor del\nmotor y deberá ser fácilmente accesible.\n5.6.3.11  Para motores de partida directa el interruptor puede ser empleado como partidor,\nsiempre que esté ubicado con vistas al motor.\n5.6.3.12  El interruptor que desconecta al motor del circuito deberá interrumpir todos los\nconductores activos de la alimentación.\n5.6.3.13  Cuando la instalación consista en un único motor, la protección del tablero de\ndistribución podrá usarse como interruptor de desconexión, siempre que esté\nubicado con vistas al motor, y que interrumpa todos sus conductores activos.\n5.6.3.14  Los motores deben estar protegidos contra la falta de tensión por un dispositivo de\ncorte automático de la alimentación, cuando el arranque espontáneo del motor,\ncomo consecuencia del restablecimiento de la tensión, pueda provocar accidentes,\no perjudicar el motor. Dicho dispositivo puede formar parte de la protección contra\nlas sobrecargas o del de arranque, y puede proteger a más de un motor si se da\nuna de las condiciones siguientes:\na)  Los motores por proteger estén instalados en un mismo local y la suma de\npotencias absorbidas no es superior a 10 kilowatt.\nb)  Los motores por proteger estén instalados en un mismo local y cada uno de\nellos queda automáticamente en el estado inicial de arranque después de una\nfalta de tensión. Cuando el motor arranque automáticamente en condiciones\npreestablecidas, no se exigirá el dispositivo de protección contra la falta de\ntensión, pero debe quedar excluida la posibilidad de un accidente en caso de\narranque espontáneo. Si el motor tuviera que llevar dispositivos limitadores de\nla potencia absorbida en el arranque, es obligatorio, para quedar incluidos en\nla anterior excepción, que los dispositivos de arranque vuelvan\nautomáticamente a la posición inicial al originarse una falta de tensión y\nparada del motor.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/03/RIC-N07-Instalaciones-de-Equipos-V1.1-1.pdf#page=10"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 443",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 443.- Cada circuito debe estar provisto de un interruptor de capacidad nominal, instalado dentro del recinto y a no más de quince metros (15mt) del punto de derivación.\n Cada circuito derivado debe protegerse con fusibles u otros dispositivos de sobrecarga de acuerdo a especificaciones técnicas al respecto.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650178"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 456",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 456.- Todos los transformadores deben estar equipados con fusibles u otros dispositivos de desconexión automática, tanto en el circuito primario como en el secundario.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650191"
            }
          ],
          "exigencia": "Los tableros de distribución deberán llevar un interruptor o disyuntor general que corte todos los conductores activos, incluyendo el neutro, que permita operar sobre toda la instalación en forma simultánea.",
          "accion": "Instalar un disyuntor general de maniobra y corte en el origen del tablero que desconecte todos los conductores activos simultáneamente.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Ausencia de protección diferencial",
          "observacion": "No se identifica un interruptor diferencial que proteja contra contactos indirectos en el tablero.",
          "severidad": "alta",
          "caja": [
            190,
            425,
            690,
            630
          ],
          "busqueda": "Las instalaciones eléctricas deben disponer de protección contra contactos indirectos mediante dispositivos diferenciales de corriente residual.",
          "citas": [],
          "revisados": [
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 8.7.7",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos indirectos",
              "t": "inverso e Ia debe ser la corriente que asegure el funcionamiento automático en\n5 s como máximo;\nb) O bien un dispositivo que posea una característica de funcionamiento\ninstantánea e Ia debe ser la corriente que asegura el funcionamiento\ninstantáneo.\n8.7.7.6  La utilización de dispositivos de protección de tensión de defecto no está excluida\npara aplicaciones especiales cuando no puedan utilizarse los dispositivos de\nprotección antes señalados.\n8.7.7.7  Con miras a la selectividad pueden instalarse protectores diferenciales\ntemporizados (por ejemplo, del tipo “S”) en serie con protectores diferenciales de\ntipo general, con un tiempo de funcionamiento como máximo igual a 1 s.\nFigura 5 Esquema TT",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=15"
            },
            {
              "norma": "RIC",
              "ref": "RIC N°5 · 7.3–7.4.1",
              "h": "Medidas de protección contra tensiones peligrosas y descargas eléctricas › Medidas de protección contra contactos directos",
              "t": "7.3  Los medios a utilizar como medidas de protección contra contactos directos son habitualmente:\na)  Protección por aislamiento de las partes activas.\nb)  Protección por medio de barreras o envolventes.\nc)  Protección por medio de obstáculos.\nd)  Protección por puesta fuera de alcance por alejamiento.\ne)  Protección complementaria por dispositivos de corriente diferencial residual (Protecciones\nDiferenciales).\n7.4  Protección por aislamiento de las partes activas.\n7.4.1  Las partes activas deberán estar recubiertas de un aislamiento que no pueda ser eliminado\nmás que destruyéndolo.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N05-Medidas-de-Proteccion-Contra-Tensiones-Peligrosas.pdf#page=7"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 488",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 488.- En todos los lugares de superficie en que sea necesario, deben colocarse pararrayos adecuados para proteger las instalaciones de las sobretensiones debidas a la electricidad atmosférica.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650223"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 431",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 431.- Toda instalación y equipo eléctrico en funcionamiento en una faena debe contar con los sistemas de protección que, en caso de sobrecarga, fallas a tierra, cortocircuitos, sobrecalentamiento u otra anormalidad, actúen eficientemente, desenergizando los circuitos.\n Dichos sistemas que deben ser regularmente conservados, responderán a especificaciones y diseños aprobados por la normativa legal y a normas técnicas reconocidas para ello.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650166"
            }
          ],
          "exigencia": "",
          "accion": "Instalar un interruptor diferencial tipo A de hasta 30 mA en el tablero para proteger contra contactos indirectos.",
          "confianza": "alta",
          "descartadas": [
            {
              "norma": "RIC",
              "ref": "RIC N°11 · 3.8.1",
              "h": "Instalaciones especiales › CENTROS ASISTENCIALES › Medidas de protección contra contacto indirecto",
              "t": "3.8.1  Sistema TN\n3.8.1.1  En circuitos finales del grupo 0 y 1, se deberá instalar protectores diferenciales\ntipo A con una corriente de sensibilidad de hasta 30 mA.\n3.8.1.2  La protección diferencial instalada en estos circuitos, en situaciones donde\nhabrá conexión en forma simultánea de diferentes tipos de cargas, deberá\nasegurar que la protección no opere de forma intempestiva, por lo cual se deben\ninstalar protecciones diferenciales con un alto poder de inmunización contra los\ndesenclavamientos intempestivos sobre redes perturbadas y la detección de\nfallas diferenciales alternas con componentes continuas. Se podrá utilizar un\nmonitor de corriente residual, el cual deberá estar provisto de pre alarma y\nalarma, en sustitución de protecciones diferenciales.",
              "url": "https://www.sec.cl/sitio-web/wp-content/uploads/2021/01/RIC-N11-Instalaciones-Especiales.pdf#page=7",
              "cae": "El artículo solo exige protección diferencial en circuitos finales de los grupos 0 y 1, no en todo el tablero."
            }
          ]
        }
      ],
      "no_foto": [
        "Resistencia de la puesta a tierra y continuidad de protecciones (medición)",
        "Aislamiento de conductores (medición)",
        "Ajuste y selectividad de las protecciones",
        "Grado IP real de la envolvente",
        "Apriete y temperatura de conexiones (termografía)"
      ],
      "ms": 32718
    }
  },
  {
    "img": "s/b1.jpg",
    "title": "Tambores en pallets",
    "credit": "Green Oil · XcBiker · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/66534737@N00/740500486",
    "rep": {
      "etapas": {
        "identificar": 4723,
        "confirmar": 9659,
        "revisar": 8476
      },
      "razonado": false,
      "ident": {
        "categoria": "bodega_sustancias",
        "subtipo": "envases almacenados",
        "entorno": "industria",
        "descripcion": "Apilamiento de bidones metálicos verdes en pallets, almacenados en bodega o patio de sustancias.",
        "evidencia": [
          "Bidones metálicos de 200 litros apilados en pallets de madera",
          "Etiquetas blancas en los bidones",
          "Cinta plástica de sujeción entre filas",
          "Algunos bidones con óxido y desgaste visible"
        ],
        "alternativas": [
          {
            "categoria": "estanque",
            "por_que_no": "No hay tanques de gran capacidad, solo bidones individuales"
          },
          {
            "categoria": "area_trabajo",
            "por_que_no": "No se observan actividades, herramientas ni zona de operación, solo almacenamiento estático"
          }
        ],
        "confianza": 0.95,
        "caja_clave": [
          0,
          0,
          1000,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "tambores, bidones, sacos u otros envases de productos",
            "visto": "si",
            "detalle": "Numerosos tambores y bidones verdes apilados en pallets."
          },
          {
            "t": "rótulos, etiquetas o pictogramas de peligro",
            "visto": "si",
            "detalle": "Algunos envases muestran etiquetas blancas y marcas como 'UNIVERSAL'."
          },
          {
            "t": "estanterías, pallets o zona destinada a almacenar",
            "visto": "si",
            "detalle": "Los envases están organizados sobre pallets de madera formando estantes."
          }
        ],
        "vistos": 3,
        "ok": true
      },
      "categoria": "bodega_sustancias",
      "nombre": "Sustancias peligrosas",
      "familia": "sustancias",
      "subtipo": "envases almacenados",
      "entorno": "industria",
      "fuera": [],
      "resumen": "Se observan envases almacenados en pallets apilados, con algunos envases que presentan corrosión y abolladuras, y sin señalización visible ni extintores en la zona.",
      "puntos": [
        {
          "id": "B1",
          "texto": "Envases en buen estado: sin corrosión avanzada, abolladuras graves ni fugas",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 9",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Se observan envases con corrosión avanzada y abolladuras graves, especialmente en las filas inferiores centrales y laterales.",
          "caja": [
            220,
            600,
            380,
            750
          ],
          "verificado": true,
          "cerca": "Se observan envases con corrosión avanzada y abolladuras graves en la fila central."
        },
        {
          "id": "B2",
          "texto": "Envases etiquetados, con etiqueta legible en español",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 9",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes."
            },
            {
              "ref": "DS 43 · art. 183",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689480",
              "t": "Artículo 183.- Los envases y los envases/embalajes se etiquetarán en idioma español, con letra legible. Los elementos del recuadro de seguridad deberán destacar claramente del fondo y tener un tamaño y llevar una separación que faciliten su lectura, deberán estar dispuestos en forma horizontal cuando el envase se encuentre en su posición normal."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "Las etiquetas visibles son pequeñas y no se puede confirmar si son legibles ni si están en español.",
          "caja": []
        },
        {
          "id": "B3",
          "texto": "Zona señalizada y demarcada, con pictogramas de las clases almacenadas",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 30",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689306",
              "t": "Artículo 30.- La zona destinada para el almacenamiento de las sustancias peligrosas deberá estar claramente señalizada y demarcada, adicionalmente, deberá contar con el pictograma que indique las clases y divisiones de las sustancias en ella almacenadas, de acuerdo a la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha\n23.04.2004, del Ministerio de Transporte y Telecomunicaciones.\n   Se deberá mantener una distancia de 2,4 m entre sustancias peligrosas incompatibles. Además, se deberá mantener una distancia de 1,2 m entre las sustancias peligrosas y otras sustancias o mercancías no peligrosas."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan señalizaciones ni pictogramas de clases de sustancias en el entorno visible.",
          "caja": []
        },
        {
          "id": "B4",
          "texto": "Control de derrames: bandejas, pretil, piso con pendiente o material absorbente a mano",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 21",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo."
            },
            {
              "ref": "DS 43 · art. 52",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689329",
              "t": "Artículo 52.- Las bodegas para sustancias peligrosas que contengan líquidos deberán tener un sistema de control de derrames, el que podrá consistir en:\n   . Bodega auto contenida, con piso de pendiente no inferior a 0,5% que permita el escurrimiento del derrame hacia una zona de acumulación o con contención perimetral a través de soleras y/o lomos de toro.\n . Sistema de recolección conectado a una cámara de contención estanca la que tendrá un volumen equivalente al 110% del envase de mayor capacidad, con un mínimo de 1,1 m3.\n   En el caso de almacenarse sustancias incompatibles, se deberá contar con sistemas de contención separados.\n   Adicionalmente, tanto las bodegas que almacenen líquidos como sólidos, deberán contar con agentes de absorción y/o neutralización."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan bandejas de derrame, pretiles, ni material absorbente a mano en la zona de almacenamiento.",
          "caja": []
        },
        {
          "id": "B5",
          "texto": "Extintores presentes, visibles y sin obstáculos",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 21",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo."
            },
            {
              "ref": "DS 594 · art. 47",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643132",
              "t": "Artículo 47: Los extintores se ubicarán en sitios de fácil acceso y clara identificación, libres de cualquier obstáculo, y estarán en condiciones de funcionamiento máximo. Se colocarán a una altura máxima de 1,30 metros, medidos desde el suelo hasta la base del extintor y estarán debidamente señalizados."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan extintores en la imagen ni en su entorno inmediato.",
          "caja": []
        },
        {
          "id": "B6",
          "texto": "Sustancias incompatibles separadas por barrera física o 2,4 m",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 22",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689297",
              "t": "Artículo 22.- Las sustancias incompatibles deberán estar separadas por alguna barrera física o una distancia de 2.4 m y no podrán compartir el mismo sistema de contención de derrames."
            },
            {
              "ref": "DS 43 · art. 55",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689332",
              "t": "Artículo 55.- Las sustancias incompatibles entre sí deberán estar a una distancia mínima de 2,4 m entre ellas, la que no necesariamente debe ser libre."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No es posible determinar la separación entre sustancias incompatibles sin información de su contenido.",
          "caja": []
        },
        {
          "id": "B7",
          "texto": "Pilas sobre el piso de máximo 1 m de alto, salvo envases más altos o encajables",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 56",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689333",
              "t": "Artículo 56.- Las pilas de sustancias dispuestas directamente sobre el piso tendrán como máximo un largo de 8 m, un ancho de 6 m y una altura de 1 m, excepto cuando el envase supere esta altura o cuando los envases sean del tipo encajables, en cuyo caso la altura podrá ser hasta 1,5 m.\nLa altura de estas pilas podrá ser de 2 m cuando las sustancias se encuentren en sacos y de 3,5 m cuando las sustancias se encuentren en maxisacos."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Los envases están apilados en más de 5 niveles sobre pallets, superando los 2 metros de altura, excediendo el límite de 1 m para pilas sobre el piso.",
          "caja": [
            0,
            0,
            1000,
            960
          ],
          "verificado": true,
          "cerca": "Se observan pilas de tambores apilados sobre pallets que superan claramente el metro de altura, con al menos cinco niveles de tambores apilados verticalmente."
        },
        {
          "id": "B8",
          "texto": "Piso sólido, liso e impermeable",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 28",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689304",
              "t": "Artículo 28.- Las bodegas comunes donde se almacenen sustancias peligrosas deberán ser cerradas en su perímetro por muros, resistentes a la acción del agua, con piso sólido, liso e impermeable y no poroso. En todo caso, su diseño y características de construcción deberán ajustarse a lo señalado en la Ordenanza General de Urbanismo y Construcción (OGUC), considerando el estudio de carga combustible. Adicionalmente, estas bodegas deberán tener un sistema de contención local de derrames con agentes de absorción y/o neutralización que evite comprometer las áreas adyacentes.\n   Sin perjuicio de lo que determine la OGUC respecto a la resistencia al fuego de los muros perimetrales de la bodega, la RF mínima de éstos será de 15 minutos."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "El piso visible es asfalto, pero no se puede confirmar si es sólido, liso e impermeable en toda el área de almacenamiento.",
          "caja": []
        },
        {
          "id": "B9",
          "texto": "Cilindros en posición vertical y asegurados; llenos separados de vacíos",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 67",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689346",
              "t": "Artículo 67.- Los cilindros llenos deberán almacenarse separados de los vacíos. Estas distintas áreas deben estar claramente señalizadas de acuerdo a su condición de \"Cilíndros Llenos\" o \"Cilíndros Vacíos\".\nTodos los cilindros deben ser dispuestos en su posición normal de uso o almacenamiento y sujetos, encadenados a la pared o con una baranda o sistema que impida su volcamiento."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan cilindros en la imagen, solo envases metálicos tipo barril.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Hojas de datos de seguridad y compatibilidad real de los productos",
        "Cantidades almacenadas frente a los umbrales del DS 43",
        "Autorización sanitaria de la bodega",
        "Plan de emergencia y capacitación del personal",
        "Ventilación y concentraciones ambientales (medición)"
      ],
      "ms": 24841
    }
  },
  {
    "img": "s/b2.jpg",
    "title": "Tambores apilados",
    "credit": "Legal Committee 100th session - Photo Album · imo.un · CC BY 2.0",
    "link": "https://www.flickr.com/photos/62937028@N02/8568414991",
    "rep": {
      "etapas": {
        "identificar": 36958,
        "confirmar": 2612,
        "revisar": 8471
      },
      "razonado": false,
      "ident": {
        "categoria": "bodega_sustancias",
        "subtipo": "envases de productos químicos o combustibles almacenados",
        "entorno": "industria",
        "descripcion": "Ocho bidones metálicos de 200 litros apilados en dos pallets, con señales de óxido y residuos de contenido.",
        "evidencia": [
          "Bidones cilíndricos metálicos de gran capacidad",
          "Apilados sobre pallets de madera",
          "Etiquetas y marcas de contenido ilegibles o deterioradas",
          "Óxido y manchas de líquidos en las superficies"
        ],
        "alternativas": [
          {
            "categoria": "estanque",
            "por_que_no": "No se trata de un tanque fijo de almacenamiento, sino de bidones móviles"
          },
          {
            "categoria": "cilindros_gas",
            "por_que_no": "Los envases son bidones de 200 litros, no cilindros de gas a presión"
          },
          {
            "categoria": "otro",
            "por_que_no": "La categoría bodega_sustancias describe con precisión el equipo observado"
          }
        ],
        "confianza": 0.95,
        "caja_clave": [
          0,
          0,
          1000,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "tambores, bidones, sacos u otros envases de productos",
            "visto": "si",
            "detalle": "Ocho tambores metálicos apilados en dos niveles, de colores azul, verde, rojo, negro y blanco, con óxido y desgaste."
          },
          {
            "t": "rótulos, etiquetas o pictogramas de peligro",
            "visto": "no",
            "detalle": "No se aprecian rótulos, etiquetas ni pictogramas de peligro legibles en los envases."
          },
          {
            "t": "estanterías, pallets o zona destinada a almacenar",
            "visto": "si",
            "detalle": "Los tambores están apoyados sobre pallets de madera y plástico azul."
          }
        ],
        "vistos": 2,
        "ok": true
      },
      "categoria": "bodega_sustancias",
      "nombre": "Sustancias peligrosas",
      "familia": "sustancias",
      "subtipo": "envases de productos químicos o combustibles almacenados",
      "entorno": "industria",
      "fuera": [],
      "resumen": "Se observan ocho envases metálicos apilados en dos pallets con signos de corrosión y deterioro, sin señalización visible ni elementos de control de derrames en la imagen.",
      "puntos": [
        {
          "id": "B1",
          "texto": "Envases en buen estado: sin corrosión avanzada, abolladuras graves ni fugas",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 9",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Los envases presentan corrosión avanzada, abolladuras y deterioro visible en varias superficies.",
          "caja": [
            30,
            60,
            960,
            940
          ],
          "verificado": true,
          "cerca": "Se observan envases con corrosión avanzada y abolladuras graves, especialmente en los bidones de los extremos inferiores y superiores, lo que indica que no se encuentran en buen estado."
        },
        {
          "id": "B2",
          "texto": "Envases etiquetados, con etiqueta legible en español",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 9",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes."
            },
            {
              "ref": "DS 43 · art. 183",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689480",
              "t": "Artículo 183.- Los envases y los envases/embalajes se etiquetarán en idioma español, con letra legible. Los elementos del recuadro de seguridad deberán destacar claramente del fondo y tener un tamaño y llevar una separación que faciliten su lectura, deberán estar dispuestos en forma horizontal cuando el envase se encuentre en su posición normal."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se logran leer etiquetas legibles en español en los envases desde esta perspectiva.",
          "caja": []
        },
        {
          "id": "B3",
          "texto": "Zona señalizada y demarcada, con pictogramas de las clases almacenadas",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 30",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689306",
              "t": "Artículo 30.- La zona destinada para el almacenamiento de las sustancias peligrosas deberá estar claramente señalizada y demarcada, adicionalmente, deberá contar con el pictograma que indique las clases y divisiones de las sustancias en ella almacenadas, de acuerdo a la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha\n23.04.2004, del Ministerio de Transporte y Telecomunicaciones.\n   Se deberá mantener una distancia de 2,4 m entre sustancias peligrosas incompatibles. Además, se deberá mantener una distancia de 1,2 m entre las sustancias peligrosas y otras sustancias o mercancías no peligrosas."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia señalización ni pictogramas de clases almacenadas en el entorno visible.",
          "caja": []
        },
        {
          "id": "B4",
          "texto": "Control de derrames: bandejas, pretil, piso con pendiente o material absorbente a mano",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 21",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo."
            },
            {
              "ref": "DS 43 · art. 52",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689329",
              "t": "Artículo 52.- Las bodegas para sustancias peligrosas que contengan líquidos deberán tener un sistema de control de derrames, el que podrá consistir en:\n   . Bodega auto contenida, con piso de pendiente no inferior a 0,5% que permita el escurrimiento del derrame hacia una zona de acumulación o con contención perimetral a través de soleras y/o lomos de toro.\n . Sistema de recolección conectado a una cámara de contención estanca la que tendrá un volumen equivalente al 110% del envase de mayor capacidad, con un mínimo de 1,1 m3.\n   En el caso de almacenarse sustancias incompatibles, se deberá contar con sistemas de contención separados.\n   Adicionalmente, tanto las bodegas que almacenen líquidos como sólidos, deberán contar con agentes de absorción y/o neutralización."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan bandejas de derrame, pretiles, pendiente de piso ni material absorbente a mano.",
          "caja": []
        },
        {
          "id": "B5",
          "texto": "Extintores presentes, visibles y sin obstáculos",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 21",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo."
            },
            {
              "ref": "DS 594 · art. 47",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643132",
              "t": "Artículo 47: Los extintores se ubicarán en sitios de fácil acceso y clara identificación, libres de cualquier obstáculo, y estarán en condiciones de funcionamiento máximo. Se colocarán a una altura máxima de 1,30 metros, medidos desde el suelo hasta la base del extintor y estarán debidamente señalizados."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se ven extintores en la imagen.",
          "caja": []
        },
        {
          "id": "B6",
          "texto": "Sustancias incompatibles separadas por barrera física o 2,4 m",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 22",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689297",
              "t": "Artículo 22.- Las sustancias incompatibles deberán estar separadas por alguna barrera física o una distancia de 2.4 m y no podrán compartir el mismo sistema de contención de derrames."
            },
            {
              "ref": "DS 43 · art. 55",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689332",
              "t": "Artículo 55.- Las sustancias incompatibles entre sí deberán estar a una distancia mínima de 2,4 m entre ellas, la que no necesariamente debe ser libre."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No es posible determinar si hay separación de sustancias incompatibles por barrera física o distancia.",
          "caja": []
        },
        {
          "id": "B7",
          "texto": "Pilas sobre el piso de máximo 1 m de alto, salvo envases más altos o encajables",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 56",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689333",
              "t": "Artículo 56.- Las pilas de sustancias dispuestas directamente sobre el piso tendrán como máximo un largo de 8 m, un ancho de 6 m y una altura de 1 m, excepto cuando el envase supere esta altura o cuando los envases sean del tipo encajables, en cuyo caso la altura podrá ser hasta 1,5 m.\nLa altura de estas pilas podrá ser de 2 m cuando las sustancias se encuentren en sacos y de 3,5 m cuando las sustancias se encuentren en maxisacos."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia el piso ni la altura de apilamiento respecto al suelo para validar esta condición.",
          "caja": []
        },
        {
          "id": "B8",
          "texto": "Piso sólido, liso e impermeable",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 28",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689304",
              "t": "Artículo 28.- Las bodegas comunes donde se almacenen sustancias peligrosas deberán ser cerradas en su perímetro por muros, resistentes a la acción del agua, con piso sólido, liso e impermeable y no poroso. En todo caso, su diseño y características de construcción deberán ajustarse a lo señalado en la Ordenanza General de Urbanismo y Construcción (OGUC), considerando el estudio de carga combustible. Adicionalmente, estas bodegas deberán tener un sistema de contención local de derrames con agentes de absorción y/o neutralización que evite comprometer las áreas adyacentes.\n   Sin perjuicio de lo que determine la OGUC respecto a la resistencia al fuego de los muros perimetrales de la bodega, la RF mínima de éstos será de 15 minutos."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "El piso no está visible en la imagen.",
          "caja": []
        },
        {
          "id": "B9",
          "texto": "Cilindros en posición vertical y asegurados; llenos separados de vacíos",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 67",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689346",
              "t": "Artículo 67.- Los cilindros llenos deberán almacenarse separados de los vacíos. Estas distintas áreas deben estar claramente señalizadas de acuerdo a su condición de \"Cilíndros Llenos\" o \"Cilíndros Vacíos\".\nTodos los cilindros deben ser dispuestos en su posición normal de uso o almacenamiento y sujetos, encadenados a la pared o con una baranda o sistema que impida su volcamiento."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se identifican cilindros en la imagen, solo envases metálicos tipo barril.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Hojas de datos de seguridad y compatibilidad real de los productos",
        "Cantidades almacenadas frente a los umbrales del DS 43",
        "Autorización sanitaria de la bodega",
        "Plan de emergencia y capacitación del personal",
        "Ventilación y concentraciones ambientales (medición)"
      ],
      "ms": 50483
    }
  },
  {
    "img": "s/b3.jpg",
    "title": "Tambores oxidados",
    "credit": "Fuel drums, so pretty, who'd have thought?!! · LightStalking · CC BY 2.0",
    "link": "https://www.flickr.com/photos/45117421@N08/6758442387",
    "rep": {
      "etapas": {
        "identificar": 3199,
        "confirmar": 2019,
        "revisar": 8452
      },
      "razonado": false,
      "ident": {
        "categoria": "bodega_sustancias",
        "subtipo": "envases de productos químicos o combustibles almacenados",
        "entorno": "industria",
        "descripcion": "Bodega o área de almacenamiento de envases metálicos (barriles y bidones) con residuos de sustancias químicas o combustibles.",
        "evidencia": [
          "Numerosos barriles metálicos apilados y dispuestos en filas",
          "Tapas y cuerpos con óxido, pintura desgastada y restos de etiquetas",
          "Colores variados (rojo, verde, azul, amarillo) típicos de identificación de contenidos",
          "Ubicación sobre base de concreto en área abierta"
        ],
        "alternativas": [
          {
            "categoria": "estanque",
            "por_que_no": "No se observa un estanque de almacenamiento fijo, solo envases móviles tipo barril"
          },
          {
            "categoria": "otro",
            "por_que_no": "La categoría bodega_sustancias describe con precisión el conjunto de envases almacenados"
          }
        ],
        "confianza": 0.95,
        "caja_clave": [
          0,
          0,
          1000,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "tambores, bidones, sacos u otros envases de productos",
            "visto": "si",
            "detalle": "Numerosos tambores metálicos de colores (rojo, verde, azul, amarillo, gris) apilados, muy oxidados y con tapas visibles."
          },
          {
            "t": "rótulos, etiquetas o pictogramas de peligro",
            "visto": "no",
            "detalle": "No se aprecian rótulos, etiquetas ni pictogramas de peligro legibles en los envases."
          },
          {
            "t": "estanterías, pallets o zona destinada a almacenar",
            "visto": "no",
            "detalle": "No se ven estanterías ni pallets; los tambores están apilados directamente sobre una superficie de concreto."
          }
        ],
        "vistos": 1,
        "ok": false
      },
      "categoria": "bodega_sustancias",
      "nombre": "Sustancias peligrosas",
      "familia": "sustancias",
      "subtipo": "envases de productos químicos o combustibles almacenados",
      "entorno": "industria",
      "fuera": [],
      "resumen": "Se observa un almacenamiento de envases metálicos en estado crítico, con corrosión avanzada, sin etiquetas legibles, sin señalización de zona, sin control de derrames y sin extintores visibles. Las condiciones representan un riesgo inmediato de derrame y exposición a sustancias peligrosas.",
      "puntos": [
        {
          "id": "B1",
          "texto": "Envases en buen estado: sin corrosión avanzada, abolladuras graves ni fugas",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 9",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Los envases presentan corrosión avanzada, abolladuras y óxido generalizado; varios muestran signos de posible fuga o deterioro estructural.",
          "caja": [
            0,
            0,
            1000,
            950
          ],
          "verificado": true,
          "cerca": "Los envases presentan corrosión avanzada y óxido visible en múltiples superficies, lo que indica que no se encuentran en buen estado."
        },
        {
          "id": "B2",
          "texto": "Envases etiquetados, con etiqueta legible en español",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 9",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689283",
              "t": "Artículo 9.- Las sustancias peligrosas deberán estar contenidas en envases, debidamente etiquetadas según lo estipulado en el Título XII del presente reglamento, excepto aquellas que se almacenen a granel.\n   Los envases de las sustancias deberán estar diseñados de forma que impidan las pérdidas de contenido; deben ser adecuados para su conservación, ser de un material químicamente compatible con la sustancia, de difícil ruptura y que minimice eventuales accidentes."
            },
            {
              "ref": "DS 43 · art. 183",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689480",
              "t": "Artículo 183.- Los envases y los envases/embalajes se etiquetarán en idioma español, con letra legible. Los elementos del recuadro de seguridad deberán destacar claramente del fondo y tener un tamaño y llevar una separación que faciliten su lectura, deberán estar dispuestos en forma horizontal cuando el envase se encuentre en su posición normal."
            }
          ],
          "estado": "no_cumple",
          "observacion": "No se observan etiquetas legibles en español en ninguno de los envases; solo hay pintura de colores sin información de contenido ni peligros.",
          "caja": [
            0,
            0,
            1000,
            950
          ],
          "verificado": true,
          "cerca": "Se observan envases metálicos apilados, pero ninguno presenta etiquetas legibles en español; las superficies muestran solo pintura desgastada y óxido."
        },
        {
          "id": "B3",
          "texto": "Zona señalizada y demarcada, con pictogramas de las clases almacenadas",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 30",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689306",
              "t": "Artículo 30.- La zona destinada para el almacenamiento de las sustancias peligrosas deberá estar claramente señalizada y demarcada, adicionalmente, deberá contar con el pictograma que indique las clases y divisiones de las sustancias en ella almacenadas, de acuerdo a la NCh 2190 Of.2003, oficializada por decreto Nº 43 de fecha\n23.04.2004, del Ministerio de Transporte y Telecomunicaciones.\n   Se deberá mantener una distancia de 2,4 m entre sustancias peligrosas incompatibles. Además, se deberá mantener una distancia de 1,2 m entre las sustancias peligrosas y otras sustancias o mercancías no peligrosas."
            }
          ],
          "estado": "no_cumple",
          "observacion": "No hay señalización ni demarcación de zona de almacenamiento, ni pictogramas de clases de peligro visibles en el entorno.",
          "caja": [
            0,
            0,
            1000,
            950
          ],
          "verificado": true,
          "cerca": "Se observan tambores apilados con colores y óxido, pero no hay señalización visible ni pictogramas de las clases almacenadas en la zona."
        },
        {
          "id": "B4",
          "texto": "Control de derrames: bandejas, pretil, piso con pendiente o material absorbente a mano",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 21",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo."
            },
            {
              "ref": "DS 43 · art. 52",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689329",
              "t": "Artículo 52.- Las bodegas para sustancias peligrosas que contengan líquidos deberán tener un sistema de control de derrames, el que podrá consistir en:\n   . Bodega auto contenida, con piso de pendiente no inferior a 0,5% que permita el escurrimiento del derrame hacia una zona de acumulación o con contención perimetral a través de soleras y/o lomos de toro.\n . Sistema de recolección conectado a una cámara de contención estanca la que tendrá un volumen equivalente al 110% del envase de mayor capacidad, con un mínimo de 1,1 m3.\n   En el caso de almacenarse sustancias incompatibles, se deberá contar con sistemas de contención separados.\n   Adicionalmente, tanto las bodegas que almacenen líquidos como sólidos, deberán contar con agentes de absorción y/o neutralización."
            }
          ],
          "estado": "no_cumple",
          "observacion": "No se ven bandejas de contención, pretiles, piso con pendiente ni material absorbente a mano para control de derrames.",
          "caja": [
            0,
            700,
            1000,
            1000
          ],
          "verificado": true,
          "cerca": "Se observan tambores oxidados y deteriorados apoyados sobre un pretil de concreto sin bandejas de contención, sin pendiente visible para drenaje y sin material absorbente a la mano, lo que impide el control adecuado de posibles derrames."
        },
        {
          "id": "B5",
          "texto": "Extintores presentes, visibles y sin obstáculos",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 21",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689296",
              "t": "Artículo 21.- El lugar donde estén almacenadas las sustancias peligrosas deberá contar con un sistema de control de derrames, que puede consistir en materiales absorbentes o bandejas de contención, y contar con un sistema manual de extinción de incendios, a base de extintores, compatibles con los productos almacenados, en que las cantidades, distribución, potencial de extinción y mantenimiento, entre otros aspectos, deberán estar de acuerdo a lo establecido en el decreto Nº 594 de 1999, del Ministerio de Salud, Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo."
            },
            {
              "ref": "DS 594 · art. 47",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643132",
              "t": "Artículo 47: Los extintores se ubicarán en sitios de fácil acceso y clara identificación, libres de cualquier obstáculo, y estarán en condiciones de funcionamiento máximo. Se colocarán a una altura máxima de 1,30 metros, medidos desde el suelo hasta la base del extintor y estarán debidamente señalizados."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "La imagen no muestra extintores; no se puede determinar si están presentes fuera del encuadre. Falta ver el área circundante para confirmar presencia, visibilidad y acceso sin obstáculos.",
          "caja": []
        },
        {
          "id": "B6",
          "texto": "Sustancias incompatibles separadas por barrera física o 2,4 m",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 22",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689297",
              "t": "Artículo 22.- Las sustancias incompatibles deberán estar separadas por alguna barrera física o una distancia de 2.4 m y no podrán compartir el mismo sistema de contención de derrames."
            },
            {
              "ref": "DS 43 · art. 55",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689332",
              "t": "Artículo 55.- Las sustancias incompatibles entre sí deberán estar a una distancia mínima de 2,4 m entre ellas, la que no necesariamente debe ser libre."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No es posible identificar sustancias ni separaciones por incompatibilidad sin etiquetas ni documentación. Falta ver el inventario y la disposición relativa de los envases.",
          "caja": []
        },
        {
          "id": "B7",
          "texto": "Pilas sobre el piso de máximo 1 m de alto, salvo envases más altos o encajables",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 56",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689333",
              "t": "Artículo 56.- Las pilas de sustancias dispuestas directamente sobre el piso tendrán como máximo un largo de 8 m, un ancho de 6 m y una altura de 1 m, excepto cuando el envase supere esta altura o cuando los envases sean del tipo encajables, en cuyo caso la altura podrá ser hasta 1,5 m.\nLa altura de estas pilas podrá ser de 2 m cuando las sustancias se encuentren en sacos y de 3,5 m cuando las sustancias se encuentren en maxisacos."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Los envases están apilados en múltiples niveles, superando claramente el metro de altura, sin ser encajables ni contar con estiba segura.",
          "caja": [
            0,
            0,
            1000,
            900
          ],
          "verificado": true,
          "cerca": "Se observan pilas de bidones sobre el piso que superan claramente el metro de altura, apilados en varias capas y sin estiba visible que limite la altura."
        },
        {
          "id": "B8",
          "texto": "Piso sólido, liso e impermeable",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 43 · art. 28",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689304",
              "t": "Artículo 28.- Las bodegas comunes donde se almacenen sustancias peligrosas deberán ser cerradas en su perímetro por muros, resistentes a la acción del agua, con piso sólido, liso e impermeable y no poroso. En todo caso, su diseño y características de construcción deberán ajustarse a lo señalado en la Ordenanza General de Urbanismo y Construcción (OGUC), considerando el estudio de carga combustible. Adicionalmente, estas bodegas deberán tener un sistema de contención local de derrames con agentes de absorción y/o neutralización que evite comprometer las áreas adyacentes.\n   Sin perjuicio de lo que determine la OGUC respecto a la resistencia al fuego de los muros perimetrales de la bodega, la RF mínima de éstos será de 15 minutos."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "El piso visible es de hormigón, pero no se puede confirmar si es sólido, liso e impermeable en toda el área de almacenamiento. Falta ver el estado general del pavimento y posibles grietas o juntas.",
          "caja": [
            0,
            700,
            1000,
            1000
          ]
        },
        {
          "id": "B9",
          "texto": "Cilindros en posición vertical y asegurados; llenos separados de vacíos",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 43 · art. 67",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=1088802&idParte=9689346",
              "t": "Artículo 67.- Los cilindros llenos deberán almacenarse separados de los vacíos. Estas distintas áreas deben estar claramente señalizadas de acuerdo a su condición de \"Cilíndros Llenos\" o \"Cilíndros Vacíos\".\nTodos los cilindros deben ser dispuestos en su posición normal de uso o almacenamiento y sujetos, encadenados a la pared o con una baranda o sistema que impida su volcamiento."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se identifican cilindros de gas en la imagen; solo envases metálicos tipo tambor. Falta ver si hay cilindros en otra área del sitio.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Hojas de datos de seguridad y compatibilidad real de los productos",
        "Cantidades almacenadas frente a los umbrales del DS 43",
        "Autorización sanitaria de la bodega",
        "Plan de emergencia y capacitación del personal",
        "Ventilación y concentraciones ambientales (medición)"
      ],
      "ms": 17684
    }
  },
  {
    "img": "s/f1.jpg",
    "title": "Máquina textil",
    "credit": "Textile Machine · darkday. · CC BY 2.0",
    "link": "https://www.flickr.com/photos/99649389@N02/14437232660",
    "rep": {
      "etapas": {
        "identificar": 3543,
        "confirmar": 18172,
        "revisar": 8171
      },
      "razonado": false,
      "ident": {
        "categoria": "maquina",
        "subtipo": "textil industrial (partes móviles)",
        "entorno": "no_claro",
        "descripcion": "Máquina textil antigua con poleas, engranajes y ejes de transmisión, en estado de abandono dentro de una nave industrial.",
        "evidencia": [
          "Poleas de gran diámetro con correas y engranajes visibles",
          "Ejes y barras de transmisión que conectan mecanismos",
          "Estructura metálica pesada típica de maquinaria textil",
          "Lana o fibra acumulada sobre partes móviles"
        ],
        "alternativas": [
          {
            "categoria": "area_trabajo",
            "por_que_no": "El equipo concreto ocupa la mayor parte de la imagen, por lo que no corresponde clasificar solo como zona de operación"
          },
          {
            "categoria": "canalizacion",
            "por_que_no": "No se observan ductos, bandejas ni cajas de paso como elemento principal"
          }
        ],
        "confianza": 0.92,
        "caja_clave": [
          80,
          50,
          1000,
          990
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "poleas, engranajes, ejes u otras partes móviles",
            "visto": "si",
            "detalle": "Se ven múltiples poleas, engranajes y ejes metálicos en la estructura verde."
          },
          {
            "t": "motor o accionamiento",
            "visto": "no",
            "detalle": "No se identifica un motor o accionamiento eléctrico visible."
          },
          {
            "t": "carcasa o estructura de la máquina",
            "visto": "si",
            "detalle": "Se observa una carcasa o estructura metálica verde que sostiene los componentes."
          }
        ],
        "vistos": 2,
        "ok": true
      },
      "categoria": "maquina",
      "nombre": "Máquina",
      "familia": "faena",
      "subtipo": "textil industrial (partes móviles)",
      "entorno": "no_claro",
      "fuera": [],
      "resumen": "La máquina textil industrial presenta partes móviles expuestas y deterioradas, con acumulación de residuos y falta de protección, lo que genera riesgo de atrapamiento y contacto con elementos en movimiento.",
      "puntos": [],
      "otros": [
        {
          "titulo": "Partes móviles expuestas sin protección",
          "observacion": "Engranajes, poleas y ejes giratorios están al descubierto y accesibles, sin carenados ni protectores que impidan el contacto accidental.",
          "severidad": "alta",
          "caja": [
            80,
            50,
            830,
            620
          ],
          "busqueda": "Las partes móviles de las máquinas deben estar protegidas con carenados o protectores que impidan el acceso de personas a zonas de riesgo mecánico.",
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
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 41",
              "h": "TITULO II NORMAS GENERALES › Capítulo Segundo De las Obligaciones de los Trabajadores",
              "t": "Artículo 41.- Se prohíbe a los trabajadores, cuya labor se ejecuta cerca de maquinarias en movimiento y/o sistemas de transmisión descubiertos, el uso de elementos sueltos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649734"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 56",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 56.- Todo sistema de transmisión de movimientos deberá estar convenientemente protegido para evitar el contacto accidental con personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649750"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            }
          ],
          "exigencia": "Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico.",
          "accion": "Instalar carenados o protectores fijos en engranajes, poleas y ejes giratorios que impidan el contacto accidental.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Acumulación de residuos y fibras sobre la máquina",
          "observacion": "Existen grandes cantidades de pelusa, fibras y restos de material textil depositados sobre las partes móviles y estructuras del equipo, favoreciendo incendios y fallas.",
          "severidad": "alta",
          "caja": [
            0,
            180,
            1000,
            999
          ],
          "busqueda": "Los equipos y áreas de trabajo deben mantenerse libres de acumulaciones de materiales combustibles o residuos que puedan generar riesgos de incendio o interferir con el funcionamiento seguro.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 44",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO III De la Prevención y Protección contra Incendios",
              "t": "Artículo 44: En todo lugar de trabajo deberán implementarse las medidas necesarias para la prevención de incendios con el fin de disminuir la posibilidad de inicio de un fuego, controlando las cargas combustibles y las fuentes de calor e inspeccionando las instalaciones a través de un programa preestablecido.\n El control de los productos combustibles deberá incluir medidas tales como programas de orden y limpieza y racionalización de la cantidad de materiales combustibles, tanto almacenados como en proceso.   El control de las fuentes de calor deberá adoptarse en todos aquellos lugares o procesos donde se cuente con equipos e instalaciones eléctricas, maquinarias que puedan originar fricción, chispas mecánicas o de combustión y/o superficies calientes, cuidando que su diseño, ubicación, estado y condiciones de operación, esté de acuerdo a la reglamentación vigente sobre la materia.   En áreas donde exista una gran cantidad de productos combustibles o donde se almacenen, trasvasijen o procesen sustancias inflamables o de fácil combustión, deberá establecerse una estricta prohibición de fumar y encender fuegos, debiendo existir procedimientos específicos de seguridad para la realización de labores de soldadura, corte de metales o similares.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643128"
            }
          ],
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
              "ref": "DS 132 · art. 304",
              "h": "TITULO V EXPLOTACION MINERIA DEL CARBON › Capítulo Quinto Prevención y Control de Incendios y Explosiones",
              "t": "Artículo 304.- Las correas transportadoras deben instalarse a la distancia necesaria de las cajas y del piso, a fin de que se pueda recoger sin peligro el carbón derramado y a la vez se puedan inspeccionar cómodamente todos los elementos móviles.\n El material de construcción de las correas transportadoras debe ser incombustible o resistente al fuego. Sus partes mecánicas deben estar siempre engrasadas y los rodillos deben hallarse constantemente libres de polvo de carbón y de toda obstrucción que pueda provocar fricción. Respecto de estas correas deben adoptarse todas las medidas razonables para prevenir la acumulación de polvo de carbón en, o alrededor de sus partes en movimiento donde la fricción pudiere causar calentamiento.\n Las correas transportadoras deberán ser inspeccionadas periódicamente a intervalos cortos cuando estén en funcionamiento; a intervalos regulares, por lo menos durante dos horas después de paradas o después de cualquier avería de funcionamiento; y, a horas apropiadas, en los días en que no funcionen.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650024"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 199",
              "h": "TITULO III EXPLOTACION DE MINAS SUBTERRANEAS › Capítulo Octavo Prevención y Control de Incendios",
              "t": "Artículo 199.- Los brocales y accesos a la mina, se deberán mantener limpios de toda acumulación de desechos o materiales combustibles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649905"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ],
          "exigencia": "Controlar las cargas combustibles mediante programas de orden y limpieza y racionalizar la cantidad de materiales combustibles en proceso.",
          "accion": "Retirar pelusa, fibras y residuos textiles de las partes móviles y estructuras, e implementar limpieza periódica.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Componentes oxidados y deteriorados",
          "observacion": "Varias piezas metálicas, ejes y soportes presentan corrosión visible, desgaste y falta de mantenimiento, comprometiendo la integridad estructural y mecánica.",
          "severidad": "alta",
          "caja": [
            250,
            330,
            999,
            999
          ],
          "busqueda": "Los componentes estructurales y mecánicos de las máquinas deben mantenerse en buen estado, libres de corrosión o deterioro que afecte su resistencia y funcionamiento seguro.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 36",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119"
            }
          ],
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 390",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 390.- Las máquinas accionadas por correa, a las cuales sea necesario detener o poner en marcha sin interferir con el funcionamiento del motor (polea loca), estarán acondicionadas en forma permanente con un dispositivo mecánico adecuado para tal efecto.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650123"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 6",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 6°: Las paredes interiores de los lugares de trabajo, los cielos rasos, puertas y ventanas y demás elementos estructurales, serán mantenidos en buen estado de limpieza y conservación, y serán pintados, cuando el caso lo requiera, de acuerdo a la naturaleza de las labores que se ejecutan.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643083"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 39",
              "h": "TITULO II NORMAS GENERALES › Capítulo Segundo De las Obligaciones de los Trabajadores",
              "t": "Artículo 39.- Sin perjuicio de las mantenciones y/o revisiones realizadas por personal especialista; es obligación de todo trabajador verificar, al inicio de su jornada de trabajo, el buen funcionamiento de los equipos, maquinarias y elementos de control con que deba efectuar su labor. También, verificará el buen estado de las estructuras, fortificación, materiales y el orden y limpieza del lugar de trabajo.\n Si el trabajador observa defectos o fallas en los equipos y sistemas antes mencionados en cualquier lugar de la faena, debe dar cuenta de inmediato a sus superiores, sin perjuicio de las medidas que pueda tomar, conforme a lo que él este autorizado.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649732"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 668",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo quinto      Servicios para la minería › Párrafo 2.      Mantención",
              "t": "Artículo 668.- La empresa minera deberá mantener registros, tanto de las inspecciones de la empresa o productor minero, como del control y mantenimiento de todos los equipos e instalaciones eléctricas y mecánicas del proceso minero. El productor o empresa minera deberá verificar, a lo menos una vez al año, el estado mecánico y eléctrico de las instalaciones y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313377"
            }
          ],
          "exigencia": "Las maquinarias, instalaciones, herramientas y equipos se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
          "accion": "Reparar o reemplazar piezas oxidadas y deterioradas, ejes y soportes, y establecer mantención preventiva.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Falta de señalización de riesgos",
          "observacion": "No se observan letreros, etiquetas o marcas de advertencia sobre zonas de peligro, partes en movimiento o procedimientos de seguridad en la máquina.",
          "severidad": "alta",
          "caja": [
            0,
            0,
            1000,
            999
          ],
          "busqueda": "Las máquinas y equipos deben contar con señalización visible y legible que advierta sobre los riesgos asociados a su operación y las zonas de peligro.",
          "citas": [],
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
              "ref": "DS 132 · art. 566",
              "h": "TITULO XI GENERALIDADES DE EXPLOSIVOS EN LA MINERIA › Capítulo Tercero Perforación y Tronadura",
              "t": "Artículo 566.- Será obligatorio el uso de señalización de advertencia en el área, como asimismo el uso de distintivo especial para el personal que interviene en dicha operación.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650309"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 409",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 409.- Las personas encargadas de la operación de equipos móviles o de máquinas portátiles eléctricas u otras similares, deberán:\n\na) Desenergizar y/o desconectar el equipo cada vez que deban abandonarlo.\nb) En caso de desperfectos, dejar la información pertinente en el equipo y comunicar de ello a la supervisión respectiva.\nc) Por ningún motivo operar o utilizar equipos que estén con sistema de bloqueo y advertencia colocados, en tanto no sean expresamente autorizados por la supervisión; previa verificación de su estado y de cerciorarse que tal acción no involucra riesgo para la integridad de las personas, equipos e instalaciones.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650144"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 609 (parte 3)",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo tercero      Normas Generales › Párrafo 1.      Obligaciones de las empresas",
              "t": "Extracción de material de caserones o similares, de acuerdo a lo señalado en el artículo 657 de este reglamento.\n   Estos registros deberán estar en la faena y disponibles para el Servicio, debiendo actualizarse permanentemente.\n e. Proporcionar a sus trabajadores, en forma gratuita, los elementos de protección personal (EPP) certificados y adecuados a la función que cada uno de ellos desempeñe.\n f. Implementar protecciones y señaléticas de advertencias de seguridad en instalaciones y equipos, de tal manera que impidan el acceso o contacto de los trabajadores a lugares o a elementos peligrosos, tales como sectores con riesgo de caída a distinto nivel, lugares energizados, entre otros.\n g. Suspender las operaciones en las áreas que presenten riesgos no controlados a la seguridad e integridad de los trabajadores, señalizar e instalar barreras duras para impedir el acceso a ellas.\n h. Disponer de medios expeditos y seguros para el acceso y salida del personal hacia y desde cualquier parte de la faena minera y sus instalaciones. Para estos efectos, los caminos deberán mantenerse en buenas condiciones e incorporar señalización mínima de seguridad vial.\n i. Mantener y actualizar los planos de la mina, los cuales no deben tener una vigencia que exceda de seis meses desde la última actualización.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313293"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 38",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122"
            }
          ],
          "exigencia": "",
          "accion": "Instalar letreros y etiquetas de advertencia en zonas de peligro, partes en movimiento y procedimientos de seguridad de la máquina.",
          "confianza": "baja",
          "descartadas": []
        },
        {
          "titulo": "Sistema de transmisión expuesto y desalineado",
          "observacion": "Correas, poleas y ejes de transmisión están visibles y sin protección, con posible desalineación que puede provocar desprendimiento o contacto accidental.",
          "severidad": "alta",
          "caja": [
            80,
            50,
            830,
            620
          ],
          "busqueda": "Los sistemas de transmisión por correa, cadena o engranaje deben estar protegidos con carenados que impidan el contacto de personas con partes en movimiento.",
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
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 638",
              "h": "Título XV      Normas de seguridad minera aplicables a faenas mineras que indica › Capítulo cuarto      Normas de diseño y operaciones en minería › Párrafo 3.      Operación y tránsito de equipos, vehículos y personas",
              "t": "Artículo 638.- Todo sistema de transmisión de movimiento o correa transportadora deberá estar equipada con parada de emergencia y/o cable de seguridad, instalada a lo largo de la correa, que permita su inmediata detención en caso de emergencia. Además:\n   a. Los sistemas de transmisión mecánico deben contar con protección que impida el contacto con las personas.\n b. Donde se utilicen correas transportadoras en una faena minera, se debe mantener y aplicar procedimientos para la operación, mantención e inspección del sistema.\n c. En el sistema de transmisión mecánico, el tambor motriz y el tambor de cola deberán encontrarse protegidos  d. Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y el sistema de energización bloqueado.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313332"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 38",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 40",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 40: Se prohíbe a los trabajadores cuya labor se ejecuta cerca de maquinarias en movimiento y órganos de transmisión, el uso de ropa suelta, cabello largo y suelto, y adornos susceptibles de ser atrapados por las partes móviles.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643124"
            }
          ],
          "exigencia": "Todo sistema de transmisión de movimientos deberá estar convenientemente protegido para evitar el contacto accidental con personas.",
          "accion": "Proteger correas, poleas y ejes de transmisión con carenados y corregir la desalineación para evitar desprendimiento o contacto.",
          "confianza": "alta",
          "descartadas": []
        }
      ],
      "no_foto": [
        "Ruido, polvo y sílice (mediciones del DS 594)",
        "Procedimientos de bloqueo y permisos de trabajo"
      ],
      "ms": 35154
    }
  },
  {
    "img": "s/f2.jpg",
    "title": "Correa en planta",
    "credit": "Factory Floor · Augapfel · CC BY 2.0",
    "link": "https://www.flickr.com/photos/47038415@N00/3287974828",
    "rep": {
      "etapas": {
        "identificar": 3098,
        "confirmar": 1788,
        "revisar": 4247
      },
      "razonado": false,
      "ident": {
        "categoria": "maquina",
        "subtipo": "correa transportadora industrial",
        "entorno": "no_claro",
        "descripcion": "Correa transportadora metálica inclinada con motor eléctrico y estructura de soporte en planta industrial.",
        "evidencia": [
          "correa metálica inclinada",
          "motor eléctrico acoplado",
          "estructura metálica de soporte",
          "planta industrial con señalética de equipo",
          "partes móviles visibles"
        ],
        "alternativas": [
          {
            "categoria": "correa_transportadora",
            "por_que_no": "el subtipo dice «correa transportadora industrial»"
          },
          {
            "categoria": "area_trabajo",
            "por_que_no": "el equipo concreto ocupa la mayor parte del encuadre, por lo que no es solo zona de operación"
          },
          {
            "categoria": "canalizacion",
            "por_que_no": "no se ven ductos, bandejas ni cajas de paso como elemento principal"
          }
        ],
        "confianza": 0.85,
        "caja_clave": [
          0,
          410,
          1000,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "poleas, engranajes, ejes u otras partes móviles",
            "visto": "si",
            "detalle": "Se observan poleas y correas en el mecanismo derecho, junto con ejes y partes móviles del equipo."
          },
          {
            "t": "motor o accionamiento",
            "visto": "si",
            "detalle": "Se ve un motor eléctrico montado sobre la estructura metálica izquierda."
          },
          {
            "t": "carcasa o estructura de la máquina",
            "visto": "si",
            "detalle": "Hay una estructura metálica grande y una carcasa cilíndrica en el equipo derecho."
          }
        ],
        "vistos": 3,
        "choca": "correa_transportadora",
        "ok": false
      },
      "corregido": {
        "de": "maquina",
        "a": "correa_transportadora"
      },
      "categoria": "correa_transportadora",
      "nombre": "Correa transportadora",
      "familia": "faena",
      "subtipo": "correa transportadora industrial",
      "entorno": "no_claro",
      "fuera": [],
      "resumen": "La correa transportadora industrial no muestra protección visible en tambores y transmisiones, y no se observan avisos de advertencia en lugares destacados. El resto de los puntos no puede verificarse con certeza por la iluminación y los ángulos de la imagen.",
      "puntos": [
        {
          "id": "C1",
          "texto": "Tambores, poleas y transmisiones protegidos contra el contacto",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 594 · art. 38",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos."
            },
            {
              "ref": "DS 132 · art. 389 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "faena": true
            },
            {
              "ref": "DS 132 · art. 638 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313332",
              "t": "Artículo 638.- Todo sistema de transmisión de movimiento o correa transportadora deberá estar equipada con parada de emergencia y/o cable de seguridad, instalada a lo largo de la correa, que permita su inmediata detención en caso de emergencia. Además:\n   a. Los sistemas de transmisión mecánico deben contar con protección que impida el contacto con las personas.\n b. Donde se utilicen correas transportadoras en una faena minera, se debe mantener y aplicar procedimientos para la operación, mantención e inspección del sistema.\n c. En el sistema de transmisión mecánico, el tambor motriz y el tambor de cola deberán encontrarse protegidos  d. Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y el sistema de energización bloqueado.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "Se observa un motor eléctrico y parte de la estructura de la correa, pero no se alcanza a ver claramente si los tambores, poleas y transmisiones están protegidos contra el contacto.",
          "caja": [
            150,
            380,
            270,
            520
          ],
          "verificado": true,
          "corregido": {
            "de": "no_cumple",
            "obs": "Se ven tambores, poleas y transmisiones expuestas sin carcasas ni protectores que impidan el contacto."
          }
        },
        {
          "id": "C2",
          "texto": "Parada de emergencia o cable de seguridad a lo largo de la correa",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 132 · art. 115 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649815",
              "t": "Artículo 115.- Toda correa transportadora deberá estar equipada con elementos efectivos de seguridad, instalados a todo lo largo de la correa, que permitan una inmediata detención de ella, en caso de emergencia.\n Deberán mantenerse protegidas todas las partes en movimiento, y se realizarán revisiones periódicas de las instalaciones y uniones de la correa.",
              "faena": true
            },
            {
              "ref": "DS 132 · art. 638 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313332",
              "t": "Artículo 638.- Todo sistema de transmisión de movimiento o correa transportadora deberá estar equipada con parada de emergencia y/o cable de seguridad, instalada a lo largo de la correa, que permita su inmediata detención en caso de emergencia. Además:\n   a. Los sistemas de transmisión mecánico deben contar con protección que impida el contacto con las personas.\n b. Donde se utilicen correas transportadoras en una faena minera, se debe mantener y aplicar procedimientos para la operación, mantención e inspección del sistema.\n c. En el sistema de transmisión mecánico, el tambor motriz y el tambor de cola deberán encontrarse protegidos  d. Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y el sistema de energización bloqueado.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia un botón de parada de emergencia ni un cable de seguridad a lo largo de la correa en las imágenes.",
          "caja": []
        },
        {
          "id": "C3",
          "texto": "Nadie sobre la correa ni interviniéndola en movimiento",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 594 · art. 8",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm."
            },
            {
              "ref": "DS 132 · art. 116 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649816",
              "t": "Artículo 116.- Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y deberá tener un sistema sonoro y luminoso de advertencia que se activará antes de la puesta en marcha de ésta.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No hay personas visibles sobre la correa ni interviniéndola, pero no se puede confirmar si está en movimiento.",
          "caja": []
        },
        {
          "id": "C4",
          "texto": "Pasillos laterales libres de obstáculos",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 594 · art. 7",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "Los pasillos laterales no se ven completos debido a la estructura de la correa y el ángulo de la foto.",
          "caja": []
        },
        {
          "id": "C5",
          "texto": "Sin acumulación de material derramado bajo o junto a la correa",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 594 · art. 11",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643088",
              "t": "Artículo 11: Los lugares de trabajo deberán mantenerse en buenas condiciones de orden y limpieza.\nAdemás, deberán tomarse medidas efectivas para evitar la entrada o eliminar la presencia de insectos, roedores y otras plagas de interés sanitario."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observa acumulación clara de material derramado bajo o junto a la correa, pero la visibilidad es limitada.",
          "caja": []
        },
        {
          "id": "C6",
          "texto": "Avisos de advertencia en lugares destacados",
          "sev": "baja",
          "refs": [
            {
              "ref": "DS 132 · art. 404 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650139",
              "t": "Artículo 404.- Los avisos de advertencia e instrucciones destinados a restringir y advertir al personal respecto de los riesgos presentes, las limitaciones de acceso a recintos energizados y las restricciones para la intervención de sistemas deberán ser instalados en lugares destacados.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan avisos de advertencia en lugares destacados en el acercamiento de la zona de la correa transportadora.",
          "caja": [],
          "verificado": true,
          "corregido": {
            "de": "no_cumple",
            "obs": "No se ven avisos de advertencia colocados en lugares destacados sobre la correa transportadora."
          }
        },
        {
          "id": "C7",
          "texto": "Tramos inclinados de hasta 14°, o con correa de retención de material",
          "sev": "baja",
          "refs": [
            {
              "ref": "DS 132 · art. 114 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649814",
              "t": "Artículo 114.- La pendiente máxima de trabajo de una correa transportadora, en tramos inclinados, será de catorce grados (14º) sexagesimales; si ésta es mayor, se deberán utilizar correas diseñadas con elementos para retención de material.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se puede determinar el ángulo de inclinación ni si existe correa de retención de material.",
          "caja": []
        },
        {
          "id": "C8",
          "texto": "Estructura y polines sin daño visible",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 594 · art. 36",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "La estructura y polines están parcialmente ocultos por la cubierta de la correa y no se inspeccionan completamente.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Funcionamiento real de la parada de emergencia (prueba)",
        "Procedimiento de operación, mantención e inspección (DS 132 · art. 113)",
        "Alarma sonora y luminosa antes de partir (DS 132 · art. 116)",
        "Ruido y polvo (mediciones del DS 594)",
        "Bloqueo y permisos de trabajo"
      ],
      "ms": 11064
    }
  },
  {
    "img": "s/f3.jpg",
    "title": "Persona sobre correas",
    "credit": "Abandoned Conveyor Belt · darkday. · CC BY 2.0",
    "link": "https://www.flickr.com/photos/99649389@N02/16562118085",
    "rep": {
      "etapas": {
        "identificar": 25506,
        "confirmar": 1945,
        "revisar": 11426
      },
      "razonado": false,
      "ident": {
        "categoria": "correa_transportadora",
        "subtipo": "industrial, interior, desactivada",
        "entorno": "no_claro",
        "descripcion": "Sistema de correas transportadoras metálicas en una nave industrial, con una persona caminando sobre ellas.",
        "evidencia": [
          "Dos líneas paralelas de correas metálicas con estructura de rejilla y bordes laterales",
          "Estructura de soporte metálica y marcos de contención a los costados",
          "Entorno de bodega o nave industrial con techo alto, vigas y columnas amarillas",
          "Personas caminando sobre la estructura de las correas"
        ],
        "alternativas": [
          {
            "categoria": "area_trabajo",
            "por_que_no": "Aunque es una zona de operación, el equipo concreto (correas) ocupa la parte central e importante de la foto, por lo que prioriza la categoría específica"
          }
        ],
        "confianza": 0.9,
        "caja_clave": [
          0,
          470,
          1000,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "banda continua apoyada sobre polines",
            "visto": "no",
            "detalle": "No se observa banda continua ni polines; solo estructuras metálicas con ranuras."
          },
          {
            "t": "tambor motriz o de cola en un extremo",
            "visto": "no",
            "detalle": "No se ve tambor motriz ni de cola en los extremos visibles."
          },
          {
            "t": "estructura longitudinal que soporta la banda",
            "visto": "si",
            "detalle": "Se ven estructuras longitudinales metálicas que soportan las vías o carriles."
          }
        ],
        "vistos": 1,
        "ok": false
      },
      "categoria": "correa_transportadora",
      "nombre": "Correa transportadora",
      "familia": "faena",
      "subtipo": "industrial, interior, desactivada",
      "entorno": "no_claro",
      "fuera": [],
      "resumen": "La correa transportadora está desactivada y una persona se encuentra sobre ella, lo que no permite descartar intervención en movimiento. Se observan derrames de material bajo y junto a la estructura, y no se ven avisos de advertencia ni protección de transmisiones.",
      "puntos": [
        {
          "id": "C1",
          "texto": "Tambores, poleas y transmisiones protegidos contra el contacto",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 594 · art. 38",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos."
            },
            {
              "ref": "DS 132 · art. 389 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "faena": true
            },
            {
              "ref": "DS 132 · art. 638 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313332",
              "t": "Artículo 638.- Todo sistema de transmisión de movimiento o correa transportadora deberá estar equipada con parada de emergencia y/o cable de seguridad, instalada a lo largo de la correa, que permita su inmediata detención en caso de emergencia. Además:\n   a. Los sistemas de transmisión mecánico deben contar con protección que impida el contacto con las personas.\n b. Donde se utilicen correas transportadoras en una faena minera, se debe mantener y aplicar procedimientos para la operación, mantención e inspección del sistema.\n c. En el sistema de transmisión mecánico, el tambor motriz y el tambor de cola deberán encontrarse protegidos  d. Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y el sistema de energización bloqueado.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se observan tambores, poleas ni transmisiones protegidas; no se alcanza a ver si existen carcasas o protectores.",
          "caja": []
        },
        {
          "id": "C2",
          "texto": "Parada de emergencia o cable de seguridad a lo largo de la correa",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 132 · art. 115 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649815",
              "t": "Artículo 115.- Toda correa transportadora deberá estar equipada con elementos efectivos de seguridad, instalados a todo lo largo de la correa, que permitan una inmediata detención de ella, en caso de emergencia.\n Deberán mantenerse protegidas todas las partes en movimiento, y se realizarán revisiones periódicas de las instalaciones y uniones de la correa.",
              "faena": true
            },
            {
              "ref": "DS 132 · art. 638 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=10313332",
              "t": "Artículo 638.- Todo sistema de transmisión de movimiento o correa transportadora deberá estar equipada con parada de emergencia y/o cable de seguridad, instalada a lo largo de la correa, que permita su inmediata detención en caso de emergencia. Además:\n   a. Los sistemas de transmisión mecánico deben contar con protección que impida el contacto con las personas.\n b. Donde se utilicen correas transportadoras en una faena minera, se debe mantener y aplicar procedimientos para la operación, mantención e inspección del sistema.\n c. En el sistema de transmisión mecánico, el tambor motriz y el tambor de cola deberán encontrarse protegidos  d. Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y el sistema de energización bloqueado.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se aprecia parada de emergencia ni cable de seguridad a lo largo de la correa en las imágenes disponibles.",
          "caja": []
        },
        {
          "id": "C3",
          "texto": "Nadie sobre la correa ni interviniéndola en movimiento",
          "sev": "alta",
          "refs": [
            {
              "ref": "DS 594 · art. 8",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm."
            },
            {
              "ref": "DS 132 · art. 116 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649816",
              "t": "Artículo 116.- Todo trabajo de mantención, reparación, control y limpieza de una correa transportadora como de los sistemas que la componen, debe hacerse con ésta totalmente detenida, y deberá tener un sistema sonoro y luminoso de advertencia que se activará antes de la puesta en marcha de ésta.",
              "faena": true
            }
          ],
          "estado": "no_cumple",
          "observacion": "Una persona está de pie sobre la correa transportadora con las manos en las caderas, interviniendo directamente el equipo.",
          "caja": [
            380,
            105,
            515,
            515
          ],
          "verificado": true,
          "cerca": "Una persona está parada sobre la correa transportadora mientras esta está en movimiento."
        },
        {
          "id": "C4",
          "texto": "Pasillos laterales libres de obstáculos",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 594 · art. 7",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se alcanzan a ver los pasillos laterales completos para determinar si están libres de obstáculos.",
          "caja": []
        },
        {
          "id": "C5",
          "texto": "Sin acumulación de material derramado bajo o junto a la correa",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 594 · art. 11",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643088",
              "t": "Artículo 11: Los lugares de trabajo deberán mantenerse en buenas condiciones de orden y limpieza.\nAdemás, deberán tomarse medidas efectivas para evitar la entrada o eliminar la presencia de insectos, roedores y otras plagas de interés sanitario."
            }
          ],
          "estado": "no_cumple",
          "observacion": "Hay acumulación de material derramado blanco y suciedad bajo y junto a la correa, visible en los laterales y entre los rieles.",
          "caja": [
            0,
            480,
            1000,
            1000
          ],
          "verificado": true,
          "cerca": "Se observa acumulación de material derramado (residuos blancos y otros desechos) sobre y junto a las estructuras de la correa transportadora."
        },
        {
          "id": "C6",
          "texto": "Avisos de advertencia en lugares destacados",
          "sev": "baja",
          "refs": [
            {
              "ref": "DS 132 · art. 404 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650139",
              "t": "Artículo 404.- Los avisos de advertencia e instrucciones destinados a restringir y advertir al personal respecto de los riesgos presentes, las limitaciones de acceso a recintos energizados y las restricciones para la intervención de sistemas deberán ser instalados en lugares destacados.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "La imagen muestra una persona caminando sobre una correa transportadora, pero no se observan avisos de advertencia en lugares destacados.",
          "caja": [],
          "verificado": true,
          "corregido": {
            "de": "no_cumple",
            "obs": "No se observan avisos de advertencia en lugares destacados sobre la correa o su entorno inmediato."
          }
        },
        {
          "id": "C7",
          "texto": "Tramos inclinados de hasta 14°, o con correa de retención de material",
          "sev": "baja",
          "refs": [
            {
              "ref": "DS 132 · art. 114 · referencia, rige en faena minera",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649814",
              "t": "Artículo 114.- La pendiente máxima de trabajo de una correa transportadora, en tramos inclinados, será de catorce grados (14º) sexagesimales; si ésta es mayor, se deberán utilizar correas diseñadas con elementos para retención de material.",
              "faena": true
            }
          ],
          "estado": "no_se_ve",
          "observacion": "No se puede determinar el ángulo de inclinación ni si existen correas de retención de material en tramos inclinados.",
          "caja": []
        },
        {
          "id": "C8",
          "texto": "Estructura y polines sin daño visible",
          "sev": "media",
          "refs": [
            {
              "ref": "DS 594 · art. 36",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas."
            }
          ],
          "estado": "no_se_ve",
          "observacion": "La estructura y polines no se ven con suficiente claridad para descartar daño visible.",
          "caja": []
        }
      ],
      "otros": [],
      "no_foto": [
        "Funcionamiento real de la parada de emergencia (prueba)",
        "Procedimiento de operación, mantención e inspección (DS 132 · art. 113)",
        "Alarma sonora y luminosa antes de partir (DS 132 · art. 116)",
        "Ruido y polvo (mediciones del DS 594)",
        "Bloqueo y permisos de trabajo"
      ],
      "ms": 41876
    }
  },
  {
    "img": "s/f4.jpg",
    "title": "Taller",
    "credit": "Photo · kvanhorn · CC BY 2.0",
    "link": "https://www.flickr.com/photos/8503402@N08/36854218130",
    "rep": {
      "etapas": {
        "identificar": 2200,
        "confirmar": 2103,
        "revisar": 6760
      },
      "razonado": false,
      "ident": {
        "categoria": "area_trabajo",
        "subtipo": "taller",
        "entorno": "industria",
        "descripcion": "Taller con bancos de trabajo, máquinas y herramientas distribuidos en un recinto cerrado.",
        "evidencia": [
          "bancos de trabajo con tornillos de banco",
          "máquina de pulir o rectificar",
          "aspiradora industrial",
          "estantes con herramientas y materiales",
          "cables y extensiones en el piso"
        ],
        "alternativas": [
          {
            "categoria": "maquina",
            "por_que_no": "hay varias máquinas pero ninguna ocupa el enfoque principal de la imagen"
          },
          {
            "categoria": "tablero",
            "por_que_no": "no se aprecia un gabinete con protecciones eléctricas que reparta circuitos"
          }
        ],
        "confianza": 0.85,
        "caja_clave": [
          0,
          0,
          1000,
          1000
        ]
      },
      "confirmacion": {
        "rasgos": [
          {
            "t": "pisos y pasillos de circulación",
            "visto": "si",
            "detalle": "piso de concreto visible en el centro y pasillos entre bancos y equipos"
          },
          {
            "t": "herramientas, materiales o equipos de trabajo",
            "visto": "si",
            "detalle": "aspiradora, ventilador, compresor, banco de trabajo, sierras, estantes con cajas y herramientas"
          },
          {
            "t": "puestos de trabajo o zona de operación",
            "visto": "si",
            "detalle": "bancos de trabajo a ambos lados con equipos y materiales sobre ellos"
          }
        ],
        "vistos": 3,
        "ok": true
      },
      "categoria": "area_trabajo",
      "nombre": "Área de trabajo",
      "familia": "faena",
      "subtipo": "taller",
      "entorno": "industria",
      "fuera": [],
      "resumen": "El taller presenta múltiples peligros eléctricos y de tropiezo por cables sueltos en el piso, junto con materiales y equipos almacenados de forma desordenada que obstruyen el paso y aumentan el riesgo de caídas o contacto con partes activas.",
      "puntos": [],
      "otros": [
        {
          "titulo": "Cables eléctricos en el piso",
          "observacion": "Varios cables de extensión y de herramientas están tendidos sobre el suelo de tránsito, creando riesgo de tropiezo y posible daño al aislamiento.",
          "severidad": "alta",
          "caja": [
            480,
            690,
            850,
            880
          ],
          "busqueda": "Los conductores eléctricos deben estar protegidos contra daños mecánicos y no deben obstruir las vías de circulación.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 7",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 7°: Los pisos de los lugares de trabajo, así como los pasillos de tránsito, se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, tanto en las tareas normales como en situaciones de emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643084"
            }
          ],
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 461",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 461.- Al atravesar barreras, puertas de ventilación y otras instalaciones semejantes, los cables deberán estar protegidos contra el riesgo de aplastamiento.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650196"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 463",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 463.- Todo conductor debe poseer adecuada protección eléctrica y mecánica para que:\n\na) Su aislación soporte la máxima tensión de operación, sin originar fugas ni cortocircuitos;\nb) Sus cubiertas protectoras soporten los esfuerzos mecánicos a que pueda estar sometido el conductor, sin dañar ni deformar la aislamiento, y\nc) Toda cubierta metálica de conductores debe ser eléctricamente continua.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650198"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 475",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Quinto Sistemas Eléctricos.",
              "t": "Artículo 475.- Los conductores y demás elementos instalados en las locomotoras eléctricas, deben estar protegidos contra eventuales daños causados por agentes externos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650210"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            }
          ],
          "exigencia": "Los pisos y pasillos de tránsito se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores.",
          "accion": "Retirar los cables eléctricos del piso de tránsito o elevarlos/fijarlos para evitar tropiezos y daño al aislamiento.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Obstrucción de pasillos",
          "observacion": "Aspiradora, ventilador, compresor y tablas de madera se encuentran ubicados en el área de paso, reduciendo el espacio libre para movilizarse.",
          "severidad": "alta",
          "caja": [
            20,
            550,
            420,
            910
          ],
          "busqueda": "Los pasillos y vías de evacuación deben mantenerse libres de obstrucciones que impidan el tránsito seguro de las personas.",
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
            }
          ],
          "exigencia": "Los pisos y pasillos de tránsito se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento de los trabajadores, y los pasillos serán lo suficientemente amplios para permitir el movimiento seguro del personal.",
          "accion": "Retirar la aspiradora, ventilador, compresor y tablas de madera del área de paso y mantener los pasillos libres y con ancho suficiente.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Almacenamiento inseguro en estantes",
          "observacion": "Herramientas, envases y objetos diversos están apilados en estantes altos sin contención visible, pudiendo caer sobre quien trabaje debajo.",
          "severidad": "alta",
          "caja": [
            670,
            60,
            950,
            300
          ],
          "busqueda": "Los materiales almacenados en altura deben asegurarse para evitar su caída sobre las áreas de trabajo o circulación.",
          "citas": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 46",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 46.- Por motivo alguno deberá permitirse el tránsito de personal debajo de lugares con riesgo de caídas de cargas, herramientas, materiales o líquidos que puedan causar daños a la integridad física de las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649740"
            }
          ],
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 50",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 50.- En todo trabajo que se ejecute en altura, donde exista el riesgo de caída a desnivel, o bien al borde de aberturas se deberá utilizar cinturón y/o arnés, con su respectiva cuerda de seguridad, debidamente afianzada a un lugar estable.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649744"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 36",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 36: Los elementos estructurales de la construcción de los locales de trabajo y todas las maquinarias, instalaciones, así como las herramientas y equipos, se mantendrán en condiciones seguras y en buen funcionamiento para evitar daño a las personas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643119"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 55",
              "h": "TITULO II NORMAS GENERALES › Capítulo Tercero Normas Generales",
              "t": "Artículo 55.- Solo se permitirá el acceso de personal al interior de las tolvas, silos de almacenamiento, chancadores, molinos, chutes de traspaso o recintos similares, si se han tomado las siguientes medidas de control:\n\na) Poseer un procedimiento de trabajo seguro para ejecutar dicha actividad.\nb) Contar con supervisión directa, entretanto se ejecutan estas tareas.\nc) Evitar, por todos los medios, la alimentación o la caída de material u objetos al interior de estas instalaciones.\nd) Proveer las defensas pertinentes y los Elementos de Protección Personal, como arnés y doble cuerda de seguridad.\ne) Verificar que no existen gases nocivos ni polvo en concentraciones sobre los límites máximos permisibles ni deficiencias de oxígeno. En su defecto contar con los elementos de protección adecuados.\nf) Cuidar que mientras se encuentre personal dentro de estos recintos o instalaciones no exista posibilidad de que terceras personas accionen el movimiento de los sistemas.\n\n El personal que labore sobre parrillas de piques o tolvas en la reducción de colpas o bolones, deberá estar provisto de cinturón o arnés y cuerda de seguridad, previo bloqueo del vaciado de material, mientras se realizan estas tareas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8649749"
            }
          ],
          "exigencia": "Por motivo alguno deberá permitirse el tránsito de personal debajo de lugares con riesgo de caídas de cargas, herramientas, materiales o líquidos que puedan causar daños a la integridad física de las personas.",
          "accion": "Retirar o asegurar los objetos apilados en estantes altos y evitar el tránsito o trabajo debajo de ellos hasta que estén contenidos o estabilizados.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Equipos sin protección visible",
          "observacion": "Máquinas de banco y herramientas eléctricas están expuestas sin protectores ni resguardos que impidan el contacto accidental con partes móviles.",
          "severidad": "alta",
          "caja": [
            180,
            250,
            360,
            460
          ],
          "busqueda": "Las máquinas y equipos deben contar con resguardos que impidan el acceso a partes móviles o peligrosas durante su operación.",
          "citas": [
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 38",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 38: Deberán estar debidamente protegidas todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643122"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 389",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 389.- Toda polea, correa, engranaje o parte en movimiento de una máquina debe estar debidamente protegida, dejándola fuera del alcance de cualquier contacto físico con el operador, herramientas o materiales que éste manipule. Tales protecciones de seguridad deberán contar con un dispositivo que mantenga estable su posición cuando ellas están cerradas.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650122"
            }
          ],
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
          ],
          "exigencia": "Todas las partes móviles, transmisiones y puntos de operación de maquinarias y equipos deberán estar debidamente protegidas, dejando fuera del alcance cualquier contacto físico con el operador, herramientas o materiales.",
          "accion": "Instalar protectores o resguardos en las máquinas de banco y herramientas eléctricas que impidan el contacto accidental con partes móviles.",
          "confianza": "alta",
          "descartadas": []
        },
        {
          "titulo": "Materiales apilados en el suelo",
          "observacion": "Tablas de madera y otros elementos están apoyados directamente sobre el piso de tránsito, generando obstáculos y posible inestabilidad.",
          "severidad": "alta",
          "caja": [
            540,
            360,
            630,
            620
          ],
          "busqueda": "Los materiales deben almacenarse de forma estable y en lugares designados, sin obstruir áreas de circulación ni salidas de emergencia.",
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
              "ref": "DS 594 · art. 42 (parte 1)",
              "h": "TITULO III De las Condiciones Ambientales › PARRAFO II De las Condiciones Generales de Seguridad",
              "t": "Artículo 42: El almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.\n Todo lo referente al almacenamiento de sustancias peligrosas se regirá por lo dispuesto en el decreto supremo N° 43 de 2015 del Ministerio de Salud, que aprueba el Reglamento de Almacenamiento de Sustancias Peligrosas. No obstante lo anterior, para aquellas exclusiones establecidas en el artículo 3 de dicha norma, los recintos que almacenen sustancias peligrosas clasificadas según NCh 382:2013, sin perjuicio de la normativa específica que les aplique, deberán dar cumplimiento a lo siguiente:\n a) Construirse según lo establecido en la Ordenanza General de Urbanismo y Construcción, de acuerdo al estudio de carga combustible, y ser destinados específicamente para tal efecto. Para el caso de sustancias inflamables envasadas, sobre 10 toneladas, deberán almacenarse en una bodega exclusiva para ellas.\n b) Contar con las hojas de datos de seguridad, según lo establecido en NCh 2245 of. 2003.\n c) Disponer de un plan de emergencias que incorpore todas las posibles emergencias que puedan producirse, con sus respectivos procedimientos, cadena de mando, plano que incluya todas las instalaciones, zonas de seguridad, vías de acceso y de salida, lista actualizada de sustancias peligrosas, equipos y elementos para combatir la emergencia.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643126"
            }
          ],
          "revisados": [
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 578",
              "h": "TITULO XI GENERALIDADES DE EXPLOSIVOS EN LA MINERIA › Capítulo Tercero Perforación y Tronadura",
              "t": "Artículo 578.- No se deberá mantener dentro del área a tronar, una cantidad de explosivos superior a la necesaria para el disparo, la que será indicada por el Supervisor.\nTales explosivos deberán ser apilados a no menos de ocho metros (8 mts) del barreno más cercano que está siendo cargado, de manera que cualquiera explosión prematura no se propague de una pila a otra.\n Lo dispuesto en el inciso anterior no se aplicará a los tiros que se carguen directamente con vehículos que posean sistema mecánico o neumático.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650321"
            },
            {
              "norma": "DS 594",
              "ref": "DS 594 · art. 8",
              "h": "TITULO II Del Saneamiento Básico de los Lugares de Trabajo › PARRAFO I De las Condiciones Generales de Construcción y Sanitarias",
              "t": "Artículo 8°: Los pasillos de circulación serán lo suficientemente amplios de modo que permitan el movimiento seguro del personal, tanto en sus desplazamientos habituales como para el movimiento de material, sin exponerlos a accidentes. Así también, los espacios entre máquinas por donde circulen personas no deberán ser inferiores a 150 cm.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=167766&idParte=8643085"
            },
            {
              "norma": "DS 132",
              "ref": "DS 132 · art. 376",
              "h": "TITULO IX INSTALACIONES Y SERVICIOS DE APOYO › Capítulo Tercero Talleres y Maestranzas",
              "t": "Artículo 376.- En la instalación y operación de equipos y máquinas-herramientas en las áreas de talleres, deberán considerarse los siguientes aspectos básicos:\n\na) Definición de áreas específicas de trabajo y pasillos de tránsito debidamente demarcados.\nb) Sistemas de ventilación, iluminación, ergonómicos y de control, de acuerdo a normas nacionales reconocidas y aprobadas.\nc) Instalación de defensas y protecciones de partes móviles susceptibles de generar accidentes.\nd) Instalación de dispositivos de bloqueo y parada de emergencia.\n e) Uso de elementos de protección personal.",
              "url": "https://www.bcn.cl/leychile/navegar?idNorma=221064&idParte=8650108"
            }
          ],
          "exigencia": "Los pisos y pasillos de tránsito se mantendrán libres de todo obstáculo que impida un fácil y seguro desplazamiento, y el almacenamiento de materiales deberá realizarse por procedimientos y en lugares apropiados y seguros para los trabajadores.",
          "accion": "Retirar las tablas y elementos del piso de tránsito y apilarlos en lugares apropiados y seguros, fuera del área de circulación.",
          "confianza": "alta",
          "descartadas": []
        }
      ],
      "no_foto": [
        "Ruido, polvo y sílice (mediciones del DS 594)",
        "Procedimientos de bloqueo y permisos de trabajo"
      ],
      "ms": 18672
    }
  }
];
