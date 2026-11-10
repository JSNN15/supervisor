#!/usr/bin/env bash
# Descarga el texto vigente de los decretos desde el servicio XML de LeyChile (Biblioteca del Congreso Nacional).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p raw
for id in 167766 221064 1088802; do # DS 594, DS 132, DS 43
  curl -sSf --http1.1 --retry 3 -A 'Mozilla/5.0' -o "raw/ley_$id.xml" \
    "https://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=$id"
done
echo "Listo: $(ls raw/ley_*.xml | wc -l) decretos en raw/"
