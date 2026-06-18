import fs from 'node:fs';
import path from 'node:path';

async function globalSetup() {
  const outputDir = path.join(process.cwd(), 'test-results');
  fs.mkdirSync(outputDir, { recursive: true });
  for (const file of ['diagnostics.jsonl', 'diagnostic-report.md', 'diagnostic-report.html', 'results.json', 'case-results.jsonl']) {
    const target = path.join(outputDir, file);
    if (fs.existsSync(target)) fs.rmSync(target);
  }
}

export default globalSetup;
