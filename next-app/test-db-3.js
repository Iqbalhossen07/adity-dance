const mariadb = require('mariadb');
async function run() {
  try {
    const pool = mariadb.createPool({
      host: '127.0.0.1',
      port: 8889,
      user: 'root',
      password: 'root',
      database: 'adity',
      connectionLimit: 5
    });
    const conn = await pool.getConnection();
    console.log("Pool connected!");
    conn.release();
    await pool.end();
  } catch (err) {
    console.error("Pool Error:", err);
  }
}
run();
