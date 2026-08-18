const dbUrl = new URL("mysql://root:root@127.0.0.1:8889/adity");
console.log({
  host: dbUrl.hostname,
  port: parseInt(dbUrl.port || "3306", 10),
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.slice(1)
});
