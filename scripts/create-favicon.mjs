import sharp from 'sharp';
import fs from 'fs';

async function createFavicon() {
    const inputPath = 'public/images/logo_gb.png';
    const buffer = fs.readFileSync(inputPath);

    // Safe crop: 300x300 from top-left
    await sharp(buffer)
        .extract({ left: 0, top: 0, width: 300, height: 300 })
        .trim()
        .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile('public/favicon.png');

    await sharp(buffer)
        .extract({ left: 0, top: 0, width: 300, height: 300 })
        .trim()
        .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile('public/apple-touch-icon.png');

    console.log('Success (300x300 source)!');
}

createFavicon().catch(console.error);
