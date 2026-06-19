export const config = {
  baseURL: process.env.BASE_URL || 'https://4s.ruatrez.com',
  adminEmail: process.env.ADMIN_EMAIL || 'hello@ruatrez.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123',
  operationalEmail: process.env.OPERATIONAL_EMAIL || '',
  operationalPassword: process.env.OPERATIONAL_PASSWORD || '',
  runId: process.env.RUN_ID || new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14)
};
