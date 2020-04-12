# NodeJS_Relational-Database_SQL
Project developed to strengthen knowledge in NodeJS, improve the architecture and scalability of the project.

## Express
```
$ npm i express
```

## Body-parser
```
$ npm i body-parser
```

## Nanoid - Create id
```
$ npm i nanoid
```

## swagger-ui-express - Documentation
```
$ npm i swagger-ui-express
```

## jsonwebtoken - Create tokens
```
$ npm i jsonwebtoken
```

## bcrypt - Encrypt password
```
$ npm i bcrypt
```

# mysql - Connect database
```
$ npm i mysql
```

# request - Remote database
```
$ npm i request
```

## PM2
Advanced, production process manager for Node.js.
```
$ npm i pm2 -g
```
Features:
* Behavior configuration
* Source map support
* Container integration
* Watch & reload
* Log management
* Monitoring
* Module system
* Max memory reload
* Cluster mode
* Hot reload
* Development workflow
* Startup scripts
* Deplotment workflow
* PAAS compatible
* Keymetrics monitoring
* API

Commands:
```
$ pm2 logs
```
```
$ pm2 status
```
```
$ pm2 start api/index.js
```
```
$ pm2 start mysql/index.js
```
```
$ pm2 start post/index.js
```
```
$ pm2 logs 0
```
```
$ pm2 stop 0
```
```
$ pm2 start mysql/index.js --name api-mysql
```
```
$ pm2 restart 3
```