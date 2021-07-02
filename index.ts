// const {Logger} = require('@coxy/ts-node-logger');
import {Logger} from '@coxy/ts-node-logger';
// const { Logger } = require('@coxy/ts-node-logger');
const logger = new Logger({name: 'abc', length: 6});
console.log(Logger)
logger.log(123)
// logger.info(123)
// logger.warn(123)
// logger.error(123)