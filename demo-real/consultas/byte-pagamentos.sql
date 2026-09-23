-- Consulta somente leitura usada pelo agente Byte.
-- Catálogo AIDP: tdcsp; schema Oracle: AGENT_SEARCH.
SELECT dia,
       metodo,
       COUNT(*) AS tentativas,
       SUM(CASE WHEN status = 'aprovado' THEN 1 ELSE 0 END) AS aprovados,
       SUM(CASE WHEN status = 'aprovado' THEN valor ELSE 0 END) AS receita
FROM AGENT_SEARCH.TDC_DC_PAGAMENTOS
WHERE metodo IN ('cartao', 'pix')
GROUP BY dia, metodo
ORDER BY dia;
