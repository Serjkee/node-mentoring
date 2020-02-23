const { createLogger, format, transports } = require('winston');
const expressWinston = require('express-winston');

export const methodLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({
      stack: true
    }),
    format.colorize({all: true}),
    format.printf(info => `${info.level}: ${info.methodName} has been called with ${info.methodArgs || 'no args'} --- ${info.timestamp} ${info.message}`)
  ),
  transports: [
    new transports.Console()
  ]
})

export const httpLogger = expressWinston.logger({
  transports: [
    new transports.Console()
  ],
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.colorize(),
    format.printf(info => `${info.level}: ${info.message}--- ${info.timestamp}`)
  ),
  msg: (req, res) => `HTTP ${res.statusCode} ${req.method} ${req.url}`,
  colorize: true,
})

export const httpErrorLogger = expressWinston.errorLogger({
  transports: [
    new transports.Console()
  ],
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.colorize(),
    format.printf(error => `${error.level}: ${error.message}--- ${error.timestamp}`)
  ),
  msg: (req, res) => `HTTP ${res.statusCode} ${req.method} ${req.url}`,
  colorize: true,
});

export const handleProcessError = createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({
      stack: true
    }),
    format.colorize({ all: true }),
    format.printf(err => `${err.level}: ${err.message} --- ${err.timestamp}`)
  ),
  transports: [
    new transports.Console()
  ]
})