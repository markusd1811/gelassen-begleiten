import sharp from 'sharp';
import fs from 'fs';

async function createFavicon() {
    const inputPath = 'public/images/logo_gb.png';
    const buffer = fs.readFileSync(inputPath);
    const image = sharp(buffer);
    const metadata = await image.metadata();

    // Crop even tighter to avoid the text
    const w = Math.min(330, metadata.width);
    const h = Math.min(404, metadata.height);

    const cropped = await sharp(buffer)
        .extract({ left: 0, top: 0, width: w, height: h })
        .trim()
        .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile('public/favicon.png');

    await sharp(buffer)
        .extract({ left: 0, top: 0, width: w, height: h })
        .trim()
        .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile('public/apple-touch-icon.png');

    console.log('Success (330px)!');
}

createFavicon().catch(console.error);
