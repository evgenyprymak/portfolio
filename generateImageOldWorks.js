import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public/assets/oldworks');
const outputDir = path.join(process.cwd(), 'src/components');

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Ошибка при чтении директории:', err);
    return;
  }

  const imageNames = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
  
  // Генерируем содержимое для TypeScript
  const tsxContent = `export const ImageNames2: string[] = ${JSON.stringify(imageNames)};`;

  // Сохраняем в src/components/imageNames.tsx
  fs.writeFile(path.join(outputDir, 'ImageNamesOldWorks.tsx'), tsxContent, (err) => {
    if (err) {
      console.error('Ошибка при записи файла:', err);
    } else {
      console.log('Список изображений успешно сгенерирован и сохранен в src/components/ImageNames.tsx!');
    }
  });
});


// portfolio/assets/procedural