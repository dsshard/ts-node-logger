# ts-node-logger

To create 

**1. Install**

```shell
npm install @coxy/ts-node-logger
```

**Create a logger** (ES6 module syntax)

```javascript
import { logger } from '@coxy/ts-node-logger';
````
... or using CommonJS syntax:

```javascript
const { logger } = require('@coxy/ts-node-logger').Logger;
```
```javascript
logger.log('some message');
logger.info('some message');
logger.warn('some message');
logger.error('some message');
```
