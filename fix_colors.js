const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    if (file === 'ThemeToggle.tsx') continue;

    const filePath = path.join(targetDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Skip lines that have a gradient background which naturally needs white text
        const hasGradient = /bg-gradient|from-\[|from-(sky|amber|blue|purple|emerald)|var\(--color-accent\)/.test(line);

        if (!hasGradient) {
            line = line.replace(/text-white/g, 'text-[var(--color-foreground)]');
        }

        // Always upgrade faint white backgrounds to semantic surface variables
        line = line.replace(/bg-white\/5/g, 'bg-[var(--color-surface-light)]');
        line = line.replace(/bg-white\/10/g, 'bg-[var(--color-surface-light)]/80');
        line = line.replace(/bg-white\/20/g, 'bg-[var(--color-border)]/50');
        line = line.replace(/border-white\/5/g, 'border-[var(--color-border)]');
        line = line.replace(/border-white\/10/g, 'border-[var(--color-border)]');
        line = line.replace(/border-white\/20/g, 'border-[var(--color-border)]');

        lines[i] = line;
    }

    fs.writeFileSync(filePath, lines.join('\n'));
}

console.log('Colors fixed in all components!');
