module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'noteSecret!'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'WiZmuTSt3O',
        password: process.env.MYSQL_PASS || 'WnUr7FDjix',
        database: process.env.MYSQL_DB || 'WiZmuTSt3O',
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-14631.c228.us-central1-1.gce.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '14631',
        password: process.env.REDIS_PASSWORD || 'c0obFsl7FFONg3PVWyEIYMt4TvC70Zbd'
    }
}

