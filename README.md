# NftCreator-10000

Automated NFT PFP image generator.  
Create thousands of unique images by combining different main designs and backgrounds, ready for NFT collections on platforms like OpenSea.

---

Generador automatizado de imágenes NFT tipo PFP (Profile Picture).  
Crea miles de imágenes únicas combinando diferentes diseños principales y fondos, ideal para colecciones NFT compatibles con plataformas como OpenSea.

---

## Features / Características

- Generate images by combining main design layers and backgrounds.
- Compatible with PNG and JPG files.
- Modular structure for easily adding more styles or backgrounds.
- Automatically generates standard metadata files for each image.

- Genera imágenes combinando capas de diseño principal y fondos.
- Compatible con archivos PNG y JPG.
- Estructura modular para añadir más estilos o fondos fácilmente.
- Genera también los archivos metadata estándar para cada imagen.

---

## Folder Structure / Estructura de carpetas

```
layers/
  MainDesigns/
    main_silver.png
    main_green.png
    main_cyan.png
    ...
  backgrounds/
    background1.jpg
    background2.png
    ...
output/
  images/
  metadata/
scripts/
  generate_nfts.py
```

---

## Usage / Uso

1. Place your main design images in `layers/MainDesigns/` (e.g., `main_silver.png`).
2. Place your backgrounds in `layers/backgrounds/`.
3. Run the main script:
   ```bash
   python scripts/generate_nfts.py
   ```
4. The generated images and metadata will be saved in the `output/` folder.

1. Coloca tus imágenes base en `layers/MainDesigns/` (por ejemplo, `main_silver.png`).
2. Coloca tus fondos en `layers/backgrounds/`.
3. Ejecuta el script principal:
   ```bash
   python scripts/generate_nfts.py
   ```
4. Las imágenes y metadata se guardarán en la carpeta `output/`.

---

## Customization / Personalización

- Add more designs and backgrounds by simply placing more files in the corresponding folders.
- Modify the script to generate additional combinations or attributes as needed.

- Puedes añadir más diseños y fondos simplemente agregando más archivos a las carpetas correspondientes.
- Modifica el script para generar más combinaciones o atributos si lo necesitas.

---

**Personal NFT generation project designed to make creating large PFP collections simple and fast.**

**Proyecto personal de generación NFT, pensado para facilitar la creación de grandes colecciones PFP de manera sencilla y rápida.**
