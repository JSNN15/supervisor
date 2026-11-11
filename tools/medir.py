"""Recalcula las cifras de evaluacion.md a partir de los ejemplos guardados en samples.js.
Cada ejemplo es el resultado del flujo completo tal como salió; aquí solo se cuenta.
Uso: python3 tools/medir.py"""
import json
import os

D = os.path.dirname(os.path.abspath(__file__))
# equipo real de cada foto de ejemplo, anotado a mano
REAL = {
    'm1': 'medidor_empalme', 'm2': 'medidor_empalme',
    'e1': 'tablero', 'e2': 'tablero', 'e3': 'tablero', 'e4': 'tablero',
    'b1': 'bodega_sustancias', 'b2': 'bodega_sustancias', 'b3': 'bodega_sustancias',
    'f1': 'maquina', 'f2': 'correa_transportadora', 'f3': 'correa_transportadora', 'f4': 'area_trabajo',
}

txt = open(f'{D}/../samples.js', encoding='utf-8').read()
ejemplos = json.loads(txt[txt.index('['):txt.rindex(']') + 1])

primera = final = pregunto = 0
estados = {'cumple': 0, 'no_cumple': 0, 'no_se_ve': 0}
de_cerca = corregidos = otros = otros_con_cita = citas_descartadas = 0
tiempos = []
for e in ejemplos:
    clave = e['img'].split('/')[-1].split('.')[0]
    r = e['rep']
    conf = r.get('confirmacion') or {}
    primera += r['ident']['categoria'] == REAL[clave]
    final += r['categoria'] == REAL[clave]
    pregunto += bool(r.get('corregido')) or (bool(conf) and not conf.get('ok'))
    tiempos.append(r['ms'])
    for p in r['puntos']:
        estados[p['estado']] += 1
        de_cerca += bool(p.get('verificado'))
        corregidos += bool(p.get('corregido'))
    for o in r['otros']:
        otros += 1
        otros_con_cita += bool(o['citas'])
        citas_descartadas += len(o.get('descartadas', []))

n = len(ejemplos)
tiempos.sort()
print(f'Fotos: {n}')
print(f'Equipo identificado a la primera: {primera} de {n}')
print(f'Fotos en que preguntó: {pregunto}')
print(f'Tipo final correcto: {final} de {n}')
print(f"Puntos de lista revisados: {sum(estados.values())} (cumple {estados['cumple']}, no cumple {estados['no_cumple']}, no se ve {estados['no_se_ve']})")
print(f'«No cumple» mirados de cerca: {de_cerca}; corregidos al acercar: {corregidos}')
print(f'Hallazgos fuera de lista: {otros}, con artículo {otros_con_cita}; citas descartadas por la revisión crítica: {citas_descartadas}')
print(f'Tiempo por foto: mediana {tiempos[n // 2] / 1000:.0f} s, entre {tiempos[0] / 1000:.0f} y {tiempos[-1] / 1000:.0f} s')
