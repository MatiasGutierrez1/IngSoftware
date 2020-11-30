module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "181097",
  DB: "creandolodb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
