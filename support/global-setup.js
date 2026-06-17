const fs = require('node:fs');
const path = require('node:path');

async function globalSetup() {
  const outputDir = path.join(process.cwd(), 'test-results');
  fs.mkdirSync(outputDir, { recursive: true });
  for (const file of ['diagnostics.jsonl', 'diagnostic-report.md', 'results.json']) {
    const target = path.join(outputDir, file);
    if (fs.existsSync(target)) fs.rmSync(target);
  }
}

module.exports = globalSetup;
