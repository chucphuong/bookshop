// const mysql = require("mysql2/promise");

// class MySQL {
//   static pool = null;

//   static connect = async (config) => {
//     if (this.pool) return this.pool;

//     this.pool = mysql.createPool({
//       host: config.host,
//       user: config.user,
//       password: config.password,
//       database: config.database,
//       waitForConnections: true,
//       connectionLimit: 10,
//       queueLimit: 0,
//     });

//     // Kiểm tra thử kết nối
//     const connection = await this.pool.getConnection();
//     connection.release();
//     return this.pool;
//   };
// }

// module.exports = MySQL;
