const fs = require('fs');
let code = fs.readFileSync('src/lib/constants.ts', 'utf8');

const profiles = ['mecanico', 'abogado', 'psicologo', 'odontologo', 'arquitecto', 'estetica'];
const imagesMap = {
  mecanico: ['/images/profiles/mecanico/hero.png', '/images/profiles/mecanico/about.png', '/images/profiles/mecanico/detail_1.png'],
  abogado: ['/images/profiles/abogado/hero.png', '/images/profiles/abogado/about.png'],
  psicologo: ['/images/profiles/psicologo/about_hq.png'],
  odontologo: ['/images/profiles/odontologo/hero_3d.png'],
  arquitecto: ['/images/profiles/arquitecto/hero_hq.png', '/images/profiles/arquitecto/about_hq.png'],
  estetica: ['/images/profiles/estetica/about_hq.png']
};

let lines = code.split('\n');
let currentProfile = '';

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Detect profile by checking for key: { pattern
  for (const profile of profiles) {
    if (line.trim() === `${profile}: {`) {
      currentProfile = profile;
    }
  }

  // Replace Unsplash links with rotation of local profile images
  if (line.includes('images.unsplash.com') && currentProfile) {
    const localImages = imagesMap[currentProfile];
    // Pick an image sequentially based on line index to vary them
    const substitute = localImages[i % localImages.length];
    
    // Replace the URL keeping the quotes
    lines[i] = line.replace(/"https:\/\/images\.unsplash\.com[^"]+"/, `"${substitute}"`);
  }
}

fs.writeFileSync('src/lib/constants.ts', lines.join('\n'));
console.log('Unsplash URLs successfully replaced with local alternatives in constants.ts');
