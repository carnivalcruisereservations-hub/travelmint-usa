const fs = require('fs');
let c = fs.readFileSync('src/components/Contact.tsx', 'utf8');
c = c.replace('<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">', '<div className="flex justify-center">');
c = c.replace('<div className="lg:col-span-7 flex flex-col justify-center">', '<div className="w-full max-w-3xl flex flex-col justify-center">');
let lines = c.split(/\r?\n/);
let start = lines.findIndex(l => l.includes('{/* Right Column: Contact Cards & Dark Map */}'));
if(start !== -1) {
  lines.splice(start, 85);
}
fs.writeFileSync('src/components/Contact.tsx', lines.join('\n'));
