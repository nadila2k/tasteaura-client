const fs = require('fs');
const path = require('path');

const walkSync = (dir, callback) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      callback(filepath);
    }
  });
};

const replaceColors = (content) => {
  let newContent = content
    // Replace old css variables
    .replace(/var\(--color-primary\)/g, 'var(--primary)')
    .replace(/var\(--color-primary-dark\)/g, 'var(--primary-hover)')
    .replace(/var\(--color-text\)/g, 'var(--text)')
    .replace(/var\(--color-heading-main\)/g, 'var(--text)')
    .replace(/var\(--color-heading-sub\)/g, 'var(--text-muted)')
    .replace(/var\(--color-muted\)/g, 'var(--text-muted)')
    .replace(/var\(--color-section\)/g, 'var(--bg-soft)')
    .replace(/var\(--color-surface\)/g, 'var(--surface)')
    .replace(/var\(--color-bg\)/g, 'var(--bg)')
    .replace(/var\(--color-link\)/g, 'var(--accent)')
    .replace(/var\(--color-link-hover\)/g, 'var(--primary)')
    
    // Replace hardcoded Hex colors in CSS
    .replace(/:\s*#(ffffff|fff)\b/gi, ': var(--surface)')
    .replace(/:\s*#(000000|000|111111|111|222|333|111827|1f2937)\b/gi, ': var(--text)')
    .replace(/:\s*#(555|666|888|ccc|6b7280)\b/gi, ': var(--text-muted)')
    .replace(/:\s*#(f59e0b|f58220|ff8c00|fbbf24|d97706)\b/gi, ': var(--accent)')
    .replace(/:\s*#(ef4444|dc2626|e53e3e|c53030|ff4d4f)\b/gi, ': var(--danger)')
    .replace(/:\s*#(10b981|047857)\b/gi, ': var(--success)')
    .replace(/:\s*#(3b82f6|00bfff|009acd|3182ce|2b6cb0)\b/gi, ': var(--primary)')
    .replace(/:\s*#(4f46e5|6366f1)\b/gi, ': var(--primary)')
    .replace(/:\s*#faecb4\b/gi, ': var(--bg-soft)')
    .replace(/:\s*#6e5004\b/gi, ': var(--primary)')
    .replace(/:\s*#fcd34d\b/gi, ': var(--warning)')
    .replace(/:\s*#eb6d2f\b/gi, ': var(--accent)');

  return newContent;
};

['app', 'components'].forEach(dir => {
  if (fs.existsSync(dir)) {
    walkSync(dir, (filepath) => {
      if (filepath.endsWith('.module.css') || filepath.endsWith('.css')) {
        // Skip globals.css as we will handle it separately
        if (filepath === 'app/globals.css' || filepath === 'app/globals.css') return;
        
        const content = fs.readFileSync(filepath, 'utf8');
        const newContent = replaceColors(content);
        if (content !== newContent) {
          fs.writeFileSync(filepath, newContent, 'utf8');
          console.log(`Updated ${filepath}`);
        }
      }
    });
  }
});
