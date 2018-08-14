module.exports = {
    development: {
    url: 'postgres://postgres:password@localhost:5432/angulafo',
    dialect: 'postgres'
  },
    production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    test: {
    url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/angulafo_test',
    dialect: 'postgres'
  }
};

