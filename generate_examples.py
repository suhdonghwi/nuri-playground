from os import listdir
from os.path import isfile, join
import json

examplesPath = "./assets/examples"
files = [f for f in listdir(examplesPath) if isfile(join(examplesPath, f))]

result = []

for filename in files:
    f = open(join(examplesPath, filename), 'r')
    content = ''.join(f.readlines())
    result.append({'value': content, 'label': filename})
    f.close()


print (result)
with open("./src/examples.json", 'w') as f:
    f.write(json.dumps(result, ensure_ascii=False))
