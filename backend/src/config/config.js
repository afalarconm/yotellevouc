require('dotenv').config();

const config = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE || 'database_test',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE || 'database_production',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
    }
}

module.exports = config;
