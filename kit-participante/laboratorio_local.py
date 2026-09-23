"""Plano B local. Não consulta AIDP e não chama agentes ou modelos."""
import csv
import json
from collections import defaultdict
from decimal import Decimal, InvalidOperation
from pathlib import Path


def investigar():
    with (Path(__file__).parent / 'dados/pagamentos_bronze.csv').open(encoding='utf-8', newline='') as f:
        raw = list(csv.DictReader(f))
    validos = []
    for row in raw:
        try:
            valor = Decimal(row['valor'])
        except InvalidOperation:
            continue
        if row['tentativa_id'] and valor > 0 and row['metodo'] in ('cartao', 'pix'):
            validos.append({**row, 'valor': valor})
    silver = {row['tentativa_id']: row for row in validos}
    grupos = defaultdict(lambda: {'tentativas': 0, 'aprovados': 0, 'receita': Decimal('0')})
    for row in silver.values():
        item = grupos[(row['dia'], row['metodo'])]
        item['tentativas'] += 1
        if row['status'] == 'aprovado':
            item['aprovados'] += 1
            item['receita'] += row['valor']
    return {'modo': 'LOCAL — sem chamadas AIDP', 'recebidos': len(raw),
            'invalidos': len(raw)-len(validos), 'duplicatas': len(validos)-len(silver),
            'validos': len(silver), 'indicadores': [dict(dia=k[0], metodo=k[1], **v) for k,v in sorted(grupos.items())]}


if __name__ == '__main__':
    print(json.dumps(investigar(), ensure_ascii=False, indent=2, default=str))
