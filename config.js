module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'noteSecret!'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'WiZmuTSt3O',
        password: process.env.MYSQL_PASS || 'WnUr7FDjix',
        database: process.env.MYSQL_DB || 'WiZmuTSt3O',
    }
}

