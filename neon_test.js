
const { Pool } = require('@neondatabase/serverless');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function test() {
  const r1 = await pool.query('SELECT $1 as value', [42]);
  console.log('query with params:', JSON.stringify(r1.rows));
  await pool.end();
}
test().catch(console.error);
