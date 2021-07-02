# ts-node-logger

**1. Install**

```shell
npm install @coxy/ts-node-logger
```

**2. Usage**
```javascript
const { Logger } = require('@coxy/ts-node-logger');

const logger = new Logger;

logger.log('some message');
logger.info('some message');
logger.warn('some message');
logger.error('some message');
```
