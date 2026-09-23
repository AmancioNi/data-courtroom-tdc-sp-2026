# Executado no compute AIDP; o arquivo de origem fica no volume do caso.
import json
from pyspark.sql import functions as F
# Endereço OCI do mesmo volume, retornado pela API AIDP.
source_uri = "REPLACE_WITH_YOUR_CSV_URI"
assert not source_uri.startswith("REPLACE_"), "Configure o URI do CSV da sua conta antes de executar"
raw = spark.read.option('header', True).csv(source_uri)
raw = raw.withColumn('valor', F.col('valor').cast('decimal(12,2)'))
assert raw.count() > 0, 'A fonte não retornou registros'
raw.write.format('delta').mode('overwrite').saveAsTable('default.tdc_courtroom.dc_pagamentos_bronze')
print('COURTROOM_RESULT:' + json.dumps({'stage':'bronze','rows':raw.count(),'source':'/Volumes/default/tdc_courtroom/evidencias/pagamentos_bronze.csv'}))
