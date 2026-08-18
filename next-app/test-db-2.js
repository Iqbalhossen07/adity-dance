const mariadb = require('mariadb');
async function run() {
  try {
    const conn = await mariadb.createConnection({
      host: '127.0.0.1',
      port: 8889,
      user: 'root',
      password: 'root',
      database: 'adity',
      connectTimeout: 5000
    });
    console.log("Connected!");
    await conn.end();
  } catch (err) {
    console.error("Error:", err);
  }
}
run();
