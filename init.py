import json
from pathlib import Path

disney = Path('disney')
pairs = [
    [(disney / 'output' / jpg.name).with_suffix('.d.jpg'), jpg]
    for jpg in (disney / 'input').glob('*.jpg')]

pairs = [[str(o), str(i)] for o, i in pairs if o.exists() and i.exists()]

with open('data.js', 'w') as f:
    f.write('pairs = ' + json.dumps(pairs))
