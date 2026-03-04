import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images';
const outputDir = 'public/images';

async function convertToWebp() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
            const inputPath = path.join(inputDir, file);
            const outputFileName = path.parse(file).name + '.webp';
            const outputPath = path.join(outputDir, outputFileName);

            // Check if webp version already exists
            if (!fs.existsSync(outputPath)) {
                console.log(`Converting ${file} to webp...`);
                try {
                    await sharp(inputPath)
                        .webp({ quality: 80 })
                        .toFile(outputPath);
                    console.log(`✅ Success: ${outputFileName}`);
                } catch (err) {
                    console.error(`❌ Error converting ${file}:`, err);
                }
            } else {
                console.log(`⏭ Skipping ${file}, ${outputFileName} already exists.`);
            }
        }
    }
}

convertToWebp().then(() => console.log('All images processed.'));
