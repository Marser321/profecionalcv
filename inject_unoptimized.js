const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<Image')) {
        // Simple string replacement: replace <Image followed by space/newline with <Image unoptimized
        const newContent = content.replace(/<Image(\s+)/g, '<Image unoptimized$1');
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent);
          console.log('Updated:', fullPath);
        }
      }
    }
  }
}

processDir('src/components');
processDir('src/app');
