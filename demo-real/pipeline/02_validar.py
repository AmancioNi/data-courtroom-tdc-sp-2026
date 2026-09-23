import json
from pyspark.sql import functions as F
raw = spark.table('default.tdc_courtroom.dc_pagamentos_bronze')
valid = raw.filter(F.col('tentativa_id').isNotNull() & (F.col('valor') > 0) & F.col('metodo').isin('cartao','pix'))
silver = valid.dropDuplicates(['tentativa_id'])
assert silver.count() == 2000, 'Contagem de tentativas válidas diferente do manifesto'
silver.write.format('delta').mode('overwrite').saveAsTable('default.tdc_courtroom.dc_pagamentos_silver')
print('COURTROOM_RESULT:' + json.dumps({'stage':'silver','received':raw.count(),'invalid':raw.count()-valid.count(),'duplicates':valid.count()-silver.count(),'rows':silver.count()}))
