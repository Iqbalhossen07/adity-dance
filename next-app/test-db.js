const mariadb = require('mariadb');
const pool = mariadb.createPool("mariadb://root:root@127.0.0.1:8889/adity");
pool.getConnection().then(conn => {
  console.log("Connected!");
  conn.release();
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
