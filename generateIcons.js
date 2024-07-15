const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

// svg src folder
const iconsDir = path.join(__dirname, 'src/components/ui/icons');

// src to create index.tsx
const outputFile = path.join(__dirname, 'src/components/ui/icons/index.tsx');

// Rest Size Icon
fs.readdir(iconsDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const filePath = path.join(iconsDir, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        const result = optimize(data, {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeDimensions: false, // Keep removeDimensions in preset-default
                },
              },
            },
            'removeDimensions', // After add removeDimensions once again.
            {
              name: 'removeAttrs',
              params: {
                attrs: '(stroke)', // Remove stroke attribute
              },
            },
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [{ stroke: 'inherit' }],
              },
            },
          ],
        });

        fs.writeFile(filePath, result.data, 'utf8', (err) => {
          if (err) throw err;
          console.log(`${file} has been updated`);
        });
      });
    }
  });
});

// Rename Icon
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Unable to scan directory:', err);
    return;
  }

  files.forEach((file) => {
    const oldPath = path.join(iconsDir, file);

    // Check is SVG ?
    if (path.extname(file) === '.svg') {
      // Change name file: space to '-'
      const newFileName = file.replace(/\s+/g, '-');
      const newPath = path.join(iconsDir, newFileName);

      // Change file name
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Error renaming file:', err);
        } else {
          console.log(`Renamed: ${file} -> ${newFileName}`);
        }
      });
    }
  });
});

// file name to camelCase
const toCamelCase = (str) => {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase()).replace(/^\w/, (c) => c.toUpperCase());
};

// Read svg in folder
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    return console.error('Can not read folder: ', err);
  }

  // Filter file have .svg
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  // create content for index.tsx
  let imports = svgFiles
    .map((file) => {
      const baseName = path.basename(file, '.svg');
      const componentName = `Icon${toCamelCase(baseName)}`;
      return `import { ReactComponent as ${componentName} } from '@/components/ui/icons/${file}';`;
    })
    .join('\n');

  let exports = svgFiles
    .map((file) => {
      const baseName = path.basename(file, '.svg');
      const componentName = `Icon${toCamelCase(baseName)}`;
      return `  ${componentName},`;
    })
    .join('\n');

  const content = `${imports}\n\nexport {\n${exports}\n}; \n\n export const listIcons:any = {\n${exports}\n};`;

  // Write into index.tsx file.
  fs.writeFile(outputFile, content, (err) => {
    if (err) {
      return console.error('Can not write: ', err);
    }
    console.log('File index.ts create success.');
  });
});
