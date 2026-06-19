import fs from 'node:fs';
import path from 'node:path';

async function globalSetup() {
  const outputDir = path.join(process.cwd(), 'test-results');
  fs.mkdirSync(outputDir, { recursive: true });
  if (/^(1|true|on|yes)$/i.test(process.env.PRESERVE_DIAGNOSTICS || '')) return;
  for (const file of ['diagnostics.jsonl', 'diagnostic-report.md', 'diagnostic-report.html', 'results.json']) {
    const target = path.join(outputDir, file);
    if (fs.existsSync(target)) fs.rmSync(target);
  }
}

export default globalSetup;
