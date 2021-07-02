# ts-node-logger

## Quickstart

To create a random UUID...

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
const { v4: uuidv4 } = require('uuid');
```
```javascript
logger.log('some message');
logger.info('some message');
logger.warn('some message');
logger.error('some message');
```
