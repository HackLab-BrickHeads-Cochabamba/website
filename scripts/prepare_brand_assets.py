"""Export only approved public PNG logos; internal originals stay in resources/."""
from pathlib import Path
import json
import shutil
import struct
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parents[1]
# Explicit allowlist: never glob the private resources directory.
LOGOS = [
 ('square_white.png', 'Logo vertical · claro', 'Composición vertical con el nombre y los cinco personajes. Para fondos oscuros.', 'dark'),
 ('square_dark.png', 'Logo vertical · oscuro', 'Composición vertical con el nombre y los cinco personajes. Para fondos claros.', 'light'),
 ('large_white.png', 'Logo horizontal · claro', 'Personajes a la izquierda y nombre a la derecha. Para fondos oscuros.', 'dark'),
 ('large_dark.png', 'Logo horizontal · oscuro', 'Personajes a la izquierda y nombre a la derecha. Para fondos claros.', 'light'),
 ('large_white_bg.png', 'Logo horizontal · fondo oscuro', 'Versión horizontal con fondo oscuro incorporado.', 'dark'),
 ('letters_white.png', 'Nombre · claro', 'HACKLAB en blanco y BRICK-HEADS en verde. Para fondos oscuros.', 'dark'),
 ('letters_dark.png', 'Nombre · oscuro', 'HACKLAB en oscuro y BRICK-HEADS en verde. Para fondos claros.', 'light'),
 ('letters_dark_bg.png', 'Nombre · fondo oscuro', 'HACKLAB en blanco y BRICK-HEADS en verde, con fondo oscuro incorporado.', 'dark'),
 ('heads_white.png', 'Personajes · claros', 'Los cinco personajes conectados, en blanco. Para fondos oscuros.', 'dark'),
 ('heads_dark.png', 'Personajes · oscuros', 'Los cinco personajes conectados, en oscuro. Para fondos claros.', 'light'),
 ('circle_dark.png', 'Emblema circular · negro', 'Personajes blancos sobre un círculo oscuro con textura.', 'dark'),
 ('circle_green.png', 'Emblema circular · verde', 'Personajes blancos sobre un círculo verde con textura.', 'dark'),
]

def main():
    records = []
    # Validate all inputs before creating any public output.
    for filename, title, description, background in LOGOS:
        source = ROOT / 'resources/Logo HackLab' / filename
        data = source.read_bytes()
        if data[:8] != b'\x89PNG\r\n\x1a\n':
            raise ValueError(f'Not a PNG: {filename}')
        width, height = struct.unpack('>II', data[16:24])
        records.append(dict(filename=filename, title=title, description=description,
                            background=background, image=f'/images/{filename}',
                            width=width, height=height, bytes=len(data)))
    images = ROOT / 'public/images'
    images.mkdir(parents=True, exist_ok=True)
    downloads = ROOT / 'public/downloads'
    downloads.mkdir(parents=True, exist_ok=True)
    for record in records:
        shutil.copyfile(ROOT / 'resources/Logo HackLab' / record['filename'], images / record['filename'])
    with ZipFile(downloads / 'hacklab-brand-pack.zip', 'w', ZIP_DEFLATED) as archive:
        for record in records:
            archive.write(images / record['filename'], 'hacklab-logos/' + record['filename'])
    (ROOT / 'src/data/brand-assets.json').write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    print(f'Exported {len(records)} public logos and ZIP. Internal resources excluded.')

if __name__ == '__main__':
    main()
