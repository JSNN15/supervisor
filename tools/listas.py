"""Arma s/listas.json: categorías de equipo, rasgos para confirmar, listas de revisión y el texto de cada artículo citado.
Las listas son el criterio técnico de la máquina: cada punto tiene su artículo asignado por una persona, no por el modelo."""
import json
import os
import re

D = os.path.dirname(os.path.abspath(__file__))
RIC = json.load(open(os.environ.get('RIC_JSON', f'{D}/../../normativa/s/ric.json')))  # índice del repositorio normativa
DS = json.load(open(f'{D}/../s/normas.json'))['c']


def ric(p, *secs):
    """Texto y enlace de una o más secciones de un pliego RIC (se busca el párrafo que empieza con el número)."""
    partes, pag = [], None
    for sec in secs:
        pat = re.compile(r'(?m)^\s*' + re.escape(sec) + r'\s+(.*?)(?=^\s*\d+(?:\.\d+)+\s|\Z)', re.S)
        for c in RIC['c']:
            if c[0] != p:
                continue
            m = pat.search(c[4])
            if m:
                partes.append(f'{sec} ' + re.sub(r'\s+', ' ', m.group(1)).strip())
                pag = pag or c[3]
                break
        else:
            raise SystemExit(f'no encontré RIC {p} {sec}')
    return {'ref': f'RIC N°{p} · ' + ', '.join(secs), 'url': f"{RIC['url'][str(p)]}#page={pag}", 't': '\n'.join(partes)[:900]}


def ds(n, a, faena=False):
    x = next(x for x in DS if x['n'] == n and x['a'] == a)
    r = {'ref': f'{n} · art. {a}', 'url': x['u'], 't': x['t'][:900]}
    if faena:
        r['faena'] = True  # rige en faenas mineras; fuera de ellas se muestra como referencia técnica
    return r


CATEGORIAS = {
    'medidor_empalme': ('Medidor y empalme', 'electrico', ['individual', 'concentrado'], [
        'visor o mica con display de energía (kWh) o disco giratorio',
        'caja de empalme con visor, individual o en un banco de cajas, no un gabinete con varios interruptores',
        'acometida que llega desde la red de distribución (poste o subterránea)',
        'sello o precinto de la distribuidora',
        'protección o limitador del empalme']),
    'tablero': ('Tablero eléctrico', 'electrico', ['distribucion', 'fuerza', 'control'], [
        'interruptores automáticos, diferenciales o fusibles montados en fila',
        'barras o borneras de distribución',
        'varios circuitos que salen del gabinete',
        'puerta exterior o cubierta cubre equipos']),
    'sala_electrica': ('Sala eléctrica', 'electrico', [], [
        'recinto cerrado con varios tableros, celdas o CCM',
        'puerta de acceso con señal de riesgo eléctrico',
        'equipos de potencia de gran tamaño']),
    'transformador': ('Transformador', 'electrico', ['poste', 'piso'], [
        'cuba metálica con aletas o radiadores',
        'aisladores pasatapas en la parte superior o lateral',
        'placa de características o montaje en poste o losa']),
    'canalizacion': ('Canalización', 'electrico', [], [
        'tubos, ductos o bandejas que llevan conductores',
        'cajas de paso o derivación',
        'recorrido de cables por muro, techo o estructura']),
    'grupo_electrogeno': ('Grupo electrógeno', 'electrico', [], [
        'motor de combustión acoplado a un alternador',
        'tablero de control o de transferencia',
        'estanque de combustible o escape']),
    'bodega_sustancias': ('Sustancias peligrosas', 'sustancias', ['bodega', 'patio'], [
        'tambores, bidones, sacos u otros envases de productos',
        'rótulos, etiquetas o pictogramas de peligro',
        'estanterías, pallets o zona destinada a almacenar']),
    'cilindros_gas': ('Cilindros de gas', 'sustancias', [], [
        'cilindros a presión',
        'válvula o capuchón en la parte superior',
        'cadena, jaula o soporte de sujeción']),
    'estanque': ('Estanque', 'sustancias', [], [
        'estanque o tanque de líquido',
        'pretil o dique alrededor',
        'cañerías, válvulas o conexiones de llenado']),
    'correa_transportadora': ('Correa transportadora', 'faena', [], [
        'banda continua apoyada sobre polines',
        'tambor motriz o de cola en un extremo',
        'estructura longitudinal que soporta la banda']),
    'maquina': ('Máquina', 'faena', [], [
        'poleas, engranajes, ejes u otras partes móviles',
        'motor o accionamiento',
        'carcasa o estructura de la máquina']),
    'area_trabajo': ('Área de trabajo', 'faena', [], [
        'pisos y pasillos de circulación',
        'herramientas, materiales o equipos de trabajo',
        'puestos de trabajo o zona de operación']),
}

NORMAS_FAMILIA = {'electrico': ['RIC', 'DS 594', 'DS 132'], 'sustancias': ['DS 43', 'DS 594'], 'faena': ['DS 132', 'DS 594']}


def item(i, texto, sev, refs, actua=None, solo=None):
    x = {'id': i, 'texto': texto, 'sev': sev, 'refs': refs}
    if actua:
        x['actua'] = actua
    if solo:
        x['solo'] = solo
    return x


LISTAS = {
    'medidor_empalme': [
        item('M1', 'La unidad de medida se puede leer desde el exterior: visor limpio, sin opacidad ni obstrucción', 'baja', [ric(1, '7.1', '7.2')], 'distribuidora'),
        item('M2', 'Caja de empalme íntegra: sin roturas, perforaciones ni tapa forzada', 'media', [ric(1, '6.5')], 'cliente y distribuidora'),
        item('M3', 'Mica y caja expuestas al sol sin degradación visible (amarillamiento, fisuras, opacidad)', 'baja', [ric(1, '6.3')], 'cliente y distribuidora'),
        item('M4', 'Sello o precinto de la distribuidora presente en el equipo de medida', 'media', [{'ref': 'Estándar de empalmes de la distribuidora', 'url': '', 't': 'El RIC N°1 punto 5.1 acepta los estándares constructivos de cada distribuidora, publicados en su web. El sello del equipo de medida lo pone y lo retira la distribuidora.'}], 'distribuidora'),
        item('M5', 'Ubicación accesible para lectura y mantenimiento: fachada, poste junto al cierre o nicho, sin vegetación u objetos que lo tapen', 'baja', [ric(1, '7.1', '7.3', '7.4')], 'cliente'),
        item('M6', 'Sin conexiones ni derivaciones ajenas entre la red, el medidor y el primer tablero (cables añadidos, empalmes improvisados)', 'alta', [ric(1, '7.19')], 'cliente'),
        item('M7', 'Alimentador hacia el primer tablero canalizado en ducto, sin conductores expuestos', 'media', [ric(1, '7.15')], 'cliente'),
        item('M8', 'Acometida, conectores y conductores sin daño del aislamiento ni señales de calentamiento', 'alta', [ric(1, '6.2')], 'distribuidora'),
        item('M9', 'Recinto de empalmes concentrados de uso exclusivo: sin bodega, basura, ni medidores de agua o gas', 'media', [ric(1, '7.8.2', '7.16')], 'administración del edificio', {'subtipo': 'concentrado'}),
        item('M10', 'Cajas de empalmes concentrados entre 0,80 m y 2,10 m del piso terminado', 'baja', [ric(1, '7.8.4')], 'administración del edificio', {'subtipo': 'concentrado'}),
    ],
    'tablero': [
        item('T1', 'Puerta exterior y cubierta cubre equipos presentes y cerradas; las protecciones solo se alcanzan abriendo la puerta', 'alta', [ric(2, '6.1.3', '6.1.4')]),
        item('T2', 'Ninguna parte energizada expuesta al operar: cubierta cubre equipos completa y barras desnudas con barrera', 'alta', [ric(2, '6.1.8', '6.2.3')]),
        item('T3', 'Envolvente íntegra: sin perforaciones, corrosión avanzada ni partes faltantes; no es un tablero de tipo abierto', 'media', [ric(2, '6.1.2', '6.1.7')]),
        item('T4', 'Placa del tablero visible: marca, nombre, tensión de servicio y corriente nominal', 'baja', [ric(2, '5.3.5')]),
        item('T5', 'Protecciones rotuladas con número de circuito y servicio, y cuadro indicador de circuitos', 'media', [ric(2, '5.3.6.1', '5.3.7')]),
        item('T6', 'Diagrama unilineal adherido y legible', 'baja', [ric(2, '5.3.6.2')]),
        item('T7', 'Cableado sin conexiones de dispositivo a dispositivo ni puentes improvisados; peines con todos sus accesorios', 'media', [ric(2, '6.2.4')]),
        item('T8', 'Gabinete metálico con conexión visible al conductor de protección (tierra)', 'alta', [ric(2, '6.4.1', '6.4.2', '6.4.3')]),
        item('T9', 'Espacio frente al tablero libre: sin materiales, muebles ni combustible almacenado', 'media', [ric(2, '5.4.7')]),
        item('T10', 'Sin tuberías ni medidores de agua o gas en el recinto del tablero', 'media', [ric(2, '5.4.8')]),
        item('T11', 'Ingreso de conductores sin romper la envolvente; en exterior sin techo, los conductores entran por abajo', 'baja', [ric(2, '6.1.21.6')]),
    ],
    'bodega_sustancias': [
        item('B1', 'Envases en buen estado: sin corrosión avanzada, abolladuras graves ni fugas', 'media', [ds('DS 43', '9')]),
        item('B2', 'Envases etiquetados, con etiqueta legible en español', 'media', [ds('DS 43', '9'), ds('DS 43', '183')]),
        item('B3', 'Zona señalizada y demarcada, con pictogramas de las clases almacenadas', 'media', [ds('DS 43', '30')]),
        item('B4', 'Control de derrames: bandejas, pretil, piso con pendiente o material absorbente a mano', 'alta', [ds('DS 43', '21'), ds('DS 43', '52')]),
        item('B5', 'Extintores presentes, visibles y sin obstáculos', 'alta', [ds('DS 43', '21'), ds('DS 594', '47')]),
        item('B6', 'Sustancias incompatibles separadas por barrera física o 2,4 m', 'alta', [ds('DS 43', '22'), ds('DS 43', '55')]),
        item('B7', 'Pilas sobre el piso de máximo 1 m de alto, salvo envases más altos o encajables', 'media', [ds('DS 43', '56')]),
        item('B8', 'Piso sólido, liso e impermeable', 'media', [ds('DS 43', '28')]),
        item('B9', 'Cilindros en posición vertical y asegurados; llenos separados de vacíos', 'alta', [ds('DS 43', '67')]),
    ],
    'correa_transportadora': [
        item('C1', 'Tambores, poleas y transmisiones protegidos contra el contacto', 'alta', [ds('DS 594', '38'), ds('DS 132', '389', True), ds('DS 132', '638', True)]),
        item('C2', 'Parada de emergencia o cable de seguridad a lo largo de la correa', 'alta', [ds('DS 132', '115', True), ds('DS 132', '638', True)]),
        item('C3', 'Nadie sobre la correa ni interviniéndola en movimiento', 'alta', [ds('DS 594', '8'), ds('DS 132', '116', True)]),
        item('C4', 'Pasillos laterales libres de obstáculos', 'media', [ds('DS 594', '7')]),
        item('C5', 'Sin acumulación de material derramado bajo o junto a la correa', 'media', [ds('DS 594', '11')]),
        item('C6', 'Avisos de advertencia en lugares destacados', 'baja', [ds('DS 132', '404', True)]),
        item('C7', 'Tramos inclinados de hasta 14°, o con correa de retención de material', 'baja', [ds('DS 132', '114', True)]),
        item('C8', 'Estructura y polines sin daño visible', 'media', [ds('DS 594', '36')]),
    ],
}

NO_FOTO = {
    'medidor_empalme': ['Capacidad del empalme frente a la potencia declarada (RIC N°1 · 5.3)', 'Curva y poder de corte del limitador (RIC N°1 · 8.1–8.2)', 'Distancia a la puerta de acceso, semicírculo de 15 m (RIC N°1 · 7.2)', 'Comunicación de energización inscrita en la SEC (RIC N°1 · 5.2)', 'Acometida que no atraviese propiedades vecinas (RIC N°1 · 7.1)'],
    'tablero': ['Resistencia de la puesta a tierra y continuidad de protecciones (medición)', 'Aislamiento de conductores (medición)', 'Ajuste y selectividad de las protecciones', 'Grado IP real de la envolvente', 'Apriete y temperatura de conexiones (termografía)'],
    'bodega_sustancias': ['Hojas de datos de seguridad y compatibilidad real de los productos', 'Cantidades almacenadas frente a los umbrales del DS 43', 'Autorización sanitaria de la bodega', 'Plan de emergencia y capacitación del personal', 'Ventilación y concentraciones ambientales (medición)'],
    'correa_transportadora': ['Funcionamiento real de la parada de emergencia (prueba)', 'Procedimiento de operación, mantención e inspección (DS 132 · art. 113)', 'Alarma sonora y luminosa antes de partir (DS 132 · art. 116)', 'Ruido y polvo (mediciones del DS 594)', 'Bloqueo y permisos de trabajo'],
}
NO_FOTO_FAMILIA = {
    'electrico': ['Resistencia de puesta a tierra y aislamiento (medición)', 'Declaración e inscripción de la instalación en la SEC'],
    'sustancias': ['Hojas de datos de seguridad y cantidades almacenadas', 'Autorización sanitaria'],
    'faena': ['Ruido, polvo y sílice (mediciones del DS 594)', 'Procedimientos de bloqueo y permisos de trabajo'],
}

out = {
    'version': '2026-11-10',
    'entornos': {'vivienda': 'Vivienda', 'comercio_oficina': 'Comercio u oficina', 'industria': 'Industria', 'faena_minera': 'Faena minera', 'via_publica': 'Vía pública', 'no_claro': 'No claro'},
    'categorias': {k: {'nombre': v[0], 'familia': v[1], 'subtipos': v[2], 'rasgos': v[3], 'normas': NORMAS_FAMILIA[v[1]],
                       'no_foto': NO_FOTO.get(k, NO_FOTO_FAMILIA[v[1]])} for k, v in CATEGORIAS.items()},
    'listas': LISTAS,
}
json.dump(out, open(f'{D}/../s/listas.json', 'w'), ensure_ascii=False, indent=1)
print({k: len(v) for k, v in LISTAS.items()})
