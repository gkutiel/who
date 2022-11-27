import json
import re
from pathlib import Path

import requests
from tqdm import tqdm


def imgs2data():
    imgs = Path('imgs')
    pairs = [
        [img.with_suffix('.jpeg'), img]
        for img in imgs.rglob('*.jpg')]

    for i, o in pairs:
        assert i.exists() and o.exists()

    pairs = [[str(o), str(i)] for o, i in pairs]

    with open('data.js', 'w') as f:
        f.write('pairs = ' + json.dumps(pairs))


if __name__ == '__main__':
    imgs2data()
